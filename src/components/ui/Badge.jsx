const colorStyles = {
  rose: "bg-[var(--color-blush)]/90 text-[var(--color-accent)] border-[var(--color-blush)]/60 dark:bg-[var(--color-blush)]/10 dark:text-[var(--color-accent)]/90 dark:border-[var(--color-blush)]/20",
  amber: "bg-amber-50/90 text-amber-600 border-amber-100/60 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  green: "bg-emerald-50/90 text-emerald-600 border-emerald-100/60 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  purple: "bg-purple-50/90 text-purple-600 border-purple-100/60 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20",
  blue: "bg-blue-50/90 text-blue-600 border-blue-100/60 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
  slate: "bg-slate-50/90 text-slate-600 border-slate-100/60 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
  gold: "bg-[#C9A15A]/15 text-[#C9A15A] border-[#C9A15A]/30 dark:bg-[#C9A15A]/10",
  premium: "bg-gradient-to-r from-[#C9A15A] to-[#D6B36A] text-[#1D1D1D] border-[#C9A15A]/40 shadow-[0_2px_8px_rgba(214,179,106,0.25)]",
  primary: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/20 dark:text-emerald-300 dark:border-[var(--color-primary)]/30",
  accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20 dark:bg-[var(--color-accent)]/10",
};

export default function Badge({ children, color = "rose", className = "", pill = true, dot = false, pulse = false }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[9px] font-black tracking-[0.15em] uppercase px-3 py-1.5 border backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${
      pill ? "rounded-full" : "rounded-xl"
    } ${colorStyles[color] || colorStyles.rose} ${pulse ? "badge-float" : ""} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${pulse ? "animate-pulse" : ""} bg-current`} />}
      {children}
    </span>
  );
}
