import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { DocsPostsOptimizationPage } from "@/components/gate/generated/DocsPostsOptimizationPage";

export const metadata: Metadata = {
  title: "İyileştirme | WhiteGate",
  description: "Canlı sistemlerin izlenmesi ve iyileştirilmesi.",
  alternates: { canonical: "/rehberler/ozel-is-akislari" },
};

export default function Page() {
  return localizeTree(<DocsPostsOptimizationPage />, getLocale());
}
