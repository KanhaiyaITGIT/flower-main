const colorStyles = {
  rose: "bg-[var(--color-blush)]/90 text-[var(--color-accent)] border-[var(--color-blush)]/60",
  amber: "bg-amber-50/90 text-amber-600 border-amber-100/60",
  green: "bg-emerald-50/90 text-emerald-600 border-emerald-100/60",
  purple: "bg-purple-50/90 text-purple-600 border-purple-100/60",
  blue: "bg-blue-50/90 text-blue-600 border-blue-100/60",
  slate: "bg-slate-50/90 text-slate-600 border-slate-100/60",
  gold: "bg-[var(--color-gold)]/10 text-[var(--color-gold)] border-[var(--color-gold)]/20",
};

export default function Badge({ children, color = "rose", className = "", pill = true }) {
  return (
    <span className={`inline-block text-[8px] font-black tracking-widest uppercase px-2.5 py-1 border backdrop-blur-md ${
      pill ? "rounded-full" : "rounded-lg"
    } ${colorStyles[color] || colorStyles.rose} ${className}`}>
      {children}
    </span>
  );
}
