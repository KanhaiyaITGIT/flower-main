import { motion, AnimatePresence } from "framer-motion";
import { Truck, Clock, MapPin, Timer, IndianRupee, UserX, RotateCcw, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB, CONTACT_PHONE_1, WHATSAPP_LINK } from "../constants";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/ui/SectionHeading";

const sections = [
  {
    icon: Clock,
    title: "Same-Day Delivery",
    content: "Orders placed before 4:00 PM Monday through Saturday are eligible for same-day delivery within our serviceable areas. Orders placed after 4:00 PM will be delivered the next day. Sunday deliveries are limited and subject to availability — please confirm with our team when placing your order.",
  },
  {
    icon: Timer,
    title: "Express Delivery",
    content: "Need it urgently? Express delivery is available for select products and areas. Please contact us directly via phone or WhatsApp to check express delivery feasibility and applicable charges. Express orders are prioritized and delivered within 2–4 hours of placement, subject to product and location availability.",
  },
  {
    icon: MapPin,
    title: "Delivery Areas",
    content: "We currently deliver across Delhi NCR, including: Delhi (all major areas), Gurugram, Noida, Ghaziabad, Faridabad, and Greater Noida. Delivery to specific sectors, societies, or gated communities may require additional verification. If your area is not listed, please contact us and we will do our best to accommodate.",
  },
  {
    icon: Truck,
    title: "Delivery Timings",
    content: "Our standard delivery window is 9:00 AM to 10:00 PM, 7 days a week. A 2-hour delivery slot is provided at the time of order confirmation. While we strive to deliver within the selected window, actual delivery time may vary due to traffic, weather, or security protocols at the delivery location.",
  },
  {
    icon: IndianRupee,
    title: "Free Delivery",
    content: "Free delivery is applicable on all orders above ₹999 within our standard delivery areas. Orders below ₹999 will incur a nominal delivery charge, which will be displayed at checkout. Free delivery promotions may be offered from time to time and will be clearly communicated.",
  },
  {
    icon: UserX,
    title: "Recipient Unavailable",
    content: "If the recipient is not available at the time of delivery, our delivery partner will attempt to contact the recipient and the sender using the phone numbers provided. We will attempt to deliver to an alternative person available at the address or reschedule delivery for a later time on the same day.",
  },
  {
    icon: RotateCcw,
    title: "Failed Delivery Attempts",
    content: "After three failed delivery attempts or if the recipient refuses to accept the order, the order will be returned to our studio. In such cases, the order value (minus delivery and handling charges) may be refunded or converted to store credit. No refunds are provided for orders where delivery failed due to incorrect or incomplete address provided by the customer.",
  },
  {
    icon: MessageCircle,
    title: "Contact for Delivery Issues",
    content: `For any delivery-related concerns — including delays, wrong address, or rescheduling requests — please call us at ${CONTACT_PHONE_1} or message us on WhatsApp. Our team is available 9 AM to 9 PM daily and will respond promptly to resolve your issue.`,
  },
];

const ShippingPolicy = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#0a0604]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent" />
        </div>

        <section className="relative pt-28 pb-16 px-6 overflow-hidden">
          <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#c9a96e]/5 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-4"
            >
              <span className="inline-flex items-center gap-2 text-[#c9a96e] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                <Truck size={14} /> Delivery
              </span>
              <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
                Shipping <br/>
                <span className="italic font-medium bg-gradient-to-r from-[#f0d5a0] via-[#c9a96e] to-[#a07840] bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-stone-400 text-sm mt-4 font-light max-w-lg mx-auto">
                Everything you need to know about delivery with {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}.
              </p>
              <p className="text-stone-500 text-[11px] mt-2 font-medium tracking-wider uppercase">
                Last updated: July 2026
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="space-y-5">
            {sections.map(({ icon: Icon, title, content }, i) => (
              <motion.div
                key={`shipping-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group"
              >
                <article className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-[#c9a96e]/15 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#c9a96e]/20 transition-colors duration-300">
                      <Icon size={18} className="text-[#c9a96e]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-serif-display text-lg font-bold text-white mb-2">{title}</h2>
                      <p className="text-stone-400 text-sm leading-relaxed font-light">{content}</p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-stone-500 text-xs font-light">
              {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB} · Delivering freshness across Delhi NCR
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;