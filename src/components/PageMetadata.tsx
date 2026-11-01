import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import { origin, pages } from "../seo";

function meta(attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = value;
}

export default function PageMetadata() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pages[path] ?? pages["/"];
    document.title = page.title;
    meta("name", "description", page.description);
    meta("property", "og:title", page.title);
    meta("property", "og:description", page.description);
    meta("name", "twitter:title", page.title);
    meta("name", "twitter:description", page.description);
    // Do not collapse unknown routes, query strings or hash anchors onto the home canonical.
    const url = `${origin}${path}`;
    meta("property", "og:url", url);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = url;
  }, [pathname]);
  return null;
}
