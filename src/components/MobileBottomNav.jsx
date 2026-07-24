import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
import { House, LayoutGrid, Heart, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { icon: House, label: "Home", path: "/" },
  { icon: LayoutGrid, label: "Categories", path: "/category" },
  { icon: Heart, label: "Wishlist", path: "#" },
  { icon: ShoppingCart, label: "Cart", path: "/cart" },
  { icon: User, label: "Profile", path: "#" },
];

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const cartCount = useSelector(selectCartCount);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "#") return false;
    return location.pathname.startsWith(path);
  };

  const handleClick = (path) => {
    if (path === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate(path);
  };

  return (
    <AnimatePresence>
      {mounted && (
        <motion.nav
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 180, delay: 0.15 }}
          className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 h-[64px] bg-[#0a0f0d]/95 backdrop-blur-2xl border-t border-white/[0.04] shadow-[0_-8px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#C89B3C]/20 to-transparent pointer-events-none" />

          <div className="flex items-center justify-around w-full px-2 pb-1 safe-area-bottom">
            {navItems.map(({ icon: Icon, label, path }) => {
              const active = isActive(path);
              const showBadge = label === "Cart" && cartCount > 0;

              return (
                <button
                  key={label}
                  onClick={() => handleClick(path)}
                  className="relative flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] px-2 py-1 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <div className="relative">
                    <Icon
                      size={20}
                      className={`transition-colors duration-200 ${
                        active ? "text-[#C89B3C]" : "text-stone-400"
                      }`}
                    />
                    <AnimatePresence>
                      {showBadge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          className="absolute -top-2 -right-2.5 bg-red-500 text-white text-[9px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1 border-2 border-[#0a0f0d] shadow-[0_2px_6px_rgba(220,38,38,0.4)]"
                        >
                          {cartCount > 9 ? "9+" : cartCount}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <span
                    className={`text-[10px] font-semibold tracking-wider transition-colors duration-200 ${
                      active ? "text-[#C89B3C]" : "text-stone-500"
                    }`}
                  >
                    {label}
                  </span>

                  {active && (
                    <motion.div
                      layoutId="mobileNavDot"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 25 }}
                      className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-[#C89B3C] shadow-[0_0_8px_rgba(200,155,60,0.4)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}