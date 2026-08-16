import type { Metadata } from "next";
import { DocsPostsOptimizationPage } from "@/components/gate/generated/DocsPostsOptimizationPage";

export const metadata: Metadata = {
  title: "İyileştirme | WhiteGate",
  description: "Canlı sistemlerin izlenmesi ve iyileştirilmesi.",
};

export default function Page() {
  return <DocsPostsOptimizationPage />;
}
