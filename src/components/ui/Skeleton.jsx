export default function Skeleton({ className = "", width, height, rounded = "xl" }) {
  return (
    <div
      className={`bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse rounded-${rounded} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <div className="aspect-[4/3] bg-gray-100 animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-100 rounded-full w-1/3 animate-pulse" />
        <div className="h-4 bg-gray-100 rounded-full w-3/4 animate-pulse" />
        <div className="h-3 bg-gray-100 rounded-full w-1/2 animate-pulse" />
        <div className="flex justify-between items-center pt-2">
          <div className="h-4 bg-gray-100 rounded-full w-20 animate-pulse" />
          <div className="w-9 h-9 bg-gray-100 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
