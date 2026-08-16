import type { Metadata } from "next";
import { DocsPostsIntroductionPage } from "@/components/gate/generated/DocsPostsIntroductionPage";

export const metadata: Metadata = {
  title: "Başlangıç | WhiteGate",
  description: "WhiteGate hizmetlerine başlangıç rehberi.",
};

export default function Page() {
  return <DocsPostsIntroductionPage />;
}
