import { useEffect } from "react";

function upsertMeta(key: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

interface SEOOptions {
  title: string;
  description: string;
  /** Path of the current page, e.g. "/about". Used for the canonical URL. */
  path?: string;
}

const SITE_URL = "https://sedcmau.in";

/**
 * Sets a unique page title, meta description, Open Graph tags, and canonical
 * URL for each route. Important for SEO because this is a single-page app —
 * without this, every page would share the same title.
 */
export function useSEO({ title, description, path = "/" }: SEOOptions) {
  useEffect(() => {
    document.title = title;
    upsertMeta("description", description);
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:url", `${SITE_URL}${path}`, "property");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);
  }, [title, description, path]);
}
