import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GatePageScripts } from "@/components/gate/GatePageScripts";
import { DEFAULT_DESCRIPTION, organizationJsonLd, SITE_URL } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "WhiteGate AI | Şirketler için AI Dönüşümü",
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "./" },
  applicationName: "WhiteGate AI",
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
    icon: "/gate-assets/wg-black-logo-official.png",
    shortcut: "/gate-assets/wg-black-logo-official.png",
    apple: "/gate-assets/wg-black-logo-official.png",
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
      <div className="gate-arrival-cover" aria-hidden="true">
        <div className="gate-arrival-grid">
          {Array.from({ length: 100 }, (_, index) => (
            <span key={index} style={{ animationDelay: `${350 + ((index * 37) % 100) * 8}ms` }} />
          ))}
        </div>
        <img src="/gate-assets/whitegate-slit-white.png" alt="" width="42" height="120" />
      </div>
      <GatePageScripts />
      {children}
    </>
  );
}
