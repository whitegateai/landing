import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { ExampleScenario } from "@/components/gate/ExampleScenariosPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Talep ve Araç Bağlantısı Örneği | WhiteGate AI",
  description: "Gelen talebi sınıflandırıp insan kontrolüyle mevcut iş araçlarına yönlendiren örnek AI uygulaması senaryosu.",
  path: "/vaka-analizleri/otomasyon-ve-entegrasyon",
});

export default function Page() {
  return localizeTree(<ExampleScenario slug="otomasyon-ve-entegrasyon" />, getLocale());
}
