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
import hero from "../assets/Bouquet/hero-lifestyle.jpg";
import forHerImage from "../assets/recepmarriage/bride7.jpg";
import forHimImage from "../assets/recepmarriage/r12.jpg";
import forThemImage from "../assets/anniversory/anni10.jpg";
import image28 from "../assets/f1.png";
import imageF2 from "../assets/f2.png";
import grandWeddingImg from "../assets/recepmarriage/r9.jpg";
import sacredImg from "../assets/devotional/dev3.jpg";
import luxuryEventImg from "../assets/recepmarriage/r10.jpg";
import birthdayExpImg from "../assets/birthday/birthday10.png";

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
  const [tiltIndex, setTiltIndex] = useState(null);
  const [tiltAngles, setTiltAngles] = useState({ rotateX: 0, rotateY: 0 });
  const [expTiltIndex, setExpTiltIndex] = useState(null);
  const [expTiltAngles, setExpTiltAngles] = useState({ rotateX: 0, rotateY: 0 });

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
    {
      id: 5,
      title: "Luxury Rose Box",
      image: image9,
      price: "acceptable",
      originalPrice: "₹3,499",
      rating: 4.9,
      badge: "Premium",
      category: "Luxury",
    },
    {
      id: 6,
      title: "White Elegance",
      image: image10,
      price: "acceptable",
      originalPrice: "₹2,199",
      rating: 4.7,
      badge: "Bestseller",
      category: "Bouquets",
    },
    {
      id: 7,
      title: "Anniversary Combo",
      image: image4,
      price: "acceptable",
      originalPrice: "₹2,999",
      rating: 4.8,
      badge: "Popular",
      category: "Anniversary",
    },
    {
      id: 8,
      title: "Divine Orchids",
      image: image13,
      price: "acceptable",
      originalPrice: "₹3,999",
      rating: 4.9,
      badge: "New",
      category: "Luxury",
    },
    {
      id: 9,
      title: "Birthday Surprise",
      image: birthdayExpImg,
      price: "acceptable",
      originalPrice: "₹1,799",
      rating: 4.6,
      badge: "Gift",
      category: "Birthday",
    },
    {
      id: 10,
      title: "Grand Floral Basket",
      image: image28,
      price: "acceptable",
      originalPrice: "₹4,499",
      rating: 4.9,
      badge: "Premium",
      category: "All",
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
      title: "Rapid Delivery",
      desc: "Premium same-day delivery across Delhi NCR, ensuring your blooms arrive fresh and on time.",
      icon: Truck,
      bg: "bg-[#F4C9D1]/50",
      iconColor: "text-[#D6537A]",
    },
    {
      title: "Premium Freshness",
      desc: "Handpicked luxury blooms sourced daily from the finest farms, guaranteed to last.",
      icon: Flower2,
      bg: "bg-emerald-50/50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Secure Checkout",
      desc: "Bank-grade encrypted transactions for a safe and seamless shopping experience.",
      icon: ShieldCheck,
      bg: "bg-blue-50/50",
      iconColor: "text-blue-600",
    },
    {
      title: "Perfect Presentation",
      desc: "Every arrangement is thoughtfully crafted with premium wrapping and hand-tied with care.",
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
      {/* ─── HERO: 68/32 Premium Luxury Layout ─── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FDF8F3] via-[#FAF2EA] to-[#F5EDE4] dark:from-[#07140e] dark:via-[#0a1f15] dark:to-[#06120e] pt-4 pb-6 lg:pb-10">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-[15%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[rgba(214,179,106,0.05)] via-[rgba(214,179,106,0.02)] to-transparent blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[rgba(230,122,158,0.03)] via-transparent to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[68fr_32fr] gap-5 lg:gap-6">
            {/* ═══ Left: Hero Image — 68% ═══ */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[32px] overflow-hidden min-h-[450px] lg:min-h-[680px] group cursor-pointer"
              onClick={() => navigate("/category")}
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out will-change-transform">
                <LazyImage
                  src={hero}
                  alt="Luxury flower collection"
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              {/* Soft overlay — 20% */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10" />

              {/* Floating badges — 4 glass badges */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-6 left-6 z-30 badge-glass-premium"
              >
                <Star size={12} className="text-[#D6B36A] fill-[#D6B36A]" />
                <span className="text-white text-[10px] font-bold tracking-[0.06em]">4.9 Rating</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-6 right-6 z-30 badge-glass-premium"
              >
                <Truck size={12} className="text-[#D6B36A]" />
                <span className="text-white text-[10px] font-bold tracking-[0.06em]">Same Day</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-36 left-6 z-30 badge-glass-premium"
              >
                <Flower2 size={12} className="text-[#D6B36A]" />
                <span className="text-white text-[10px] font-bold tracking-[0.06em]">Fresh Flowers</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-36 right-6 z-30 badge-glass-premium"
              >
                <Gift size={12} className="text-[#D6B36A]" />
                <span className="text-white text-[10px] font-bold tracking-[0.06em]">Gift Wrapped</span>
              </motion.div>

              {/* Content — left aligned, more whitespace */}
              <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-12 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-bold tracking-[0.2em] uppercase mb-5 w-fit">
                  <span className="w-5 h-px bg-white/40 inline-block" />
                  Premium Florist Since 2015
                </div>
                <h1 className="hero-heading-premium text-white max-w-[600px]">
                  Luxury Blooms<br />
                  <span className="text-[#D6B36A]">Handcrafted for You</span>
                </h1>
                <p className="text-white/75 text-[18px] lg:text-[22px] mt-4 max-w-[540px] font-light leading-relaxed">
                  Handpicked fresh every morning. Artisan arrangements, premium gifts — curated for life's most beautiful moments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-7">
                  <span className="btn-ripple inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#163827] to-[#1f4a30] text-white font-bold text-sm tracking-wider uppercase rounded-full shadow-[0_8px_32px_rgba(22,56,39,0.35)] hover:shadow-[0_12px_48px_rgba(22,56,39,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                    <ShoppingBag size={16} />
                    Shop Collection
                  </span>
                  <span className="btn-ripple inline-flex items-center gap-3 px-9 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white font-bold text-sm tracking-wider uppercase rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer">
                    <Flower2 size={16} />
                    Explore Occasions
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ═══ Right: Promotional Cards — 32% ═══ */}
            <div className="flex flex-col gap-5 lg:gap-6">
              {/* Card 1: Wedding */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="promo-card-premium min-h-[300px] lg:min-h-[325px]"
                onClick={() => navigate("/category?cat=Wedding")}
              >
                <div className="promo-image">
                  <LazyImage
                    src={grandWeddingImg}
                    alt="Wedding collection"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/80 text-[9px] font-bold tracking-[0.15em] uppercase mb-3 w-fit">
                    Wedding
                  </div>
                  <h3 className="font-serif-display font-bold text-2xl lg:text-3xl text-white leading-tight">
                    Grand Weddings
                  </h3>
                  <p className="text-white/60 text-sm mt-1 font-light">Exclusive floral decor</p>
                  <span className="inline-flex items-center gap-1.5 mt-3 px-5 py-2 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase rounded-full hover:bg-white/30 transition-all duration-300">
                    Explore <ArrowRight size={11} />
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Occasions + Gifts */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="promo-card-premium min-h-[300px] lg:min-h-[325px]"
                onClick={() => navigate("/occasions")}
              >
                <div className="promo-image">
                  <LazyImage
                    src={forHerImage}
                    alt="Occasions"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/80 text-[9px] font-bold tracking-[0.15em] uppercase mb-3 w-fit">
                    Gifts &amp; Celebrations
                  </div>
                  <h3 className="font-serif-display font-bold text-2xl lg:text-3xl text-white leading-tight">
                    Every Occasion
                  </h3>
                  <p className="text-white/60 text-sm mt-1 font-light">Thoughtful gifts delivered</p>
                  <span className="inline-flex items-center gap-1.5 mt-3 px-5 py-2 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase rounded-full hover:bg-white/30 transition-all duration-300">
                    Shop Now <ArrowRight size={11} />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ═══ 2. CATEGORY CIRCLES (Below Hero) ═══ */}
          <div className="mt-12 lg:mt-16 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 md:gap-8 lg:gap-10 justify-start md:justify-center">
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
                    className="flex flex-col items-center gap-3 shrink-0 group"
                  >
                    <div className="relative w-[88px] h-[88px] md:w-[96px] md:h-[96px] rounded-full overflow-hidden bg-[rgba(255,255,255,0.6)] shadow-[0_8px_28px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] group-hover:shadow-[0_16px_40px_-8px_rgba(214,179,106,0.25)] group-hover:border-[#D6B36A]/40 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-400 border border-[rgba(214,179,106,0.12)]">
                      <LazyImage
                        src={cat.image}
                        alt={cat.label}
                        className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                      />
                      {cat.discount && (
                        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#E67A9E] to-[#D6B36A] text-white text-[8px] md:text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-[rgba(230,122,158,0.2)] whitespace-nowrap">
                          {cat.discount}
                        </div>
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-stone-400 group-hover:text-[#163827] dark:text-stone-400 dark:group-hover:text-[#D6B36A] transition-colors duration-300 whitespace-nowrap tracking-wide">
                      {cat.label}
                    </span>
                  </Link>
              ))}
            </div>
          </div>

          {/* ═══ 3. TRENDING NOW — Grid Layout ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 lg:mt-20"
          >
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#D6B36A]/60" />
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#D6B36A] uppercase">Curated Picks</span>
                  <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#D6B36A]/60" />
                </div>
                <h2 className="font-serif-display font-black text-3xl lg:text-4xl text-[#1B1B1B] dark:text-[#f0ece6] leading-tight">
                  Trending Now
                </h2>
                <p className="text-stone-400 text-sm mt-1 font-light">Most loved arrangements this week</p>
              </div>
              <Link
                to="/category"
                className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#D6B36A] hover:text-[#c89e44] transition-colors shrink-0"
              >
                View All <ArrowRight size={12} />
              </Link>
            </div>

            {/* Desktop: 4-col grid, Tablet: 2-col, Mobile: 2-col */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6">
              {bestSellers.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/category?cat=${item.category}`)}
                  className="group rounded-[24px] overflow-hidden bg-white dark:bg-white/5 border border-stone-100 dark:border-white/5 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 cursor-pointer"
                >
                  <div className="relative h-[280px] lg:h-[300px] overflow-hidden bg-stone-50 dark:bg-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Wishlist icon */}
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-sm">
                      <Heart size={14} className="text-stone-500 hover:text-rose-500 transition-colors" />
                    </span>
                    {/* Quick view button */}
                    <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-stone-700 text-[10px] font-semibold tracking-wider rounded-full shadow-lg hover:bg-white">
                        Quick View
                      </span>
                    </div>
                    {item.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/85 backdrop-blur-sm text-[8px] font-bold tracking-wider text-stone-600 rounded-full border border-stone-200/50 shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4 lg:p-5">
                    <h3 className="text-sm font-semibold text-stone-700 dark:text-stone-300 truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-medium text-stone-400">{item.originalPrice}</span>
                      <span className="flex items-center gap-1 text-[11px] text-amber-500 font-medium">
                        <Star size={10} className="fill-amber-500" /> {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet/Mobile: horizontal scroll */}
            <div className="lg:hidden overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 lg:mx-0">
              <div className="flex gap-4 px-6 pb-2">
                {bestSellers.slice(0, 8).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/category?cat=${item.category}`)}
                    className="group shrink-0 w-[180px] sm:w-[200px] rounded-[20px] overflow-hidden bg-white dark:bg-white/5 border border-stone-100 dark:border-white/5 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-[180px] sm:h-[220px] overflow-hidden bg-stone-50 dark:bg-white/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.badge && (
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-white/80 backdrop-blur-sm text-[8px] font-bold tracking-wider text-stone-600 rounded-full border border-stone-200/50">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-3.5">
                      <h3 className="text-[13px] font-semibold text-stone-700 dark:text-stone-300 truncate">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between mt-1.5">
                        <span className="text-[11px] text-stone-400">{item.originalPrice}</span>
                        <span className="flex items-center gap-0.5 text-[10px] text-amber-500 font-medium">
                          <Star size={9} className="fill-amber-500" /> {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex sm:hidden justify-center mt-6">
              <Link
                to="/category"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#D6B36A]"
              >
                View All Products <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
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
              <span className="text-[10px] font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
                Customer Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-black text-[var(--color-primary)] mt-1.5 leading-[1.08]">
                Bestselling Bouquets
              </h2>
            </div>
            <Link
              to="/category"
              className="group inline-flex items-center gap-2 text-stone-400 hover:text-[var(--color-gold)] font-semibold text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
            >
              <span className="relative">
                View All
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[var(--color-gold)] group-hover:w-full transition-all duration-300 rounded-full" />
              </span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "left")}
              className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-stone-200/40 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-700 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={15} />
            </button>

            <div
              ref={bestSellerSliderRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            >
              {bestSellers.map((item) => (
                <motion.div
                  key={item.id}
                  data-slide-card
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden ring-1 ring-stone-100/80 hover:ring-[var(--color-gold)]/20 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-12px_rgba(214,83,122,0.12)] shrink-0 w-[82vw] sm:w-[310px] snap-start flex flex-col transition-all duration-400"
                >
                  <div className="overflow-hidden h-72 relative bg-gradient-to-br from-[#F4C9D1]/10 to-[#f5ede4]/20">
                    {item.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-[var(--color-accent)] to-rose-400 text-white text-[8px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.12em] shadow-[0_2px_8px_rgba(214,83,122,0.2)]">
                        {item.badge === "Bestseller" ? "Best Seller" : item.badge === "Limited" ? "Limited Edition" : item.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/[0.02] to-transparent pointer-events-none z-[1]" />
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-2">
                    <h3 className="font-serif-display font-bold text-[15px] text-[var(--color-primary)] leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={9} className={s <= Math.round(item.rating) ? "fill-amber-400 text-amber-400" : "text-stone-200 dark:text-stone-600"} />
                        ))}
                      </div>
                      <span className="text-[10px] font-semibold text-stone-600">
                        {item.rating}
                      </span>
                      <span className="text-stone-300 text-[10px]">·</span>
                      <span className="text-[9px] text-stone-400 font-medium tracking-wide">
                        120+ reviews
                      </span>
                    </div>
                    <div className="flex items-center mt-0.5">
                      {item.price === "acceptable" ? (
                        <a href="tel:9540849659" className="inline-flex items-center gap-1.5 text-[var(--color-accent)]/80 hover:text-[var(--color-gold)] font-semibold text-xs transition-colors duration-300 group/price">
                          <Phone size={11} className="transition-transform duration-300 group-hover/price:-rotate-6" />
                          <span>Custom Pricing</span>
                        </a>
                      ) : (
                        <p className="text-[var(--color-accent)] font-black text-base">{item.price}</p>
                      )}
                    </div>
                    <Link
                      to={`/category?cat=${encodeURIComponent(item.category)}`}
                      className="group/btn mt-auto w-full bg-gradient-to-r from-[var(--color-primary)] to-[#1f4a30] text-white py-2.5 rounded-xl font-bold text-[10px] tracking-[0.12em] uppercase hover:shadow-[0_6px_20px_rgba(20,48,31,0.2)] hover:scale-[1.01] active:scale-[0.97] transition-all duration-300 text-center relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10 inline-flex items-center gap-1.5">
                        Quick View
                        <ArrowRight size={11} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "right")}
              className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-stone-200/40 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-700 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Masterpiece of the Week ─── */}
      <RevealSection className="py-16 lg:py-24 bg-gradient-to-br from-[#051410] via-[#0b241d] to-[#04120e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_45%,rgba(201,161,90,0.15)_0%,rgba(201,161,90,0.05)_30%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_55%,rgba(214,83,122,0.06)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <BokehLights spots={[
          { color: "from-[var(--color-gold)]/15 to-transparent", size: 320, top: "-6%", right: "-3%", anim: "bk-drift1", delay: 0, duration: 28 },
          { color: "from-rose-400/12 to-transparent", size: 240, bottom: "-8%", left: "-2%", anim: "bk-drift2", delay: 2, duration: 32 },
          { color: "from-amber-300/10 to-transparent", size: 180, top: "55%", left: "30%", anim: "bk-float", delay: 4, duration: 24 },
          { color: "from-violet-400/8 to-transparent", size: 280, top: "12%", right: "28%", anim: "bk-drift3", delay: 1, duration: 30 },
        ]} />

        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[var(--color-gold)]/10 via-transparent to-rose-500/5 rounded-[56px_20px_56px_20px] blur-2xl pointer-events-none" />
                <div className="absolute -inset-2 border border-[var(--color-gold)]/10 rounded-[52px_18px_52px_18px] pointer-events-none" />
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[var(--color-gold)]/20 rounded-tr-[32px] pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[var(--color-gold)]/20 rounded-bl-[32px] pointer-events-none" />
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-[48px_16px_48px_16px] overflow-hidden border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,161,90,0.06)]"
                >
                  <LazyImage
                    src={image28}
                    alt="Sunset Rose Grand Bouquet - Masterpiece of the Week"
                    className="w-full h-[380px] lg:h-[500px] object-cover hover:scale-105 transition duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 -right-2 flex flex-wrap gap-1.5"
                >
                  <span className="bg-white/8 backdrop-blur-md border border-white/10 text-stone-300 text-[8px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1.5 rounded-full">
                    Fresh Today
                  </span>
                  <span className="bg-white/8 backdrop-blur-md border border-white/10 text-stone-300 text-[8px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1.5 rounded-full">
                    Handcrafted
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="text-white flex flex-col gap-5 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div>
                <span className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-md border border-[var(--color-gold)]/15 text-[var(--color-gold)] text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                  <Flower2 size={11} className="shrink-0" />
                  Florist's Signature
                </span>
                <h2 className="font-serif-display text-white text-3xl md:text-4xl lg:text-5xl font-black leading-[1.08] mt-5 tracking-tight">
                  Masterpiece of the Week
                </h2>
                <p className="font-serif-display text-white/80 text-xl md:text-2xl font-light italic leading-snug mt-2">
                  Sunset Rose Grand Bouquet
                </p>
                <p className="text-stone-400/90 text-sm leading-relaxed mt-4 max-w-md font-light">
                  A breathtaking arrangement of 50 long-stemmed roses in warm sunset hues,
                  hand-tied with fresh eucalyptus and finished with our signature silk ribbon.
                  Each bloom is selected by our master florists for exceptional quality.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-stone-400 text-[10px] font-medium tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                  Premium Quality
                </span>
                <span className="flex items-center gap-1.5 text-stone-400 text-[10px] font-medium tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                  Expert Florists
                </span>
                <span className="flex items-center gap-1.5 text-stone-400 text-[10px] font-medium tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                  Luxury Wrapping
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-stone-500 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Limited Availability — Offer Ends In
                </p>
                <div className="flex gap-2.5">
                  {[
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((t) => (
                    <div
                      key={`countdown-${t.label}`}
                      className="bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-[var(--color-gold)]/20 rounded-2xl p-3 w-[68px] h-[76px] flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 group"
                    >
                      <p className="text-white text-2xl font-serif-display font-bold tracking-tight tabular-nums leading-none">
                        {pad(t.value)}
                      </p>
                      <p className="text-stone-500 text-[8px] tracking-[0.15em] uppercase mt-1.5 font-semibold">
                        {t.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--color-gold)] to-[#b08b49] hover:from-[#b08b49] hover:to-[var(--color-gold)] text-[#0a1a12] font-bold tracking-widest text-xs uppercase px-9 py-4 rounded-full shadow-[0_8px_28px_rgba(201,161,90,0.15)] hover:shadow-[0_16px_40px_rgba(201,161,90,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Inquire Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-[var(--color-gold)] text-[10px] font-medium tracking-wide transition-colors duration-300 underline underline-offset-4 decoration-stone-700/30 hover:decoration-[var(--color-gold)]/40"
                >
                  Or call for bespoke pricing
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealSection>

      {/* ─── Celebrate Every Beautiful Moment ─── */}
      <RevealSection className="relative bg-gradient-to-b from-[#FAF8F5] via-[#fdfbf7] to-[#FAF8F5] dark:from-[#05120e] dark:via-[#091f1a] dark:to-[#05120e] py-20 lg:py-28 transition-colors duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,161,90,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Floating gold particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[8%] w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]/20 blur-[1px]"
          />
          <motion.div
            animate={{ y: [0, -30, 0], opacity: [0, 0.4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] right-[12%] w-2 h-2 rounded-full bg-[var(--color-gold)]/15 blur-[2px]"
          />
          <motion.div
            animate={{ y: [0, -25, 0], opacity: [0, 0.3, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-[25%] left-[15%] w-1 h-1 rounded-full bg-[var(--color-gold)]/20 blur-[1px]"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6">
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-[var(--color-gold)]/60" />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[var(--color-gold)]/40">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
            </svg>
            <span className="w-12 h-px bg-gradient-to-l from-transparent via-[var(--color-gold)]/30 to-[var(--color-gold)]/60" />
          </div>

          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]/60" />
              <span className="text-[#C9A15A] tracking-[0.25em] font-bold text-[11px] uppercase">
                Curated Occasions
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]/60" />
            </div>
            <h2 className="text-[#1a0f0a] dark:text-white font-serif-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight">
              Celebrate Every <span className="italic font-light text-[var(--color-gold)]">Beautiful</span> Moment
            </h2>
            <p className="text-center text-sm md:text-base text-stone-400 mt-3 max-w-xl mx-auto font-light leading-relaxed">
              Handcrafted floral experiences designed for love, celebrations and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Romantic Moments",
                label: "Discover Collection",
                image: forHerImage,
                route: "/category?cat=Bouquets",
                subtitle: "Handcrafted luxury bouquets for life's most romantic moments — from intimate anniversaries to grand proposals.",
                tags: ["Anniversary", "Proposal", "Date Night", "Romance"],
              },
              {
                title: "Wedding Celebrations",
                label: "Discover Collection",
                image: forHimImage,
                route: "/category?cat=Flowers",
                subtitle: "Exquisite floral artistry for engagements, weddings and unforgettable celebrations.",
                tags: ["Wedding", "Engagement", "Reception", "Haldi"],
              },
              {
                title: "Celebrate Together",
                label: "Discover Collection",
                image: forThemImage,
                route: "/category?cat=Flowers",
                subtitle: "Beautifully curated arrangements for birthdays, anniversaries and every treasured milestone.",
                tags: ["Birthday", "Anniversary", "Celebration", "Family"],
              },
            ].map((item, i) => (
              <motion.div
                key={`surprise-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[24px] overflow-hidden cursor-pointer shadow-[0_4px_40px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-16px_rgba(201,161,90,0.15)] ring-1 ring-white/20 hover:ring-[var(--color-gold)]/30 transition-all duration-700 ease-out"
                onClick={() => navigate(item.route)}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5.2' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Premium dark overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.82) 100%)',
                    }}
                  />

                  {/* Premium badge - first card */}
                  {i === 0 && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 text-white text-[8px] font-bold tracking-[0.15em] uppercase shadow-lg shadow-black/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
                        Signature Collection
                      </span>
                    </div>
                  )}

                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 z-[2] pointer-events-none">
                    <div className="absolute top-0 left-0 w-[1.5px] h-full bg-gradient-to-b from-[var(--color-gold)]/40 to-transparent" />
                    <div className="absolute top-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-[var(--color-gold)]/40 to-transparent" />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 z-[2] pointer-events-none">
                    <div className="absolute top-0 right-0 w-[1.5px] h-full bg-gradient-to-b from-[var(--color-gold)]/40 to-transparent" />
                    <div className="absolute top-0 right-0 h-[1.5px] w-full bg-gradient-to-l from-[var(--color-gold)]/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 z-10 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                    <h3 className="font-serif-display font-bold text-xl lg:text-2xl text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-[92%] leading-relaxed font-light text-[11px] lg:text-xs" style={{ color: 'rgba(255,255,255,0.88)', lineHeight: '1.7' }}>
                      {item.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[7px] font-semibold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-white/70 hover:text-[var(--color-gold)] text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 group/link">
                      <span className="relative">
                        {item.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[var(--color-gold)] group-hover/link:w-full transition-all duration-300 ease-out rounded-full" />
                      </span>
                      <ArrowRight size={11} className="group-hover/link:translate-x-1.5 transition-transform duration-300 ease-out" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── How It Works ─── */}
      <RevealSection className="relative py-14 lg:py-16 bg-gradient-to-b from-[#FDFBF8] via-[#FDFBF8] to-[#FDFBF8] overflow-hidden">
        {/* Premium background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,179,106,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(214,179,106,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(214,179,106,0.02)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.015)] pointer-events-none" />

        {/* Ambient glow blobs */}
        <div className="absolute top-[-5%] left-[-2%] w-[500px] h-[500px] bg-[rgba(214,179,106,0.04)] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-5%] right-[-2%] w-[400px] h-[400px] bg-[rgba(214,179,106,0.03)] rounded-full blur-[100px] pointer-events-none" />

        {/* Floating particles */}
        <motion.div animate={{ y: [0, -16, 0], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] right-[8%] w-2 h-2 rounded-full bg-[rgba(214,179,106,0.25)] blur-[1px] pointer-events-none" />
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.08, 0.25, 0.08] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[30%] left-[5%] w-1.5 h-1.5 rounded-full bg-[rgba(214,179,106,0.2)] blur-[2px] pointer-events-none" />
        <motion.div animate={{ y: [0, -12, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }} className="absolute bottom-[15%] right-[12%] w-1 h-1 rounded-full bg-[rgba(214,179,106,0.3)] blur-[1px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6">
          {/* ─── Heading Area ─── */}
          <div className="text-center mb-10 lg:mb-12 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[rgba(214,179,106,0.04)] rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[rgba(214,179,106,0.1)] backdrop-blur-sm border border-[rgba(214,179,106,0.2)] text-[#D6B36A] text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#D6B36A]">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
              </svg>
              Simple Process
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-black text-[#163827] leading-[1.06] mt-4"
            >
              How It Works
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6C6C6C] text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed mt-3"
            >
              From our garden directly to your doorstep in three easy steps
            </motion.p>
          </div>

          {/* ─── Cards Grid ─── */}
          <div className="relative grid md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = tiltIndex === index;
              return (
                <div key={`step-${index}`} className="relative">
                  {/* Golden connector line between cards */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[30%] -right-[18px] z-10 items-center justify-center">
                      <svg width="28" height="6" viewBox="0 0 28 6" className="overflow-visible">
                        <motion.line
                          x1="0" y1="3" x2="28" y2="3"
                          stroke="rgba(214,179,106,0.3)"
                          strokeWidth="2"
                          strokeDasharray="2 4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.4, ease: "easeInOut" }}
                        />
                        <motion.circle
                          cx="28" cy="3" r="2.5"
                          fill="#D6B36A"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.4 }}
                        />
                      </svg>
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    animate={
                      isHovered
                        ? { rotateX: tiltAngles.rotateX, rotateY: tiltAngles.rotateY, transition: { duration: 0.15 } }
                        : { rotateX: 0, rotateY: 0, transition: { duration: 0.4, ease: "easeOut" } }
                    }
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseMove={(e) => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / rect.width;
                      const y = (e.clientY - rect.top) / rect.height;
                      setTiltIndex(index);
                      setTiltAngles({ rotateX: (0.5 - y) * 8, rotateY: (x - 0.5) * 8 });
                    }}
                    onMouseLeave={() => {
                      setTiltIndex(null);
                      setTiltAngles({ rotateX: 0, rotateY: 0 });
                    }}
                    className="group relative bg-[rgba(255,255,255,0.58)] backdrop-blur-xl border border-[rgba(255,255,255,0.42)] rounded-[28px] p-8 lg:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.05),0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(214,179,106,0.12),0_12px_30px_rgba(0,0,0,0.06)] hover:border-[#D6B36A]/25 transition-shadow duration-400 text-center cursor-default overflow-hidden"
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* Huge background number */}
                    <span
                      className="absolute -top-2 -right-2 text-[130px] lg:text-[160px] font-serif font-black leading-none pointer-events-none select-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(214,179,106,0.08), rgba(214,179,106,0.02))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {pad(index + 1)}
                    </span>

                    {/* Glass icon container */}
                    <div className="w-[88px] h-[88px] mx-auto rounded-full bg-gradient-to-br from-[rgba(214,179,106,0.2)] to-[rgba(22,56,39,0.05)] backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner group-hover:shadow-[0_0_45px_rgba(214,179,106,0.15)] group-hover:scale-110 transition-all duration-500 relative z-[1]">
                      <Icon size={32} className="text-[#163827] group-hover:text-[#D6B36A] transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif-display text-xl lg:text-2xl font-bold text-[#18322A] mt-6 relative z-[1]">
                      {step.title}
                    </h3>
                    <p className="text-[#6C6C6C] text-sm font-light leading-relaxed mt-3 mx-auto relative z-[1]" style={{ maxWidth: '88%', lineHeight: '1.75' }}>
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* ─── Premium CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 lg:mt-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-2">
              <p className="text-[#163827] font-serif-display font-bold text-lg lg:text-xl leading-snug">
                Fresh Flowers Delivered Within Hours
              </p>
              <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
                <Link
                  to="/occasions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#163827] to-[#1f4a30] text-white text-[11px] font-bold tracking-[0.1em] uppercase hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(22,56,39,0.2)] hover:shadow-[0_8px_30px_rgba(22,56,39,0.3)] group"
                >
                  Explore Collection
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.5)] backdrop-blur-md border border-[rgba(214,179,106,0.3)] text-[#D6B36A] text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[rgba(214,179,106,0.06)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 group"
                >
                  How Delivery Works
                  <ArrowRight size={13} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </RevealSection>

      {/* ─── Why Choose Us ─── */}
      <RevealSection className="relative py-14 lg:py-16 bg-gradient-to-b from-[#FDFBF7] via-[#fcf8f2] to-[#FDFBF7] overflow-hidden">
        <FloatingDecoration type="petal5" side="left" top="15%" size={56} opacity={0.12} delay={1} duration={14} color="var(--color-accent)" />
        <FloatingDecoration type="leaf" side="right" top="25%" size={60} opacity={0.18} delay={0} duration={11} animation="sway2" color="var(--color-primary)" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="12%" size={42} opacity={0.1} delay={2.5} duration={13} animation="sway3" color="var(--color-gold)" />

        {/* Premium background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,179,106,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(214,179,106,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(214,179,106,0.02)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.012] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.02)] pointer-events-none" />

        {/* Ambient glow blobs */}
        <div className="absolute top-[-8%] left-[-3%] w-[600px] h-[600px] bg-[rgba(214,179,106,0.04)] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-8%] right-[-3%] w-[500px] h-[500px] bg-[rgba(214,179,106,0.03)] rounded-full blur-[120px] pointer-events-none" />

        {/* Floating animated particles */}
        <motion.div animate={{ y: [0, -18, 0], opacity: [0.15, 0.35, 0.15] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] right-[6%] w-2 h-2 rounded-full bg-[rgba(214,179,106,0.3)] blur-[1px] pointer-events-none" />
        <motion.div animate={{ y: [0, -24, 0], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[35%] left-[4%] w-1.5 h-1.5 rounded-full bg-[rgba(214,179,106,0.25)] blur-[2px] pointer-events-none" />
        <motion.div animate={{ y: [0, -14, 0], opacity: [0.12, 0.25, 0.12] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }} className="absolute bottom-[20%] right-[15%] w-1 h-1 rounded-full bg-[rgba(214,179,106,0.35)] blur-[1px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6">
          {/* ─── Heading Area ─── */}
          <div className="text-center mb-8 lg:mb-10 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-[rgba(214,179,106,0.04)] rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(214,179,106,0.1)] border border-[rgba(214,179,106,0.2)] text-[#D6B36A] text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B36A] animate-pulse" />
              Trusted by Thousands
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-black text-[#163827] leading-[1.06]"
            >
              Why Choose Us
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 mt-4 mb-3"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[rgba(214,179,106,0.4)] to-transparent" />
              <div className="w-2 h-2 rounded-full bg-[#D6B36A] shadow-[0_0_8px_rgba(214,179,106,0.3)]" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[rgba(214,179,106,0.4)] to-transparent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#6D6D6D] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
            >
              Delivering smiles and premium quality with every single delivery
            </motion.p>
          </div>

          {/* ─── Trust Numbers ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 lg:mb-10"
          >
            {[
              { target: 25, suffix: "K+", label: "Happy Customers", icon: Users },
              { target: 15, suffix: "+", label: "Years Legacy", icon: Award },
              { target: 99, suffix: "%", label: "Freshness Guarantee", icon: Leaf },
              { custom: "24/7", label: "Dedicated Support", icon: Clock },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={`trust-num-${i}`}
                  className="relative flex flex-col items-center justify-center gap-2 px-3 py-5 rounded-2xl bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.45)] shadow-[0_8px_25px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] group hover:border-[#D6B36A]/25 hover:shadow-[0_12px_35px_rgba(214,179,106,0.08)] transition-all duration-400"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[rgba(214,179,106,0.15)] to-[rgba(22,56,39,0.05)] backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(214,179,106,0.15)] transition-all duration-500">
                    <StatIcon size={16} className="text-[#D6B36A]" />
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    {stat.custom ? (
                      <span className="text-xl font-bold text-[#163827]">{stat.custom}</span>
                    ) : (
                      <span className="text-xl font-bold text-[#163827]">
                        <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] text-[#6D6D6D] font-semibold tracking-[0.1em] uppercase">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* ─── Feature Cards ─── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`why-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative bg-[rgba(255,255,255,0.55)] backdrop-blur-xl rounded-[24px] border border-[rgba(255,255,255,0.4)] shadow-[0_8px_25px_rgba(0,0,0,0.05),0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(214,179,106,0.12),0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#D6B36A]/25 transition-all duration-400 text-center overflow-hidden"
                >
                  {/* Gold top line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6B36A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="p-6 lg:p-7 relative z-[1]">
                    {/* Icon container */}
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[rgba(214,179,106,0.2)] to-[rgba(22,56,39,0.05)] backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner group-hover:shadow-[0_0_40px_rgba(214,179,106,0.15)] group-hover:scale-110 transition-all duration-500">
                      <Icon size={30} className="text-[#163827] group-hover:text-[#D6B36A] transition-colors duration-500" />
                    </div>
                    <h3 className="font-serif-display font-bold text-lg text-[#163827] mt-5">
                      {item.title}
                    </h3>
                    <p className="text-[#6D6D6D] text-sm mt-2 font-light leading-relaxed mx-auto" style={{ maxWidth: '85%' }}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ─── Statistics Strip ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 lg:mt-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 px-6 rounded-2xl bg-[rgba(255,255,255,0.55)] backdrop-blur-xl border border-[rgba(255,255,255,0.4)] shadow-[0_8px_25px_rgba(0,0,0,0.04),0_20px_60px_rgba(0,0,0,0.03)]">
              {[
                { icon: Star, value: "4.9/5", label: "Customer Rating" },
                { icon: Package, target: 25000, suffix: "+", label: "Happy Deliveries" },
                { icon: Award, target: 15, suffix: "+", label: "Years Experience" },
                { icon: Clock, target: 99, suffix: "%", label: "On-Time Delivery" },
                { icon: Flower2, target: 100, suffix: "%", label: "Fresh Flower Guarantee" },
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={`stat-${i}`} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[rgba(214,179,106,0.15)] to-[rgba(22,56,39,0.05)] backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0">
                      <StatIcon size={13} className="text-[#D6B36A]" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-0.5">
                        {stat.value ? (
                          <span className="text-sm font-bold text-[#163827]">{stat.value}</span>
                        ) : (
                          <span className="text-sm font-bold text-[#163827]">
                            <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                          </span>
                        )}
                      </div>
                      <p className="text-[9px] text-[#6D6D6D] font-medium">{stat.label}</p>
                    </div>
                    {i < 4 && <div className="hidden lg:block w-px h-7 bg-gradient-to-b from-[rgba(214,179,106,0.2)] via-[rgba(214,179,106,0.1)] to-transparent ml-1" />}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ─── Trust Badges ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5"
          >
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {["Handcrafted Daily", "Fresh From Farms", "Luxury Packaging", "Same Day Delivery", "Secure Payments", "Expert Florists"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[rgba(255,255,255,0.4)] backdrop-blur-sm border border-[rgba(255,255,255,0.3)] text-[#6D6D6D] text-[9px] font-semibold uppercase tracking-[0.08em] hover:border-[#D6B36A]/25 hover:bg-[rgba(214,179,106,0.04)] hover:text-[#18322A] transition-all duration-300"
                >
                  <CheckCircle2 size={10} className="text-[#D6B36A] shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ─── Premium CTA Panel ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 lg:mt-8"
          >
            <div className="relative max-w-3xl mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-[rgba(214,179,106,0.25)] to-[rgba(214,179,106,0.05)]">
              <div className="relative rounded-3xl bg-[rgba(255,255,255,0.65)] backdrop-blur-xl px-8 lg:px-12 py-9 lg:py-10 shadow-[0_20px_60px_rgba(0,0,0,0.06),0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_80px_rgba(214,179,106,0.08),0_12px_35px_rgba(0,0,0,0.05)] transition-shadow duration-500 text-center">
                {/* Decorative floral illustration */}
                <div className="absolute top-3 right-5 text-[rgba(214,179,106,0.08)] pointer-events-none">
                  <Flower2 size={48} className="rotate-12" />
                </div>
                <div className="absolute bottom-3 left-5 text-[rgba(22,56,39,0.04)] pointer-events-none rotate-45">
                  <Leaf size={36} />
                </div>

                <div className="relative">
                  <p className="text-[#163827] font-serif-display font-bold text-xl lg:text-2xl leading-snug">
                    Delivering Happiness Across Delhi NCR Since 2018
                  </p>
                  <p className="text-[#6D6D6D] text-sm mt-3 max-w-lg mx-auto font-light leading-relaxed">
                    Thousands of families trust Shivam Florist for life's most memorable celebrations.
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                    <Link
                      to="/occasions"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#163827] to-[#1f4a30] text-white text-xs font-bold tracking-[0.1em] uppercase hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_20px_rgba(22,56,39,0.25)] hover:shadow-[0_8px_30px_rgba(22,56,39,0.35)] group"
                    >
                      Explore Collection
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(214,179,106,0.35)] text-[#D6B36A] text-xs font-bold tracking-[0.1em] uppercase hover:bg-[rgba(214,179,106,0.08)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 group"
                    >
                      <Phone size={14} />
                      Call Florist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </RevealSection>

      {/* ─── Where Every Celebration Blooms ─── */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FDFBF8] via-[#fcf9f4] to-[#FDFBF8] overflow-hidden">
        {/* Premium background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,179,106,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(214,179,106,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Floating botanical silhouettes */}
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0], opacity: [0.04, 0.08, 0.04] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] right-[4%] w-24 h-24 pointer-events-none">
          <Flower2 size={96} className="text-[rgba(214,179,106,0.06)]" />
        </motion.div>
        <motion.div animate={{ y: [0, 12, 0], rotate: [0, -6, 0], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-[10%] left-[3%] w-20 h-20 pointer-events-none">
          <Leaf size={80} className="text-[rgba(22,56,39,0.04)] rotate-45" />
        </motion.div>

        {/* Golden sparkle particles */}
        <motion.div animate={{ opacity: [0, 0.15, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="absolute top-[20%] left-[12%] w-1 h-1 rounded-full bg-[#D6B36A] blur-[1px] pointer-events-none" />
        <motion.div animate={{ opacity: [0, 0.12, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 7, repeat: Infinity, delay: 3.5 }} className="absolute top-[40%] right-[15%] w-1 h-1 rounded-full bg-[#D6B36A] blur-[1px] pointer-events-none" />
        <motion.div animate={{ opacity: [0, 0.1, 0], scale: [0.5, 0.8, 0.5] }} transition={{ duration: 8, repeat: Infinity, delay: 6 }} className="absolute bottom-[25%] left-[25%] w-1 h-1 rounded-full bg-[#D6B36A] blur-[1px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6">
          {/* ─── Section Header ─── */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-14 h-px bg-gradient-to-r from-transparent via-[#D6B36A]/40 to-[#D6B36A]/70" />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.55)] backdrop-blur-md border border-[rgba(214,179,106,0.25)] text-[#D6B36A] text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#D6B36A]">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
              </svg>
              Curated Experiences
            </motion.span>
            <span className="w-14 h-px bg-gradient-to-l from-transparent via-[#D6B36A]/40 to-[#D6B36A]/70" />
          </div>

          <div className="text-center mb-12 lg:mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif-display font-black text-[#163827] leading-[1.06] tracking-tight"
            >
              Where Every Celebration{" "}
              <span className="relative">
                <span className="relative z-[1] italic font-light" style={{
                  background: 'linear-gradient(135deg, #D6B36A 0%, #c9a050 40%, #e4cc8a 70%, #D6B36A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(214,179,106,0.15))',
                }}>
                  Blooms
                </span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#6C6C6C] text-sm md:text-base mt-3 max-w-[700px] mx-auto font-light leading-relaxed"
            >
              From intimate gatherings to grand celebrations, every experience is crafted with unparalleled artistry and the finest blooms.
            </motion.p>
          </div>

          {/* ─── Cards Grid / Mobile Slider ─── */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none sm:overflow-visible pb-2 sm:pb-0">
            {[
              {
                title: "Grand Weddings",
                desc: "Opulent fresh floral canopies, stage backdrops & mandap arrangements for your dream celebration.",
                img: grandWeddingImg,
                badge: "Wedding",
                emoji: "💍",
                price: "₹15,000+",
              },
              {
                title: "Sacred Celebrations",
                desc: "Traditional venues and mandirs adorned beautifully with fresh seasonal blooms and marigold elegance.",
                img: sacredImg,
                badge: "Sacred",
                emoji: "🛕",
                price: "₹8,000+",
              },
              {
                title: "Luxury Events",
                desc: "Bespoke floral entrance structures, stage borders & centerpieces for five-star celebrations.",
                img: luxuryEventImg,
                badge: "Luxury",
                emoji: "🏨",
                price: "₹25,000+",
              },
              {
                title: "Birthday Experiences",
                desc: "Handcrafted floral arrangements designed to make every birthday unforgettable and picture-perfect.",
                img: birthdayExpImg,
                badge: "Birthday",
                emoji: "🎉",
                price: "₹5,000+",
              },
            ].map((occ, idx) => {
              const isHovered = expTiltIndex === idx;
              return (
                <div
                  key={`occ-${idx}`}
                  className="group relative aspect-[4/5] min-w-[75vw] sm:min-w-0 snap-start cursor-pointer"
                  onClick={() => navigate("/occasions")}
                >
                  {/* Card glass wrapper */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    animate={
                      isHovered
                        ? { rotateX: expTiltAngles.rotateX, rotateY: expTiltAngles.rotateY, transition: { duration: 0.15 } }
                        : { rotateX: 0, rotateY: 0, transition: { duration: 0.4, ease: "easeOut" } }
                    }
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseMove={(e) => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / rect.width;
                      const y = (e.clientY - rect.top) / rect.height;
                      setExpTiltIndex(idx);
                      setExpTiltAngles({ rotateX: (0.5 - y) * 8, rotateY: (x - 0.5) * 8 });
                    }}
                    onMouseLeave={() => {
                      setExpTiltIndex(null);
                      setExpTiltAngles({ rotateX: 0, rotateY: 0 });
                    }}
                    className="relative w-full h-full rounded-[30px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.05),0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(214,179,106,0.10),0_40px_80px_rgba(0,0,0,0.08)] transition-shadow duration-500"
                  >
                    {/* Glass backdrop */}
                    <div className="absolute inset-0 bg-[rgba(255,255,255,0.12)] backdrop-blur-xl border border-[rgba(255,255,255,0.18)] rounded-[30px] z-[1] pointer-events-none" />

                    {/* Image container (inset within glass border) */}
                    <div className="absolute inset-[2px] rounded-[28px] overflow-hidden z-[2]">
                      <img
                        src={occ.img}
                        alt={occ.title}
                        loading="lazy"
                        className="object-cover w-full h-full block group-hover:scale-[1.08] transition-transform duration-[700ms] ease-out group-hover:brightness-[1.05] group-hover:contrast-[1.03]"
                      />

                      {/* Cinematic gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent z-[1]" />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent z-[1] pointer-events-none" />

                      {/* Subtle glass reflection */}
                      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Golden shimmer sweep (every 8-10s) */}
                    <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -skew-x-12 animate-shimmer-sweep"
                        style={{ animationDelay: `${idx * 1.5}s` }}
                      />
                    </div>

                    {/* Category badge - top left */}
                    <div className="absolute top-4 left-4 z-[6]">
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + idx * 0.12 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(214,179,106,0.3)] text-white text-[9px] font-bold tracking-[0.15em] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.15)] group-hover:shadow-[0_0_20px_rgba(214,179,106,0.15)] group-hover:border-[#D6B36A]/50 transition-all duration-400"
                      >
                        <span className="text-xs">{occ.emoji}</span>
                        <span>{occ.badge}</span>
                      </motion.span>
                    </div>

                    {/* Gold corner highlights */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[rgba(214,179,106,0.1)] to-transparent rounded-bl-full z-[4] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[rgba(214,179,106,0.06)] to-transparent rounded-tr-full z-[4] pointer-events-none" />

                    {/* Expanding bottom gold line */}
                    <div className="absolute bottom-0 left-0 z-[6] h-[2px] bg-gradient-to-r from-[#D6B36A] to-[#e4cc8a] rounded-full w-[20%] group-hover:w-full transition-all duration-500 ease-out" />

                    {/* ─── Floating Glass Content Panel ─── */}
                    <div className="absolute bottom-3 left-3 right-3 z-[6] bg-[rgba(255,255,255,0.14)] backdrop-blur-xl border border-[rgba(255,255,255,0.18)] rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] group-hover:bg-[rgba(255,255,255,0.18)] group-hover:border-[rgba(214,179,106,0.2)] group-hover:shadow-[0_12px_40px_rgba(214,179,106,0.10)] transition-all duration-400">
                      {/* Gold accent line */}
                      <div className="w-10 h-[2px] bg-[#D6B36A] rounded-full mb-3" />

                      <h3 className="font-serif-display font-bold text-lg lg:text-xl text-white tracking-wide leading-snug">
                        {occ.title}
                      </h3>
                      <p className="text-[rgba(255,255,255,0.7)] text-xs mt-1.5 leading-relaxed font-light line-clamp-2">
                        {occ.desc}
                      </p>

                      {/* Hover-revealed content */}
                      <div className="mt-3 flex items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(214,179,106,0.12)] backdrop-blur-sm border border-[rgba(214,179,106,0.2)] text-[#D6B36A] text-[8px] font-bold tracking-[0.1em] uppercase">
                            <Clock size={9} />
                            Same Day
                          </span>
                          <span className="text-[rgba(255,255,255,0.5)] text-[10px] font-light italic">
                            {occ.price}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-white text-[10px] font-bold tracking-[0.1em] uppercase group-hover:gap-2 transition-all duration-300">
                          Explore
                          <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>

                    {/* Corner arrow indicator (visible on tap/mobile) */}
                    <div className="absolute top-4 right-4 z-[6] w-8 h-8 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 sm:hidden">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
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
