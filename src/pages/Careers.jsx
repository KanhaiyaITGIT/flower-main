import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Flower2,
  Bike,
  ClipboardList,
  Headphones,
  Palette,
  Code,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Star,
  MapPin,
  Briefcase,
} from "lucide-react";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB, WHATSAPP_LINK } from "../constants";

const positions = [
  { icon: Flower2, title: "Florist", desc: "Create beautiful floral arrangements for occasions, weddings, and corporate orders. Bring your creativity and passion for flowers.", location: "Delhi NCR" },
  { icon: Bike, title: "Delivery Executive", desc: "Deliver smiles across Delhi NCR. Timely, professional, and always with a positive attitude. Valid driving license required.", location: "Delhi NCR" },
  { icon: ClipboardList, title: "Operations", desc: "Manage orders, coordinate logistics, and ensure every arrangement reaches on time. Strong organizational skills are key.", location: "Delhi NCR" },
  { icon: Headphones, title: "Customer Support", desc: "Help customers with their orders, resolve queries, and ensure every experience is delightful. Great communication skills required.", location: "Remote / Delhi" },
  { icon: Palette, title: "Designer", desc: "Create stunning visual content for our website, social media, and marketing. Expertise in design tools and a strong portfolio required.", location: "Delhi NCR" },
  { icon: Code, title: "Web Developer", desc: "Build and maintain our digital presence. Work on our e-commerce platform, website, and internal tools. React experience preferred.", location: "Remote / Delhi" },
];

const Careers = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />

      <div className="relative">
        {/* ── HERO ──────────────────────────────────────── */}
        <section className="relative flex items-center overflow-hidden" style={{
          background: "linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)",
          minHeight: "75vh"
        }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
            background: "linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)"
          }} />
          <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "280px", height: "280px", borderRadius: "50%",
            background: "radial-gradient(circle,rgba(201,169,110,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

          <div className="inner hero-inner" style={{ width: "100%" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)] flex-shrink-0" style={{ animation: "pulseDot 2.4s ease-in-out infinite" }} />
                <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">
                  {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB} · Careers
                </span>
              </motion.div>

              <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp hero-h1 text-white max-w-[680px] mb-[22px] tracking-[-0.01em]">
                Join
                <br />
                <em className="dp gold-text" style={{ fontStyle: "italic" }}>
                  Our Team
                </em>
              </motion.h1>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="hero-sub text-white/50 leading-[1.75] max-w-[460px] mb-[36px] font-light">
                At {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}, we believe great work happens when passionate people come together. We're a design-first floral studio built on creativity, reliability, and a genuine love for what we do. If that sounds like you — we'd love to meet.
              </motion.p>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } }} className="hero-cta-row">
                <a href="#positions" className="cta-pri px-7 py-[14px]">
                  <Briefcase size={14} className="btn-icon" /> View Open Positions
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-ghost text-white px-6 py-[13px] text-[14px] border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                  <MessageCircle size={14} className="btn-icon" /> Chat with Us
                </a>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } } }} className="flex items-center gap-[10px] mt-7 flex-wrap">
                <div className="flex gap-[3px]">
                  {[...Array(5)].map((_, i) => <Star key={`car-star-${i}`} size={12} fill="#C9A15A" className="text-[var(--color-gold)]" />)}
                </div>
                <span className="text-white/35 text-[12px]">4.9 · A great place to grow</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ──────────────────────────────── */}
        <RevealSection id="positions" className="sp relative overflow-hidden" style={{
          background: "linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)"
        }}>
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
            background: "linear-gradient(90deg,transparent,rgba(201,169,110,0.5),transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{
            background: "linear-gradient(90deg,transparent,rgba(201,169,110,0.25),transparent)" }} />

          <div className="inner">
            <SectionHeading
              label="Open Positions"
              title="Careers at<br /><em class='dp gold-text' style='font-style:italic'>{BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}</em>"
              description="We're always looking for talented individuals who share our passion for flowers and craftsmanship."
              goldTitle
              dot
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="vals-grid"
            >
              {positions.map(({ icon: Icon, title, desc, location }, i) => (
                <motion.div
                  key={`car-position-${i}`}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  className="val-card rounded-[18px] p-[clamp(24px,4vw,36px)_clamp(20px,3vw,32px)] border transition-all duration-500 group hover:shadow-2xl hover:shadow-[var(--color-gold)]/5 hover:-translate-y-1 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(201,169,110,0.15)"
                  }}
                >
                  <div className="w-[48px] h-[48px] rounded-[18px] bg-white/5 backdrop-blur-md flex items-center justify-center mb-[18px] flex-shrink-0 shadow-lg" style={{
                    boxShadow: "0 8px 24px rgba(201,169,110,0.1)"
                  }}>
                    <Icon size={22} style={{ color: "#c9a96e" }} />
                  </div>
                  <div className="flex items-center gap-2 mb-[6px]">
                    <MapPin size={11} className="text-[var(--color-gold)]" />
                    <span className="text-[var(--color-gold)] text-[10px] font-bold tracking-[0.06em] uppercase">{location}</span>
                  </div>
                  <h3 className="dp text-[1.25rem] font-bold text-white mb-[10px]">
                    {title}
                  </h3>
                  <p className="text-white/40 text-[0.9rem] leading-[1.75] flex-1 mb-[18px]">{desc}</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-gold)] text-[11px] font-bold tracking-[0.1em] uppercase hover:gap-3 transition-all duration-300"
                  >
                    Apply Now <ArrowRight size={12} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </RevealSection>

        {/* ── CTA ────────────────────────────────────────── */}
        <section className="sp relative overflow-hidden" style={{
          background: "linear-gradient(135deg,#1a0f0a 0%,#2a1810 100%)"
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", opacity: 0.04, pointerEvents: "none",
            animation: "rotateSlow 80s linear infinite", width: "480px", height: "480px"
          }}>
            <svg width="480" height="480" viewBox="0 0 100 100">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => (
                <ellipse key={a} cx="50" cy="15" rx="8" ry="18" fill="#c9a96e" transform={`rotate(${a} 50 50)`} />
              ))}
            </svg>
          </div>

          <div className="inner-sm text-center relative">
            <div className="flex justify-center gap-[6px] mb-6">
              {[...Array(3)].map((_, i) => (
                <svg key={`car-petal-${i}`} width="15" height="15" viewBox="0 0 100 100" style={{ opacity: 0.85 }}>
                  {[0, 72, 144, 216, 288].map(a => (
                    <ellipse key={a} cx="50" cy="24" rx="9" ry="20" fill="#c9a96e" transform={`rotate(${a} 50 50)`} />
                  ))}
                  <circle cx="50" cy="50" r="7" fill="#f0d5a0" />
                </svg>
              ))}
            </div>

            <h2 className="dp cta-h2 font-bold text-white leading-[1.06] mb-[18px]">
              Don't see the right role?
              <br />
              <em className="dp gold-text" style={{ fontStyle: "italic" }}>
                Apply anyway.
              </em>
            </h2>
            <p className="text-white/45 text-[clamp(0.9rem,2.5vw,1rem)] leading-[1.75] max-w-[420px] mx-auto mb-9">
              We're always looking for talented people. Send us your resume and tell us why you'd be a great fit.
            </p>

            <div className="cta-row">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-pri px-7 py-[15px]">
                <MessageCircle size={15} className="btn-icon" /> Send Your Application
              </a>
              <a href={`tel:+919540849659`} className="cta-ghost text-white/60 px-6 py-[14px] text-[14px] border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-300">
                <ArrowRight size={14} className="btn-icon" /> Call Us
              </a>
            </div>

            <p className="text-white/20 text-[12px] mt-6">
              We respond within 10 minutes · Available 9 AM – 9 PM daily
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
