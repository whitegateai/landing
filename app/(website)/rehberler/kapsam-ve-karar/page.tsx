import type { Metadata } from "next";
import { DocsPostsAiProcessingPage } from "@/components/gate/generated/DocsPostsAiProcessingPage";

export const metadata: Metadata = {
  title: "Kapsam ve karar | WhiteGate",
  description: "WhiteGate AI agentları ve AI destekli operasyon sistemleri.",
};

export default function Page() {
  return <DocsPostsAiProcessingPage />;
}
