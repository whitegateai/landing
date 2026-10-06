import { translate } from "@/lib/i18n";
import { machineDocumentPaths } from "@/lib/machine-content";
import { canonicalHomePageContent } from "@/lib/home-content";
import { SITE_URL } from "@/lib/seo";

export function GET(request: Request) {
  const locale = new URL(request.url).pathname.startsWith("/en/") ? "en" : "tr";
  const prefix = locale === "en" ? "/en" : "";
  const text = ["# WhiteGate AI", `> ${translate(canonicalHomePageContent.seoDescription, locale)}`, "## Machine HTML", ...machineDocumentPaths().map(path => `- [${path}](${SITE_URL}${prefix}/ai/${path})`), "## Markdown", ...machineDocumentPaths().map(path => `- [${path}](${SITE_URL}${prefix}/ai/markdown/${path})`), "## Public sources", `- [${locale === "en" ? "Human site" : "İnsan sitesi"}](${SITE_URL}${prefix}/)`, `- [${locale === "en" ? "Publications" : "Yayınlar"}](${SITE_URL}${prefix}/yayinlar)`, `- [Sitemap](${SITE_URL}/sitemap.xml)`, `- [${locale === "en" ? "Contact" : "İletişim"}](${SITE_URL}${prefix}/iletisim)`, "## Languages", `- [Türkçe](${SITE_URL}/llms.txt)`, `- [English](${SITE_URL}/en/llms.txt)`].join("\n") + "\n";
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=60", "X-Content-Type-Options": "nosniff" } });
}
