import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { DocsPostsAiProcessingPage } from "@/components/gate/generated/DocsPostsAiProcessingPage";

export const metadata: Metadata = {
  title: "Kapsam ve karar | WhiteGate",
  description: "WhiteGate AI agentları ve AI destekli operasyon sistemleri.",
  alternates: { canonical: "/rehberler/surec-ve-baglam" },
};

export default function Page() {
  return localizeTree(<DocsPostsAiProcessingPage />, getLocale());
}
