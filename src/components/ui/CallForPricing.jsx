import { Phone, ArrowRight } from "lucide-react";
import { CONTACT_PHONE_1 } from "../../constants";

const CallForPricing = ({ className = "" }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    window.location.href = `tel:${CONTACT_PHONE_1}`;
  };

  return (
    <a
      href={`tel:${CONTACT_PHONE_1}`}
      onClick={handleClick}
      className={`group/call inline-flex items-center gap-1.5 text-[var(--color-accent)]/80 hover:text-[var(--color-gold)] font-semibold text-xs transition-all duration-300 ${className}`}
    >
      <span className="flex items-center gap-1.5 group-hover/call:hidden transition-all duration-300">
        <Phone size={11} className="transition-transform duration-300 group-hover/call:-rotate-6" />
        <span> Call For Pricing</span>
      </span>
      <span className="hidden group-hover/call:inline-flex items-center gap-1 transition-all duration-300">
        Call Now
        <ArrowRight size={11} className="transition-transform duration-300 group-hover/call:translate-x-0.5" />
      </span>
    </a>
  );
};

export default CallForPricing;
