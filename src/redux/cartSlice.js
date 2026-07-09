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
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
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
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

export default cartSlice.reducer;