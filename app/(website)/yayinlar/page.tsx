import type { Metadata } from "next";
import { BlogPage } from "@/components/gate/generated/BlogPage";
import { createPageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/sanity/lib/editorial";

export const metadata: Metadata = createPageMetadata({
  title: "AI Dönüşümü ve AI Uygulamaları Rehberleri | WhiteGate",
  description: "Şirketiniz için ilk AI uygulaması nasıl seçilir, AI agent ne zaman gerekir, tekliften teslime takip nasıl kurulur? Somut WhiteGate rehberleri.",
  path: "/yayinlar",
});

export default async function Page() {
  return <BlogPage posts={await getBlogPosts()} />;
}
