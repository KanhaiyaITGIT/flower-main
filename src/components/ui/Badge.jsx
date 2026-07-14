const colorStyles = {
  rose: "bg-[var(--color-blush)]/90 text-[var(--color-accent)] border-[var(--color-blush)]/60",
  amber: "bg-amber-50/90 text-amber-600 border-amber-100/60",
  green: "bg-emerald-50/90 text-emerald-600 border-emerald-100/60",
  purple: "bg-purple-50/90 text-purple-600 border-purple-100/60",
  blue: "bg-blue-50/90 text-blue-600 border-blue-100/60",
  slate: "bg-slate-50/90 text-slate-600 border-slate-100/60",
  gold: "bg-[#C9A15A]/15 text-[#C9A15A] border-[#C9A15A]/30 dark:bg-[#C9A15A]/10",
  premium: "bg-gradient-to-r from-[#C9A15A] to-[#D6B36A] text-[#1D1D1D] border-[#C9A15A]/40 shadow-[0_2px_8px_rgba(214,179,106,0.25)]",
};

export default function Badge({ children, color = "rose", className = "", pill = true }) {
  return (
    <span className={`inline-block text-[9px] font-black tracking-[0.15em] uppercase px-3 py-1.5 border backdrop-blur-md transition-all duration-300 hover:scale-105 ${
      pill ? "rounded-full" : "rounded-xl"
    } ${colorStyles[color] || colorStyles.rose} ${className}`}>
      {children}
    </span>
  );
}
