import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_LOGO_URL, SITE_URL } from "@/consts/seo";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  jsonLd?: Record<string, unknown>[];
  image?: string;
};

const setMetaTag = (selector: string, name: string, content: string) => {
  if (!content) return;
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    if (selector.startsWith('meta[name="')) {
      element.setAttribute("name", name);
    } else {
      element.setAttribute("property", name);
    }
    element.setAttribute("data-seo", "true");
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setCanonical = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    link.setAttribute("data-seo", "true");
    document.head.appendChild(link);
  }
  link.href = url;
};

const setJsonLd = (jsonLd?: Record<string, unknown>[]) => {
  const existing = document.querySelectorAll('script[data-seo="jsonld"]');
  existing.forEach((node) => node.remove());
  if (!jsonLd || jsonLd.length === 0) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo", "jsonld");
  script.text = JSON.stringify({ "@context": "https://schema.org", "@graph": jsonLd });
  document.head.appendChild(script);
};

const Seo = ({ title, description, keywords, path, jsonLd, image }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const resolvedPath = path ?? location.pathname;
    const url = `${SITE_URL}${resolvedPath}`;
    const imageUrl = image ?? SITE_LOGO_URL;
    document.title = title;

    setMetaTag('meta[name="description"]', "description", description);
    setMetaTag('meta[name="keywords"]', "keywords", (keywords ?? []).join(", "));

    setMetaTag('meta[property="og:title"]', "og:title", title);
    setMetaTag('meta[property="og:description"]', "og:description", description);
    setMetaTag('meta[property="og:url"]', "og:url", url);
    setMetaTag('meta[property="og:image"]', "og:image", imageUrl);

    setMetaTag('meta[name="twitter:title"]', "twitter:title", title);
    setMetaTag('meta[name="twitter:description"]', "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "twitter:image", imageUrl);

    setCanonical(url);
    setJsonLd(jsonLd);
  }, [title, description, keywords, path, jsonLd, image, location.pathname]);

  return null;
};

export default Seo;
