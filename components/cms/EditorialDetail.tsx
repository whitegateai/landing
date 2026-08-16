import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";
import {
  PostCtaSection,
  PostFooter,
  PostGlobalStyles,
  PostNav,
  PostPreload,
} from "@/components/gate/generated/PostPage";
import {
  JobPostsAiProductEngineerCtaSection,
  JobPostsAiProductEngineerFooter,
  JobPostsAiProductEngineerGlobalStyles,
  JobPostsAiProductEngineerNav,
  JobPostsAiProductEngineerPreload,
} from "@/components/gate/generated/JobPostsAiProductEngineerPage";
import { SITE_URL } from "@/lib/seo";
import type { EditorialDocument } from "@/sanity/lib/editorial";
import { imageUrl } from "@/sanity/lib/image";

type PortableImage = SanityImageSource & { alt?: string; caption?: string };

const portableComponents: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");
      return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}</a>;
    },
  },
  types: {
    image: ({ value }: { value: PortableImage }) => (
      <figure>
        <img src={imageUrl(value, 1600)} alt={value.alt || ""} loading="lazy" />
        {value.caption ? <figcaption>{value.caption}</figcaption> : null}
      </figure>
    ),
  },
};

function dateLabel(value: string) {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

function Article({ document, kind }: { document: EditorialDocument; kind: "blog" | "case" }) {
  const labels = kind === "blog" ? [document.category].filter(Boolean) : document.tags || [];
  const articleJsonLd = kind === "blog" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: document.title,
    description: document.excerpt,
    datePublished: document.publishedAt,
    inLanguage: "tr-TR",
    mainEntityOfPage: `${SITE_URL}/yayinlar/${document.slug}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(document.coverImage ? { image: imageUrl(document.coverImage, 1800) } : {}),
  } : null;

  return (
    <>
      {articleJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
        />
      ) : null}
      <main className="main-wrapper">
      <section className="section cms-detail-hero">
        <div className="padding-global"><div className="container-base">
          <a href={kind === "blog" ? "/yayinlar" : "/vaka-analizleri"} className="cms-detail-back">← {kind === "blog" ? "YAYINLAR" : "VAKALAR"}</a>
          <div className="cms-detail-meta">
            <div className="cms-detail-tags">{labels.map((label) => <span key={label}>[{label}]</span>)}</div>
            <time dateTime={document.publishedAt}>{dateLabel(document.publishedAt)}</time>
          </div>
          <h1>{document.title}</h1>
          <p className="cms-detail-lead">{document.excerpt}</p>
          {document.coverImage ? <img className="cms-detail-cover" src={imageUrl(document.coverImage, 1800)} alt={document.coverImage.alt || ""} /> : null}
        </div></div>
      </section>
      <section className="section cms-detail-content">
        <div className="padding-global"><div className="container-small cms-portable-text">
          <PortableText value={document.body as PortableTextBlock[]} components={portableComponents} />
        </div></div>
      </section>
      </main>
    </>
  );
}

export function CmsBlogPostPage({ document }: { document: EditorialDocument }) {
  return (
    <div className="page-wrapper">
      <PostGlobalStyles /><PostPreload /><PostNav />
      <Article document={document} kind="blog" />
      <PostCtaSection /><PostFooter />
    </div>
  );
}

export function CmsCaseStudyPage({ document }: { document: EditorialDocument }) {
  return (
    <div className="page-wrapper">
      <JobPostsAiProductEngineerGlobalStyles /><JobPostsAiProductEngineerPreload /><JobPostsAiProductEngineerNav />
      <Article document={document} kind="case" />
      <JobPostsAiProductEngineerCtaSection /><JobPostsAiProductEngineerFooter />
    </div>
  );
}
