import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    const onOver = (e) => {
      if (cursorRef.current) {
        const target = e.target;
        const isClickable = target.matches('a, button, input, [role="button"], [tabindex]:not([tabindex="-1"]), label, select, textarea');
        if (isClickable || target.closest('a, button, [role="button"]')) {
          cursorRef.current.classList.add("hovering");
        } else {
          cursorRef.current.classList.remove("hovering");
        }
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-follower" />;
}