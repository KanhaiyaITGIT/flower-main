import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function SectionHeading({ label, title, description, labelColor = "var(--color-accent)", goldTitle = false, align = "center", className = "" }) {
  const isLeft = align === "left";
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={`${isLeft ? "text-left" : "text-center"} mb-14 md:mb-16 ${className}`}
    >
      {label && (
        <motion.div variants={fadeUp} className={`inline-flex items-center gap-3 mb-5 ${isLeft ? "" : "justify-center"}`}>
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-accent)]" style={{ backgroundImage: `linear-gradient(to right, ${isLeft ? "var(--color-accent)" : "transparent"}, ${isLeft ? "transparent" : "var(--color-accent)"})` }} />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: labelColor }}>
            {label}
          </span>
          {!isLeft && <span className="w-10 h-px bg-gradient-to-l from-transparent" style={{ backgroundImage: `linear-gradient(to left, transparent, ${labelColor})` }} />}
        </motion.div>
      )}
      {title && (
        <motion.h2
          variants={fadeUp}
          className={`font-serif-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight ${
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
