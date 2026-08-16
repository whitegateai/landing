import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsBlogPostPage } from "@/components/cms/EditorialDetail";
import { createPageMetadata } from "@/lib/seo";
import { getEditorialDocument, getEditorialSlugs } from "@/sanity/lib/editorial";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getEditorialSlugs("blogPost");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const document = await getEditorialDocument("blogPost", slug);
  return document
    ? createPageMetadata({ title: `${document.title} | WhiteGate`, description: document.excerpt, path: `/yayinlar/${slug}` })
    : { robots: { index: false, follow: false } };
}

export default async function Page({ params }: Props) {
  const document = await getEditorialDocument("blogPost", (await params).slug);
  if (!document) notFound();
  return <CmsBlogPostPage document={document} />;
}
