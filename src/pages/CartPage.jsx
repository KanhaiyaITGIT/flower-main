import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";

// ─── APNA QR CODE IMAGE YAHAN PASTE KARO ───────────────────────────────────
// Agar tumhare paas QR image file hai project mein, toh import karo:
// import qrImage from "../assets/payment-qr.png";
// Agar bahar se URL use karna hai, toh neeche wali line use karo:
const QR_IMAGE = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=9540849659@pthdfc&pn=SHIVAM";
// ↑ Isko apne actual QR image path ya UPI QR URL se replace karo

// ─── GOOGLE APPS SCRIPT WEB APP URL ─────────────────────────────────────────
// Neeche apna Google Apps Script deployed URL paste karo (setup guide comment mein diya hai)
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxyISy8Gu-uUIULoXjnhUSlIZ3tPTPYwiAmkDV_LGTqZmw_r5N2war6O_jwmnTD_fZY/exec";

// ─────────────────────────────────────────────────────────────────────────────

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
      setError("Sabhi fields bharna zaroori hai.");
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
        {/* ── Close button ── */}
        <button
          onClick={submitted ? onOrderSuccess : onClose}
          className="absolute top-[14px] right-[16px] z-10 w-8 h-8 rounded-full bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(255,255,255,0.08)] border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-white hover:border-[var(--color-gold)]/30 hover:text-stone-700 transition-all duration-200 cursor-pointer text-sm"
        >✕</button>

        {/* ── LEFT: QR Side ── */}
        <div className="c-qr-side flex-[0_0_320px] bg-gradient-to-br from-[#163827] to-[#0f2a1e] p-10 lg:p-9 flex flex-col items-center justify-center gap-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,179,106,0.06)_0%,transparent_60%)] pointer-events-none" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8A882] m-0">
            Scan & Pay
          </p>
          <h2 className="font-serif-display text-2xl font-normal text-[#F7F0E8] m-0 text-center">
            Payment QR Code
          </h2>

          <div className="bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <img src={QR_IMAGE} alt="Payment QR Code" className="w-[180px] h-[180px] block" />
          </div>

          <div className="bg-[rgba(200,168,130,0.12)] border border-[rgba(200,168,130,0.25)] rounded-2xl px-6 py-3.5 text-center backdrop-blur-sm">
            <p className="text-[10px] text-[#C8A882] tracking-[0.2em] uppercase m-0 mb-1">
              Total Amount
            </p>
            <p className="font-serif-display text-[1.8rem] text-[#F7F0E8] m-0 font-normal">
              ₹{grandTotal.toFixed(2)}
            </p>
          </div>

          <p className="text-[11px] text-[rgba(247,240,232,0.45)] text-center leading-relaxed m-0">
            UPI / Google Pay / PhonePe se<br />scan karke payment karein
          </p>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(214,179,106,0.04)_0%,transparent_50%)] pointer-events-none" />
        </div>

        {/* ── RIGHT: Form Side ── */}
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
                className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center text-4xl"
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
                ].map((field) => (
                  <div key={field.name}>
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
                  </div>
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
                  className="c-submit-btn mt-1"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Confirm Order →"}
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

// ─────────────────────────────────────────────────────────────────────────────

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);

  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const delivery = total > 60 ? 0 : 5.99;
  const grandTotal = total + delivery;

  const handleOrderSuccess = () => {
    setShowCheckout(false);
    setOrderSuccess(true);
    dispatch(clearCart());
    navigate("/cart");
  };

  // Empty cart
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FDFBF8] via-[#faf5ef] to-[#FDFBF8] p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(214,179,106,0.04)_0%,transparent_60%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(10,28,20,0.5)] backdrop-blur-xl border border-[rgba(255,255,255,0.35)] rounded-[32px] p-12 lg:p-14 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.06),0_8px_30px_rgba(0,0,0,0.04)] max-w-[480px] w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[rgba(214,179,106,0.15)] to-[rgba(22,56,39,0.05)] flex items-center justify-center text-5xl mb-6"
          >🌸</motion.div>
          <h2 className="font-serif-display text-3xl font-bold text-[#163827] m-0 mb-3">
            {orderSuccess ? "Your order is packed!" : "Your cart is empty"}
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed max-w-[300px] mx-auto m-0 mb-7">
            {orderSuccess
              ? "Thank you for your order. We have received your payment details and will contact you shortly."
              : "Explore our beautiful collection and add your favourite blooms."}
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/category")}
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#163827] to-[#1f4a30] text-white text-xs font-bold tracking-[0.1em] uppercase cursor-pointer shadow-[0_4px_20px_rgba(22,56,39,0.25)] hover:shadow-[0_8px_30px_rgba(22,56,39,0.35)] transition-all duration-300"
          >
            Browse Category
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "80vh", background: "#fafaf9", fontFamily: "'Inter', sans-serif", position: "relative" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingDecoration type="leaf" side="left" top="4%" size={26} opacity={0.1} delay={0.3} duration={14} animation="sway3" color="#d1bca8" />
        <FloatingDecoration type="petal6" side="right" top="3%" size={22} opacity={0.1} delay={1.1} duration={13} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="petal5" side="left" bottom="10%" size={30} opacity={0.1} delay={0.6} duration={12} animation="sway1" color="#d1bca8" />
        <FloatingDecoration type="petal" side="right" bottom="8%" size={20} opacity={0.1} delay={1.9} duration={15} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="rose" side="right" top="6%" size={34} opacity={0.08} delay={0} duration={18} animation="bloom" color="#d1bca8" />
        <FloatingDecoration type="lotus" side="left" top="auto" bottom="15%" size={38} opacity={0.06} delay={2} duration={16} animation="drift-bloom" color="#d1bca8" />
      </div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        <BokehLights spots={[
          { color: "from-rose-300/10 to-transparent", size: 260, top: "-6%", right: "-4%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-200/8 to-transparent", size: 220, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 32 },
          { color: "from-purple-300/6 to-transparent", size: 200, top: "35%", left: "40%", anim: "bk-float", delay: 1, duration: 28 },
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

      {/* Page header */}
      <div className="relative bg-gradient-to-br from-[#163827] to-[#0f2a1e] py-12 lg:py-14 px-6 text-center mb-10 overflow-hidden shadow-[inset_0_0_100px_rgba(214,179,106,0.03)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,179,106,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(214,179,106,0.03)_0%,transparent_50%)] pointer-events-none" />
        <p className="relative text-[10px] tracking-[0.3em] uppercase text-[#C8A882] m-0 mb-3">
          Your Selection
        </p>
        <h1 className="relative font-serif-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#F7F0E8] m-0 mb-2">
          Shopping Cart
        </h1>
        <p className="relative text-xs text-[rgba(247,240,232,0.5)] font-light m-0">
          {count} item{count !== 1 ? "s" : ""} in your cart
        </p>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px 60px" }}>
        <div className="cart-layout">

          {/* Left: items */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 400, color: "#0D1F0F" }}>
                Your Blooms
              </h2>
              <button
                onClick={() => dispatch(clearCart())}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "12px", color: "#9ca3af", letterSpacing: "0.06em",
                  textTransform: "uppercase", transition: "color 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#f43f5e"}
                onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}
              >
                Clear all
              </button>
            </div>

            <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                layout
                className="cart-row"
              >
                <div className="cart-row-top">
                  <div className="cart-row-image" style={{ background: item.bg }}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-row-info">
                    <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: item.color, marginBottom: "2px" }}>
                      {item.category}
                    </div>
                    <h3 className="cart-row-name">
                      {item.name}
                    </h3>
                    <p className="cart-row-meta">
                      {item.season} · ₹{item.price} each
                    </p>
                  </div>
                </div>

                <div className="cart-row-controls">
                  <div className="qty-group">
                    <button className="qty-btn" onClick={() => dispatch(decrementQty(item.id))}>−</button>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#0D1F0F", minWidth: "20px", textAlign: "center" }}>
                      {item.quantity}
                    </span>
                    <button className="qty-btn" onClick={() => dispatch(incrementQty(item.id))}>+</button>
                  </div>
                  <div className="cart-row-total">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))} aria-label="Remove">✕</button>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>

            <button className="continue-btn" onClick={() => navigate("/gallery")} style={{ marginTop: "8px" }}>
              ← Continue Shopping
            </button>
          </div>

          {/* Right: order summary */}
          <div>
            <div className="bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(10,28,20,0.5)] backdrop-blur-xl border border-[rgba(255,255,255,0.35)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04),0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden sticky" style={{ top: "100px" }}>
              <div className="bg-gradient-to-r from-[#163827] to-[#1a3d28] px-6 py-5">
                <h3 className="font-serif-display text-lg font-bold text-[#F7F0E8] m-0">Order Summary</h3>
              </div>

              <div className="p-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2.5 text-xs">
                    <span className="text-stone-600 dark:text-stone-400">
                      {item.name} <span className="text-stone-400 dark:text-stone-500">×{item.quantity}</span>
                    </span>
                    <span className="text-[#163827] dark:text-stone-200 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="h-px bg-stone-200 dark:bg-white/5 my-4" />

                <div className="flex justify-between text-xs mb-2">
                  <span className="text-stone-600 dark:text-stone-400">Subtotal</span>
                  <span className="text-[#163827] dark:text-stone-200 font-semibold">₹{total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-xs mb-2">
                  <span className="text-stone-600 dark:text-stone-400">Delivery</span>
                  <span className={`font-semibold ${delivery === 0 ? "text-emerald-600 dark:text-emerald-400" : "text-[#163827] dark:text-stone-200"}`}>
                    {delivery === 0 ? "FREE" : `₹${delivery.toFixed(2)}`}
                  </span>
                </div>

                {delivery > 0 && (
                  <div className="bg-[rgba(214,179,106,0.08)] border border-[rgba(214,179,106,0.2)] rounded-2xl px-3 py-2 text-[11px] text-[#D6B36A]/80 mb-3 leading-relaxed">
                    🚚 Add ₹{(60 - total).toFixed(2)} more for FREE delivery
                  </div>
                )}

                {delivery === 0 && (
                  <div className="bg-[rgba(22,163,74,0.06)] border border-[rgba(22,163,74,0.15)] rounded-2xl px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400 mb-3 leading-relaxed">
                    ✓ You qualify for free delivery!
                  </div>
                )}

                <div className="h-px bg-stone-200 dark:bg-white/5 my-3" />

                <div className="flex justify-between mb-5">
                  <span className="font-serif-display text-base text-[#163827] dark:text-stone-100">Total</span>
                  <span className="font-serif-display text-xl text-[#163827] dark:text-stone-100 font-bold">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="checkout-btn"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed to Checkout →
                </motion.button>

                <div className="flex justify-center gap-4 flex-wrap mt-3">
                  {["🔒 Secure", "🌿 Fresh", "🚚 Fast"].map((b) => (
                    <span key={`cart-badge-${b}`} className="text-[10px] text-stone-400 dark:text-stone-500">{b}</span>
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
