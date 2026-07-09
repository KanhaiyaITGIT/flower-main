import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Flower2,
  ShoppingCart,
  Menu,
  X,
  Search,
  MapPin,
  Calendar,
  Briefcase,
  User,
  ChevronDown,
  IndianRupee,
  EllipsisVertical,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";
import { WHATSAPP_LINK, CONTACT_PHONE_1, BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import useGoogleAuth from "../hooks/useGoogleAuth";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/category" },
  { name: "Occasions", path: "/occasions" },
  { name: "Decor", path: "/decor" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
];

const megaNavLinks = [
  { name: "Birthday", path: "/category?cat=Birthday" },
  { name: "Occasions", path: "/occasions" },
  { name: "Anniversary", path: "/category?cat=Anniversary" },
  { name: "Flowers", path: "/category?cat=Bouquets" },
  { name: "Balloon & Services", path: "/category?cat=Balloon" },
  { name: "Wedding", path: "/category?cat=Wedding" },
  { name: "Reception", path: "/category?cat=Reception" },
  { name: "Haldi", path: "/category?cat=Haldi" },
  { name: "Devotional", path: "/category?cat=Devotional" },
  { name: "Candles & More", path: "/category?cat=Candles+%26+More" },
  { name: "Gallery", path: "/gallery" },
  
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useGoogleAuth();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalH > 0 ? Math.min((window.scrollY / totalH) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl bg-white/90" : "bg-white"}`}>
        {/* ─── TOP HEADER ROW ─── */}
        <div className={`border-b transition-all duration-300 ${scrolled ? "border-transparent" : "border-gray-100"}`}>
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.05 }}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#14301F] to-[#1a3d28] flex items-center justify-center"
                >
                  <Flower2 size={18} color="#C8A882" />
                </motion.div>
                <span className="hidden sm:inline-block">
                  <h1 className="font-serif-display font-black text-lg text-[#14301F] leading-none">
                    {BUSINESS_NAME_MAIN}
                  </h1>
                  <p className="text-[9px] text-[#C9A15A] font-semibold tracking-widest uppercase leading-tight">
                    {BUSINESS_NAME_SUB}
                  </p>
                </span>
              </Link>

              {/* Delivery / Location Selector */}
              <LocationDropdown />

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-[460px] lg:max-w-[520px]">
                <div className="relative w-full">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search flowers, cakes, plants..."
                    className="w-full h-10 pl-10 pr-4 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-[#D6537A]/40 focus:bg-white focus:ring-2 focus:ring-[#D6537A]/15 focus:shadow-[0_0_20px_rgba(214,83,122,0.08)] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Right Side Utility Icons */}
              <div className="flex items-center gap-1 sm:gap-3">
             

              

                <button className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Corporate Gifting" onClick={() => navigate("/decor")}>
                  <Briefcase size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Corporate</span>
                </button>

                <button onClick={() => navigate("/cart")} className="relative flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Cart">
                  <ShoppingCart size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Cart</span>
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-0.5 -right-0.5 bg-[#D6537A] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white"
                      >
                        {cartCount > 9 ? "9+" : cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {user.isLoggedIn ? (
                  <button onClick={() => logout()} className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Profile">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-6 h-6 rounded-full border border-neutral-200 group-hover:border-[#D6537A]/40 transition-colors"
                    />
                    <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Hi {user.name}</span>
                  </button>
                ) : (
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Profile">
                    <User size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                    <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Hi Guest</span>
                  </a>
                )}

                <button className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="More">
                  <EllipsisVertical size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">More</span>
                </button>

                {/* Mobile: Cart + Hamburger */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="lg:hidden p-2 text-gray-600 hover:text-[#D6537A] transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MEGA NAV ROW ─── */}
        <div className="hidden lg:block bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <nav className="flex items-center justify-between -ml-3 -mr-3 overflow-x-auto scrollbar-hide">
              {megaNavLinks.map((link, i) => {
                const isActive = location.pathname === link.path || location.search.includes(link.path.split("=")[1] || "");
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3 py-3 text-[11px] font-semibold tracking-wide whitespace-nowrap transition-colors flex items-center gap-1 group ${
                      isActive ? "text-[#D6537A]" : "text-gray-600 hover:text-[#14301F]"
                    }`}
                    style={{ animationDelay: `${i * 0.03}s` }}
                  >
                    <span className="relative">
                      {link.name}
                      <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#D6537A] transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </span>
                    <ChevronDown size={10} className="text-gray-300" />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* ─── MOBILE DRAWER ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-[#14301F]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] z-50 bg-white shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 bg-gradient-to-br from-[#14301F] to-[#0D1F0F]">
                <span className="font-serif-display font-black text-lg text-[#FBF6EF]">
                  {BUSINESS_NAME_MAIN} <span className="text-[#C9A15A] font-light italic">{BUSINESS_NAME_SUB}</span>
                </span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 text-[#FBF6EF] rounded-full" aria-label="Close">
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-9 pl-9 pr-3 rounded-full bg-gray-50 border border-gray-200 text-xs outline-none focus:border-[#D6537A]/40"
                  />
                </div>
              </div>

              <nav className="flex-1 py-4 px-4 flex flex-col gap-0.5">
                {megaNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-sm font-medium text-gray-700 hover:text-[#D6537A] hover:bg-rose-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-3" />
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-sm font-medium text-gray-500 hover:text-[#14301F] hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="p-5 border-t border-gray-100 text-center text-[10px] text-gray-400 font-semibold tracking-wider">
                © {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function LocationDropdown() {
  const [displayText, setDisplayText] = useState("Detecting location...");

  useEffect(() => {
    let cancelled = false;

    const fallbackByIP = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (!cancelled) {
          const city = data.city || "Delhi NCR";
          const region = data.region || "";
          const country = data.country_name || "India";
          setDisplayText(region ? `${city}, ${region}` : `${city}, ${country}`);
        }
      } catch {
        if (!cancelled) setDisplayText("Delhi NCR, India");
      }
    };

    if (!navigator.geolocation) {
      fallbackByIP();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await res.json();
          if (!cancelled) {
            const city = data.city || data.locality || "Delhi NCR";
            const ctry = data.countryName || "India";
            setDisplayText(`${city}, ${ctry}`);
          }
        } catch {
          if (!cancelled) fallbackByIP();
        }
      },
      () => {
        if (!cancelled) fallbackByIP();
      },
      { enableHighAccuracy: false, timeout: 6000, maximumAge: 300000 }
    );

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-2 border-r border-gray-200 pr-5">
      <MapPin size={18} className="text-[#D6537A] shrink-0" />
      <div>
        <div className="flex items-center gap-1">
          <span className="text-xs">🇮🇳</span>
          <span className="text-[11px] font-semibold text-gray-700">{displayText}</span>
          <ChevronDown size={12} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}
