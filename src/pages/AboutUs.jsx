import { Phone, MessageCircle, Star, ArrowRight, Award, Leaf, Shield, HeadphonesIcon, Package, Hand, Truck, Heart, Users, Sparkles, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK, BUSINESS_NAME_MAIN } from "../constants";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import RevealSection from "../components/RevealSection";

const stats = [
  { value: 15000, suffix: "+", label: "Happy Customers" },
  { value: 500, suffix: "+", label: "Wedding Events" },
  { value: 7, suffix: "", label: "Cities Served", custom: true },
  { value: 1, suffix: "", label: "Same Day Delivery", custom: true },
];

const team = [
  { name: "Shivam Gupta", role: "Founder & Owner", detail: "Visionary florist with a passion for handcrafted floral artistry. He leads every arrangement with precision, care, and an eye for elegance.", initials: "SG", accent: "#C9A15A" },
  { name: "Kanhaiya Gupta", role: "Frontend & DevOps Engineer", detail: "Architects the digital experience — building seamless ordering, tracking, and performance infrastructure behind the website.", initials: "KG", accent: "#34d399" },
  { name: "Anand Shakya", role: "Operations & Customer Experience", detail: "Ensures every order is flawless from sourcing to delivery. Customer happiness is his north star, and he never compromises on quality.", initials: "AS", accent: "#e8667a" },
  { name: "Mahaveer", role: "Floral Design & Logistics", detail: "Transforms venues into breathtaking floral experiences. Led 200+ wedding setups and ensures every petal arrives at peak bloom.", initials: "M", accent: "#a78bfa" },
];

const whyItems = [
  { icon: Truck, title: "Same Day Delivery", desc: "Orders before 4 PM delivered the same day across Delhi NCR." },
  { icon: Leaf, title: "Fresh Flowers", desc: "Handpicked every morning from the finest farms. Zero day-old inventory." },
  { icon: Package, title: "Luxury Packaging", desc: "Every bouquet is wrapped in premium materials for a memorable gifting experience." },
  { icon: Award, title: "Expert Florists", desc: "Each arrangement is designed by skilled florists with years of experience." },
  { icon: HeadphonesIcon, title: "Premium Support", desc: "Dedicated customer support available 9 AM to 10 PM every single day." },
  { icon: Hand, title: "100% Handcrafted", desc: "No assembly line blooms. Every order is made to order, just for you." },
  { icon: Users, title: "Customer First", desc: "Your happiness is our measure of success. 4.9-star average rating across all platforms." },
];

const values = [
  { icon: Heart, title: "Passion for Quality", desc: "We obsess over every stem, every wrap, every delivery. Mediocrity has no place in our studio." },
  { icon: Shield, title: "Trust & Reliability", desc: "Promises kept. If we say same-day, it's same-day. If we say handcrafted, it's made fresh for you." },
  { icon: Sparkles, title: "Creative Excellence", desc: "Each arrangement is a unique composition. We don't replicate — we create." },
  { icon: Clock, title: "Timely Execution", desc: "Time is the most precious thing we deliver alongside flowers. Punctuality is our policy." },
];

const AboutUs = () => (
  <>
    <div className="relative bg-[#0d0805]">
      {/* ─── HERO ─── */}
      <section className="relative flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)", minHeight: "75vh" }}>
        <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"3px", background:"linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)" }} />
        <div className="inner" style={{width:"100%"}}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)]" style={{ animation:"pulseDot 2.4s ease-in-out infinite" }}/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">About {BUSINESS_NAME_MAIN} Florist</span>
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white max-w-[680px] mb-[22px] tracking-[-0.01em] leading-[1.08]">
              Every flower
              <br/><em className="dp gold-text italic">carries an emotion.</em>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="text-white/50 leading-[1.75] max-w-[520px] mb-[36px] font-light">
              Premium florist serving Delhi NCR with handcrafted flower arrangements for every occasion — from intimate birthdays to grand wedding celebrations.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } }} className="flex items-center gap-[10px] mt-2 flex-wrap">
              <div className="flex gap-[3px]">{[...Array(5)].map((_,i)=><Star key={`as-${i}`} size={12} fill="#C9A15A" className="text-[var(--color-gold)]"/>)}</div>
              <span className="text-white/35 text-[12px]">4.9 · 15,000+ happy customers</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATISTICS ─── */}
      <section className="relative overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)" }}>
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.5),rgba(232,102,122,0.35),rgba(201,169,110,0.5),transparent)"}}/>
        <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.25),transparent)"}}/>
        <div className="inner stats-wrap px-6">
          {stats.map(({value,suffix,label,custom},i)=>(
            <div key={`stat-${i}`} className={`text-center p-[clamp(1.6rem,4vw,2.4rem)] px-3 ${i<3 ? "border-r border-white/5" : ""}`}>
              <div className="dp text-[clamp(1.8rem,5vw,2.7rem)] font-bold leading-none mb-2 bg-gradient-to-b from-[#f0d5a0] via-[#C9A15A] to-[#a07840] bg-clip-text text-transparent">
                {custom ? (i === 2 ? "7" : "Same Day") : <AnimatedCounter target={value} suffix={suffix}/>}
              </div>
              <div className="text-white/35 text-[10px] font-bold tracking-[0.16em] uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMPANY STORY ─── */}
      <section className="sp relative overflow-hidden bg-[#faf7f2]">
        <div className="inner">
          <div className="flex items-center gap-[14px] mb-[52px]">
            <div className="h-[1px] w-[36px] bg-[var(--color-gold)]"/>
            <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Our Story</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-[72px] items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="dp text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-[#1a0f0a] leading-[1.06] mb-7 tracking-[-0.01em]">
                From a simple belief
                <br/><em className="dp" style={{color:"#c9a96e",fontStyle:"italic"}}>to a premium legacy.</em>
              </h2>
              <div className="border-l-[3px] border-[var(--color-gold)] pl-5 mb-7">
                <p className="text-[#6b4c3b] text-[1.02rem] leading-[1.7] italic">
                  "Shivam Florist started with a simple belief — every flower carries an emotion. What began as a local flower studio has grown into a premium floral destination serving birthdays, weddings, anniversaries, corporate events, and luxury celebrations across Delhi NCR. Every bouquet is handcrafted with attention to freshness, elegance, and customer happiness."
                </p>
                <p className="text-[var(--color-gold)] text-[12px] font-bold mt-[10px] tracking-[0.08em]">— SHIVAM GUPTA, Founder</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="pt-1">
              <p className="text-[#7a5c4f] text-[1rem] leading-[1.8] mb-[18px]">
                Founded in 2020, Shivam Florist began as a small flower studio with one simple promise — deliver premium quality, handcrafted flowers that feel personal. Today, we are one of Delhi NCR's most trusted floral destinations.
              </p>
              <p className="text-[#7a5c4f] text-[1rem] leading-[1.8] mb-[18px]">
                From birthday surprises to wedding décors, corporate gifting to luxury bouquet design — every order is crafted with the same attention to detail that defined our very first arrangement.
              </p>
              <p className="text-[#7a5c4f] text-[1rem] leading-[1.8]">
                We specialize in premium fresh flowers, same-day delivery, and bespoke arrangements that turn ordinary moments into extraordinary memories. Our team of expert florists ensures every stem tells a story.
              </p>
              <div className="mt-7 flex flex-wrap gap-[10px]">
                {["Premium flowers","Wedding decor","Birthday surprises","Corporate gifting","Luxury bouquets","Fresh flowers","Same day delivery","Delhi NCR service"].map((tag,i)=>(
                  <span key={`tag-${i}`} className="bg-white border border-[#e8d5c0] text-[#9a6b4b] rounded-[18px] px-4 py-[6px] text-[12px] font-semibold">✓ {tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY SHIVAM FLORIST ─── */}
      <RevealSection className="sp relative overflow-hidden bg-white">
        <div className="inner">
          <div className="text-center mb-[48px]">
            <div className="flex justify-center items-center gap-[14px] mb-[14px]">
              <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Why Shivam Florist</span>
              <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
            </div>
            <h2 className="dp text-[clamp(1.6rem,4vw,2.8rem)] font-bold text-[#1a0f0a] leading-[1.1]">
              Seven reasons
              <em className="dp text-[var(--color-gold)] italic"> to trust us.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {whyItems.map(({icon:Icon,title,desc},i)=>(
              <div key={`why-${i}`} className="val-card rounded-[18px] p-[clamp(20px,3vw,28px)_clamp(18px,2.5vw,24px)] border transition-all duration-500 group" style={{ background:"linear-gradient(135deg,#fdfcf9,rgba(255,255,255,0.95))", borderColor:"rgba(201,169,110,0.15)" }}>
                <div className="w-[44px] h-[44px] rounded-[14px] bg-white/80 backdrop-blur-md flex items-center justify-center mb-[14px] shadow-lg" style={{ boxShadow:"0 8px 24px rgba(201,169,110,0.12)" }}>
                  <Icon size={20} className="text-[var(--color-gold)]"/>
                </div>
                <h3 className="dp text-[1.15rem] font-bold text-[#1a0f0a] mb-[6px]">{title}</h3>
                <p className="text-[#8a6e63] text-[0.85rem] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── MEET OUR TEAM ─── */}
      <section className="sp relative overflow-hidden bg-[#1a0f0a]">
        <div style={{position:"absolute",top:"-80px",right:"-80px",width:"360px",height:"360px",borderRadius:"50%", background:"radial-gradient(circle,rgba(201,169,110,0.09) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:"-60px",left:"-60px",width:"280px",height:"280px",borderRadius:"50%", background:"radial-gradient(circle,rgba(232,102,122,0.07) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div className="inner relative">
          <div className="text-center mb-[52px]">
            <div className="flex justify-center items-center gap-[14px] mb-[14px]">
              <div className="h-[1px] w-[26px] bg-[var(--color-gold)] opacity-60"/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Meet Our Team</span>
              <div className="h-[1px] w-[26px] bg-[var(--color-gold)] opacity-60"/>
            </div>
            <h2 className="dp text-[clamp(1.8rem,5vw,3rem)] font-bold text-white leading-[1.1] mb-[14px]">
              People who care
              <br/><em className="dp gold-text italic">about every petal.</em>
            </h2>
            <p className="text-white/40 text-[0.93rem] max-w-[360px] mx-auto leading-[1.7]">
              A passionate team dedicated to crafting unforgettable floral experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {team.map(({name,role,detail,initials,accent},i)=>(
              <div key={`team-${i}`} className="tm-card rounded-[18px] p-[clamp(22px,3vw,32px)_clamp(18px,2vw,24px)] text-center transition-all duration-500 group" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="tm-avatar w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-[14px] text-[1.4rem] font-bold font-cormorant transition-all duration-500 group-hover:scale-[1.1] group-hover:shadow-lg" style={{ background:`linear-gradient(135deg,${accent}33,${accent}66)`, border:`2px solid ${accent}55`, color:accent }}>{initials}</div>
                <h3 className="text-white text-[1rem] font-bold mb-1">{name}</h3>
                <p className="text-[10px] font-bold tracking-[0.07em] mb-3 uppercase" style={{color:accent}}>{role}</p>
                <p className="text-white/40 text-[0.82rem] leading-[1.65]">{detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-white/30 text-[13px] font-light">
              <span className="text-[var(--color-gold)] font-semibold">Owner:</span> Shivam Gupta — Founder & Owner
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <RevealSection className="sp relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaf5] to-white">
        <div className="inner">
          <div className="text-center mb-[48px]">
            <div className="flex justify-center items-center gap-[14px] mb-[14px]">
              <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Our Values</span>
              <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
            </div>
            <h2 className="dp text-[clamp(1.6rem,4vw,2.8rem)] font-bold text-[#1a0f0a] leading-[1.1]">
              What we
              <em className="dp text-[var(--color-gold)] italic"> stand for.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {values.map(({icon:Icon,title,desc},i)=>(
              <div key={`val-${i}`} className="val-card rounded-[18px] p-[clamp(24px,3vw,32px)_clamp(20px,2.5vw,28px)] border transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1" style={{ background:"linear-gradient(135deg,#fdfcf9,rgba(255,255,255,0.95))", borderColor:"rgba(201,169,110,0.2)" }}>
                <div className="w-[52px] h-[52px] rounded-[16px] bg-white/80 backdrop-blur-md flex items-center justify-center mb-[18px] shadow-lg" style={{ boxShadow:"0 8px 24px rgba(201,169,110,0.12)" }}>
                  <Icon size={22} className="text-[var(--color-gold)]"/>
                </div>
                <h3 className="dp text-[1.2rem] font-bold text-[#1a0f0a] mb-[8px]">{title}</h3>
                <p className="text-[#8a6e63] text-[0.88rem] leading-[1.75]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── MISSION + VISION ─── */}
      <section className="sp relative overflow-hidden bg-[#faf7f2]">
        <div className="inner">
          <div className="mv-grid">
            <div className="relative overflow-hidden rounded-[18px] p-[clamp(32px,5vw,48px)_clamp(24px,4vw,40px)] bg-[#1a0f0a] shadow-xl">
              <div className="absolute top-[-24px] right-[-24px] opacity-[0.07] pointer-events-none">
                <svg width="150" height="150" viewBox="0 0 100 100">
                  {[0,72,144,216,288].map(a=>(<ellipse key={a} cx="50" cy="20" rx="12" ry="24" fill="#C9A15A" transform={`rotate(${a} 50 50)`}/>))}
                </svg>
              </div>
              <div className="inline-block bg-[#C9A15A]/15 text-[var(--color-gold)] text-[10px] font-bold tracking-[0.2em] uppercase rounded-[18px] px-[14px] py-1 mb-[18px]">Our Mission</div>
              <h3 className="dp text-[clamp(1.6rem,4vw,2rem)] font-bold text-white leading-[1.15] mb-4">
                Handcrafted floral
                <br/><em className="dp gold-text italic">experiences.</em>
              </h3>
              <p className="text-white/50 text-[0.93rem] leading-[1.75]">
                Deliver handcrafted floral experiences that create memorable moments. Every arrangement is designed with intention, crafted with care, and delivered with a promise of freshness that transforms ordinary days into celebrations.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[18px] p-[clamp(32px,5vw,48px)_clamp(24px,4vw,40px)] shadow-xl" style={{ background:"linear-gradient(135deg,#c9a96e,#a07840)" }}>
              <div className="absolute top-[-24px] right-[-24px] opacity-[0.15] pointer-events-none">
                <svg width="150" height="150" viewBox="0 0 100 100">
                  {[0,60,120,180,240,300].map(a=>(<ellipse key={a} cx="50" cy="20" rx="10" ry="22" fill="#fff" transform={`rotate(${a} 50 50)`}/>))}
                </svg>
              </div>
              <div className="inline-block bg-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-[18px] px-[14px] py-1 mb-[18px]">Our Vision</div>
              <h3 className="dp text-[clamp(1.6rem,4vw,2rem)] font-bold text-white leading-[1.15] mb-4">
                Most trusted florist
                <br/><em className="dp italic text-white/85">across Delhi NCR.</em>
              </h3>
              <p className="text-white/75 text-[0.93rem] leading-[1.75]">
                Become the most trusted premium florist across Delhi NCR. We aspire to redefine how people experience flowers — making premium quality, same-day delivery, and exceptional service the new standard for floral gifting in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="sp relative overflow-hidden" style={{ background:"linear-gradient(135deg,#1a0f0a 0%,#2a1810 100%)" }}>
        <div style={{ position:"absolute",top:"50%",left:"50%",opacity:0.04,pointerEvents:"none", animation:"rotateSlow 80s linear infinite",width:"480px",height:"480px" }}>
          <svg width="480" height="480" viewBox="0 0 100 100">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>(<ellipse key={a} cx="50" cy="15" rx="8" ry="18" fill="#c9a96e" transform={`rotate(${a} 50 50)`}/>))}
          </svg>
        </div>
        <div className="inner-sm text-center relative" style={{ maxWidth:"600px", margin:"0 auto", padding:"0 24px" }}>
          <div className="flex justify-center gap-[6px] mb-6">
            {[...Array(3)].map((_,i)=>(<svg key={`p-${i}`} width="15" height="15" viewBox="0 0 100 100" style={{opacity:0.85}}>
              {[0,72,144,216,288].map(a=>(<ellipse key={a} cx="50" cy="24" rx="9" ry="20" fill="#c9a96e" transform={`rotate(${a} 50 50)`}/>))}
              <circle cx="50" cy="50" r="7" fill="#f0d5a0"/>
            </svg>))}
          </div>
          <h2 className="dp text-[clamp(1.8rem,5vw,3.2rem)] font-bold text-white leading-[1.06] mb-[18px]">
            Let's create something
            <br/><em className="dp gold-text italic">beautiful together.</em>
          </h2>
          <p className="text-white/45 text-[clamp(0.9rem,2.5vw,1rem)] leading-[1.75] max-w-[420px] mx-auto mb-9">
            Whether it's a single bouquet or a full wedding décor — we'd love to hear about your occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="cta-pri px-7 py-[15px]"><Sparkles size={15} className="btn-icon"/> Get in Touch</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-ghost text-[#25d366] px-[26px] py-[14px] text-[14px] border border-[#25d366]/30 bg-[#25d366]/5 hover:bg-[#25d366]/15 hover:border-[#25d366]/50 transition-all duration-300"><MessageCircle size={15} className="btn-icon"/> WhatsApp Us</a>
            <a href="tel:+919540849659" className="cta-ghost text-white/60 px-6 py-[14px] text-[14px] border border-white/10 hover:border-white/25 hover:text-white/80 transition-all duration-300"><Phone size={14} className="btn-icon"/> Call Us</a>
          </div>
          <p className="text-white/20 text-[12px] mt-6">Available 9 AM – 9 PM daily · Same-day delivery across Delhi NCR</p>
        </div>
      </section>
    </div>
  </>
);

export default AboutUs;
