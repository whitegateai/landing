import part1 from "./locales/en-part-1.json";
import part2 from "./locales/en-part-2.json";
import part3 from "./locales/en-part-3.json";
import extra from "./locales/en-extra.json";
import { SITE_URL } from "./seo";

export type Locale = "tr" | "en";
const english: Record<string, string> = { ...part1, ...part2, ...part3, ...extra };

export function translate(text: string, locale: Locale): string {
  if (locale === "tr") return text;
  const key = text.replace(/\s+/g, " ").trim();
  const translated = english[key];
  if (translated === undefined) return text;
  return text.match(/^\s*/)?.[0] + translated + text.match(/\s*$/)?.[0];
}

export function unlocalizedPath(path: string) {
  return path.replace(/^\/en(?=\/|$)/, "") || "/";
}

export function localizedHref(href: string, locale: Locale): string {
  if (href.startsWith(SITE_URL) && /^[/#?]|^$/.test(href.slice(SITE_URL.length))) {
    const path = href.slice(SITE_URL.length) || "/";
    return `${SITE_URL}${localizedHref(path.startsWith("/") ? path : `/${path}`, locale)}`;
  }
  if (!href.startsWith("/") || href.startsWith("//") || /^\/(?:api|_next|gate-assets|gate-css|gate-js|studio|opengraph-image|utility-pages)(?:\/|$)/.test(href)) return href;
  if (/\.[a-z0-9]+(?:[?#]|$)/i.test(href) && !href.startsWith("/llms.txt")) return href;
  const path = unlocalizedPath(href);
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}

// Translate authored content, never identifiers, asset paths or third-party URLs.
export function localizeData<T>(value: T, locale: Locale): T {
  if (locale === "tr") return value;
  if (typeof value === "string") return translate(value, locale) as T;
  if (Array.isArray(value)) return value.map(item => localizeData(item, locale)) as T;
  if (value instanceof URL) return value;
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key,
    key === "inLanguage" && item === "tr-TR" ? "en-US" :
    ["href", "url", "mainEntityOfPage", "item"].includes(key) && typeof item === "string" ? localizedHref(item, locale) : localizeData(item, locale),
  ])) as T;
  return value;
}
