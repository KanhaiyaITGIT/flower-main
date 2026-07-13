import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({ target, suffix = "", duration = 1600, threshold = 0.4 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = target % 1 !== 0;
          const steps = 55;
          const stepTime = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const p = step / steps;
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(isDecimal ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
            if (step >= steps) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, threshold]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
