import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LazyImage from "../components/ui/LazyImage";
import {
  BUSINESS_NAME_MAIN,
  BUSINESS_NAME_SUB,
  WHATSAPP_LINK,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
} from "../constants";
import { motion } from "framer-motion";
import RevealSection from "../components/RevealSection";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";

// Import actual images
import image1 from "../assets/s1.png";
import image2 from "../assets/flower/ff2.jpg";
import image3 from "../assets/flower/ff8.jpg";
import image4 from "../assets/flower/ff2.jpg";
import image5 from "../assets/s5.png";
import image6 from "../assets/s6.png";
import image7 from "../assets/flower/ff7.jpg";
import image8 from "../assets/s8.png";
import image9 from "../assets/s9.png";
import image10 from "../assets/s10.png";
import image11 from "../assets/s11.png";
import image12 from "../assets/s12.png";
import image13 from "../assets/s13.png";

import {
  ArrowRight,
  Heart,
  Sparkles,
  Gift,
  Star,
  MessageCircle,
  Phone,
  Clock,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

// ─── Occasions Data ───
const occasions = [
  {
    id: 1,
    name: "Wedding",
    tagline: "Where two hearts bloom as one",
    desc: "Bridal bouquets, ceremony décor & reception centrepieces crafted to make your day unforgettable.",
    image: image1,
    gradient: "from-rose-950/80 via-rose-900/40 to-transparent",
    accentBg: "bg-[var(--color-blush)]/90",
    accentText: "text-[var(--color-accent)]",
    accentBorder: "border-#F4C9D1/60",
    products: "48 arrangements",
    size: "large",
    emoji: "💍",
    category: "Wedding",
  },
  {
    id: 2,
    name: "Birthday",
    tagline: "Make their day petal-perfect",
    desc: "Vibrant, joyful bouquets that arrive fresh with a smile — same-day delivery available.",
    image: image2,
    gradient: "from-amber-950/80 via-amber-800/40 to-transparent",
    accentBg: "bg-amber-50/90",
    accentText: "text-amber-600",
    accentBorder: "border-amber-100/60",
    products: "34 bouquets",
    size: "medium",
    emoji: "🎂",
    category: "Birthday",
  },
  {
    id: 3,
    name: "Anniversary",
    tagline: "Love, in full bloom",
    desc: "From classic red roses to rare preserved arrangements — celebrate another year of love.",
    image: image3,
    gradient: "from-pink-950/80 via-pink-900/40 to-transparent",
    accentBg: "bg-pink-50/90",
    accentText: "text-pink-600",
    accentBorder: "border-pink-100/60",
    products: "29 arrangements",
    size: "medium",
    emoji: "❤️",
    category: "Anniversary",
  },
  {
    id: 4,
    name: "Congratulations",
    tagline: "They did it — celebrate big",
    desc: "Promotion, graduation, new home — every milestone deserves a burst of fresh blooms.",
    image: image4,
    gradient: "from-emerald-950/80 via-emerald-900/40 to-transparent",
    accentBg: "bg-emerald-50/90",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-100/60",
    products: "22 bouquets",
    size: "small",
    emoji: "🎉",
    category: "Bouquets",
  },
  {
    id: 5,
    name: "Sympathy",
    tagline: "Words fall short; flowers carry them",
    desc: "Thoughtful, dignified arrangements to offer comfort when it matters most.",
    image: image5,
    gradient: "from-slate-950/80 via-slate-900/40 to-transparent",
    accentBg: "bg-slate-50/90",
    accentText: "text-slate-600",
    accentBorder: "border-slate-100/60",
    products: "18 arrangements",
    size: "small",
    emoji: "🕊️",
    category: "All",
  },
  {
    id: 6,
    name: "Just Because",
    tagline: "No reason needed",
    desc: "The most romantic gesture? Flowers for no occasion at all. Surprise someone today.",
    image: image6,
    gradient: "from-purple-950/80 via-purple-900/40 to-transparent",
    accentBg: "bg-purple-50/90",
    accentText: "text-purple-600",
    accentBorder: "border-purple-100/60",
    products: "41 bouquets",
    size: "large",
    emoji: "✨",
    category: "Bouquets",
  },
  {
    id: 7,
    name: "Corporate Gifting",
    tagline: "Impress every client, every time",
    desc: "Branded floral gifts, bulk orders & office arrangements — delivered across Delhi NCR.",
    image: image7,
    gradient: "from-blue-950/80 via-blue-900/40 to-transparent",
    accentBg: "bg-blue-50/90",
    accentText: "text-blue-600",
    accentBorder: "border-blue-100/60",
    products: "16 collections",
    size: "medium",
    emoji: "🏢",
    category: "Candles & More",
  },
  {
    id: 8,
    name: "New Baby",
    tagline: "Hello, little bloom",
    desc: "Soft, delicate arrangements to welcome the newest little petal into the world.",
    image: image8,
    gradient: "from-sky-950/80 via-sky-900/40 to-transparent",
    accentBg: "bg-sky-50/90",
    accentText: "text-sky-600",
    accentBorder: "border-sky-100/60",
    products: "14 bouquets",
    size: "small",
    emoji: "👶",
    category: "Bouquets",
  },
  {
    id: 9,
    name: "Get Well Soon",
    tagline: "Brighten their recovery",
    desc: "Cheerful, uplifting bouquets to bring colour and warmth to any hospital room or home.",
    image: image9,
    gradient: "from-yellow-950/80 via-yellow-900/40 to-transparent",
    accentBg: "bg-yellow-50/90",
    accentText: "text-yellow-600",
    accentBorder: "border-yellow-200/65",
    products: "19 arrangements",
    size: "small",
    emoji: "🌻",
    category: "Bouquets",
  },
];

// ─── How It Works ───
const steps = [
  { icon: "🌸", title: "Pick the Occasion", desc: "Choose from our curated occasion collections or tell us your need." },
  { icon: "🎨", title: "We Craft It", desc: "Our florists hand-pick and arrange your blooms on the same day." },
  { icon: "🚗", title: "We Deliver", desc: "Fresh flowers at your door, on time — with a personal note." },
];

// ─── Featured Products (quick picks) ───
const featured = [
  { id: 1, name: "Red Rose Eternity Box", price: 2499, occasion: "Anniversary", category: "Anniversary", image: image10, rating: 5.0 },
  { id: 2, name: "Sunshine Birthday Bunch", price: 699, occasion: "Birthday", category: "Birthday", image: image11, rating: 4.8 },
  { id: 3, name: "White Orchid Sympathy", price: 1299, occasion: "Sympathy", category: "All", image: image12, rating: 4.9 },
  { id: 4, name: "Bridal Pastel Bouquet", price: 3499, occasion: "Wedding", category: "Wedding", image: image13, rating: 5.0 },
];

const OccasionsPage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});

  const handleCart = (id) => {
    setAddedToCart((p) => ({ ...p, [id]: true }));
    setTimeout(() => setAddedToCart((p) => ({ ...p, [id]: false })), 1800);
  };

  const gridClasses = {
    large: "md:row-span-2",
    medium: "md:row-span-1",
    small: "md:row-span-1",
  };

  const recipients = [
    {
      label: "For Her",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      category: "Bouquets",
    },
    {
      label: "For Him",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      category: "Balloon",
    },
    {
      label: "Mom",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
      category: "Devotional",
    },
    {
      label: "Dad",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
      category: "Candles & More",
    },
    {
      label: "Friends",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300",
      category: "Bouquets",
    },
    {
      label: "Colleagues",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
      category: "Candles & More",
    },
  ];

  return (
    <div className="w-full bg-[var(--color-cream)] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingDecoration type="leaf" side="left" top="4%" size={26} opacity={0.1} delay={0.3} duration={13} animation="sway3" color="#d1bca8" />
        <FloatingDecoration type="petal6" side="right" top="3%" size={22} opacity={0.1} delay={1.2} duration={14} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="petal5" side="left" bottom="10%" size={30} opacity={0.1} delay={0.8} duration={12} animation="sway1" color="#d1bca8" />
        <FloatingDecoration type="petal" side="right" bottom="8%" size={20} opacity={0.1} delay={2} duration={15} animation="sway2" color="#d1bca8" />
      </div>
      {/* Hero Banner */}
      <RevealSection className="relative min-h-[500px] flex items-center overflow-hidden bg-[#0a0805]">
        {/* Bokeh Lights */}
        <BokehLights spots={[
          { color: "from-rose-400/15 to-transparent", size: 300, top: "-8%", right: "-5%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-300/12 to-transparent", size: 260, bottom: "-10%", left: "5%", anim: "bk-drift2", delay: 2, duration: 35 },
          { color: "from-purple-400/10 to-transparent", size: 240, top: "40%", left: "30%", anim: "bk-float", delay: 4, duration: 28 },
          { color: "from-pink-400/12 to-transparent", size: 220, top: "15%", left: "45%", anim: "bk-drift3", delay: 1, duration: 32 },
        ]} />
        <FloatingDecoration type="lotus" side="right" top="10%" size={80} opacity={0.1} delay={0} duration={16} animation="drift-bloom" color="#C9A15A" />
        <FloatingDecoration type="rose" side="left" top="20%" size={56} opacity={0.08} delay={1.5} duration={18} animation="breathe" color="#D6537A" />
        <FloatingDecoration type="petal5" side="right" top="auto" bottom="12%" size={60} opacity={0.1} delay={2} duration={14} animation="sway2" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="6%" size={44} opacity={0.08} delay={3} duration={12} animation="sway3" color="#C9A15A" />
        {/* Layered ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/60 via-gray-950 to-purple-950/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(253,164,175,0.08),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(192,132,252,0.06),transparent)] pointer-events-none" />

        {/* Floating petals — pure CSS shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`occ-petal-${i}`}
              className="absolute rounded-full opacity-10 blur-[1px] animate-pulse"
              style={{
                width: `${30 + i * 15}px`,
                height: `${30 + i * 15}px`,
                background: i % 2 === 0 ? "#fda4af" : "#c084fc",
                top: `${15 + i * 12}%`,
                left: `${50 + (i % 3) * 12}%`,
                animationDuration: `${4 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full z-10">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4.5 py-1.5 mb-6">
              <Sparkles size={11} className="text-rose-300 animate-pulse" />
              <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase font-inter">
                Celebrate Life
              </span>
            </div>

            <h1 className="font-serif-display text-5xl md:text-7xl font-black text-[#FBF6EF] leading-[1.05] mb-6">
              Every moment
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-300 to-amber-200 font-medium font-serif-display">
                deserves flowers.
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-light font-inter">
              From grand weddings to romantic anniversaries and quiet notes of gratitude — discover flowers crafted for every emotion and relationship.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#occasions-grid"
                className="group inline-flex items-center gap-2 bg-[#D6537A] hover:bg-rose-600 text-white rounded-2xl px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-soft-lg shadow-rose-950/40 hover:shadow-soft-lg hover:shadow-rose-950/30 hover:scale-[1.04]"
              >
                Browse Occasions
                <ArrowRight size={13} className="icon-wiggle" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl px-8 py-4 text-xs font-bold tracking-widest uppercase backdrop-blur-md transition-all duration-300 hover:shadow-soft-lg hover:shadow-white/10 hover:scale-[1.04]"
              >
                <MessageCircle size={13} className="icon-wiggle" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── OCCASIONS GRID ── */}
      <RevealSection id="occasions-grid" className="py-24 px-6 relative overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/10 to-transparent", size: 240, top: "-5%", right: "-3%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-100/8 to-transparent", size: 200, bottom: "-8%", left: "5%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-purple-200/6 to-transparent", size: 180, top: "40%", left: "45%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="rose" side="left" top="6%" size={48} opacity={0.08} delay={0} duration={16} animation="bloom" color="#D6537A" />
        <FloatingDecoration type="lotus" side="right" top="auto" bottom="10%" size={52} opacity={0.07} delay={2} duration={18} animation="drift-bloom" color="#C9A15A" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase font-inter">Find Your Moment</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[var(--color-primary)] mt-3">Shop by Occasion</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ gridAutoRows: "230px" }}
          >
            {occasions.map((occ) => (
              <motion.div
                key={occ.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${gridClasses[occ.size]} shadow-soft`}
                onMouseEnter={() => setHoveredCard(occ.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/category?cat=${encodeURIComponent(occ.category)}`)}
              >
                {/* Background image container */}
                <div className="absolute inset-0 w-full h-full bg-[var(--color-blush)]/20">
                  <LazyImage
                    src={occ.image}
                    alt={occ.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Base gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${occ.gradient} transition-opacity duration-300`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <span className="text-2xl mb-1.5 drop-shadow-sm select-none">{occ.emoji}</span>
                  <h3 className="font-serif-display text-xl md:text-2xl font-bold text-white leading-tight mb-1">
                    {occ.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    className={`text-white/80 text-xs italic mb-2 leading-relaxed transition-all duration-300 ${
                      hoveredCard === occ.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none h-0 overflow-hidden"
                    }`}
                  >
                    "{occ.tagline}"
                  </p>

                  {/* Description (visible on hover for large cards only) */}
                  {occ.size === "large" && (
                    <p
                      className={`text-white/70 text-xs leading-relaxed mb-3 max-w-xs transition-all duration-300 delay-75 ${
                        hoveredCard === occ.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 pointer-events-none h-0 overflow-hidden"
                      }`}
                    >
                      {occ.desc}
                    </p>
                  )}

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                    <span
                      className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${occ.accentBg} ${occ.accentText} ${occ.accentBorder}`}
                    >
                      {occ.products}
                    </span>

                    <span
                      className={`flex items-center gap-1 bg-white text-[var(--color-primary)] text-[10px] font-bold tracking-wider uppercase rounded-2xl px-3 py-1.5 transition-all duration-300 shadow-soft ${
                        hoveredCard === occ.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-3"
                      }`}
                    >
                      Shop
                      <ChevronRight size={10} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* ── HOW IT WORKS ── */}
      <RevealSection className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase font-inter">Reliable & Transparent</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[var(--color-primary)] mt-2">Delivered in 3 Simple Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <div key={`occ-step-${i}`} className="flex flex-col items-center text-center px-4 py-2 relative">
                {/* Step circle */}
                <div className="w-18 h-18 rounded-full bg-gradient-to-br from-rose-50 to-pink-100/50 border border-rose-100 flex items-center justify-center text-3xl mb-4 shadow-sm relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-serif-display text-lg font-bold text-[var(--color-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px] font-light">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-9 left-[65%] w-[70%] h-px bg-rose-200/40 pointer-events-none" />
                )}
              </div>
            ))}
          </div>

          {/* Promises Strip */}
          <div className="mt-16 flex flex-wrap gap-4 justify-center">
            {[
              { icon: Clock, text: "Same-day delivery by 8 PM" },
              { icon: Star, text: "4.9★ Rated by 2,000+ Customers" },
              { icon: Heart, text: "100% Freshness Guarantee" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={`occ-promise-${i}`}
                className="flex items-center gap-2 bg-[var(--color-cream)] border border-gray-200/60 rounded-full px-5 py-2.5 shadow-sm"
              >
                <Icon size={12} className="text-[var(--color-accent)]" />
                <span className="text-xs text-slate-700 font-bold tracking-wide font-inter">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── SHOP BY RECIPIENT ── */}
      <RevealSection className="py-24 bg-[var(--color-cream)]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase font-inter">Personalized Gifting</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[var(--color-primary)] mt-2">Who Are You Gifting?</h2>
            <p className="text-gray-400 text-sm mt-3 font-light">Bespoke arrangements curated for all the special people in your circle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {recipients.map((item, index) => (
              <div
                key={`occ-recip-${index}`}
                onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-soft-lg hover:shadow-rose-500/10 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              >
                <div className="h-52 overflow-hidden bg-[var(--color-blush)]/20">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-white font-bold text-base font-serif-display">{item.label}</h3>
                  <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white text-[10px] font-bold tracking-wider uppercase">Explore</span>
                    <ArrowRight size={10} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── FEATURED PICKS ── */}
      <RevealSection className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/10 to-transparent", size: 240, top: "-5%", left: "15%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-100/8 to-transparent", size: 200, bottom: "-8%", right: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
        ]} />
        <FloatingDecoration type="rose" side="left" top="8%" size={44} opacity={0.08} delay={0} duration={16} animation="breathe" color="#D6537A" />
        <FloatingDecoration type="lotus" side="right" top="auto" bottom="8%" size={48} opacity={0.06} delay={2} duration={18} animation="drift-bloom" color="#C9A15A" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase font-inter">Featured Creations</span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[var(--color-primary)] mt-2">Most-Loved Gifts</h2>
            </div>
            <Link
              to="/category"
              className="group flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[var(--color-accent)] hover:text-[var(--color-accent)] hover:scale-[1.04] transition-all duration-300"
            >
              View All Products
              <ArrowRight size={14} className="icon-wiggle" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid">
            {featured.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-[var(--color-blush)]/20 relative">
                  <LazyImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-[8px] font-black tracking-widest text-gray-700 rounded-full px-2.5 py-1 uppercase border border-gray-100 z-10">
                    {item.occasion}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif-display text-sm font-bold text-[var(--color-primary)] mb-1 leading-snug line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-4">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="text-[10px] text-gray-500 font-bold font-inter mt-0.5">{item.rating}</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <a href="tel:9540849659" className="font-bold text-[var(--color-accent)] text-sm inline-flex items-center gap-1.5"><Phone size={14} className="icon-wiggle" /> Call for Price</a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCart(item.id);
                      }}
                      className={`group w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shadow-soft ${
                        addedToCart[item.id]
                          ? "bg-emerald-500 border-emerald-500"
                          : "bg-[#D6537A] border-rose-500 hover:bg-rose-600 hover:scale-110 shadow-rose-200"
                      }`}
                      aria-label="Add to cart"
                    >
                      <ShoppingBag size={14} className="text-white icon-wiggle" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── CUSTOM ORDER CTA ── */}
      <RevealSection className="py-24 px-6 relative overflow-hidden bg-[#0a0805]">
        <BokehLights spots={[
          { color: "from-rose-400/12 to-transparent", size: 280, top: "-6%", right: "-4%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-300/10 to-transparent", size: 240, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 32 },
          { color: "from-purple-400/8 to-transparent", size: 200, top: "35%", left: "40%", anim: "bk-float", delay: 1, duration: 28 },
        ]} />
        <FloatingDecoration type="lotus" side="left" top="12%" size={64} opacity={0.08} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
        <FloatingDecoration type="rose" side="right" top="8%" size={52} opacity={0.07} delay={1.5} duration={16} animation="breathe" color="#D6537A" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="10%" size={44} opacity={0.06} delay={3} duration={14} animation="sway3" color="#C9A15A" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(253,164,175,0.08),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/10 to-transparent" />

        <div className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="text-4xl mb-4 select-none">🌸</div>
          <h2 className="font-serif-display text-4xl md:text-5xl font-black text-[#FBF6EF] mb-4 leading-tight">
            Can't find your
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300 font-medium font-serif-display">
              perfect arrangement?
            </span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm font-light font-inter">
            Tell our floral stylists who you are gifting, your budget, and preferences. We will custom-design a unique creation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white rounded-2xl px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-soft-lg shadow-emerald-950/40 hover:shadow-soft-lg hover:shadow-emerald-950/30 hover:scale-[1.04]"
            >
              <MessageCircle size={14} className="icon-wiggle" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT_PHONE_1}`}
              className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-2xl px-8 py-4 text-xs font-bold tracking-widest uppercase backdrop-blur-md transition-all duration-300 hover:shadow-soft-lg hover:shadow-white/10 hover:scale-[1.04]"
            >
              <Phone size={14} className="icon-wiggle" />
              Call us: {CONTACT_PHONE_1}
            </a>
          </div>

          <p className="text-gray-500 text-[10px] mt-6 font-bold tracking-wider uppercase font-inter">
            We respond within 10 minutes · Available 9 AM – 9 PM
          </p>
        </div>
      </RevealSection>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-soft-lg shadow-emerald-400/30 hover:bg-[#20ba59] hover:shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </a>
    </div>
  );
};

export default OccasionsPage;