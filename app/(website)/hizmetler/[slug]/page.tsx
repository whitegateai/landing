import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/seo/ServiceLandingPage";
import { createPageMetadata, SITE_URL } from "@/lib/seo";
import { getServicePage, servicePages } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServicePage((await params).slug);
  return service
    ? createPageMetadata({
        title: service.seoTitle,
        description: service.description,
        path: `/hizmetler/${service.slug}`,
      })
    : { robots: { index: false, follow: false } };
}

export default async function Page({ params }: Props) {
  const service = getServicePage((await params).slug);
  if (!service) notFound();

  const url = `${SITE_URL}/hizmetler/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.description,
        url,
        areaServed: { "@type": "Country", name: "Türkiye" },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler` },
          { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ServiceLandingPage service={service} />
    </>
  );
}
