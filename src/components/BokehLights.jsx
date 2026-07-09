import React from "react";

const defaultSpots = [
  { color: "from-rose-300/30 to-transparent", size: 320, top: "-10%", left: "-6%", anim: "bk-drift1", delay: 0, duration: 30 },
  { color: "from-amber-200/25 to-transparent", size: 260, top: "50%", right: "-8%", anim: "bk-drift2", delay: 2, duration: 35 },
  { color: "from-purple-300/20 to-transparent", size: 280, top: "-5%", right: "15%", anim: "bk-drift3", delay: 4, duration: 28 },
  { color: "from-pink-300/25 to-transparent", size: 340, bottom: "-12%", left: "10%", anim: "bk-drift4", delay: 1, duration: 32 },
  { color: "from-rose-200/20 to-transparent", size: 200, top: "35%", left: "50%", anim: "bk-float", delay: 3, duration: 25 },
  { color: "from-violet-300/15 to-transparent", size: 240, bottom: "5%", right: "5%", anim: "bk-drift2", delay: 5, duration: 30 },
];

const BokehLights = ({ spots = defaultSpots, zIndex = 0 }) => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    style={{ zIndex }}
    aria-hidden="true"
  >
    {spots.map((s, i) => (
      <div
        key={i}
        className={s.anim}
        style={{
          position: "absolute",
          width: s.size,
          height: s.size,
          top: s.top,
          bottom: s.bottom,
          left: s.left,
          right: s.right,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${s.color})`,
          filter: "blur(80px)",
          opacity: 0.8,
          willChange: "transform",
          animationDuration: `${s.duration}s`,
          animationDelay: `${s.delay}s`,
        }}
      />
    ))}
  </div>
);

export default BokehLights;
