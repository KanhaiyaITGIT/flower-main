import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

const Input = forwardRef(({ label, icon: Icon, className = "", error, floating = false, success, ...props }, ref) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      {label && !floating && (
        <label className="text-[11px] font-bold tracking-wider uppercase text-gray-600 dark:text-stone-400 block mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon size={14} className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10 transition-colors duration-300 ${focused ? "text-[#C9A15A]" : "text-gray-400"}`} />
        )}
        <input
          ref={ref}
          onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
          className={`w-full bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border text-sm outline-none transition-all duration-300 ${
            error
              ? "border-red-400/60 focus:border-red-400 focus:ring-red-400/20"
              : success
                ? "border-emerald-400/60 focus:border-emerald-400 focus:ring-emerald-400/20"
                : "border-gray-200 dark:border-white/[0.08] focus:border-[#C9A15A]/60 focus:ring-[#C9A15A]/20"
          } ${
            Icon ? "pl-10" : "px-4"
          } py-3 text-gray-700 dark:text-stone-200 placeholder-gray-400 dark:placeholder-stone-500 font-light rounded-xl focus:bg-white dark:focus:bg-white/[0.08] focus:ring-2 ${className}`}
          placeholder={floating && label ? "" : props.placeholder}
          {...props}
        />
        {floating && label && (
          <label className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs pointer-events-none transition-all duration-300 ${
            props.value || focused
              ? "-top-2.5 left-3 text-[10px] bg-white dark:bg-[#0d281d] px-1.5"
              : "text-gray-400 dark:text-stone-500"
          } ${error ? "text-red-400" : success ? "text-emerald-500" : props.value || focused ? "text-[#C9A15A]" : ""}`}>
            {label}
          </label>
        )}
        {!error && success && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.span>
        )}
      </div>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 mt-1.5"
        >
          <span className="w-1 h-1 rounded-full bg-red-400" />
          <p className="text-[11px] text-red-400 font-medium">{error}</p>
        </motion.div>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
