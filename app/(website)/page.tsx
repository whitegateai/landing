import type { Metadata } from "next";
import { HomePage } from "@/components/gate/generated/HomePage";
import { canonicalHomePageContent } from "@/lib/home-content";
import { createPageMetadata } from "@/lib/seo";
import { getHomePageContent } from "@/sanity/lib/homePage";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: canonicalHomePageContent.seoTitle,
    description: canonicalHomePageContent.seoDescription,
    path: "/",
  });
}

export default async function Page() {
  const cms = await getHomePageContent();
  // The existing Sanity document still has older hero/CTA copy; only the new
  // fields are enabled until its public wording is deliberately updated.
  const content = {
    ...canonicalHomePageContent,
    nokiaPhoneMessages: cms?.nokiaPhoneMessages?.filter(Boolean).length ? cms.nokiaPhoneMessages.filter(Boolean) : canonicalHomePageContent.nokiaPhoneMessages,
    nokiaMobileLink: cms?.nokiaMobileLink?.trim() || canonicalHomePageContent.nokiaMobileLink,
    nokiaCardTitle: cms?.nokiaCardTitle?.trim() || canonicalHomePageContent.nokiaCardTitle,
    nokiaCardHint: cms?.nokiaCardHint?.trim() || canonicalHomePageContent.nokiaCardHint,
    nokiaCardAction: cms?.nokiaCardAction?.trim() || canonicalHomePageContent.nokiaCardAction,
    scenarioCards: cms?.scenarioCards?.length && cms.scenarioCards.every((card) =>
      card.number && card.team && card.title && card.text && card.steps && card.href?.startsWith("/") && card.image
    ) ? cms.scenarioCards : canonicalHomePageContent.scenarioCards,
  };
  return <HomePage content={content} />;
}
