import type { Metadata } from "next";
import { PostPage } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "Problemden Sisteme: AI Ne Zaman İşe Yarar? | WhiteGate",
  description: "Prompt denemelerinden gerçek operasyonda çalışan yapay zeka sistemlerine geçiş.",
};

export default function Page() {
  return <PostPage />;
}
