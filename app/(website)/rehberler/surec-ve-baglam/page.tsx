import type { Metadata } from "next";
import { DocsPostsInputsContextPage } from "@/components/gate/generated/DocsPostsInputsContextPage";

export const metadata: Metadata = {
  title: "AI Uygulaması İçin Süreç ve Bağlam | WhiteGate",
  description: "AI uygulamasının girdilerini, iş bağlamını ve çıktı kabul kriterlerini tanımlarken hangi kayıtların ve kararların önemli olduğunu görün.",
};

export default function Page() {
  return <DocsPostsInputsContextPage />;
}
