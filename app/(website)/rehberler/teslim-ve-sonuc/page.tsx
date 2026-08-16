import type { Metadata } from "next";
import { DocsPostsOutputsResultsPage } from "@/components/gate/generated/DocsPostsOutputsResultsPage";

export const metadata: Metadata = {
  title: "Teslim ve Sonuç | WhiteGate",
  description: "WhiteGate proje teslimleri, çıktılar ve kabul kriterleri.",
};

export default function Page() {
  return <DocsPostsOutputsResultsPage />;
}
