import type { Metadata } from "next";
import { PostConnectingAiToRealProductsPage } from "@/components/gate/generated/PostConnectingAiToRealProductsPage";

export const metadata: Metadata = {
  title: "AI Gerçek Ürünlere Nasıl Bağlanır? | WhiteGate",
  description: "Yapay zeka adımlarını kullanıcı, veri ve onay akışlarıyla çalışan ürün davranışına çevirmek.",
};

export default function Page() {
  return <PostConnectingAiToRealProductsPage />;
}
