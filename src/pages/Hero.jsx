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

const CountUp = ({ target, suffix = '+', threshold = 0.3 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 40;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          setCount(Math.floor((step / steps) * target));
          if (step >= steps) clearInterval(timer);
        }, 40);
      }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, threshold]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};


// ─── Premium Variants ───
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
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
    <div className="w-full overflow-hidden bg-[#fafaf9]">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ─── HERO SECTION: PROMOTIONAL CARD STYLE (DRAMATIC ENHANCED) ─── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fff8f2] via-[#fef6ee] to-[#fafaf9] pt-20 lg:pt-14">
        <BokehLights spots={[
          { color: "from-rose-300/25 to-transparent", size: 280, top: "2%", right: "6%", anim: "bk-drift2", delay: 0, duration: 26 },
          { color: "from-amber-200/25 to-transparent", size: 240, top: "35%", left: "2%", anim: "bk-drift1", delay: 2, duration: 30 },
          { color: "from-emerald-200/20 to-transparent", size: 220, bottom: "8%", right: "20%", anim: "bk-float", delay: 4, duration: 28 },
          { color: "from-purple-200/15 to-transparent", size: 180, top: "12%", left: "35%", anim: "bk-drift3", delay: 1, duration: 24 },
        ]} />
        {/* Premium floating accent */}
        <div className="absolute top-24 right-[8%] w-32 h-32 rounded-full bg-gradient-to-br from-[#C9A15A]/8 to-transparent blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'6s'}} />
        <div className="absolute bottom-16 left-[5%] w-40 h-40 rounded-full bg-gradient-to-tr from-[#D6537A]/6 to-transparent blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'8s'}} />

        {/* ─── FnP-Style Category Shortcuts Row ─── */}
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
                  key={i}
                  to={cat.link}
                  className="flex flex-col items-center gap-2.5 shrink-0 group"
                >
                  <div className="relative w-[84px] h-[84px] md:w-24 md:h-24 rounded-full overflow-hidden border-[2.5px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300">
                    <LazyImage
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {cat.discount && (
                      <div className="absolute -top-1 -right-1 bg-[#D6537A] text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                        {cat.discount}
                      </div>
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-600 group-hover:text-[#14301F] transition-colors whitespace-nowrap">
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Hero Promotional Card ─── */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-4 lg:pb-6">
          <div className="relative bg-[#F5EFE6] rounded-[28px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(214,83,122,0.25),0_10px_30px_-10px_rgba(201,161,90,0.2)] ring-1 ring-[#C9A15A]/20">

            {/* Top-right decorative accent button */}
            <div className="absolute top-4 right-4 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#14301F] flex items-center justify-center shadow-md cursor-default">
              <ArrowRight size={20} className="text-[#C9A15A]" strokeWidth={2.5} />
            </div>

            {/* Hand-drawn botanical illustration — Top-left corner */}
            <div className="absolute top-0 left-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
                <path d="M0 70 C20 50, 40 30, 60 20 C80 10, 100 8, 130 12" stroke="#7a8c6b" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M30 40 C34 34, 40 32, 44 36 C40 42, 34 44, 30 40Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M55 24 C59 18, 65 16, 69 20 C65 26, 59 28, 55 24Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M85 14 C89 8, 95 6, 99 10 C95 16, 89 18, 85 14Z" fill="#7a8c6b" opacity="0.45" />
                <path d="M5 85 C8 75, 14 72, 18 76 C14 82, 8 88, 5 85Z" fill="#C9A15A" opacity="0.5" />
                {/* Scattered dots */}
                <circle cx="110" cy="6" r="2" fill="#C9A15A" opacity="0.4" />
                <circle cx="125" cy="18" r="1.5" fill="#7a8c6b" opacity="0.4" />
                <circle cx="15" cy="95" r="1.5" fill="#C9A15A" opacity="0.35" />
              </svg>
            </div>

            {/* Hand-drawn botanical illustration — Bottom-left corner */}
            <div className="absolute bottom-0 left-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                <path d="M20 80 C30 60, 40 40, 40 28 C40 18, 35 10, 30 4" stroke="#7a8c6b" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M34 30 C38 24, 44 22, 48 26 C44 32, 38 34, 34 30Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M32 16 C36 10, 42 8, 46 12 C42 18, 36 20, 32 16Z" fill="#7a8c6b" opacity="0.5" />
                <circle cx="85" cy="70" r="2" fill="#C9A15A" opacity="0.35" />
                <circle cx="90" cy="64" r="1.2" fill="#7a8c6b" opacity="0.35" />
              </svg>
            </div>

            {/* Hand-drawn botanical flower bloom — Top-right area */}
            <div className="absolute top-0 right-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <path d="M55 90 C58 74, 62 60, 62 48 C62 36, 58 26, 50 18" stroke="#C9A15A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
                <circle cx="50" cy="16" r="6" fill="#C9A15A" opacity="0.3" />
                <circle cx="42" cy="12" r="4" fill="#C9A15A" opacity="0.25" />
                <circle cx="58" cy="12" r="4" fill="#C9A15A" opacity="0.25" />
                <circle cx="50" cy="8" r="4" fill="#C9A15A" opacity="0.25" />
                <circle cx="44" cy="20" r="3.5" fill="#C9A15A" opacity="0.2" />
                <circle cx="56" cy="20" r="3.5" fill="#C9A15A" opacity="0.2" />
                <circle cx="70" cy="10" r="1.5" fill="#C9A15A" opacity="0.35" />
                <circle cx="78" cy="24" r="1.5" fill="#7a8c6b" opacity="0.3" />
              </svg>
            </div>

            {/* Grid: content left, image right */}
            <div className="grid lg:grid-cols-2 min-h-[380px] lg:min-h-[520px]">
              {/* ─── LEFT: TEXT CONTENT ─── */}
              <div className="flex flex-col justify-center px-7 lg:px-12 py-10 lg:py-12 order-2 lg:order-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#7a8c6b] font-inter mb-3">
                  <span className="w-6 h-[1.5px] bg-[#7a8c6b]/40 inline-block" />
                  Fresh Daily
                </span>

                <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] leading-[1.08] tracking-tight">
                  <span className="typewriter" style={{ overflow: 'visible', whiteSpace: 'nowrap', borderRight: 'none' }}>
                    Luxury
                  </span>
                  <span className="block bg-gradient-to-r from-[#D6537A] via-[#C9A15A] to-[#e8a03d] bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '3s' }}>Blooms</span>
                </h1>

                <p className="text-gray-500 text-sm lg:text-base mt-3 max-w-md leading-relaxed font-inter">
                  Handpicked fresh every morning. Artisan bouquets, premium arrangements and thoughtful gifts — curated for life's most beautiful moments.
                </p>

                {/* CTA Buttons — gradient + outline pill shape with dramatic glow */}
                <div className="flex flex-col sm:flex-row gap-3 mt-7 lg:mt-8">
                  <Link
                    to="/category"
                    className="btn-glow group relative inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-gradient-to-r from-[#14301F] to-[#1f4a30] text-white font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full shadow-[0_4px_20px_rgba(20,48,31,0.35)] hover:shadow-[0_8px_35px_rgba(20,48,31,0.55)] hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <ShoppingBag size={16} className="group-hover:scale-110 transition-transform icon-wiggle" />
                    <span>Shop Collection</span>
                  </Link>
                  <Link
                    to="/occasions"
                    className="btn-glow group relative inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-white text-[#1a1a1a] font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full border-2 border-[#D6537A]/30 hover:bg-gradient-to-r hover:from-[#D6537A] hover:to-[#C9A15A] hover:text-white hover:border-transparent hover:shadow-[0_8px_35px_rgba(214,83,122,0.45)] hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Flower2 size={16} className="text-[#C9A15A] group-hover:text-white group-hover:rotate-12 transition-all icon-wiggle" />
                    <span>Explore Occasions</span>
                  </Link>
                </div>
              </div>

              {/* ─── RIGHT: HERO IMAGE (full photo, no crop) ─── */}
              <div className="relative order-1 lg:order-2 min-h-[380px] lg:min-h-[520px] overflow-hidden bg-gradient-to-br from-[#f0b088]/25 via-[#F5EFE6] to-[#9fd4c4]/30 group">
                {/* Soft gradient overlay on left edge for smooth blend */}
                <div className="absolute inset-y-0 left-0 w-16 lg:w-24 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10 pointer-events-none hidden lg:block" />
                <div ref={heroImageRef} className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out">
                  <LazyImage
                    src={hero}
                    alt="Luxurious fresh flower bouquet arrangement - Premium floral delivery"
                    className="w-full h-full object-contain object-center"
                    priority
                  />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-[#C9A15A]/10 via-transparent to-transparent z-20" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F5EFE6] to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Stats Strip ─── */}
      <section className="relative bg-gradient-to-r from-[#14301F] via-[#1f4a30] to-[#14301F] py-8 lg:py-10 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-400/15 to-transparent", size: 200, top: "-20%", left: "10%", anim: "bk-drift1", delay: 0, duration: 26 },
          { color: "from-amber-300/12 to-transparent", size: 180, bottom: "-20%", right: "15%", anim: "bk-drift3", delay: 2, duration: 24 },
        ]} />
        <div className="max-w-[1440px] mx-auto px-6 relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Users, value: 10000, label: "Happy Customers" },
            { icon: Package, value: 50000, label: "Orders Delivered" },
            { icon: Award, value: 5, label: "Trusted Experience", suffix: "+ Yrs" },
            { icon: Clock, value: 24, label: "Support Available", suffix: "/7" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="group flex items-center gap-3 lg:gap-4 justify-center lg:justify-start">
                <div className="w-11 h-11 lg:w-12 lg:h-12 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#C9A15A]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-[#C9A15A]" />
                </div>
                <div>
                  <p className="text-white font-serif-display font-bold text-lg lg:text-xl leading-none">
                    <CountUp target={stat.value} suffix={stat.suffix || '+'} />
                  </p>
                  <p className="text-white/50 text-[10px] lg:text-xs mt-1.5 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Shop By Category ─── */}
      <RevealSection className="relative pt-16 lg:pt-20 pb-28 bg-gradient-to-b from-[#faf6f0] via-[#f5ede4] to-[#e8ddd0] border-b border-[#C9A15A]/10 overflow-hidden">
        {/* Subtle cream watercolor paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDOUExNUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
        <BokehLights spots={[
          { color: "from-rose-300/20 to-transparent", size: 300, top: "-8%", right: "-4%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/18 to-transparent", size: 240, bottom: "-10%", left: "5%", anim: "bk-drift1", delay: 3, duration: 28 },
          { color: "from-[#C9A15A]/10 to-transparent", size: 280, top: "50%", left: "50%", anim: "bk-float", delay: 1, duration: 30 },
          { color: "from-rose-200/15 to-transparent", size: 200, top: "20%", left: "10%", anim: "bk-drift3", delay: 2, duration: 26 },
        ]} />
        <FloatingDecoration type="rose" side="left" top="12%" size={72} opacity={0.1} delay={0} duration={16} animation="bloom" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="20%" size={60} opacity={0.15} delay={1.5} duration={12} animation="sway2" color="#14301F" />
        <FloatingDecoration type="lotus" side="right" top="auto" bottom="12%" size={56} opacity={0.08} delay={2} duration={18} animation="drift-bloom" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="left" top="auto" bottom="8%" size={48} opacity={0.1} delay={2.5} duration={14} animation="sway3" color="#C9A15A" />
        <FloatingDecoration type="petal6" side="left" top="35%" size={40} opacity={0.08} delay={1} duration={15} animation="sway1" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="55%" size={44} opacity={0.12} delay={3} duration={10} animation="sway3" color="#C9A15A" />
        {/* Extreme corner floral illustrations */}
        <div className="absolute -top-4 -left-4 w-36 h-36 opacity-[0.07] pointer-events-none rotate-[15deg]">
          <Flower2 size={144} strokeWidth={0.8} className="text-[#D6537A]" />
        </div>
        <div className="absolute -bottom-5 -right-5 w-44 h-44 opacity-[0.06] pointer-events-none -rotate-[18deg]">
          <Leaf size={176} strokeWidth={0.7} className="text-[#C9A15A]" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 relative">
          <div className="text-center mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A15A]/60" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A] uppercase font-inter">
                Curated Collections
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#C9A15A]/60" />
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
              className="absolute -left-1.5 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 hover:bg-white/90 hover:text-[#1a0f0a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={15} />
            </button>

            <div
              ref={categorySliderRef}
              className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2 lg:pr-4"
            >
              {categories.map((item, index) => {
                const IconComponent = cardIcons[index];
                return (
                  <motion.div
                    key={index}
                    data-slide-card
                    onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="group rounded-[20px] overflow-hidden bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] cursor-pointer shrink-0 min-w-[180px] w-[180px] sm:w-[220px] lg:w-[240px]"
                  >
                    <div className="h-[160px] sm:h-[200px] lg:h-[250px] overflow-hidden relative bg-[#f5ede4]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold tracking-widest uppercase text-[#C9A15A] shadow-sm border border-[#C9A15A]/20">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white/85 backdrop-blur-sm rounded-full text-[8px] font-bold tracking-wider text-[#C9A15A] shadow-sm border border-[#C9A15A]/20">
                          <Gift size={10} className="text-[#D6537A]" />
                          Gift Wrap
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D6537A] to-rose-500 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40">
                          Shop Now <ArrowRight size={11} />
                        </span>
                      </div>
                      {/* Circular emblem at image-text intersection */}
                      <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 z-20">
                        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] border-[2.5px] border-[#C9A15A]/20 flex items-center justify-center group-hover:border-[#C9A15A]/50 group-hover:shadow-[0_4px_18px_rgba(201,161,90,0.15)] transition-all duration-300 ease-in-out">
                          <IconComponent size={15} className="text-[#C9A15A] group-hover:text-[#D6537A] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-7 lg:pt-8 pb-5 lg:pb-6 px-5 lg:px-6 text-center">
                      <h3 className="font-serif-display font-bold text-base lg:text-lg text-[#14301F] group-hover:text-[#D6537A] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1.5 mt-2">
                        <span className="text-[#C9A15A]/60 text-[10px] tracking-wider">—</span>
                        <span className="text-[#C9A15A] text-[10px]">❀</span>
                        <span className="text-[#C9A15A]/60 text-[10px] tracking-wider">—</span>
                        <span className="text-[#8a7a6e] text-xs font-medium tracking-wide ml-1">{item.products}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={() => scrollSlider(categorySliderRef, "right")}
              className="absolute -right-1.5 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 hover:bg-white/90 hover:text-[#1a0f0a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Best Sellers ─── */}
      <RevealSection className="py-24 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
                Customer Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
                Bestselling Bouquets
              </h2>
            </div>
            <Link
              to="/category"
              className="text-[#D6537A] hover:text-[#D6537A] font-bold text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors duration-300 hover:scale-[1.04]"
            >
              View All <ArrowRight size={14} className="icon-wiggle" />
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-gray-50 hover:shadow-soft-lg hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="icon-wiggle" />
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
                  className="bg-white rounded-3xl overflow-hidden ring-1 ring-gray-100 hover:ring-[#C9A15A]/40 shadow-soft hover:shadow-[0_20px_40px_-10px_rgba(214,83,122,0.25)] shrink-0 w-[80vw] sm:w-[280px] snap-start flex flex-col"
                >
                  <div className="overflow-hidden h-72 relative bg-[#F4C9D1]/20">
                    {item.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-[#D6537A] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}

                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif-display font-bold text-base text-[#14301F] leading-snug">
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
                      <p className="text-[#D6537A] font-black text-base">
                        {item.price === "acceptable" ? <a href="tel:9540849659" className="inline-flex items-center gap-1.5"><Phone size={14} className="icon-wiggle" /> Call for Price</a> : item.price}
                      </p>
                    </div>

                    <Link
                      to={`/category?cat=${encodeURIComponent(item.category)}`}
                      className="mt-6 w-full bg-[#14301F] text-white py-3 rounded-2xl font-bold text-xs tracking-wider uppercase hover:bg-[#1a3320] hover:shadow-soft-lg hover:shadow-[#14301F]/30 hover:scale-[1.03] transition-all duration-300 text-center"
                    >
                      Quick View
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "right")}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-gray-50 hover:shadow-soft-lg hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} className="icon-wiggle" />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Deal of the Day ─── */}
      <RevealSection className="py-24 bg-gradient-to-br from-[#051410] via-[#0b241d] to-[#04120e] relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="rounded-[48px_16px_48px_16px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <LazyImage
                  src={image28}
                  alt="Sunset Rose Grand Bouquet - Deal of the Day"
                  className="w-full h-[480px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <motion.div
                initial={{ y: -10 }}
                whileHover={{ y: 0, scale: 1.05 }}
                className="absolute -top-3 -left-3 bg-white/10 backdrop-blur-md border border-white/20 text-[#C9A15A] font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full shadow-lg"
              >
                <span className="flex items-center gap-1.5">
                  <Percent size={11} /> Today Only — 40% OFF
                </span>
              </motion.div>
            </motion.div>

            <div className="text-white flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 text-[#C9A15A] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                  <Clock size={12} className="animate-pulse" /> Deal of the Day
                </span>
                <h2 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none mt-6">
                  Sunset Rose Grand Bouquet
                </h2>
                <p className="text-stone-400 text-sm mt-4 leading-relaxed font-light">
                  A breathtaking, hand-tied arrangement of 50 premium long-stemmed roses in warm
                  sunset hues, finished with fresh eucalyptus and a signature silk ribbon.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A15A] tracking-wider text-lg font-medium hover:text-[#dfc4a3] transition-colors"
                >
                  Call us for best price →
                </a>
              </div>

              <div className="flex gap-4">
                {[
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-4 w-20 h-24 flex flex-col items-center justify-center shadow-inner hover:border-[#C9A15A]/30 transition-all duration-300 group"
                  >
                    <p className="text-white text-3xl font-serif font-bold tracking-tight tabular-nums leading-none">
                      {pad(t.value)}
                    </p>
                    <p className="text-stone-400 text-[10px] tracking-widest uppercase mt-1">
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A15A] to-[#b08b49] hover:from-[#b08b49] hover:to-[#C9A15A] text-black font-semibold tracking-widest text-xs uppercase px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(201,161,90,0.2)] hover:shadow-[0_15px_40px_rgba(201,161,90,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Grab This Deal <ArrowRight size={14} className="icon-wiggle" />
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Plan The Perfect Surprise ─── */}
      <RevealSection className="relative py-24 bg-gradient-to-b from-[#faf3ec] via-[#fdf6f0] to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A15A]/60" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A] uppercase font-inter">
                Thoughtful Gifting
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#C9A15A]/60" />
            </div>
            <h2 className="font-serif-display font-black text-center text-3xl md:text-5xl text-[#1a0f0a] leading-tight">
              Plan The Perfect Surprise
            </h2>
            <p className="text-center text-sm md:text-base text-gray-500 mt-3 max-w-lg mx-auto font-light">
              Thoughtfully crafted floral gifts for every kind of love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Her",
                label: "Shop For Her",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
                route: "/category?cat=Bouquets",
                accent: "#D6537A",
              },
              {
                title: "For Him",
                label: "Shop For Him",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
                route: "/category?cat=Flowers",
                accent: "#14301F",
              },
              {
                title: "For Them",
                label: "Shop For Them",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
                route: "/category?cat=Flowers",
                accent: "#C9A15A",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer text-center"
                onClick={() => navigate(item.route)}
              >
                <div className="relative w-full max-w-[260px] mx-auto aspect-[4/3] overflow-hidden mb-4"
                  style={{
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#D6537A]/0 group-hover:bg-[#D6537A]/10 transition-colors duration-500" />
                </div>

                <h3 className="font-serif-display font-bold text-xl md:text-2xl text-[#1a0f0a] mb-4">
                  {item.title}
                </h3>

                <motion.span
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#14301F] hover:bg-[#1a3d28] text-white font-bold rounded-full py-2.5 px-6 text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#14301F]/20"
                >
                  {item.label}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── How It Works ─── */}
      <RevealSection className="relative py-24 bg-gradient-to-b from-[#FAF8F5] via-[#f3f0ea] to-[#FAF8F5] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#C9A15A] uppercase block mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-display font-black text-[#1a0f0a] leading-tight">
              How It Works
            </h2>
            <p className="text-stone-400 text-sm mt-3 font-light max-w-md mx-auto">
              From our garden directly to your doorstep in three easy steps
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-stone-300 to-transparent z-10" />
                  )}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="bg-white/90 backdrop-blur-md border border-stone-200/60 rounded-3xl p-8 relative shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(201,161,90,0.08)] hover:border-[#C9A15A]/30 group cursor-pointer text-center"
                  >
                    <span className="absolute top-4 right-6 text-6xl font-serif font-black text-stone-200/80 group-hover:text-[#C9A15A]/10 transition-colors duration-500 select-none">
                      {pad(index + 1)}
                    </span>
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C9A15A]/10 flex items-center justify-center text-[#C9A15A] mb-6 group-hover:bg-[#C9A15A] group-hover:text-white transition-all duration-500 shadow-inner">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-serif-display text-xl font-bold text-[#1a0f0a] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-stone-500 text-sm font-light leading-relaxed">
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
      <RevealSection className="relative py-24 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0] overflow-hidden">
        <FloatingDecoration type="petal5" side="left" top="15%" size={56} opacity={0.12} delay={1} duration={14} color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="25%" size={60} opacity={0.18} delay={0} duration={11} animation="sway2" color="#14301F" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="12%" size={42} opacity={0.1} delay={2.5} duration={13} animation="sway3" color="#C9A15A" />
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Our Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
              Why Choose Us
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light">
              Delivering smiles and premium quality with every single delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`${item.bg} group p-8 rounded-3xl border border-gray-200/40 text-center hover:shadow-[0_20px_50px_-12px_rgba(214,83,122,0.12)] hover:border-[#C9A15A]/20 transition-all duration-500`}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100/80 flex items-center justify-center shadow-sm group-hover:shadow-[0_0_25px_rgba(201,161,90,0.15)] group-hover:scale-110 transition-all duration-500">
                    <Icon size={24} className={`${item.iconColor} icon-wiggle`} />
                  </div>
                  <h3 className="font-serif-display font-bold text-base text-[#14301F] mt-5">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 font-light">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── PERFECT FOR EVERY OCCASION (10x LUXURY ENHANCED) ─── */}
      <section className="relative py-20 bg-gradient-to-b from-[#fafaf9] to-[#fffcf7]">
        <div className="max-w-[1440px] mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A] uppercase block mb-2">
              Life Milestones
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-display font-black text-[#1a0f0a] leading-tight">
              Perfect For Every Occasion
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-md mx-auto">
              Handcrafted luxury flower setups designed for all of life's elite and beautiful moments.
            </p>
          </div>

          {/* Responsive Luxury Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                key={idx}
                className="group relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-3 hover:shadow-[0_25px_55px_rgba(20,48,31,0.15)] transition-all duration-500 cursor-pointer"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-white text-xs">✦</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end">
                  <h3 className="font-serif-display font-bold text-xl text-white tracking-wide">
                    {occ.title}
                  </h3>
                  <p className="text-white/80 text-xs mt-1.5 line-clamp-2 leading-relaxed font-light">
                    {occ.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[#C9A15A] text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore →
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <RevealSection className="relative py-20 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0] overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/12 to-transparent", size: 240, top: "-6%", right: "-3%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/10 to-transparent", size: 200, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-violet-200/8 to-transparent", size: 180, top: "40%", left: "45%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="8%" size={56} opacity={0.1} delay={0.5} duration={13} color="#C9A15A" />
        <FloatingDecoration type="petal6" side="right" top="12%" size={60} opacity={0.12} delay={0} duration={14} animation="sway2" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="8%" size={48} opacity={0.16} delay={2} duration={11} animation="sway3" color="#14301F" />
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
                <span className="text-2xl font-black text-[#14301F] font-serif-display">4.9</span>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">Based on 2,400+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="marquee-wrapper relative before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#faf8f5] before:via-[#faf8f5]/80 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#faf8f5] after:via-[#faf8f5]/80 after:to-transparent after:z-10">
            <div className="flex flex-col gap-4 overflow-hidden">
              <div className="flex marquee-ltr gap-4 w-max hover:[animation-play-state:paused]">
                {[...Array(2)].flatMap(() =>
                  reviewData.map((r, i) => (
                    <div key={i} className="p-4 max-w-[280px] bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:border-[#C9A15A]/40 hover:shadow-[0_12px_40px_rgba(201,161,90,0.08)] transition-all duration-300 rounded-2xl shrink-0">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={10} className="text-[#C9A15A] fill-[#C9A15A]" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed font-light mb-2.5 line-clamp-2">
                        "{r.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full ${r.color} flex items-center justify-center text-white text-[8px] font-bold`}>
                            {r.initials}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-[#14301F] leading-tight">{r.name}</p>
                            <p className="text-[8px] text-gray-400">{r.location}</p>
                          </div>
                        </div>
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="flex marquee-rtl gap-4 w-max hover:[animation-play-state:paused]">
                {[...Array(2)].flatMap(() =>
                  reviewData.map((r, i) => (
                    <div key={i} className="p-4 max-w-[280px] bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:border-[#C9A15A]/40 hover:shadow-[0_12px_40px_rgba(201,161,90,0.08)] transition-all duration-300 rounded-2xl shrink-0">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={10} className="text-[#C9A15A] fill-[#C9A15A]" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed font-light mb-2.5 line-clamp-2">
                        "{r.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full ${r.color} flex items-center justify-center text-white text-[8px] font-bold`}>
                            {r.initials}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-[#14301F] leading-tight">{r.name}</p>
                            <p className="text-[8px] text-gray-400">{r.location}</p>
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
      <RevealSection className="relative py-24 bg-gradient-to-br from-[#0c0907] via-[#14100d] to-[#0c0907] overflow-hidden border-b border-[#C9A15A]/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A]/70 uppercase block mb-2">
              Follow Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-display font-black text-white leading-tight">
              Follow Our Floral Journey
            </h2>
            <p className="mt-5 inline-flex items-center gap-2 bg-[#C9A15A]/10 text-[#C9A15A] border border-[#C9A15A]/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
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
                  key={index}
                  className={`group relative aspect-square overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(201,161,90,0.1)] hover:-translate-y-1 transition-all duration-500 ${isOdd ? 'rounded-[32px_8px_32px_8px]' : 'rounded-[8px_32px_8px_32px]'}`}
                >
                  <LazyImage
                    src={img}
                    alt="Floral journey picture on Instagram"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-[#C9A15A]/40 transition-all duration-500" />
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
      <RevealSection className="relative py-24 bg-gradient-to-br from-[#06120e] via-[#091a15] to-[#040c0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,90,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#C9A15A] uppercase block mb-4">
              Answers
            </span>
            <h2 className="text-4xl md:text-5xl font-serif-display font-light text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-500 text-sm mt-4 font-light max-w-lg mx-auto">
              Everything you need to know about our flowers and shipping policies
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4 relative z-10">
            {faqs.map((faq, index) => {
              const isSelected = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white/[0.03] backdrop-blur-md border rounded-2xl transition-all duration-300 hover:bg-white/[0.05] hover:border-[#C9A15A]/30 ${isSelected ? 'shadow-[0_0_30px_rgba(201,161,90,0.06)] border-[#C9A15A]/40' : 'border-white/10'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isSelected ? null : index)}
                    className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none transition-all duration-300"
                  >
                    <span className="font-serif-display text-base leading-snug text-stone-200 group-hover:text-white transition-colors duration-300">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isSelected ? 'border-[#C9A15A] text-[#C9A15A]' : 'border-white/20 text-stone-300 group-hover:border-[#C9A15A] group-hover:text-[#C9A15A]'}`}>
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
                        <div className="px-6 pb-5 text-stone-400 text-sm leading-relaxed font-light border-t border-white/5 pt-3">
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
      <RevealSection className="relative py-24 bg-gradient-to-br from-[#F4C9D1]/40 via-pink-50/20 to-purple-100/30 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/25 to-transparent", size: 320, top: "-10%", left: "-5%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-200/20 to-transparent", size: 260, bottom: "-12%", right: "10%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-purple-300/15 to-transparent", size: 220, top: "60%", left: "40%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <div className="absolute top-20 right-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-[#D6537A]/6 to-transparent blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'7s'}} />
        <div className="absolute bottom-20 left-[8%] w-36 h-36 rounded-full bg-gradient-to-tr from-[#C9A15A]/6 to-transparent blur-3xl pointer-events-none animate-pulse" style={{animationDuration:'9s'}} />
        <FloatingDecoration type="petal5" side="left" top="15%" size={64} opacity={0.12} delay={0} duration={14} />
        <FloatingDecoration type="petal6" side="right" top="10%" size={52} opacity={0.1} delay={1.5} duration={12} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="left" top="auto" bottom="12%" size={44} opacity={0.15} delay={2} duration={10} animation="sway3" />
        <FloatingDecoration type="petal" side="right" top="auto" bottom="8%" size={40} opacity={0.12} delay={3} duration={11} animation="sway1" color="#D6537A" />
        <div className="max-w-[1440px] mx-auto text-center px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="w-14 h-14 bg-gradient-to-br from-[#D6537A]/15 to-[#C9A15A]/15 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(214,83,122,0.08)]"
          >
            <Mail size={24} className="text-[#D6537A]" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] leading-tight">
            Join Our Flower Family
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-light max-w-md mx-auto">
            Subscribe for exclusive discounts, floral tips, and advance access to our limited
            holiday collections.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-3xl px-8 py-5 text-emerald-700 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.1)]"
              >
                <CheckCircle2 size={16} /> Welcome to the family! Check your inbox soon.
              </motion.div>
            ) : (
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
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
                  className="flex-1 border border-gray-200 bg-white/80 backdrop-blur-sm rounded-full px-6 py-4 text-sm text-[#14301F] placeholder-gray-400 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-300/30 focus:shadow-[0_0_25px_rgba(214,83,122,0.08)] transition-all"
                />
                <motion.button
                  onClick={handleSubscribe}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-[#14301F] to-[#1f4a30] hover:from-[#1f4a30] hover:to-[#14301F] text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase shadow-[0_4px_20px_rgba(20,48,31,0.25)] hover:shadow-[0_8px_35px_rgba(20,48,31,0.4)] transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 mt-12">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center text-[#D6537A] shadow-sm hover:shadow-[0_8px_25px_rgba(214,83,122,0.15)] transition-all duration-300"
            >
              <FaInstagram size={16} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center text-[#D6537A] shadow-sm hover:shadow-[0_8px_25px_rgba(214,83,122,0.15)] transition-all duration-300"
            >
              <FaFacebookF size={15} />
            </motion.a>
          </div>
        </div>
      </RevealSection>

      {/* ─── WhatsApp Floating Button ─── */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#25d366] to-[#20ba59] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_45px_rgba(37,211,102,0.55)] hover:scale-[1.08] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </motion.a>
    </div>
  );
};

export default Home;
