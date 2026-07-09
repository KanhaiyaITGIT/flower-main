import { Flower2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#14301F] to-[#0D1F0F] text-[#FBF6EF] font-inter border-t border-white/5 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/30 to-transparent" />
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16"
        >
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center gold-glow">
                <Flower2 size={18} className="text-[#C9A15A]" />
              </div>
              <h2 className="font-serif-display font-black text-lg md:text-xl text-[#FBF6EF] tracking-tight">
                {BUSINESS_NAME_MAIN} <span className="gold-gradient">{BUSINESS_NAME_SUB}</span>
              </h2>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
              Bringing fresh premium blooms, bespoke flower arrangements, and exquisite venue styling to Gurgaon and Delhi NCR. Same-day delivery available.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3.5">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C9A15A] border border-white/10 hover:border-[#C9A15A] hover:text-[#14301F] flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C9A15A] border border-white/10 hover:border-[#C9A15A] hover:text-[#14301F] flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A15A] mb-6">
              Information
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#C9A15A] transition-colors duration-200 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A15A] mb-6">
              Policies
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#C9A15A] transition-colors duration-200 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A15A] mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 font-light text-sm">
              <a
                href={`tel:${CONTACT_PHONE_1}`}
                className="text-gray-400 hover:text-[#C9A15A] flex items-center gap-3 transition-all duration-200 py-1 hover:translate-x-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base">📞</span> {CONTACT_PHONE_1}
              </a>
              <a
                href={`tel:${CONTACT_PHONE_2}`}
                className="text-gray-400 hover:text-[#C9A15A] flex items-center gap-3 transition-all duration-200 py-1 hover:translate-x-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base">📞</span> {CONTACT_PHONE_2}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C9A15A] flex items-center gap-3 transition-all duration-200 py-1 hover:translate-x-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base text-emerald-400">
                  <FaWhatsapp />
                </span>
                WhatsApp Support
              </a>
            </div>

            {/* Same Day Delivery Badge */}
            <div className="mt-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#C9A15A]/20 rounded-xl p-4 max-w-[220px] gold-glow">
              <p className="text-[10px] text-[#C9A15A] font-bold tracking-widest uppercase flex items-center gap-2">
                <span>🚚</span> Same-Day Delivery
              </p>
              <p className="text-xs text-gray-400 mt-1 font-light leading-snug">
                Gurgaon & NCR wide delivery available for orders placed before 4:00 PM.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-white/5 py-8 px-6 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/20 to-transparent" />
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 font-light flex items-center gap-1.5 justify-center">
            Crafted with <motion.span
              className="text-rose-400 inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >♥</motion.span> in India
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
