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
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(13,31,15,0.7)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "16px", fontFamily: "'Inter', sans-serif",
      overflowY: "auto", WebkitOverflowScrolling: "touch",
    }}
      onClick={(e) => { if (e.target === e.currentTarget) (submitted ? onOrderSuccess : onClose)(); }}
    >
      <style>{`
        .modal-input {
          width: 100%; padding: 10px 14px; border-radius: 18px;
          border: 1.5px solid #e5e7eb; background: #fafaf9;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0D1F0F;
          outline: none; box-sizing: border-box; transition: border-color 0.2s;
        }
        .modal-input:focus { border-color: #f43f5e; background: #fff; }
        .modal-input::placeholder { color: #9ca3af; }
        .submit-btn {
          width: 100%; padding: 13px; border-radius: 18px; border: none;
          background: linear-gradient(to right, #fb7185, #e11d48);
          color: #fff; font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer;
          box-shadow: 0 6px 20px rgba(244,63,94,0.35);
          transition: transform 0.2s, opacity 0.2s;
        }
        .submit-btn:hover:not(:disabled) { transform: translateY(-1px) scale(1.03); box-shadow: 0 10px 28px rgba(244,63,94,0.4); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        @media (max-width: 640px) {
          .modal-inner {
            flex-direction: column !important;
            max-height: none !important;
            overflow: visible !important;
            width: 100% !important;
            margin: auto 0 !important;
          }
          .qr-side {
            flex: none !important;
            padding: 28px 24px !important;
          }
          .form-side {
            padding: 28px 24px !important;
            max-height: none !important;
            overflow-y: visible !important;
          }
        }
      `}</style>

      <div style={{
        background: "#fff", borderRadius: "18px",
        overflow: "hidden", width: "100%", maxWidth: "820px",
        maxHeight: "90vh",
        boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
        display: "flex", position: "relative",
        margin: "auto 0",
      }} className="modal-inner">

        {/* ── Close button ── */}
        <button onClick={submitted ? onOrderSuccess : onClose} style={{
          position: "absolute", top: "14px", right: "16px", zIndex: 10,
          background: "rgba(255,255,255,0.9)", border: "1px solid #e5e7eb",
          borderRadius: "50%", width: "32px", height: "32px",
          cursor: "pointer", fontSize: "16px", color: "#6b7280",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>✕</button>

        {/* ── LEFT: QR Side ── */}
        <div className="qr-side" style={{
          flex: "0 0 320px", background: "#0D1F0F",
          padding: "40px 32px", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "20px",
        }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A882", margin: 0 }}>
            Scan & Pay
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.5rem",
            fontWeight: 400, color: "#F7F0E8", margin: 0, textAlign: "center",
          }}>
            Payment QR Code
          </h2>

          {/* QR Box */}
          <div style={{
            background: "#fff", borderRadius: "18px", padding: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            <img
              src={QR_IMAGE}
              alt="Payment QR Code"
              style={{ width: "180px", height: "180px", display: "block" }}
            />
          </div>

          {/* Amount */}
          <div style={{
            background: "rgba(200,168,130,0.15)", border: "1px solid rgba(200,168,130,0.3)",
            borderRadius: "18px", padding: "14px 24px", textAlign: "center",
          }}>
            <p style={{ fontSize: "10px", color: "#C8A882", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 4px" }}>
              Total Amount
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#F7F0E8", margin: 0, fontWeight: 400 }}>
              ₹{grandTotal.toFixed(2)}
            </p>
          </div>

          <p style={{ fontSize: "11px", color: "rgba(247,240,232,0.45)", textAlign: "center", lineHeight: 1.6, margin: 0 }}>
            UPI / Google Pay / PhonePe se<br />scan karke payment karein
          </p>
        </div>

        {/* ── RIGHT: Form Side ── */}
        <div className="form-side" style={{ flex: 1, padding: "40px 36px", overflowY: "auto" }}>

          {submitted ? (
            /* Success State */
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "16px", textAlign: "center" }}>
              <div style={{ fontSize: "56px" }}>🌸</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 400, color: "#0D1F0F", margin: 0 }}>
                Order Confirmed!
              </h3>
              <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.7, maxWidth: "280px" }}>
                Aapka order receive ho gaya. Hum jaldi aapse contact karenge. 🙏
              </p>
              <button onClick={onOrderSuccess} style={{
                padding: "12px 32px", borderRadius: "18px", border: "1.5px solid #0D1F0F",
                background: "transparent", color: "#0D1F0F", cursor: "pointer",
                fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600,
              }}>
                Back to Cart
              </button>
            </div>
          ) : (
            /* Form State */
            <>
              <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C8A882", margin: "0 0 8px" }}>
                Step 2
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 400, color: "#0D1F0F", margin: "0 0 6px" }}>
                Your Details
              </h3>
              <p style={{ fontSize: "12px", color: "#9ca3af", margin: "0 0 28px", lineHeight: 1.6 }}>
                Payment ke baad transaction details bharen
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontWeight: 600, color: "#374151", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                    Full Name *
                  </label>
                  <input
                    className="modal-input"
                    type="text"
                    name="name"
                    placeholder="Aapka naam"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontWeight: 600, color: "#374151", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                    Email *
                  </label>
                  <input
                    className="modal-input"
                    type="email"
                    name="email"
                    placeholder="email@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontWeight: 600, color: "#374151", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                    Phone Number *
                  </label>
                  <input
                    className="modal-input"
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontWeight: 600, color: "#374151", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                    Transaction ID *
                  </label>
                  <input
                    className="modal-input"
                    type="text"
                    name="transactionId"
                    placeholder="UPI transaction ID"
                    value={form.transactionId}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontWeight: 600, color: "#374151", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                    Transaction Time *
                  </label>
                  <input
                    className="modal-input"
                    type="datetime-local"
                    name="transactionTime"
                    value={form.transactionTime}
                    onChange={handleChange}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: "12px", color: "#e11d48", margin: 0 }}>⚠ {error}</p>
                )}

                <button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={submitting}
                  style={{ marginTop: "6px" }}
                >
                  {submitting ? "Submitting..." : "Confirm Order →"}
                </button>

                <p style={{ fontSize: "10px", color: "#9ca3af", textAlign: "center", margin: 0 }}>
                  🔒 Aapka data safe hai
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          minHeight: "80vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: "#fafaf9", fontFamily: "'Inter', sans-serif",
          padding: "40px 20px", textAlign: "center",
        }}
      >
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          style={{ fontSize: "72px", marginBottom: "20px" }}
        >🌸</motion.div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 400, color: "#0D1F0F", margin: "0 0 12px" }}>
          {orderSuccess ? "Your order is packed!" : "Your cart is empty"}
        </h2>
        <p style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.7, maxWidth: "320px", margin: "0 0 32px" }}>
          {orderSuccess
            ? "Thank you for your order. We have received your payment details and will contact you shortly."
            : "Explore our beautiful collection and add your favourite blooms."}
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/category")}
          style={{
            padding: "14px 36px", borderRadius: "18px", border: "none",
            background: "linear-gradient(to right, #fb7185, #e11d48)",
            color: "#fff", fontFamily: "'Inter', sans-serif",
            fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", cursor: "pointer",
            boxShadow: "0 4px 20px rgba(244,63,94,0.3)",
          }}
        >
          Browse Category
        </motion.button>
      </motion.div>
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
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onOrderSuccess={handleOrderSuccess}
        grandTotal={grandTotal}
        items={items}
      />

      <style>{`
        .cart-row {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 20px; background: #fff; border-radius: 18px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          margin-bottom: 12px; transition: all 0.2s;
        }
        .cart-row:hover { box-shadow: 0 4px 20px rgba(214,83,122,0.15); transform: scale(1.01); transition: all 0.2s; }

        /* image + name/category/price block */
        .cart-row-top {
          display: flex; align-items: center; gap: 16px;
          flex: 1; min-width: 0;
        }
        .cart-row-image {
          width: 72px; height: 72px; border-radius: 18px; overflow: hidden;
          flex-shrink: 0;
        }
        .cart-row-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .cart-row-info { flex: 1; min-width: 0; }
        .cart-row-name {
          font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 400;
          color: #0D1F0F; margin: 0 0 4px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .cart-row-meta { font-size: 11px; color: #9ca3af; margin: 0; }

        /* qty controls + line total + remove button */
        .cart-row-controls {
          display: flex; align-items: center; gap: 14px; flex-shrink: 0;
        }
        .qty-group { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .cart-row-total {
          font-family: 'Playfair Display', serif; font-size: 1.05rem; color: #0D1F0F;
          flex-shrink: 0; min-width: 48px; text-align: right;
        }

        .qty-btn {
          width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid #e5e7eb;
          background: #fff; cursor: pointer; font-size: 16px;
          display: flex; align-items: center; justify-content: center;
          color: #374151; transition: all 0.15s; flex-shrink: 0;
        }
        .qty-btn:hover { border-color: #f43f5e; color: #f43f5e; background: #fff1f2; transform: scale(1.05); }
        .remove-btn {
          background: none; border: none; cursor: pointer;
          color: #d1d5db; font-size: 18px; padding: 4px; transition: color 0.15s;
          flex-shrink: 0;
        }
        .remove-btn:hover { color: #f43f5e; transform: scale(1.1); }
        .checkout-btn {
          width: 100%; padding: 15px; border-radius: 18px; border: none;
          background: linear-gradient(to right, #fb7185, #e11d48);
          color: #fff; font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; cursor: pointer;
          box-shadow: 0 6px 20px rgba(244,63,94,0.35);
          transition: transform 0.2s, box-shadow 0.2s; margin-bottom: 12px;
        }
        .checkout-btn:hover { transform: translateY(-1px) scale(1.03); box-shadow: 0 14px 36px rgba(244,63,94,0.45); }
        .continue-btn {
          width: 100%; padding: 13px; border-radius: 18px;
          border: 1.5px solid #e5e7eb; background: #fff;
          color: #374151; font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .continue-btn:hover { border-color: #f43f5e; color: #f43f5e; transform: scale(1.03); }
        @media (min-width: 768px) {
          .cart-layout { display: grid; grid-template-columns: 1fr 360px; gap: 24px; }
        }

        /* ── Tablet ── keep horizontal row but tighten spacing */
        @media (max-width: 900px) {
          .cart-row { padding: 16px; gap: 14px; }
          .cart-row-image { width: 64px; height: 64px; }
        }

        /* ── Mobile ── stack image+info on top, controls in a row below */
        @media (max-width: 560px) {
          .cart-row {
            flex-direction: column;
            align-items: stretch;
            padding: 14px;
            gap: 12px;
          }
          .cart-row-top {
            width: 100%;
          }
          .cart-row-image { width: 56px; height: 56px; }
          .cart-row-name { font-size: 0.92rem; }
          .cart-row-meta { font-size: 10px; }
          .cart-row-controls {
            width: 100%;
            justify-content: space-between;
            padding-top: 10px;
            border-top: 1px solid #f3f4f6;
          }
          .cart-row-total { font-size: 1rem; min-width: 0; }
        }
      `}</style>

      {/* Page header */}
      <div style={{ background: "#0D1F0F", padding: "48px 24px 40px", textAlign: "center", marginBottom: "32px" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A882", margin: "0 0 12px" }}>
          Your Selection
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 400, color: "#F7F0E8", margin: "0 0 8px" }}>
          Shopping Cart
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(247,240,232,0.45)" }}>
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
            <div style={{
              background: "#fff", borderRadius: "18px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)", overflow: "hidden",
              position: "sticky", top: "100px",
            }}>
              <div style={{ background: "#0D1F0F", padding: "20px 24px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 400, color: "#F7F0E8", margin: 0 }}>
                  Order Summary
                </h3>
              </div>

              <div style={{ padding: "20px 24px" }}>
                {items.map((item) => (
                  <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "13px" }}>
                    <span style={{ color: "#6b7280" }}>
                      {item.name} <span style={{ color: "#d1d5db" }}>×{item.quantity}</span>
                    </span>
                    <span style={{ color: "#0D1F0F", fontWeight: 500 }}>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div style={{ height: "1px", background: "#f3f4f6", margin: "16px 0" }} />

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px" }}>
                  <span style={{ color: "#6b7280" }}>Subtotal</span>
                  <span style={{ color: "#0D1F0F", fontWeight: 500 }}>₹{total.toFixed(2)}</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px" }}>
                  <span style={{ color: "#6b7280" }}>Delivery</span>
                  <span style={{ color: delivery === 0 ? "#16a34a" : "#0D1F0F", fontWeight: 500 }}>
                    {delivery === 0 ? "FREE" : `₹${delivery.toFixed(2)}`}
                  </span>
                </div>

                {delivery > 0 && (
                  <div style={{
                    background: "#fef9c3", border: "1px solid #fde047",
                    borderRadius: "18px", padding: "8px 12px",
                    fontSize: "11px", color: "#854d0e", marginBottom: "12px", lineHeight: 1.5,
                  }}>
                    Add ₹{(60 - total).toFixed(2)} more for FREE delivery 🚚
                  </div>
                )}

                {delivery === 0 && (
                  <div style={{
                    background: "#f0fdf4", border: "1px solid #bbf7d0",
                    borderRadius: "18px", padding: "8px 12px",
                    fontSize: "11px", color: "#166534", marginBottom: "12px",
                  }}>
                    ✓ You qualify for free delivery!
                  </div>
                )}

                <div style={{ height: "1px", background: "#f3f4f6", margin: "12px 0 16px" }} />

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#0D1F0F" }}>Total</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#0D1F0F", fontWeight: 400 }}>
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>

                {/*  YE BUTTON AB MODAL OPEN KAREGA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="checkout-btn"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed to Checkout →
                </motion.button>

                <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginTop: "12px" }}>
                  {["🔒 Secure", "🌿 Fresh", "🚚 Fast"].map((b) => (
                    <span key={b} style={{ fontSize: "10px", color: "#9ca3af" }}>{b}</span>
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
