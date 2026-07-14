import { Flower2, Phone, ArrowRight, MapPin, Mail, ShieldCheck, CreditCard, Truck, Leaf } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaCcVisa, FaCcMastercard, FaCcPaypal, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BUSINESS_NAME_MAIN,
  BUSINESS_NAME_SUB,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
} from "../constants";

const infoLinks = [
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Occasions", path: "/occasions" },
  { name: "Decor", path: "/decor" },
];

const policyLinks = [
  { name: "Terms & Conditions", path: "#" },
  { name: "Privacy Policy", path: "#" },
  { name: "Shipping Policy", path: "#" },
  { name: "Refund Policy", path: "#" },
];

const categoryLinks = [
  { name: "Birthday", path: "/category?cat=Birthday" },
  { name: "Anniversary", path: "/category?cat=Anniversary" },
  { name: "Wedding", path: "/category?cat=Wedding" },
  { name: "Reception", path: "/category?cat=Reception" },
  { name: "Bouquets", path: "/category?cat=Bouquets" },
  { name: "Balloons", path: "/category?cat=Balloon" },
  { name: "Devotional", path: "/category?cat=Devotional" },
  { name: "Haldi", path: "/category?cat=Haldi" },
  { name: "Candles & More", path: "/category?cat=Candles+%26+More" },
];

const supportLinks = [
  { name: "Help Center", path: "#" },
  { name: "Track Order", path: "#" },
  { name: "Delivery Info", path: "#" },
  { name: "Bulk Orders", path: "#" },
  { name: "Careers", path: "#" },
  { name: "Become a Partner", path: "#" },
];

const storeLocations = [
  { name: "Gurgaon", address: "Sector 56, Gurugram" },
  { name: "Delhi", address: "Connaught Place, New Delhi" },
  { name: "Noida", address: "Sector 18, Noida" },
];

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  return (
    <footer className="footer-premium text-stone-300 pt-16 pb-0">
      {/* Ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A15A]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-rose-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* ─── Top Row: Brand + Quick Links Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="xl:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C9A15A]/20 to-[#C9A15A]/5 border border-[#C9A15A]/20 flex items-center justify-center shrink-0">
                <Flower2 size={20} className="text-[var(--color-gold)]" />
              </div>
              <div>
                <h2 className="font-serif-display text-white text-xl font-bold tracking-wide">
                  {BUSINESS_NAME_MAIN}
                </h2>
                <p className="text-[var(--color-gold)] text-[9px] font-semibold tracking-[0.2em] uppercase leading-tight">
                  {BUSINESS_NAME_SUB}
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed font-light max-w-xs mb-6">
              Bringing fresh premium blooms, bespoke flower arrangements, and exquisite venue styling to Delhi NCR. Same-day delivery available.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C9A15A] hover:bg-[#C9A15A] hover:text-black flex items-center justify-center text-stone-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(214,179,106,0.3)]"
                aria-label="Facebook">
                <FaFacebook size={16} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C9A15A] hover:bg-[#C9A15A] hover:text-black flex items-center justify-center text-stone-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(214,179,106,0.3)]"
                aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black flex items-center justify-center text-stone-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                aria-label="WhatsApp">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="footer-glass-card lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:p-0"
          >
            <motion.h3 variants={staggerItem} className="text-[#C9A15A] font-bold tracking-[0.15em] text-xs uppercase mb-5">
              Categories
            </motion.h3>
            <ul className="flex flex-col gap-2.5">
              {categoryLinks.map((item) => (
                <motion.li key={item.name} variants={staggerItem}>
                  <Link to={item.path} className="text-stone-400 hover:text-white text-sm font-light transition-all duration-200 block py-0.5 relative group w-fit">
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C9A15A] to-transparent group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="footer-glass-card lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:p-0"
          >
            <motion.h3 variants={staggerItem} className="text-[#C9A15A] font-bold tracking-[0.15em] text-xs uppercase mb-5">
              Quick Links
            </motion.h3>
            <ul className="flex flex-col gap-2.5">
              {infoLinks.map((item) => (
                <motion.li key={item.name} variants={staggerItem}>
                  <Link to={item.path} className="text-stone-400 hover:text-white text-sm font-light transition-all duration-200 block py-0.5 relative group w-fit">
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C9A15A] to-transparent group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="footer-glass-card lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:p-0"
          >
            <motion.h3 variants={staggerItem} className="text-[#C9A15A] font-bold tracking-[0.15em] text-xs uppercase mb-5">
              Support
            </motion.h3>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((item) => (
                <motion.li key={item.name} variants={staggerItem}>
                  <Link to={item.path} className="text-stone-400 hover:text-white text-sm font-light transition-all duration-200 block py-0.5 relative group w-fit">
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C9A15A] to-transparent group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Policies */}
            <motion.h3 variants={staggerItem} className="text-[#C9A15A] font-bold tracking-[0.15em] text-xs uppercase mt-6 mb-4">
              Policies
            </motion.h3>
            <ul className="flex flex-col gap-2.5">
              {policyLinks.map((item) => (
                <motion.li key={item.name} variants={staggerItem}>
                  <Link to={item.path} className="text-stone-400 hover:text-white text-sm font-light transition-all duration-200 block py-0.5 relative group w-fit">
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#C9A15A] to-transparent group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Contact Information */}
            <div className="footer-glass-card">
              <h3 className="text-[#C9A15A] font-bold tracking-[0.15em] text-xs uppercase mb-4">
                Contact Us
              </h3>
              <div className="flex flex-col gap-3">
                <a href={`tel:${CONTACT_PHONE_1}`} className="flex items-center gap-3 text-sm text-stone-300 hover:text-[#C9A15A] transition-colors py-1 group">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C9A15A] group-hover:bg-[#C9A15A]/10 transition-all duration-300">
                    <Phone size={13} className="text-stone-400 group-hover:text-[#C9A15A] transition-colors" />
                  </span>
                  <span className="font-light">{CONTACT_PHONE_1}</span>
                </a>
                <a href={`tel:${CONTACT_PHONE_2}`} className="flex items-center gap-3 text-sm text-stone-300 hover:text-[#C9A15A] transition-colors py-1 group">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#C9A15A] group-hover:bg-[#C9A15A]/10 transition-all duration-300">
                    <Phone size={13} className="text-stone-400 group-hover:text-[#C9A15A] transition-colors" />
                  </span>
                  <span className="font-light">{CONTACT_PHONE_2}</span>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-stone-300 hover:text-[#C9A15A] transition-colors py-1 group">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:border-[#C9A15A] group-hover:bg-[#C9A15A]/10 transition-all duration-300">
                    <FaWhatsapp size={14} />
                  </span>
                  <span className="font-light">WhatsApp Support</span>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="footer-glass-card">
              <h3 className="text-[#C9A15A] font-bold tracking-[0.15em] text-xs uppercase mb-3">
                Stay Inspired
              </h3>
              <p className="text-stone-400 text-xs font-light mb-4 leading-relaxed">
                Get exclusive offers, seasonal bloom alerts & styling tips.
              </p>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="newsletter-input pl-10"
                  />
                </div>
                <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#C9A15A] to-[#b08b49] flex items-center justify-center text-[#0a1a12] hover:shadow-[0_8px_24px_rgba(201,161,90,0.25)] transition-all duration-300 shrink-0 hover:scale-105 active:scale-95">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Middle Section: Trust Badges + Store Locations ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {/* Same Day Delivery Badge */}
          <div className="footer-glass-card relative overflow-hidden group hover:border-[#C9A15A]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A15A]/[0.03] to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C9A15A] to-[#b08b49]" />
            <div className="flex items-start gap-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#C9A15A]/10 border border-[#C9A15A]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Truck size={18} className="text-[var(--color-gold)]" />
              </div>
              <div>
                <p className="text-[var(--color-gold)] text-xs font-bold tracking-wider uppercase mb-1">Same-Day Delivery</p>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  Gurgaon & NCR wide delivery available for orders placed before 4:00 PM.
                </p>
              </div>
            </div>
          </div>

          {/* Fresh Flower Guarantee */}
          <div className="footer-glass-card relative overflow-hidden group hover:border-[#C9A15A]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-500 to-emerald-400" />
            <div className="flex items-start gap-3 relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Leaf size={18} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-emerald-400 text-xs font-bold tracking-wider uppercase mb-1">Fresh Flower Guarantee</p>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  Handpicked fresh every morning. If not satisfied, we replace it free.
                </p>
              </div>
            </div>
          </div>

          {/* Store Locations */}
          <div className="footer-glass-card relative overflow-hidden group hover:border-[#C9A15A]/20">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-rose-400 to-rose-300" />
            <div className="flex items-start gap-3 relative">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-rose-400" />
              </div>
              <div>
                <p className="text-rose-400 text-xs font-bold tracking-wider uppercase mb-1">Our Locations</p>
                <div className="flex flex-col gap-0.5">
                  {storeLocations.map((loc) => (
                    <p key={loc.name} className="text-stone-400 text-xs font-light">
                      <span className="text-stone-300 font-medium">{loc.name}</span> — {loc.address}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Payment Methods Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
        >
          <div className="flex items-center gap-4">
            <span className="text-stone-500 text-[10px] font-semibold tracking-wider uppercase">Secure Payments</span>
            <div className="flex items-center gap-3">
              <ShieldCheck size={16} className="text-emerald-400" />
              <div className="flex items-center gap-2 text-stone-400">
                <FaCcVisa size={22} />
                <FaCcMastercard size={22} />
                <FaRupeeSign size={16} />
                <FaCcPaypal size={22} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-stone-500 text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            <span>256-bit SSL Encrypted</span>
            <span className="text-stone-600">·</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            <span>100% Secure Checkout</span>
          </div>
        </motion.div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 relative"
      >
        {/* Gold accent divider */}
        <div className="relative mb-6 px-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.05]" />
          </div>
          <div className="relative flex justify-center">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C9A15A]/40 to-transparent" />
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-500 tracking-wider font-light">
              © {new Date().getFullYear()} <span className="text-stone-400">{BUSINESS_NAME_MAIN}</span> <span className="text-[#C9A15A]">{BUSINESS_NAME_SUB}</span>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-stone-500">
              <Link to="#" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
              <span className="text-stone-600">·</span>
              <Link to="#" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
              <span className="text-stone-600">·</span>
              <Link to="#" className="hover:text-stone-300 transition-colors">Refund Policy</Link>
            </div>
            <p className="text-xs text-stone-500 tracking-wider font-light flex items-center gap-1.5 justify-center">
              Made with <motion.span
                className="text-rose-400 inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >♥</motion.span> in India
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
