import type { Metadata } from "next";
import { UtilityPagesLicensePage } from "@/components/gate/generated/UtilityPagesLicensePage";

export const metadata: Metadata = {
  title: "WhiteGate | Lisans",
  description: "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.",
};

export default function Page() {
  return <UtilityPagesLicensePage />;
}
