import type { Metadata } from "next";
import { DocsPostsConnectingPage } from "@/components/gate/generated/DocsPostsConnectingPage";

export const metadata: Metadata = {
  title: "Bağlantılar | WhiteGate",
  description: "CRM, ERP, e-posta, doküman ve veri kaynaklarını bağlama yaklaşımı.",
};

export default function Page() {
  return <DocsPostsConnectingPage />;
}
