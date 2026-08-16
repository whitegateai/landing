import type { Metadata } from "next";
import { Page401Page } from "@/components/gate/generated/Page401Page";

export const metadata: Metadata = {
  title: "Korumalı Sayfa | WhiteGate",
  description: "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Page401Page />;
}
