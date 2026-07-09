import { useState, useEffect, useRef } from "react";

export default function LazyImage({ src, alt, className = "", rootMargin = "200px" }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={imgRef} className="w-full h-full relative overflow-hidden">
      {!loaded && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-rose-50 via-pink-100 to-rose-50 animate-pulse"
          aria-hidden="true"
        />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
