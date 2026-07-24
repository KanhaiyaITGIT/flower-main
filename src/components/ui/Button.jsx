import { forwardRef, useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 shadow-[0_4px_20px_rgba(20,48,31,0.35)] hover:shadow-[0_8px_35px_rgba(20,48,31,0.55)]",
  secondary: "bg-white text-[var(--color-primary)] border-2 border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)] hover:text-white hover:border-transparent hover:shadow-[0_8px_35px_rgba(214,83,122,0.45)]",
  accent: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 shadow-[0_4px_20px_rgba(214,83,122,0.35)] hover:shadow-[0_8px_35px_rgba(214,83,122,0.55)]",
  ghost: "bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md",
  gold: "bg-gradient-to-r from-[var(--color-gold)] to-[#b08b49] hover:from-[#b08b49] hover:to-[var(--color-gold)] text-black shadow-[0_10px_30px_rgba(201,161,90,0.2)] hover:shadow-[0_15px_40px_rgba(201,161,90,0.45)]",
  outline: "border border-gray-200 text-gray-700 hover:text-[var(--color-accent)] hover:border-rose-300 bg-white",
  "outline-gold": "border border-[var(--color-gold)]/30 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)] bg-transparent",
};

const sizes = {
  xs: "px-3 py-1.5 text-[9px]",
  sm: "px-4 py-2 text-[10px]",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
  xl: "px-10 py-5 text-sm",
};

const Button = forwardRef(({ children, variant = "primary", size = "md", className = "", icon: Icon, href, loading = false, disabled = false, ...props }, ref) => {
  const btnRef = useRef(null);
  const baseClasses = "relative inline-flex items-center justify-center gap-2 font-bold tracking-wider uppercase rounded-full transition-all duration-300 overflow-hidden group select-none";

  const Tag = href ? "a" : motion.button;
  const motionProps = href ? {} : { whileHover: disabled || loading ? {} : { scale: 1.03 }, whileTap: disabled || loading ? {} : { scale: 0.97 } };

  const handleRipple = (e) => {
    if (disabled || loading || href) return;
    const btn = btnRef.current || e.currentTarget;
    const circle = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.background = "rgba(255,255,255,0.2)";
    circle.style.transform = "scale(0)";
    circle.style.animation = "ripple-effect 0.6s ease-out forwards";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <Tag
      ref={(el) => { btnRef.current = el; if (typeof ref === "function") ref(el); else if (ref) ref.current = el; }}
      href={href}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${loading || disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      onClick={handleRipple}
      {...motionProps}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : Icon ? (
        <Icon size={size === "xs" ? 10 : size === "sm" ? 12 : size === "md" ? 14 : 16} className="group-hover:scale-110 transition-transform" />
      ) : null}
      {children}
    </Tag>
  );
});

Button.displayName = "Button";
export default Button;
