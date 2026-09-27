import type { Metadata } from "next";
import { ExampleScenario } from "@/components/gate/ExampleScenariosPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İş Durumu Paneli Örneği | WhiteGate AI",
  description: "Görev kayıtlarını, sorumluları ve bekleyen kararları tek yerde görmeye yönelik AI destekli operasyon paneli senaryosu.",
  path: "/vaka-analizleri/operasyon-paneli",
});

export default function Page() {
  return <ExampleScenario slug="operasyon-paneli" />;
}
