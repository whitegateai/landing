import { defineQuery } from "next-sanity";
import { cache } from "react";
import { client } from "./client";

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
  ctaButtonLabel
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
