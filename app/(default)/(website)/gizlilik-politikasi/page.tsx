import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/gate/generated/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "WhiteGate | Gizlilik Politikası",
  description: "WhiteGate gizlilik politikası ve veri işleme yaklaşımı.",
};

export default function Page() {
  return localizeTree(<PrivacyPolicyPage />, getLocale());
}
