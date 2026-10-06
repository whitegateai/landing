import { machineDocumentPaths } from "@/lib/machine-content";
import { canonicalHomePageContent } from "@/lib/home-content";
import { SITE_URL } from "@/lib/seo";

export function GET() {
  const text = ["# WhiteGate AI", `> ${canonicalHomePageContent.seoDescription}`, "## Machine HTML", ...machineDocumentPaths().map(path => `- [${path}](${SITE_URL}/ai/${path})`), "## Markdown", ...machineDocumentPaths().map(path => `- [${path}](${SITE_URL}/ai/markdown/${path})`), "## Public sources", `- [Human site](${SITE_URL}/)`, `- [Yayınlar](${SITE_URL}/yayinlar)`, `- [Sitemap](${SITE_URL}/sitemap.xml)`, `- [İletişim](${SITE_URL}/iletisim)`].join("\n") + "\n";
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=60", "X-Content-Type-Options": "nosniff" } });
}
