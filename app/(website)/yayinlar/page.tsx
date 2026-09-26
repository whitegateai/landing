import type { Metadata } from "next";
import { BlogPage } from "@/components/gate/generated/BlogPage";
import { createPageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/sanity/lib/editorial";

export const metadata: Metadata = createPageMetadata({
  title: "AI Dönüşümü ve AI Uygulamaları Rehberleri | WhiteGate",
  description: "AI uygulamaları, agentlar, otomasyonlar, entegrasyonlar ve insan onaylı iş akışları üzerine uygulanabilir WhiteGate rehberleri.",
  path: "/yayinlar",
});

export default async function Page() {
  return <BlogPage posts={await getBlogPosts()} />;
}
