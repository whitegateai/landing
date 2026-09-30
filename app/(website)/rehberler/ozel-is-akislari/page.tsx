import type { Metadata } from "next";
import { DocsPostsCustomWorkflowsPage } from "@/components/gate/generated/DocsPostsCustomWorkflowsPage";

export const metadata: Metadata = {
  title: "AI ile Özel İş Akışları | WhiteGate",
  description: "Tekrar eden işleri AI ve otomasyonla akışa dönüştürürken tetikleyici, karar ve insan onayı adımlarını nasıl tanımlayacağınızı inceleyin.",
};

export default function Page() {
  return <DocsPostsCustomWorkflowsPage />;
}
