import React from "react";

/* ─── 5-Petal Flower ─── */
const Petal5 = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    {[0, 72, 144, 216, 288].map((a) => (
      <ellipse key={a} cx="50" cy="25" rx="11" ry="22" fill={color} transform={`rotate(${a} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="7" fill={color === "#C9A15A" ? "#f0d5a0" : "#ffffff"} opacity="0.9" />
  </svg>
);

/* ─── 6-Petal Flower ─── */
const Petal6 = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <ellipse key={a} cx="50" cy="25" rx="10" ry="20" fill={color} transform={`rotate(${a} 50 50)`} />
    ))}
  </svg>
);

/* ─── Leaf ─── */
const LeafSVG = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 60 80" fill="none" aria-hidden="true">
    <path
      d="M30 2 C30 2, 6 20, 6 42 C6 64, 30 78, 30 78 C30 78, 54 64, 54 42 C54 20, 30 2, 30 2Z"
      fill={color}
      opacity="0.7"
    />
    <path d="M30 2 L30 70" stroke={color === "#C9A15A" ? "#a07840" : "#ffffff"} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

/* ─── Single Teardrop Petal ─── */
const SinglePetal = ({ color, size }) => (
  <svg width={size} height={size * 1.6} viewBox="0 0 40 70" fill="none" aria-hidden="true">
    <path d="M20 2 C20 2, 4 16, 4 35 C4 54, 20 68, 20 68 C20 68, 36 54, 36 35 C36 16, 20 2, 20 2Z" fill={color} opacity="0.8" />
  </svg>
);

/* ─── Elegant Rose Bloom ─── */
const RoseSVG = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    {/* Outer petals */}
    <ellipse cx="50" cy="30" rx="22" ry="28" fill={color} opacity="0.35" transform="rotate(-20 50 50)" />
    <ellipse cx="50" cy="30" rx="22" ry="28" fill={color} opacity="0.35" transform="rotate(20 50 50)" />
    <ellipse cx="50" cy="30" rx="22" ry="28" fill={color} opacity="0.35" transform="rotate(-60 50 50)" />
    <ellipse cx="50" cy="30" rx="22" ry="28" fill={color} opacity="0.35" transform="rotate(60 50 50)" />
    {/* Middle petals */}
    <ellipse cx="50" cy="35" rx="16" ry="20" fill={color} opacity="0.6" transform="rotate(-10 50 50)" />
    <ellipse cx="50" cy="35" rx="16" ry="20" fill={color} opacity="0.6" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="35" rx="16" ry="20" fill={color} opacity="0.6" transform="rotate(-45 50 50)" />
    {/* Inner spiral */}
    <ellipse cx="50" cy="40" rx="10" ry="14" fill={color} opacity="0.85" transform="rotate(15 50 50)" />
    <ellipse cx="50" cy="40" rx="8" ry="12" fill={color} opacity="0.9" transform="rotate(-25 50 50)" />
    {/* Center bud */}
    <circle cx="50" cy="48" r="6" fill={color === "#C9A15A" ? "#f0d5a0" : "#ffffff"} opacity="0.95" />
    <circle cx="50" cy="48" r="3" fill={color} />
  </svg>
);

/* ─── Lotus / Water Lily ─── */
const LotusSVG = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    {/* Pointed petals */}
    <path d="M50 55 C30 40, 20 15, 50 2 C80 15, 70 40, 50 55Z" fill={color} opacity="0.3" />
    <path d="M50 55 C20 45, 5 25, 20 10 C35 0, 50 20, 50 55Z" fill={color} opacity="0.4" />
    <path d="M50 55 C80 45, 95 25, 80 10 C65 0, 50 20, 50 55Z" fill={color} opacity="0.4" />
    <path d="M50 55 C35 42, 28 22, 42 8 C48 4, 50 18, 50 55Z" fill={color} opacity="0.6" />
    <path d="M50 55 C65 42, 72 22, 58 8 C52 4, 50 18, 50 55Z" fill={color} opacity="0.6" />
    {/* Center */}
    <circle cx="50" cy="50" r="8" fill={color === "#C9A15A" ? "#f0d5a0" : "#ffffff"} opacity="0.9" />
    <circle cx="50" cy="50" r="4" fill={color} opacity="0.7" />
  </svg>
);

const SVGS = { petal5: Petal5, petal6: Petal6, leaf: LeafSVG, petal: SinglePetal, rose: RoseSVG, lotus: LotusSVG };

const defaultColors = {
  petal5: "#D6537A", petal6: "#C9A15A", leaf: "#14301F",
  petal: "#D6537A", rose: "#D6537A", lotus: "#C9A15A",
};

const animClasses = {
  sway1: "fd-sway1",
  sway2: "fd-sway2",
  sway3: "fd-sway3",
  rotate: "fd-rotate",
  bloom: "fd-bloom",
  breathe: "fd-breathe",
  "drift-bloom": "fd-drift-bloom",
};

const FloatingDecoration = ({
  type = "petal5",
  side = "left",
  size = 70,
  opacity = 0.18,
  delay = 0,
  duration = 12,
  color,
  top,
  bottom,
  animation = "sway1",
}) => {
  const Svg = SVGS[type] || Petal5;
  const fillColor = color || defaultColors[type] || "#D6537A";

  const isLeft = side === "left" || side === "left-top" || side === "left-bottom";
  const isRight = side === "right" || side === "right-top" || side === "right-bottom";
  const isCenter = side === "left-center" || side === "right-center";

  const posLeft = isLeft ? "0" : undefined;
  const posRight = isRight ? "0" : undefined;
  const posTop = top ?? (side.includes("top") ? "4%" : isCenter ? "50%" : undefined);
  const posBottom = bottom ?? (side.includes("bottom") ? "4%" : undefined);

  const isPetalType = type === "petal";
  const svgSize = isPetalType ? size * 1.6 : size;
  const svgHeight = isPetalType ? size * 1.6 : (type === "leaf" ? size : size);

  const useBloom = animation === "bloom" || animation === "breathe" || animation === "drift-bloom";

  return (
    <div
      className={animClasses[animation] || "fd-sway1"}
      style={{
        position: "absolute",
        left: posLeft,
        right: posRight,
        top: posTop,
        bottom: posBottom,
        transform: isCenter ? "translateY(-50%)" : "none",
        width: size,
        height: svgHeight,
        opacity,
        pointerEvents: "none",
        zIndex: useBloom ? 2 : 1,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <Svg color={fillColor} size={svgSize} />
    </div>
  );
};

export default FloatingDecoration;
