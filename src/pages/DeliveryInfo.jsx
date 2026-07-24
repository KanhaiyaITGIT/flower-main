import { motion } from "framer-motion";
import { Truck, Zap, Moon, Clock, MapPin, Sparkles, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import {
  BUSINESS_NAME_MAIN,
  BUSINESS_NAME_SUB,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
} from "../constants";

const deliverySections = [
  { icon: Truck, title: "Same Day Delivery", desc: "Order before 4 PM and we'll deliver your flowers the very same day. Our team works quickly to ensure your bouquet arrives fresh and beautiful, no matter the occasion.", highlight: "Order by 4 PM for same-day dispatch" },
  { icon: Zap, title: "Express Delivery", desc: "Need flowers urgently? Our express delivery option gets your order to you within 2-3 hours. An additional charge applies for this premium service.", highlight: "Delivery within 2-3 hours" },
  { icon: Moon, title: "Midnight Delivery", desc: "Surprise your loved ones at midnight! We offer late-night deliveries on special request. Contact us in advance to arrange a magical midnight surprise.", highlight: "Available on advance request" },
  { icon: Clock, title: "Delivery Timings", desc: "Our standard delivery hours are 9:00 AM to 10:00 PM, seven days a week. We're open every day including public holidays to serve you.", highlight: "9 AM – 10 PM daily" },
  { icon: MapPin, title: "Delhi NCR Coverage", desc: "We deliver to all major cities across Delhi NCR — including Noida, Greater Noida, Delhi, New Delhi, Ghaziabad, Gurugram, and Faridabad.", highlight: "Full Delhi NCR coverage" },
  { icon: Sparkles, title: "Festival Delivery", desc: "During peak festivals like Diwali, Holi, and Valentine's Day, we recommend booking your delivery at least 3-4 days in advance to guarantee availability.", highlight: "Advance booking recommended" },
  { icon: Heart, title: "Wedding Delivery", desc: "We specialize in bulk wedding floristry. From mandap flowers to bridal bouquets, our team handles large-scale deliveries with precision and care.", highlight: "Bulk & event delivery" },
  { icon: Briefcase, title: "Corporate Delivery", desc: "Impress your team and clients with premium floral arrangements. We handle bulk corporate orders for offices, events, and gifting with branded packaging.", highlight: "Bulk orders for offices" },
];

const DeliveryInfo = () => (
  <div className="bg-[#0d0805] min-h-screen text-white">
    <section className="relative flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)", minHeight: "55vh" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)" }} />
      <div className="inner" style={{ width: "100%" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
            <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)]" style={{ animation: "pulseDot 2.4s ease-in-out infinite" }} />
            <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Delivery Info</span>
          </motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white max-w-[680px] mb-[22px] tracking-[-0.01em] leading-[1.08]">
            Delivery
            <br /><em className="dp gold-text italic">Information</em>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="text-white/50 leading-[1.75] max-w-[460px] mb-[36px] font-light">
            Everything you need to know about how we deliver freshness to your doorstep.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="sp relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0f0b08,#1a1108,#0f0b08)" }}>
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg,transparent,rgba(201,169,110,0.5),transparent)" }} />
      <div className="inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverySections.map(({ icon: Icon, title, desc, highlight }, i) => (
            <motion.div key={`delivery-${i}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-[18px] p-[clamp(24px,3vw,36px)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--color-gold)]/5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-start gap-5">
                <div className="w-[52px] h-[52px] rounded-[16px] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ background: "rgba(201,169,110,0.12)", boxShadow: "0 4px 16px rgba(201,169,110,0.08)" }}>
                  <Icon size={24} className="text-[var(--color-gold)]" />
                </div>
                <div className="flex-1">
                  <h3 className="dp text-[1.2rem] font-bold text-white mb-[8px] group-hover:text-[var(--color-gold)] transition-colors duration-300">{title}</h3>
                  <p className="text-white/50 text-[0.9rem] leading-[1.75] mb-[14px]">{desc}</p>
                  <span className="inline-block text-[11px] font-bold tracking-[0.06em] uppercase rounded-[20px] px-4 py-[5px] transition-all duration-300 group-hover:scale-[1.02]" style={{ background: "rgba(201,169,110,0.1)", color: "var(--color-gold)" }}>
                    {highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="sp relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1a0f0a 0%,#2a1810 100%)" }}>
      <div className="inner-sm text-center relative">
        <h2 className="dp text-[clamp(1.8rem,5vw,3rem)] font-bold text-white leading-[1.06] mb-[18px]">
          Ready to order?
          <br /><em className="dp gold-text italic">We deliver freshness.</em>
        </h2>
        <p className="text-white/45 leading-[1.75] max-w-[420px] mx-auto mb-9">
          Place your order now and experience the Shivam Florist difference.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="gold" size="lg" icon={Truck} href="/category?cat=Bouquets">
            Start Shopping
          </Button>
          <Button variant="ghost" size="lg" icon={MessageCircle} href={WHATSAPP_LINK}>
            Ask a Question
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default DeliveryInfo;
