import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Truck, HeadphonesIcon, Sparkles, Calendar, Plus, Minus } from "lucide-react";
import { CONTACT_PHONE_1, WHATSAPP_LINK } from "../constants";

const faqs = [
  { icon: ShoppingBag, question: "How to order?", answer: "Browse our categories, select your desired flowers or arrangements, add them to your cart, and proceed to checkout. You can choose your delivery date, add a personalized message, and pay securely online. For custom orders, simply contact us via WhatsApp or phone." },
  { icon: Truck, question: "How same day delivery works?", answer: "Place your order before 4 PM and we'll deliver it the same day across Delhi NCR. Orders placed after 4 PM are delivered the next morning. Same-day delivery is available 7 days a week. Express delivery (2-3 hours) is also available at an additional charge — just call us to confirm." },
  { icon: HeadphonesIcon, question: "How to contact florist?", answer: "You can reach us by phone at +91-9540849659, via WhatsApp at wa.me/919540849659, or email us at hello@shivamflorist.com. Our team is available from 9 AM to 10 PM every day and typically responds within 10 minutes during business hours." },
  { icon: Sparkles, question: "How custom bouquet works?", answer: "Tell us your preferred flowers, color scheme, occasion, and budget. Our expert florists will design a bespoke arrangement just for you. Custom bouquets start at ₹1,999 and can be tailored for weddings, anniversaries, proposals, or any special moment. Contact us to discuss your vision." },
  { icon: Calendar, question: "Can I schedule delivery?", answer: "Yes! During checkout you can select your preferred delivery date. We recommend scheduling at least 24 hours in advance for guaranteed availability. For weddings and large events, please book 1-2 weeks ahead so we can arrange the freshest blooms and logistics." },
];

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#0d0805] min-h-screen text-white">
      <section className="relative flex items-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0d0805 0%,#1a0f0a 40%,#120c08 100%)", minHeight:"55vh" }}>
        <div style={{ position:"absolute",left:0,top:0,bottom:0,width:"3px", background:"linear-gradient(180deg,transparent,#c9a96e 30%,#f0d5a0 60%,#c9a96e 85%,transparent)" }}/>
        <div className="inner" style={{width:"100%"}}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin:"-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="inline-flex items-center gap-[10px] mb-[26px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-gold)]" style={{ animation:"pulseDot 2.4s ease-in-out infinite" }}/>
              <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Help Center</span>
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="dp text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-white max-w-[680px] mb-[22px] tracking-[-0.01em] leading-[1.08]">
              How can we
              <br/><em className="dp gold-text italic">help you?</em>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="text-white/50 leading-[1.75] max-w-[480px] mb-[36px] font-light">
              Find answers to the most common questions about ordering, delivery, and more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="sp relative overflow-hidden bg-[#faf7f2]">
        <div className="inner" style={{maxWidth:"800px"}}>
          <div className="flex items-center gap-[14px] mb-8">
            <div className="h-[1px] w-[28px] bg-[var(--color-gold)]"/>
            <span className="text-[var(--color-gold)] text-[11px] font-bold tracking-[0.2em] uppercase">Frequently Asked Questions</span>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map(({icon:Icon,question,answer},i)=>(
              <div key={`faq-${i}`} className={`rounded-[18px] border transition-all duration-300 ${openIndex === i ? 'bg-white shadow-lg border-[var(--color-gold)]/30' : 'bg-white/60 border-white/60 hover:bg-white hover:shadow-sm'}`}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 lg:px-8 py-5 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(201,169,110,0.1)] flex items-center justify-center shrink-0"><Icon size={16} className="text-[var(--color-gold)]"/></div>
                    <span className="font-bold text-sm text-[#1a0f0a]">{question}</span>
                  </div>
                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'border-[var(--color-gold)] text-[var(--color-gold)] bg-[var(--color-gold)]/10' : 'border-stone-200 text-stone-400'}`}>
                    {openIndex === i ? <Minus size={12}/> : <Plus size={12}/>}
                  </span>
                </button>
                <AnimatePresence>{openIndex === i && (
                  <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.3}}>
                    <div className="px-6 lg:px-8 pb-6 text-stone-500 text-sm leading-relaxed font-light border-t border-stone-100 pt-4 ml-14">{answer}</div>
                  </motion.div>
                )}</AnimatePresence>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 pt-6 border-t border-stone-200">
            <p className="text-stone-400 text-sm font-light">Still have questions? <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] font-semibold hover:underline">Chat with us</a> or call <a href={`tel:${CONTACT_PHONE_1}`} className="text-[var(--color-gold)] font-semibold hover:underline">{CONTACT_PHONE_1}</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
