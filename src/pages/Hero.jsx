import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  ArrowRight,
  Truck,
  ShieldCheck,
  Gift,
  Flower2,
  Star,
  Quote,
  Heart,
  Cake,
  PartyPopper,
  Mail,
  Clock,
  Percent,
  Leaf,
  Plus,
  Minus,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Users,
  Award,
  Package,
  Phone,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "../components/ui/LazyImage";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";
import RevealSection from "../components/RevealSection";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { WHATSAPP_LINK, INSTAGRAM_LINK, FACEBOOK_LINK } from "../constants";

import igShot1 from "../assets/flower/ff1.jpg";
import igShot2 from "../assets/recepmarriage/bride1.jpg";
import igShot3 from "../assets/recepmarriage/r1.jpg";
import igShot4 from "../assets/birthday/birthday1.png";
import igShot5 from "../assets/optimized/anni1-320.webp";
import igShot6 from "../assets/devotional/dev1.jpg";
import image1 from "../assets/optimized/f3-320.webp";
import image42 from "../assets/s42.png";
import image16 from "../assets/optimized/b1-320.webp";
import image4 from "../assets/optimized/anni1-320.webp";
import image5 from "../assets/f24.png";
import image6 from "../assets/f20.png";
import image7 from "../assets/optimized/bride2-320.webp";
import image8 from "../assets/birthday/birthday1.png";
import image9 from "../assets/devotional/dev1.jpg";
import image10 from "../assets/s10.png";
import image11 from "../assets/s12.png";
import image12 from "../assets/s13.png";
import image13 from "../assets/s14.png";
import image26 from "../assets/recepmarriage/r10.jpg";
import image27 from "../assets/gift.jpg";
import hero from "../assets/optimized/hero-640.webp";
import image28 from "../assets/f1.png";
import imageF2 from "../assets/f2.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const categorySliderRef = useRef(null);
  const bestSellerSliderRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroImageRef.current) {
        const rect = heroImageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroImageRef.current.style.transform = `scale(1.05) translate(${x * 15}px, ${y * 15}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollSlider = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("[data-slide-card]");
    const cardWidth = card ? card.offsetWidth + 20 : 300;
    ref.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [wishlist, setWishlist] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 5;
          minutes = 42;
          seconds = 18;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const pad = (n) => String(n).padStart(2, "0");

  const categories = [
    { title: "Bouquets", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", products: "120+ Products", category: "Bouquets" },
    { title: "Floral Arrangements", image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80", products: "80+ Products", category: "All" },
    { title: "Premium Balloons Decor", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", products: "150+ Products", category: "Balloon" },
    { title: "For Love", image: image5, products: "30+ Products", category: "Anniversary" },
    { title: "Occasional Cakes & Gifts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", products: "25+ Products", category: "All" },
    { title: "Dried Florals", image: imageF2, products: "40+ Products", category: "All" },
  ];

  const cardIcons = [Flower2, Star, PartyPopper, Heart, Cake, Leaf];

  const bestSellers = [
    {
      id: 1,
      title: "Pink Rhapsody Bouquet",
      image: image5,
      price: "acceptable",
      originalPrice: "₹1,999",
      rating: 4.8,
      badge: "Bestseller",
      category: "Bouquets",
    },
    {
      id: 2,
      title: "Lily Blush Symphony",
      image: image6,
      price: "acceptable",
      originalPrice: "₹2,499",
      rating: 4.9,
      badge: "New",
      category: "Bouquets",
    },
    {
      id: 3,
      title: "Red Velvet Bouquet",
      image: image7,
      price: "acceptable",
      originalPrice: null,
      rating: 4.7,
      badge: null,
      category: "Bouquets",
    },
    {
      id: 4,
      title: "Wildflower Melody",
      image: image8,
      price: "acceptable",
      originalPrice: "₹2,399",
      rating: 4.6,
      badge: "Limited",
      category: "Bouquets",
    },
  ];

  const steps = [
    {
      title: "Browse & Choose",
      desc: "Explore our curated collection of bouquets, arrangements and gifts for every occasion.",
      icon: ShoppingBag,
    },
    {
      title: "We Craft & Pack",
      desc: "Our florists hand-arrange your order with fresh, farm-sourced blooms and secure packaging.",
      icon: Flower2,
    },
    {
      title: "Same-Day Delivery",
      desc: "Sit back and relax while we deliver your order fresh and on time, right to their door.",
      icon: Truck,
    },
  ];

  const whyChooseUs = [
    {
      title: "Fast Delivery",
      desc: "Same day flower delivery available.",
      icon: Truck,
      bg: "bg-[#F4C9D1]/50",
      iconColor: "text-[#D6537A]",
    },
    {
      title: "Fresh Flowers",
      desc: "Handpicked premium blooms, sourced daily.",
      icon: Flower2,
      bg: "bg-emerald-50/50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Secure Payment",
      desc: "Safe and encrypted checkout.",
      icon: ShieldCheck,
      bg: "bg-blue-50/50",
      iconColor: "text-blue-600",
    },
    {
      title: "Perfect Gifts",
      desc: "Crafted with love and care.",
      icon: Gift,
      bg: "bg-amber-50/50",
      iconColor: "text-amber-600",
    },
  ];

  const reviewData = [
    { text: "Absolutely stunning wedding decor — they transformed the venue into a floral paradise.", name: "Sneha Sharma", location: "Noida", initials: "SS", color: "bg-rose-400" },
    { text: "Ordered for my anniversary and the bouquet was even more beautiful than the photos!", name: "Rahul Verma", location: "Delhi", initials: "RV", color: "bg-[#C9A15A]" },
    { text: "Best florist in Delhi NCR! Fresh flowers, on-time delivery, and premium packaging.", name: "Priya Singh", location: "Gurugram", initials: "PS", color: "bg-emerald-500" },
    { text: "The mandap decoration for our wedding was breathtaking. Every guest complimented it.", name: "Ananya Gupta", location: "Noida", initials: "AG", color: "bg-purple-400" },
    { text: "Regular customer for over a year — the quality and freshness never drops.", name: "Vikas Malhotra", location: "Delhi", initials: "VM", color: "bg-sky-500" },
    { text: "They decorated our corporate Diwali event. Exquisite floral arrangements throughout!", name: "Neha Kapoor", location: "Gurugram", initials: "NK", color: "bg-pink-500" },
    { text: "Sent a bouquet to my mother in Noida — she called it the most beautiful arrangement ever.", name: "Arjun Mehta", location: "Delhi", initials: "AM", color: "bg-indigo-400" },
    { text: "The devotional floral setup for our temple inauguration was pure perfection.", name: "Kavita Jain", location: "Noida", initials: "KJ", color: "bg-orange-400" },
    { text: "Same-day delivery saved me! Ordered at 3pm, arrived by 6pm looking absolutely fresh.", name: "Rohit Bhatia", location: "Delhi", initials: "RB", color: "bg-teal-500" },
    { text: "Best wedding decor partner in Delhi NCR. Professional team, gorgeous flowers, fair pricing.", name: "Pooja Agarwal", location: "Gurugram", initials: "PA", color: "bg-[#D6537A]" },
    { text: "The rose arch at our reception was a showstopper. Thank you Shivam Florist!", name: "Amit Khanna", location: "Noida", initials: "AK", color: "bg-red-400" },
    { text: "Freshness guaranteed — these flowers lasted almost 10 days. Unbelievable quality.", name: "Deepika Joshi", location: "Delhi", initials: "DJ", color: "bg-green-500" },
    { text: "Ordered grand wedding stage flowers. They executed exactly what they promised. Superb!", name: "Manish Tiwari", location: "Gurugram", initials: "MT", color: "bg-amber-600" },
    { text: "Beautiful garlands for our puja. Fragrant marigolds and perfectly strung roses.", name: "Sunita Devi", location: "Noida", initials: "SD", color: "bg-yellow-500" },
    { text: "The floral centerpieces at our gala dinner were elegant and eye-catching.", name: "Rajeev Chopra", location: "Delhi", initials: "RC", color: "bg-violet-500" },
    { text: "Prompt delivery, gorgeous blooms, and excellent customer service. Highly recommended.", name: "Shweta Pandey", location: "Noida", initials: "SP", color: "bg-rose-500" },
    { text: "Got the luxury bouquet for our anniversary — presentation was world-class.", name: "Karan Arora", location: "Gurugram", initials: "KA", color: "bg-fuchsia-500" },
    { text: "They handled our entire wedding floral decor. Mandap, entrance, stage — all stunning.", name: "Isha Saxena", location: "Delhi", initials: "IS", color: "bg-rose-400" },
    { text: "The attention to detail in their arrangements is remarkable. Truly premium florist.", name: "Gaurav Yadav", location: "Noida", initials: "GY", color: "bg-[#C9A15A]" },
    { text: "Ordered flowers for Mother's Day — the recipient was overjoyed with the arrangement.", name: "Nikita Patel", location: "Delhi", initials: "NP", color: "bg-pink-400" },
    { text: "Artificial flower decor for our Diwali party looked just like fresh blooms. Amazing work!", name: "Harsh Agarwal", location: "Gurugram", initials: "HA", color: "bg-purple-500" },
    { text: "The bouquet was hand-delivered with such care and elegance. Exceptional service.", name: "Megha Rajan", location: "Noida", initials: "MR", color: "bg-sky-400" },
  ];

  const faqs = [
    {
      q: "How fast can I get same-day delivery?",
      a: "Place your order before 4 PM and we'll deliver fresh flowers to your doorstep the same day, across Delhi NCR.",
    },
    {
      q: "Are the flowers fresh when they arrive?",
      a: "Every arrangement is hand-crafted on the day of delivery using flowers sourced from local farms that morning.",
    },
    {
      q: "Can I customize my bouquet or add a gift?",
      a: "Yes! You can choose your favourite blooms, colours and wrapping, and add chocolates, cakes or candles at checkout.",
    },
    {
      q: "What happens if I'm not happy with my order?",
      a: "Reach out within 24 hours of delivery and we'll arrange a replacement or refund — no questions asked.",
    },
  ];

 const galleryImages = [
  igShot1,
  igShot2,
  igShot3,
  igShot4,
  igShot5,
  igShot6,
];

  return (
    <div className="w-full overflow-hidden bg-[#FAF8F5]">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ─── HERO SECTION ─── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fdf6f0] via-[#fcf3ea] to-[#FAF8F5] pt-16 lg:pt-10">
        <BokehLights spots={[
          { color: "from-rose-300/25 to-transparent", size: 280, top: "2%", right: "6%", anim: "bk-drift2", delay: 0, duration: 26 },
          { color: "from-amber-200/25 to-transparent", size: 240, top: "35%", left: "2%", anim: "bk-drift1", delay: 2, duration: 30 },
          { color: "from-emerald-200/20 to-transparent", size: 220, bottom: "8%", right: "20%", anim: "bk-float", delay: 4, duration: 28 },
          { color: "from-purple-200/15 to-transparent", size: 180, top: "12%", left: "35%", anim: "bk-drift3", delay: 1, duration: 24 },
        ]} />
        <div className="absolute top-24 right-[8%] w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-gold)]/8 to-transparent blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'6s'}} />
        <div className="absolute bottom-16 left-[5%] w-40 h-40 rounded-full bg-gradient-to-tr from-[var(--color-accent)]/6 to-transparent blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'8s'}} />

        {/* ─── Category Shortcuts Row ─── */}
        <div className="relative w-full pb-2 lg:pb-4">
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 md:gap-8 justify-start md:justify-center px-6 md:px-8 max-w-[1440px] mx-auto">
              {[
                { label: "Bouquet", image: image1, link: "/category?cat=Bouquets", discount: null },
                { label: "Anniversary", image: image4, link: "/category?cat=Anniversary", discount: null },
                { label: "Wedding", image: image7, link: "/category?cat=Wedding", discount: null },
                { label: "Balloons", image: image16, link: "/category?cat=Balloon", discount: "Up to 30% Off" },
                { label: "Devotional", image: image9, link: "/category?cat=Devotional", discount: null },
                { label: "Luxury", image: image26, link: "/category", discount: null },
                { label: "Gifts", image: image27, link: "/category", discount: "10% Off" },
                { label: "Flowers", image: image6, link: "/category?cat=Anniversary", discount: null },
                { label: "Plants", image: image5, link: "/category?cat=Birthday", discount: null },
                { label: "Birthday", image: image8, link: "/category?cat=Birthday", discount: "Flat 15%" },
              ].map((cat, i) => (
                <Link
                  key={`cat-circle-${i}`}
                  to={cat.link}
                  className="flex flex-col items-center gap-2.5 shrink-0 group"
                >
                  <div className="relative w-[80px] h-[80px] md:w-[88px] md:h-[88px] rounded-full overflow-hidden border-2 border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_32px_rgba(201,161,90,0.15)] group-hover:border-[var(--color-gold)]/30 transition-all duration-400">
                    <LazyImage
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {cat.discount && (
                      <div className="absolute -top-0.5 -right-0.5 bg-[var(--color-accent)] text-white text-[7px] md:text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                        {cat.discount}
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] md:text-xs font-semibold text-stone-500 group-hover:text-[var(--color-primary)] transition-colors whitespace-nowrap tracking-wide">
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Hero Promotional Card ─── */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-4 lg:pb-6">
          <div className="relative bg-gradient-to-br from-[#F8F3EC] via-[#F5EFE6] to-[#F0E8DC] rounded-[32px] overflow-hidden shadow-[0_25px_80px_-20px_rgba(214,83,122,0.2),0_15px_40px_-15px_rgba(201,161,90,0.15)] ring-1 ring-[var(--color-gold)]/15">
            <div className="absolute top-4 right-4 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[var(--color-primary)]/90 backdrop-blur-sm flex items-center justify-center shadow-md cursor-default border border-[var(--color-gold)]/20">
              <ArrowRight size={20} className="text-[var(--color-gold)]" strokeWidth={2.5} />
            </div>

            <div className="absolute top-0 left-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
                <path d="M0 70 C20 50, 40 30, 60 20 C80 10, 100 8, 130 12" stroke="#7a8c6b" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M30 40 C34 34, 40 32, 44 36 C40 42, 34 44, 30 40Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M55 24 C59 18, 65 16, 69 20 C65 26, 59 28, 55 24Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M85 14 C89 8, 95 6, 99 10 C95 16, 89 18, 85 14Z" fill="#7a8c6b" opacity="0.45" />
                <path d="M5 85 C8 75, 14 72, 18 76 C14 82, 8 88, 5 85Z" fill="var(--color-gold)" opacity="0.5" />
                <circle cx="110" cy="6" r="2" fill="var(--color-gold)" opacity="0.4" />
                <circle cx="125" cy="18" r="1.5" fill="#7a8c6b" opacity="0.4" />
                <circle cx="15" cy="95" r="1.5" fill="var(--color-gold)" opacity="0.35" />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                <path d="M20 80 C30 60, 40 40, 40 28 C40 18, 35 10, 30 4" stroke="#7a8c6b" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M34 30 C38 24, 44 22, 48 26 C44 32, 38 34, 34 30Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M32 16 C36 10, 42 8, 46 12 C42 18, 36 20, 32 16Z" fill="#7a8c6b" opacity="0.5" />
                <circle cx="85" cy="70" r="2" fill="var(--color-gold)" opacity="0.35" />
                <circle cx="90" cy="64" r="1.2" fill="#7a8c6b" opacity="0.35" />
              </svg>
            </div>

            <div className="absolute top-0 right-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <path d="M55 90 C58 74, 62 60, 62 48 C62 36, 58 26, 50 18" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
                <circle cx="50" cy="16" r="6" fill="var(--color-gold)" opacity="0.3" />
                <circle cx="42" cy="12" r="4" fill="var(--color-gold)" opacity="0.25" />
                <circle cx="58" cy="12" r="4" fill="var(--color-gold)" opacity="0.25" />
                <circle cx="50" cy="8" r="4" fill="var(--color-gold)" opacity="0.25" />
                <circle cx="44" cy="20" r="3.5" fill="var(--color-gold)" opacity="0.2" />
                <circle cx="56" cy="20" r="3.5" fill="var(--color-gold)" opacity="0.2" />
                <circle cx="70" cy="10" r="1.5" fill="var(--color-gold)" opacity="0.35" />
                <circle cx="78" cy="24" r="1.5" fill="#7a8c6b" opacity="0.3" />
              </svg>
            </div>

            <div className="grid lg:grid-cols-2 min-h-[340px] lg:min-h-[480px]">
              <div className="flex flex-col justify-center px-8 lg:px-12 py-8 lg:py-10 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-stone-400 mb-3"
                >
                  <span className="w-8 h-px bg-gradient-to-r from-stone-400/60 to-transparent inline-block" />
                  Fresh Daily
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-serif font-bold text-[clamp(2.5rem,6vw,5rem)] text-[#1a0f0a] leading-[1.05] tracking-tight"
                >
                  <span>Luxury</span>
                  <span className="block bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-gold)] to-[#d4a94e] bg-clip-text text-transparent">Blooms</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-stone-500 text-sm lg:text-base mt-3 max-w-md leading-relaxed font-light"
                >
                  Handpicked fresh every morning. Artisan bouquets, premium arrangements and thoughtful gifts — curated for life's most beautiful moments.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-7"
                >
                  <Link
                    to="/category"
                    className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 lg:py-4 bg-gradient-to-r from-[var(--color-primary)] to-[#1f4a30] text-white font-semibold text-xs lg:text-sm tracking-wider uppercase rounded-full shadow-[0_4px_24px_rgba(20,48,31,0.3)] hover:shadow-[0_8px_40px_rgba(20,48,31,0.5)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    <ShoppingBag size={15} className="relative z-10 group-hover:scale-110 transition-transform icon-wiggle" />
                    <span className="relative z-10">Shop Collection</span>
                  </Link>
                  <Link
                    to="/occasions"
                    className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 lg:py-4 bg-white/80 backdrop-blur-sm text-[#1a0f0a] font-semibold text-xs lg:text-sm tracking-wider uppercase rounded-full border border-[var(--color-accent)]/20 hover:bg-gradient-to-r hover:from-[var(--color-accent)] hover:to-[var(--color-gold)] hover:text-white hover:border-transparent hover:shadow-[0_8px_40px_rgba(214,83,122,0.4)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    <Flower2 size={15} className="relative z-10 text-[var(--color-gold)] group-hover:text-white group-hover:rotate-12 transition-all icon-wiggle" />
                    <span className="relative z-10">Explore Occasions</span>
                  </Link>
                </motion.div>
              </div>

              <div className="relative order-1 lg:order-2 min-h-[340px] lg:min-h-[480px] overflow-hidden bg-gradient-to-br from-[#f0b088]/20 via-[#F5EFE6] to-[#9fd4c4]/25 group">
                <div className="absolute inset-y-0 left-0 w-20 lg:w-[30%] bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/80 to-transparent z-10 pointer-events-none hidden lg:block" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F5EFE6]/40 to-transparent z-10 pointer-events-none hidden lg:block" />
                <div ref={heroImageRef} className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out">
                  <LazyImage
                    src={hero}
                    alt="Luxurious fresh flower bouquet arrangement - Premium floral delivery"
                    className="w-full h-full object-contain object-center scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE6]/40 via-transparent to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-[var(--color-gold)]/10 via-transparent to-transparent z-20" />
                <div className="absolute -bottom-px inset-x-0 h-20 bg-gradient-to-t from-[#F5EFE6] to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Stats Strip ─── */}
      <section className="relative bg-gradient-to-r from-[var(--color-primary)] via-[#1a3d28] to-[var(--color-primary)] py-8 lg:py-10 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-400/15 to-transparent", size: 200, top: "-20%", left: "10%", anim: "bk-drift1", delay: 0, duration: 26 },
          { color: "from-amber-300/12 to-transparent", size: 180, bottom: "-20%", right: "15%", anim: "bk-drift3", delay: 2, duration: 24 },
        ]} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,161,90,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 relative grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {[
            { icon: Users, value: 10000, label: "Happy Customers" },
            { icon: Package, value: 50000, label: "Orders Delivered" },
            { icon: Award, value: 5, label: "Trusted Experience", suffix: "+ Yrs" },
            { icon: Clock, value: 24, label: "Support Available", suffix: "/7" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={`stat-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center gap-3 lg:gap-4 justify-center lg:justify-start bg-white/[0.03] backdrop-blur-sm rounded-2xl px-4 py-4 lg:px-5 border border-white/5 hover:bg-white/[0.06] hover:border-[var(--color-gold)]/20 transition-all duration-300"
              >
                <div className="w-11 h-11 lg:w-12 lg:h-12 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                  <Icon size={20} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-white font-serif-display font-bold text-lg lg:text-xl leading-none">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix || '+'} />
                  </p>
                  <p className="text-white/50 text-[10px] lg:text-xs mt-1.5 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Shop By Category ─── */}
      <RevealSection className="relative pt-12 lg:pt-16 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#f5ede4] to-[#ede3d6] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDOUExNUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')` }} />
        <BokehLights spots={[
          { color: "from-rose-300/20 to-transparent", size: 300, top: "-8%", right: "-4%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/18 to-transparent", size: 240, bottom: "-10%", left: "5%", anim: "bk-drift1", delay: 3, duration: 28 },
          { color: "from-[var(--color-gold)]/10 to-transparent", size: 280, top: "50%", left: "50%", anim: "bk-float", delay: 1, duration: 30 },
          { color: "from-rose-200/15 to-transparent", size: 200, top: "20%", left: "10%", anim: "bk-drift3", delay: 2, duration: 26 },
        ]} />
        <FloatingDecoration type="rose" side="left" top="12%" size={72} opacity={0.1} delay={0} duration={16} animation="bloom" color="var(--color-accent)" />
        <FloatingDecoration type="leaf" side="right" top="20%" size={60} opacity={0.15} delay={1.5} duration={12} animation="sway2" color="var(--color-primary)" />
        <FloatingDecoration type="lotus" side="right" top="auto" bottom="12%" size={56} opacity={0.08} delay={2} duration={18} animation="drift-bloom" color="var(--color-gold)" />
        <FloatingDecoration type="petal5" side="left" top="auto" bottom="8%" size={48} opacity={0.1} delay={2.5} duration={14} animation="sway3" color="var(--color-gold)" />
        <FloatingDecoration type="petal6" side="left" top="35%" size={40} opacity={0.08} delay={1} duration={15} animation="sway1" color="var(--color-accent)" />
        <FloatingDecoration type="leaf" side="right" top="55%" size={44} opacity={0.12} delay={3} duration={10} animation="sway3" color="var(--color-gold)" />
        <div className="absolute -top-4 -left-4 w-36 h-36 opacity-[0.07] pointer-events-none rotate-[15deg]">
          <Flower2 size={144} strokeWidth={0.8} className="text-[var(--color-accent)]" />
        </div>
        <div className="absolute -bottom-5 -right-5 w-44 h-44 opacity-[0.06] pointer-events-none -rotate-[18deg]">
          <Leaf size={176} strokeWidth={0.7} className="text-[var(--color-gold)]" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 relative">
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]/60" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase font-inter">
                Curated Collections
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif-display font-black text-[#1a0f0a] mt-2 leading-tight">
              Shop By Category
            </h2>
            <p className="text-[#8a7a6e] text-sm mt-3 font-light max-w-lg mx-auto">
              Find the perfect arrangements designed for your special moments
            </p>
          </div>

          <div className="relative px-0.5">
            <button
              onClick={() => scrollSlider(categorySliderRef, "left")}
              className="absolute -left-1.5 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center text-stone-400 hover:bg-white hover:text-[#1a0f0a] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>

            <div
              ref={categorySliderRef}
              className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2 lg:pr-4"
            >
              {categories.map((item, index) => {
                const IconComponent = cardIcons[index];
                return (
                  <motion.div
                    key={`slide-${index}`}
                    data-slide-card
                    onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="group rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-[0_8px_28px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-14px_rgba(201,161,90,0.15)] cursor-pointer shrink-0 min-w-[180px] w-[180px] sm:w-[220px] lg:w-[240px] ring-1 ring-white/80 hover:ring-[var(--color-gold)]/20 transition-all duration-400"
                  >
                    <div className="h-[160px] sm:h-[200px] lg:h-[260px] overflow-hidden relative bg-gradient-to-br from-[#f5ede4] to-[#ece0d0]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold tracking-widest uppercase text-[var(--color-gold)] shadow-sm border border-[var(--color-gold)]/20">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white/85 backdrop-blur-sm rounded-full text-[8px] font-bold tracking-wider text-[var(--color-gold)] shadow-sm border border-[var(--color-gold)]/20">
                          <Gift size={10} className="text-[var(--color-accent)]" />
                          Gift Wrap
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out z-10">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--color-accent)] to-rose-500 text-white text-[10px] font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40">
                          Shop Now <ArrowRight size={11} />
                        </span>
                      </div>
                      <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 z-20">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border-2 border-[var(--color-gold)]/20 flex items-center justify-center group-hover:border-[var(--color-gold)]/60 group-hover:shadow-[0_6px_24px_rgba(201,161,90,0.2)] transition-all duration-300">
                          <IconComponent size={16} className="text-[var(--color-gold)] group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 lg:pt-9 pb-5 lg:pb-6 px-5 lg:px-6 text-center">
                      <h3 className="font-serif-display font-bold text-base lg:text-lg text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1.5 mt-2">
                        <span className="text-[var(--color-gold)]/60 text-[10px] tracking-wider">—</span>
                        <span className="text-[var(--color-gold)] text-[10px]">✦</span>
                        <span className="text-[var(--color-gold)]/60 text-[10px] tracking-wider">—</span>
                        <span className="text-stone-500 text-xs font-medium tracking-wide ml-1">{item.products}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={() => scrollSlider(categorySliderRef, "right")}
              className="absolute -right-1.5 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center text-stone-400 hover:bg-white hover:text-[#1a0f0a] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Best Sellers ─── */}
      <RevealSection className="py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#faf3ec] to-[#FAF8F5]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-end mb-10 lg:mb-12 flex-wrap gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase">
                Customer Favorites
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-black text-[var(--color-primary)] mt-1 leading-tight">
                Bestselling Bouquets
              </h2>
            </div>
            <Link
              to="/category"
              className="group inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-[var(--color-gold)] font-bold text-xs tracking-widest uppercase transition-colors duration-300"
            >
              View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform icon-wiggle" />
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "left")}
              className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center text-stone-400 hover:bg-white hover:text-[#1a0f0a] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>

            <div
              ref={bestSellerSliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            >
              {bestSellers.map((item) => (
                <motion.div
                  key={item.id}
                  data-slide-card
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden ring-1 ring-white/80 hover:ring-[var(--color-gold)]/30 shadow-[0_8px_28px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_-14px_rgba(214,83,122,0.18)] shrink-0 w-[80vw] sm:w-[280px] snap-start flex flex-col transition-all duration-400"
                >
                  <div className="overflow-hidden h-72 relative bg-gradient-to-br from-[#F4C9D1]/20 to-[#f5ede4]/30">
                    {item.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-[var(--color-accent)] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-[var(--color-accent)]/25">
                        {item.badge}
                      </span>
                    )}
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif-display font-bold text-base text-[var(--color-primary)] leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-2">
                      <Star size={11} className="fill-amber-400 text-amber-400" />
                      <span className="text-[11px] font-bold text-slate-700 font-inter">
                        {item.rating}
                      </span>
                      <span className="text-[11px] text-gray-400">(120+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-[var(--color-accent)] font-black text-base">
                        {item.price === "acceptable" ? <a href="tel:9540849659" className="inline-flex items-center gap-1.5 hover:text-[var(--color-gold)] transition-colors"><Phone size={14} className="icon-wiggle" /> Call for Price</a> : item.price}
                      </p>
                    </div>
                    <Link
                      to={`/category?cat=${encodeURIComponent(item.category)}`}
                      className="group/btn mt-auto w-full bg-gradient-to-r from-[var(--color-primary)] to-[#1f4a30] text-white py-3 rounded-2xl font-bold text-xs tracking-wider uppercase hover:shadow-[0_8px_30px_rgba(20,48,31,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10">Quick View</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "right")}
              className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center text-stone-400 hover:bg-white hover:text-[#1a0f0a] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Deal of the Day ─── */}
      <RevealSection className="py-16 lg:py-20 bg-gradient-to-br from-[#051410] via-[#0b241d] to-[#04120e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_50%,rgba(201,161,90,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <BokehLights spots={[
          { color: "from-rose-400/20 to-transparent", size: 300, top: "-8%", right: "-5%", anim: "bk-drift1", delay: 0, duration: 28 },
          { color: "from-amber-300/15 to-transparent", size: 250, bottom: "-10%", left: "-4%", anim: "bk-drift2", delay: 2, duration: 32 },
          { color: "from-pink-400/15 to-transparent", size: 200, top: "50%", left: "35%", anim: "bk-float", delay: 4, duration: 24 },
          { color: "from-violet-400/10 to-transparent", size: 260, top: "15%", right: "25%", anim: "bk-drift3", delay: 1, duration: 30 },
        ]} />

        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="rounded-[48px_16px_48px_16px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <LazyImage
                  src={image28}
                  alt="Sunset Rose Grand Bouquet - Deal of the Day"
                  className="w-full h-[400px] lg:h-[440px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <motion.div
                initial={{ y: -10 }}
                whileHover={{ y: 0, scale: 1.05 }}
                className="absolute -top-3 -left-3 bg-white/10 backdrop-blur-md border border-white/20 text-[var(--color-gold)] font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full shadow-lg"
              >
                <span className="flex items-center gap-1.5">
                  <Percent size={11} /> Today Only — 40% OFF
                </span>
              </motion.div>
            </motion.div>

            <div className="text-white flex flex-col gap-4">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 text-[var(--color-gold)] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                  <Clock size={12} className="animate-pulse" /> Deal of the Day
                </span>
                <h2 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none mt-4">
                  Sunset Rose Grand Bouquet
                </h2>
                <p className="text-stone-400 text-sm mt-3 leading-relaxed font-light">
                  A breathtaking, hand-tied arrangement of 50 premium long-stemmed roses in warm
                  sunset hues, finished with fresh eucalyptus and a signature silk ribbon.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gold)] tracking-wider text-lg font-medium hover:text-[#dfc4a3] transition-colors"
                >
                  Call us for best price →
                </a>
              </div>

              <div className="flex gap-3">
                {[
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((t) => (
                  <div
                    key={`countdown-${t.label}`}
                    className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-3 w-[72px] h-20 flex flex-col items-center justify-center shadow-inner hover:border-[var(--color-gold)]/30 transition-all duration-300 group"
                  >
                    <p className="text-white text-2xl font-serif font-bold tracking-tight tabular-nums leading-none">
                      {pad(t.value)}
                    </p>
                    <p className="text-stone-400 text-[9px] tracking-widest uppercase mt-1">
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--color-gold)] to-[#b08b49] hover:from-[#b08b49] hover:to-[var(--color-gold)] text-black font-semibold tracking-widest text-xs uppercase px-8 py-3.5 rounded-full shadow-[0_10px_30px_rgba(201,161,90,0.2)] hover:shadow-[0_20px_50px_rgba(201,161,90,0.45)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Grab This Deal</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform icon-wiggle" />
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Plan The Perfect Surprise ─── */}
      <RevealSection className="relative bg-gradient-to-b from-[#FAF8F5] via-[#fdfbf7] to-[#FAF8F5] dark:from-[#05120e] dark:via-[#091f1a] dark:to-[#05120e] py-16 lg:py-20 transition-colors duration-500 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]/60" />
              <span className="text-[#C9A15A] tracking-[0.25em] font-bold text-[11px] uppercase">
                Thoughtful Gifting
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]/60" />
            </div>
            <h2 className="text-[#1a0f0a] dark:text-white font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Plan The Perfect Surprise
            </h2>
            <p className="text-center text-sm md:text-base text-stone-400 mt-2 max-w-lg mx-auto font-light">
              Thoughtfully crafted floral gifts for every kind of love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "For Her",
                label: "Shop For Her",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
                route: "/category?cat=Bouquets",
                accent: "var(--color-accent)",
              },
              {
                title: "For Him",
                label: "Shop For Him",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
                route: "/category?cat=Flowers",
                accent: "var(--color-primary)",
              },
              {
                title: "For Them",
                label: "Shop For Them",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
                route: "/category?cat=Flowers",
                accent: "var(--color-gold)",
              },
            ].map((item, i) => (
              <motion.div
                key={`surprise-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group flex flex-col items-center justify-center p-4 transition-all duration-500 cursor-pointer"
                onClick={() => navigate(item.route)}
              >
                <div className="relative w-full max-w-[280px] mx-auto aspect-[4/3] border-2 border-[var(--color-gold)]/20 dark:border-white/10 group-hover:border-[var(--color-gold)]/60 shadow-[0_15px_40px_rgba(0,0,0,0.02)] group-hover:shadow-[0_30px_60px_rgba(201,161,90,0.15)] transition-all duration-500 overflow-hidden"
                  style={{
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/0 group-hover:from-[var(--color-gold)]/10 transition-all duration-500" />
                </div>

                <h3 className="text-[#1a0f0a] dark:text-stone-100 font-serif text-2xl md:text-3xl font-medium mt-6 mb-3 transition-colors duration-300">
                  {item.title}
                </h3>

                <motion.span
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 group-hover:text-[var(--color-gold)] font-medium text-xs tracking-widest uppercase transition-all duration-300 border-b border-transparent group-hover:border-[var(--color-gold)] pb-1"
                >
                  {item.label}
                  <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── How It Works ─── */}
      <RevealSection className="relative py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#f3f0ea] to-[#FAF8F5] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase block mb-3">
              Simple Process
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-black text-[#1a0f0a] leading-tight">
              How It Works
            </h2>
            <p className="text-stone-400 text-sm mt-2 font-light max-w-md mx-auto">
              From our garden directly to your doorstep in three easy steps
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={`step-${index}`} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-[2px] bg-gradient-to-r from-stone-300/60 to-transparent z-10" />
                  )}
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-8 lg:p-10 relative shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(201,161,90,0.1)] hover:border-[var(--color-gold)]/25 group cursor-pointer text-center"
                  >
                    <span className="absolute top-4 right-6 text-6xl lg:text-7xl font-serif font-black text-stone-200/70 group-hover:text-[var(--color-gold)]/8 transition-colors duration-500 select-none">
                      {pad(index + 1)}
                    </span>
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-gold)]/10 to-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-gold)] mb-6 group-hover:bg-gradient-to-br group-hover:from-[var(--color-gold)] group-hover:to-[#b08b49] group-hover:text-white transition-all duration-500 shadow-inner">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-serif-display text-xl lg:text-2xl font-bold text-[#1a0f0a] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Why Choose Us ─── */}
      <RevealSection className="relative py-20 lg:py-24 bg-gradient-to-b from-[#faf5ef] via-[#f7f0e8] to-[#faf5ef] overflow-hidden">
        <FloatingDecoration type="petal5" side="left" top="15%" size={56} opacity={0.12} delay={1} duration={14} color="var(--color-accent)" />
        <FloatingDecoration type="leaf" side="right" top="25%" size={60} opacity={0.18} delay={0} duration={11} animation="sway2" color="var(--color-primary)" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="12%" size={42} opacity={0.1} delay={2.5} duration={13} animation="sway3" color="var(--color-gold)" />

        {/* Ambient glow blobs */}
        <div className="absolute top-[-8%] left-[-3%] w-[600px] h-[600px] bg-[var(--color-gold)]/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-8%] right-[-3%] w-[500px] h-[500px] bg-[var(--color-accent)]/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6">
          {/* ─── Heading Area ─── */}
          <div className="text-center mb-12 lg:mb-14 relative">
            {/* Decorative glow behind heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-[var(--color-gold)]/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 text-[var(--color-gold)] text-[10px] font-bold tracking-[0.2em] uppercase mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
              Trusted by Thousands
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-black text-[var(--color-primary)] leading-tight"
            >
              Why Choose Us
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mt-5 mb-4"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_8px_rgba(201,161,90,0.3)]" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-stone-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
            >
              Delivering smiles and premium quality with every single delivery
            </motion.p>
          </div>

          {/* ─── Trust Metrics Strip ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 lg:mb-12"
          >
            {[
              { icon: Users, value: 10000, suffix: "+", label: "Happy Customers" },
              { icon: Clock, value: 1, prefix: "", suffix: "", label: "Same-Day Delivery", custom: "Same Day" },
              { icon: Flower2, value: 100, suffix: "%", label: "Fresh Flowers" },
              { icon: ShieldCheck, value: 100, suffix: "%", label: "Secure Payments" },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={`trust-stat-${i}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                    <StatIcon size={16} className="text-[var(--color-gold)]" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    {stat.custom ? (
                      <span className="text-sm font-bold text-[var(--color-primary)]">{stat.custom}</span>
                    ) : (
                      <>
                        <AnimatedCounter value={stat.value} className="text-sm font-bold text-[var(--color-primary)]" />
                        <span className="text-sm font-bold text-[var(--color-primary)]">{stat.suffix}</span>
                      </>
                    )}
                    <span className="text-[11px] text-stone-400 ml-1 font-light hidden sm:inline">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* ─── Cards Grid ─── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`why-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-9 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(214,83,122,0.12)] hover:border-[var(--color-gold)]/20 transition-all duration-500 text-center"
                >
                  {/* Icon container */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-gold)]/10 to-[var(--color-accent)]/10 border border-[var(--color-gold)]/10 flex items-center justify-center shadow-sm group-hover:shadow-[0_0_30px_rgba(201,161,90,0.2)] group-hover:scale-110 transition-all duration-500">
                    <Icon size={28} className="text-[var(--color-primary)] group-hover:text-[var(--color-gold)] transition-colors duration-500 icon-wiggle" />
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-[var(--color-primary)] mt-6">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-sm mt-2 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* ─── Trust Bar ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {["Fresh Flowers", "Fast Delivery", "Secure Payment", "Premium Packaging", "24×7 Support"].map((feature) => (
              <div key={`trust-feature-${feature}`} className="flex items-center gap-2 text-sm text-stone-500 font-light">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                {feature}
              </div>
            ))}
          </motion.div>

          {/* ─── CTA Strip ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 lg:mt-12"
          >
            <div className="relative max-w-2xl mx-auto text-center px-8 py-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/[0.03] via-white/50 to-[var(--color-gold)]/[0.04] border border-[var(--color-gold)]/10 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-gold)]/[0.02] to-transparent pointer-events-none" />
              <p className="text-[var(--color-primary)] font-serif-display font-bold text-lg sm:text-xl relative">
                Delivering Happiness Across Delhi NCR Since 2018
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 relative">
                <div className="w-8 h-px bg-[var(--color-gold)]/30" />
                <Link
                  to="/occasions"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-gold)] hover:text-[var(--color-accent)] transition-colors duration-300 group"
                >
                  Explore Our Collection
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <div className="w-8 h-px bg-[var(--color-gold)]/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </RevealSection>

      {/* ─── Perfect For Every Occasion ─── */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#fefcf9] to-[#fffcf7]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase block mb-2">
              Life Milestones
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-display font-black text-[#1a0f0a] leading-tight">
              Perfect For Every Occasion
            </h2>
            <p className="text-stone-400 text-xs md:text-sm mt-2 max-w-md mx-auto font-light">
              Handcrafted luxury flower setups designed for all of life's elite and beautiful moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Grand Weddings",
                desc: "Opulent fresh floral canopies, stage backdrops & mandap arrangements.",
                img: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Devotional Elegance",
                desc: "Traditional venues and mandirs adorned beautifully with fresh seasonal Indian blooms.",
                img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Luxury Banquets",
                desc: "Bespoke artificial & fresh floral entrance structures and stage borders.",
                img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Corporate & Galas",
                desc: "Sophisticated flower centerpieces and structural accents for high-profile business events.",
                img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80"
              }
            ].map((occ, idx) => (
              <div
                key={`occ-${idx}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(20,48,31,0.12)] transition-all duration-500 cursor-pointer ring-1 ring-white/60 hover:ring-[var(--color-gold)]/30"
                onClick={() => navigate("/occasions")}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={occ.img}
                    alt={occ.title}
                    loading="lazy"
                    className="object-cover w-full h-full block group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-white text-xs">✦</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 z-20 flex flex-col justify-end">
                  <h3 className="font-serif-display font-bold text-xl lg:text-2xl text-white tracking-wide">
                    {occ.title}
                  </h3>
                  <p className="text-white/70 text-xs mt-1.5 line-clamp-2 leading-relaxed font-light">
                    {occ.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Explore →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <RevealSection className="relative py-16 lg:py-20 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0] overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/12 to-transparent", size: 240, top: "-6%", right: "-3%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/10 to-transparent", size: 200, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-violet-200/8 to-transparent", size: 180, top: "40%", left: "45%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="8%" size={56} opacity={0.1} delay={0.5} duration={13} color="var(--color-gold)" />
        <FloatingDecoration type="petal6" side="right" top="12%" size={60} opacity={0.12} delay={0} duration={14} animation="sway2" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="8%" size={48} opacity={0.16} delay={2} duration={11} animation="sway3" color="var(--color-primary)" />
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase">
              Customer Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-black text-[var(--color-primary)] mt-2 leading-tight">
              What Our Customers Say
            </h2>
                <div className="flex items-center justify-center gap-3 mt-4">
              <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <span className="text-2xl font-black text-[var(--color-primary)] font-serif-display">4.9</span>
                <div className="w-px h-8 bg-stone-200/60" />
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`testi-star-${i}`} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-[10px] text-stone-400 mt-0.5 font-semibold">Based on 2,400+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="marquee-wrapper relative before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#faf8f5] before:via-[#faf8f5]/80 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#faf8f5] after:via-[#faf8f5]/80 after:to-transparent after:z-10">
            <div className="flex flex-col gap-4 overflow-hidden">
              <div className="flex marquee-ltr gap-4 w-max hover:[animation-play-state:paused]">
                {[...Array(2)].flatMap((_, batchIdx) =>
                  reviewData.map((r, i) => (
                    <div key={`review-ltr-${batchIdx}-${i}`} className="p-5 max-w-[280px] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:border-[var(--color-gold)]/40 hover:shadow-[0_16px_48px_rgba(201,161,90,0.08)] transition-all duration-300 rounded-2xl shrink-0">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, s) => (
                          <Star key={`star-ltr-${batchIdx}-${i}-${s}`} size={10} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
                        ))}
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-light mb-3 line-clamp-2">
                        "{r.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-full ${r.color} flex items-center justify-center text-white text-[9px] font-bold shadow-sm`}>
                            {r.initials}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-[var(--color-primary)] leading-tight">{r.name}</p>
                            <p className="text-[8px] text-stone-400">{r.location}</p>
                          </div>
                        </div>
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="flex marquee-rtl gap-4 w-max hover:[animation-play-state:paused]">
                {[...Array(2)].flatMap((_, batchIdx) =>
                  reviewData.map((r, i) => (
                    <div key={`review-rtl-${batchIdx}-${i}`} className="p-5 max-w-[280px] bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:border-[var(--color-gold)]/40 hover:shadow-[0_16px_48px_rgba(201,161,90,0.08)] transition-all duration-300 rounded-2xl shrink-0">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, s) => (
                          <Star key={`star-rtl-${batchIdx}-${i}-${s}`} size={10} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
                        ))}
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-light mb-3 line-clamp-2">
                        "{r.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-full ${r.color} flex items-center justify-center text-white text-[9px] font-bold shadow-sm`}>
                            {r.initials}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-[var(--color-primary)] leading-tight">{r.name}</p>
                            <p className="text-[8px] text-stone-400">{r.location}</p>
                          </div>
                        </div>
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Instagram Gallery ─── */}
      <RevealSection className="relative py-16 lg:py-20 bg-gradient-to-br from-[#0c0907] via-[#14100d] to-[#0c0907] overflow-hidden border-b border-[var(--color-gold)]/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase block mb-2">
              Follow Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-display font-black text-white leading-tight">
              Follow Our Floral Journey
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
              <FaInstagram size={14} />
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                @ShivamFlorist
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, index) => {
              const isOdd = index % 2 === 0;
              return (
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`ig-${index}`}
                  className={`group relative aspect-square overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(201,161,90,0.1)] hover:-translate-y-1 transition-all duration-500 ${isOdd ? 'rounded-[32px_8px_32px_8px]' : 'rounded-[8px_32px_8px_32px]'}`}
                >
                  <LazyImage
                    src={img}
                    alt="Floral journey picture on Instagram"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-[var(--color-gold)]/40 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <FaInstagram size={18} className="text-white" />
                      <span className="text-white text-[10px] font-bold tracking-wider uppercase">View Post →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── FAQ ─── */}
      <RevealSection className="relative py-16 lg:py-20 bg-gradient-to-br from-[#06120e] via-[#091a15] to-[#040c0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,90,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase block mb-3">
              Answers
            </span>
            <h2 className="text-4xl md:text-5xl font-serif-display font-light text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-500 text-sm mt-3 font-light max-w-lg mx-auto">
              Everything you need to know about our flowers and shipping policies
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4 relative z-10">
            {faqs.map((faq, index) => {
              const isSelected = openFaq === index;
              return (
                <div
                  key={`faq-${index}`}
                  className={`bg-white/[0.03] backdrop-blur-md border rounded-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-[var(--color-gold)]/30 ${isSelected ? 'shadow-[0_0_40px_rgba(201,161,90,0.08)] border-[var(--color-gold)]/40' : 'border-white/10'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isSelected ? null : index)}
                    className="group w-full flex items-center justify-between gap-4 px-6 lg:px-8 py-5 lg:py-6 text-left focus:outline-none transition-all duration-300"
                  >
                    <span className="font-serif-display text-base lg:text-lg leading-snug text-stone-200 group-hover:text-white transition-colors duration-300 font-light">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isSelected ? 'border-[var(--color-gold)] text-[var(--color-gold)] bg-[var(--color-gold)]/10' : 'border-white/20 text-stone-300 group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)]'}`}>
                      <span className={`block transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}>
                        {isSelected ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
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
                        <div className="px-6 lg:px-8 pb-5 lg:pb-6 text-stone-400 text-sm leading-relaxed font-light border-t border-white/5 pt-4">
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

      {/* ─── Newsletter ─── */}
      <RevealSection className="relative py-16 lg:py-20 bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="relative bg-gradient-to-br from-[#051410] via-[#09221b] to-[#04120e] rounded-[40px] p-10 md:p-16 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,161,90,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px',
              }}
            />
            <BokehLights spots={[
              { color: "from-rose-400/10 to-transparent", size: 280, top: "-12%", left: "-8%", anim: "bk-drift1", delay: 0, duration: 30 },
              { color: "from-amber-300/12 to-transparent", size: 220, bottom: "-15%", right: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
              { color: "from-[#C9A15A]/8 to-transparent", size: 180, top: "50%", left: "35%", anim: "bk-float", delay: 1, duration: 26 },
            ]} />
            <FloatingDecoration type="petal5" side="left" top="10%" size={56} opacity={0.1} delay={0} duration={14} />
            <FloatingDecoration type="petal6" side="right" top="8%" size={44} opacity={0.08} delay={1.5} duration={12} animation="sway2" color="var(--color-gold)" />

            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              className="w-14 h-14 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 flex items-center justify-center mx-auto mb-4 shadow-inner"
            >
              <Mail size={24} className="text-[#C9A15A]" />
            </motion.div>

            <h2 className="text-white font-serif font-light text-3xl md:text-5xl tracking-tight mb-3">
              Join Our Flower Family
            </h2>
            <p className="text-stone-300 font-light max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Subscribe for exclusive discounts, floral tips, and advance access to our limited
              holiday collections.
            </p>

            <div className="mt-6 max-w-xl mx-auto">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-700/40 rounded-2xl px-8 py-5 text-emerald-300 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.1)]"
                >
                  <CheckCircle2 size={16} /> Welcome to the family! Check your inbox soon.
                </motion.div>
              ) : (
                <motion.div
                  className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full p-2 focus-within:border-[#C9A15A]/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="Enter your email address"
                    className="bg-transparent text-white placeholder-stone-400 px-6 py-3 w-full rounded-full focus:outline-none text-sm"
                  />
                  <motion.button
                    onClick={handleSubscribe}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative bg-gradient-to-r from-[#C9A15A] to-[#b08b49] hover:from-[#b08b49] hover:to-[#C9A15A] text-black font-semibold tracking-widest text-xs uppercase px-8 py-3 rounded-full shadow-lg hover:shadow-[0_8px_30px_rgba(201,161,90,0.3)] transition-all duration-300 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Subscribe</span>
                  </motion.button>
                </motion.div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 text-stone-300 hover:border-[#C9A15A] hover:text-[#C9A15A] hover:bg-[#C9A15A]/10 flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={14} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 text-stone-300 hover:border-[#C9A15A] hover:text-[#C9A15A] hover:bg-[#C9A15A]/10 flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF size={13} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </RevealSection>

      {/* ─── WhatsApp Floating Button ─── */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#25d366] to-[#20ba59] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_16px_50px_rgba(37,211,102,0.55)] hover:scale-[1.08] transition-all duration-300 border border-white/10"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </motion.a>
    </div>
  );
};

export default Home;
