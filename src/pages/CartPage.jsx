import { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
  addToCart,
} from "../redux/cartSlice";
import CallForPricing from "../components/ui/CallForPricing";
import Badge from "../components/ui/Badge";
import { CONTACT_PHONE_1, WHATSAPP_LINK } from "../constants";
import {
  ShoppingBag, Phone, Heart, Clock, Truck, ShieldCheck,
  Leaf, ChevronRight, ArrowLeft, Plus, Minus, X,
  Star, MapPin, PackageCheck, Sparkles, Trash2, Undo2,
  Bookmark, ArrowRight, Flower2, ChevronLeft, ChevronDown,
} from "lucide-react";

const QR_IMAGE = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=9540849659@pthdfc&pn=SHIVAM";
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxyISy8Gu-uUIULoXjnhUSlIZ3tPTPYwiAmkDV_LGTqZmw_r5N2war6O_jwmnTD_fZY/exec";

const SAVED_KEY = "flower_saved_items";

const emptyCatCards = [
  { icon: "🌹", label: "Bouquets", path: "/category?cat=Bouquets", color: "from-rose-400/20 to-pink-400/10" },
  { icon: "🎂", label: "Birthday", path: "/category?cat=Birthday", color: "from-amber-400/20 to-orange-400/10" },
  { icon: "💍", label: "Anniversary", path: "/category?cat=Anniversary", color: "from-purple-400/20 to-violet-400/10" },
  { icon: "🌸", label: "Luxury Flowers", path: "/category?cat=Bouquets", color: "from-[var(--color-blush)]/30 to-rose-300/10" },
  { icon: "🎈", label: "Balloon Decor", path: "/category?cat=Balloon", color: "from-sky-400/20 to-blue-400/10" },
];

const trendingProducts = [
  { id: "t1", name: "Romantic Rosebloom Bouquet", price: 849, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80", category: "Bouquets", rating: 4.9 },
  { id: "t2", name: "Luxury White Orchid Vase", price: 2199, image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=400&q=80", category: "Wedding", rating: 4.8 },
  { id: "t3", name: "Pastel Dream Bouquet", price: 1199, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&q=80", category: "Bouquets", rating: 4.7 },
  { id: "t4", name: "Birthday Surprise Box", price: 1799, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80", category: "Birthday", rating: 5.0 },
];

const recoProducts = [
  { id: "r1", name: "Premium Pink Tulips Vase", price: 2499, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80", category: "Bouquets", rating: 4.8, desc: "Premium pink tulips in crystal vase" },
  { id: "r2", name: "Lavender Dreams Bouquet", price: 1799, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&q=80", category: "Bouquets", rating: 4.9, desc: "Dreamy lavender with eucalyptus" },
  { id: "r3", name: "Crimson Wedding Arch", price: 32000, image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80", category: "Wedding", rating: 5.0, desc: "Grand floral arch for ceremonies" },
  { id: "r4", name: "Sunflower Fields Bouquet", price: 1299, image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&q=80", category: "Bouquets", rating: 4.6, desc: "Bright sunflowers for cheerful days" },
  { id: "r5", name: "White Lily Elegance Vase", price: 2199, image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=400&q=80", category: "Flowers", rating: 4.7, desc: "Pure white lilies in ceramic vase" },
  { id: "r6", name: "Golden Tissue Pom-Poms", price: 499, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80", category: "Balloon", rating: 4.5, desc: "Shimmering golden party decor" },
];

const trustFeatures = [
  { icon: Leaf, label: "100% Fresh Flowers", desc: "Handpicked fresh every morning" },
  { icon: Truck, label: "Same Day Delivery", desc: "Gurgaon & NCR wide" },
  { icon: ShieldCheck, label: "Secure Checkout", desc: "256-bit SSL encrypted" },
  { icon: Sparkles, label: "Handcrafted", desc: "Designed by master florists" },
];

// ─── QUANTITY STEPPER ───────────────────────────────────────────────────────
function QuantityStepper({ quantity, onIncrement, onDecrement, min = 1 }) {
  return (
    <div className="inline-flex items-center gap-0 bg-white dark:bg-white/5 rounded-xl border border-stone-200 dark:border-white/10 overflow-hidden shadow-sm">
      <button
        onClick={onDecrement}
        disabled={quantity <= min}
        className="w-9 h-9 flex items-center justify-center text-stone-500 hover:text-[var(--color-accent)] hover:bg-rose-50 dark:hover:bg-white/5 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-stone-500"
        aria-label="Decrease quantity"
      >
        <motion.div whileTap={{ scale: 0.8 }}><Minus size={13} /></motion.div>
      </button>
      <motion.span
        key={quantity}
        initial={{ scale: 1.3, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-9 h-9 flex items-center justify-center text-sm font-bold text-[var(--color-primary)] dark:text-stone-200 border-x border-stone-200 dark:border-white/10"
      >
        {quantity}
      </motion.span>
      <button
        onClick={onIncrement}
        className="w-9 h-9 flex items-center justify-center text-stone-500 hover:text-[var(--color-accent)] hover:bg-rose-50 dark:hover:bg-white/5 transition-all duration-200"
        aria-label="Increase quantity"
      >
        <motion.div whileTap={{ scale: 0.8 }}><Plus size={13} /></motion.div>
      </button>
    </div>
  );
}

// ─── CHECKOUT MODAL (unchanged business logic) ──────────────────────────────
function CheckoutModal({ isOpen, onClose, onOrderSuccess, grandTotal, items }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    transactionId: "",
    transactionTime: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.transactionId || !form.transactionTime) {
      setError("all fields required");
      return;
    }
    setError("");
    setSubmitting(true);

    const itemColumns = {};
    items.forEach((item, index) => {
      itemColumns[`item_${index + 1}_name`] = item.name;
      itemColumns[`item_${index + 1}_qty`] = item.quantity;
    });

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          transactionId: form.transactionId,
          transactionTime: form.transactionTime,
          orderTotal: `₹${grandTotal.toFixed(2)}`,
          totalItems: items.length,
          ...itemColumns,
          submittedAt: new Date().toLocaleString("en-IN"),
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Kuch galat hua. Dobara try karo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] bg-[#0D1F0F]/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) (submitted ? onOrderSuccess : onClose)(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="c-modal-inner relative w-full max-w-[820px] max-h-[90vh] rounded-2xl overflow-hidden flex bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(10,28,20,0.95)] backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.1)] mx-auto"
        style={{ margin: "auto 0" }}
      >
        <button
          onClick={submitted ? onOrderSuccess : onClose}
          className="absolute top-[14px] right-[16px] z-10 w-8 h-8 rounded-full bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(255,255,255,0.08)] border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-white hover:border-[var(--color-gold)]/30 hover:text-stone-700 transition-all duration-200 cursor-pointer text-sm"
        >✕</button>

        <div className="c-qr-side flex-[0_0_320px] bg-gradient-to-br from-[#163827] to-[#0f2a1e] p-10 lg:p-9 flex flex-col items-center justify-center gap-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,179,106,0.06)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)]/[0.03] rounded-full blur-[60px] pointer-events-none" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8A882] m-0">
            Scan & Pay
          </p>
          <h2 className="font-serif-display text-2xl font-normal text-[#F7F0E8] m-0 text-center">
            Payment QR Code
          </h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <img src={QR_IMAGE} alt="Payment QR Code" className="w-[180px] h-[180px] block" />
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-[rgba(200,168,130,0.12)] border border-[rgba(200,168,130,0.25)] rounded-2xl px-6 py-3.5 text-center backdrop-blur-sm"
          >
            <p className="text-[10px] text-[#C8A882] tracking-[0.2em] uppercase m-0 mb-1">
              Total Amount
            </p>
            <p className="font-serif-display text-[1.8rem] text-[#F7F0E8] m-0 font-normal">
              ₹{grandTotal.toFixed(2)}
            </p>
          </motion.div>

          <p className="text-[11px] text-[rgba(247,240,232,0.45)] text-center leading-relaxed m-0">
            UPI / Google Pay / PhonePe se<br />scan karke payment karein
          </p>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(214,179,106,0.04)_0%,transparent_50%)] pointer-events-none" />
        </div>

        <div className="c-form-side flex-1 p-10 lg:p-9 overflow-y-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full gap-4 text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center text-4xl success-pop"
              >🌸</motion.div>
              <h3 className="font-serif-display text-2xl font-normal text-[#163827] m-0">
                Order Confirmed!
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-[280px]">
                Aapka order receive ho gaya. Hum jaldi aapse contact karein 🙏
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOrderSuccess}
                className="px-8 py-3 rounded-2xl border-2 border-[#163827] bg-transparent text-[#163827] text-xs font-semibold tracking-wider uppercase cursor-pointer hover:bg-[#163827] hover:text-white transition-all duration-300"
              >
                Back to Cart
              </motion.button>
            </motion.div>
          ) : (
            <>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8A882] m-0 mb-2">Step 2</p>
              <h3 className="font-serif-display text-2xl font-normal text-[#163827] m-0 mb-1">Your Details</h3>
              <p className="text-xs text-stone-400 m-0 mb-7 leading-relaxed">
                Payment ke baad transaction details bharen
              </p>

              <div className="flex flex-col gap-3.5">
                {[
                  { label: "Full Name *", name: "name", type: "text", placeholder: "Aapka naam" },
                  { label: "Email *", name: "email", type: "email", placeholder: "email@gmail.com" },
                  { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { label: "Transaction ID *", name: "transactionId", type: "text", placeholder: "UPI transaction ID" },
                  { label: "Transaction Time *", name: "transactionTime", type: "datetime-local", placeholder: "" },
                ].map((field, idx) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  >
                    <label className="text-[11px] font-semibold text-stone-700 dark:text-stone-300 tracking-[0.05em] uppercase block mb-1.5">
                      {field.label}
                    </label>
                    <input
                      className="c-modal-input"
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                    />
                  </motion.div>
                ))}

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-rose-500 m-0"
                  >⚠ {error}</motion.p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="c-submit-btn mt-1 relative overflow-hidden group"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : "Confirm Order →"}
                </motion.button>

                <p className="text-[10px] text-stone-400 text-center m-0">
                  🔒 Aapka data safe hai
                </p>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── CART ITEM CARD ─────────────────────────────────────────────────────────
function CartItemCard({ item, onIncrement, onDecrement, onRemove, onSaveLater, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 40, y: -10, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group rounded-2xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-white/40 dark:border-white/[0.06] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(200,155,60,0.12)] hover:border-[var(--color-gold)]/20"
    >
      <div className="flex items-stretch gap-0">
        <div className="relative w-28 sm:w-32 md:w-36 shrink-0 bg-[var(--color-blush)]/20 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
        </div>

        <div className="flex-1 min-w-0 p-4 sm:p-5 flex flex-col justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="min-w-0">
                <Badge color="primary" className="mb-1.5">{item.category}</Badge>
                <h3 className="font-serif-display text-sm sm:text-base font-bold text-[var(--color-primary)] dark:text-stone-100 leading-snug truncate">
                  {item.name}
                </h3>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-stone-300 hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-white/5 transition-all duration-200 opacity-0 group-hover:opacity-100 -mr-1 -mt-1"
                aria-label="Remove item"
              >
                <X size={13} />
              </button>
            </div>
            <p className="text-[11px] text-stone-400 dark:text-stone-500 font-light line-clamp-1 mb-2">
              {item.season}
            </p>

            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={9}
                    className={s <= 4 ? "text-amber-400 fill-amber-400" : "text-stone-200 fill-stone-200 dark:text-stone-600"}
                  />
                ))}
              </div>
              <span className="text-[9px] text-stone-400 font-medium">4.8</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
            <div className="flex items-center gap-3">
              <QuantityStepper
                quantity={item.quantity}
                onIncrement={() => onIncrement(item.id)}
                onDecrement={() => onDecrement(item.id)}
              />
              <div className="hidden sm:flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg font-medium whitespace-nowrap">
                <Truck size={10} />
                Delivery
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CallForPricing />
              <button
                onClick={() => onSaveLater(item)}
                className="hidden sm:flex items-center gap-1 text-[10px] text-stone-400 hover:text-[var(--color-accent)] transition-colors font-medium px-2 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-white/5"
                aria-label="Save for later"
              >
                <Bookmark size={10} />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile action bar */}
      <div className="sm:hidden flex items-center justify-between px-4 pb-3 pt-1 border-t border-stone-100 dark:border-white/5">
        <button
          onClick={() => onSaveLater(item)}
          className="flex items-center gap-1.5 text-[10px] text-stone-400 hover:text-[var(--color-accent)] transition-colors font-medium"
        >
          <Bookmark size={11} />
          Save for Later
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="flex items-center gap-1.5 text-[10px] text-stone-400 hover:text-rose-400 transition-colors font-medium"
        >
          <Trash2 size={11} />
          Remove
        </button>
      </div>
    </motion.div>
  );
}

// ─── SAVED ITEM CARD ────────────────────────────────────────────────────────
function SavedItemCard({ item, onMoveToCart, onRemove }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center gap-4 p-3 rounded-xl bg-white/40 dark:bg-white/[0.02] border border-dashed border-stone-200 dark:border-white/5"
    >
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-[var(--color-blush)]/20 shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-[var(--color-primary)] dark:text-stone-200 truncate">{item.name}</p>
        <p className="text-[10px] text-stone-400">{item.category}</p>
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onMoveToCart(item)}
          className="px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-[#C9A15A] dark:bg-[#C9A15A]/10 text-[10px] font-bold tracking-wider uppercase hover:bg-[var(--color-primary)] hover:text-white dark:hover:bg-[#C9A15A] dark:hover:text-black transition-all duration-200 whitespace-nowrap"
        >
          Move to Cart
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="p-1.5 rounded-lg text-stone-300 hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-white/5 transition-all"
          aria-label="Remove saved item"
        >
          <X size={12} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── RECOMMENDATIONS ────────────────────────────────────────────────────────
function RecommendationSection({ cartCategories }) {
  const filtered = recoProducts.filter(
    (p) => !cartCategories || cartCategories.length === 0 || cartCategories.includes(p.category)
  );
  const display = filtered.length >= 4 ? filtered : recoProducts.slice(0, 4);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-serif-display text-lg font-bold text-[var(--color-primary)] dark:text-stone-100">
            Customers Also Loved
          </h3>
          <p className="text-[11px] text-stone-400 font-light">Handpicked just for you</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            className="w-8 h-8 rounded-full bg-white/70 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 rounded-full bg-white/70 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2 snap-x snap-mandatory"
      >
        {display.map((p) => (
          <Link
            key={p.id}
            to={`/category?cat=${p.category}`}
            className="snap-start shrink-0 w-44 bg-white/60 dark:bg-white/[0.03] rounded-2xl border border-white/40 dark:border-white/[0.06] overflow-hidden hover:shadow-[0_8px_28px_-8px_rgba(200,155,60,0.1)] hover:border-[var(--color-gold)]/20 transition-all duration-300 group"
          >
            <div className="aspect-[4/3] bg-[var(--color-blush)]/20 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <p className="text-[8px] font-bold tracking-wider uppercase text-[var(--color-gold)] mb-0.5">{p.category}</p>
              <p className="text-[11px] font-semibold text-[var(--color-primary)] dark:text-stone-200 truncate">{p.name}</p>
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={8} className={s <= Math.round(p.rating) ? "text-amber-400 fill-amber-400" : "text-stone-200"} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── EMPTY CART ─────────────────────────────────────────────────────────────
function EmptyCart({ onNavigate, orderSuccess }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FDFBF8] via-[#faf5ef] to-[#FDFBF8] p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(214,179,106,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-blush)]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-gold)]/[0.02] rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-5xl"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[var(--color-blush)]/30 via-white to-[var(--color-gold)]/10 flex items-center justify-center shadow-[0_0_80px_rgba(214,179,106,0.06)]">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.02, 0.98, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="text-8xl md:text-9xl select-none"
                >
                  💐
                </motion.div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[var(--color-blush)]/20 flex items-center justify-center text-2xl animate-bounce">
                🌸
              </div>
              <div className="absolute -bottom-2 -left-4 w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center text-xl animate-pulse">
                ✨
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-white/60 dark:bg-[rgba(10,28,20,0.5)] backdrop-blur-xl border border-white/35 dark:border-white/[0.06] rounded-[32px] p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.06)]">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-blush)]/30 to-[var(--color-gold)]/10 flex items-center justify-center text-3xl mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, 0] }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              >
                🌸
              </motion.div>

              <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-[#163827] dark:text-stone-100 mb-2">
                {orderSuccess ? "Your order is packed! 🌸" : "Your Cart Feels Empty 🌸"}
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-2 font-light">
                {orderSuccess
                  ? "Thank you for your order. We have received your payment details and will contact you shortly."
                  : "Let's fill it with something beautiful."
                }
              </p>
              {!orderSuccess && (
                <p className="text-xs text-stone-400 dark:text-stone-500 leading-relaxed mb-7 font-light">
                  Discover handcrafted floral arrangements designed for every special occasion.
                </p>
              )}

              <div className="flex flex-wrap gap-3 mb-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate("/category")}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#163827] to-[#1f4a30] text-white text-xs font-bold tracking-[0.1em] uppercase shadow-[0_4px_20px_rgba(22,56,39,0.25)] hover:shadow-[0_8px_30px_rgba(22,56,39,0.35)] transition-all duration-300"
                >
                  <ShoppingBag size={14} />
                  Continue Shopping
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate("/category?cat=Bouquets")}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[var(--color-accent)]/20 text-[var(--color-primary)] dark:text-stone-200 text-xs font-bold tracking-[0.1em] uppercase hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 transition-all duration-300"
                >
                  <Sparkles size={14} />
                  Explore Bestsellers
                </motion.button>
              </div>

              {!orderSuccess && (
                <>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-4">
                    Popular Categories
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                    {emptyCatCards.map((cat) => (
                      <Link
                        key={cat.label}
                        to={cat.path}
                        className={`flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-br ${cat.color} border border-white/40 hover:border-[var(--color-gold)]/30 hover:shadow-md transition-all duration-200 group`}
                      >
                        <span className="text-lg">{cat.icon}</span>
                        <span className="text-[11px] font-semibold text-[var(--color-primary)] dark:text-stone-200 group-hover:text-[var(--color-accent)] transition-colors">
                          {cat.label}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-4">
                    Recently Trending
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {trendingProducts.map((p) => (
                      <Link
                        key={p.id}
                        to="/category"
                        className="group rounded-xl overflow-hidden bg-white/40 border border-stone-100 hover:border-[var(--color-gold)]/20 hover:shadow-md transition-all duration-300"
                      >
                        <div className="aspect-square bg-[var(--color-blush)]/20 overflow-hidden">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        </div>
                        <div className="p-2.5">
                          <p className="text-[9px] font-bold tracking-wider uppercase text-[var(--color-gold)]">{p.category}</p>
                          <p className="text-[10px] font-medium text-[var(--color-primary)] dark:text-stone-200 truncate">{p.name}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star size={7} className="text-amber-400 fill-amber-400" />
                            <span className="text-[8px] text-stone-400">{p.rating}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── MAIN CARTPAGE ──────────────────────────────────────────────────────────
export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);

  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [savedItems, setSavedItems] = useState(() => {
    try {
      const d = JSON.parse(localStorage.getItem(SAVED_KEY));
      return Array.isArray(d) ? d : [];
    } catch { return []; }
  });
  const [undoState, setUndoState] = useState(null);
  const undoTimer = useRef(null);

  const delivery = total > 60 ? 0 : 5.99;
  const grandTotal = total + delivery;

  useEffect(() => {
    try { localStorage.setItem(SAVED_KEY, JSON.stringify(savedItems)); }
    catch { /* empty */ }
  }, [savedItems]);

  useEffect(() => {
    return () => { if (undoTimer.current) clearTimeout(undoTimer.current); };
  }, []);

  const handleOrderSuccess = () => {
    setShowCheckout(false);
    setOrderSuccess(true);
    dispatch(clearCart());
    navigate("/cart");
  };

  const handleRemove = useCallback((id) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;

    if (undoTimer.current) clearTimeout(undoTimer.current);
    dispatch(removeFromCart(id));

    setUndoState({ item, timestamp: Date.now() });
    undoTimer.current = setTimeout(() => {
      setUndoState(null);
    }, 5000);
  }, [items, dispatch]);

  const handleUndo = useCallback(() => {
    if (!undoState) return;
    if (undoTimer.current) clearTimeout(undoTimer.current);
    dispatch(addToCart(undoState.item));
    setUndoState(null);
  }, [undoState, dispatch]);

  const handleSaveLater = useCallback((item) => {
    setSavedItems((prev) => {
      if (prev.some((s) => s.id === item.id)) return prev;
      return [...prev, { ...item }];
    });
    dispatch(removeFromCart(item.id));
  }, [dispatch]);

  const handleMoveToCart = useCallback((item) => {
    dispatch(addToCart(item));
    setSavedItems((prev) => prev.filter((s) => s.id !== item.id));
  }, [dispatch]);

  const handleRemoveSaved = useCallback((id) => {
    setSavedItems((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const cartCategories = [...new Set(items.map((i) => i.category))];

  // ── EMPTY CART ──
  if (items.length === 0 && savedItems.length === 0) {
    return <EmptyCart onNavigate={navigate} orderSuccess={orderSuccess} />;
  }

  // ── FILLED CART ──
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF8] via-[#faf5ef] to-[#FDFBF8] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      </div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        ]} />
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onOrderSuccess={handleOrderSuccess}
        grandTotal={grandTotal}
        items={items}
      />

      {/* Undo Toast */}
      <AnimatePresence>
        {undoState && (
          <motion.div
            initial={{ opacity: 0, y: 40, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 40, x: "-50%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 bg-white/90 dark:bg-[#0a1c14]/95 backdrop-blur-xl border border-stone-200 dark:border-white/10 rounded-2xl px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
          >
            <span className="text-sm">🗑️</span>
            <span className="text-xs font-medium text-stone-600 dark:text-stone-300">Item removed</span>
            <button
              onClick={handleUndo}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] dark:text-[#C9A15A] dark:bg-[#C9A15A]/10 text-[10px] font-bold tracking-wider uppercase hover:bg-[var(--color-primary)] hover:text-white dark:hover:bg-[#C9A15A] dark:hover:text-black transition-all duration-200"
            >
              <Undo2 size={11} />
              Undo
            </button>
            <button
              onClick={() => setUndoState(null)}
              className="p-1 text-stone-300 hover:text-stone-500 transition-colors"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#163827] to-[#0f2a1e] py-14 lg:py-16 px-6 text-center overflow-hidden shadow-[inset_0_0_100px_rgba(214,179,106,0.03)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,179,106,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(214,179,106,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[var(--color-gold)]/[0.03] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-rose-500/[0.02] rounded-full blur-[60px] pointer-events-none" />
        <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <PackageCheck size={12} className="text-emerald-400" />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-emerald-300/80">
            {count} item{count !== 1 ? "s" : ""} in your cart
          </span>
        </div>
        <h1 className="relative font-serif-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#F7F0E8] m-0">
          Your Blooms
        </h1>
        <p className="relative text-xs text-[rgba(247,240,232,0.5)] font-light mt-2 max-w-md mx-auto">
          Every arrangement is handcrafted with love and care, just for you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-8 mt-8">
          {/* ── LEFT: Cart Items ── */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1 mb-2">
              <div className="flex items-center gap-3">
                <h2 className="font-serif-display text-lg font-bold text-[var(--color-primary)] dark:text-stone-100">
                  Cart Items
                </h2>
                <span className="text-[10px] text-stone-400 font-medium bg-white/50 px-2.5 py-1 rounded-full border border-stone-200/50">
                  {count} item{count !== 1 ? "s" : ""}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(clearCart())}
                className="text-[10px] text-stone-400 hover:text-rose-500 font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 bg-white/50 px-3 py-1.5 rounded-full border border-stone-200/50 hover:border-rose-200"
              >
                <Trash2 size={11} />
                Clear all
              </motion.button>
            </div>

            <AnimatePresence mode="popLayout">
              {items.map((item, idx) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  index={idx}
                  onIncrement={(id) => dispatch(incrementQty(id))}
                  onDecrement={(id) => dispatch(decrementQty(id))}
                  onRemove={handleRemove}
                  onSaveLater={handleSaveLater}
                />
              ))}
            </AnimatePresence>

            {/* ── Saved for Later ── */}
            {savedItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
              >
                <div className="flex items-center gap-2 mb-4 px-1">
                  <Bookmark size={14} className="text-[var(--color-gold)]" />
                  <h3 className="font-serif-display text-base font-bold text-[var(--color-primary)] dark:text-stone-100">
                    Saved for Later
                  </h3>
                  <span className="text-[10px] text-stone-400 font-medium">
                    ({savedItems.length})
                  </span>
                </div>
                <div className="space-y-2">
                  <AnimatePresence>
                    {savedItems.map((item) => (
                      <SavedItemCard
                        key={item.id}
                        item={item}
                        onMoveToCart={handleMoveToCart}
                        onRemove={handleRemoveSaved}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* ── Recommendations ── */}
            <RecommendationSection cartCategories={cartCategories} />

            {/* ── Continue Shopping ── */}
            <div className="flex items-center justify-center pt-4">
              <button
                onClick={() => navigate("/category")}
                className="inline-flex items-center gap-2 text-xs font-medium text-stone-400 hover:text-[var(--color-accent)] transition-colors group"
              >
                <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
                Continue Shopping
              </button>
            </div>
          </div>

          {/* ── RIGHT: Order Summary ── */}
          <div className="mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-white/60 dark:bg-[rgba(10,28,20,0.5)] backdrop-blur-xl border border-white/35 dark:border-white/[0.06] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="bg-gradient-to-r from-[#163827] to-[#1a3d28] px-5 py-4">
                  <h3 className="font-serif-display text-base font-bold text-[#F7F0E8] flex items-center gap-2">
                    <PackageCheck size={16} className="text-emerald-400" />
                    Order Summary
                  </h3>
                </div>

                <div className="p-5 space-y-4">
                  {/* Items */}
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-[var(--color-blush)]/20 shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-medium text-[var(--color-primary)] dark:text-stone-200 truncate">{item.name}</p>
                          <p className="text-[9px] text-stone-400">Qty: {item.quantity} · {item.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-gradient-to-r from-stone-200/60 via-stone-200/30 to-transparent dark:from-white/5" />

                  {/* Delivery */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                      <Truck size={12} />
                      Estimated Delivery
                    </span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-300 font-medium">Today-Tomorrow</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                      <MapPin size={12} />
                      Delivery Location
                    </span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-300 font-medium">Delhi NCR</span>
                  </div>

                  {delivery > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[rgba(214,179,106,0.08)] border border-[rgba(214,179,106,0.2)] rounded-xl px-3 py-2 text-[10px] text-[#D6B36A]/80 leading-relaxed flex items-center gap-2"
                    >
                      <span>🚚</span>
                      <span>Add ₹{(60 - total).toFixed(2)} more for <strong>FREE delivery</strong></span>
                    </motion.div>
                  )}

                  {delivery === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[rgba(22,163,74,0.06)] border border-[rgba(22,163,74,0.15)] rounded-xl px-3 py-2 text-[10px] text-emerald-700 dark:text-emerald-400 leading-relaxed flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>You qualify for <strong>FREE delivery</strong>!</span>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                      <ShieldCheck size={12} />
                      Delivery Fee
                    </span>
                    <span className={`text-[11px] font-semibold ${delivery === 0 ? "text-emerald-600 dark:text-emerald-400" : "text-stone-600 dark:text-stone-300"}`}>
                      {delivery === 0 ? "FREE" : `₹${delivery.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="h-px bg-gradient-to-r from-stone-200/60 via-stone-200/30 to-transparent dark:from-white/5" />

                  {/* Pricing note */}
                  <div className="bg-[var(--color-blush)]/10 border border-[var(--color-blush)]/20 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone size={12} className="text-[var(--color-accent)]" />
                      <span className="text-[10px] font-bold text-[var(--color-accent)] tracking-wider uppercase">Expert Consultation</span>
                    </div>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                      Our floral experts will confirm pricing and delivery details. Call us at <a href={`tel:${CONTACT_PHONE_1}`} className="text-[var(--color-accent)] font-medium hover:underline">{CONTACT_PHONE_1}</a>
                    </p>
                  </div>

                  {/* Items count */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 dark:text-stone-400">Items ({count})</span>
                    <span className="text-[11px] text-[var(--color-primary)] dark:text-stone-200 font-semibold">₹{total.toFixed(2)}</span>
                  </div>

                  <div className="h-px bg-gradient-to-r from-stone-200/60 via-stone-200/30 to-transparent dark:from-white/5" />

                  <div className="flex items-center justify-between">
                    <span className="font-serif-display text-base font-bold text-[var(--color-primary)] dark:text-stone-100">Total</span>
                    <span className="font-serif-display text-lg text-[var(--color-primary)] dark:text-stone-100 font-bold">
                      ₹{grandTotal.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#163827] to-[#1f4a30] text-white text-xs font-bold tracking-[0.1em] uppercase shadow-[0_4px_20px_rgba(22,56,39,0.25)] hover:shadow-[0_8px_30px_rgba(22,56,39,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative flex items-center justify-center gap-2">
                      Proceed to Checkout
                      <ChevronRight size={14} />
                    </span>
                  </button>

                  <button
                    onClick={() => navigate("/category")}
                    className="w-full py-3 rounded-xl border border-stone-200 dark:border-white/10 bg-white/50 dark:bg-transparent text-stone-500 dark:text-stone-400 text-[10px] font-bold tracking-wider uppercase hover:border-[var(--color-gold)]/30 hover:text-[var(--color-gold)] transition-all duration-300"
                  >
                    ← Continue Shopping
                  </button>
                </div>
              </div>

              {/* Trust Features */}
              <div className="bg-white/40 dark:bg-[rgba(10,28,20,0.3)] backdrop-blur-xl border border-white/30 dark:border-white/[0.04] rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-3">
                  {trustFeatures.map((f) => (
                    <div key={f.label} className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[var(--color-primary)]/5 dark:bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                        <f.icon size={12} className="text-[var(--color-primary)] dark:text-[#C9A15A]" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-[var(--color-primary)] dark:text-stone-200 tracking-wider uppercase">{f.label}</p>
                        <p className="text-[8px] text-stone-400 dark:text-stone-500 font-light">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
