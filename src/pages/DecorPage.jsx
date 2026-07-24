import { useState } from "react";
import LazyImage from "../components/ui/LazyImage";
import {
  WHATSAPP_DECOR_LINK,
  CONTACT_PHONE_1,
} from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from "../components/RevealSection";
import AnimatedCounter from "../components/ui/AnimatedCounter";

import image1 from "../assets/s1.png";
import image5 from "../assets/s5.png";
import image6 from "../assets/s6.png";
import image8 from "../assets/s8.png";
import image9 from "../assets/s9.png";
import image10 from "../assets/s10.png";
import image11 from "../assets/s11.png";
import image12 from "../assets/s12.png";
import image21 from "../assets/s21.png";

import {
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Palette,
  CheckCircle,
  Users,
  Flower2,
  Clock,
  Gem,
  BadgePercent,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  ArrowDown,
} from "lucide-react";

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

// ─── Data ─────────────────────────────────────────

const servicePreview = [
  { emoji: "🌸", label: "Birthday Decoration", price: "Starting from ₹2,999" },
  { emoji: "💍", label: "Anniversary Decoration", price: "Starting from ₹3,999" },
  { emoji: "👰", label: "Wedding Decoration", price: "Custom Quote" },
  { emoji: "🎈", label: "Balloon Decoration", price: "Starting from ₹1,999" },
  { emoji: "🏡", label: "Home Celebration Decor", price: "Starting from ₹2,499" },
  { emoji: "🏢", label: "Corporate Event Decor", price: "Custom Quote" },
];

const occasions = [
  {
    emoji: "🎂",
    title: "Birthday Decoration",
    desc: "Make every birthday unforgettable with themed setups, balloon arches, and personalized backdrops.",
    image: image8,
    price: "Starting from ₹2,999",
  },
  {
    emoji: "💍",
    title: "Wedding Decoration",
    desc: "From mandap to reception, we design every detail of your dream wedding with floral elegance.",
    image: image5,
    price: "Custom Quote",
  },
  {
    emoji: "💝",
    title: "Anniversary Decoration",
    desc: "Celebrate your love story with intimate floral setups, candlelit dinners, and romantic backdrops.",
    image: image12,
    price: "Starting from ₹3,999",
  },
  {
    emoji: "🎊",
    title: "Proposal Decoration",
    desc: "Create the perfect moment with roses, candles, and a setting that says 'forever'.",
    image: image11,
    price: "Starting from ₹3,499",
  },
  {
    emoji: "🎈",
    title: "Baby Shower",
    desc: "Welcome your little one with pastel balloons, floral walls, and delightful themed decor.",
    image: image6,
    price: "Starting from ₹1,999",
  },
  {
    emoji: "🏠",
    title: "Home Decoration",
    desc: "Transform your home for festivals, parties, or everyday luxury with curated floral accents.",
    image: image10,
    price: "Starting from ₹2,499",
  },
  {
    emoji: "🏢",
    title: "Corporate Events",
    desc: "Professional stage setups, lobby decor, and branded environments for conferences and galas.",
    image: image9,
    price: "Custom Quote",
  },
  {
    emoji: "🎉",
    title: "House Party",
    desc: "Turn any gathering into a celebration with vibrant setups, photo walls, and festive decor.",
    image: image21,
    price: "Starting from ₹1,499",
  },
];

const themes = [
  {
    title: "Wedding Stage",
    badge: "Trending",
    className: "from-amber-500/20",
    image: image1,
  },
  {
    title: "Haldi Setup",
    badge: "Popular",
    className: "from-yellow-500/20",
    image: image21,
  },
  {
    title: "Mehendi Decor",
    badge: "Trending",
    className: "from-green-500/20",
    image: image5,
  },
  {
    title: "Reception Decor",
    badge: "Luxury",
    className: "from-rose-500/20",
    image: image9,
  },
  {
    title: "Romantic Room",
    badge: "Luxury",
    className: "from-pink-500/20",
    image: image10,
  },
  {
    title: "Birthday Balloon Setup",
    badge: "Popular",
    className: "from-purple-500/20",
    image: image8,
  },
  {
    title: "Baby Shower Theme",
    badge: "Trending",
    className: "from-blue-500/20",
    image: image6,
  },
  {
    title: "Corporate Backdrop",
    badge: "Popular",
    className: "from-slate-500/20",
    image: image12,
  },
];

const timelineSteps = [
  { step: 1, title: "Choose Occasion", desc: "Pick your event type and share your vision with us." },
  { step: 2, title: "Discuss with Designer", desc: "Our expert decorator visits your venue and understands your requirements." },
  { step: 3, title: "Get Quote", desc: "Receive a detailed design proposal and transparent pricing within 48 hours." },
  { step: 4, title: "Decoration Day", desc: "We set up, style, and deliver — you just show up and celebrate." },
];

const whyChooseUs = [
  { icon: Users, title: "Professional Decorators", desc: "Experienced designers who understand space, light, and aesthetics." },
  { icon: Flower2, title: "Fresh Flowers", desc: "We use only the freshest blooms sourced daily from local farms." },
  { icon: Palette, title: "Customized Themes", desc: "Every event is unique — we create bespoke themes tailored to you." },
  { icon: Clock, title: "Same Day Setup", desc: "Efficient on-site execution so your venue is ready on time, every time." },
  { icon: Gem, title: "Premium Materials", desc: "From fabrics to florals, we use only the highest quality materials." },
  { icon: BadgePercent, title: "Affordable Packages", desc: "Luxury decor within your budget — no compromise on quality." },
];

const galleryItems = [
  { src: image5, label: "Floral Wedding Arch", size: "large" },
  { src: image1, label: "Grand Mandap Setup", size: "large" },
  { src: image8, label: "Birthday Backdrop", size: "small" },
  { src: image6, label: "Baby Shower Decor", size: "small" },
  { src: image21, label: "Traditional Haldi", size: "small" },
  { src: image10, label: "Poolside Celebration", size: "small" },
];

const testimonials = [
  {
    name: "Priya S.",
    review: "Absolutely stunning decor for our wedding. Every guest complimented the floral arrangements and stage setup. Thank you for making our day so special!",
    rating: 5,
    occasion: "Wedding Reception",
    location: "Noida",
    initial: "P",
  },
  {
    name: "Amit & Neha",
    review: "The haldi and mehendi decor was beyond our expectations. The team understood exactly what we wanted and delivered flawlessly.",
    rating: 5,
    occasion: "Haldi & Mehendi",
    location: "Delhi",
    initial: "A",
  },
  {
    name: "Rohit K.",
    review: "We hired them for our corporate gala and the lobby transformation was magnificent. Very professional team with great attention to detail.",
    rating: 5,
    occasion: "Corporate Event",
    location: "Gurgaon",
    initial: "R",
  },
  {
    name: "Sneha M.",
    review: "The baby shower decor was dreamy! Pink balloons, floral walls, and a gorgeous cake table. My daughter loved every bit of it.",
    rating: 5,
    occasion: "Baby Shower",
    location: "Ghaziabad",
    initial: "S",
  },
  {
    name: "Vikram G.",
    review: "Birthday surprise for my wife — the room transformation was magical. Roses everywhere, candlelit setup. She cried tears of joy.",
    rating: 5,
    occasion: "Birthday Decoration",
    location: "Greater Noida",
    initial: "V",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Events Decorated" },
  { value: 4.9, suffix: "★", label: "Customer Rating" },
  { value: 12, suffix: "+", label: "Cities Served" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

const DecorPage = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((i) => (i + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[testimonialIndex];

  return (
    <div className="w-full min-h-screen bg-[#fafaf9] overflow-x-clip">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-[#0a0604]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image1}
            alt="Premium event decoration"
            className="w-full h-full object-cover select-none"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0604]/95 via-[#0a0604]/70 to-[#0a0604]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0604]/90 via-transparent to-[#0a0604]/40" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] rounded-full bg-[#c9a96e]/5 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-[10px] font-bold tracking-[0.2em] uppercase">
                Shivam Florist · Event Decor
              </span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Premium Event
              <br />
              <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#f0d5a0] via-[#c9a96e] to-[#a07840]">
                Decorations
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl font-light mb-8">
              From intimate birthday surprises to luxurious wedding setups,
              our designers create unforgettable celebrations that leave a lasting impression.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#occasions"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a96e] to-[#b8923f] text-white px-8 py-3.5 rounded-2xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-[#c9a96e]/20 hover:shadow-xl hover:shadow-[#c9a96e]/30 hover:scale-[1.03]"
              >
                Explore Decorations
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={WHATSAPP_DECOR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-2xl px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-md transition-all duration-300 hover:scale-[1.03]"
              >
                <MessageCircle size={13} />
                Book Consultation
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Custom Themes", "Fresh Flowers", "Same Day Setup", "Professional Team"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                  <CheckCircle size={12} className="text-emerald-400" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none">
          <span className="text-gray-600 text-[9px] font-bold tracking-[0.15em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a96e]/60 to-transparent relative">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ QUICK SERVICE PREVIEW ═══ */}
      <RevealSection className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {servicePreview.map((s) => (
              <motion.a
                key={s.label}
                href="#occasions"
                {...stagger}
                className="group flex flex-col items-center text-center p-4 rounded-2xl bg-[#faf7f2]/60 border border-gray-100 hover:border-[#c9a96e]/20 hover:bg-white hover:shadow-lg hover:shadow-[#c9a96e]/5 transition-all duration-300"
              >
                <span className="text-2xl mb-2">{s.emoji}</span>
                <span className="text-[11px] font-bold text-[#14301F] leading-tight mb-1">{s.label}</span>
                <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#c9a96e]">{s.price}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ═══ CHOOSE YOUR CELEBRATION ═══ */}
      <RevealSection id="occasions" className="py-20 px-6 bg-[#faf7f2]/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a96e] uppercase">Services</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">Choose Your Celebration</h2>
            <p className="text-gray-400 text-sm mt-2 font-light">Every event is crafted from scratch — no templates, just pure creativity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {occasions.map((oc) => (
              <motion.a
                key={oc.title}
                href={WHATSAPP_DECOR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                {...pageTransition}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-[#c9a96e]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9a96e]/10 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <LazyImage src={oc.image} alt={oc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-white font-serif-display font-bold text-lg drop-shadow-lg">{oc.emoji} {oc.title}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-xs leading-relaxed font-light mb-3">{oc.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#c9a96e]">{oc.price}</span>
                    <span className="w-8 h-8 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e] transition-all duration-300 group-hover:bg-[#c9a96e] group-hover:text-white group-hover:scale-110">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ═══ POPULAR DECORATION THEMES ═══ */}
      <RevealSection className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a96e] uppercase">Inspiration</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">Popular Decoration Themes</h2>
            <p className="text-gray-400 text-sm mt-2 font-light">Explore our most requested setups and find the perfect look for your event.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <motion.a
                key={theme.title}
                href={WHATSAPP_DECOR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                {...pageTransition}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              >
                <LazyImage src={theme.image} alt={theme.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className={`absolute top-3 left-3 text-[8px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${theme.className} text-white border border-white/10 backdrop-blur-sm`}>
                  {theme.badge}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-sm font-serif-display">{theme.title}</h3>
                  <span className="text-white/50 text-[10px] mt-1 flex items-center gap-1 transition-all duration-300 group-hover:text-[#c9a96e]">
                    View Details <ArrowRight size={10} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ═══ HOW IT WORKS ═══ */}
      <RevealSection className="py-20 px-6 bg-[#0a0604] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a96e]/5 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a96e] uppercase">Process</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-white mt-2">How It Works</h2>
            <p className="text-gray-500 text-sm mt-2 font-light">Four simple steps to your dream celebration.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#c9a96e]/0 via-[#c9a96e]/30 to-[#c9a96e]/0 pointer-events-none" />
            {timelineSteps.map((step) => (
              <motion.div
                key={step.step}
                {...stagger}
                className="flex flex-col items-center text-center lg:relative"
              >
                <div className="w-24 h-24 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 relative">
                  <span className="font-serif-display text-3xl font-black text-[#c9a96e]">{step.step}</span>
                  {step.step < 4 && (
                    <ArrowDown size={16} className="absolute -bottom-5 text-white/10 lg:hidden" />
                  )}
                </div>
                <h3 className="text-white font-bold text-base font-serif-display mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[220px] font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ═══ WHY CHOOSE US ═══ */}
      <RevealSection className="py-20 px-6 bg-[#faf7f2]/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a96e] uppercase">Why Us</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">Why Choose Us</h2>
            <p className="text-gray-400 text-sm mt-2 font-light">We don't just decorate — we create experiences.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...pageTransition}
                  className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#c9a96e]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a96e]/5 hover:-translate-y-0.5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center mb-4 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif-display font-bold text-base text-[#14301F] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ═══ GALLERY PREVIEW ═══ */}
      <RevealSection className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a96e] uppercase">Portfolio</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">Our Recent Work</h2>
            <p className="text-gray-400 text-sm mt-2 font-light">A glimpse into the celebrations we've designed.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryItems.map((item, i) => (
              <motion.a
                key={`gl-${i}`}
                href={WHATSAPP_DECOR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                {...pageTransition}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                  item.size === "large"
                    ? "col-span-2 row-span-2 aspect-square"
                    : "aspect-[4/5]"
                }`}
              >
                <LazyImage
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm font-serif-display font-bold">{item.label}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={WHATSAPP_DECOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white px-8 py-3.5 rounded-2xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a96e]/20"
            >
              View Full Gallery
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </RevealSection>

      {/* ═══ CUSTOMER STATS ═══ */}
      <RevealSection className="py-16 px-6 bg-[#0a0604] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                {...stagger}
                className="flex flex-col items-center text-center p-4"
              >
                <span className="font-serif-display text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f0d5a0] to-[#c9a96e] leading-none mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-gray-500 text-[10px] font-bold tracking-[0.15em] uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ═══ TESTIMONIALS ═══ */}
      <RevealSection className="py-20 px-6 bg-[#faf7f2]/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#c9a96e] uppercase">Testimonials</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-black text-[#14301F] mt-2">What Our Clients Say</h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 text-center"
                >
                  <Quote size={32} className="mx-auto mb-6 text-[#c9a96e]/20" />
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light italic mb-6">"{t.review}"</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={`s-${i}`} size={14} className="fill-[#c9a96e] text-[#c9a96e]" />
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-[#c9a96e] text-sm">{t.initial}</span>
                  </div>
                  <p className="font-bold text-[#14301F] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{t.occasion} · {t.location}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={`d-${i}`}
                    onClick={() => setTestimonialIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === testimonialIndex ? "bg-[#c9a96e] w-5" : "bg-gray-200"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ═══ BOOK CONSULTATION CTA ═══ */}
      <RevealSection className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0604] via-[#0f0b08] to-[#0a0604] p-10 sm:p-14 text-center border border-[#c9a96e]/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#c9a96e]/5 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Need help planning<br />your celebration?
              </h2>
              <p className="text-gray-400 text-sm font-light mb-8 max-w-lg mx-auto">
                Talk to our decoration experts. Get a free consultation and quote within 48 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${CONTACT_PHONE_1}`}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a96e] to-[#b8923f] text-white px-8 py-3.5 rounded-2xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a96e]/20 hover:scale-[1.03]"
                >
                  <Phone size={13} />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_DECOR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white px-8 py-3.5 rounded-2xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#25d366]/20 hover:scale-[1.03]"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};

export default DecorPage;
