import type { Metadata } from "next";
import { DocsPostsCustomWorkflowsPage } from "@/components/gate/generated/DocsPostsCustomWorkflowsPage";

export const metadata: Metadata = {
  title: "Özel İş Akışları | WhiteGate",
  description: "Şirketin çalışma biçimine göre özel iş akışı tasarımı.",
};

export default function Page() {
  return <DocsPostsCustomWorkflowsPage />;
}
