import type { Metadata } from "next";
import { WaitlistPage } from "@/components/gate/generated/WaitlistPage";

export const metadata: Metadata = {
  title: "WhiteGate | Kapsam ve Sistem Planı",
  description: "Yol uygunsa WhiteGate Kapsam ve Sistem Planı şu anda ücretsizdir.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <WaitlistPage />;
}
