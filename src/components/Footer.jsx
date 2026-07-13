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
    <footer className="bg-gradient-to-b from-[#04120E] via-[#061A14] to-[#030E0B] text-stone-300 pt-20 pb-8 relative overflow-hidden border-t border-white/[0.04]">
      {/* Ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A15A]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/30 to-transparent" />
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
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
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Flower2 size={18} className="text-[var(--color-gold)]" />
              </div>
              <h2 className="font-serif text-white text-2xl font-light tracking-wide">
                {BUSINESS_NAME_MAIN} <span className="text-[var(--color-gold)]">{BUSINESS_NAME_SUB}</span>
              </h2>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed font-light max-w-sm">
              Bringing fresh premium blooms, bespoke flower arrangements, and exquisite venue styling to Gurgaon and Delhi NCR. Same-day delivery available.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#C9A15A] hover:bg-[#C9A15A] hover:text-black flex items-center justify-center text-stone-300 transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#C9A15A] hover:bg-[#C9A15A] hover:text-black flex items-center justify-center text-stone-300 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-[#C9A15A] font-semibold tracking-[0.2em] text-xs uppercase mb-6">
              Information
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-stone-400 hover:text-white text-sm font-light transition-colors duration-200 block py-1.5 relative group"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-[#C9A15A] font-semibold tracking-[0.2em] text-xs uppercase mb-6">
              Policies
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-stone-400 hover:text-white text-sm font-light transition-colors duration-200 block py-1.5 relative group"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[#C9A15A] font-semibold tracking-[0.2em] text-xs uppercase mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 font-light text-sm">
              <a
                href={`tel:${CONTACT_PHONE_1}`}
                className="flex items-center gap-3 text-sm text-stone-300 hover:text-[#C9A15A] transition-colors py-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base">📞</span> {CONTACT_PHONE_1}
              </a>
              <a
                href={`tel:${CONTACT_PHONE_2}`}
                className="flex items-center gap-3 text-sm text-stone-300 hover:text-[#C9A15A] transition-colors py-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base">📞</span> {CONTACT_PHONE_2}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-stone-300 hover:text-[#C9A15A] transition-colors py-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base text-emerald-400">
                  <FaWhatsapp />
                </span>
                WhatsApp Support
              </a>
            </div>

            {/* Same Day Delivery Badge */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 mt-6 shadow-inner relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C9A15A] to-[#b08b49]" />
              <p className="text-[10px] text-[var(--color-gold)] font-bold tracking-widest uppercase flex items-center gap-2 relative">
                <span>🚚</span> Same-Day Delivery
              </p>
              <p className="text-xs text-stone-400 mt-1 font-light leading-snug relative">
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
        className="border-t border-white/[0.05] mt-16 pt-8 px-6 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/20 to-transparent" />
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500 tracking-wider font-light">
            © {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}. All Rights Reserved.
          </p>
          <p className="text-xs text-stone-500 tracking-wider font-light flex items-center gap-1.5 justify-center">
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
