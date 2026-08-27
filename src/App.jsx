import React, { Suspense, lazy } from "react";
import Hero from "./pages/Hero";
import { Route, Routes, useLocation, useSearchParams, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import ScrollToTop from "./components/ScrollToTop";
import CursorFollower from "./components/CursorFollower";
import ErrorBoundary from "./components/ErrorBoundary";
import RouteSeo from "./components/RouteSeo";
import DecorBackdrop from "./components/DecorBackdrop";
import { AnimatePresence, motion } from "framer-motion";
import { Flower2 } from "lucide-react";

const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const OccasionsPage = lazy(() => import("./pages/OccasionsPage"));
const DecorPage = lazy(() => import("./pages/DecorPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Contact = lazy(() => import("./pages/Contact"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const TrackOrder = lazy(() => import("./pages/TrackOrder"));
const DeliveryInfo = lazy(() => import("./pages/DeliveryInfo"));
const BulkOrders = lazy(() => import("./pages/BulkOrders"));
const Careers = lazy(() => import("./pages/Careers"));
const BecomePartner = lazy(() => import("./pages/BecomePartner"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// /category (no cat filter) is intentionally retired as a landing page and
// safely redirects to the homepage. Category browsing via /category?cat=...
// is preserved.
const CategoryRoute = () => {
  const [searchParams] = useSearchParams();
  if (!searchParams.get("cat")) return <Navigate to="/" replace />;
  return (
    <ErrorBoundary>
      <CategoryPage />
    </ErrorBoundary>
  );
};

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 rounded-full border-2 border-[var(--color-gold)]/30 border-t-[var(--color-gold)] animate-spin" />
  </div>
);

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
    <div className="min-h-screen bg-transparent text-[#1a0f0a] transition-colors duration-300 dark:text-stone-100 pb-[64px] md:pb-0">
      <DecorBackdrop />
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
      <RouteSeo />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Hero />} />
            <Route path="/category" element={<CategoryRoute />} />
            <Route path="/category/" element={<CategoryRoute />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default App;
