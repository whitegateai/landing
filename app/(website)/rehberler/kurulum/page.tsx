import type { Metadata } from "next";
import { DocsPostsInstallationPage } from "@/components/gate/generated/DocsPostsInstallationPage";

export const metadata: Metadata = {
  title: "Kurulum | WhiteGate",
  description: "WhiteGate sistem kurulumu ve canlıya alma yaklaşımı.",
};

export default function Page() {
  return <DocsPostsInstallationPage />;
}
