import { motion, AnimatePresence } from "framer-motion";
import { ScrollText, Shield, Package, CreditCard, Truck, XCircle, Scale, BookOpen, Globe, Mail, Phone } from "lucide-react";
import { BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB, CONTACT_PHONE_1, CONTACT_PHONE_2 } from "../constants";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/ui/SectionHeading";

const sections = [
  {
    icon: BookOpen,
    title: "Introduction",
    content: `${BUSINESS_NAME_MAIN} ${BUSINESS_NAME_SUB} ("we", "our", "us") operates the website and provides handcrafted floral arrangements, event décor, and related services. These Terms & Conditions govern your use of our services and website. By placing an order, you agree to be bound by these terms.`,
  },
  {
    icon: Shield,
    title: "Acceptance of Terms",
    content: "By accessing our website or purchasing our products, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services. We reserve the right to update these terms at any time without prior notice.",
  },
  {
    icon: Package,
    title: "Product Descriptions",
    content: "All floral arrangements displayed on our website are handcrafted by our artisans. While we strive to accurately represent colours and designs, fresh flowers are natural products and actual arrangements may vary slightly from images due to seasonal availability, bloom size, and natural variations. Substitutions of equal or greater value may be made without notice when specific flowers are unavailable.",
  },
  {
    icon: CreditCard,
    title: "Pricing and Payment",
    content: "All prices are listed in Indian Rupees (INR) and include applicable taxes unless stated otherwise. We accept payments via credit/debit cards, UPI, net banking, and other methods specified at checkout. Full payment is required at the time of ordering for all products and services. Prices are subject to change without prior notice.",
  },
  {
    icon: Scale,
    title: "Order Acceptance",
    content: "All orders are subject to acceptance and availability. We reserve the right to decline or cancel any order at our discretion, including instances where pricing errors are detected, stock is unavailable, or delivery is not feasible. In such cases, a full refund will be issued.",
  },
  {
    icon: Truck,
    title: "Delivery Policy",
    content: "We deliver to select areas within Delhi NCR. Delivery is attempted between 9 AM and 10 PM. Same-day delivery is available for orders placed before 4 PM. Free delivery applies to orders above ₹999. A delivery confirmation will be shared via WhatsApp or SMS. We are not responsible for delays caused by unforeseen circumstances such as traffic, weather, or security restrictions.",
  },
  {
    icon: XCircle,
    title: "Cancellation Policy",
    content: "Orders may be cancelled before they are dispatched. Once an order has been handed over to our delivery partner or is out for delivery, it cannot be cancelled. To cancel, please contact us immediately via phone or WhatsApp. Cancellation requests for custom décor or bulk orders must be made at least 48 hours before the scheduled delivery date.",
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: `${BUSINESS_NAME_MAIN} ${BUSINESS_NAME_SUB} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our products or services. Our total liability for any claim shall not exceed the total amount paid by you for the specific order in question.`,
  },
  {
    icon: Globe,
    title: "Intellectual Property",
    content: "All content on our website — including text, images, logos, designs, and product arrangements — is the intellectual property of Shivam Florist unless otherwise credited. You may not reproduce, distribute, or use any content without explicit written permission.",
  },
  {
    icon: Shield,
    title: "Governing Law",
    content: "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.",
  },
  {
    icon: Mail,
    title: "Contact Information",
    content: `For questions, concerns, or complaints regarding these terms, please reach out to us via phone at ${CONTACT_PHONE_1} or ${CONTACT_PHONE_2}, or through our WhatsApp channel. We aim to respond within 2 business days.`,
  },
];

const TermsConditions = () => {
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
                <ScrollText size={14} /> Legal
              </span>
              <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
                Terms &amp; <br/>
                <span className="italic font-medium bg-gradient-to-r from-[#f0d5a0] via-[#c9a96e] to-[#a07840] bg-clip-text text-transparent">Conditions</span>
              </h1>
              <p className="text-stone-400 text-sm mt-4 font-light max-w-lg mx-auto">
                Please read these terms carefully before placing an order with {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}.
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
                key={`terms-${i}`}
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
              {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB} · Handcrafted with care in Delhi NCR
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;