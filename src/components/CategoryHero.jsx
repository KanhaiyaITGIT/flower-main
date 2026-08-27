import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight, Phone, Sparkles } from "lucide-react";

// Local brand assets (no external/remote image sources).
import bouquet1 from "../assets/Bouquet/Bouquet1.jpg";
import bouquet11 from "../assets/Bouquet/Bouquet11.jpg";
import bouquet20 from "../assets/Bouquet/Bouquet20.jpg";
import wed1 from "../assets/recepmarriage/wed1.jpg";
import wed5 from "../assets/recepmarriage/wed5.jpg";
import bride1 from "../assets/recepmarriage/bride1.jpg";
import rece1 from "../assets/recepmarriage/rece1.jpg";
import rece5 from "../assets/recepmarriage/rece5.jpg";
import birthday1 from "../assets/birthday/birthday1.png";
import birthday15 from "../assets/birthday/bi15.jpg";
import anni2 from "../assets/anniversory/anni2.jpg";
import anni13 from "../assets/anniversory/anni13.jpg";
import haldi1 from "../assets/haldi/h1.jpg";
import haldi7 from "../assets/haldi/h7.jpg";
import dev1 from "../assets/devotional/dev1.jpg";
import dev8 from "../assets/devotional/dev8.jpg";
import baloon2 from "../assets/baloons/b2.jpg";
import baloon6 from "../assets/baloons/b6.jpg";
import candle1 from "../assets/candle/c1.jpg";
import candle10 from "../assets/candle/c10.jpg";

const L = {
  bouquet1,
  bouquet11,
  bouquet20,
  wed1,
  wed5,
  bride1,
  rece1,
  rece5,
  birthday1,
  birthday15,
  anni2,
  anni13,
  haldi1,
  haldi7,
  dev1,
  dev8,
  baloon2,
  baloon6,
  candle1,
  candle10,
};

const AnimatedStat = ({ value, label, accent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const numericMatch = value.match(/^([\d.]+)([+★]*)$/);
  const isNumeric = numericMatch && numericMatch[1];
  const endNum = isNumeric ? parseFloat(numericMatch[1]) : 0;
  const suffix = isNumeric ? (numericMatch[2] || "") : "";
  const isTextOnly = !isNumeric;

  const [count, setCount] = useState(0);
  const [showDecimal, setShowDecimal] = useState(false);

  useEffect(() => {
    if (!isInView || isTextOnly) return;
    setShowDecimal(endNum % 1 !== 0);
    let startTime = null;
    const duration = 2;
    let raf;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(endNum * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(endNum);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, endNum, isTextOnly]);

  const displayVal = isTextOnly
    ? value
    : showDecimal
      ? count.toFixed(1) + suffix
      : Math.floor(count).toLocaleString() + suffix;

  return (
    <span ref={ref} className="text-white font-bold text-sm lg:text-base font-serif-display">
      {isTextOnly ? value : displayVal}
    </span>
  );
};

const categoryConfig = {
  Wedding: {
    heading: "Grand Wedding",
    highlight: "Decorations",
    subtitle: "Transform your special day into an unforgettable celebration with our exquisite wedding floral arrangements — from majestic mandaps to elegant bridal bouquets, every detail crafted to perfection.",
    quote: "Crafted for the most beautiful day of your life.",
    badgeEmoji: "👑",
    badgeText: "Luxury Wedding Collection",
    gradient: "from-[#3c0f1a] via-[#5c1a2a] to-[#2d0a12]",
    bgImage: L.wed1,
    bgIllustration: L.bride1,
    accent: "#C9A15A",
    badges: [
      { text: "Luxury Stage Decoration" },
      { text: "Floral Entrance Arch" },
      { text: "Mandap Design" },
    ],
    stats: [
      { value: "5000+", label: "Wedding Decorations" },
      { value: "4.9★", label: "Customer Rating" },
      { value: "Same Day", label: "Delivery Available" },
    ],
    heroImage: L.wed5,
    sliderImages: [
      { src: L.wed5, label: "Luxury Wedding Bouquet" },
      { src: L.wed1, label: "Grand Stage Decor" },
      { src: L.bride1, label: "Mandap Design" },
    ],
  },
  Birthday: {
    heading: "Celebrate Every",
    highlight: "Birthday Beautifully",
    subtitle: "Make their special day unforgettable with vibrant floral arrangements, balloon surprises, and handcrafted gifts that bring joy and color to every celebration.",
    quote: "Every birthday deserves unforgettable blooms.",
    badgeEmoji: "🎂",
    badgeText: "Trending Birthday Themes",
    gradient: "from-[#f8a5a5] via-[#f5cdcd] to-[#fce4e4]",
    bgImage: L.birthday1,
    bgIllustration: L.birthday15,
    accent: "#F472B6",
    badges: [
      { text: "Balloon Decoration" },
      { text: "Cake Arrangement" },
      { text: "Flower Surprise" },
    ],
    stats: [
      { value: "8000+", label: "Birthday Deliveries" },
      { value: "4.8★", label: "Customer Rating" },
      { value: "Same Day", label: "Delivery Available" },
    ],
    heroImage: L.birthday15,
    sliderImages: [
      { src: L.birthday15, label: "Luxury Birthday Cake" },
      { src: L.birthday1, label: "Birthday Floral Basket" },
      { src: L.birthday15, label: "Birthday Bouquet" },
    ],
  },
  Anniversary: {
    heading: "Forever in",
    highlight: "Full Bloom",
    subtitle: "Celebrate years of togetherness with timeless floral arrangements that speak the language of everlasting love — from classic red roses to luxury preserved blooms.",
    quote: "Love grows stronger with every bloom.",
    badgeEmoji: "❤️",
    badgeText: "Romantic Collection",
    gradient: "from-[#4a0e1b] via-[#6b1d30] to-[#3a0a15]",
    bgImage: L.anni2,
    bgIllustration: L.anni13,
    accent: "#E11D48",
    badges: [
      { text: "Luxury Rose Boxes" },
      { text: "Preserved Flowers" },
      { text: "Couple Gift Combos" },
    ],
    stats: [
      { value: "6500+", label: "Anniversary Gifts" },
      { value: "4.9★", label: "Customer Rating" },
      { value: "Gift Wrap", label: "Premium Packaging" },
    ],
    heroImage: L.anni13,
    sliderImages: [
      { src: L.anni13, label: "Eternal Love Bouquet" },
      { src: L.anni2, label: "Preserved Flower Box" },
      { src: L.anni13, label: "Luxury Rose Arrangement" },
    ],
  },
  Reception: {
    heading: "Royal",
    highlight: "Reception Décor",
    subtitle: "Create a grand entrance and an unforgettable atmosphere with our premium reception floral designs — from stunning backdrops to elegant table centrepieces.",
    quote: "Grand moments deserve grand entrances.",
    badgeEmoji: "💎",
    badgeText: "Premium Reception Decor",
    gradient: "from-[#0a2e1a] via-[#0d4a2a] to-[#061f12]",
    bgImage: L.rece1,
    bgIllustration: L.rece5,
    accent: "#C9A15A",
    badges: [
      { text: "Grand Floral Backdrop" },
      { text: "Table Centrepieces" },
      { text: "Stage Decoration" },
    ],
    stats: [
      { value: "3200+", label: "Reception Setups" },
      { value: "4.9★", label: "Customer Rating" },
      { value: "Bespoke", label: "Custom Designs" },
    ],
    heroImage: L.wed1,
    sliderImages: [
      { src: L.wed1, label: "Grand Reception Setup" },
      { src: L.rece5, label: "Elegant Table Decor" },
      { src: L.rece1, label: "Floral Backdrop" },
    ],
  },
  Haldi: {
    heading: "Traditional",
    highlight: "Haldi Celebrations",
    subtitle: "Brighten your haldi ceremony with vibrant marigold decorations, fresh floral setups, and joyful yellow-themed arrangements that radiate warmth and tradition.",
    quote: "Golden traditions, blooming celebrations.",
    badgeEmoji: "🌼",
    badgeText: "Traditional Haldi Decor",
    gradient: "from-[#8a5a1a] via-[#c47a2a] to-[#6a4010]",
    bgImage: L.haldi1,
    bgIllustration: L.haldi7,
    accent: "#F59E0B",
    badges: [
      { text: "Marigold Decor" },
      { text: "Yellow Floral Setup" },
      { text: "Traditional Stage" },
    ],
    stats: [
      { value: "2400+", label: "Haldi Decorations" },
      { value: "4.8★", label: "Customer Rating" },
      { value: "Fresh", label: "Farm Direct" },
    ],
    heroImage: L.haldi7,
    sliderImages: [
      { src: L.haldi7, label: "Haldi Stage Setup" },
      { src: L.haldi1, label: "Marigold Decor" },
      { src: L.haldi7, label: "Traditional Floral Setup" },
    ],
  },
  Devotional: {
    heading: "Sacred Floral",
    highlight: "Offerings",
    subtitle: "Bring divine blessings to your home and temple with sacred floral offerings — fresh garlands, lotus blooms, and aromatic flower arrangements for every spiritual occasion.",
    quote: "Flowers offered with devotion and purity.",
    badgeEmoji: "🪷",
    badgeText: "Sacred Floral Offerings",
    gradient: "from-[#8a3a0a] via-[#b85a1a] to-[#6a2a08]",
    bgImage: L.dev1,
    bgIllustration: L.dev8,
    accent: "#D97706",
    badges: [
      { text: "Temple Decoration" },
      { text: "Fresh Garlands" },
      { text: "Same Day Delivery" },
    ],
    stats: [
      { value: "10,000+", label: "Devotional Orders" },
      { value: "4.7★", label: "Customer Rating" },
      { value: "Fresh", label: "Daily Farm Picked" },
    ],
    heroImage: L.dev8,
    sliderImages: [
      { src: L.dev8, label: "Temple Flowers" },
      { src: L.dev1, label: "Fresh Garlands" },
      { src: L.dev8, label: "Aromatic Offerings" },
    ],
  },
  Bouquets: {
    heading: "Fresh Blooms,",
    highlight: "Endless Emotions",
    subtitle: "Discover our exquisite collection of handcrafted bouquets — from classic roses to modern wildflower arrangements, each tied with love and delivered with care.",
    quote: "Handcrafted with love, delivered with care.",
    badgeEmoji: "💐",
    badgeText: "Handcrafted Bouquets",
    gradient: "from-[#2d1a12] via-[#4a2a1a] to-[#1f120a]",
    bgImage: L.bouquet1,
    bgIllustration: L.bouquet11,
    accent: "#C9A15A",
    badges: [
      { text: "Handcrafted Bouquets" },
      { text: "Premium Wrapping" },
      { text: "Same Day Delivery" },
    ],
    stats: [
      { value: "15,000+", label: "Bouquets Delivered" },
      { value: "4.9★", label: "Customer Rating" },
      { value: "Fresh", label: "Farm Direct" },
    ],
    heroImage: L.bouquet20,
    sliderImages: [
      { src: L.bouquet20, label: "Classic Rose Bouquet" },
      { src: L.bouquet1, label: "Premium Wrapped Bouquet" },
      { src: L.bouquet11, label: "Luxury Floral Arrangement" },
    ],
  },
  Flowers: {
    heading: "Nature's Finest,",
    highlight: "Artfully Arranged",
    subtitle: "Explore our curated selection of premium fresh flowers — from classic roses and lilies to seasonal specials — perfect for every occasion and sentiment.",
    quote: "Freshly picked. Expertly arranged.",
    badgeEmoji: "🌸",
    badgeText: "Fresh Imported Flowers",
    gradient: "from-[#2d1a12] via-[#4a2a1a] to-[#1f120a]",
    bgImage: L.bouquet11,
    bgIllustration: L.bouquet1,
    accent: "#C9A15A",
    badges: [
      { text: "Premium Fresh Flowers" },
      { text: "Seasonal Specials" },
      { text: "Expertly Curated" },
    ],
    stats: [
      { value: "20,000+", label: "Flower Deliveries" },
      { value: "4.8★", label: "Customer Rating" },
      { value: "Farm", label: "Direct Sourcing" },
    ],
    heroImage: L.bouquet1,
    sliderImages: [
      { src: L.bouquet1, label: "Mixed Fresh Blooms" },
      { src: L.bouquet20, label: "Seasonal Specials" },
      { src: L.bouquet11, label: "Exquisite Floral Art" },
    ],
  },
  Corporate: {
    heading: "Corporate",
    highlight: "Floral Elegance",
    subtitle: "Make a lasting impression with sophisticated corporate floral designs — from lobby arrangements to event decor, we bring professionalism and beauty together.",
    quote: "Elegance that speaks professionalism.",
    badgeEmoji: "💼",
    badgeText: "Corporate Floral Design",
    gradient: "from-[#1a1a1a] via-[#2a2a2a] to-[#0f0f0f]",
    bgImage: L.wed5,
    bgIllustration: L.bride1,
    accent: "#84CC16",
    badges: [
      { text: "Event Decoration" },
      { text: "Branding Floral Design" },
      { text: "Lobby Arrangements" },
    ],
    stats: [
      { value: "1200+", label: "Corporate Events" },
      { value: "4.8★", label: "Client Rating" },
      { value: "Pan India", label: "Delivery" },
    ],
    heroImage: L.wed1,
    sliderImages: [
      { src: L.wed1, label: "Corporate Event Decor" },
      { src: L.rece5, label: "Lobby Arrangement" },
      { src: L.bouquet1, label: "Premium Floral Design" },
    ],
  },
  Luxury: {
    heading: "Luxury Blooms",
    highlight: "Curated For You",
    subtitle: "Experience the pinnacle of floral artistry with our luxury collection — featuring imported blooms, premium packaging, and bespoke designs for the discerning client.",
    quote: "Where elegance meets floral artistry.",
    badgeEmoji: "💎",
    badgeText: "Bespoke Luxury Collection",
    gradient: "from-[#1a1208] via-[#2a1a0a] to-[#0f0a04]",
    bgImage: L.bouquet20,
    bgIllustration: L.bride1,
    accent: "#C9A15A",
    badges: [
      { text: "Imported Flowers" },
      { text: "Premium Packaging" },
      { text: "Bespoke Designs" },
    ],
    stats: [
      { value: "3500+", label: "Luxury Orders" },
      { value: "4.9★", label: "Premium Rating" },
      { value: "White Glove", label: "Delivery" },
    ],
    heroImage: L.wed5,
    sliderImages: [
      { src: L.wed5, label: "Exquisite Luxury Bouquet" },
      { src: L.bouquet11, label: "Premium Gift Packaging" },
      { src: L.bride1, label: "Imported Floral Design" },
    ],
  },
  Balloon: {
    heading: "Celebrate With",
    highlight: "Balloon Magic",
    subtitle: "Add a pop of color and joy to any occasion with our creative balloon decorations — from elegant arches to whimsical bouquets and custom installations.",
    quote: "Pop of color, burst of joy.",
    badgeEmoji: "🎈",
    badgeText: "Balloon Magic Collection",
    gradient: "from-[#3a1a4a] via-[#5a2a6a] to-[#2a0f3a]",
    bgImage: L.baloon2,
    bgIllustration: L.baloon6,
    accent: "#A855F7",
    badges: [
      { text: "Balloon Arches" },
      { text: "Custom Installations" },
      { text: "Event Decor" },
    ],
    stats: [
      { value: "5000+", label: "Balloon Orders" },
      { value: "4.7★", label: "Customer Rating" },
      { value: "Same Day", label: "Setup Available" },
    ],
    heroImage: L.baloon6,
    sliderImages: [
      { src: L.baloon6, label: "Elegant Balloon Arch" },
      { src: L.baloon2, label: "Custom Installation" },
      { src: L.baloon6, label: "Party Setup" },
    ],
  },
  Gallery: {
    heading: "Our Floral",
    highlight: "Masterpieces",
    subtitle: "Step into our gallery of floral artistry — a visual journey through our most stunning creations, from grand weddings to intimate celebrations.",
    quote: "A gallery of nature's finest art.",
    badgeEmoji: "🖼️",
    badgeText: "Floral Masterpieces",
    gradient: "from-[#1a1a2a] via-[#2a2a3a] to-[#0f0f1a]",
    bgImage: L.wed1,
    bgIllustration: L.rece5,
    accent: "#C9A15A",
    badges: [
      { text: "Wedding Gallery" },
      { text: "Event Portfolio" },
      { text: "Featured Creations" },
    ],
    stats: [
      { value: "5000+", label: "Projects Completed" },
      { value: "4.9★", label: "Portfolio Rating" },
      { value: "Award", label: "Winning Designs" },
    ],
    heroImage: L.rece1,
    sliderImages: [
      { src: L.rece1, label: "Premium Floral Gallery" },
      { src: L.wed5, label: "Wedding Portfolio" },
      { src: L.bouquet20, label: "Event Showcase" },
    ],
  },
  Candles: {
    heading: "Bloom &",
    highlight: "Glow Collection",
    subtitle: "Fill your space with warmth and fragrance — our premium candles and home fragrance collection pairs perfectly with fresh flowers for a complete sensory experience.",
    quote: "Warm fragrances paired with timeless blooms.",
    badgeEmoji: "🕯️",
    badgeText: "Luxury Candle Collection",
    gradient: "from-[#2a1a0a] via-[#3a2a1a] to-[#1a0f05]",
    bgImage: L.candle1,
    bgIllustration: L.candle10,
    accent: "#D97706",
    badges: [
      { text: "Scented Candles" },
      { text: "Gift Sets" },
      { text: "Premium Diffusers" },
    ],
    stats: [
      { value: "2000+", label: "Candle Orders" },
      { value: "4.8★", label: "Product Rating" },
      { value: "Gift Ready", label: "Packaging" },
    ],
    heroImage: L.candle10,
    sliderImages: [
      { src: L.candle10, label: "Premium Scented Candle" },
      { src: L.candle1, label: "Luxury Home Diffuser" },
      { src: L.candle10, label: "Luxury Home Fragrance" },
    ],
  },
  Gifts: {
    heading: "Luxury Gifts",
    highlight: "Wrapped With Love",
    subtitle: "Find the perfect gift for every occasion — from elegant flower and chocolate hampers to curated gift boxes that speak the language of love and appreciation.",
    quote: "Every gift tells a beautiful story.",
    badgeEmoji: "🎁",
    badgeText: "Luxury Gift Collection",
    gradient: "from-[#2a0a1a] via-[#4a1a2a] to-[#1a0510]",
    bgImage: L.bouquet1,
    bgIllustration: L.candle10,
    accent: "#E11D48",
    badges: [
      { text: "Flower Hampers" },
      { text: "Chocolate Combos" },
      { text: "Personalized Gifts" },
    ],
    stats: [
      { value: "8000+", label: "Gifts Delivered" },
      { value: "4.9★", label: "Gift Rating" },
      { value: "Gift Wrap", label: "Included" },
    ],
    heroImage: L.wed5,
    sliderImages: [
      { src: L.wed5, label: "Luxury Gift Hamper" },
      { src: L.bouquet11, label: "Chocolate & Flowers Combo" },
      { src: L.candle1, label: "Personalized Gift Box" },
    ],
  },
  "Candles & More": {
    heading: "Bloom &",
    highlight: "Glow Collection",
    subtitle: "Fill your space with warmth and fragrance — our premium candles and home fragrance collection pairs perfectly with fresh flowers for a complete sensory experience.",
    quote: "Warm fragrances paired with timeless blooms.",
    badgeEmoji: "🕯️",
    badgeText: "Candles & Home Fragrance",
    gradient: "from-[#2a1a0a] via-[#3a2a1a] to-[#1a0f05]",
    bgImage: L.candle1,
    bgIllustration: L.candle10,
    accent: "#D97706",
    badges: [
      { text: "Scented Candles" },
      { text: "Gift Sets" },
      { text: "Premium Diffusers" },
    ],
    stats: [
      { value: "2000+", label: "Candle Orders" },
      { value: "4.8★", label: "Product Rating" },
      { value: "Gift Ready", label: "Packaging" },
    ],
    heroImage: L.candle1,
    sliderImages: [
      { src: L.candle1, label: "Scented Candle Set" },
      { src: L.candle10, label: "Luxury Home Diffuser" },
      { src: L.candle10, label: "Gift Ready Packaging" },
    ],
  },
  Default: {
    heading: "Bespoke Blooms,",
    highlight: "For Every Feeling",
    subtitle: "Hand-arranged with surgical precision, sourced fresh daily, and delivered with same-day care across Delhi NCR.",
    quote: "Freshly picked. Expertly arranged. Delivered with love.",
    badgeEmoji: "🌸",
    badgeText: "Premium Floral Collection",
    gradient: "from-rose-950 via-rose-900 to-pink-950",
    bgImage: L.bouquet1,
    bgIllustration: L.bouquet11,
    accent: "#C9A15A",
    badges: [
      { text: "Free delivery available" },
      { text: "Fresh from the farm daily" },
      { text: "Same-day delivery NCR wide" },
    ],
    stats: [
      { value: "15,000+", label: "Happy Deliveries" },
      { value: "4.9★", label: "Customer Rating" },
      { value: "Same Day", label: "Delivery" },
    ],
    heroImage: L.bouquet20,
    sliderImages: [
      { src: L.bouquet20, label: "Premium Fresh Flowers" },
      { src: L.bouquet1, label: "Handcrafted Bouquet" },
      { src: L.bouquet11, label: "Luxury Arrangement" },
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const statVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const ImageSlider = ({ images }) => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % images.length);
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-xs rounded-2xl overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.3)] border border-white/[0.06]">
      <div className="relative w-full h-48 overflow-hidden">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              scale: i === active ? 1 : 1.05,
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" />
            {/* Gradient overlay on image (suggestion 6) */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)`,
              }}
            />
          </motion.div>
        ))}
      </div>
      {/* Label + dots */}
      <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
        <span className="text-white/90 text-[10px] font-bold tracking-wide uppercase drop-shadow-lg">
          {images[active].label}
        </span>
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "bg-white w-3" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryHero = ({ category }) => {
  const config = categoryConfig[category] || categoryConfig.Default;

  return (
    <section className={`relative bg-gradient-to-br ${config.gradient} overflow-hidden min-h-[520px] lg:min-h-[580px] flex items-center`}>
      {/* Ambient glow (suggestion 10) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px] opacity-[0.08]"
        style={{ backgroundColor: config.accent }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Background illustration — low opacity floral */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[400px] opacity-[0.07] pointer-events-none mix-blend-soft-light">
        <img src={config.bgIllustration} alt="" className="w-full h-full object-contain" loading="lazy" />
      </div>

      {/* Glow orbs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      {/* Background Decoration — extra low opacity leaves/petals (suggestion 3) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -left-10 top-[10%] w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100" fill="none">
          <path d="M50 5 C50 5 15 30 15 60 C15 85 50 95 50 95 C50 95 85 85 85 60 C85 30 50 5 50 5Z" fill={config.accent} opacity="0.5" />
        </svg>
        <svg className="absolute right-[5%] top-[30%] w-24 h-24 opacity-[0.03]" viewBox="0 0 60 80" fill="none">
          <path d="M30 2 C30 2 6 20 6 42 C6 64 30 78 30 78 C30 78 54 64 54 42 C54 20 30 2 30 2Z" fill={config.accent} />
        </svg>
        <svg className="absolute left-[20%] bottom-[15%] w-20 h-20 opacity-[0.05]" viewBox="0 0 100 100" fill="none">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="50" cy="25" rx="8" ry="16" fill={config.accent} transform={`rotate(${a} 50 50)`} opacity="0.5" />
          ))}
        </svg>
        <svg className="absolute right-[15%] bottom-[25%] w-28 h-28 opacity-[0.04]" viewBox="0 0 100 100" fill="none">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="50" cy="25" rx="7" ry="14" fill={config.accent} transform={`rotate(${a} 50 50)`} opacity="0.4" />
          ))}
        </svg>
        {/* Watercolor-like texture blob */}
        <div
          className="absolute top-[40%] right-[25%] w-40 h-40 rounded-full opacity-[0.03] blur-2xl"
          style={{ backgroundColor: config.accent }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-32 h-32 rounded-full opacity-[0.04] blur-3xl"
          style={{ backgroundColor: config.accent }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Left Content */}
          <div className="py-12 lg:py-16">
            {/* Breadcrumb */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">
              <span>Home</span>
              <span className="text-white/20">/</span>
              <span className="text-[var(--color-gold)]">{category || "All Products"}</span>
            </motion.div>

            {/* Seasonal Badge (suggestion 5) */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-full px-4 py-1.5 mb-4"
            >
              <span className="text-sm">{config.badgeEmoji}</span>
              <span className="text-white/80 text-[10px] font-bold tracking-wide uppercase">{config.badgeText}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-4">
              {config.heading}<br />
              <span className="text-[var(--color-gold)] italic font-medium">{config.highlight}</span>
            </motion.h1>

            {/* Dynamic Quote (suggestion 9) */}
            <motion.p
              variants={itemVariants}
              className="text-white/50 text-xs italic font-light tracking-wide mb-2"
            >
              "{config.quote}"
            </motion.p>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed font-light">
              {config.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mt-7">
              <Link
                to="/category"
                className="group relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-[#1a0f0a] hover:-translate-y-0.5 transition-all duration-400 shadow-sm overflow-hidden"
              >
                {/* Shine effect (suggestion 8) */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10">Explore Collection</span>
                <ArrowRight size={11} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group inline-flex items-center gap-2 border border-white/10 text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-3 rounded-full hover:bg-white/5 hover:border-white/30 hover:text-white transition-all duration-300"
              >
                <Phone size={11} />
                Talk to Expert
              </a>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex flex-col items-end gap-4 py-12 lg:py-16">
            {/* Premium Info Cards with glass effect + floating animation (suggestion 2) */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 w-full max-w-xs">
              {config.badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                    y: {
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    },
                  }}
                  className="group flex items-center gap-3 bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] rounded-xl px-5 py-3 hover:bg-white/[0.12] hover:border-[var(--color-gold)]/30 hover:-translate-x-1 transition-all duration-400 shadow-lg shadow-black/5"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center shrink-0">
                    <Sparkles size={12} className="text-[var(--color-gold)]" />
                  </div>
                  <span className="text-white/80 text-xs font-bold tracking-wide">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* 3-Image Premium Stack Slider (suggestion 1 + bonus) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="relative">
                  <ImageSlider images={config.sliderImages} />
                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${config.accent}22 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Row with animated counters (suggestion 4) */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pb-6 lg:pb-8 pt-2 border-t border-white/[0.06] mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {config.stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={statVariants}
              className="flex items-center gap-2.5"
            >
              <AnimatedStat value={stat.value} label={stat.label} accent={config.accent} />
              <span className="text-white/50 text-[10px] font-medium tracking-wide uppercase">{stat.label}</span>
              {i < config.stats.length - 1 && <span className="w-px h-5 bg-white/[0.08]" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryHero;
