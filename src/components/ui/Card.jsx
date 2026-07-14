import { forwardRef } from "react";
import { motion } from "framer-motion";

const Card = forwardRef(({ children, className = "", hover = true, as = "div", glass = false, gold = false, ...props }, ref) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      ref={ref}
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
        glass
          ? "bg-[rgba(255,255,255,0.58)] dark:bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border-white/35 dark:border-white/[0.06]"
          : gold
            ? "bg-white dark:bg-[#1a1a1a] border-[#C9A15A]/30 dark:border-[#C9A15A]/20"
            : "bg-white dark:bg-[#1a1a1a] border-gray-100 dark:border-white/[0.06]"
      } ${
        hover
          ? glass
            ? "hover:shadow-[0_20px_40px_-10px_rgba(214,179,106,0.15)] hover:border-[#C9A15A]/40"
            : gold
              ? "hover:shadow-[0_20px_40px_-10px_rgba(214,179,106,0.3)] hover:border-[#C9A15A]"
              : "hover:shadow-[0_20px_40px_-10px_rgba(214,179,106,0.15)] hover:border-[#C9A15A]/40"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
});

Card.displayName = "Card";
export default Card;
