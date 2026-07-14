import { forwardRef } from "react";

const Input = forwardRef(({ label, icon: Icon, className = "", error, floating = false, ...props }, ref) => {
  return (
    <div className="relative">
      {label && !floating && (
        <label className="text-[11px] font-bold tracking-wider uppercase text-gray-600 dark:text-stone-400 block mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
        )}
        <input
          ref={ref}
          className={`w-full bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border text-sm outline-none transition-all duration-300 ${
            error
              ? "border-red-400/60 focus:border-red-400 focus:ring-red-400/20"
              : "border-gray-200 dark:border-white/[0.08] focus:border-[#C9A15A]/60 focus:ring-[#C9A15A]/20"
          } ${
            Icon ? "pl-10" : "px-4"
          } py-3 text-gray-700 dark:text-stone-200 placeholder-gray-400 dark:placeholder-stone-500 font-light rounded-xl focus:bg-white dark:focus:bg-white/[0.08] focus:ring-2 ${className}`}
          placeholder={floating && label ? "" : props.placeholder}
          {...props}
        />
        {floating && label && (
          <label className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 dark:text-stone-500 pointer-events-none transition-all duration-300 ${
            props.value ? "-top-2 left-3 text-[10px] bg-white dark:bg-[#1D1D1D] px-1.5 text-[#C9A15A]" : ""
          }`}>
            {label}
          </label>
        )}
      </div>
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="w-1 h-1 rounded-full bg-red-400" />
          <p className="text-[11px] text-red-400 font-medium">{error}</p>
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
