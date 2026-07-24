import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, UserCheck, Database, Lock, Share2, Cookie, FileText, Mail, Phone } from "lucide-react";
import { BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB, CONTACT_PHONE_1, CONTACT_PHONE_2 } from "../constants";
import RevealSection from "../components/RevealSection";
import SectionHeading from "../components/ui/SectionHeading";

const sections = [
  {
    icon: UserCheck,
    title: "Information We Collect",
    content: "When you place an order or interact with us, we collect personal information necessary to fulfill your request. This includes your full name, phone number, email address, delivery address, and order details. We may also collect payment information (processed securely through our payment gateway partners) and optional details such as occasion type or gift message.",
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: "We use your information exclusively to process and deliver your orders, communicate order status updates, provide customer support, send delivery confirmations via WhatsApp or SMS, and improve our services. With your consent, we may occasionally send promotional offers or seasonal updates, which you can opt out of at any time.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: "Your data security is a priority. We implement SSL encryption across our website to protect information transmitted between your browser and our servers. Payment data is handled directly by our PCI-compliant payment partners — we never store full credit/debit card numbers. Access to personal data is restricted to authorized personnel only.",
  },
  {
    icon: Share2,
    title: "Third-Party Sharing",
    content: "We do not sell, rent, or trade your personal information to third parties. We may share necessary information with trusted partners who assist in order fulfilment — such as delivery partners, payment processors, and SMS/WhatsApp service providers — only to the extent required to complete your order. These partners are contractually bound to protect your data.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    content: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and remember your preferences. You can control cookie settings through your browser. Disabling cookies may affect certain functionality of the website but will not prevent you from placing orders.",
  },
  {
    icon: FileText,
    title: "Your Rights",
    content: "You have the right to access, correct, or request deletion of your personal data held by us. You may also withdraw consent for marketing communications at any time. To exercise these rights, please contact us directly. We will respond to your request within 30 days as per applicable data protection laws.",
  },
  {
    icon: Mail,
    title: "Contact Information",
    content: `If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at ${CONTACT_PHONE_1} or ${CONTACT_PHONE_2}, or reach out via WhatsApp. We are available 9 AM to 9 PM daily.`,
  },
];

const PrivacyPolicy = () => {
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
                <ShieldCheck size={14} /> Privacy
              </span>
              <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
                Privacy <br/>
                <span className="italic font-medium bg-gradient-to-r from-[#f0d5a0] via-[#c9a96e] to-[#a07840] bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-stone-400 text-sm mt-4 font-light max-w-lg mx-auto">
                How {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB} collects, uses, and protects your personal information.
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
                key={`privacy-${i}`}
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
              {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB} · Your privacy matters to us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;