import React from "react";
import Hero from "./pages/Hero";
import CategoryPage from "./pages/CategoryPage";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OccasionsPage from "./pages/OccasionsPage";
import DecorPage from "./pages/DecorPage";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import CartPage from "./pages/CartPage";
import PetalFall from "./components/PetalFall";
import ScrollToTop from "./components/ScrollToTop";
import CursorFollower from "./components/CursorFollower";
import { AnimatePresence, motion } from "framer-motion";
import { Flower2 } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1a0f0a] transition-colors duration-300 dark:bg-[#05120e] dark:text-stone-100">
      <CursorFollower />
      <ScrollToTop />
      <PetalFall />
      <div className="relative w-full overflow-hidden whitespace-nowrap flex items-center bg-white/40 backdrop-blur-[10px] border-b border-white/30 dark:bg-white/[0.02] dark:border-white/10 text-stone-600 dark:text-stone-300 text-[11px] font-semibold tracking-[0.05em] py-1.5 md:py-2 shadow-[0_1px_4px_rgba(0,0,0,0.03)] group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-gold)]/[0.02] to-transparent pointer-events-none" />
        <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] animate-pulse shrink-0 mx-2.5 relative z-[1]" />
        <div className="animate-announcement-marquee group-hover:[animation-play-state:paused] relative z-[1]">
          <Flower2 size={12} className="inline text-[var(--color-gold)]/40 mr-1.5 -mt-0.5" />
          <span>Premium fresh delivery across Delhi · Noida · Gurgaon · Greater Noida · Ghaziabad · Faridabad</span>
          <span className="mx-3 text-[var(--color-gold)]/25">✦</span>
          <Flower2 size={12} className="inline text-[var(--color-gold)]/40 mr-1.5 -mt-0.5" />
          <span>Premium fresh delivery across Delhi · Noida · Gurgaon · Greater Noida · Ghaziabad · Faridabad</span>
        </div>
      </div>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Hero />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/occasions" element={<OccasionsPage />} />
            <Route path="/decor" element={<DecorPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
