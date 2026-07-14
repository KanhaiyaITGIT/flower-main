import { useState } from "react";
import {
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
  Clock,
  Phone,
  MessageCircle,
  Star,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";
import { WHATSAPP_LINK } from "../constants";
import AnimatedCounter from "../components/ui/AnimatedCounter";

// ─── Data ─────────────────────────────────────────
const values = [
  { icon: Leaf,     title: "Farm Fresh, Always",     desc: "We forecast demand and source daily — so every stem arrives the same day it's cut. Zero day-old inventory, ever.", color: "#34d399", bg: "#f0fdf9" },
  { icon: Heart,    title: "Design-Led Thinking",    desc: "Flowers aren't filler. Every arrangement is intentional — colour, form, and occasion considered from the first stem.", color: "#e8667a", bg: "#fdf2f4" },
  { icon: Clock,    title: "Reliable to the Hour",   desc: "Same-day delivery, real-time updates, and a team that picks up the phone. Gifting should be joyful, not stressful.", color: "#c9a96e", bg: "#fdf8f0" },
  { icon: Sparkles, title: "Made to Order",          desc: "No warehouse blooms. Every bouquet and décor setup is handcrafted when you order — for you, not for a shelf.", color: "#a78bfa", bg: "#f5f3ff" },
];

const milestones = [
  { year: "2022", title: "Founded", desc: "Started with one van, one vendor, and one promise — flowers that feel personal. A small studio with a big vision.", color: "#e8667a" },
  { year: "2023", title: "Décor Division Launched", desc: "Wedding and event floristry added. Our first full mandap setup led to 40 bookings in the same month.", color: "#c9a96e" },
  { year: "2024", title: "Subscription Model", desc: "Weekly fresh flower subscriptions launched. Homes across the city started waking up to new blooms every Monday.", color: "#a78bfa" },
  { year: "2025", title: "Corporate Gifting", desc: "Bulk and branded floristry for offices, launches, and teams — bringing freshness to the boardroom.", color: "#34d399" },
  { year: "2026", title: "Design Studio", desc: "Full-service floral design studio opened — from concept mood boards to day-of execution for premium events.", color: "#c9a96e" },
];

const team = [
  { name: "anuj",  role: "Founder & Creative Director", detail: "10+ years in floral design. Every arrangement carries her eye for colour and composition.", initials: "PT", accent: "#e8667a" },
  { name: "Amit",   role: "Founder & Operations",        detail: "Built the logistics backbone that makes same-day delivery feel effortless.", initials: "AT", accent: "#c9a96e" },
  { name: "lorem",     role: "Head of Décor",                  detail: "Led 200+ wedding and event setups. She reads a space and sees what it wants to become.", initials: "RS", accent: "#a78bfa" },
  { name: "Kkkkk",     role: "Supply & Freshness Lead",        detail: "Former horticulturist. He's the reason every petal arrives at peak bloom.", initials: "KM", accent: "#34d399" },
];

const stats = [
  { value: 500,   suffix: "+",   label: "Events Decorated" },
  { value: 1200, suffix: "+",   label: "Bouquets Delivered" },
  { value: 4.9,   suffix: "★",  label: "Average Rating" },
  { value: 4,     suffix: " yrs", label: "Of Freshness" },
];

const testimonials = [
  { text: "The flowers arrived hours before the wedding and looked as though they'd just been picked. Every guest commented on them.", name: "Meera S.", occasion: "Wedding client", rating: 5 },
  { text: "I've tried four florists in two years. BMF is the only one that actually delivers what they show in the photos — every single time.", name: "Rohan K.", occasion: "Monthly subscriber", rating: 5 },
  { text: "Our office wanted something warm and thoughtful for Diwali gifting. They handled 80 arrangements without a single complaint.", name: "Priya M.", occasion: "Corporate client", rating: 5 },
];

// ─── Component ────────────────────────────────────
const AboutUs = () => {

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />

      <div className="relative">     
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <FloatingDecoration type="leaf" side="left" top="4%" size={28} opacity={0.1} delay={0} duration={14} animation="sway3" color="#d1bca8" />
          <FloatingDecoration type="petal6" side="right" top="3%" size={24} opacity={0.1} delay={1.2} duration={13} animation="sway2" color="#d1bca8" />
          <FloatingDecoration type="petal5" side="left" bottom="8%" size={32} opacity={0.1} delay={0.5} duration={12} animation="sway1" color="#d1bca8" />
          <FloatingDecoration type="petal" side="right" bottom="6%" size={22} opacity={0.1} delay={1.8} duration={15} animation="sway2" color="#d1bca8" />
        </div>
        <section className="relative flex items-center overflow-hidden" style={{
          background: "linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)",
          minHeight: "85vh"
        }}>
          {/* Gold left bar */}
          <div style={{
            position:"absolute",left:0,top:0,bottom:0,width:"3px",
            background:"linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)"
          }} />

          {/* Bokeh light elements */}
          <BokehLights spots={[
            { color: "from-rose-400/15 to-transparent", size: 300, top: "-8%", right: "-5%", anim: "bk-drift1", delay: 0, duration: 30 },
            { color: "from-amber-300/12 to-transparent", size: 260, bottom: "-10%", left: "5%", anim: "bk-drift2", delay: 2, duration: 35 },
            { color: "from-purple-400/10 to-transparent", size: 240, top: "40%", left: "30%", anim: "bk-float", delay: 4, duration: 28 },
            { color: "from-pink-400/12 to-transparent", size: 220, top: "15%", left: "45%", anim: "bk-drift3", delay: 1, duration: 32 },
          ]} />
          {/* Floating decorative elements */}
          <FloatingDecoration type="petal5" side="right" top="12%" size={90} opacity={0.13} delay={0} duration={12} color="#C9A15A" />
          <FloatingDecoration type="petal6" side="right" top="auto" bottom="18%" size={60} opacity={0.08} delay={1.5} duration={10} animation="sway2" color="#e8667a" />
          <FloatingDecoration type="leaf" side="left" top="20%" size={55} opacity={0.1} delay={2} duration={14} animation="sway3" color="#C9A15A" />
          <FloatingDecoration type="petal" side="left" top="auto" bottom="12%" size={42} opacity={0.12} delay={0.5} duration={11} animation="sway2" color="#e8667a" />

          <div className="inner hero-inner" style={{ width:"100%" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* Eyebrow */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)] flex-shrink-0" style={{
                  animation:"pulseDot 2.4s ease-in-out infinite"
                }}/>
                <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">
                  Shivam Florist · Est. 2022
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp hero-h1 text-white max-w-[680px] mb-[22px] tracking-[-0.01em]">
                Flowers as
                <br/>
                <em className="dp gold-text" style={{fontStyle:"italic"}}>
                  intentional as you.
                </em>
              </motion.h1>

              {/* Sub */}
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="hero-sub text-white/50 leading-[1.75] max-w-[460px] mb-[36px] font-light">
                We're a design-first floral studio. Built to make flowers feel less like an afterthought and more like the whole point.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } }} className="hero-cta-row">
                <a href="/decor" className="cta-pri px-7 py-[14px]">
                  <Sparkles size={14} className="btn-icon"/> See Our Work
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="cta-ghost text-white px-6 py-[13px] text-[14px] border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <MessageCircle size={14} className="btn-icon"/> Chat with Us
                </a>
              </motion.div>

              {/* Stars */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } } }} className="flex items-center gap-[10px] mt-7 flex-wrap">
                <div className="flex gap-[3px]">
                  {[...Array(5)].map((_,i)=><Star key={`about-star-${i}`} size={12} fill="#C9A15A" className="text-[var(--color-gold)]"/>)}
                </div>
                <span className="text-white/35 text-[12px]">4.9 · 800+ happy customers</span>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* ── STATS STRIP ──────────────────────────────── */}
        <section className="relative overflow-hidden" style={{
          background:"linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)"
        }}>
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{
            background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.5),rgba(232,102,122,0.35),rgba(201,169,110,0.5),transparent)"}}/>
          <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{
            background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.25),transparent)"}}/>
          {/* center glow */}
          <BokehLights spots={[
            { color: "from-amber-300/10 to-transparent", size: 320, top: "50%", left: "50%", anim: "bk-float", delay: 0, duration: 25 },
            { color: "from-rose-400/8 to-transparent", size: 240, top: "-8%", right: "10%", anim: "bk-drift1", delay: 2, duration: 30 },
            { color: "from-violet-400/6 to-transparent", size: 200, bottom: "-6%", left: "15%", anim: "bk-drift2", delay: 4, duration: 28 },
          ]} />

          <div className="inner stats-wrap px-6">
            {stats.map(({value,suffix,label},i)=>(
              <div key={`about-stat-${i}`} className={`text-center p-[clamp(1.6rem,4vw,2.4rem)] px-3 ${i<3 ? "border-r border-white/5" : ""}`}>
                <div className="dp text-[clamp(1.8rem,5vw,2.7rem)] font-bold leading-none mb-2 bg-gradient-to-b from-[#f0d5a0] via-[#C9A15A] to-[#a07840] bg-clip-text text-transparent">
                  <AnimatedCounter target={value} suffix={suffix}/>
                </div>
                <div className="text-white/35 text-[10px] font-bold tracking-[0.16em] uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STORY ────────────────────────────────────── */}
        <section className="sp relative overflow-hidden bg-[#faf7f2]">
          <FloatingDecoration type="rose" side="left" top="6%" size={44} opacity={0.07} delay={0} duration={16} animation="breathe" color="#e8667a" />
          <FloatingDecoration type="lotus" side="right" top="8%" size={48} opacity={0.06} delay={1.5} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="petal6" side="left" top="auto" bottom="8%" size={36} opacity={0.08} delay={3} duration={14} animation="sway3" color="#C9A15A" />
          <div className="inner">
            {/* Section label */}
            <div className="flex items-center gap-[14px] mb-[52px]">
              <div className="h-[1px] w-[36px] bg-[#e8667a]"/>
              <span className="text-[#e8667a] text-[11px] font-bold tracking-[0.2em] uppercase">
                Our Story
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="story-grid"
            >
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="dp story-h2 font-bold text-[#1a0f0a] leading-[1.06] mb-7 tracking-[-0.01em]">
                  We started because
                  <br/>
                  <em className="dp" style={{color:"#c9a96e",fontStyle:"italic"}}>
                    flowers deserved better.
                  </em>
                </h2>

                {/* Pull quote */}
                <div className="border-l-[3px] border-[#e8667a] pl-5 mb-7">
                  <p className="text-[#6b4c3b] text-[1.02rem] leading-[1.7] italic">
                    "India's flower market wastes nearly 30% of its produce daily. We set out to fix that — and make something beautiful in the process."
                  </p>
                  <p className="text-[var(--color-gold)] text-[12px] font-bold mt-[10px] tracking-[0.08em]">
                    — SHIVAM, Founder
                  </p>
                </div>

                {/* Ornament */}
                <div className="flex gap-[6px] items-center">
                  {["#e8667a","#c9a96e","#e8667a"].map((c,i)=>(
                    <svg key={`about-ornament-${i}`} width="18" height="18" viewBox="0 0 100 100" style={{opacity:0.75}}>
                      {[0,72,144,216,288].map(a=>(
                        <ellipse key={a} cx="50" cy="25" rx="10" ry="20" fill={c} transform={`rotate(${a} 50 50)`}/>
                      ))}
                      <circle cx="50" cy="50" r="6" fill={c}/>
                    </svg>
                  ))}
                </div>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-1"
              >
                <p className="text-[#7a5c4f] text-[1rem] leading-[1.8] mb-[18px]">
                  Shivam Florist was started in 2022 by SHIVAM. The idea was disarmingly simple: what if flowers actually arrived the day they were cut, arranged by someone who cared, and delivered like they mattered?
                </p>
                <p className="text-[#7a5c4f] text-[1rem] leading-[1.8] mb-[18px]">
                  India's floriculture system is traditionally fragmented and waste-heavy. Most shops work on next-day inventory, not today's farm output. We built the opposite — a demand-first, design-first model that sources every morning and delivers every afternoon.
                </p>
                <p className="text-[#7a5c4f] text-[1rem] leading-[1.8]">
                  What started as a delivery business became a design studio. Today we do everyday gifting, event décor, corporate arrangements, and wedding floristry — all under one roof, all with the same promise: fresh, intentional, on time.
                </p>

                <div className="mt-7 flex flex-wrap gap-[10px]">
                  {["Farm-to-door freshness","Design-led always","India's first farm-direct model"].map((tag,i)=>(
                    <span key={`about-tag-${i}`} className="bg-white border border-[#e8d5c0] text-[#9a6b4b] rounded-[18px] px-4 py-[6px] text-[12px] font-semibold">
                      ✓ {tag}
                    </span>
                  ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

        {/* ── VALUES ───────────────────────────────────── */}
        <section className="sp relative overflow-hidden bg-white">
          <FloatingDecoration type="lotus" side="left" top="5%" size={52} opacity={0.08} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="petal6" side="left" top="28%" size={55} opacity={0.1} delay={1.5} duration={13} animation="sway2" color="#C9A15A" />
          <FloatingDecoration type="rose" side="right" top="8%" size={48} opacity={0.08} delay={0.8} duration={16} animation="bloom" color="#e8667a" />
          <FloatingDecoration type="petal5" side="right" top="35%" size={50} opacity={0.08} delay={2.5} duration={14} color="#e8667a" />
          <FloatingDecoration type="leaf" side="left" top="auto" bottom="8%" size={44} opacity={0.12} delay={1} duration={11} animation="sway3" color="#14301F" />
          <div className="inner">
            <div className="text-center mb-[52px]">
              <div className="flex justify-center items-center gap-[14px] mb-[14px]">
                <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
                <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">
                  What We Stand For
                </span>
                <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
              </div>
              <h2 className="dp vals-h2 font-bold text-[#1a0f0a] leading-[1.1] mb-[14px]">
                Four things we
                <em className="dp text-[#e8667a] italic"> never compromise.</em>
              </h2>
              <p className="text-[#9a7c6f] text-[0.93rem] max-w-[380px] mx-auto leading-[1.7]">
                These aren't marketing lines. They're the decisions we make before sunrise every morning.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="vals-grid"
            >
              {values.map(({icon:Icon,title,desc,color,bg},i)=>(
                <div key={`about-value-${i}`} className="val-card rounded-[18px] p-[clamp(24px,4vw,36px)_clamp(20px,3vw,32px)] border transition-all duration-500 group hover:shadow-2xl hover:shadow-[var(--color-gold)]/5 hover:-translate-y-1" style={{
                  background:`linear-gradient(135deg,${bg},rgba(255,255,255,0.95))`,
                  borderColor:`${color}33`
                }}>
                  <div className="w-[48px] h-[48px] rounded-[18px] bg-white/80 backdrop-blur-md flex items-center justify-center mb-[18px] flex-shrink-0 shadow-lg" style={{
                    boxShadow:`0 8px 24px ${color}22`
                  }}>
                    <Icon size={22} style={{color}}/>
                  </div>
                  <h3 className="dp text-[1.45rem] font-bold text-[#1a0f0a] mb-[10px]">
                    {title}
                  </h3>
                  <p className="text-[#8a6e63] text-[0.9rem] leading-[1.75]">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────── */}
        <section className="sp relative overflow-hidden bg-[#faf7f2]">
          <FloatingDecoration type="lotus" side="left" top="8%" size={52} opacity={0.07} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="rose" side="right" top="12%" size={44} opacity={0.06} delay={1.5} duration={16} animation="breathe" color="#e8667a" />
          <FloatingDecoration type="petal5" side="right" top="auto" bottom="10%" size={40} opacity={0.08} delay={3} duration={14} animation="sway3" color="#C9A15A" />
          <div className="inner">
            <div className="text-center mb-[48px]">
              <div className="flex justify-center items-center gap-[14px] mb-[14px]">
                <div className="h-[1px] w-[28px] bg-[#e8667a]"/>
                <span className="text-[#e8667a] text-[11px] font-bold tracking-[0.2em] uppercase">
                  What Clients Say
                </span>
                <div className="h-[1px] w-[28px] bg-[#e8667a]"/>
              </div>
              <h2 className="dp text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#1a0f0a] leading-[1.1]">
                Words from
                <em className="dp text-[var(--color-gold)] italic"> real celebrations.</em>
              </h2>
            </div>

            <div className="testi-grid">
              {testimonials.map(({text,name,occasion,rating},i)=>(
                <div key={`about-testimonial-${i}`} className="rounded-[18px] p-[clamp(22px,3vw,32px)] flex flex-col gap-[14px] transition-all duration-500 hover:shadow-xl hover:-translate-y-1" style={{
                  background:"rgba(255,255,255,0.72)",
                  backdropFilter:"blur(16px) saturate(1.3)",
                  WebkitBackdropFilter:"blur(16px) saturate(1.3)",
                  border:"1px solid rgba(255,255,255,0.6)"
                }}>
                  {/* Stars */}
                  <div className="flex gap-[3px]">
                    {[...Array(rating)].map((_,j)=>(
                      <Star key={`about-testi-star-${j}`} size={13} fill="#C9A15A" className="text-[var(--color-gold)]"/>
                    ))}
                  </div>
                  {/* Quote icon */}
                  <Quote size={22} className="text-[#e8667a] opacity-40"/>
                  <p className="text-[#6b4c3b] text-[0.92rem] leading-[1.75] flex-1 italic">
                    {text}
                  </p>
                  <div className="border-t border-white/60 pt-[14px]">
                    <p className="font-bold text-[#1a0f0a] text-[14px]">{name}</p>
                    <p className="text-[var(--color-gold)] text-[11px] font-semibold tracking-[0.06em] uppercase">
                      {occasion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────── */}
        <section className="sp relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaf5] to-white">
          <FloatingDecoration type="rose" side="right" top="8%" size={48} opacity={0.06} delay={0} duration={18} animation="bloom" color="#C9A15A" />
          <FloatingDecoration type="lotus" side="left" top="auto" bottom="10%" size={44} opacity={0.05} delay={2} duration={16} animation="drift-bloom" color="#e8667a" />
          <div className="inner-md">
            <div className="text-center mb-[56px]">
              <div className="flex justify-center items-center gap-[14px] mb-[14px]">
                <div className="h-[1px] w-[26px] bg-[var(--color-gold)]"/>
                <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">
                  Our Journey
                </span>
                <div className="h-[1px] w-[26px] bg-[var(--color-gold)]"/>
              </div>
              <h2 className="dp text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#1a0f0a] leading-[1.1]">
                Rooted in craft,
                <br/>
                <em className="dp text-[var(--color-gold)] italic">growing every season.</em>
              </h2>
            </div>

            <div className="tl-wrap">
              <div className="tl-line !bg-gradient-to-b from-[var(--color-gold)]/50 via-[var(--color-gold)]/20 to-transparent"/>
              <div className="flex flex-col gap-11">
                {milestones.map(({year,title,desc,color},i)=>(
                  <div key={`about-milestone-${i}`} className="relative group">
                    {/* Dot */}
                    <div className="tl-dot absolute left-[-38px] top-[5px] w-[14px] h-[14px] rounded-full z-10 flex-shrink-0 transition-all duration-300 group-hover:scale-[1.4]" style={{
                      background:`linear-gradient(135deg,${color},${color}cc)`,
                      border:"3px solid #fff",
                      boxShadow:`0 0 0 3px ${color}44, 0 4px 12px ${color}33`
                    }}/>
                    <span className="inline-block text-[11px] font-bold tracking-[0.1em] rounded-[18px] px-3 py-[3px] mb-2 transition-all duration-300 group-hover:scale-[1.05]" style={{
                      background:`${color}18`,
                      color:color
                    }}>{year}</span>
                    <h3 className="dp text-[1.3rem] font-bold text-[#1a0f0a] mb-[6px] group-hover:translate-x-1 transition-transform duration-300">
                      {title}
                    </h3>
                    <p className="text-[#8a6e63] text-[0.9rem] leading-[1.7] max-w-[500px]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ─────────────────────────────────────── */}
        <section className="sp relative overflow-hidden bg-[#1a0f0a]">
          <BokehLights spots={[
            { color: "from-rose-400/12 to-transparent", size: 280, top: "-6%", right: "-4%", anim: "bk-drift1", delay: 0, duration: 30 },
            { color: "from-amber-300/10 to-transparent", size: 240, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 32 },
            { color: "from-purple-400/8 to-transparent", size: 200, top: "35%", left: "40%", anim: "bk-float", delay: 1, duration: 28 },
            { color: "from-pink-400/10 to-transparent", size: 220, top: "10%", left: "50%", anim: "bk-drift2", delay: 2, duration: 35 },
          ]} />
          <FloatingDecoration type="petal5" side="left" top="8%" size={64} opacity={0.08} delay={0} duration={15} color="#C9A15A" />
          <FloatingDecoration type="petal6" side="right" top="12%" size={52} opacity={0.06} delay={1.5} duration={13} animation="sway2" color="#e8667a" />
          <FloatingDecoration type="leaf" side="right" top="auto" bottom="10%" size={48} opacity={0.1} delay={2} duration={12} animation="sway3" color="#C9A15A" />
          {/* Ambient glows */}
          <div style={{position:"absolute",top:"-80px",right:"-80px",width:"360px",height:"360px",borderRadius:"50%",
            background:"radial-gradient(circle,rgba(201,169,110,0.09) 0%,transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",bottom:"-60px",left:"-60px",width:"280px",height:"280px",borderRadius:"50%",
            background:"radial-gradient(circle,rgba(232,102,122,0.07) 0%,transparent 70%)",pointerEvents:"none"}}/>

          <div className="inner relative">
            <div className="text-center mb-[52px]">
              <div className="flex justify-center items-center gap-[14px] mb-[14px]">
                <div className="h-[1px] w-[26px] bg-[var(--color-gold)] opacity-60"/>
                <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">
                  The Minds Behind It
                </span>
                <div className="h-[1px] w-[26px] bg-[var(--color-gold)] opacity-60"/>
              </div>
              <h2 className="dp team-h2 font-bold text-white leading-[1.1] mb-[14px]">
                People who care
                <br/>
                <em className="dp gold-text italic">about every petal.</em>
              </h2>
              <p className="text-white/40 text-[0.93rem] max-w-[340px] mx-auto leading-[1.7]">
                A small team with deep craft. Each person owns their domain completely.
              </p>
            </div>

            <div className="team-grid">
              {team.map(({name,role,detail,initials,accent},i)=>(
                <div key={`about-team-${i}`} className="tm-card rounded-[18px] p-[clamp(22px,3vw,32px)_clamp(18px,2vw,24px)] text-center transition-all duration-500 group hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl" style={{
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)"
                }}>
                  <div className="tm-avatar w-[68px] h-[68px] rounded-full flex items-center justify-center mx-auto mb-[14px] text-[1.25rem] font-bold font-cormorant transition-all duration-500 group-hover:scale-[1.1] group-hover:shadow-lg" style={{
                    background:`linear-gradient(135deg,${accent}33,${accent}66)`,
                    border:`2px solid ${accent}55`,
                    color:accent
                  }}>{initials}</div>
                  <h3 className="text-white text-[0.97rem] font-bold mb-1">{name}</h3>
                  <p className="text-[10px] font-bold tracking-[0.07em] mb-3 uppercase" style={{color:accent}}>{role}</p>
                  <p className="text-white/40 text-[0.82rem] leading-[1.65]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION + VISION ─────────────────────────── */}
        <section className="sp relative overflow-hidden bg-[#faf7f2]">
          <FloatingDecoration type="lotus" side="right" top="8%" size={52} opacity={0.06} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="rose" side="left" top="auto" bottom="10%" size={44} opacity={0.05} delay={2} duration={16} animation="breathe" color="#e8667a" />
          <div className="inner">
            <div className="mv-grid">
              {/* Mission */}
              <div className="relative overflow-hidden rounded-[18px] p-[clamp(32px,5vw,48px)_clamp(24px,4vw,40px)] bg-[#1a0f0a] shadow-xl">
                <div className="absolute top-[-24px] right-[-24px] opacity-[0.07] pointer-events-none">
                  <svg width="150" height="150" viewBox="0 0 100 100">
                    {[0,72,144,216,288].map(a=>(
                      <ellipse key={a} cx="50" cy="20" rx="12" ry="24" fill="#e8667a" transform={`rotate(${a} 50 50)`}/>
                    ))}
                  </svg>
                </div>
                <div className="inline-block bg-[#e8667a]/15 text-[#e8667a] text-[10px] font-bold tracking-[0.2em] uppercase rounded-[18px] px-[14px] py-1 mb-[18px]">
                  Our Mission
                </div>
                <h3 className="dp text-[clamp(1.6rem,4vw,2rem)] font-bold text-white leading-[1.15] mb-4">
                  Freshness,
                  <em className="dp text-[#e8667a] italic"> by design.</em>
                </h3>
                <p className="text-white/50 text-[0.93rem] leading-[1.75]">
                  To deliver freshness, creativity, and meaning through every bouquet. We combine nature-inspired design with expert craftsmanship to bring purposeful flowers into modern lives — with reliability, design-led aesthetics, and service that feels personal.
                </p>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden rounded-[18px] p-[clamp(32px,5vw,48px)_clamp(24px,4vw,40px)] shadow-xl" style={{
                background:"linear-gradient(135deg,#c9a96e,#a07840)"
              }}>
                <div className="absolute top-[-24px] right-[-24px] opacity-[0.15] pointer-events-none">
                  <svg width="150" height="150" viewBox="0 0 100 100">
                    {[0,60,120,180,240,300].map(a=>(
                      <ellipse key={a} cx="50" cy="20" rx="10" ry="22" fill="#fff" transform={`rotate(${a} 50 50)`}/>
                    ))}
                  </svg>
                </div>
                <div className="inline-block bg-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-[18px] px-[14px] py-1 mb-[18px]">
                  Our Vision
                </div>
                <h3 className="dp text-[clamp(1.6rem,4vw,2rem)] font-bold text-white leading-[1.15] mb-4">
                  Flowers as
                  <em className="dp italic text-white/85"> everyday joy.</em>
                </h3>
                <p className="text-white/75 text-[0.93rem] leading-[1.75]">
                  To make fresh flowers an everyday joy — not just a luxury for occasions. We aim to redefine how people gift, decorate, and celebrate through thoughtfully designed floral experiences that are easy to access, high in quality, and crafted with care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────── */}
        <section className="sp relative overflow-hidden" style={{
          background:"linear-gradient(135deg,#1a0f0a 0%,#2a1810 100%)"
        }}>
          <FloatingDecoration type="lotus" side="left" top="12%" size={68} opacity={0.08} delay={0} duration={20} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="rose" side="right" top="8%" size={56} opacity={0.07} delay={1.5} duration={18} animation="breathe" color="#e8667a" />
          <FloatingDecoration type="petal6" side="right" top="auto" bottom="12%" size={48} opacity={0.06} delay={3} duration={14} animation="sway3" color="#C9A15A" />
          <FloatingDecoration type="petal5" side="left" top="auto" bottom="6%" size={40} opacity={0.06} delay={4} duration={12} animation="sway2" color="#e8667a" />
          {/* Large rotating petal bg */}
          <div style={{
            position:"absolute",top:"50%",left:"50%",opacity:0.04,pointerEvents:"none",
            animation:"rotateSlow 80s linear infinite",width:"480px",height:"480px"
          }}>
            <svg width="480" height="480" viewBox="0 0 100 100">
              {[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>(
                <ellipse key={a} cx="50" cy="15" rx="8" ry="18" fill="#c9a96e" transform={`rotate(${a} 50 50)`}/>
              ))}
            </svg>
          </div>

          <div className="inner-sm text-center relative">
            {/* Petal ornament */}
            <div className="flex justify-center gap-[6px] mb-6">
              {[...Array(3)].map((_,i)=>(
                <svg key={`about-petal-${i}`} width="15" height="15" viewBox="0 0 100 100" style={{opacity:0.85}}>
                  {[0,72,144,216,288].map(a=>(
                    <ellipse key={a} cx="50" cy="24" rx="9" ry="20" fill="#c9a96e" transform={`rotate(${a} 50 50)`}/>
                  ))}
                  <circle cx="50" cy="50" r="7" fill="#f0d5a0"/>
                </svg>
              ))}
            </div>

            <h2 className="dp cta-h2 font-bold text-white leading-[1.06] mb-[18px]">
              Let's make something
              <br/>
              <em className="dp gold-text" style={{fontStyle:"italic"}}>
                beautiful together.
              </em>
            </h2>
            <p className="text-white/45 text-[clamp(0.9rem,2.5vw,1rem)] leading-[1.75] max-w-[420px] mx-auto mb-9">
              Whether it's a single bouquet or a full wedding décor — we'd love to hear about your occasion.
            </p>

            <div className="cta-row">
              <a href="/decor" className="cta-pri px-7 py-[15px]">
                <Sparkles size={15} className="btn-icon"/> Plan Your Décor
              </a>
              <a href="https://wa.me/919540849659" target="_blank" rel="noopener noreferrer"
                className="cta-ghost text-[#25d366] px-[26px] py-[14px] text-[14px] border border-[#25d366]/30 bg-[#25d366]/5 hover:bg-[#25d366]/15 hover:border-[#25d366]/50 transition-all duration-300"
              >
                <MessageCircle size={15} className="btn-icon"/> WhatsApp Us
              </a>
              <a href="tel:+919540849659"
                className="cta-ghost text-white/60 px-6 py-[14px] text-[14px] border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-300"
              >
                <Phone size={14} className="btn-icon"/> Call Us
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

export default AboutUs;