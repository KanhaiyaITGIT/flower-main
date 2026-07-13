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
        <section style={{
          background: "linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)",
          position: "relative", overflow: "hidden",
          minHeight: "85vh", display: "flex", alignItems: "center"
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
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} style={{
                display:"inline-flex",alignItems:"center",gap:"10px",marginBottom:"26px"
              }}>
                <div style={{
                  width:"6px",height:"6px",borderRadius:"50%",background:"#c9a96e",flexShrink:0,
                  animation:"pulseDot 2.4s ease-in-out infinite"
                }}/>
                <span style={{
                  color:"#c9a96e",fontSize:"11px",fontWeight:700,
                  letterSpacing:"0.2em",textTransform:"uppercase"
                }}>
                  Shivam Florist · Est. 2022
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp hero-h1" style={{
                fontWeight:700, color:"#fff", maxWidth:"680px",
                marginBottom:"22px", letterSpacing:"-0.01em"
              }}>
                Flowers as
                <br/>
                <em className="dp gold-text" style={{fontStyle:"italic"}}>
                  intentional as you.
                </em>
              </motion.h1>

              {/* Sub */}
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="hero-sub" style={{
                color:"rgba(255,255,255,0.52)", lineHeight:1.75,
                maxWidth:"460px", marginBottom:"36px", fontWeight:300
              }}>
                We're a design-first floral studio. Built to make flowers feel less like an afterthought and more like the whole point.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } }} className="hero-cta-row">
                <a href="/decor" className="cta-pri" style={{ padding:"14px 28px" }}>
                  <Sparkles size={14} className="btn-icon"/> See Our Work
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="cta-ghost"
                  style={{
                    color:"#fff", padding:"13px 24px", fontSize:"14px",
                    border:"1px solid rgba(255,255,255,0.2)",
                    backdropFilter:"blur(8px)",
                    background:"rgba(255,255,255,0.06)"
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.12)";e.currentTarget.style.borderColor="rgba(255,255,255,0.32)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.borderColor="rgba(255,255,255,0.2)";}}
                >
                  <MessageCircle size={14} className="btn-icon"/> Chat with Us
                </a>
              </motion.div>

              {/* Stars */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } } }} style={{
                display:"flex",alignItems:"center",gap:"10px",marginTop:"28px",flexWrap:"wrap"
              }}>
                <div style={{display:"flex",gap:"3px"}}>
                  {[...Array(5)].map((_,i)=><Star key={`about-star-${i}`} size={12} fill="#c9a96e" style={{color:"#c9a96e"}}/>)}
                </div>
                <span style={{color:"rgba(255,255,255,0.38)",fontSize:"12px"}}>4.9 · 800+ happy customers</span>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* ── STATS STRIP ──────────────────────────────── */}
        <section style={{
          background:"linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)",
          position:"relative",overflow:"hidden"
        }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:"1px",
            background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.5),rgba(232,102,122,0.35),rgba(201,169,110,0.5),transparent)"}}/>
          <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"1px",
            background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.25),transparent)"}}/>
          {/* center glow */}
          <BokehLights spots={[
            { color: "from-amber-300/10 to-transparent", size: 320, top: "50%", left: "50%", anim: "bk-float", delay: 0, duration: 25 },
            { color: "from-rose-400/8 to-transparent", size: 240, top: "-8%", right: "10%", anim: "bk-drift1", delay: 2, duration: 30 },
            { color: "from-violet-400/6 to-transparent", size: 200, bottom: "-6%", left: "15%", anim: "bk-drift2", delay: 4, duration: 28 },
          ]} />

          <div className="inner stats-wrap" style={{ padding:"0 24px" }}>
            {stats.map(({value,suffix,label},i)=>(
              <div key={`about-stat-${i}`} style={{
                padding:"clamp(1.6rem,4vw,2.4rem) 12px",
                textAlign:"center",
                borderRight: i<3 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}>
                <div className="dp" style={{
                  fontSize:"clamp(1.8rem,5vw,2.7rem)",fontWeight:700,lineHeight:1,marginBottom:"8px",
                  background:"linear-gradient(135deg,#f0d5a0 0%,#c9a96e 50%,#a07840 100%)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"
                }}>
                  <AnimatedCounter target={value} suffix={suffix}/>
                </div>
                <div style={{color:"rgba(255,255,255,0.38)",fontSize:"10px",fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase"}}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STORY ────────────────────────────────────── */}
        <section className="sp" style={{ background:"#faf7f2", position:"relative", overflow:"hidden" }}>
          <FloatingDecoration type="rose" side="left" top="6%" size={44} opacity={0.07} delay={0} duration={16} animation="breathe" color="#e8667a" />
          <FloatingDecoration type="lotus" side="right" top="8%" size={48} opacity={0.06} delay={1.5} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="petal6" side="left" top="auto" bottom="8%" size={36} opacity={0.08} delay={3} duration={14} animation="sway3" color="#C9A15A" />
          <div className="inner">
            {/* Section label */}
            <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"52px"}}>
              <div style={{height:"1px",width:"36px",background:"#e8667a"}}/>
              <span style={{color:"#e8667a",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase"}}>
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
                <h2 className="dp story-h2" style={{
                  fontWeight:700,color:"#1a0f0a",lineHeight:1.06,
                  marginBottom:"28px",letterSpacing:"-0.01em"
                }}>
                  We started because
                  <br/>
                  <em className="dp" style={{color:"#c9a96e",fontStyle:"italic"}}>
                    flowers deserved better.
                  </em>
                </h2>

                {/* Pull quote */}
                <div style={{borderLeft:"3px solid #e8667a",paddingLeft:"20px",marginBottom:"28px"}}>
                  <p style={{color:"#6b4c3b",fontSize:"1.02rem",lineHeight:1.7,fontStyle:"italic"}}>
                    "India's flower market wastes nearly 30% of its produce daily. We set out to fix that — and make something beautiful in the process."
                  </p>
                  <p style={{color:"#c9a96e",fontSize:"12px",fontWeight:700,marginTop:"10px",letterSpacing:"0.08em"}}>
                    — SHIVAM, Founder
                  </p>
                </div>

                {/* Ornament */}
                <div style={{display:"flex",gap:"6px",alignItems:"center"}}>
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
                style={{paddingTop:"4px"}}
              >
                <p style={{color:"#7a5c4f",fontSize:"1rem",lineHeight:1.8,marginBottom:"18px"}}>
                  Shivam Florist was started in 2022 by SHIVAM. The idea was disarmingly simple: what if flowers actually arrived the day they were cut, arranged by someone who cared, and delivered like they mattered?
                </p>
                <p style={{color:"#7a5c4f",fontSize:"1rem",lineHeight:1.8,marginBottom:"18px"}}>
                  India's floriculture system is traditionally fragmented and waste-heavy. Most shops work on next-day inventory, not today's farm output. We built the opposite — a demand-first, design-first model that sources every morning and delivers every afternoon.
                </p>
                <p style={{color:"#7a5c4f",fontSize:"1rem",lineHeight:1.8}}>
                  What started as a delivery business became a design studio. Today we do everyday gifting, event décor, corporate arrangements, and wedding floristry — all under one roof, all with the same promise: fresh, intentional, on time.
                </p>

                <div style={{marginTop:"28px",display:"flex",flexWrap:"wrap",gap:"10px"}}>
                  {["Farm-to-door freshness","Design-led always","India's first farm-direct model"].map((tag,i)=>(
                    <span key={`about-tag-${i}`} style={{
                      background:"#fff",border:"1px solid #e8d5c0",
                      color:"#9a6b4b",borderRadius:"18px",
                      padding:"6px 16px",fontSize:"12px",fontWeight:600
                    }}>✓ {tag}</span>
                  ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

        {/* ── VALUES ───────────────────────────────────── */}
        <section className="sp" style={{ background:"#fff", position:"relative", overflow:"hidden" }}>
          <FloatingDecoration type="lotus" side="left" top="5%" size={52} opacity={0.08} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="petal6" side="left" top="28%" size={55} opacity={0.1} delay={1.5} duration={13} animation="sway2" color="#C9A15A" />
          <FloatingDecoration type="rose" side="right" top="8%" size={48} opacity={0.08} delay={0.8} duration={16} animation="bloom" color="#e8667a" />
          <FloatingDecoration type="petal5" side="right" top="35%" size={50} opacity={0.08} delay={2.5} duration={14} color="#e8667a" />
          <FloatingDecoration type="leaf" side="left" top="auto" bottom="8%" size={44} opacity={0.12} delay={1} duration={11} animation="sway3" color="#14301F" />
          <div className="inner">
            <div style={{textAlign:"center",marginBottom:"52px"}}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"14px",marginBottom:"14px"}}>
                <div style={{height:"1px",width:"28px",background:"#c9a96e"}}/>
                <span style={{color:"#c9a96e",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase"}}>
                  What We Stand For
                </span>
                <div style={{height:"1px",width:"28px",background:"#c9a96e"}}/>
              </div>
              <h2 className="dp vals-h2" style={{
                fontWeight:700,color:"#1a0f0a",lineHeight:1.1,marginBottom:"14px"
              }}>
                Four things we
                <em className="dp" style={{color:"#e8667a",fontStyle:"italic"}}> never compromise.</em>
              </h2>
              <p style={{color:"#9a7c6f",fontSize:"0.93rem",maxWidth:"380px",margin:"0 auto",lineHeight:1.7}}>
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
                <div key={`about-value-${i}`} className="val-card" style={{
                  background:bg,borderRadius:"18px",padding:"clamp(24px,4vw,36px) clamp(20px,3vw,32px)",
                  border:`1px solid ${color}22`
                }}>
                  <div style={{
                    width:"48px",height:"48px",borderRadius:"18px",
                    background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",
                    marginBottom:"18px",boxShadow:`0 4px 16px ${color}22`,flexShrink:0
                  }}>
                    <Icon size={22} style={{color}}/>
                  </div>
                  <h3 className="dp" style={{fontSize:"1.45rem",fontWeight:700,color:"#1a0f0a",marginBottom:"10px"}}>
                    {title}
                  </h3>
                  <p style={{color:"#8a6e63",fontSize:"0.9rem",lineHeight:1.75}}>{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────── */}
        <section className="sp" style={{ background:"#faf7f2", position:"relative", overflow:"hidden" }}>
          <FloatingDecoration type="lotus" side="left" top="8%" size={52} opacity={0.07} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="rose" side="right" top="12%" size={44} opacity={0.06} delay={1.5} duration={16} animation="breathe" color="#e8667a" />
          <FloatingDecoration type="petal5" side="right" top="auto" bottom="10%" size={40} opacity={0.08} delay={3} duration={14} animation="sway3" color="#C9A15A" />
          <div className="inner">
            <div style={{textAlign:"center",marginBottom:"48px"}}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"14px",marginBottom:"14px"}}>
                <div style={{height:"1px",width:"28px",background:"#e8667a"}}/>
                <span style={{color:"#e8667a",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase"}}>
                  What Clients Say
                </span>
                <div style={{height:"1px",width:"28px",background:"#e8667a"}}/>
              </div>
              <h2 className="dp" style={{
                fontSize:"clamp(1.8rem,5vw,3rem)",fontWeight:700,color:"#1a0f0a",lineHeight:1.1
              }}>
                Words from
                <em className="dp" style={{color:"#c9a96e",fontStyle:"italic"}}> real celebrations.</em>
              </h2>
            </div>

            <div className="testi-grid">
              {testimonials.map(({text,name,occasion,rating},i)=>(
                <div key={`about-testimonial-${i}`} style={{
                  background:"#fff",borderRadius:"18px",
                  padding:"clamp(22px,3vw,32px)",
                  border:"1px solid #f0e8e0",
                  display:"flex",flexDirection:"column",gap:"14px"
                }}>
                  {/* Stars */}
                  <div style={{display:"flex",gap:"3px"}}>
                    {[...Array(rating)].map((_,j)=>(
                      <Star key={`about-testi-star-${j}`} size={13} fill="#c9a96e" style={{color:"#c9a96e"}}/>
                    ))}
                  </div>
                  {/* Quote icon */}
                  <Quote size={22} style={{color:"#e8667a",opacity:0.4}}/>
                  <p style={{color:"#6b4c3b",fontSize:"0.92rem",lineHeight:1.75,flex:1,fontStyle:"italic"}}>
                    {text}
                  </p>
                  <div style={{borderTop:"1px solid #f3f4f6",paddingTop:"14px"}}>
                    <p style={{fontWeight:700,color:"#1a0f0a",fontSize:"14px"}}>{name}</p>
                    <p style={{color:"#c9a96e",fontSize:"11px",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase"}}>
                      {occasion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────── */}
        <section className="sp" style={{ background:"#fff", position:"relative", overflow:"hidden" }}>
          <FloatingDecoration type="rose" side="right" top="8%" size={48} opacity={0.06} delay={0} duration={18} animation="bloom" color="#C9A15A" />
          <FloatingDecoration type="lotus" side="left" top="auto" bottom="10%" size={44} opacity={0.05} delay={2} duration={16} animation="drift-bloom" color="#e8667a" />
          <div className="inner-md">
            <div style={{textAlign:"center",marginBottom:"56px"}}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"14px",marginBottom:"14px"}}>
                <div style={{height:"1px",width:"26px",background:"#e8667a"}}/>
                <span style={{color:"#e8667a",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase"}}>
                  Our Journey
                </span>
                <div style={{height:"1px",width:"26px",background:"#e8667a"}}/>
              </div>
              <h2 className="dp" style={{
                fontSize:"clamp(1.8rem,5vw,3rem)",fontWeight:700,color:"#1a0f0a",lineHeight:1.1
              }}>
                Rooted in craft,
                <br/>
                <em className="dp" style={{color:"#c9a96e",fontStyle:"italic"}}>growing every season.</em>
              </h2>
            </div>

            <div className="tl-wrap">
              <div className="tl-line"/>
              <div style={{display:"flex",flexDirection:"column",gap:"44px"}}>
                {milestones.map(({year,title,desc,color},i)=>(
                  <div key={`about-milestone-${i}`} style={{position:"relative"}}>
                    {/* Dot */}
                    <div className="tl-dot" style={{
                      position:"absolute",left:"-38px",top:"5px",
                      width:"14px",height:"14px",borderRadius:"50%",
                      background:color,border:"3px solid #fff",
                      boxShadow:`0 0 0 3px ${color}44`,
                      zIndex:2,flexShrink:0
                    }}/>
                    <span style={{
                      display:"inline-block",
                      background:color+"18",color:color,
                      fontSize:"11px",fontWeight:700,letterSpacing:"0.1em",
                      borderRadius:"18px",padding:"3px 12px",marginBottom:"8px"
                    }}>{year}</span>
                    <h3 className="dp" style={{fontSize:"1.3rem",fontWeight:700,color:"#1a0f0a",marginBottom:"6px"}}>
                      {title}
                    </h3>
                    <p style={{color:"#8a6e63",fontSize:"0.9rem",lineHeight:1.7,maxWidth:"500px"}}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ─────────────────────────────────────── */}
        <section className="sp" style={{ background:"#1a0f0a",position:"relative",overflow:"hidden" }}>
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

          <div className="inner" style={{position:"relative"}}>
            <div style={{textAlign:"center",marginBottom:"52px"}}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"14px",marginBottom:"14px"}}>
                <div style={{height:"1px",width:"26px",background:"#c9a96e",opacity:0.6}}/>
                <span style={{color:"#c9a96e",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase"}}>
                  The Minds Behind It
                </span>
                <div style={{height:"1px",width:"26px",background:"#c9a96e",opacity:0.6}}/>
              </div>
              <h2 className="dp team-h2" style={{fontWeight:700,color:"#fff",lineHeight:1.1,marginBottom:"14px"}}>
                People who care
                <br/>
                <em className="dp gold-text" style={{fontStyle:"italic"}}>about every petal.</em>
              </h2>
              <p style={{color:"rgba(255,255,255,0.42)",fontSize:"0.93rem",maxWidth:"340px",margin:"0 auto",lineHeight:1.7}}>
                A small team with deep craft. Each person owns their domain completely.
              </p>
            </div>

            <div className="team-grid">
              {team.map(({name,role,detail,initials,accent},i)=>(
                <div key={`about-team-${i}`} className="tm-card" style={{
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  borderRadius:"18px",padding:"clamp(22px,3vw,32px) clamp(18px,2vw,24px)",
                  textAlign:"center"
                }}>
                  <div className="tm-avatar" style={{
                    width:"68px",height:"68px",borderRadius:"50%",
                    background:`linear-gradient(135deg,${accent}33,${accent}66)`,
                    border:`2px solid ${accent}55`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    margin:"0 auto 14px",
                    fontSize:"1.25rem",fontWeight:700,color:accent,
                    fontFamily:"'Cormorant Garamond',serif"
                  }}>{initials}</div>
                  <h3 style={{color:"#fff",fontSize:"0.97rem",fontWeight:700,marginBottom:"4px"}}>{name}</h3>
                  <p style={{color:accent,fontSize:"10px",fontWeight:700,letterSpacing:"0.07em",
                    marginBottom:"12px",textTransform:"uppercase"}}>{role}</p>
                  <p style={{color:"rgba(255,255,255,0.42)",fontSize:"0.82rem",lineHeight:1.65}}>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION + VISION ─────────────────────────── */}
        <section className="sp" style={{ background:"#faf7f2", position:"relative", overflow:"hidden" }}>
          <FloatingDecoration type="lotus" side="right" top="8%" size={52} opacity={0.06} delay={0} duration={18} animation="drift-bloom" color="#C9A15A" />
          <FloatingDecoration type="rose" side="left" top="auto" bottom="10%" size={44} opacity={0.05} delay={2} duration={16} animation="breathe" color="#e8667a" />
          <div className="inner">
            <div className="mv-grid">
              {/* Mission */}
              <div style={{
                background:"#1a0f0a",borderRadius:"18px",
                padding:"clamp(32px,5vw,48px) clamp(24px,4vw,40px)",
                position:"relative",overflow:"hidden"
              }}>
                <div style={{position:"absolute",top:"-24px",right:"-24px",opacity:0.07,pointerEvents:"none"}}>
                  <svg width="150" height="150" viewBox="0 0 100 100">
                    {[0,72,144,216,288].map(a=>(
                      <ellipse key={a} cx="50" cy="20" rx="12" ry="24" fill="#e8667a" transform={`rotate(${a} 50 50)`}/>
                    ))}
                  </svg>
                </div>
                <div style={{
                  display:"inline-block",background:"#e8667a22",color:"#e8667a",
                  fontSize:"10px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",
                  borderRadius:"18px",padding:"4px 14px",marginBottom:"18px"
                }}>Our Mission</div>
                <h3 className="dp" style={{
                  fontSize:"clamp(1.6rem,4vw,2rem)",fontWeight:700,color:"#fff",
                  lineHeight:1.15,marginBottom:"16px"
                }}>
                  Freshness,
                  <em className="dp" style={{color:"#e8667a",fontStyle:"italic"}}> by design.</em>
                </h3>
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:"0.93rem",lineHeight:1.75}}>
                  To deliver freshness, creativity, and meaning through every bouquet. We combine nature-inspired design with expert craftsmanship to bring purposeful flowers into modern lives — with reliability, design-led aesthetics, and service that feels personal.
                </p>
              </div>

              {/* Vision */}
              <div style={{
                background:"linear-gradient(135deg,#c9a96e,#a07840)",borderRadius:"18px",
                padding:"clamp(32px,5vw,48px) clamp(24px,4vw,40px)",
                position:"relative",overflow:"hidden"
              }}>
                <div style={{position:"absolute",top:"-24px",right:"-24px",opacity:0.15,pointerEvents:"none"}}>
                  <svg width="150" height="150" viewBox="0 0 100 100">
                    {[0,60,120,180,240,300].map(a=>(
                      <ellipse key={a} cx="50" cy="20" rx="10" ry="22" fill="#fff" transform={`rotate(${a} 50 50)`}/>
                    ))}
                  </svg>
                </div>
                <div style={{
                  display:"inline-block",background:"rgba(255,255,255,0.2)",color:"#fff",
                  fontSize:"10px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",
                  borderRadius:"18px",padding:"4px 14px",marginBottom:"18px"
                }}>Our Vision</div>
                <h3 className="dp" style={{
                  fontSize:"clamp(1.6rem,4vw,2rem)",fontWeight:700,color:"#fff",
                  lineHeight:1.15,marginBottom:"16px"
                }}>
                  Flowers as
                  <em className="dp" style={{fontStyle:"italic",color:"rgba(255,255,255,0.85)"}}> everyday joy.</em>
                </h3>
                <p style={{color:"rgba(255,255,255,0.75)",fontSize:"0.93rem",lineHeight:1.75}}>
                  To make fresh flowers an everyday joy — not just a luxury for occasions. We aim to redefine how people gift, decorate, and celebrate through thoughtfully designed floral experiences that are easy to access, high in quality, and crafted with care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────── */}
        <section className="sp" style={{
          background:"linear-gradient(135deg,#1a0f0a 0%,#2a1810 100%)",
          position:"relative",overflow:"hidden"
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

          <div className="inner-sm" style={{textAlign:"center",position:"relative"}}>
            {/* Petal ornament */}
            <div style={{display:"flex",justifyContent:"center",gap:"6px",marginBottom:"24px"}}>
              {[...Array(3)].map((_,i)=>(
                <svg key={`about-petal-${i}`} width="15" height="15" viewBox="0 0 100 100" style={{opacity:0.85}}>
                  {[0,72,144,216,288].map(a=>(
                    <ellipse key={a} cx="50" cy="24" rx="9" ry="20" fill="#c9a96e" transform={`rotate(${a} 50 50)`}/>
                  ))}
                  <circle cx="50" cy="50" r="7" fill="#f0d5a0"/>
                </svg>
              ))}
            </div>

            <h2 className="dp cta-h2" style={{
              fontWeight:700,color:"#fff",lineHeight:1.06,marginBottom:"18px"
            }}>
              Let's make something
              <br/>
              <em className="dp gold-text" style={{fontStyle:"italic"}}>
                beautiful together.
              </em>
            </h2>
            <p style={{
              color:"rgba(255,255,255,0.45)",fontSize:"clamp(0.9rem,2.5vw,1rem)",
              lineHeight:1.75,marginBottom:"36px",maxWidth:"420px",margin:"0 auto 36px"
            }}>
              Whether it's a single bouquet or a full wedding décor — we'd love to hear about your occasion.
            </p>

            <div className="cta-row">
              <a href="/decor" className="cta-pri" style={{padding:"15px 28px"}}>
                <Sparkles size={15} className="btn-icon"/> Plan Your Décor
              </a>
              <a href="https://wa.me/919540849659" target="_blank" rel="noopener noreferrer"
                className="cta-ghost"
                style={{
                  color:"#25d366",padding:"14px 26px",fontSize:"14px",
                  border:"1px solid rgba(37,211,102,0.3)",
                  background:"rgba(37,211,102,0.07)"
                }}
              >
                <MessageCircle size={15} className="btn-icon"/> WhatsApp Us
              </a>
              <a href="tel:+919540849659"
                className="cta-ghost"
                style={{
                  color:"rgba(255,255,255,0.6)",padding:"14px 24px",fontSize:"14px",
                  border:"1px solid rgba(255,255,255,0.12)"
                }}
              >
                <Phone size={14} className="btn-icon"/> Call Us
              </a>
            </div>

            <p style={{
              color:"rgba(255,255,255,0.2)",fontSize:"12px",
              marginTop:"24px"
            }}>
              We respond within 10 minutes · Available 9 AM – 9 PM daily
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutUs;