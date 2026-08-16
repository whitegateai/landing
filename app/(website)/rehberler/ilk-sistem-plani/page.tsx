import type { Metadata } from "next";
import { DocsPostsFirstWorkflowPage } from "@/components/gate/generated/DocsPostsFirstWorkflowPage";

export const metadata: Metadata = {
  title: "İlk Sistem Planı | WhiteGate",
  description: "WhiteGate ile ilk kapsam ve sistem planını netleştirme.",
};

export default function Page() {
  return <DocsPostsFirstWorkflowPage />;
}
