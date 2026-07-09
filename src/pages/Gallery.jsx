import { useState, useMemo, useEffect, useCallback } from "react";
import { Play, Image as ImageIcon, Film, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";

// Import all images from the src/assets/gallery folder
import gal0 from "../assets/gallery/gal.jpeg";
import gal1 from "../assets/gallery/gal1.jpeg";
import gal2 from "../assets/gallery/gal2.jpeg";
import gal3 from "../assets/gallery/gal3.jpeg";
import gal4 from "../assets/gallery/gal4.jpeg";
import gal5 from "../assets/gallery/gal5.jpeg";
import gal6 from "../assets/gallery/gal6.jpeg";
import gal7 from "../assets/gallery/gal7.jpeg";
import gal8 from "../assets/gallery/gal8.jpeg";
import gal9 from "../assets/gallery/gal9.jpeg";
import gal10 from "../assets/gallery/gal10.jpeg";
import gal11 from "../assets/gallery/gal11.jpeg";
import gal12 from "../assets/gallery/gal12.jpeg";
import gal13 from "../assets/gallery/gal13.jpeg";
import gal14 from "../assets/gallery/gal14.jpeg";
import gal15 from "../assets/gallery/gal15.jpeg";
import gal16 from "../assets/gallery/gal16.jpeg";
import gal17 from "../assets/gallery/gal17.jpeg";
import gal18 from "../assets/gallery/gal18.jpeg";
import gal19 from "../assets/gallery/gal19.jpeg";
import gal20 from "../assets/gallery/gal20.jpeg";
import gal21 from "../assets/gallery/gal21.jpeg";
import gal22 from "../assets/gallery/gal22.jpeg";
import gal23 from "../assets/gallery/gal23.jpeg";
import gal24 from "../assets/gallery/gal24.jpeg";
import gal25 from "../assets/gallery/gal25.jpeg";
import gal26 from "../assets/gallery/gal26.jpeg";
import gal27 from "../assets/gallery/gal27.jpeg";

// Import all videos from the src/assets/gallery folder
import gal28 from "../assets/gallery/gal28.mp4";
import gal29 from "../assets/gallery/gal29.mp4";
import gal30 from "../assets/gallery/gal30.mp4";
import gal31 from "../assets/gallery/gal31.mp4";
import gal32 from "../assets/gallery/gal32.mp4";
import gal33 from "../assets/gallery/gal33.mp4";
import gal34 from "../assets/gallery/gal34.mp4";
import gal35 from "../assets/gallery/gal35.mp4";
import gal36 from "../assets/gallery/gal36.mp4";
import gal37 from "../assets/gallery/gal37.mp4";
import gal38 from "../assets/gallery/gal38.mp4";
import gal39 from "../assets/gallery/gal39.mp4";

// Combined Gallery Items
const galleryItems = [
  { id: 1, src: gal0, type: "image", size: "large", accent: "#C9A15A", bg: "#142419", alt: "Exquisite wedding mandap decoration with red and gold florals" },
  { id: 2, src: gal1, type: "image", size: "medium", accent: "#E07858", bg: "#23261a", alt: "Elegant floral entrance archway for anniversary celebration" },
  { id: 3, src: gal2, type: "image", size: "small", accent: "#D6537A", bg: "#211a1f", alt: "Delicate rose centerpieces on luxurious banquet tables" },
  { id: 4, src: gal3, type: "image", size: "medium", accent: "#5080B8", bg: "#1a2128", alt: "Pastel themed birthday stage decoration with balloons and hydrangeas" },
  { id: 5, src: gal4, type: "image", size: "large", accent: "#C9A15A", bg: "#26231a", alt: "Traditional haldi ceremony setup with bright marigold strings" },
  { id: 6, src: gal5, type: "image", size: "small", accent: "#C8524A", bg: "#251a1a", alt: "Romantic pathway decoration with lanterns and white petals" },
  { id: 7, src: gal6, type: "image", size: "medium", accent: "#7B68C8", bg: "#1f1a26", alt: "Contemporary backdrop design featuring neon lights and pampas grass" },
  { id: 8, src: gal7, type: "image", size: "large", accent: "#A09080", bg: "#222120", alt: "Minimalist floral installation for an indoor reception" },
  { id: 9, src: gal8, type: "image", size: "small", accent: "#F4C9D1", bg: "#261c1e", alt: "Lush green foliage and white lily hanging floral structures" },
  { id: 10, src: gal9, type: "image", size: "medium", accent: "#6048A8", bg: "#1e1a26", alt: "Dreamy outdoor canopy decoration with fairy lights and roses" },
  { id: 11, src: gal10, type: "image", size: "large", accent: "#C9A15A", bg: "#1c211a", alt: "Sophisticated flower wall background for photo booth" },
  { id: 12, src: gal11, type: "image", size: "small", accent: "#D88898", bg: "#261a22", alt: "Vibrant mehndi ceremony decor with colorful drapes and flowers" },
  { id: 13, src: gal12, type: "image", size: "medium", accent: "#5080B8", bg: "#1a2228", alt: "Classic church aisle floral stands and white satin ribbons" },
  { id: 14, src: gal13, type: "image", size: "large", accent: "#E07858", bg: "#281f1a", alt: "Modern geometric floral pillars for couple stage" },
  { id: 15, src: gal14, type: "image", size: "small", accent: "#D6537A", bg: "#251a20", alt: "Stunning orchid and carnation ceiling decoration" },
  { id: 16, src: gal15, type: "image", size: "medium", accent: "#C9A15A", bg: "#28261a", alt: "Grand entrance floral columns with warm uplighting" },
  { id: 17, src: gal16, type: "image", size: "large", accent: "#C8524A", bg: "#281a1a", alt: "Bohemian style outdoor picnic table decoration with wildflowers" },
  { id: 18, src: gal17, type: "image", size: "small", accent: "#7B68C8", bg: "#1f1a28", alt: "Delicate cherry blossom indoor tree installations" },
  { id: 19, src: gal18, type: "image", size: "medium", accent: "#A09080", bg: "#232221", alt: "Elegant tablescape featuring vintage brass candlesticks and greenery" },
  { id: 20, src: gal19, type: "image", size: "large", accent: "#F4C9D1", bg: "#281e20", alt: "Stunning bridal stage with cascades of pink roses" },
  { id: 21, src: gal20, type: "image", size: "small", accent: "#6048A8", bg: "#1f1a28", alt: "Custom monogram floral backdrop for upscale event" },
  { id: 22, src: gal21, type: "image", size: "medium", accent: "#D88898", bg: "#281a24", alt: "Beautiful lotus-inspired seating arrangement for bride and groom" },
  { id: 23, src: gal22, type: "image", size: "large", accent: "#C9A15A", bg: "#23261a", alt: "Majestic floral arch framing a scenic outdoor view" },
  { id: 24, src: gal23, type: "image", size: "small", accent: "#5080B8", bg: "#1a2128", alt: "Lush tropical leaves and white anthurium arrangements" },
  { id: 25, src: gal24, type: "image", size: "medium", accent: "#E07858", bg: "#281f1a", alt: "Vibrant yellow and orange marigold backdrop for traditional prayers" },
  { id: 26, src: gal25, type: "image", size: "large", accent: "#D6537A", bg: "#281a20", alt: "Warm gold candlelit path surrounded by red rose petals" },
  { id: 27, src: gal26, type: "image", size: "small", accent: "#C9A15A", bg: "#28261a", alt: "Magical fairy-tale forest themed stage decor" },
  { id: 28, src: gal27, type: "image", size: "medium", accent: "#C8524A", bg: "#281a1a", alt: "Stunning hanging garden installation above banquet tables" },
  { id: 29, src: gal28, type: "video", size: "large", accent: "#C9A15A", bg: "#121a14", alt: "Cinematic walkthrough of grand wedding venue floral styling" },
  { id: 30, src: gal29, type: "video", size: "medium", accent: "#E07858", bg: "#181412", alt: "Time-lapse of setting up marigold strings for haldi function" },
  { id: 31, src: gal30, type: "video", size: "small", accent: "#D6537A", bg: "#181216", alt: "Close-up slow motion of fresh rose petals detailing on stage" },
  { id: 32, src: gal31, type: "video", size: "medium", accent: "#5080B8", bg: "#121518", alt: "Sparkling stage lighting reveal with floral backdrop" },
  { id: 33, src: gal32, type: "video", size: "large", accent: "#C9A15A", bg: "#181612", alt: "Overview of a breathtaking outdoor reception night layout" },
  { id: 34, src: gal33, type: "video", size: "small", accent: "#C8524A", bg: "#181212", alt: "Groom and bride entry pathway walkthrough with flowers and cold pyros" },
  { id: 35, src: gal34, type: "video", size: "medium", accent: "#7B68C8", bg: "#151218", alt: "Close-up of premium glass vase rose centerpieces and crystals" },
  { id: 36, src: gal35, type: "video", size: "large", accent: "#A09080", bg: "#161514", alt: "Beautiful highlights of floral decorations at a premium ballroom event" },
  { id: 37, src: gal36, type: "video", size: "small", accent: "#F4C9D1", bg: "#181315", alt: "Quick tour of hand-crafted flower wall and photo booth details" },
  { id: 38, src: gal37, type: "video", size: "medium", accent: "#6048A8", bg: "#141218", alt: "Magical fairy lights and orchid canopy night view walkthrough" },
  { id: 39, src: gal38, type: "video", size: "large", accent: "#D88898", bg: "#181215", alt: "Stunning outdoor mandap setup by the beach walkthrough video" },
  { id: 40, src: gal39, type: "video", size: "medium", accent: "#C9A15A", bg: "#121a14", alt: "Detailed look at luxury dining table floral layout setup" }
];

const PAGE_SIZE = 12;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all"); // "all" | "photo" | "video"
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Filter items based on active tab selection
  const filteredItems = useMemo(() => {
    if (activeFilter === "photo") {
      return galleryItems.filter((item) => item.type === "image");
    }
    if (activeFilter === "video") {
      return galleryItems.filter((item) => item.type === "video");
    }
    return galleryItems;
  }, [activeFilter]);

  // Handle visible portion for paging / load more
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredItems.length));
  };

  // Reset pagination count on filter change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeFilter]);

  // Navigate lightbox items
  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  }, [filteredItems]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  }, [filteredItems]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === -1) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setLightboxIndex(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Dynamic hover video play helpers
  const handleVideoHoverStart = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.play().catch((err) => {
        // Safe check for auto-play blocks
        console.debug("Muted hover play prevented:", err);
      });
    }
  };

  const handleVideoHoverEnd = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const activeLightboxItem = lightboxIndex >= 0 ? filteredItems[lightboxIndex] : null;

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "#0D1F0F",
        minHeight: "100vh",
        color: "#F7F0E8",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── Responsive masonry grid ── */
        .gallery-main {
          columns: 4;
          column-gap: 24px;
        }
        @media (max-width: 1200px) {
          .gallery-main { columns: 3 !important; column-gap: 20px !important; }
        }
        @media (max-width: 900px) {
          .gallery-main { columns: 2 !important; column-gap: 16px !important; padding: 24px 24px 40px !important; }
        }
        @media (max-width: 560px) {
          .gallery-main { columns: 1 !important; padding: 16px 16px 32px !important; column-gap: 0 !important; }
        }

        .flower-card {
          break-inside: avoid;
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (max-width: 560px) { .flower-card { margin-bottom: 20px; } }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card-inner {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border: 1px solid rgba(200, 168, 130, 0.1);
        }
        
        /* dynamic size classes for layout variance */
        .size-small { height: 240px; }
        .size-medium { height: 340px; }
        .size-large { height: 440px; }
        @media (max-width: 1200px) {
          .size-small { height: 210px; }
          .size-medium { height: 310px; }
          .size-large { height: 410px; }
        }
        @media (max-width: 900px) {
          .size-small { height: 200px; }
          .size-medium { height: 280px; }
          .size-large { height: 360px; }
        }
        @media (max-width: 560px) {
          .size-small { height: 260px; }
          .size-medium { height: 320px; }
          .size-large { height: 380px; }
        }

        .card-inner:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 40px rgba(201,161,90,0.25);
          border-color: rgba(201, 161, 90, 0.4);
        }

        .card-inner img, .card-inner video {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-inner:hover img, .card-inner:hover video { transform: scale(1.06); }

        .card-accent-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 4px; z-index: 3;
          opacity: 0.8;
        }

        /* Glass badge top-left */
        .card-chip {
          position: absolute; top: 16px; left: 16px; z-index: 3;
          padding: 6px 14px; border-radius: 20px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; color: #fff;
          background: rgba(13, 31, 15, 0.65);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          display: flex; align-items: center; gap: 6px;
        }

        .card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(13,31,15,0.92) 0%, rgba(13,31,15,0.4) 50%, rgba(13,31,15,0) 100%);
          display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;
          opacity: 0; transition: opacity 0.35s ease;
          z-index: 2;
        }
        .card-inner:hover .card-overlay { opacity: 1; }
        
        @media (hover: none) {
          .card-overlay { opacity: 1; background: linear-gradient(to top, rgba(13,31,15,0.85) 0%, rgba(13,31,15,0) 70%); }
        }

        .card-title {
          font-size: 13px; font-weight: 500; color: #F7F0E8;
          margin-bottom: 6px; line-height: 1.4;
          transform: translateY(10px); transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-inner:hover .card-title { transform: translateY(0); }

        .card-action-text {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          font-weight: 700; color: #C9A15A; display: flex; align-items: center; gap: 4px;
          transform: translateY(10px); transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;
        }
        .card-inner:hover .card-action-text { transform: translateY(0); }

        .video-play-indicator {
          position: absolute; inset: 0; display: flex; align-items: center;
          justify-content: center; z-index: 1; pointer-events: none;
        }
        .play-btn-circle {
          width: 50px; height: 50px; border-radius: 50%;
          background: rgba(201, 161, 90, 0.85); color: #0D1F0F;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-inner:hover .play-btn-circle {
          transform: scale(1.15);
          background: #C9A15A;
        }

        .load-more-btn {
          padding: 16px 48px; border-radius: 30px; border: 1px solid #C9A15A;
          background: transparent; color: #C9A15A; cursor: pointer;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .load-more-btn:hover {
          background: #C9A15A; color: #0D1F0F;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(201,161,90,0.25);
        }
        @media (max-width: 480px) {
          .load-more-btn { width: 100%; padding: 14px 20px; }
        }

        /* ── Glassmorphism Filters ── */
        .filter-container {
          display: inline-flex;
          background: rgba(201, 161, 90, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(201, 161, 90, 0.15);
          padding: 6px;
          border-radius: 40px;
          gap: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          margin-bottom: 40px;
        }
        .filter-btn {
          background: transparent; border: none;
          color: rgba(247, 240, 232, 0.7);
          padding: 10px 24px; border-radius: 30px;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500;
          cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; align-items: center; gap: 8px;
        }
        .filter-btn:hover {
          color: #F7F0E8;
          background: rgba(247, 240, 232, 0.05);
        }
        .filter-btn.active {
          background: #C9A15A;
          color: #0D1F0F;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(201, 161, 90, 0.3);
        }
        @media (max-width: 500px) {
          .filter-container { width: 100%; display: flex; flex-direction: column; border-radius: 20px; }
          .filter-btn { justify-content: center; width: 100%; }
        }

        /* Lightbox Image and Video styling */
        .lightbox-media-container {
          position: relative; display: flex; align-items: center;
          justify-content: center; width: 100%; max-height: 75vh;
          overflow: hidden; border-radius: 12px;
          background: #000;
        }
        .lightbox-img, .lightbox-video {
          max-width: 100%; max-height: 75vh; object-fit: contain;
          display: block;
        }

        .gallery-hero { padding: 90px 40px 40px; }
        @media (max-width: 900px) { .gallery-hero { padding: 70px 24px 30px; } }
        @media (max-width: 560px) { .gallery-hero { padding: 50px 16px 20px; } }

        /* Navigation Arrows on Lightbox */
        .lightbox-nav-btn {
          width: 54px; height: 54px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #F7F0E8; display: flex; align-items: center;
          justify-content: center; cursor: pointer; transition: all 0.3s;
          backdrop-filter: blur(10px);
        }
        .lightbox-nav-btn:hover {
          background: #C9A15A; color: #0D1F0F;
          border-color: #C9A15A; transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .lightbox-nav-btn { width: 44px; height: 44px; }
        }
      `}</style>

      {/* Elegant Floating Leaf & Floral Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingDecoration type="leaf" side="left" top="4%" size={26} opacity={0.12} delay={0.4} duration={14} animation="sway3" color="#C9A15A" />
        <FloatingDecoration type="petal6" side="right" top="3%" size={22} opacity={0.12} delay={1.3} duration={13} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="left" bottom="10%" size={30} opacity={0.1} delay={0.7} duration={12} animation="sway1" color="#C9A15A" />
        <FloatingDecoration type="petal" side="right" bottom="8%" size={20} opacity={0.12} delay={2} duration={15} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="rose" side="right" top="6%" size={36} opacity={0.08} delay={0} duration={18} animation="bloom" color="#C9A15A" />
        <FloatingDecoration type="lotus" side="left" top="auto" bottom="15%" size={40} opacity={0.08} delay={2} duration={16} animation="drift-bloom" color="#C9A15A" />
      </div>

      {/* Soft Bokeh Backdrop Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        <BokehLights spots={[
          { color: "from-[#C9A15A]/10 to-transparent", size: 300, top: "-6%", right: "-4%", anim: "bk-drift1", delay: 0, duration: 32 },
          { color: "from-[#D6537A]/8 to-transparent", size: 260, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 34 },
          { color: "from-green-700/8 to-transparent", size: 240, top: "40%", left: "35%", anim: "bk-float", delay: 1, duration: 28 },
        ]} />
      </div>

      {/* Premium Header/Hero */}
      <header className="gallery-hero" style={{ textAlign: "center", borderBottom: "1px solid rgba(201,161,90,0.15)", position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.3em",
            color: "#C9A15A",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Our Masterpieces
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6.5vw, 5.2rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            margin: "0 0 24px",
            color: "#F7F0E8",
          }}
        >
          Every Petal,
          <br />
          <em style={{ color: "#C9A15A", fontStyle: "italic" }}>a gorgeous story.</em>
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 16px)",
            fontWeight: 300,
            color: "rgba(247,240,232,0.65)",
            maxWidth: "500px",
            margin: "0 auto 30px",
            lineHeight: 1.8,
            padding: "0 16px",
          }}
        >
          Explore a carefully curated showcase of our luxury floral design, custom event decorations, and visual stories.
        </p>

        {/* Tab Filters */}
        <div className="filter-container">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Works
          </button>
          <button
            className={`filter-btn ${activeFilter === "photo" ? "active" : ""}`}
            onClick={() => setActiveFilter("photo")}
          >
            <ImageIcon size={14} />
            Stills
          </button>
          <button
            className={`filter-btn ${activeFilter === "video" ? "active" : ""}`}
            onClick={() => setActiveFilter("video")}
          >
            <Film size={14} />
            Motion
          </button>
        </div>
      </header>

      {/* Masonry Grid */}
      <main
        className="gallery-main"
        style={{
          padding: "48px 40px 40px",
          maxWidth: "1400px",
          margin: "0 auto",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
        aria-label="Shivam Florist gallery grid"
      >
        {visibleItems.map((item, index) => {
          // Find index of this item in the filtered list to link to Lightbox
          const globalIndexInFilter = filteredItems.findIndex((x) => x.id === item.id);

          return (
            <figure
              key={item.id}
              className="flower-card"
              style={{ margin: 0, animationDelay: `${(index % PAGE_SIZE) * 0.05}s` }}
            >
              <div
                className={`card-inner size-${item.size}`}
                style={{ background: item.bg }}
                onClick={() => setLightboxIndex(globalIndexInFilter)}
                onMouseEnter={item.type === "video" ? handleVideoHoverStart : undefined}
                onMouseLeave={item.type === "video" ? handleVideoHoverEnd : undefined}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.type}: ${item.alt}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setLightboxIndex(globalIndexInFilter);
                }}
              >
                <span className="card-accent-bar" style={{ background: item.accent }} />
                
                {/* Visual Type Indicator Badge */}
                <span className="card-chip">
                  {item.type === "video" ? (
                    <>
                      <Film size={11} color="#C9A15A" />
                      Motion #{String(item.id).padStart(2, "0")}
                    </>
                  ) : (
                    <>
                      <ImageIcon size={11} color="#C9A15A" />
                      Still #{String(item.id).padStart(2, "0")}
                    </>
                  )}
                </span>

                {/* Render Media */}
                {item.type === "video" ? (
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="video-play-indicator">
                      <div className="play-btn-circle">
                        <Play size={18} fill="#0D1F0F" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                  />
                )}

                {/* Card Overlay on Hover */}
                <div className="card-overlay">
                  <h3 className="card-title">{item.alt}</h3>
                  <span className="card-action-text">
                    {item.type === "video" ? "Play Motion Video" : "View Full Frame"}
                    <Eye size={12} style={{ marginLeft: "4px" }} />
                  </span>
                </div>
              </div>
              <figcaption style={{ display: "none" }}>{item.alt}</figcaption>
            </figure>
          );
        })}
      </main>

      {/* Pagination - Load More */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          padding: "20px 20px 90px",
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "13px",
            color: "rgba(247,240,232,0.45)",
            letterSpacing: "0.06em",
          }}
        >
          Showing {visibleItems.length} of {filteredItems.length} works
        </p>
        {hasMore && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>

      {/* Premium Lightbox Modal */}
      {activeLightboxItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 22, 12, 0.96)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            backdropFilter: "blur(15px)",
          }}
          onClick={() => setLightboxIndex(-1)}
        >
          {/* Lightbox Header Counter and Close */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "0",
              right: "0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 30px",
              zIndex: 1010,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#F7F0E8",
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                pointerEvents: "auto",
              }}
            >
              {activeLightboxItem.type === "video" ? "MOTION" : "STILL"}{" "}
              {lightboxIndex + 1} OF {filteredItems.length}
            </span>
            <button
              onClick={() => setLightboxIndex(-1)}
              aria-label="Close Lightbox"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                cursor: "pointer",
                color: "#F7F0E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
                pointerEvents: "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A15A";
                e.currentTarget.style.color = "#0D1F0F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.color = "#F7F0E8";
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Core Content Area with side navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1400px",
              padding: "0 24px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="lightbox-nav-btn"
              aria-label="Previous Media"
              style={{ flexShrink: 0, zIndex: 1010 }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Media Canvas */}
            <div
              className="lightbox-media-container"
              style={{
                boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${activeLightboxItem.accent}22`,
                border: `1px solid ${activeLightboxItem.accent}44`,
                margin: "0 20px",
                flexGrow: 1,
              }}
            >
              {activeLightboxItem.type === "video" ? (
                <video
                  src={activeLightboxItem.src}
                  className="lightbox-video"
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.alt}
                  className="lightbox-img"
                />
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="lightbox-nav-btn"
              aria-label="Next Media"
              style={{ flexShrink: 0, zIndex: 1010 }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Captions */}
          <div
            style={{
              marginTop: "24px",
              textAlign: "center",
              maxWidth: "600px",
              padding: "0 20px",
              zIndex: 1010,
              pointerEvents: "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(15px, 2.5vw, 19px)",
                color: "#F7F0E8",
                margin: "0 0 8px 0",
                lineHeight: 1.4,
              }}
            >
              {activeLightboxItem.alt}
            </p>
            <p
              style={{
                fontSize: "12px",
                color: activeLightboxItem.accent,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Exclusive Design Showcase
            </p>
          </div>
        </div>
      )}

      {/* Premium Footer Accent */}
      <footer
        style={{
          borderTop: "1px solid rgba(201,161,90,0.15)",
          padding: "50px 40px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          background: "#0a170c",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem",
            color: "rgba(247,240,232,0.35)",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          Grown with intention. Arranged with love.
        </p>
      </footer>
    </div>
  );
}
