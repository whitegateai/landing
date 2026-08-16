import type { Metadata } from "next";
import { JobPostsAiWorkflowEngineerPage } from "@/components/gate/generated/JobPostsAiWorkflowEngineerPage";

export const metadata: Metadata = {
  title: "Otomasyon ve Entegrasyon | WhiteGate",
  description: "Tekrar eden operasyon adımlarını mevcut araçlara bağlayan sistem yaklaşımı.",
};

export default function Page() {
  return <JobPostsAiWorkflowEngineerPage />;
}
