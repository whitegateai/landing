import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { AboutPage } from "@/components/gate/generated/AboutPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "WhiteGate Hakkında | Şirketlerin AI Dönüşümü",
  description: "WhiteGate; şirketlerin AI dönüşümünü planlar, size özel AI uygulamaları ve agentlar geliştirir, ekibinizle kullanıma alır.",
  path: "/hakkimizda",
});

export default function Page() {
  return localizeTree(<AboutPage />, getLocale());
}
