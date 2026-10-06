import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { setLocale } from "@/lib/locale-server";
import { LocaleProvider } from "@/components/gate/LocaleProvider";
import { SITE_URL } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: { images: [{ url: `${SITE_URL}/en/opengraph-image`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" as const, images: [`${SITE_URL}/en/opengraph-image`] },
};

export function generateStaticParams() { return [{ locale: "en" }]; }
export default async function EnglishLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  if ((await params).locale !== "en") notFound();
  setLocale("en");
  return <html lang="en" className="gate-arrival-pending" suppressHydrationWarning>
    <body><LocaleProvider locale="en">{children}</LocaleProvider></body>
  </html>;
}
