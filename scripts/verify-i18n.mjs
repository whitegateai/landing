import assert from "node:assert/strict";
import fs from "node:fs";
import { JSDOM } from "jsdom";

const base = process.argv[2] || "http://127.0.0.1:3010";
const dictionary = Object.assign({}, ...["en-part-1", "en-part-2", "en-part-3", "en-extra"].map(name => JSON.parse(fs.readFileSync(new URL(`../lib/locales/${name}.json`, import.meta.url)))));
const routeSource = fs.readFileSync(new URL("../lib/english-routes.ts", import.meta.url), "utf8");
const human = [...routeSource.matchAll(/^  "([^"]+)":/gm)].map(match => match[1]).filter(path => path !== "/rehberler/ilk-sistem-plani");
const services = ["ozel-yazilim-gelistirme", "yapay-zeka-otomasyonu", "ai-agent-gelistirme", "sistem-entegrasyonu", "n8n-otomasyon"];
human.push(...services.map(slug => `/hizmetler/${slug}`));
const machine = ["home", "hizmetler", "senaryolar", "iletisim", ...services.map(slug => `hizmetler/${slug}`)];
let pages = 0;
for (const path of [...human, ...machine.map(path => `/ai/${path}`)]) {
  for (const locale of ["tr", "en"]) {
    const url = locale === "en" ? `/en${path === "/" ? "" : path}` : path;
    const response = await fetch(base + url, { headers: { "Accept-Language": "en-US" } });
    assert.equal(response.status, 200, url);
    const dom = new JSDOM(await response.text());
    const doc = dom.window.document;
    assert.equal(doc.documentElement.lang, locale, `${url} html lang`);
    assert.equal(doc.querySelectorAll("[data-site-mode-switch]").length, 1, url);
    assert.equal(doc.querySelectorAll("[data-language-switch]").length, 1, url);
    assert.ok(doc.querySelector(path.startsWith("/ai/") ? "header [data-language-switch]" : ".navbar-container > [data-language-switch]"), `${url} embedded language control`);
    if (path.startsWith("/ai/")) assert.equal(doc.querySelectorAll("a[data-human-return]").length, 2, `${url} both Human return links`);
    else {
      const links = [...doc.querySelectorAll(".nav-menu-wrap > a")];
      assert.equal(links.at(-1)?.getAttribute("href"), `${locale === "en" ? "/en" : ""}/iletisim`, `${url} contact at end of main menu`);
      assert.ok(links.at(-1)?.classList.contains("navlink"), `${url} contact uses navigation style`);
      assert.equal([...doc.querySelectorAll(".navbar a[href$='/iletisim']")].filter(link => !link.closest("[data-language-switch]")).length, 1, `${url} single contact menu link`);
    }
    assert.equal(doc.querySelector("[data-site-mode-switch]").textContent.trim(), locale === "en" ? "HUMANMACHINE" : "İNSANMAKİNE", url);
    assert.equal(doc.querySelector("[data-language-switch] [aria-current]").textContent, locale.toUpperCase(), url);
    if (locale === "en") {
      const canonicalPath = path === "/ai/home" ? "/en" : path === "/ai/senaryolar" ? "/en/vaka-analizleri" : path.startsWith("/ai/") ? `/en${path.slice(3)}` : url;
      assert.equal(doc.querySelector("link[rel=canonical]")?.href, `https://www.whitegateai.com${canonicalPath}`, `${url} canonical`);
      for (const link of doc.querySelectorAll("a[href]")) {
        const href = link.getAttribute("href");
        if (href.startsWith("/") && !link.closest("[data-language-switch]") && !/^\/(en(?:\/|$)|gate-|studio|utility-pages|sitemap.xml)/.test(href)) assert.fail(`${url} loses locale: ${href}`);
      }
      doc.querySelectorAll("script,style,pre").forEach(element => element.remove());
      const walker = doc.createTreeWalker(doc.body, 4);
      let node;
      while ((node = walker.nextNode())) {
        const text = node.textContent.replace(/\s+/g, " ").trim();
        if (dictionary[text] && dictionary[text] !== text) assert.fail(`${url} untranslated text: ${text}`);
        assert.ok(!/[çğıöşüÇĞİÖŞÜ]/.test(text) || /Oluş|Başdemir|Türkiye|Türkçe|Yılmaz/.test(text), `${url} Turkish text: ${text}`);
      }
    }
    dom.window.close();
    pages++;
  }
}
for (const path of machine) for (const locale of ["tr", "en"]) {
  const response = await fetch(`${base}${locale === "en" ? "/en" : ""}/ai/markdown/${path}`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^text\/markdown/);
  const markdown = await response.text();
  assert.ok(markdown.includes(locale === "en" ? "Language: English / en-US" : "Dil: Türkçe / tr-TR"));
  if (locale === "en") assert.ok(!/[çğıöşüÇĞİÖŞÜ]/.test(markdown), path);
}
for (const locale of ["", "/en"]) {
  const discovery = await fetch(`${base}${locale}/llms.txt`);
  assert.equal(discovery.status, 200);
  assert.ok((await discovery.text()).includes(`${locale}/ai/markdown/home`));
  const image = await fetch(`${base}${locale}/opengraph-image`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type"), /^image\/png/);
}
for (const path of ["/en/missing-page", "/fr/llms.txt", "/fr/ai/markdown/home", "/en/hizmetler/missing-service"]) assert.equal((await fetch(base + path)).status, 404, path);
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
assert.ok(sitemap.includes("https://www.whitegateai.com/en/hizmetler"));
assert.ok(sitemap.includes('hreflang="tr"') && sitemap.includes('hreflang="en"'));
console.log(`PASS: ${pages} Human/Machine HTML pages, 18 Markdown routes, TR default, both mode/language controls, locale links, translations, canonical/hreflang, discovery, share images and 404s.`);
