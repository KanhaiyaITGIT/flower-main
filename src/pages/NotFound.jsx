import { Link } from "react-router-dom";
import { Flower2, ArrowRight, Home } from "lucide-react";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-[#0d0805] px-6 overflow-hidden">
      <Seo
        title="Page Not Found | Shivam Florist"
        description="The page you are looking for could not be found on Shivam Florist. Return home to browse flowers, bouquets and event decoration."
        path="/404"
        noindex
        jsonLd={null}
      />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Flower2 size={420} className="absolute -top-28 -right-28 text-[#C89B3C]/[0.06] rotate-12" strokeWidth={0.5} />
        <Flower2 size={320} className="absolute -bottom-28 -left-28 text-[#D6537A]/[0.06] -rotate-12" strokeWidth={0.5} />
      </div>
      <div className="relative text-center max-w-md">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#184D36] to-[#1f5a40] flex items-center justify-center mb-6 shadow-[0_8px_24px_rgba(24,77,54,0.2)]">
          <Flower2 size={28} className="text-[#C89B3C]" />
        </div>
        <p className="text-[#C89B3C] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
          Error 404
        </p>
        <h1 className="font-serif-display font-bold text-3xl sm:text-4xl text-white mb-3">
          We couldn't find that page
        </h1>
        <p className="text-stone-400 text-sm font-light leading-relaxed mb-8">
          The page may have moved or no longer exists. Explore our flowers,
          bouquets and decoration services instead.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a96e] to-[#b8923f] text-white px-7 py-3.5 rounded-2xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.03]"
          >
            <Home size={13} />
            Back to Home
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-2xl px-7 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-[1.03]"
          >
            Shop Flowers
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
