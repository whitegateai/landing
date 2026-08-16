import type { Metadata } from "next";
import { JobPostsMachineLearningEngineerPage } from "@/components/gate/generated/JobPostsMachineLearningEngineerPage";

export const metadata: Metadata = {
  title: "AI Agent Sistemi | WhiteGate",
  description: "Belirli görevleri insan onayı ve veri kaynaklarıyla yürüten AI agent yaklaşımı.",
};

export default function Page() {
  return <JobPostsMachineLearningEngineerPage />;
}
