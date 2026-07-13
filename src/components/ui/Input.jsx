import { forwardRef } from "react";

const Input = forwardRef(({ label, icon: Icon, className = "", error, ...props }, ref) => {
  return (
    <div>
      {label && (
        <label className="text-[11px] font-bold tracking-wider uppercase text-gray-600 block mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        )}
        <input
          ref={ref}
          className={`w-full bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 ${
            Icon ? "pl-10" : "px-4"
          } py-2.5 text-xs font-medium rounded-xl focus:border-[var(--color-accent)]/40 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)]/15 ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
