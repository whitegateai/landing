import type { Metadata } from "next";
import { NotFoundPage } from "@/components/gate/generated/NotFoundPage";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | WhiteGate",
  description: "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <NotFoundPage />;
}
