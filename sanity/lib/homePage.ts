import { defineQuery } from "next-sanity";
import { cache } from "react";
import { client } from "./client";
import { canonicalHomePageContent } from "@/lib/home-content";

export type HomeScenarioCard = {
  number: string;
  team: string;
  title: string;
  text: string;
  steps: string;
  href: string;
  image: string;
};

export type HomePageContent = {
  seoTitle?: string;
  seoDescription?: string;
  heroLead?: string;
  heroWords?: string[];
  heroTail?: string;
  heroDescription?: string;
  heroButtonLabel?: string;
  ctaTag?: string;
  ctaLead?: string;
  ctaWords?: string[];
  ctaTail?: string;
  ctaButtonLabel?: string;
  nokiaPhoneMessages?: string[];
  nokiaMobileLink?: string;
  nokiaCardTitle?: string;
  nokiaCardHint?: string;
  nokiaCardAction?: string;
  scenarioCards?: HomeScenarioCard[];
};

const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage" && _id == "homePage"][0]{
  seoTitle,
  seoDescription,
  heroLead,
  heroWords,
  heroTail,
  heroDescription,
  heroButtonLabel,
  ctaTag,
  ctaLead,
  ctaWords,
  ctaTail,
  ctaButtonLabel,
  nokiaPhoneMessages,
  nokiaMobileLink,
  nokiaCardTitle,
  nokiaCardHint,
  nokiaCardAction,
  scenarioCards[]{number,team,title,text,steps,href,"image":image.asset->url}
}`);

export const getHomePageContent = cache(async () => {
  try {
    return await client.fetch<HomePageContent | null>(HOME_PAGE_QUERY, {}, {
      next: { revalidate: 60, tags: ["homePage"] },
    });
  } catch (error) {
    console.error("Sanity homePage fetch failed; using static content.", error);
    return null;
  }
});

// Human and Machine share the same accepted copy and permitted CMS overrides.
export const getResolvedHomePageContent = cache(async (): Promise<Required<HomePageContent>> => {
  const cms = await getHomePageContent();
  return {
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
});
