import type { Metadata } from "next";
import { HomePage } from "@/components/gate/generated/HomePage";
import { createPageMetadata } from "@/lib/seo";
import { getHomePageContent } from "@/sanity/lib/homePage";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomePageContent();
  const legacyTitle = "WhiteGate | Özel Yazılım ve Yapay Zeka Sistemleri";
  const legacyDescription =
    "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.";

  return createPageMetadata({
    title:
      content?.seoTitle && content.seoTitle !== legacyTitle
        ? content.seoTitle
        : "Özel Yazılım ve Yapay Zeka Otomasyonu | WhiteGate",
    description:
      content?.seoDescription && content.seoDescription !== legacyDescription
        ? content.seoDescription
        : "WhiteGate; özel yazılım, AI agent, yapay zeka otomasyonu, entegrasyon ve operasyon panellerini tasarlar, geliştirir ve canlı kullanıma alır.",
    path: "/",
  });
}

export default async function Page() {
  return <HomePage content={(await getHomePageContent()) ?? undefined} />;
}
