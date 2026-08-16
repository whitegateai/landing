import type { Metadata } from "next";
import { DocsPostsApiOverviewPage } from "@/components/gate/generated/DocsPostsApiOverviewPage";

export const metadata: Metadata = {
  title: "Entegrasyon Özeti | WhiteGate",
  description: "WhiteGate sistemlerinin mevcut araçlarla entegrasyon yaklaşımı.",
};

export default function Page() {
  return <DocsPostsApiOverviewPage />;
}
