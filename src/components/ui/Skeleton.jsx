export default function Skeleton({ className = "", width, height, rounded = "xl" }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r from-gray-100 via-stone-200/50 to-gray-100 dark:from-white/5 dark:via-white/10 dark:to-white/5 rounded-${rounded} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent animate-shimmer-sweep" />
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/30 flex flex-col"
      style={{ background: "rgba(255,255,255,0.58)", backdropFilter: "blur(16px) saturate(1.3)", WebkitBackdropFilter: "blur(16px) saturate(1.3)" }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-blush)]/20 via-white/50 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-sweep" />
      </div>
      <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1">
        <div className="h-2.5 lg:h-3 w-16 bg-gradient-to-r from-stone-200/80 via-amber-100/40 to-stone-200/80 rounded-full mb-1.5 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep" />
        </div>
        <div className="h-4 lg:h-[18px] w-3/4 bg-gradient-to-r from-stone-200/70 via-stone-200/30 to-stone-200/70 rounded-full mb-1 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep" />
        </div>
        <div className="h-3 lg:h-3.5 w-1/2 bg-gradient-to-r from-gray-200/70 via-gray-200/30 to-gray-200/70 rounded-full mb-2 md:mb-3 lg:mb-4 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep" />
        </div>
        <div className="flex gap-1 mb-3 md:mb-4 lg:mb-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-gradient-to-r from-amber-200/60 via-amber-100/30 to-amber-200/60 relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-2.5 md:pt-3 lg:pt-4 border-t border-white/30">
          <div className="h-4 lg:h-[18px] w-20 bg-gradient-to-r from-stone-200/80 via-stone-200/30 to-stone-200/80 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep" />
          </div>
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/10 to-[var(--color-primary)]/20 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep" />
          </div>
        </div>
      </div>
    </div>
  );
}
