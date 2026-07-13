import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 shadow-[0_4px_20px_rgba(20,48,31,0.35)] hover:shadow-[0_8px_35px_rgba(20,48,31,0.55)]",
  secondary: "bg-white text-[var(--color-primary)] border-2 border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)] hover:text-white hover:border-transparent hover:shadow-[0_8px_35px_rgba(214,83,122,0.45)]",
  accent: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 shadow-[0_4px_20px_rgba(214,83,122,0.35)] hover:shadow-[0_8px_35px_rgba(214,83,122,0.55)]",
  ghost: "bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md",
  gold: "bg-gradient-to-r from-[var(--color-gold)] to-[#b08b49] hover:from-[#b08b49] hover:to-[var(--color-gold)] text-black shadow-[0_10px_30px_rgba(201,161,90,0.2)] hover:shadow-[0_15px_40px_rgba(201,161,90,0.45)]",
  outline: "border border-gray-200 text-gray-700 hover:text-[var(--color-accent)] hover:border-rose-300 bg-white",
};

const sizes = {
  sm: "px-4 py-2 text-[10px]",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

const Button = forwardRef(({ children, variant = "primary", size = "md", className = "", icon: Icon, href, ...props }, ref) => {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 font-bold tracking-wider uppercase rounded-full transition-all duration-300 overflow-hidden group";

  const Tag = href ? "a" : motion.button;
  const motionProps = href ? {} : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } };

  return (
    <Tag
      ref={ref}
      href={href}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...motionProps}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      {Icon && <Icon size={size === "sm" ? 12 : size === "md" ? 14 : 16} className="group-hover:scale-110 transition-transform" />}
      {children}
    </Tag>
  );
});

Button.displayName = "Button";
export default Button;
