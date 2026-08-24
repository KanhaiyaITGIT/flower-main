import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "flower_cart";
const EXPIRY_DAYS = 5;

// localStorage se cart load karo (expiry check ke saath)
function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    if (!saved) return [];

    const { items, savedAt } = JSON.parse(saved);

    // 5 din check karo
    const daysPassed = (Date.now() - savedAt) / (1000 * 60 * 60 * 24);
    if (daysPassed > EXPIRY_DAYS) {
      localStorage.removeItem(CART_KEY);
      return [];
    }

    return items || [];
  } catch {
    return [];
  }
}

// localStorage mein save karo
function saveCart(items) {
  try {
    localStorage.setItem(
      CART_KEY,
      JSON.stringify({ items, savedAt: Date.now() })
    );
  } catch {
    // storage full ho toh silently fail karo
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(), // startup pe localStorage se load hoga
  },
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;
      const isQuote = !!payload.callForPricing;
      const existing = state.items.find((i) => i.id === payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...payload,
          // Quotation-based items must NEVER carry a billable price.
          callForPricing: isQuote,
          price: isQuote ? null : Number(payload.price) || 0,
          quantity: 1,
        });
      }
      saveCart(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveCart(state.items);
    },
    incrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      saveCart(state.items);
    },
    decrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        } else {
          item.quantity -= 1;
        }
      }
      saveCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem(CART_KEY);
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } =
  cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);

// Only items with a real fixed price contribute to the billable total.
// Call-for-Pricing (quotation) items are intentionally excluded so the
// cart can never generate a fake/incorrect bill for an unknown-price item.
export const selectFixedTotal = (state) =>
  state.cart.items.reduce(
    (sum, i) => (i.callForPricing ? sum : sum + (Number(i.price) || 0) * i.quantity),
    0
  );

// Backwards-compatible alias: total of billable (fixed-price) items only.
export const selectCartTotal = selectFixedTotal;

export const selectHasQuotationItems = (state) =>
  state.cart.items.some((i) => i.callForPricing);

export const selectQuotationCount = (state) =>
  state.cart.items
    .filter((i) => i.callForPricing)
    .reduce((sum, i) => sum + i.quantity, 0);

export default cartSlice.reducer;