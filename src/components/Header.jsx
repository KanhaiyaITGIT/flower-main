import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Flower2,
  ShoppingCart,
  Menu,
  X,
  Search,
  MapPin,
  Briefcase,
  User,
  ChevronDown,
  Loader2,
  MapPinOff,
  Navigation,
  Sun,
  Moon,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";
import { WHATSAPP_LINK, BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import useGoogleAuth from "../hooks/useGoogleAuth";
import { useTheme } from "../context/ThemeContext";
import AuthModal from "./AuthModal";

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
  const { theme, toggleTheme } = useTheme();

  const searchProducts = [
    { title: "Red Rose Luxury Bouquet", category: "Bouquet", price: 1499, tags: ["rose", "red", "luxury", "romantic"] },
    { title: "Premium Pink Tulips Vase", category: "Flowers", price: 2499, tags: ["tulip", "pink", "vase", "premium"] },
    { title: "Grand Wedding Stage Decor", category: "Wedding", price: 45000, tags: ["wedding", "stage", "grand", "decor"] },
    { title: "Multicolor Pastel Balloons", category: "Balloons", price: 899, tags: ["balloon", "multicolor", "pastel", "party"] },
    { title: "Lavender Dreams Bouquet", category: "Bouquet", price: 1799, tags: ["lavender", "bouquet", "dreamy", "purple"] },
    { title: "White Lily Elegance Vase", category: "Flowers", price: 2199, tags: ["lily", "white", "elegant", "vase"] },
    { title: "Rustic Farmhouse Centerpiece", category: "Decor", price: 3499, tags: ["rustic", "farmhouse", "centerpiece", "table"] },
    { title: "Golden Tissue Pom-Poms", category: "Balloons", price: 499, tags: ["golden", "tissue", "pom-pom", "party"] },
    { title: "Crimson Champagne Wedding Arch", category: "Wedding", price: 32000, tags: ["wedding", "arch", "crimson", "champagne"] },
    { title: "Sunflower Fields Bouquet", category: "Bouquet", price: 1299, tags: ["sunflower", "yellow", "bright", "cheerful"] },
  ];

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  const searchCategoryMap = {
    flowers: "/category?cat=Bouquets",
    flower: "/category?cat=Bouquets",
    bouquet: "/category?cat=Bouquets",
    bouquets: "/category?cat=Bouquets",
    bokeh: "/category?cat=Bouquets",
    bookeh: "/category?cat=Bouquets",
    wedding: "/category?cat=Wedding",
    reception: "/category?cat=Wedding",
    anniversary: "/category?cat=Anniversary",
    devotional: "/category?cat=Devotional",
    haldi: "/category?cat=Devotional",
    birthday: "/category?cat=Birthday",
    balloon: "/category?cat=Balloon",
    balloons: "/category?cat=Balloon",
    decor: "/category?cat=Decor",
    candle: "/category?cat=Candles+%26+More",
    candles: "/category?cat=Candles+%26+More",
  };

  const findCategoryRoute = (query) => {
    const q = query.toLowerCase().trim();
    for (const [key, route] of Object.entries(searchCategoryMap)) {
      if (q === key || q.includes(key)) return route;
    }
    return null;
  };

  const handleSearchRedirect = (query, closeDropdown = true) => {
    const route = findCategoryRoute(query);
    if (route) {
      navigate(route);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
    if (closeDropdown) setShowDropdown(false);
    setSearchQuery("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearchRedirect(searchQuery.trim());
    }
  };

  const handleDropdownItemClick = (e, query) => {
    e.preventDefault();
    e.stopPropagation();
    handleSearchRedirect(query);
  };

  const filteredProducts = searchQuery.trim()
    ? searchProducts.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : [];

  const matchedCategories = [...new Set(filteredProducts.map((p) => p.category))];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchRef.current && !searchRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.split("?")[0]);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl bg-white/85 dark:bg-[#06120e]/90 border-b border-white/20 dark:border-white/5"
          : "bg-white/95 dark:bg-[#06120e] border-b border-stone-100 dark:border-white/5"
      }`}>
        <div className={`transition-all duration-300 ${scrolled ? "border-transparent" : ""}`}>
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4">
              <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.08 }}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#14301F] to-[#1a3d28] flex items-center justify-center shadow-[0_2px_8px_rgba(20,48,31,0.15)] group-hover:shadow-[0_4px_16px_rgba(20,48,31,0.25)] transition-shadow duration-300"
                >
                  <Flower2 size={18} color="#C8A882" />
                </motion.div>
                <span className="hidden sm:inline-block">
                  <h1 className="font-serif-display font-black text-lg text-[#14301F] dark:text-stone-100 leading-none group-hover:text-[var(--color-gold)] transition-colors duration-300">
                    {BUSINESS_NAME_MAIN}
                  </h1>
                  <p className="text-[9px] text-[#C9A15A] font-semibold tracking-widest uppercase leading-tight mt-0.5">
                    {BUSINESS_NAME_SUB}
                  </p>
                </span>
              </Link>

              <LocationDropdown />

              <div className="hidden md:flex flex-1 max-w-[400px] lg:max-w-[480px]">
                <div className="relative w-full" ref={searchRef}>
                  <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none z-10" />
                  <form onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowDropdown(true)}
                      onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                      placeholder="Search flowers, cakes, plants..."
                      className="w-full h-9 lg:h-10 pl-9 lg:pl-10 pr-4 rounded-full bg-stone-50/80 border border-stone-200/60 text-xs text-stone-700 placeholder-stone-400 outline-none focus:border-[var(--color-gold)]/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,161,90,0.08)] focus:ring-0 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:text-stone-200 dark:placeholder-stone-500 dark:focus:bg-[#06120e]"
                    />
                  </form>
                  {showDropdown && searchQuery.trim() && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-stone-200/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] z-[999] overflow-hidden dark:bg-[#0a1a15]/95 dark:border-white/5"
                    >
                      {filteredProducts.length > 0 ? (
                        <div className="p-2">
                          {matchedCategories.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-2 pb-2 border-b border-stone-100 dark:border-white/5">
                              {matchedCategories.map((cat) => (
                                <button
                                  key={`cat-${cat}`}
                                  onMouseDown={(e) => handleDropdownItemClick(e, cat)}
                                  className="px-2.5 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-[9px] font-semibold tracking-wider uppercase hover:bg-[var(--color-gold)]/20 transition-colors"
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>
                          )}
                          <div className="flex flex-col gap-0.5 max-h-[280px] overflow-y-auto">
                            {filteredProducts.map((p, i) => (
                              <button
                                key={`search-prod-${i}`}
                                onMouseDown={(e) => handleDropdownItemClick(e, p.title)}
                                className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-stone-50 dark:hover:bg-white/5 transition-colors text-left group"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <span className="text-sm font-medium text-stone-700 dark:text-stone-200 truncate group-hover:text-[var(--color-gold)] transition-colors">
                                    {p.title}
                                  </span>
                                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-stone-100 dark:bg-white/5 text-[9px] font-semibold text-stone-500 dark:text-stone-400 tracking-wider uppercase">
                                    {p.category}
                                  </span>
                                </div>
                                <span className="shrink-0 text-[var(--color-gold)] font-medium text-xs ml-3">
                                  ₹{p.price.toLocaleString()}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="p-5 text-center">
                          <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-wide">
                            No matches found for your floral search.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 text-stone-600 border border-stone-200/60 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 dark:bg-white/5 dark:text-[#C9A15A] dark:border-white/10 dark:hover:bg-white/10 transition-all duration-300"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </button>
                <button
                  onClick={() => navigate("/decor")}
                  className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 text-stone-500 border border-stone-200/60 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 hover:text-[var(--color-accent)] dark:bg-white/5 dark:text-stone-400 dark:border-white/10 dark:hover:text-[#C9A15A] dark:hover:bg-white/10 transition-all duration-300"
                  aria-label="Corporate Gifting"
                >
                  <Briefcase size={15} />
                </button>

                <button
                  onClick={() => navigate("/cart")}
                  className="relative flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 text-stone-500 border border-stone-200/60 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 hover:text-[var(--color-accent)] dark:bg-white/5 dark:text-stone-400 dark:border-white/10 dark:hover:text-[#C9A15A] dark:hover:bg-white/10 transition-all duration-300"
                  aria-label="Cart"
                >
                  <ShoppingCart size={15} />
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-0.5 -right-0.5 bg-[var(--color-accent)] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-[#06120e]"
                      >
                        {cartCount > 9 ? "9+" : cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {user.isLoggedIn ? (
                  <button
                    onClick={() => logout()}
                    className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 border border-stone-200/60 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 transition-all duration-300 overflow-hidden"
                    aria-label="Profile"
                  >
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 text-stone-500 border border-stone-200/60 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 hover:text-[var(--color-accent)] dark:bg-white/5 dark:text-stone-400 dark:border-white/10 dark:hover:text-[#C9A15A] dark:hover:bg-white/10 transition-all duration-300"
                    aria-label="Sign In"
                  >
                    <User size={15} />
                  </button>
                )}

                <button
                  onClick={() => setIsOpen(true)}
                  className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 text-stone-500 border border-stone-200/60 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 dark:bg-white/5 dark:text-stone-400 dark:border-white/10 dark:hover:bg-white/10 transition-all duration-300"
                  aria-label="Open menu"
                >
                  <Menu size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block bg-white/50 backdrop-blur-md dark:bg-[#06120e]/50 border-b border-stone-100/60 dark:border-white/5">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <nav className="flex items-center justify-start gap-0.5 overflow-x-auto scrollbar-hide">
              {megaNavLinks.map((link, i) => {
                const active = location.pathname === link.path || location.search.includes(link.path.split("=")[1] || "");
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2.5 text-[11px] font-semibold tracking-wide whitespace-nowrap transition-all duration-300 flex items-center gap-1 group rounded-xl ${
                      active
                        ? "text-[var(--color-accent)] bg-[var(--color-accent)]/5"
                        : "text-stone-500 hover:text-[var(--color-primary)] hover:bg-stone-50 dark:text-stone-300 dark:hover:text-[#C9A15A] dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="relative">
                      {link.name}
                      <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 rounded-full ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </span>
                    <ChevronDown size={9} className="text-stone-300 dark:text-stone-600" />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] z-50 bg-white dark:bg-[#06120e] shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 bg-gradient-to-br from-[var(--color-primary)] to-[#0D1F0F]">
                <span className="font-serif-display font-black text-lg text-[var(--color-cream)]">
                  {BUSINESS_NAME_MAIN} <span className="text-[var(--color-gold)] font-light italic">{BUSINESS_NAME_SUB}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[var(--color-cream)] hover:bg-white/20 transition-all"
                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[var(--color-cream)] hover:bg-white/20 transition-all"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="p-4 border-b border-stone-100 dark:border-white/5">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                  <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) { handleSearchRedirect(searchQuery.trim()); setIsOpen(false); } }}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full h-9 pl-9 pr-3 rounded-full bg-stone-50 border border-stone-200 text-xs outline-none focus:border-[var(--color-gold)]/40 transition-all dark:bg-white/5 dark:border-white/10 dark:text-stone-200"
                    />
                  </form>
                </div>
              </div>

              <nav className="flex-1 py-4 px-4 flex flex-col gap-0.5">
                {megaNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-sm font-medium text-stone-700 hover:text-[var(--color-accent)] hover:bg-rose-50 dark:text-stone-200 dark:hover:text-[#C9A15A] dark:hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-stone-100 dark:border-white/5 my-3" />
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-sm font-medium text-stone-500 hover:text-[var(--color-primary)] hover:bg-stone-50 dark:text-stone-400 dark:hover:text-[#C9A15A] dark:hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="p-5 border-t border-stone-100 dark:border-white/5 text-center text-[10px] text-stone-400 font-semibold tracking-wider">
                &copy; {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

function LocationDropdown() {
  const [displayText, setDisplayText] = useState("Detecting location...");
  const [status, setStatus] = useState("loading"); // loading | success | error

  const fallbackByIP = useCallback(async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (!res.ok) throw new Error("IP geolocation failed");
      const data = await res.json();
      const city = data.city || "Delhi NCR";
      const region = data.region || "";
      const country = data.country_name || "India";
      setDisplayText(region ? `${city}, ${region}` : `${city}, ${country}`);
      setStatus("success");
    } catch {
      setDisplayText("Delhi NCR, India");
      setStatus("success");
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let retryCount = 0;
    const MAX_RETRIES = 2;

    if (!navigator.geolocation) {
      fallbackByIP();
      return;
    }

    const attemptGeolocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            if (!res.ok) throw new Error("Reverse geocode failed");
            const data = await res.json();
            if (!cancelled) {
              const city = data.city || data.locality || "Delhi NCR";
              const ctry = data.countryName || "India";
              setDisplayText(`${city}, ${ctry}`);
              setStatus("success");
            }
          } catch {
            if (!cancelled) fallbackByIP();
          }
        },
        (err) => {
          if (cancelled) return;
          if (err.code === err.PERMISSION_DENIED) {
            setDisplayText("Location off");
            setStatus("error");
            fallbackByIP();
          } else if (err.code === err.TIMEOUT && retryCount < MAX_RETRIES) {
            retryCount++;
            setTimeout(attemptGeolocation, 1000 * retryCount);
          } else {
            if (!cancelled) fallbackByIP();
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 120000,
        }
      );
    };

    attemptGeolocation();

    return () => { cancelled = true; };
  }, [fallbackByIP]);

  const Icon = status === "loading" ? Loader2 : status === "error" ? MapPinOff : Navigation;

  return (
    <div className="hidden lg:flex items-center gap-2 pr-5 relative" aria-live="polite">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-stone-200/60 dark:bg-white/5" />
      <Icon
        size={16}
        className={`shrink-0 ${
          status === "loading"
            ? "text-[var(--color-gold)] animate-spin"
            : status === "error"
            ? "text-stone-400"
            : "text-[var(--color-accent)]"
        }`}
      />
      <div className="flex items-center gap-1.5 cursor-default">
        <span className="text-[11px] font-medium text-stone-600 dark:text-stone-300">{displayText}</span>
        <ChevronDown size={10} className="text-stone-400 dark:text-stone-500" />
      </div>
    </div>
  );
}
