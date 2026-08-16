import type { Metadata } from "next";
import { DocsPostsSdksUsagePage } from "@/components/gate/generated/DocsPostsSdksUsagePage";

export const metadata: Metadata = {
  title: "Araçlar ve Kullanım | WhiteGate",
  description: "WhiteGate sistemlerinin ekipler tarafından kullanımı.",
};

export default function Page() {
  return <DocsPostsSdksUsagePage />;
}
