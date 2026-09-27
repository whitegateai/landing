import type { Metadata } from "next";
import { ExampleScenariosIndex } from "@/components/gate/ExampleScenariosPage";
import { createPageMetadata } from "@/lib/seo";
import { getCaseStudies } from "@/sanity/lib/editorial";

export const metadata: Metadata = createPageMetadata({
  title: "AI Uygulama Senaryoları | WhiteGate AI",
  description: "Bir AI uygulaması şirketinizde hangi işi üstlenebilir? Ürün bilgisi asistanı, teklif takibi, operasyon paneli ve araç bağlantısı için örnek senaryolar.",
  path: "/vaka-analizleri",
});

export default async function Page() {
  return <ExampleScenariosIndex cases={await getCaseStudies()} />;
}
