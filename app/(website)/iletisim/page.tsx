import type { Metadata } from "next";
import { ContactPage } from "@/components/gate/generated/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Uygunluk Görüşmesi | WhiteGate",
  description: "Operasyon probleminizi, mevcut araçlarınızı ve ilk AI uygulamasını birlikte değerlendirelim; doğru başlangıç yolunu netleştirelim.",
  path: "/iletisim",
});

export default function Page() {
  return <ContactPage />;
}
