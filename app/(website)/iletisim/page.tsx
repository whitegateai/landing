import type { Metadata } from "next";
import { ContactPage } from "@/components/gate/generated/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yapay Zeka ve Yazılım Projesi Görüşmesi | WhiteGate",
  description: "Operasyon probleminizi, mevcut araçlarınızı ve doğru özel yazılım veya yapay zeka otomasyonu yolunu WhiteGate ile netleştirin.",
  path: "/iletisim",
});

export default function Page() {
  return <ContactPage />;
}
