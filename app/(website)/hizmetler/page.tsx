import type { Metadata } from "next";
import { DocsPage } from "@/components/gate/generated/DocsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Dönüşüm Planı ve AI Uygulamaları | WhiteGate",
  description: "İlk AI uygulaması belirsizse AI Dönüşüm Planı; ihtiyaç netse doğrudan kapsam ve teklif ile ilerliyoruz.",
  path: "/hizmetler",
});

export default function Page() {
  return <DocsPage />;
}
