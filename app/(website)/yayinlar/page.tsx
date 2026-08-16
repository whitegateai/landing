import type { Metadata } from "next";
import { BlogPage } from "@/components/gate/generated/BlogPage";
import { createPageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/sanity/lib/editorial";

export const metadata: Metadata = createPageMetadata({
  title: "Yapay Zeka Otomasyonu ve Özel Yazılım Rehberleri | WhiteGate",
  description: "AI agent, otomasyon, entegrasyon, özel yazılım ve operasyon tasarımı üzerine uygulanabilir WhiteGate rehberleri.",
  path: "/yayinlar",
});

export default async function Page() {
  return <BlogPage posts={await getBlogPosts()} />;
}
