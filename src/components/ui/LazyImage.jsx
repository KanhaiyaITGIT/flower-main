import { useState, useEffect, useRef } from "react";
import { RESP_BY_ORIGINAL } from "../../utils/generatedImages";

const DEFAULT_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

export default function LazyImage({
  src,
  alt,
  className = "",
  rootMargin = "200px",
  priority = false,
  shimmer = true,
  sizes = DEFAULT_SIZES,
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setInView(true);
      return undefined;
    }

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
  }, [priority, rootMargin]);

  // Transparently upgrade a known local asset to a responsive <picture>
  // (AVIF/WebP sources + srcset) so the browser downloads only what it needs.
  const resp = priority ? null : RESP_BY_ORIGINAL[src];

  const placeholder = !loaded && shimmer && (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBF6EF] via-[#f7e9ec] to-[#fbf3e8]" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer" />
    </div>
  );

  return (
    <div ref={imgRef} className="w-full h-full relative overflow-hidden">
      {placeholder}
      {inView && (
        resp ? (
          <picture>
            <source type="image/avif" srcSet={resp.avif} sizes={sizes} />
            <source type="image/webp" srcSet={resp.webp} sizes={sizes} />
            <img
              src={resp.fallback}
              srcSet={resp.webp}
              sizes={sizes}
              alt={alt}
              className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
              onLoad={() => setLoaded(true)}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
            />
          </picture>
        ) : (
          <img
            src={src}
            alt={alt}
            className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
            onLoad={() => setLoaded(true)}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
          />
        )
      )}
    </div>
  );
}
