import type { Metadata } from "next";
import { PostWhyMostAiOutputsAreHardToUsePage } from "@/components/gate/generated/PostWhyMostAiOutputsAreHardToUsePage";

export const metadata: Metadata = {
  title: "AI Çıktıları Neden Kullanılamaz Kalır? | WhiteGate",
  description: "Format, kontrol ve sahiplik eksikliği çıktıyı operasyona bağlamayı zorlaştırır.",
};

export default function Page() {
  return <PostWhyMostAiOutputsAreHardToUsePage />;
}
