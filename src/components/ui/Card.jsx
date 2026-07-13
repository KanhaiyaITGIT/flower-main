import { forwardRef } from "react";
import { motion } from "framer-motion";

const Card = forwardRef(({ children, className = "", hover = true, as = "div", ...props }, ref) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      ref={ref}
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 ${
        hover ? "hover:shadow-[0_20px_40px_-10px_rgba(214,83,122,0.25)] hover:border-[var(--color-gold)]/40" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
});

Card.displayName = "Card";
export default Card;
