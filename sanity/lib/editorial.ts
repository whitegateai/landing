import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";
import { defineQuery } from "next-sanity";
import { cache } from "react";
import { client } from "./client";

export type EditorialListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category?: string;
  tags?: string[];
  coverImage?: SanityImageSource & { alt?: string };
};

export type EditorialDocument = EditorialListItem & {
  body: PortableTextBlock[];
};

const LIST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  tags,
  publishedAt,
  coverImage
}`;

const blogPostsQuery = defineQuery(`*[_type == "blogPost" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) ${LIST_PROJECTION}`);
const caseStudiesQuery = defineQuery(`*[_type == "caseStudy" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) ${LIST_PROJECTION}`);
const editorialSlugsQuery = defineQuery(`*[_type == $type && defined(slug.current)]{ "slug": slug.current }`);
const editorialBySlugQuery = defineQuery(`*[_type == $type && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  tags,
  publishedAt,
  coverImage,
  body
}`);

async function fetchList(query: string, tag: string) {
  try {
    return await client.fetch<EditorialListItem[]>(query, {}, { next: { revalidate: 60, tags: [tag] } });
  } catch (error) {
    console.error(`Sanity ${tag} fetch failed; using legacy content.`, error);
    return [];
  }
}

export const getBlogPosts = cache(() => fetchList(blogPostsQuery, "blogPost"));
export const getCaseStudies = cache(() => fetchList(caseStudiesQuery, "caseStudy"));

export const getEditorialDocument = cache(async (type: "blogPost" | "caseStudy", slug: string) => {
  try {
    return await client.fetch<EditorialDocument | null>(editorialBySlugQuery, { type, slug }, {
      next: { revalidate: 60, tags: [type, `${type}:${slug}`] },
    });
  } catch (error) {
    console.error(`Sanity ${type}:${slug} fetch failed.`, error);
    return null;
  }
});

export async function getEditorialSlugs(type: "blogPost" | "caseStudy") {
  try {
    return await client.fetch<{ slug: string }[]>(editorialSlugsQuery, { type }, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}
