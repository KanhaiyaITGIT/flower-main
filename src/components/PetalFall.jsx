import React, { useMemo } from "react";

const PetalSVG = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 30 40" fill="none" aria-hidden="true">
    <path
      d="M15 2 C15 2, 3 12, 3 24 C3 34, 15 38, 15 38 C15 38, 27 34, 27 24 C27 12, 15 2, 15 2Z"
      fill={color}
      opacity="0.6"
    />
  </svg>
);

const COLORS = ["#D6537A", "#C9A15A", "#14301F", "#e8a0b8", "#f0d5a0"];

const PetalFall = ({ count = 15 }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 12,
        size: 8 + Math.random() * 16,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
      })),
    [count],
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 9999 }} aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="pf-petal"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: "-40px",
            width: p.size,
            height: p.size * 1.33,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
            willChange: "transform, opacity",
          }}
        >
          <PetalSVG color={p.color} size={p.size} />
        </div>
      ))}
    </div>
  );
};

export default PetalFall;
