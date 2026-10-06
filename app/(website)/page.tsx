import type { Metadata } from "next";
import { HomePage } from "@/components/gate/generated/HomePage";
import { canonicalHomePageContent } from "@/lib/home-content";
import { createPageMetadata } from "@/lib/seo";
import { getResolvedHomePageContent } from "@/sanity/lib/homePage";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: canonicalHomePageContent.seoTitle,
    description: canonicalHomePageContent.seoDescription,
    path: "/",
  });
}

export default async function Page() {
  const content = await getResolvedHomePageContent();
  return <HomePage content={content} />;
}
