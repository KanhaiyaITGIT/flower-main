import { motion, AnimatePresence } from "framer-motion";
import { ShieldBan, AlertTriangle, PackageX, Eye, RefreshCw, Ban, Phone, MessageCircle, Camera } from "lucide-react";
import { BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB, CONTACT_PHONE_1, WHATSAPP_LINK } from "../constants";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/ui/SectionHeading";

const importantNotice = {
  icon: AlertTriangle,
  title: "Important Notice: Perishable Products",
  content: `${BUSINESS_NAME_MAIN} ${BUSINESS_NAME_SUB} deals exclusively in handcrafted fresh flowers — a perishable and delicate product. Unlike manufactured goods, fresh flowers have a limited lifespan and are sensitive to handling and environmental conditions. By placing an order, you acknowledge and accept the policies below.`,
};

const sections = [
  {
    icon: ShieldBan,
    title: "Non-Refundable After Delivery",
    content: "All fresh flower arrangements, bouquets, and other perishable floral products are NON-REFUNDABLE once successfully delivered. This is standard industry practice for perishable goods. Once the product has been received by you or your recipient in satisfactory condition, we cannot accept returns or process refunds.",
  },
  {
    icon: PackageX,
    title: "Wrong Product Delivered",
    content: "If the product delivered is significantly different from what was ordered (e.g., wrong arrangement type, incorrect flower selection, or completely different product), please contact us immediately. Refunds or replacements may be considered on a case-by-case basis upon verification.",
  },
  {
    icon: Camera,
    title: "Damaged Product on Arrival",
    content: "If your order arrives in visibly damaged condition — crushed stems, broken vase, wilted blooms, or packaging severely compromised — please document the issue with clear photographs and contact us within 24 hours of delivery. Claims submitted after 24 hours or without photographic evidence cannot be processed.",
  },
  {
    icon: Ban,
    title: "Delivery Failure (Caused by Us)",
    content: "If we fail to deliver your order due to reasons attributable to us — such as logistical error, incorrect address used despite correct information provided, or our delivery partner's fault — a full refund or complimentary replacement will be offered. Please note that failed delivery due to recipient unavailability, incorrect address provided by you, or refusal to accept does not qualify.",
  },
  {
    icon: RefreshCw,
    title: "Duplicate Payment",
    content: "In the rare event of a duplicate payment due to a technical glitch or processing error, the extra amount will be fully refunded within 5–7 business days. Please share the transaction reference details so we can verify and process the refund promptly.",
  },
  {
    icon: Eye,
    title: "Cancelled by Our Team",
    content: "In the unlikely event that we are unable to fulfil your order due to stock unavailability, delivery constraints, or any other reason on our end, we will notify you and issue a full refund. You will not be charged for orders we cannot fulfil.",
  },
  {
    icon: AlertTriangle,
    title: "Reporting & Evidence Requirements",
    content: "All concerns regarding product quality, damage, or incorrect delivery must be reported within 24 hours of delivery. Clear photographs showing the issue from multiple angles are mandatory for assessment. We reserve the right to deny claims that do not meet these requirements or appear to be fraudulent.",
  },
  {
    icon: ShieldBan,
    title: "Remedies: Replacement or Store Credit",
    content: "For approved claims, we may — at our sole discretion — offer a replacement product (subject to availability and delivery feasibility) or store credit of equivalent value. Cash refunds are generally reserved for cases of delivery failure caused by us, duplicate payments, or orders cancelled by our team.",
  },
  {
    icon: Phone,
    title: "Contact for Disputes",
    content: `For any refund or dispute-related inquiries, please contact us at ${CONTACT_PHONE_1} or via WhatsApp. Our team will review your case and respond within 24–48 hours. Please have your order ID and supporting evidence ready to expedite the process.`,
  },
];

const RefundPolicy = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#0a0604]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent" />
        </div>

        <section className="relative pt-28 pb-16 px-6 overflow-hidden">
          <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full bg-[#c9a96e]/5 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-4"
            >
              <span className="inline-flex items-center gap-2 text-[#c9a96e] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                <ShieldBan size={14} /> Policy
              </span>
              <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
                Refund <br/>
                <span className="italic font-medium bg-gradient-to-r from-[#f0d5a0] via-[#c9a96e] to-[#a07840] bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-stone-400 text-sm mt-4 font-light max-w-lg mx-auto">
                Fair and transparent policies for our handcrafted floral products at {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}.
              </p>
              <p className="text-stone-500 text-[11px] mt-2 font-medium tracking-wider uppercase">
                Last updated: July 2026
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <article className="bg-gradient-to-r from-[#c9a96e]/5 to-transparent border border-[#c9a96e]/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle size={18} className="text-[#c9a96e]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif-display text-lg font-bold text-white mb-2">{importantNotice.title}</h2>
                  <p className="text-stone-400 text-sm leading-relaxed font-light">{importantNotice.content}</p>
                </div>
              </div>
            </article>
          </motion.div>

          <div className="space-y-5">
            {sections.map(({ icon: Icon, title, content }, i) => (
              <motion.div
                key={`refund-${i}`}
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
              {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB} · Fresh flowers, fair policies
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;