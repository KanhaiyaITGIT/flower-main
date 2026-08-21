import {
  BUSINESS_NAME,
  CONTACT_PHONE_1,
  WHATSAPP_NUMBER,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
} from "../constants";

export const SITE_URL = "https://shivamflorist.shop";

export const SITE_NAME = BUSINESS_NAME; // "Shivam Florist"
export const SITE_ALTERNATE_NAME = "Shivam Florist Shop";

export const OG_IMAGE = "/og-image.jpg";

export const SERVICE_AREAS = [
  "Noida",
  "Greater Noida",
  "Delhi",
  "New Delhi",
  "Ghaziabad",
  "Gurugram",
  "Gurgaon",
  "Faridabad",
  "Delhi NCR",
];

// Resolve a possibly-relative image path to an absolute https URL.
export function absoluteUrl(path) {
  if (!path) return `${SITE_URL}${OG_IMAGE}`;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

// ─── Per-route SEO metadata ───────────────────────────────────────────────
// Keys are route base paths. Search-param aware routes (e.g. /category) are
// handled separately in getRouteSeo().

export const PAGE_SEO = {
  "/": {
    title: "Shivam Florist | Premium Flowers & Decoration in Delhi NCR",
    description:
      "Shivam Florist offers premium flowers, bouquets, birthday and anniversary arrangements, wedding & event decoration, balloon decor and same-day flower delivery across Delhi NCR.",
    path: "/",
    type: "website",
    image: OG_IMAGE,
  },
  "/category": {
    title: "Flowers & Bouquets Online | Shivam Florist Delhi NCR",
    description:
      "Shop fresh flowers, luxury bouquets, roses, birthday blooms and anniversary arrangements with same-day flower delivery across Delhi NCR from Shivam Florist.",
    path: "/category",
    type: "website",
    image: OG_IMAGE,
  },
  "/occasions": {
    title: "Occasion Flowers & Gifts | Shivam Florist Delhi NCR",
    description:
      "Celebrate every moment with Shivam Florist — curated flowers, bouquets and gifts for birthdays, anniversaries, weddings and festivals across Delhi NCR.",
    path: "/occasions",
    type: "website",
    image: OG_IMAGE,
  },
  "/decor": {
    title: "Event & Wedding Decoration Services | Shivam Florist Delhi NCR",
    description:
      "Shivam Florist provides wedding decoration, birthday decoration, anniversary decoration, haldi, mehendi, reception and balloon decor with on-site setup across Delhi NCR.",
    path: "/decor",
    type: "website",
    image: OG_IMAGE,
  },
  "/about": {
    title: "About Shivam Florist | Premium Florist in Delhi NCR",
    description:
      "Learn about Shivam Florist — a premium florist and event decoration studio serving Delhi NCR with handcrafted flowers, same-day delivery and bespoke event styling.",
    path: "/about",
    type: "website",
    image: OG_IMAGE,
  },
  "/gallery": {
    title: "Gallery | Shivam Florist Floral & Decor Portfolio",
    description:
      "Explore the Shivam Florist portfolio of wedding decor, floral arrangements, birthday setups and event styling across Delhi NCR.",
    path: "/gallery",
    type: "website",
    image: OG_IMAGE,
  },
  "/contact": {
    title: "Contact Shivam Florist | Call, WhatsApp & Enquiry Delhi NCR",
    description:
      "Get in touch with Shivam Florist for flowers, bouquets and event decoration. Call, WhatsApp or send an enquiry. Serving Noida, Delhi, Gurugram, Ghaziabad, Faridabad & Delhi NCR.",
    path: "/contact",
    type: "website",
    image: OG_IMAGE,
  },
  "/help-center": {
    title: "Help Center | Shivam Florist",
    description:
      "Find answers about ordering, flower delivery, custom arrangements and event decoration with Shivam Florist's help center.",
    path: "/help-center",
    type: "website",
    image: OG_IMAGE,
  },
  "/delivery-info": {
    title: "Flower Delivery Information | Shivam Florist Delhi NCR",
    description:
      "Same-day flower delivery across Delhi NCR. Learn about Shivam Florist's delivery areas, timings and freshness guarantee.",
    path: "/delivery-info",
    type: "website",
    image: OG_IMAGE,
  },
  "/bulk-orders": {
    title: "Bulk & Corporate Flower Orders | Shivam Florist",
    description:
      "Shivam Florist handles bulk and corporate flower orders, gifting and event decoration across Delhi NCR with custom quotes.",
    path: "/bulk-orders",
    type: "website",
    image: OG_IMAGE,
  },
  "/careers": {
    title: "Careers | Shivam Florist",
    description:
      "Join the Shivam Florist team. Explore careers in floral design, event decoration and customer experience across Delhi NCR.",
    path: "/careers",
    type: "website",
    image: OG_IMAGE,
  },
  "/become-partner": {
    title: "Become a Partner | Shivam Florist",
    description:
      "Partner with Shivam Florist for weddings, venues, corporates and resellers across Delhi NCR.",
    path: "/become-partner",
    type: "website",
    image: OG_IMAGE,
  },
  "/terms": {
    title: "Terms & Conditions | Shivam Florist",
    description:
      "Read the terms and conditions for using Shivam Florist's website, flower delivery and event decoration services.",
    path: "/terms",
    type: "website",
    image: OG_IMAGE,
  },
  "/privacy": {
    title: "Privacy Policy | Shivam Florist",
    description:
      "How Shivam Florist collects, uses and protects your information. Read our privacy policy.",
    path: "/privacy",
    type: "website",
    image: OG_IMAGE,
  },
  "/shipping": {
    title: "Shipping Policy | Shivam Florist",
    description:
      "Shivam Florist's shipping and same-day flower delivery policy across Delhi NCR.",
    path: "/shipping",
    type: "website",
    image: OG_IMAGE,
  },
  "/refund": {
    title: "Refund Policy | Shivam Florist",
    description:
      "Shivam Florist's refund and replacement policy for flowers, bouquets and decoration services.",
    path: "/refund",
    type: "website",
    image: OG_IMAGE,
  },
};

// Stateful / private routes that should NOT be indexed.
export const NOINDEX_PATHS = ["/cart", "/track-order"];

// Category query-parameter aware SEO for /category?cat=...
export const CATEGORY_SEO = {
  Bouquets: {
    title: "Bouquets & Flower Bouquets Online | Shivam Florist Delhi NCR",
    description:
      "Order premium rose, tulip and mixed bouquets online with same-day flower delivery across Delhi NCR from Shivam Florist.",
  },
  Birthday: {
    title: "Birthday Flowers & Decoration | Shivam Florist Delhi NCR",
    description:
      "Surprise loved ones with birthday flowers, bouquets and balloon decoration. Same-day birthday flower delivery across Delhi NCR by Shivam Florist.",
  },
  Anniversary: {
    title: "Anniversary Flowers & Decoration | Shivam Florist Delhi NCR",
    description:
      "Romantic anniversary flowers, rose boxes and decoration by Shivam Florist with same-day delivery across Delhi NCR.",
  },
  Wedding: {
    title: "Wedding Flowers & Decoration | Shivam Florist Delhi NCR",
    description:
      "Shivam Florist designs wedding flowers, mandap decor, stages and reception floral setups across Delhi NCR.",
  },
  Reception: {
    title: "Reception Flowers & Decoration | Shivam Florist Delhi NCR",
    description:
      "Elegant reception floral arrangements, backdrops and stage decor by Shivam Florist across Delhi NCR.",
  },
  Haldi: {
    title: "Haldi Decoration & Flowers | Shivam Florist Delhi NCR",
    description:
      "Traditional haldi ceremony flowers and marigold decoration by Shivam Florist across Delhi NCR.",
  },
  Balloon: {
    title: "Balloon Decoration & Balloons | Shivam Florist Delhi NCR",
    description:
      "Birthday and event balloon decoration, balloon arches and balloon bouquets by Shivam Florist across Delhi NCR.",
  },
  Devotional: {
    title: "Devotional Flowers & Pooja Flowers | Shivam Florist Delhi NCR",
    description:
      "Fresh marigold garlands, pooja flowers and festive devotional floral decor by Shivam Florist across Delhi NCR.",
  },
  "Candles & More": {
    title: "Candles, Gifts & More | Shivam Florist Delhi NCR",
    description:
      "Scented candles, gift hampers and floral add-ons from Shivam Florist across Delhi NCR.",
  },
};

// ─── Structured data builders ──────────────────────────────────────────────

function organizationNode() {
  return {
    "@type": "Florist",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    url: `${SITE_URL}/`,
    image: absoluteUrl(OG_IMAGE),
    logo: absoluteUrl(OG_IMAGE),
    telephone: CONTACT_PHONE_1,
    priceRange: "₹₹",
    areaServed: SERVICE_AREAS,
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 28.5355,
        longitude: 77.391,
      },
      geoRadius: 80000,
    },
    sameAs: [INSTAGRAM_LINK, FACEBOOK_LINK].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE_1,
      contactType: "customer service",
      areaServed: "Delhi NCR",
      availableLanguage: ["en", "hi"],
    },
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    url: `${SITE_URL}/`,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function breadcrumbNode(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Build the full JSON-LD graph for a route.
// breadcrumbs: [{ name, path }]
export function buildJsonLd({ isHome = false, breadcrumbs = [] } = {}) {
  const graph = [organizationNode()];
  if (isHome) graph.push(websiteNode());
  if (breadcrumbs.length > 1) graph.push(breadcrumbNode(breadcrumbs));
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
