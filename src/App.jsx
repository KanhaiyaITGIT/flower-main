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
    <>
      <CursorFollower />
      <ScrollToTop />
      <PetalFall />
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
    </>
  );
};

export default App;
