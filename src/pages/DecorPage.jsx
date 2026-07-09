import React, { useState, useEffect, useRef } from "react";
import LazyImage from "../components/ui/LazyImage";
import {
  BUSINESS_NAME_MAIN,
  BUSINESS_NAME_SUB,
  WHATSAPP_LINK,
  WHATSAPP_DECOR_LINK,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
} from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from "../components/RevealSection";
import FloatingDecoration from "../components/FloatingDecoration";

import image1 from "../assets/s1.png";
import image2 from "../assets/flower/ff1.jpg";
import image3 from "../assets/flower/ff3.jpg";
import image4 from "../assets/flower/ff4.jpg";
import image5 from "../assets/s5.png";
import image6 from "../assets/s6.png";
import image7 from "../assets/flower/ff7.jpg";
import image8 from "../assets/s8.png";
import image9 from "../assets/s9.png";
import image10 from "../assets/s10.png";
import image11 from "../assets/s11.png";
import image12 from "../assets/s12.png";
import image21 from "../assets/s21.png";

import BokehLights from "../components/BokehLights";
import {
  MessageCircle,
  Phone,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Eye,
  Palette,
  CheckCircle,
  Sparkles,
  MapPin,
  Star,
  Send,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────

const decoreThemes = [
  { label: "Wedding", emoji: "💍", tag: "Wedding" },
  { label: "Pre-Wedding", emoji: "🌸", tag: "Pre-Wedding" },
  { label: "Baby Shower", emoji: "👶", tag: "Baby Shower" },
  { label: "Haldi & Mehendi", emoji: "🌼", tag: "Haldi" },
  { label: "Birthday", emoji: "🎂", tag: "Birthday" },
  { label: "Anniversary", emoji: "🏢", tag: "Corporate" }, // original tag was Corporate
  { label: "House Party", emoji: "🏠", tag: "House Party" },
  { label: "Reception", emoji: "✨", tag: "Reception" },
];

const galleryItems = [
  { image: image1, label: "Wedding Stage", tag: "Wedding" },
  { image: image2, label: "Entrance Decor", tag: "Reception" },
  { image: image3, label: "Table Centre", tag: "Corporate" },
  { image: image21, label: "Haldi Setup", tag: "Haldi" },
  { image: image5, label: "Floral Arch", tag: "Wedding" },
  { image: image6, label: "Baby Shower", tag: "Baby Shower" },
  { image: image7, label: "Mehendi Mandap", tag: "Pre-Wedding" },
  { image: image8, label: "Birthday Backdrop", tag: "Birthday" },
  { image: image9, label: "Reception Hall", tag: "Reception" },
  { image: image10, label: "Poolside Decor", tag: "House Party" },
  { image: image11, label: "Car Decoration", tag: "Wedding" },
  { image: image12, label: "Stage Flowers", tag: "Wedding" },
];

const processSteps = [
  {
    icon: MapPin,
    title: "On-Site Visit",
    desc: "Our expert florist visits your venue to understand the space, lighting, and layout — no guesswork, ever.",
    color: "text-[#D6537A]",
    bg: "bg-[#F4C9D1]/50",
  },
  {
    icon: Palette,
    title: "Design Concept",
    desc: "We craft a detailed mood board with bloom choices, colour palette, and styling — tailored to your occasion.",
    color: "text-[#c9a96e]",
    bg: "bg-amber-50/50",
  },
  {
    icon: Eye,
    title: "Your Approval",
    desc: "We share a detailed plan and final costing. No surprises — you sign off before a single stem is cut.",
    color: "text-purple-500",
    bg: "bg-purple-50/50",
  },
  {
    icon: Sparkles,
    title: "We Transform",
    desc: "Our team sets up on the day with freshness, finesse, and flawless execution — you just show up and celebrate.",
    color: "text-emerald-500",
    bg: "bg-emerald-50/50",
  },
];

const faqs = [
  { q: "What occasions do you provide décor services for?", a: "We decorate for weddings, pre-wedding functions (haldi, mehendi, sangeet), receptions, baby showers, birthday parties, corporate events, house parties, and more. If there's a celebration, we're there." },
  { q: "Do you customise décor themes?", a: "Absolutely. Every décor project is designed from scratch based on your vision, venue, and occasion. We don't do copy-paste setups." },
  { q: "Do you conduct a site visit before finalising the décor?", a: "Yes — always. Every project begins with an expert on-site visit. We assess the space, understand the light, and plan the layout before presenting any concept." },
  { q: "What is the process once we enquire?", a: "Once you reach out, we schedule a call, then an on-site visit, then share a design concept and quote within 48 hours. After your approval, we lock the date and begin sourcing." },
  { q: "Can you work within a specific budget?", a: "Yes. Share your budget upfront and we design the best possible experience within it — no compromises on quality, just smart choices on scale." },
  { q: "How far in advance should we book?", a: "For weddings, we recommend 4–8 weeks. For smaller events, 1–2 weeks is usually fine. For peak season (Oct–Feb), earlier is always better." },
];

const stats = [
  { value: 500, suffix: "+", label: "Events Decorated", icon: "🎉" },
  { value: 4.9, suffix: "★", label: "Average Rating", icon: "⭐" },
  { value: 8, suffix: "+", label: "Years Experience", icon: "🌸" },
  { value: 48, suffix: "hr", label: "Design Turnaround", icon: "⚡" },
];

// ─── Animated Counter ──────────────────────────────
const AnimatedCounter = ({ target, suffix, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = target % 1 !== 0;
          const steps = 60;
          const stepTime = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = isDecimal
              ? parseFloat((eased * target).toFixed(1))
              : Math.floor(eased * target);
            setCount(current);
            if (step >= steps) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const DecorPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTheme, setActiveTheme] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", phone: "", occasion: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredGallery, setHoveredGallery] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.phone) setSubmitted(true);
  };

  const filteredGallery = activeTheme === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.tag === activeTheme);

  return (
    <div className="w-full bg-[#fafaf9] min-h-screen relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingDecoration type="leaf" side="left" top="4%" size={28} opacity={0.1} delay={0} duration={14} animation="sway3" color="#d1bca8" />
        <FloatingDecoration type="petal6" side="right" top="3%" size={24} opacity={0.1} delay={1} duration={13} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="petal5" side="left" bottom="8%" size={32} opacity={0.1} delay={0.5} duration={12} animation="sway1" color="#d1bca8" />
        <FloatingDecoration type="petal" side="right" bottom="6%" size={22} opacity={0.1} delay={1.5} duration={15} animation="sway2" color="#d1bca8" />
      </div>
      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative overflow-hidden h-[85vh] min-h-[580px] flex items-center bg-[#0a0604]">
        {/* Bokeh Lights */}
        <BokehLights spots={[
          { color: "from-rose-400/15 to-transparent", size: 300, top: "-8%", right: "-5%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-300/12 to-transparent", size: 260, bottom: "-10%", left: "5%", anim: "bk-drift2", delay: 2, duration: 35 },
          { color: "from-purple-400/10 to-transparent", size: 240, top: "40%", left: "30%", anim: "bk-float", delay: 4, duration: 28 },
          { color: "from-pink-400/12 to-transparent", size: 220, top: "15%", left: "45%", anim: "bk-drift3", delay: 1, duration: 32 },
        ]} />
        <FloatingDecoration type="lotus" side="right" top="12%" size={80} opacity={0.1} delay={0} duration={16} animation="drift-bloom" color="#C9A15A" />
        <FloatingDecoration type="rose" side="left" top="18%" size={60} opacity={0.08} delay={1.5} duration={18} animation="breathe" color="#e8667a" />
        <FloatingDecoration type="petal5" side="right" top="auto" bottom="15%" size={56} opacity={0.1} delay={2} duration={14} color="#C9A15A" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="8%" size={44} opacity={0.08} delay={3} duration={12} animation="sway2" color="#e8667a" />
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image1}
            alt="Luxury floral event decoration"
            className="w-full h-full object-cover transform scale-102 filter brightness-75 select-none"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0604]/90 via-[#0a0604]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0604]/80 via-transparent to-[#0a0604]/30" />
        </div>

        {/* Ambient Gold glow */}
        <div className="absolute top-[30%] left-[20%] w-[450px] h-[300px] rounded-full bg-[#c9a96e]/5 blur-[80px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-ping" />
              <span className="text-[#c9a96e] text-[10px] font-bold tracking-widest uppercase font-inter">
                Floral Decor Studio · Est. 2022
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-serif-display text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Spaces that
              <br />
              <span className="italic font-medium font-serif-display text-transparent bg-clip-text bg-gradient-to-r from-[#f0d5a0] via-[#c9a96e] to-[#a07840]">
                remember you.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-light font-inter"
            >
              From custom wedding stages and traditional haldi mandaps to premium balloon displays — we design bespoke decors that define your celebrations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#e8667a] hover:bg-[#d4546a] text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-rose-950/20 hover:shadow-soft-lg hover:shadow-rose-950/30 hover:scale-[1.04]"
              >
                <Send size={12} className="icon-wiggle" />
                Request Free Quote
              </a>
              <a
                href={WHATSAPP_DECOR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-2xl px-8 py-4 text-xs font-bold tracking-widest uppercase backdrop-blur-md transition-all duration-300 hover:shadow-soft-lg hover:shadow-white/10 hover:scale-[1.04]"
              >
                <MessageCircle size={12} className="icon-wiggle" />
                WhatsApp Consultation
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none">
          <span className="text-gray-500 text-[9px] font-bold tracking-widest uppercase font-inter">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#c9a96e]/60 to-transparent relative">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <RevealSection className="bg-[#0f0b08] py-12 px-6 relative overflow-hidden border-y border-white/5">
        <BokehLights spots={[
          { color: "from-amber-300/10 to-transparent", size: 300, top: "50%", left: "50%", anim: "bk-float", delay: 0, duration: 25 },
          { color: "from-rose-400/8 to-transparent", size: 220, top: "-6%", right: "10%", anim: "bk-drift1", delay: 2, duration: 30 },
          { color: "from-violet-400/6 to-transparent", size: 180, bottom: "-5%", left: "15%", anim: "bk-drift2", delay: 4, duration: 28 },
        ]} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-[#c9a96e]/5 blur-[70px] pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, suffix, label, icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 relative"
              >
                <span className="text-lg mb-1 drop-shadow-md select-none">{icon}</span>
                <span className="font-serif-display text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f0d5a0] to-[#c9a96e] leading-none mb-2">
                  <AnimatedCounter target={value} suffix={suffix} />
                </span>
                <span className="text-gray-500 text-[9px] font-bold tracking-widest uppercase font-inter">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ── ABOUT ────────────────────────────────────── */}
      <RevealSection className="py-24 px-6 bg-[#faf7f2]/70">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <div>
              <span className="text-xs font-bold tracking-widest text-[#e8667a] uppercase font-inter">Our Approach</span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-black text-[#14301F] mt-3 leading-tight">
                Every celebration
                <br />
                <span className="italic font-medium font-serif-display text-[#c9a96e]">deserves to bloom.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-6 font-light font-inter">
                At Shivam Florist, we design environments that reflect your feelings. We start with a consultation, examine your venue to optimize styling, and craft a cohesive bloom composition, custom color palette, and detail list.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mt-4 font-light font-inter">
                Whether it's a corporate gala backdrop, an intimate backyard birthday party, or a wedding varmala stage decoration, we guarantee unmatched freshness and flawless styling execution.
              </p>
              
              <div className="flex gap-4 flex-wrap mt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 bg-[#e8667a] hover:bg-[#d4546a] text-white px-7 py-3.5 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:shadow-rose-950/30 hover:scale-[1.04]"
                >
                  Write to Us <ArrowRight size={13} className="icon-wiggle" />
                </a>
                <a
                  href={`tel:${CONTACT_PHONE_1}`}
                  className="group inline-flex items-center gap-2 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/5 px-7 py-3.5 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-soft-lg hover:shadow-[#c9a96e]/20 hover:scale-[1.04]"
                >
                  <Phone size={12} className="icon-wiggle" />
                  Call Florist
                </a>
              </div>
            </div>

            {/* Images Column */}
            <div className="relative h-[380px] sm:h-[450px]">
              <div className="absolute top-0 right-0 w-[65%] h-[70%] rounded-[24px] overflow-hidden shadow-soft-lg border-4 border-white z-10">
                <LazyImage src={image5} alt="Floral arch wedding decor" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-[24px] overflow-hidden shadow-lg border-4 border-white">
                <LazyImage src={image6} alt="Baby shower theme decor" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c9a96e] text-white text-[9px] font-black tracking-widest uppercase px-5 py-2.5 rounded-full shadow-lg z-20 select-none">
                Est. 2022
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── OCCASION THEME FILTER ─────────────────────── */}
      <RevealSection className="bg-white border-y border-gray-100 py-4 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex gap-3 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTheme("All")}
            className={`shrink-0 rounded-2xl px-5 py-2 text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${
              activeTheme === "All"
                ? "bg-[#e8667a] text-white border-[#e8667a] shadow-soft shadow-[#e8667a]/25"
                : "bg-white text-gray-500 border-gray-200 hover:border-rose-300 hover:text-[#e8667a] hover:scale-[1.04]"
            }`}
          >
            All Themes
          </button>
          {decoreThemes.map((theme) => {
            const isSelected = activeTheme === theme.tag;
            return (
              <button
                key={theme.label}
                onClick={() => setActiveTheme(theme.tag)}
                className={`shrink-0 rounded-2xl px-5 py-2 text-xs font-bold tracking-widest uppercase border transition-all duration-300 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#e8667a] text-white border-[#e8667a] shadow-soft shadow-[#e8667a]/25"
                    : "bg-white text-gray-500 border-gray-200 hover:border-rose-300 hover:text-[#e8667a] hover:scale-[1.04]"
                }`}
              >
                <span>{theme.emoji}</span>
                <span>{theme.label}</span>
              </button>
            );
          })}
        </div>
      </RevealSection>

      {/* ── GALLERY ──────────────────────────────────── */}
      <RevealSection className="py-24 px-6 bg-white relative overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/10 to-transparent", size: 240, top: "-5%", right: "-3%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-100/8 to-transparent", size: 200, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-purple-200/6 to-transparent", size: 180, top: "40%", left: "45%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="rose" side="left" top="8%" size={50} opacity={0.08} delay={0} duration={16} animation="bloom" color="#e8667a" />
        <FloatingDecoration type="lotus" side="right" top="auto" bottom="12%" size={48} opacity={0.07} delay={2} duration={18} animation="drift-bloom" color="#C9A15A" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#e8667a] uppercase font-inter">Portfolio</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">Explore Our Work</h2>
            <p className="text-gray-400 text-sm mt-3 font-light">Each venue setup is custom-designed. Hover to view theme tags.</p>
          </div>

          {filteredGallery.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm font-light">
              No portfolio photos found in this category.
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {filteredGallery.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-soft border border-gray-100 bg-[#F4C9D1]/20"
                  onMouseEnter={() => setHoveredGallery(i)}
                  onMouseLeave={() => setHoveredGallery(null)}
                >
                  <LazyImage src={item.image} alt={item.label} className="w-full h-auto object-cover" />
                  
                  {/* Backdrop Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4.5 left-4.5 bg-white/95 backdrop-blur-md text-[8px] font-black text-gray-700 rounded-full px-2.5 py-1 border border-gray-100 z-10 select-none uppercase tracking-wider">
                    {item.tag}
                  </div>
                  
                  {/* Label Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-serif-display text-white font-bold text-base leading-snug">{item.label}</p>
                    <p className="text-white/60 text-[10px] mt-1.5 flex items-center gap-1 font-light">
                      <Eye size={10} /> Inquire design
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </RevealSection>

      {/* ── PROCESS ──────────────────────────────────── */}
      <RevealSection className="py-24 px-6 bg-[#faf7f2]/70 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-[#e8667a] uppercase font-inter">Flawless Delivery</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">
              From Idea to Execution
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light">A structured design process so nothing is left to chance</p>
          </div>

          <div className="flex flex-col gap-12 relative">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative"
                >
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-soft relative z-10">
                    <Icon size={22} className={step.color} />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <span className={`text-[9px] font-black uppercase tracking-widest ${step.color}`}>
                      Step 0{i + 1}
                    </span>
                    <h3 className="font-serif-display text-lg font-bold text-[#14301F] mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light font-inter max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden sm:block absolute left-7 top-14 w-[1px] h-16 bg-gray-200 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ── CONTACT FORM ─────────────────────────────── */}
      <RevealSection id="contact" className="py-24 px-6 bg-[#111] relative overflow-hidden">
        {/* Bokeh Lights */}
        <BokehLights spots={[
          { color: "from-rose-400/12 to-transparent", size: 280, top: "-8%", left: "-5%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-300/10 to-transparent", size: 220, bottom: "-10%", right: "10%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-purple-300/8 to-transparent", size: 200, top: "60%", left: "40%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="lotus" side="left" top="12%" size={56} opacity={0.08} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
        <FloatingDecoration type="rose" side="right" top="8%" size={48} opacity={0.07} delay={1.5} duration={16} animation="breathe" color="#e8667a" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="10%" size={40} opacity={0.06} delay={3} duration={14} animation="sway3" color="#C9A15A" />
        {/* Glow Effects */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c9a96e]/5 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#e8667a]/5 blur-[70px] pointer-events-none" />

        <div className="max-w-xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#c9a96e] uppercase font-inter">Design Query</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 leading-tight">
              Let's plan your
              <br />
              <span className="italic font-medium font-serif-display text-[#c9a96e]">perfect decor</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 font-light">Fill in your requirements. Our decorator will contact you within 10 minutes.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-[#c9a96e]/20 rounded-3xl p-10 text-center flex flex-col items-center gap-4"
            >
              <CheckCircle size={44} className="text-[#c9a96e]" />
              <h3 className="font-serif-display text-xl font-bold text-white">Inquiry Received</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
                Thank you for reaching out! Our event decor coordinator will contact you shortly to plan the next steps.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Your Name", type: "text", required: true },
                  { key: "email", label: "Email Address", type: "email", required: true },
                  { key: "phone", label: "Phone Number", type: "tel", required: true },
                  { key: "occasion", label: "Occasion (e.g. Wedding, Birthday)", type: "text", required: false },
                ].map(({ key, label, type, required }) => (
                  <div key={key}>
                    <input
                      type={type}
                      required={required}
                      placeholder={label + (required ? " *" : "")}
                      value={form[key]}
                      onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                      className="w-full px-5 py-3.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]/10 transition-all duration-200 font-inter font-medium"
                    />
                  </div>
                ))}
              </div>
              <textarea
                rows={4}
                placeholder="Briefly describe your vision — guest count, color scheme, date, and specific decor elements..."
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="w-full px-5 py-3.5 rounded-xl text-xs bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]/10 resize-none transition-all duration-200 font-inter font-medium"
              />
              
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button
                  type="submit"
                  className="group flex-1 flex items-center justify-center gap-2 bg-[#e8667a] hover:bg-[#d4546a] text-white border-none rounded-xl py-4 font-bold text-xs tracking-widest uppercase cursor-pointer hover:shadow-soft-lg hover:shadow-rose-950/30 hover:scale-[1.04] transition-all duration-300"
                >
                  <Send size={13} className="icon-wiggle" />
                  Submit Request
                </button>
                <a
                  href={WHATSAPP_DECOR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 border border-[#25d366] text-[#25d366] hover:bg-[#25d366]/5 rounded-xl py-4 font-bold text-xs tracking-widest uppercase hover:shadow-soft-lg hover:shadow-[#25d366]/20 hover:scale-[1.04] transition-all duration-300"
                >
                  <MessageCircle size={13} className="icon-wiggle" />
                  WhatsApp Consult
                </a>
              </div>
              
              <p className="text-center text-gray-500 text-[10px] uppercase font-bold tracking-wider">
                Support Hours: 9:00 AM – 9:00 PM NCR Wide
              </p>
            </form>
          )}
        </div>
      </RevealSection>

      {/* ── FAQ ──────────────────────────────────────── */}
      <RevealSection className="py-24 px-6 bg-[#faf7f2]/70">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#e8667a] uppercase font-inter">Help Desk</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isSelected = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-soft transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isSelected ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-[#14301F] focus:outline-none"
                  >
                    <span className="font-serif-display text-sm leading-snug">{faq.q}</span>
                    <span className="text-[#e8667a] shrink-0">
                      {isSelected ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 text-gray-500 text-xs sm:text-sm leading-relaxed font-light border-t border-gray-50/50 pt-3.5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ── FINAL CTA STRIP ──────────────────────────── */}
      <RevealSection className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#14301F]">
              Ready to transform your venue?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 font-light">
              Speak to our senior floral designer today — no obligations, just fresh design ideas.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${CONTACT_PHONE_1}`}
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-slate-800 text-[#14301F] hover:bg-slate-50 px-6 py-3.5 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.04]"
            >
              <Phone size={12} className="icon-wiggle" />
              Call us
            </a>
            <a
              href="#contact"
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#e8667a] hover:bg-[#d4546a] text-white px-6 py-3.5 rounded-2xl font-bold text-xs tracking-widest uppercase shadow-soft shadow-rose-950/10 hover:shadow-soft-lg hover:shadow-rose-950/30 hover:scale-[1.04] transition-all duration-300"
            >
              Get Free Quote <ArrowRight size={12} className="icon-wiggle" />
            </a>
          </div>
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

export default DecorPage;