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
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import TrackOrder from "./pages/TrackOrder";
import DeliveryInfo from "./pages/DeliveryInfo";
import BulkOrders from "./pages/BulkOrders";
import Careers from "./pages/Careers";
import BecomePartner from "./pages/BecomePartner";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import MobileBottomNav from "./components/MobileBottomNav";
import ScrollToTop from "./components/ScrollToTop";
import CursorFollower from "./components/CursorFollower";
import ErrorBoundary from "./components/ErrorBoundary";
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1a0f0a] transition-colors duration-300 dark:bg-[#05120e] dark:text-stone-100 pb-[64px] md:pb-0">
      <CursorFollower />
      <ScrollToTop />
      <div className="relative w-full overflow-hidden whitespace-nowrap flex items-center bg-gradient-to-r from-[#163827]/95 via-[#1a3d28] to-[#163827]/95 text-stone-200 text-[11px] font-semibold tracking-[0.08em] py-2 md:py-2.5 group border-b border-[rgba(214,179,106,0.06)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse shrink-0 mx-3 relative z-[1] shadow-[0_0_8px_rgba(201,161,90,0.4)]" />
        <div className="animate-announcement-marquee group-hover:[animation-play-state:paused] relative z-[1] flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[rgba(214,179,106,0.12)] border border-[rgba(214,179,106,0.15)] text-[var(--color-gold)] text-[9px] font-bold uppercase tracking-[0.12em]">
            Same Day
          </span>
          <span>Premium fresh delivery across Delhi · Noida · Gurgaon · Greater Noida · Ghaziabad · Faridabad</span>
          <span className="text-[var(--color-gold)]/30">✦</span>
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[rgba(214,179,106,0.12)] border border-[rgba(214,179,106,0.15)] text-[var(--color-gold)] text-[9px] font-bold uppercase tracking-[0.12em]">
            Same Day
          </span>
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
            <Route path="/category" element={<ErrorBoundary><CategoryPage /></ErrorBoundary>} />
            <Route path="/occasions" element={<OccasionsPage />} />
            <Route path="/decor" element={<DecorPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/delivery-info" element={<DeliveryInfo />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default App;
