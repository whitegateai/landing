import type { Metadata } from "next";
import { PostBuildingAiWorkflowsThatScalePage } from "@/components/gate/generated/PostBuildingAiWorkflowsThatScalePage";

export const metadata: Metadata = {
  title: "Büyüyen İş İçin Ölçeklenen Sistemler | WhiteGate",
  description: "Tek kullanımlık otomasyon yerine bakım yapılabilir, izlenebilir operasyon sistemleri kurmak.",
};

export default function Page() {
  return <PostBuildingAiWorkflowsThatScalePage />;
}
