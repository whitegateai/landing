import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GatePageScripts } from "@/components/gate/GatePageScripts";
import { DEFAULT_DESCRIPTION, organizationJsonLd, SITE_URL } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "WhiteGate | Özel Yazılım ve Yapay Zeka Sistemleri",
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "./" },
  applicationName: "WhiteGate",
  category: "technology",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/gate-assets/whitegate-logomark-black.svg",
    shortcut: "/gate-assets/whitegate-logomark-black.svg",
  },
};

export default function WebsiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <link rel="stylesheet" href="/gate-css/shared.css" />
      <GatePageScripts />
      {children}
    </>
  );
}
