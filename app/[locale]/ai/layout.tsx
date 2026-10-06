import type { ReactNode } from "react";
import MachineLayout from "@/app/(default)/ai/layout";
import { setLocale } from "@/lib/locale-server";

export default function EnglishMachineLayout({ children }: { children: ReactNode }) {
  setLocale("en");
  return <MachineLayout>{children}</MachineLayout>;
}
