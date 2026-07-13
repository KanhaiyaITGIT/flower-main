import { useState, useEffect, useCallback } from "react";
import { GOOGLE_CLIENT_ID } from "../constants";

function parseJWT(token) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

export default function useGoogleAuth() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("google_user");
      return saved ? JSON.parse(saved) : { name: "Guest", email: "", picture: "", isLoggedIn: false };
    } catch {
      return { name: "Guest", email: "", picture: "", isLoggedIn: false };
    }
  });
  const [googleError, setGoogleError] = useState(false);

  const handleCredential = useCallback((response) => {
    const decoded = parseJWT(response.credential);
    if (!decoded) return;
    const profile = {
      name: decoded.name || "Guest",
      email: decoded.email || "",
      picture: decoded.picture || "",
      isLoggedIn: true,
    };
    setUser(profile);
    setGoogleError(false);
    try { localStorage.setItem("google_user", JSON.stringify(profile)); } catch {}
  }, []);

  const logout = useCallback(() => {
    setUser({ name: "Guest", email: "", picture: "", isLoggedIn: false });
    try { localStorage.removeItem("google_user"); } catch {}
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }
  }, []);

  const retryGoogle = useCallback(() => {
    setGoogleError(false);
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      try {
        if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com") {
          throw new Error("Invalid or missing Google Client ID");
        }
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleCredential,
          cancel_on_tap_outside: false,
        });
        window.google.accounts.id.prompt();
      } catch (err) {
        console.warn("Google Auth init failed:", err.message);
        setGoogleError(true);
      }
    };
    script.onerror = () => {
      console.warn("Google GSI script failed to load");
      setGoogleError(true);
    };
    document.head.appendChild(script);
  }, [handleCredential]);

  useEffect(() => {
    if (user.isLoggedIn) return;
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      try {
        if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com") {
          throw new Error("Invalid or missing Google Client ID");
        }
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleCredential,
          cancel_on_tap_outside: false,
        });
        window.google.accounts.id.prompt();
      } catch (err) {
        console.warn("Google Auth init failed:", err.message);
        setGoogleError(true);
      }
    };
    script.onerror = () => {
      console.warn("Google GSI script failed to load");
      setGoogleError(true);
    };
    document.head.appendChild(script);
    return () => {
      const existing = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, [user.isLoggedIn, handleCredential]);

  return { user, logout, googleError, retryGoogle };
}
