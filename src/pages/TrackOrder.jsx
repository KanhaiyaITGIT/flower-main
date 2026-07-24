import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PackageSearch, Search, Phone, Hash, Package, Clock, MapPin, CheckCircle2, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_PHONE_1, WHATSAPP_LINK } from "../constants";
import Button from "../components/ui/Button";

const timelineSteps = [
  { icon: Package, label: "Order Confirmed", desc: "Your order has been placed and confirmed", time: "10:30 AM" },
  { icon: Package, label: "Preparing Bouquet", desc: "Our florists are handcrafting your arrangement", time: "11:45 AM" },
  { icon: Truck, label: "Out for Delivery", desc: "Your bouquet is on its way to you", time: "1:15 PM" },
  { icon: CheckCircle2, label: "Delivered", desc: "Your order has been delivered successfully", time: "2:00 PM" },
];

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [searched, setSearched] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (orderId.trim() && phone.trim()) setSearched(true);
  };

  return (
    <div className="bg-[#0d0805] min-h-screen text-white">
      <section className="relative flex items-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)", minHeight:"55vh" }}>
        <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"3px", background:"linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)" }}/>
        <div className="inner" style={{width:"100%"}}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin:"-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)]" style={{ animation:"pulseDot 2.4s ease-in-out infinite" }}/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Track Your Order</span>
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white max-w-[680px] mb-[22px] tracking-[-0.01em] leading-[1.08]">
              Where's my
              <br/><em className="dp gold-text italic">bouquet?</em>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="text-white/50 leading-[1.75] max-w-[480px] mb-[36px] font-light">
              Enter your order ID and phone number to track your delivery in real time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="sp relative overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)" }}>
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.5),transparent)" }}/>
        <div className="inner">
          <form onSubmit={handleTrack} className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="relative">
                <Hash size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"/>
                <input type="text" value={orderId} onChange={(e)=>setOrderId(e.target.value)} placeholder="Order ID" className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-5 py-4 text-white text-sm placeholder-stone-500 focus:border-[var(--color-gold)]/50 focus:outline-none transition-all duration-300"/>
              </div>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"/>
                <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-5 py-4 text-white text-sm placeholder-stone-500 focus:border-[var(--color-gold)]/50 focus:outline-none transition-all duration-300"/>
              </div>
            </div>
            <button type="submit" className="cta-pri px-8 py-3.5 text-sm mx-auto block"><Search size={14} className="btn-icon"/> Track Order</button>
          </form>

          <AnimatePresence>
            {searched && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto mt-14">
                <div className="relative">
                  <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-gold)]/40 via-[var(--color-gold)]/20 to-transparent"/>
                  <div className="flex flex-col gap-10">
                    {timelineSteps.map((step, i) => (
                      <div key={i} className="relative flex items-start gap-6 pl-14">
                        <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${i <= 2 ? 'bg-[var(--color-gold)]/20 border-2 border-[var(--color-gold)]/60' : 'bg-emerald-500/20 border-2 border-emerald-400'} ${i === 2 ? 'animate-pulse shadow-[0_0_20px_rgba(201,169,110,0.3)]' : ''}`}>
                          <step.icon size={18} className={i <= 2 ? 'text-[var(--color-gold)]' : 'text-emerald-400'}/>
                        </div>
                        <div className="pt-2">
                          <p className={`font-bold text-sm ${i <= 2 ? 'text-white' : 'text-emerald-300'}`}>{step.label}</p>
                          <p className="text-white/40 text-xs font-light mt-1">{step.desc}</p>
                          <p className="text-stone-600 text-[10px] mt-1 font-mono">{step.time}</p>
                        </div>
                        {i < timelineSteps.length - 1 && (
                          <div className="absolute left-[23px] top-12 w-[2px] h-10 bg-gradient-to-b from-[var(--color-gold)]/30 to-transparent"/>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-12 pt-8 border-t border-white/5">
                  <p className="text-white/30 text-xs font-light">Need help? <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] hover:text-white transition-colors">Contact Support</a> or call <a href={`tel:${CONTACT_PHONE_1}`} className="text-white/50 hover:text-white transition-colors">{CONTACT_PHONE_1}</a></p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default TrackOrder;
