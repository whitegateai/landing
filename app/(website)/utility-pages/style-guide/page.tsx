import type { Metadata } from "next";
import { UtilityPagesStyleGuidePage } from "@/components/gate/generated/UtilityPagesStyleGuidePage";

export const metadata: Metadata = {
  title: "WhiteGate | Stil Rehberi",
  description: "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.",
};

export default function Page() {
  return <UtilityPagesStyleGuidePage />;
}
