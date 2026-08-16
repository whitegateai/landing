import type { Metadata } from "next";
import { JobPostsAiProductEngineerPage } from "@/components/gate/generated/JobPostsAiProductEngineerPage";

export const metadata: Metadata = {
  title: "Tekliften Teslime Takip | WhiteGate",
  description: "Teklif, revize, onay ve teslimat akışlarını görünür kılan sistem yaklaşımı.",
};

export default function Page() {
  return <JobPostsAiProductEngineerPage />;
}
