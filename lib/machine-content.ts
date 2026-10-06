import { canonicalHomePageContent } from "./home-content";
import { servicePages } from "./services";
import { SITE_NAME, SITE_URL, organizationJsonLd } from "./seo";
import { getResolvedHomePageContent } from "@/sanity/lib/homePage";

export type MachineSection = { title: string; paragraphs?: string[]; items?: { title: string; text?: string; href?: string }[] };
export type MachineDocument = { title: string; description: string; humanPath: string; sections: MachineSection[] };

export const machineNavigation = [
  { label: "index", path: "home" },
  { label: "hizmetler", path: "hizmetler" },
  { label: "senaryolar", path: "senaryolar" },
  { label: "iletişim", path: "iletisim" },
];
export const machineEmail = organizationJsonLd["@graph"][0].email!;

export async function getMachineDocument(path: string): Promise<MachineDocument | null> {
  if (path === "home") {
    return {
      title: SITE_NAME,
      description: canonicalHomePageContent.seoDescription,
      humanPath: "/",
      sections: [
        { title: "WhiteGate ne yapar?", paragraphs: [canonicalHomePageContent.heroDescription] },
        { title: "Hizmetler", items: servicePages.map(service => ({ title: service.title, text: service.description, href: `/ai/hizmetler/${service.slug}` })) },
        { title: "Örnek uygulamalar", paragraphs: ["Örnek senaryoları inceleyin; her uygulamanın görevi ve insan onayı sınırı ayrı tanımlanır."], items: [{ title: "Örnek senaryolar", href: "/ai/senaryolar" }] },
        { title: "Yayınlar", items: [{ title: "WhiteGate yayınları", text: "AI dönüşümü ve uygulamalarına dair yazılar. Yayınların tam metinleri Human sitededir.", href: "/yayinlar" }] },
        { title: "İlk adım", paragraphs: [canonicalHomePageContent.ctaLead + " " + canonicalHomePageContent.ctaWords[0] + " " + canonicalHomePageContent.ctaTail], items: [{ title: canonicalHomePageContent.ctaButtonLabel, href: "/iletisim" }] },
      ],
    };
  }
  if (path === "hizmetler") return {
    title: "Hizmetler", description: canonicalHomePageContent.seoDescription, humanPath: "/hizmetler",
    sections: [{ title: "AI uygulamaları ve bağlantılar", items: servicePages.map(service => ({ title: service.title, text: service.description, href: `/ai/hizmetler/${service.slug}` })) }],
  };
  if (path.startsWith("hizmetler/")) {
    const service = servicePages.find(item => `hizmetler/${item.slug}` === path);
    if (!service) return null;
    return { title: service.title, description: service.lead, humanPath: `/hizmetler/${service.slug}`, sections: service.sections.map(section => ({ title: section.heading, paragraphs: section.paragraphs, items: section.bullets?.map(title => ({ title })) })) };
  }
  if (path === "senaryolar") {
    const home = await getResolvedHomePageContent();
    return { title: "Örnek senaryolar", description: "Bunlar olası uygulama senaryolarıdır; tamamlanmış müşteri projesi veya gerçekleşmiş sonuç iddiası taşımaz.", humanPath: "/vaka-analizleri", sections: home.scenarioCards.map(card => ({ title: `${card.team} / ${card.title}`, paragraphs: [card.text, card.steps], items: [{ title: "Senaryonun Human sayfası", href: card.href }] })) };
  }
  if (path === "iletisim") return { title: "İletişim", description: canonicalHomePageContent.ctaLead + " " + canonicalHomePageContent.ctaWords[0] + " " + canonicalHomePageContent.ctaTail, humanPath: "/iletisim", sections: [{ title: "Uygunluk Görüşmesi", items: [{ title: machineEmail, href: `mailto:${machineEmail}` }, { title: "İletişim formunu aç", href: "/iletisim" }] }] };
  return null;
}

export function machineMarkdown(document: MachineDocument) {
  const absolute = (href: string) => href.startsWith("/") ? `${SITE_URL}${href}` : href;
  return [
    `# ${document.title}`, document.description,
    `Kaynak: ${SITE_URL}${document.humanPath}`,
    ...document.sections.flatMap(section => [
      `## ${section.title}`, ...(section.paragraphs || []),
      ...(section.items || []).map(item => `- ${item.href ? `[${item.title}](${absolute(item.href)})` : item.title}${item.text ? `: ${item.text}` : ""}`),
    ]),
  ].join("\n\n") + "\n";
}

export function machineDocumentPaths() {
  return [...machineNavigation.map(item => item.path), ...servicePages.map(service => `hizmetler/${service.slug}`)];
}
