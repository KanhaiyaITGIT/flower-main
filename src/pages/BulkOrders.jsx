import { motion } from "framer-motion";
import { Heart, Briefcase, PartyPopper, Building2, Utensils, Church, Gift, Cake, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";
import { Link } from "react-router-dom";

const services = [
  { icon: Heart, title: "Wedding", desc: "Bulk flowers for mandap décor, stage backdrops, bridal bouquets, and guest return gifts. We handle events of all sizes with precision and freshness.", color: "#e8667a" },
  { icon: Briefcase, title: "Corporate", desc: "Branded arrangements for office gifting, client appreciation, employee milestones, and festive corporate gifting. Bulk orders with custom branding.", color: "#C9A15A" },
  { icon: PartyPopper, title: "Events", desc: "Product launches, conferences, award ceremonies, and galas. Complete floral styling for any high-profile event across Delhi NCR.", color: "#34d399" },
  { icon: Building2, title: "Hotel", desc: "Lobby arrangements, room fresheners, banquet décor, and daily/weekly floral subscriptions for hotels and resorts.", color: "#a78bfa" },
  { icon: Utensils, title: "Restaurant", desc: "Table centerpieces, entrance décor, and ambiance styling for fine dining restaurants, cafés, and lounges.", color: "#f59e0b" },
  { icon: Church, title: "Temple", desc: "Fresh flower supply for temples, devotional events, and religious ceremonies. Marigold, rose, and jasmine specialty.", color: "#ef4444" },
  { icon: Gift, title: "Birthday", desc: "Bulk birthday arrangements for offices, schools, and large celebrations. Themed setups and balloon integrations available.", color: "#ec4899" },
  { icon: Cake, title: "Anniversary", desc: "Large-scale anniversary décor, bulk bouquet orders for milestone celebrations, and luxury arrangement packages.", color: "#8b5cf6" },
];

const BulkOrders = () => (
  <div className="bg-[#0d0805] min-h-screen text-white">
    <section className="relative flex items-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)", minHeight:"55vh" }}>
      <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"3px", background:"linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)" }}/>
      <div className="inner" style={{width:"100%"}}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin:"-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
            <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)]" style={{ animation:"pulseDot 2.4s ease-in-out infinite" }}/>
            <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Bulk & Corporate Orders</span>
          </motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white max-w-[680px] mb-[22px] tracking-[-0.01em] leading-[1.08]">
            Flowers at
            <br/><em className="dp gold-text italic">any scale.</em>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="text-white/50 leading-[1.75] max-w-[520px] mb-[36px] font-light">
            From 50 corporate gift boxes to a full wedding venue — we deliver premium bulk orders with the same handcrafted quality.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="sp relative overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)" }}>
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,rgba(201,169,110,0.5),transparent)" }}/>
      <div className="inner">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map(({icon:Icon,title,desc,color},i)=>(
            <div key={`bo-${i}`} className="tm-card rounded-[18px] p-6 lg:p-7 transition-all duration-500 group" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background:`${color}22` }}><Icon size={20} style={{color}}/></div>
              <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
              <p className="text-white/40 text-xs font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-pri px-8 py-4 text-sm inline-flex items-center gap-2"><MessageCircle size={15} className="btn-icon"/> Request Bulk Quote</a>
        </div>
      </div>
    </section>
  </div>
);

export default BulkOrders;
