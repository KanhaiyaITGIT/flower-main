export default function SectionHeading({ label, title, description, labelColor = "var(--color-accent)", className = "" }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, transparent, ${labelColor})` }} />
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: labelColor }}>
          {label}
        </span>
        <span className="w-8 h-px bg-gradient-to-l from-transparent" style={{ backgroundImage: `linear-gradient(to left, transparent, ${labelColor})` }} />
      </div>
      {title && (
        <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] font-black text-[var(--color-primary)] mt-2 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-500 text-sm mt-3 font-light max-w-lg mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
