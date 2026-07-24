import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Mail, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import RevealSection from "../components/RevealSection";
import Button from "../components/ui/Button";
import { CONTACT_PHONE_1, CONTACT_PHONE_2, WHATSAPP_LINK } from "../constants";

const contactCards = [
  { icon: Phone, title: "Call Us", lines: [CONTACT_PHONE_1, CONTACT_PHONE_2], href: `tel:${CONTACT_PHONE_1}`, label: "Call Now" },
  { icon: MessageCircle, title: "WhatsApp", lines: ["Chat with our team"], href: WHATSAPP_LINK, label: "Start Chat" },
  { icon: Mail, title: "Email", lines: ["hello@shivamflorist.com"], href: "mailto:hello@shivamflorist.com", label: "Send Email" },
  { icon: Clock, title: "Working Hours", lines: ["Monday - Sunday", "9 AM - 10 PM"], href: null, label: null },
];

const locations = ["Noida", "Greater Noida", "Delhi", "Ghaziabad", "Gurgaon", "Faridabad", "Delhi NCR"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (form.phone.length < 10) errs.phone = "Enter valid phone number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter valid email";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-[#0d0805] min-h-screen text-white">
      <section className="relative flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)", minHeight: "55vh" }}>
        <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"3px", background:"linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)" }}/>
        <div className="inner" style={{width:"100%"}}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)]" style={{ animation:"pulseDot 2.4s ease-in-out infinite" }}/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Contact Us</span>
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white max-w-[680px] mb-[22px] tracking-[-0.01em] leading-[1.08]">
              We'd love to
              <br/><em className="dp gold-text italic">hear from you.</em>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="text-white/50 leading-[1.75] max-w-[480px] mb-[36px] font-light">
              Have a question, custom order, or wedding vision? We're here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="sp relative overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)" }}>
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.5),transparent)" }}/>
        <div className="inner">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {contactCards.map(({icon:Icon,title,lines,href,label},i)=>(
              <div key={`cc-${i}`} className="rounded-[18px] p-6 lg:p-7 text-center transition-all duration-500 group hover:bg-white/10" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-12 h-12 rounded-full bg-[rgba(201,169,110,0.12)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-400"><Icon size={20} className="text-[var(--color-gold)]"/></div>
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                {lines.map((l,j)=><p key={j} className="text-white/50 text-xs font-light">{l}</p>)}
                {href && label && <a href={href} target={href.startsWith("http")?"_blank":""} rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--color-gold)] text-[10px] font-bold tracking-wider uppercase mt-3 hover:text-white transition-colors">{label} <ArrowRight size={11}/></a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="inner py-16 lg:py-20 px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* ─── Form ─── */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-[14px] mb-8">
              <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Send a Message</span>
            </div>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-900/30 border border-emerald-700/40 rounded-2xl px-8 py-10 text-center">
                <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-4"/>
                <p className="text-emerald-300 font-bold text-sm">Message sent successfully!</p>
                <p className="text-stone-400 text-xs mt-2 font-light">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[{key:"name",label:"Your Name",type:"text"},{key:"phone",label:"Phone Number",type:"tel"},{key:"email",label:"Email Address",type:"email"}].map(({key,label,type})=>(
                  <div key={key}>
                    <label className="text-white/50 text-[11px] font-bold tracking-wider uppercase block mb-2">{label}</label>
                    <input type={type} value={form[key]} onChange={(e)=>setForm({...form,[key]:e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-stone-500 focus:border-[var(--color-gold)]/50 focus:outline-none transition-all duration-300"/>
                    {errors[key] && <p className="text-rose-400 text-[10px] mt-1">{errors[key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="text-white/50 text-[11px] font-bold tracking-wider uppercase block mb-2">Message</label>
                  <textarea rows={4} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} placeholder="Tell us about your requirement..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-stone-500 focus:border-[var(--color-gold)]/50 focus:outline-none transition-all duration-300 resize-none"/>
                </div>
                <button type="submit" className="cta-pri px-8 py-3.5 text-sm inline-flex items-center gap-2"><Send size={14}/> Send Message</button>
              </form>
            )}
          </motion.div>

          {/* ─── Locations + Map ─── */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="flex items-center gap-[14px] mb-8">
              <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Service Areas</span>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {locations.map((loc)=>(
                <span key={loc} className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white/70 text-sm font-light hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)] transition-all duration-300"><MapPin size={12} className="inline mr-1.5"/>{loc}</span>
              ))}
            </div>

            {/* Google Maps Placeholder */}
            <div className="rounded-[20px] overflow-hidden border border-white/10 h-[280px] lg:h-[340px] bg-[rgba(255,255,255,0.03)] relative group">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin size={36} className="text-[var(--color-gold)] mb-4 opacity-50"/>
                <p className="text-white/40 text-sm font-light">Google Maps Integration</p>
                <p className="text-white/20 text-xs mt-1 font-light">Serving all major Delhi NCR cities</p>
                <p className="text-white/10 text-[10px] mt-4">Map will render here with live location</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,169,110,0.05)] to-transparent pointer-events-none"/>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
