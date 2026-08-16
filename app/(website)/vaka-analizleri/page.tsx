import type { Metadata } from "next";
import { CareersPage } from "@/components/gate/generated/CareersPage";
import { createPageMetadata } from "@/lib/seo";
import { getCaseStudies } from "@/sanity/lib/editorial";

export const metadata: Metadata = createPageMetadata({
  title: "Yapay Zeka ve Otomasyon Vaka Analizleri | WhiteGate",
  description: "Teklif, teslimat, operasyon paneli, entegrasyon ve AI agent problemlerinin çalışan sistemlere nasıl dönüştürüldüğünü inceleyin.",
  path: "/vaka-analizleri",
});

export default async function Page() {
  return <CareersPage cases={await getCaseStudies()} />;
}
