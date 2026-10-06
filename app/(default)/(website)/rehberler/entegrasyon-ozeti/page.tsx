import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { DocsPostsApiOverviewPage } from "@/components/gate/generated/DocsPostsApiOverviewPage";

export const metadata: Metadata = {
  title: "AI Entegrasyonu ve İş Araçları | WhiteGate",
  description: "Mevcut iş araçlarını AI uygulamasına bağlarken erişim, veri akışı ve hata sınırlarını nasıl ele aldığımızı görün.",
};

export default function Page() {
  return localizeTree(<DocsPostsApiOverviewPage />, getLocale());
}
