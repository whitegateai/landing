import type { Metadata } from "next";
import { AboutPage } from "@/components/gate/generated/AboutPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "WhiteGate Hakkında | Yapay Zeka ve Yazılım Ekibi",
  description: "WhiteGate ekibi; yazılım geliştirme, operasyonel tasarım ve kontrollü AI sistemleri uzmanlığını gerçek iş akışlarına uygular.",
  path: "/hakkimizda",
});

export default function Page() {
  return <AboutPage />;
}
