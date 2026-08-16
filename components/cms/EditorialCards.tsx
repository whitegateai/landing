import type { EditorialListItem } from "@/sanity/lib/editorial";
import { imageUrl } from "@/sanity/lib/image";

function dateLabel(value: string) {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

function Cover({ item }: { item: EditorialListItem }) {
  if (!item.coverImage) {
    return <img src="/gate-assets/whitegate-logomark-black.svg" alt="" className="cms-editorial-placeholder" />;
  }

  return <img src={imageUrl(item.coverImage, 1000)} alt={item.coverImage.alt || ""} loading="lazy" className="blog-card-img" />;
}

export function CmsBlogCards({ posts }: { posts: EditorialListItem[] }) {
  if (!posts.length) return null;

  return (
    <section className="section cms-editorial-section">
      <div className="padding-global"><div className="container-base">
        <div className="cms-editorial-heading"><span>//</span> YENİ YAYINLAR</div>
        <div className="cms-editorial-grid">
          {posts.map((post) => (
            <a key={post._id} href={`/yayinlar/${post.slug}`} className="blog-card w-inline-block cms-editorial-card">
              <div className="blog-card-image"><Cover item={post} /></div>
              <div className="blog-card-content">
                <div className="blog-card-content-main">
                  <div className="blog-card-info">
                    <div className="blog-card-tag">{post.category}</div>
                    <div className="blog-card-date"><span className="text-splase">//</span> {dateLabel(post.publishedAt)}</div>
                  </div>
                  <div className="blog-card-title-wrap">
                    <div className="blog-card-title">{post.title}</div>
                    <p className="blog-card-sub">{post.excerpt}</p>
                  </div>
                </div>
                <div className="line-button"><span className="button-link-text">İncele</span><span aria-hidden="true">↗</span></div>
              </div>
            </a>
          ))}
        </div>
      </div></div>
    </section>
  );
}

export function CmsCaseCards({ cases }: { cases: EditorialListItem[] }) {
  if (!cases.length) return null;

  return (
    <section className="section cms-editorial-section">
      <div className="padding-global"><div className="container-base">
        <div className="cms-editorial-heading"><span>//</span> YAYINLANAN VAKALAR</div>
        <div className="job-collection-list w-dyn-items">
          {cases.map((item, index) => (
            <div key={item._id} className="job-collection-item w-dyn-item">
              <div className="job-item">
                <div className="job-item-main">
                  <div className="job-item-number-wrap">
                    <div className="job-item-number"><span className="text-splase">//</span>{String(index + 1).padStart(3, "0")}</div>
                    <div className="job-item-number-line" />
                  </div>
                  <div className="job-item-title-wrap">
                    <div className="job-item-title">{item.title}</div>
                    <div className="job-item-tag-wrap">
                      {item.tags?.map((tag) => <div key={tag} className="job-item-tag">{tag}</div>)}
                    </div>
                  </div>
                </div>
                <a href={`/vaka-analizleri/${item.slug}`} className="button-line w-inline-block">
                  <span className="button-link-text">incele</span><span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div></div>
    </section>
  );
}
