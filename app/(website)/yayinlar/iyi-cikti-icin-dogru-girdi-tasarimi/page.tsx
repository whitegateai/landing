import type { Metadata } from "next";
import { PostHowToStructureInputsForBetterOutputsPage } from "@/components/gate/generated/PostHowToStructureInputsForBetterOutputsPage";

export const metadata: Metadata = {
  title: "İyi Çıktı İçin Doğru Girdi Tasarımı | WhiteGate",
  description: "Form, belge, kayıt ve süreç bağlamı doğru kurulmadan AI çıktısı güvenilir olmaz.",
};

export default function Page() {
  return <PostHowToStructureInputsForBetterOutputsPage />;
}
