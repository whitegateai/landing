import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/seo";
import { LocaleProvider } from "@/components/gate/LocaleProvider";
import { setLocale } from "@/lib/locale-server";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: { images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "WhiteGate AI" }] },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/opengraph-image`] },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  setLocale("tr");
  return (
    <html lang="tr" className="gate-arrival-pending" suppressHydrationWarning>
      <body>
        <LocaleProvider locale="tr">{children}</LocaleProvider>
      </body>
    </html>
  );
}
