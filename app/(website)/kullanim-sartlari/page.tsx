import type { Metadata } from "next";
import { TermsOfServicePage } from "@/components/gate/generated/TermsOfServicePage";

export const metadata: Metadata = {
  title: "WhiteGate | Kullanım Şartları",
  description: "WhiteGate hizmet ve web sitesi kullanım şartları.",
};

export default function Page() {
  return <TermsOfServicePage />;
}
