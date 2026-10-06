import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound, redirect } from "next/navigation";
import { englishRoutes } from "@/lib/english-routes";
import { localizeData, localizedHref } from "@/lib/i18n";
import { setLocale } from "@/lib/locale-server";
import { servicePages } from "@/lib/services";
import { getEditorialSlugs } from "@/sanity/lib/editorial";
import { SITE_URL } from "@/lib/seo";

type Params = { locale: string; englishPath?: string[]; slug?: string };
type Props = { params: Promise<Params> };
type PageModule = { default: ComponentType<{ params: Promise<Params> }>; metadata?: Metadata; generateMetadata?: (props: Props) => Promise<Metadata> };

async function resolvePage(params: Params): Promise<PageModule | null> {
  const path = `/${params.englishPath?.join("/") || ""}`;
  if (path === "/rehberler/ilk-sistem-plani") redirect("/en/rehberler/kapsam-ve-karar");
  if (path === "/sistem-plani") redirect("/en/iletisim");
  if (path in englishRoutes) return await englishRoutes[path as keyof typeof englishRoutes]() as unknown as PageModule;
  if (/^\/hizmetler\/[^/]+$/.test(path)) return await import("@/app/(default)/(website)/hizmetler/[slug]/page") as unknown as PageModule;
  if (/^\/yayinlar\/[^/]+$/.test(path)) return await import("@/app/(default)/(website)/yayinlar/[slug]/page") as unknown as PageModule;
  if (/^\/vaka-analizleri\/[^/]+$/.test(path)) return await import("@/app/(default)/(website)/vaka-analizleri/[slug]/page") as unknown as PageModule;
  return null;
}

export async function generateStaticParams() {
  const [posts, cases] = await Promise.all([getEditorialSlugs("blogPost"), getEditorialSlugs("caseStudy")]);
  return [...new Set([
    ...Object.keys(englishRoutes),
    ...servicePages.map(item => `/hizmetler/${item.slug}`),
    ...posts.map(item => `/yayinlar/${item.slug}`),
    ...cases.map(item => `/vaka-analizleri/${item.slug}`),
  ])].map(path => ({ englishPath: path === "/" ? [] : path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  setLocale("en");
  const module = await resolvePage(resolved);
  if (!module) return { robots: { index: false, follow: false } };
  const childParams = Promise.resolve({ ...resolved, slug: resolved.englishPath?.at(-1) });
  const source = module.generateMetadata ? await module.generateMetadata({ params: childParams }) : module.metadata || {};
  const metadata = localizeData(source, "en");
  const path = `/${resolved.englishPath?.join("/") || ""}`;
  return {
    ...metadata,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: localizedHref(path, "en"), languages: { tr: path, en: localizedHref(path, "en"), "x-default": path } },
    openGraph: { ...metadata.openGraph, locale: "en_US", url: localizedHref(path, "en"), images: [{ url: `${SITE_URL}/en/opengraph-image`, width: 1200, height: 630, alt: "WhiteGate AI" }] },
    twitter: { ...metadata.twitter, card: "summary_large_image", images: [`${SITE_URL}/en/opengraph-image`] },
  };
}

export default async function EnglishPage({ params }: Props) {
  const resolved = await params;
  if (resolved.locale !== "en") notFound();
  setLocale("en");
  const module = await resolvePage(resolved);
  if (!module) notFound();
  const Page = module.default;
  return <Page params={Promise.resolve({ ...resolved, slug: resolved.englishPath?.at(-1) })} />;
}
