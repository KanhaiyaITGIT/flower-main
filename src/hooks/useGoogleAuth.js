import { useState, useEffect, useCallback, useRef } from "react";
import { GOOGLE_CLIENT_ID } from "../constants";

function parseJWT(token) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

const GSI_SRC = "https://accounts.google.com/gsi/client";

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
  const scriptRef = useRef(null);

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

  const isClientIdValid = GOOGLE_CLIENT_ID && GOOGLE_CLIENT_ID !== "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

  // Loads the Google Identity Services script only when explicitly needed
  // (when the auth modal is opened) and initializes the client.
  const initGoogle = useCallback(() => {
    if (user.isLoggedIn) return;
    if (!isClientIdValid) {
      setGoogleError(true);
      return;
    }

    const onReady = () => {
      try {
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

    const existing = document.querySelector(`script[src="${GSI_SRC}"]`);
    if (existing) {
      scriptRef.current = existing;
      if (window.google?.accounts?.id) {
        onReady();
      } else {
        existing.addEventListener("load", onReady, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = GSI_SRC;
    script.async = true;
    script.defer = true;
    script.onload = onReady;
    script.onerror = () => {
      console.warn("Google GSI script failed to load");
      setGoogleError(true);
    };
    document.head.appendChild(script);
    scriptRef.current = script;
  }, [user.isLoggedIn, isClientIdValid, handleCredential]);

  const logout = useCallback(() => {
    setUser({ name: "Guest", email: "", picture: "", isLoggedIn: false });
    try { localStorage.removeItem("google_user"); } catch {}
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }
  }, []);

  const retryGoogle = useCallback(() => {
    setGoogleError(false);
    initGoogle();
  }, [initGoogle]);

  // Do NOT auto-load the GSI script on mount. It is only loaded when the
  // authentication UI is actually opened (see AuthModal).
  useEffect(() => {
    return () => {
      const existing = document.querySelector(`script[src="${GSI_SRC}"]`);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, []);

  return { user, logout, googleError, retryGoogle, initGoogle };
}
