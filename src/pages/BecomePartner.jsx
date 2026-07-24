import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, Award, TrendingUp, Users, Globe, Shield, CheckCircle2, ArrowRight, Send } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const benefits = [
  { icon: Award, title: "Premium Brand Association", desc: "Partner with one of Delhi NCR's most trusted floral brands and enhance your credibility." },
  { icon: TrendingUp, title: "Steady Revenue", desc: "Earn consistent income through regular bulk orders, subscriptions, and referral commissions." },
  { icon: Users, title: "Dedicated Support", desc: "Get a dedicated account manager, priority delivery, and marketing support for your business." },
  { icon: Globe, title: "Expanded Reach", desc: "Leverage our delivery network across 7+ cities in Delhi NCR to serve more clients." },
  { icon: Shield, title: "Quality Assurance", desc: "All flowers are farm-fresh, handpicked daily, and quality-checked before every delivery." },
  { icon: Handshake, title: "Flexible Partnership", desc: "Choose from supply, consignment, referral, or co-branded partnership models that suit your business." },
];

const requirements = [
  "Valid business registration or GST certificate",
  "Minimum order commitment of ₹10,000/month",
  "Professional communication and timely payments",
  "Alignment with our quality and service standards",
  "Located within Delhi NCR service area",
];

const BecomePartner = () => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", type: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.business && form.phone) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", business: "", phone: "", email: "", type: "" });
    }
  };

  return (
    <div className="bg-[#0d0805] min-h-screen text-white">
      <section className="relative flex items-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)", minHeight:"55vh" }}>
        <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"3px", background:"linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)" }}/>
        <div className="inner" style={{width:"100%"}}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin:"-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)]" style={{ animation:"pulseDot 2.4s ease-in-out infinite" }}/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Become a Partner</span>
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white max-w-[680px] mb-[22px] tracking-[-0.01em] leading-[1.08]">
              Let's grow
              <br/><em className="dp gold-text italic">together.</em>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="text-white/50 leading-[1.75] max-w-[520px] mb-[36px] font-light">
              Join Delhi NCR's fastest-growing floral network. We're looking for passionate partners who believe in quality and customer delight.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sp relative overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)" }}>
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.5),transparent)" }}/>
        <div className="inner">
          <div className="flex items-center gap-[14px] mb-8">
            <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
            <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Partner Benefits</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {benefits.map(({icon:Icon,title,desc},i)=>(
              <div key={`ben-${i}`} className="tm-card rounded-[18px] p-6 lg:p-7 transition-all duration-500 group" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-11 h-11 rounded-full bg-[rgba(201,169,110,0.12)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400"><Icon size={18} className="text-[var(--color-gold)]"/></div>
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-white/40 text-xs font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Form */}
      <section className="sp relative overflow-hidden bg-[#faf7f2]">
        <div className="inner">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <div className="flex items-center gap-[14px] mb-6">
                <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
                <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Requirements</span>
              </div>
              <ul className="space-y-3">
                {requirements.map((req,i)=>(
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[var(--color-gold)] shrink-0 mt-0.5"/>
                    <span className="text-stone-600 text-sm font-light">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 rounded-[16px] bg-[rgba(201,169,110,0.06)] border border-[rgba(201,169,110,0.15)]">
                <p className="text-stone-500 text-xs font-light">Ready to apply? <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] font-semibold hover:underline">Chat on WhatsApp</a> or fill the form.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[14px] mb-6">
                <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
                <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Application Form</span>
              </div>
              {submitted ? (
                <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="bg-emerald-900/30 border border-emerald-700/40 rounded-2xl px-8 py-10 text-center">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-4"/>
                  <p className="text-emerald-300 font-bold text-sm">Application submitted!</p>
                  <p className="text-stone-400 text-xs mt-2">Our team will review and contact you within 48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[{key:"name",label:"Your Name",type:"text"},{key:"business",label:"Business Name",type:"text"},{key:"phone",label:"Phone Number",type:"tel"},{key:"email",label:"Email Address",type:"email"}].map(({key,label,type})=>(
                    <div key={key}>
                      <input type={type} value={form[key]} onChange={(e)=>setForm({...form,[key]:e.target.value})} placeholder={label}
                        className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 text-stone-700 text-sm placeholder-stone-400 focus:border-[var(--color-gold)]/50 focus:outline-none transition-all duration-300"/>
                    </div>
                  ))}
                  <select value={form.type} onChange={(e)=>setForm({...form,type:e.target.value})} className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 text-stone-500 text-sm focus:border-[var(--color-gold)]/50 focus:outline-none transition-all duration-300">
                    <option value="">Partnership Type</option>
                    <option>Florist Supply</option>
                    <option>Wedding Planner</option>
                    <option>Corporate Partner</option>
                    <option>Hotel / Restaurant</option>
                    <option>Event Planner</option>
                    <option>Gift Shop</option>
                  </select>
                  <button type="submit" className="cta-pri px-8 py-3.5 text-sm inline-flex items-center gap-2"><Send size={14}/> Apply Now</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomePartner;
