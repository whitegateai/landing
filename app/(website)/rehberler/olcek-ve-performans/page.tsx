import type { Metadata } from "next";
import { DocsPostsScalingPerformancePage } from "@/components/gate/generated/DocsPostsScalingPerformancePage";

export const metadata: Metadata = {
  title: "Ölçek ve Performans | WhiteGate",
  description: "Büyüyen operasyonlar için sistem ölçekleme yaklaşımı.",
};

export default function Page() {
  return <DocsPostsScalingPerformancePage />;
}
