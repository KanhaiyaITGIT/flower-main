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
  Pencil,
  Check,
  LocateFixed,
  ShieldCheck,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";
import { WHATSAPP_LINK, BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB } from "../constants";
import CallForPricing from "../components/ui/CallForPricing";
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

      <header className={`sticky top-0 z-50 w-full header-glass-premium transition-all duration-700 ${
        scrolled
          ? "shadow-[0_1px_0_rgba(0,0,0,0.01),0_4px_24px_rgba(200,155,60,0.03)] header-scrolled"
          : ""
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16 gap-3 lg:gap-4">
              <Link to="/" className="flex items-center gap-3 shrink-0 group">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#184D36] to-[#1f5a40] flex items-center justify-center shadow-[0_2px_8px_rgba(24,77,54,0.12)] group-hover:shadow-[0_4px_20px_rgba(24,77,54,0.2)] transition-all duration-400"
                  >
                    <Flower2 size={17} color="#C89B3C" />
                  </motion.div>
                <span className="hidden sm:inline-block">
                  <h1 className="font-serif-display font-bold text-base text-[#184D36] dark:text-stone-100 leading-none tracking-wide">
                    {BUSINESS_NAME_MAIN}
                  </h1>
                  <p className="text-[8px] text-[#C89B3C] font-semibold tracking-[0.2em] uppercase leading-tight mt-0.5">
                    {BUSINESS_NAME_SUB}
                  </p>
                </span>
              </Link>

              <LocationDropdown />

              <div className="hidden md:flex flex-1 max-w-[390px] lg:max-w-[460px] xl:max-w-[510px]">
                <div className="relative w-full" ref={searchRef}>
                  <Search size={16} className="absolute left-[24px] top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none z-10 transition-colors duration-300 peer-focus-within:text-[var(--color-gold)]/60" />
                  <form onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowDropdown(true)}
                      onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                      placeholder="Search flowers, cakes, plants..."
                      className="w-full pl-[58px] pr-12 search-premium-xl text-[15px] text-stone-800 placeholder:text-[#888] outline-none focus:ring-0 transition-all duration-300 dark:text-stone-200 dark:placeholder:text-stone-500"
                    />
                  </form>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[rgba(198,162,93,0.35)] pointer-events-none text-sm select-none">✦</span>
                  <div className="absolute -bottom-[1px] left-6 right-6 h-px bg-gradient-to-r from-transparent via-[rgba(198,162,93,0.10)] to-transparent pointer-events-none" />
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
                                <span className="shrink-0 ml-3">
                                  <CallForPricing />
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

              <div className="flex items-center gap-2 sm:gap-2.5">
                <button
                  onClick={toggleTheme}
                  className="icon-btn-xl text-stone-500 dark:text-stone-400 hover:text-[var(--color-gold)] dark:hover:text-[#C9A15A]"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => navigate("/decor")}
                  className="hidden lg:flex icon-btn-xl text-stone-500 dark:text-stone-400 hover:text-[var(--color-accent)] dark:hover:text-[#C9A15A]"
                  aria-label="Corporate Gifting"
                >
                  <Briefcase size={18} />
                </button>

                <button
                  onClick={() => navigate("/cart")}
                  className="relative icon-btn-xl text-stone-500 dark:text-stone-400 hover:text-[var(--color-accent)] dark:hover:text-[#C9A15A]"
                  aria-label="Cart"
                >
                  <ShoppingCart size={18} />
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-0.5 -right-0.5 bg-[var(--color-accent)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#06120e]"
                      >
                        {cartCount > 9 ? "9+" : cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {user.isLoggedIn ? (
                  <button
                    onClick={() => logout()}
                    className="hidden lg:flex icon-btn-xl overflow-hidden"
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
                    className="hidden lg:flex icon-btn-xl text-stone-500 dark:text-stone-400 hover:text-[var(--color-accent)] dark:hover:text-[#C9A15A]"
                    aria-label="Sign In"
                  >
                    <User size={18} />
                  </button>
                )}

                <button
                  onClick={() => setIsOpen(true)}
                  className="lg:hidden icon-btn-xl"
                  aria-label="Open menu"
                >
                  <Menu size={18} />
                </button>
              </div>
            </div>
          </div>

        <div className="hidden lg:block cat-nav-premium">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-full">
            <nav className="flex items-center h-full gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
              {megaNavLinks.map((link) => {
                const active = location.pathname === link.path || location.search.includes(link.path.split("=")[1] || "");
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`nav-glass-pill group ${
                      active ? "active-nav-pill" : ""
                    }`}
                  >
                    {active && <span className="nav-pill-dot" />}
                    <span className="relative z-10 font-manrope tracking-wide">{link.name}</span>
                    {active && <span className="nav-pill-underline" />}
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
              <div className="flex items-center justify-between p-5 bg-gradient-to-br from-[#FFF9F7] to-[#FCFAF8] dark:from-[#0a1c14] dark:to-[#0d281d]">
                <span className="font-serif-display font-black text-lg text-[#184D36] dark:text-[#F7F0E8]">
                  {BUSINESS_NAME_MAIN} <span className="text-[#C89B3C] font-light italic">{BUSINESS_NAME_SUB}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm text-stone-600 hover:bg-white hover:text-[#D6B36A] transition-all dark:bg-white/5 dark:text-stone-400 dark:hover:bg-white/10"
                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm text-stone-600 hover:bg-white hover:text-stone-800 transition-all dark:bg-white/5 dark:text-stone-400 dark:hover:bg-white/10"
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
                      className="w-full h-9 pl-9 pr-3 rounded-full bg-white/70 backdrop-blur-sm border border-[rgba(214,179,106,0.1)] text-xs text-stone-800 placeholder:text-stone-500 outline-none focus:border-[#D6B36A]/30 transition-all dark:bg-white/5 dark:border-white/10 dark:text-stone-200"
                    />
                  </form>
                </div>
              </div>

              <nav className="flex-1 py-4 px-4 flex flex-col gap-0.5">
                {megaNavLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium text-stone-700 hover:text-[var(--color-accent)] hover:bg-rose-50 dark:text-stone-200 dark:hover:text-[#C9A15A] dark:hover:bg-white/5 transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]/30 group-hover:bg-[var(--color-accent)] transition-colors duration-200" />
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-stone-100 dark:border-white/5 my-3" />
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium text-stone-500 hover:text-[var(--color-primary)] hover:bg-stone-50 dark:text-stone-400 dark:hover:text-[#C9A15A] dark:hover:bg-white/5 transition-all duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-300 group-hover:bg-[var(--color-primary)] transition-colors duration-200" />
                      {link.name}
                    </Link>
                  </motion.div>
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

const popularCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Ahmedabad",
  "Chennai", "Kolkata", "Pune", "Jaipur", "Lucknow",
  "Gurugram", "Noida", "Ghaziabad", "Faridabad", "Chandigarh",
];

function LocationDropdown() {
  const [displayText, setDisplayText] = useState(() => {
    return localStorage.getItem("manualLocation") || "Detecting location...";
  });
  const [status, setStatus] = useState(() => {
    return localStorage.getItem("manualLocation") ? "success" : "loading";
  });
  const [isOpen, setIsOpen] = useState(false);
  const [manualInput, setManualInput] = useState("");
  const [showManualInput, setShowManualInput] = useState(false);
  const dropdownRef = useRef(null);

  const saveLocation = useCallback((text) => {
    setDisplayText(text);
    setStatus("success");
    localStorage.setItem("manualLocation", text);
    setShowManualInput(false);
    setManualInput("");
    setIsOpen(false);
  }, []);

  const detectLocation = useCallback(() => {
    setStatus("loading");
    setDisplayText("Detecting location...");

    const fallbackByIP = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("IP geolocation failed");
        const data = await res.json();
        const city = data.city || "Delhi NCR";
        const region = data.region || "";
        const country = data.country_name || "India";
        saveLocation(region ? `${city}, ${region}` : `${city}, ${country}`);
      } catch {
        saveLocation("Delhi NCR, India");
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
          if (!res.ok) throw new Error("Reverse geocode failed");
          const data = await res.json();
          const city = data.city || data.locality || "Delhi NCR";
          const ctry = data.countryName || "India";
          saveLocation(`${city}, ${ctry}`);
        } catch {
          fallbackByIP();
        }
      },
      () => {
        fallbackByIP();
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 120000,
      }
    );
  }, [saveLocation]);

  useEffect(() => {
    if (!localStorage.getItem("manualLocation")) {
      detectLocation();
    }
  }, [detectLocation]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setShowManualInput(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Icon = status === "loading" ? Loader2 : status === "error" ? MapPinOff : Navigation;

  return (
    <div className="hidden lg:flex items-center gap-3 pr-4 relative z-[100]" ref={dropdownRef} aria-live="polite">
      <button
        onClick={() => { if (status !== "loading") setIsOpen(!isOpen); }}
        className="location-pill-premium cursor-pointer group"
      >
        <Icon
          size={14}
          className={`shrink-0 transition-colors duration-300 ${
            status === "loading"
              ? "text-[var(--color-gold)] animate-spin"
              : status === "error"
              ? "text-stone-400"
              : "text-[var(--color-accent)]"
          }`}
        />
        <span className="text-[12px] font-medium text-stone-600 dark:text-stone-400 transition-colors duration-300 group-hover:text-stone-700 dark:group-hover:text-stone-300 whitespace-nowrap max-w-[140px] truncate">
          {displayText}
        </span>
        <ChevronDown size={10} className={`text-stone-400/50 dark:text-stone-500/50 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className="w-px h-6 bg-gradient-to-b from-stone-200/40 via-stone-200/20 to-transparent dark:from-white/[0.03] dark:via-white/[0.02] dark:to-transparent" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 mt-2 w-[320px] bg-white/95 dark:bg-[#0a1c14]/95 backdrop-blur-xl border border-stone-200/60 dark:border-white/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <div className="p-4">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-3">
                Your Location
              </p>

              {/* Current location display */}
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[var(--color-primary)]/5 dark:bg-white/5 mb-3">
                <MapPin size={16} className="text-[var(--color-accent)] shrink-0" />
                <span className="text-[13px] font-medium text-stone-700 dark:text-stone-200 truncate">
                  {displayText}
                </span>
              </div>

              {/* Detect my location button */}
              <button
                onClick={detectLocation}
                disabled={status === "loading"}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-medium text-[var(--color-primary)] dark:text-[#C9A15A] hover:bg-[var(--color-primary)]/5 dark:hover:bg-white/5 transition-colors mb-2 disabled:opacity-50"
              >
                <LocateFixed size={14} />
                Detect my location
              </button>

              {/* Manual input toggle */}
              {!showManualInput ? (
                <button
                  onClick={() => setShowManualInput(true)}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12px] font-medium text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5 transition-colors mb-3"
                >
                  <Pencil size={14} />
                  Set location manually
                </button>
              ) : (
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={manualInput}
                      onChange={(e) => setManualInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && manualInput.trim()) {
                          saveLocation(manualInput.trim());
                        }
                      }}
                      placeholder="Enter your city, area..."
                      className="flex-1 px-3 py-2 rounded-xl border border-stone-200 dark:border-white/10 bg-white dark:bg-white/5 text-[12px] text-stone-700 dark:text-stone-200 placeholder-stone-400 outline-none focus:border-[var(--color-gold)]/50 transition-colors"
                      autoFocus
                    />
                    <button
                      onClick={() => { if (manualInput.trim()) saveLocation(manualInput.trim()); }}
                      disabled={!manualInput.trim()}
                      className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary)]/90 transition-colors disabled:opacity-40"
                    >
                      <Check size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* Popular cities */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-stone-400 dark:text-stone-500 mb-2">
                  Popular Cities
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {popularCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => saveLocation(`${city}, India`)}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 ${
                        displayText.includes(city)
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-white/10"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-stone-100 dark:border-white/5 text-center">
              <p className="text-[10px] text-stone-400 dark:text-stone-500 flex items-center justify-center gap-1.5">
                <ShieldCheck size={10} />
                Your location is stored locally
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
