import type { Metadata } from "next";

export const SITE_URL = "https://www.whitegateai.com";
export const SITE_NAME = "WhiteGate";
export const DEFAULT_DESCRIPTION =
  "WhiteGate; özel yazılım, yapay zeka otomasyonu, AI agent, entegrasyon ve operasyon panelleri geliştirir.";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WhiteGate" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/gate-assets/whitegate-logomark-black.svg`,
      email: "info@whitegateai.com",
      description: DEFAULT_DESCRIPTION,
      areaServed: { "@type": "Country", name: "Türkiye" },
      employee: [
        {
          "@type": "Person",
          name: "Oluş Emre Demir",
          jobTitle: "Yazılım Geliştirme ve Operasyonel Tasarım",
          sameAs: "https://www.linkedin.com/in/olusemre/",
        },
        {
          "@type": "Person",
          name: "Veysel Başdemir",
          jobTitle: "Kurucu ve AI Sistemleri Uzmanı",
          sameAs: "https://www.linkedin.com/in/vbasdemir/",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "tr-TR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
