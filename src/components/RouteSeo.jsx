import { useLocation } from "react-router-dom";
import Seo from "./Seo";
import {
  PAGE_SEO,
  CATEGORY_SEO,
  NOINDEX_PATHS,
  absoluteUrl,
} from "../seo/siteConfig";

// Resolve SEO metadata for the current location (path + query params).
function resolveSeo(location) {
  const { pathname, search } = location;
  const base = pathname;

  // Stateful / private routes → noindex.
  if (NOINDEX_PATHS.includes(base)) {
    return {
      title: "Shivam Florist",
      description: "",
      path: base,
      noindex: true,
      breadcrumbs: null,
    };
  }

  // Category page is query-param aware.
  if (base === "/category") {
    const params = new URLSearchParams(search);
    const cat = params.get("cat");
    const override = cat ? CATEGORY_SEO[cat] : null;
    const baseSeo = PAGE_SEO["/category"];
    return {
      ...baseSeo,
      title: override ? override.title : baseSeo.title,
      description: override ? override.description : baseSeo.description,
      // Bare /category redirects home; keep filtered pages' canonical
      // self-referential so they aren't collapsed into the homepage.
      path: cat ? `/category${search}` : "/category",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: override ? cat : "All Flowers & Gifts", path: "/category" },
      ],
    };
  }

  const seo = PAGE_SEO[base];
  if (!seo) {
    return null;
  }

  const label = seo.title.split(" | ")[0].split(" & ")[0];

  return {
    ...seo,
    breadcrumbs: [{ name: "Home", path: "/" }, { name: label, path: base }],
  };
}

function breadcrumbJsonLd(items) {
  if (!items || items.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export default function RouteSeo() {
  const location = useLocation();
  const resolved = resolveSeo(location);

  if (!resolved) return null;

  const jsonLd = breadcrumbJsonLd(resolved.breadcrumbs);

  return (
    <Seo
      title={resolved.title}
      description={resolved.description}
      path={resolved.path || location.pathname}
      image={resolved.image}
      type={resolved.type || "website"}
      noindex={resolved.noindex || false}
      jsonLd={jsonLd}
    />
  );
}
