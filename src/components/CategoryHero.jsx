import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight, Phone, Sparkles } from "lucide-react";
import FloatingDecoration from "./FloatingDecoration";

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
    ambientEmoji: "✨",
    gradient: "from-[#3c0f1a] via-[#5c1a2a] to-[#2d0a12]",
    bgImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80", label: "Luxury Wedding Bouquet" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", label: "Grand Stage Decor" },
      { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80", label: "Mandap Design" },
    ],
    decor: [
      { type: "rose", side: "left", top: "5%", size: 48, opacity: 0.08, delay: 0, duration: 16, animation: "bloom", color: "#C9A15A" },
      { type: "petal5", side: "right", top: "12%", size: 36, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#C9A15A" },
      { type: "leaf", side: "left", bottom: "10%", size: 40, opacity: 0.07, delay: 2, duration: 18, animation: "sway3", color: "#8B4513" },
      { type: "lotus", side: "right", bottom: "8%", size: 32, opacity: 0.05, delay: 0.8, duration: 15, animation: "drift-bloom", color: "#FFD700" },
    ],
    floatingIcons: [
      { icon: "💍", label: "Wedding" },
      { icon: "🌹", label: "Roses" },
    ],
  },
  Birthday: {
    heading: "Celebrate Every",
    highlight: "Birthday Beautifully",
    subtitle: "Make their special day unforgettable with vibrant floral arrangements, balloon surprises, and handcrafted gifts that bring joy and color to every celebration.",
    quote: "Every birthday deserves unforgettable blooms.",
    badgeEmoji: "🎂",
    badgeText: "Trending Birthday Themes",
    ambientEmoji: "🎈",
    gradient: "from-[#f8a5a5] via-[#f5cdcd] to-[#fce4e4]",
    bgImage: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1468327768560-75b778c8f20b?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", label: "Luxury Birthday Cake" },
      { src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&q=80", label: "Birthday Floral Basket" },
      { src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", label: "Birthday Bouquet" },
    ],
    decor: [
      { type: "petal6", side: "left", top: "8%", size: 36, opacity: 0.08, delay: 0, duration: 16, animation: "sway1", color: "#F472B6" },
      { type: "petal5", side: "right", top: "15%", size: 28, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#FB923C" },
      { type: "leaf", side: "left", bottom: "10%", size: 32, opacity: 0.07, delay: 2, duration: 18, animation: "sway3", color: "#A3E635" },
      { type: "petal", side: "right", bottom: "5%", size: 24, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway2", color: "#FBBF24" },
    ],
    floatingIcons: [
      { icon: "🎂", label: "Cake" },
      { icon: "🎈", label: "Balloons" },
    ],
  },
  Anniversary: {
    heading: "Forever in",
    highlight: "Full Bloom",
    subtitle: "Celebrate years of togetherness with timeless floral arrangements that speak the language of everlasting love — from classic red roses to luxury preserved blooms.",
    quote: "Love grows stronger with every bloom.",
    badgeEmoji: "❤️",
    badgeText: "Romantic Collection",
    ambientEmoji: "❤️",
    gradient: "from-[#4a0e1b] via-[#6b1d30] to-[#3a0a15]",
    bgImage: "https://images.unsplash.com/photo-1549465220-1a8b2308cd89?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=600&q=80", label: "Eternal Love Bouquet" },
      { src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80", label: "Preserved Flower Box" },
      { src: "https://images.unsplash.com/photo-1549465220-1a8b2308cd89?w=600&q=80", label: "Luxury Rose Arrangement" },
    ],
    decor: [
      { type: "rose", side: "left", top: "5%", size: 44, opacity: 0.08, delay: 0, duration: 16, animation: "bloom", color: "#E11D48" },
      { type: "petal5", side: "right", top: "10%", size: 32, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#C9A15A" },
      { type: "leaf", side: "left", bottom: "12%", size: 36, opacity: 0.07, delay: 2, duration: 18, animation: "sway3", color: "#8B4513" },
      { type: "lotus", side: "right", bottom: "6%", size: 28, opacity: 0.05, delay: 0.8, duration: 15, animation: "drift-bloom", color: "#FFD700" },
    ],
    floatingIcons: [
      { icon: "❤️", label: "Love" },
      { icon: "🥂", label: "Celebrate" },
    ],
  },
  Reception: {
    heading: "Royal",
    highlight: "Reception Décor",
    subtitle: "Create a grand entrance and an unforgettable atmosphere with our premium reception floral designs — from stunning backdrops to elegant table centrepieces.",
    quote: "Grand moments deserve grand entrances.",
    badgeEmoji: "💎",
    badgeText: "Premium Reception Decor",
    ambientEmoji: "✨",
    gradient: "from-[#0a2e1a] via-[#0d4a2a] to-[#061f12]",
    bgImage: "https://images.unsplash.com/photo-1478146059778-8fad5fb5a185?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", label: "Grand Reception Setup" },
      { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80", label: "Elegant Table Decor" },
      { src: "https://images.unsplash.com/photo-1478146059778-8fad5fb5a185?w=600&q=80", label: "Floral Backdrop" },
    ],
    decor: [
      { type: "leaf", side: "left", top: "8%", size: 40, opacity: 0.08, delay: 0, duration: 16, animation: "sway3", color: "#C9A15A" },
      { type: "lotus", side: "right", top: "12%", size: 32, opacity: 0.06, delay: 1.5, duration: 14, animation: "drift-bloom", color: "#FFD700" },
      { type: "petal5", side: "left", bottom: "10%", size: 28, opacity: 0.07, delay: 2, duration: 18, animation: "sway2", color: "#4ADE80" },
      { type: "petal6", side: "right", bottom: "8%", size: 24, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway1", color: "#C9A15A" },
    ],
    floatingIcons: [
      { icon: "✨", label: "Elegance" },
      { icon: "💎", label: "Luxury" },
    ],
  },
  Haldi: {
    heading: "Traditional",
    highlight: "Haldi Celebrations",
    subtitle: "Brighten your haldi ceremony with vibrant marigold decorations, fresh floral setups, and joyful yellow-themed arrangements that radiate warmth and tradition.",
    quote: "Golden traditions, blooming celebrations.",
    badgeEmoji: "🌼",
    badgeText: "Traditional Haldi Decor",
    ambientEmoji: "🌼",
    gradient: "from-[#8a5a1a] via-[#c47a2a] to-[#6a4010]",
    bgImage: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1527330662700-1a16b10c2596?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=600&q=80", label: "Haldi Stage Setup" },
      { src: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=600&q=80", label: "Marigold Decor" },
      { src: "https://images.unsplash.com/photo-1527330662700-1a16b10c2596?w=600&q=80", label: "Traditional Floral Setup" },
    ],
    decor: [
      { type: "petal5", side: "left", top: "5%", size: 36, opacity: 0.08, delay: 0, duration: 16, animation: "sway1", color: "#F59E0B" },
      { type: "petal6", side: "right", top: "12%", size: 28, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#FBBF24" },
      { type: "leaf", side: "left", bottom: "10%", size: 32, opacity: 0.07, delay: 2, duration: 18, animation: "sway3", color: "#65A30D" },
      { type: "petal", side: "right", bottom: "5%", size: 22, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway2", color: "#F59E0B" },
    ],
    floatingIcons: [
      { icon: "🌼", label: "Marigold" },
      { icon: "🪔", label: "Tradition" },
    ],
  },
  Devotional: {
    heading: "Sacred Floral",
    highlight: "Offerings",
    subtitle: "Bring divine blessings to your home and temple with sacred floral offerings — fresh garlands, lotus blooms, and aromatic flower arrangements for every spiritual occasion.",
    quote: "Flowers offered with devotion and purity.",
    badgeEmoji: "🪷",
    badgeText: "Sacred Floral Offerings",
    ambientEmoji: "🔔",
    gradient: "from-[#8a3a0a] via-[#b85a1a] to-[#6a2a08]",
    bgImage: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1527330662700-1a16b10c2596?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=600&q=80", label: "Temple Flowers" },
      { src: "https://images.unsplash.com/photo-1527330662700-1a16b10c2596?w=600&q=80", label: "Fresh Garlands" },
      { src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=80", label: "Aromatic Offerings" },
    ],
    decor: [
      { type: "lotus", side: "left", top: "5%", size: 40, opacity: 0.08, delay: 0, duration: 16, animation: "drift-bloom", color: "#D97706" },
      { type: "petal5", side: "right", top: "10%", size: 32, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#C9A15A" },
      { type: "petal6", side: "left", bottom: "10%", size: 28, opacity: 0.07, delay: 2, duration: 18, animation: "sway1", color: "#F59E0B" },
      { type: "leaf", side: "right", bottom: "8%", size: 24, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway3", color: "#65A30D" },
    ],
    floatingIcons: [
      { icon: "🪷", label: "Lotus" },
      { icon: "🔔", label: "Blessings" },
    ],
  },
  Bouquets: {
    heading: "Fresh Blooms,",
    highlight: "Endless Emotions",
    subtitle: "Discover our exquisite collection of handcrafted bouquets — from classic roses to modern wildflower arrangements, each tied with love and delivered with care.",
    quote: "Handcrafted with love, delivered with care.",
    badgeEmoji: "💐",
    badgeText: "Handcrafted Bouquets",
    ambientEmoji: "🌹",
    gradient: "from-[#2d1a12] via-[#4a2a1a] to-[#1f120a]",
    bgImage: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", label: "Classic Rose Bouquet" },
      { src: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&q=80", label: "Premium Wrapped Bouquet" },
      { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80", label: "Luxury Floral Arrangement" },
    ],
    decor: [
      { type: "rose", side: "left", top: "5%", size: 44, opacity: 0.08, delay: 0, duration: 16, animation: "bloom", color: "#C9A15A" },
      { type: "petal6", side: "right", top: "12%", size: 32, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#8B4513" },
      { type: "leaf", side: "left", bottom: "10%", size: 36, opacity: 0.07, delay: 2, duration: 18, animation: "sway3", color: "#4ADE80" },
      { type: "petal5", side: "right", bottom: "5%", size: 24, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway1", color: "#C9A15A" },
    ],
    floatingIcons: [
      { icon: "💐", label: "Bouquets" },
      { icon: "🌹", label: "Roses" },
    ],
  },
  Flowers: {
    heading: "Nature's Finest,",
    highlight: "Artfully Arranged",
    subtitle: "Explore our curated selection of premium fresh flowers — from classic roses and lilies to seasonal specials — perfect for every occasion and sentiment.",
    quote: "Freshly picked. Expertly arranged.",
    badgeEmoji: "🌸",
    badgeText: "Fresh Imported Flowers",
    ambientEmoji: "🌸",
    gradient: "from-[#2d1a12] via-[#4a2a1a] to-[#1f120a]",
    bgImage: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1508615070457-399a42d32061?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=600&q=80", label: "Mixed Fresh Blooms" },
      { src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", label: "Seasonal Specials" },
      { src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80", label: "Exquisite Floral Art" },
    ],
    decor: [
      { type: "petal6", side: "left", top: "5%", size: 36, opacity: 0.08, delay: 0, duration: 16, animation: "sway1", color: "#C9A15A" },
      { type: "leaf", side: "right", top: "12%", size: 40, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway3", color: "#4ADE80" },
      { type: "rose", side: "left", bottom: "10%", size: 32, opacity: 0.07, delay: 2, duration: 18, animation: "bloom", color: "#F472B6" },
      { type: "petal5", side: "right", bottom: "6%", size: 22, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway2", color: "#C9A15A" },
    ],
    floatingIcons: [
      { icon: "🌸", label: "Blooms" },
      { icon: "🌿", label: "Greenery" },
    ],
  },
  Corporate: {
    heading: "Corporate",
    highlight: "Floral Elegance",
    subtitle: "Make a lasting impression with sophisticated corporate floral designs — from lobby arrangements to event decor, we bring professionalism and beauty together.",
    quote: "Elegance that speaks professionalism.",
    badgeEmoji: "💼",
    badgeText: "Corporate Floral Design",
    ambientEmoji: "🌿",
    gradient: "from-[#1a1a1a] via-[#2a2a2a] to-[#0f0f0f]",
    bgImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1470509037660-dbebadaeb3b6?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80", label: "Corporate Event Decor" },
      { src: "https://images.unsplash.com/photo-1478146059778-8fad5fb5a185?w=600&q=80", label: "Lobby Arrangement" },
      { src: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=600&q=80", label: "Premium Floral Design" },
    ],
    decor: [
      { type: "leaf", side: "left", top: "5%", size: 40, opacity: 0.08, delay: 0, duration: 16, animation: "sway3", color: "#84CC16" },
      { type: "petal6", side: "right", top: "12%", size: 28, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway1", color: "#C9A15A" },
      { type: "petal5", side: "left", bottom: "10%", size: 24, opacity: 0.07, delay: 2, duration: 18, animation: "sway2", color: "#E2E8F0" },
      { type: "leaf", side: "right", bottom: "6%", size: 20, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway3", color: "#84CC16" },
    ],
    floatingIcons: [
      { icon: "💼", label: "Corporate" },
      { icon: "🌿", label: "Green" },
    ],
  },
  Luxury: {
    heading: "Luxury Blooms",
    highlight: "Curated For You",
    subtitle: "Experience the pinnacle of floral artistry with our luxury collection — featuring imported blooms, premium packaging, and bespoke designs for the discerning client.",
    quote: "Where elegance meets floral artistry.",
    badgeEmoji: "💎",
    badgeText: "Bespoke Luxury Collection",
    ambientEmoji: "💎",
    gradient: "from-[#1a1208] via-[#2a1a0a] to-[#0f0a04]",
    bgImage: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=600&q=80", label: "Exquisite Luxury Bouquet" },
      { src: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&q=80", label: "Premium Gift Packaging" },
      { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80", label: "Imported Floral Design" },
    ],
    decor: [
      { type: "rose", side: "left", top: "5%", size: 48, opacity: 0.08, delay: 0, duration: 16, animation: "bloom", color: "#C9A15A" },
      { type: "lotus", side: "right", top: "10%", size: 36, opacity: 0.06, delay: 1.5, duration: 14, animation: "drift-bloom", color: "#FFD700" },
      { type: "petal5", side: "left", bottom: "10%", size: 32, opacity: 0.07, delay: 2, duration: 18, animation: "sway2", color: "#C9A15A" },
      { type: "leaf", side: "right", bottom: "5%", size: 28, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway3", color: "#8B4513" },
    ],
    floatingIcons: [
      { icon: "💎", label: "Luxury" },
      { icon: "✨", label: "Premium" },
    ],
  },
  Balloon: {
    heading: "Celebrate With",
    highlight: "Balloon Magic",
    subtitle: "Add a pop of color and joy to any occasion with our creative balloon decorations — from elegant arches to whimsical bouquets and custom installations.",
    quote: "Pop of color, burst of joy.",
    badgeEmoji: "🎈",
    badgeText: "Balloon Magic Collection",
    ambientEmoji: "🎉",
    gradient: "from-[#3a1a4a] via-[#5a2a6a] to-[#2a0f3a]",
    bgImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1518599212517-bf1f0c137833?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", label: "Elegant Balloon Arch" },
      { src: "https://images.unsplash.com/photo-1518599212517-bf1f0c137833?w=600&q=80", label: "Custom Installation" },
      { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", label: "Party Setup" },
    ],
    decor: [
      { type: "petal6", side: "left", top: "5%", size: 32, opacity: 0.08, delay: 0, duration: 16, animation: "sway1", color: "#A855F7" },
      { type: "petal5", side: "right", top: "12%", size: 28, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#F472B6" },
      { type: "petal", side: "left", bottom: "10%", size: 24, opacity: 0.07, delay: 2, duration: 18, animation: "sway2", color: "#FBBF24" },
      { type: "leaf", side: "right", bottom: "6%", size: 20, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway3", color: "#4ADE80" },
    ],
    floatingIcons: [
      { icon: "🎈", label: "Balloons" },
      { icon: "🎉", label: "Celebration" },
    ],
  },
  Gallery: {
    heading: "Our Floral",
    highlight: "Masterpieces",
    subtitle: "Step into our gallery of floral artistry — a visual journey through our most stunning creations, from grand weddings to intimate celebrations.",
    quote: "A gallery of nature's finest art.",
    badgeEmoji: "🖼️",
    badgeText: "Floral Masterpieces",
    ambientEmoji: "✨",
    gradient: "from-[#1a1a2a] via-[#2a2a3a] to-[#0f0f1a]",
    bgImage: "https://images.unsplash.com/photo-1478146059778-8fad5fb5a185?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1478146059778-8fad5fb5a185?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1478146059778-8fad5fb5a185?w=600&q=80", label: "Premium Floral Gallery" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", label: "Wedding Portfolio" },
      { src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", label: "Event Showcase" },
    ],
    decor: [
      { type: "lotus", side: "left", top: "5%", size: 36, opacity: 0.08, delay: 0, duration: 16, animation: "drift-bloom", color: "#C9A15A" },
      { type: "rose", side: "right", top: "10%", size: 32, opacity: 0.06, delay: 1.5, duration: 14, animation: "bloom", color: "#C9A15A" },
      { type: "petal5", side: "left", bottom: "10%", size: 28, opacity: 0.07, delay: 2, duration: 18, animation: "sway2", color: "#E2E8F0" },
      { type: "leaf", side: "right", bottom: "5%", size: 24, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway3", color: "#4ADE80" },
    ],
    floatingIcons: [
      { icon: "🖼️", label: "Gallery" },
      { icon: "✨", label: "Showcase" },
    ],
  },
  Candles: {
    heading: "Bloom &",
    highlight: "Glow Collection",
    subtitle: "Fill your space with warmth and fragrance — our premium candles and home fragrance collection pairs perfectly with fresh flowers for a complete sensory experience.",
    quote: "Warm fragrances paired with timeless blooms.",
    badgeEmoji: "🕯️",
    badgeText: "Luxury Candle Collection",
    ambientEmoji: "🕯",
    gradient: "from-[#2a1a0a] via-[#3a2a1a] to-[#1a0f05]",
    bgImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=700&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=80", label: "Premium Scented Candle" },
      { src: "https://images.pexels.com/photos/29570066/pexels-photo-29570066.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", label: "Candle & Flowers Gift Set" },
      { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", label: "Luxury Home Fragrance" },
    ],
    decor: [
      { type: "petal6", side: "left", top: "5%", size: 32, opacity: 0.08, delay: 0, duration: 16, animation: "sway1", color: "#D97706" },
      { type: "petal5", side: "right", top: "12%", size: 28, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#C9A15A" },
      { type: "leaf", side: "left", bottom: "10%", size: 24, opacity: 0.07, delay: 2, duration: 18, animation: "sway3", color: "#65A30D" },
      { type: "petal", side: "right", bottom: "6%", size: 20, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway2", color: "#F59E0B" },
    ],
    floatingIcons: [
      { icon: "🕯️", label: "Candles" },
      { icon: "✨", label: "Ambiance" },
    ],
  },
  Gifts: {
    heading: "Luxury Gifts",
    highlight: "Wrapped With Love",
    subtitle: "Find the perfect gift for every occasion — from elegant flower and chocolate hampers to curated gift boxes that speak the language of love and appreciation.",
    quote: "Every gift tells a beautiful story.",
    badgeEmoji: "🎁",
    badgeText: "Luxury Gift Collection",
    ambientEmoji: "💝",
    gradient: "from-[#2a0a1a] via-[#4a1a2a] to-[#1a0510]",
    bgImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1496062031456-07b8f6f0c2e5?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1519378458060-57e16e3cfa83?w=600&q=80", label: "Luxury Gift Hamper" },
      { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", label: "Chocolate & Flowers Combo" },
      { src: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600&q=80", label: "Personalized Gift Box" },
    ],
    decor: [
      { type: "rose", side: "left", top: "5%", size: 40, opacity: 0.08, delay: 0, duration: 16, animation: "bloom", color: "#E11D48" },
      { type: "petal5", side: "right", top: "10%", size: 32, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#C9A15A" },
      { type: "petal6", side: "left", bottom: "10%", size: 28, opacity: 0.07, delay: 2, duration: 18, animation: "sway1", color: "#F472B6" },
      { type: "leaf", side: "right", bottom: "5%", size: 24, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway3", color: "#8B4513" },
    ],
    floatingIcons: [
      { icon: "🎁", label: "Gifts" },
      { icon: "💝", label: "Love" },
    ],
  },
  "Candles & More": {
    heading: "Bloom &",
    highlight: "Glow Collection",
    subtitle: "Fill your space with warmth and fragrance — our premium candles and home fragrance collection pairs perfectly with fresh flowers for a complete sensory experience.",
    quote: "Warm fragrances paired with timeless blooms.",
    badgeEmoji: "🕯️",
    badgeText: "Candles & Home Fragrance",
    ambientEmoji: "🕯",
    gradient: "from-[#2a1a0a] via-[#3a2a1a] to-[#1a0f05]",
    bgImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&q=80",
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
    heroImage: "https://images.pexels.com/photos/29570066/pexels-photo-29570066.jpeg?auto=compress&cs=tinysrgb&w=700&q=80",
    sliderImages: [
      { src: "https://images.pexels.com/photos/29570066/pexels-photo-29570066.jpeg?auto=compress&cs=tinysrgb&w=600&q=80", label: "Scented Candle Set" },
      { src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=80", label: "Luxury Home Diffuser" },
      { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", label: "Gift Ready Packaging" },
    ],
    decor: [
      { type: "petal6", side: "left", top: "5%", size: 32, opacity: 0.08, delay: 0, duration: 16, animation: "sway1", color: "#D97706" },
      { type: "petal5", side: "right", top: "12%", size: 28, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#C9A15A" },
      { type: "leaf", side: "left", bottom: "10%", size: 24, opacity: 0.07, delay: 2, duration: 18, animation: "sway3", color: "#65A30D" },
      { type: "petal", side: "right", bottom: "6%", size: 20, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway2", color: "#F59E0B" },
    ],
    floatingIcons: [
      { icon: "🕯️", label: "Candles" },
      { icon: "✨", label: "Ambiance" },
    ],
  },
  Default: {
    heading: "Bespoke Blooms,",
    highlight: "For Every Feeling",
    subtitle: "Hand-arranged with surgical precision, sourced fresh daily, and delivered with same-day care across Delhi NCR.",
    quote: "Freshly picked. Expertly arranged. Delivered with love.",
    badgeEmoji: "🌸",
    badgeText: "Premium Floral Collection",
    ambientEmoji: "✨",
    gradient: "from-rose-950 via-rose-900 to-pink-950",
    bgImage: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=700&q=80",
    bgIllustration: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=400&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=600&q=80",
    sliderImages: [
      { src: "https://images.unsplash.com/photo-1490757467854-4d9434b1d2f0?w=600&q=80", label: "Premium Fresh Flowers" },
      { src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", label: "Handcrafted Bouquet" },
      { src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80", label: "Luxury Arrangement" },
    ],
    decor: [
      { type: "leaf", side: "left", top: "5%", size: 36, opacity: 0.08, delay: 0, duration: 16, animation: "sway3", color: "#C9A15A" },
      { type: "petal6", side: "right", top: "12%", size: 28, opacity: 0.06, delay: 1.5, duration: 14, animation: "sway2", color: "#C9A15A" },
      { type: "petal5", side: "left", bottom: "10%", size: 24, opacity: 0.07, delay: 2, duration: 18, animation: "sway1", color: "#C9A15A" },
      { type: "petal", side: "right", bottom: "6%", size: 20, opacity: 0.05, delay: 0.8, duration: 15, animation: "sway2", color: "#C9A15A" },
    ],
    floatingIcons: [
      { icon: "🌸", label: "Flowers" },
      { icon: "✨", label: "Premium" },
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

      {/* Floating decorations */}
      {config.decor.map((d, i) => (
        <FloatingDecoration
          key={i}
          type={d.type}
          side={d.side}
          top={d.top}
          bottom={d.bottom}
          size={d.size}
          opacity={d.opacity}
          delay={d.delay}
          duration={d.duration}
          animation={d.animation}
          color={d.color}
        />
      ))}

      {/* Tiny floating elements per category (suggestion 7) */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ambient-${i}`}
          className="absolute pointer-events-none z-[1]"
          style={{
            top: `${15 + i * 30}%`,
            left: i === 1 ? '50%' : `${i === 0 ? '5%' : '92%'}`,
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        >
          <span className="text-xl">{config.ambientEmoji}</span>
        </motion.div>
      ))}

      {/* Floating icons */}
      {config.floatingIcons.map((fi, i) => (
        <motion.div
          key={i}
          className={`absolute ${i === 0 ? 'top-8 left-8 lg:top-10 lg:left-10' : 'top-8 right-8 lg:top-10 lg:right-10'} z-10`}
          animate={{ y: [0, -6, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        >
          <span className="text-xl lg:text-2xl">{fi.icon}</span>
        </motion.div>
      ))}

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
