import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { DocsPostsOutputsResultsPage } from "@/components/gate/generated/DocsPostsOutputsResultsPage";

export const metadata: Metadata = {
  title: "Teslim ve Sonuç | WhiteGate",
  description: "WhiteGate proje teslimleri, çıktılar ve kabul kriterleri.",
  alternates: { canonical: "/rehberler/surec-ve-baglam" },
};

export default function Page() {
  return localizeTree(<DocsPostsOutputsResultsPage />, getLocale());
}
