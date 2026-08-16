import type { Metadata } from "next";
import { DocsPostsInputsContextPage } from "@/components/gate/generated/DocsPostsInputsContextPage";

export const metadata: Metadata = {
  title: "Süreç ve Bağlam | WhiteGate",
  description: "Operasyon girdileri, bağlam ve çıktı kabul kriterleri.",
};

export default function Page() {
  return <DocsPostsInputsContextPage />;
}
