import type { Metadata } from "next";
import { CareersPage } from "@/components/gate/generated/CareersPage";
import { createPageMetadata } from "@/lib/seo";
import { getCaseStudies } from "@/sanity/lib/editorial";

export const metadata: Metadata = createPageMetadata({
  title: "AI Uygulama Örnekleri | WhiteGate",
  description: "İzinli müşteri vakası olmadığında, WhiteGate'in kurabileceği AI uygulaması, agent, entegrasyon ve operasyon sistemi türlerini gösteririz.",
  path: "/vaka-analizleri",
});

export default async function Page() {
  return <CareersPage cases={await getCaseStudies()} />;
}
