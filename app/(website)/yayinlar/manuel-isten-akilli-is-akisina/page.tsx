import type { Metadata } from "next";
import { PostFromManualTasksToIntelligentWorkflowsPage } from "@/components/gate/generated/PostFromManualTasksToIntelligentWorkflowsPage";

export const metadata: Metadata = {
  title: "Manuel İşten Akıllı İş Akışına | WhiteGate",
  description: "Tekrar eden kontrol, kayıt ve bildirim adımlarını güvenilir akışlara dönüştürmek.",
};

export default function Page() {
  return <PostFromManualTasksToIntelligentWorkflowsPage />;
}
