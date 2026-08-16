import type { Metadata } from "next";
import { DocsPage } from "@/components/gate/generated/DocsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yapay Zeka Otomasyonu ve Özel Yazılım Hizmetleri | WhiteGate",
  description: "AI agent, iş akışı otomasyonu, özel web ve mobil yazılım, entegrasyon ve operasyon paneli hizmetlerini inceleyin.",
  path: "/hizmetler",
});

export default function Page() {
  return <DocsPage />;
}
