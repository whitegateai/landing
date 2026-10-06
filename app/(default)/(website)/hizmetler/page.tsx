import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { DocsPage } from "@/components/gate/generated/DocsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Dönüşüm Hizmetleri | WhiteGate AI",
  description: "Şirketinizde AI'ın üstlenebileceği işleri planlıyor, size özel uygulamalar ve agentlar geliştiriyor, ekibinizle kullanıma alıyoruz.",
  path: "/hizmetler",
});

export default function Page() {
  return localizeTree(<DocsPage />, getLocale());
}
