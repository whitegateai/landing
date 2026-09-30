import type { Metadata } from "next";
import { DocsPostsIntroductionPage } from "@/components/gate/generated/DocsPostsIntroductionPage";

export const metadata: Metadata = {
  title: "Şirketler İçin AI Dönüşümüne Başlangıç | WhiteGate",
  description: "WhiteGate'in özel yazılım, otomasyon ve AI uygulamalarını mevcut iş araçlarıyla birlikte nasıl planlayıp kullanıma aldığını öğrenin.",
};

export default function Page() {
  return <DocsPostsIntroductionPage />;
}
