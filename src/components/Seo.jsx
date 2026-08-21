import { useEffect } from "react";
import { SITE_URL, absoluteUrl } from "../seo/siteConfig";

// Helper: create-or-update a <meta> element by selector.
function upsertMeta(selector, attributes, content) {
  if (content == null) return null;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

// Helper: create-or-update a <link> element by selector.
function upsertLink(selector, attributes) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
}

export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
  jsonLd,
}) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const url = absoluteUrl(path);
    const ogImage = absoluteUrl(image);

    // ── Title ──
    document.title = title;

    // ── Canonical ──
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: url });

    // ── Meta description ──
    upsertMeta('meta[name="description"]', { name: "description" }, description);

    // ── Robots ──
    upsertMeta(
      'meta[name="robots"]',
      { name: "robots" },
      noindex ? "noindex, follow" : "index, follow"
    );

    // ── Open Graph ──
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description
    );
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, url);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, type);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, ogImage);
    upsertMeta(
      'meta[property="og:site_name"]',
      { property: "og:site_name" },
      "Shivam Florist"
    );

    // ── Twitter ──
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      description
    );
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, ogImage);

    // ── JSON-LD structured data ──
    const existing = document.getElementById("seo-jsonld");
    if (existing) existing.remove();

    let script = null;
    if (jsonLdString) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "seo-jsonld";
      script.textContent = jsonLdString;
      document.head.appendChild(script);
    }

    return () => {
      if (script) script.remove();
    };
  }, [
    title,
    description,
    path,
    image,
    type,
    noindex,
    jsonLdString,
  ]);

  return null;
}
