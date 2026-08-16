import type { Metadata } from "next";
import { JobPostsProductDesignerAiSystemsPage } from "@/components/gate/generated/JobPostsProductDesignerAiSystemsPage";

export const metadata: Metadata = {
  title: "Operasyon Paneli | WhiteGate",
  description: "Gecikme, sorumlu, durum ve karar noktalarını görünür yapan dashboard yaklaşımı.",
};

export default function Page() {
  return <JobPostsProductDesignerAiSystemsPage />;
}
