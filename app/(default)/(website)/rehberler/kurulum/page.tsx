import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { DocsPostsInstallationPage } from "@/components/gate/generated/DocsPostsInstallationPage";

export const metadata: Metadata = {
  title: "Kurulum | WhiteGate",
  description: "WhiteGate sistem kurulumu ve canlıya alma yaklaşımı.",
  alternates: { canonical: "/rehberler/baslangic" },
};

export default function Page() {
  return localizeTree(<DocsPostsInstallationPage />, getLocale());
}
