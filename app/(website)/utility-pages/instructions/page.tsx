import type { Metadata } from "next";
import { UtilityPagesInstructionsPage } from "@/components/gate/generated/UtilityPagesInstructionsPage";

export const metadata: Metadata = {
  title: "WhiteGate | Yönergeler",
  description: "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.",
};

export default function Page() {
  return <UtilityPagesInstructionsPage />;
}
