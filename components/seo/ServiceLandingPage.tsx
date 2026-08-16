import {
  DocsPostsIntroductionCtaSection,
  DocsPostsIntroductionFooter,
  DocsPostsIntroductionGlobalStyles,
  DocsPostsIntroductionNav,
} from "@/components/gate/generated/DocsPostsIntroductionPage";
import type { ServicePage } from "@/lib/services";
import { servicePages } from "@/lib/services";

export function ServiceLandingPage({ service }: { service: ServicePage }) {
  const related = servicePages.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <div className="page-wrapper">
      <DocsPostsIntroductionGlobalStyles />
      <DocsPostsIntroductionNav />
      <main className="main-wrapper">
        <article>
          <section className="section cms-detail-hero">
            <div className="padding-global"><div className="container-base">
              <nav aria-label="Sayfa yolu" className="cms-detail-back">
                <a href="/hizmetler">HİZMETLER</a> <span aria-hidden="true">/</span> <span>{service.title}</span>
              </nav>
              <div className="cms-detail-meta">
                <div className="cms-detail-tags"><span>[HİZMET]</span><span>[TÜRKİYE]</span></div>
              </div>
              <h1>{service.title}</h1>
              <p className="cms-detail-lead">{service.lead}</p>
              <img
                className="cms-detail-cover"
                src={service.image}
                alt={service.imageAlt}
                width={724}
                height={543}
                loading="eager"
                fetchPriority="high"
              />
            </div></div>
          </section>
          <section className="section cms-detail-content">
            <div className="padding-global"><div className="container-small docs_richtext w-richtext">
              {service.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </section>
              ))}
              <section>
                <h2>İlgili WhiteGate hizmetleri</h2>
                <ul>
                  {related.map((item) => (
                    <li key={item.slug}><a href={`/hizmetler/${item.slug}`}>{item.title}</a></li>
                  ))}
                </ul>
                <p><a href="/iletisim">Projenizi ve mevcut iş akışınızı konuşalım.</a></p>
              </section>
            </div></div>
          </section>
        </article>
      </main>
      <DocsPostsIntroductionCtaSection />
      <DocsPostsIntroductionFooter />
    </div>
  );
}
