import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { DocsPostsConnectingPage } from "@/components/gate/generated/DocsPostsConnectingPage";

export const metadata: Metadata = {
  title: "Bağlantılar | WhiteGate",
  description: "CRM, ERP, e-posta, doküman ve veri kaynaklarını bağlama yaklaşımı.",
  alternates: { canonical: "/rehberler/entegrasyon-ozeti" },
};

export default function Page() {
  return localizeTree(<DocsPostsConnectingPage />, getLocale());
}
