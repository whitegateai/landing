import type { Metadata } from "next";
import { UtilityPagesChangelogPage } from "@/components/gate/generated/UtilityPagesChangelogPage";

export const metadata: Metadata = {
  title: "WhiteGate | Sistem Notları",
  description: "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.",
};

export default function Page() {
  return <UtilityPagesChangelogPage />;
}
