import type { Metadata } from "next";
import { ExampleScenario } from "@/components/gate/ExampleScenariosPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tekliften Teslime Takip Örneği | WhiteGate AI",
  description: "AI destekli teklif takibi nasıl çalışabilir? Talep, taslak, insan onayı ve teslim durumunu anlatan örnek uygulama senaryosu.",
  path: "/vaka-analizleri/tekliften-teslime-takip",
});

export default function Page() {
  return <ExampleScenario slug="tekliften-teslime-takip" />;
}
