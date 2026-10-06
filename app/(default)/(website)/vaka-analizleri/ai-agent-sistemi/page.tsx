import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { ExampleScenario } from "@/components/gate/ExampleScenariosPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ürün Bilgisi AI Asistanı Örneği | WhiteGate AI",
  description: "Müşteri sorusunu şirket belgelerinde araştırıp kaynaklı yanıt taslağı hazırlayan, çalışan onayıyla kullanılan AI asistanı örneği.",
  path: "/vaka-analizleri/ai-agent-sistemi",
});

export default function Page() {
  return localizeTree(<ExampleScenario slug="ai-agent-sistemi" />, getLocale());
}
