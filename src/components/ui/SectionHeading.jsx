import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const labelReveal = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function SectionHeading({ label, title, description, labelColor = "var(--color-accent)", goldTitle = false, align = "center", className = "", titleSize = "large", dot = false }) {
  const isLeft = align === "left";
  const sizeClasses = {
    small: "text-xl sm:text-2xl md:text-3xl",
    medium: "text-2xl sm:text-3xl md:text-4xl",
    large: "text-3xl sm:text-4xl md:text-5xl",
    xlarge: "text-4xl sm:text-5xl md:text-6xl",
  };
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={`${isLeft ? "text-left" : "text-center"} mb-14 md:mb-16 ${className}`}
    >
      {label && (
        <motion.div variants={labelReveal} className={`inline-flex items-center gap-3 mb-5 ${isLeft ? "" : "justify-center"}`}>
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-current" style={{ color: labelColor }} />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase flex items-center gap-1.5" style={{ color: labelColor }}>
            {dot && <span className="w-1.5 h-1.5 rounded-full bg-current pulse-dot" />}
            {label}
          </span>
          {!isLeft && <span className="w-8 h-px bg-gradient-to-l from-transparent to-current" style={{ color: labelColor }} />}
        </motion.div>
      )}
      {title && (
        <motion.h2
          variants={fadeUp}
          className={`font-serif-display font-black leading-tight ${
            sizeClasses[titleSize] || sizeClasses.large
          } ${
            goldTitle
              ? "bg-gradient-to-r from-[#C9A15A] via-[#D6B36A] to-[#C9A15A] bg-clip-text text-transparent"
              : "text-[var(--color-primary)] dark:text-white"
          } ${isLeft ? "max-w-2xl" : ""}`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-[15px] text-gray-500 dark:text-stone-400 mt-4 font-light leading-relaxed ${isLeft ? "max-w-lg" : "max-w-lg mx-auto"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
