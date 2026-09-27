import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = { metadataBase: new URL(SITE_URL) };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr" className="gate-arrival-pending" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
