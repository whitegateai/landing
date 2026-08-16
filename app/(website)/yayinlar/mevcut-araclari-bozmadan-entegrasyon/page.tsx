import type { Metadata } from "next";
import { PostIntegratingAiWithoutBreakingYourStackPage } from "@/components/gate/generated/PostIntegratingAiWithoutBreakingYourStackPage";

export const metadata: Metadata = {
  title: "Mevcut Araçları Bozmadan Entegrasyon | WhiteGate",
  description: "CRM, ERP, e-posta, doküman ve mesajlaşma akışlarını kontrollü biçimde bağlamak.",
};

export default function Page() {
  return <PostIntegratingAiWithoutBreakingYourStackPage />;
}
