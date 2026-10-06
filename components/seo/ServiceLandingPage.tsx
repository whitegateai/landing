import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import {
  DocsPostsIntroductionCtaSection,
  DocsPostsIntroductionFooter,
  DocsPostsIntroductionGlobalStyles,
  DocsPostsIntroductionNav,
} from "@/components/gate/generated/DocsPostsIntroductionPage";
import type { ServicePage } from "@/lib/services";
import { servicePages } from "@/lib/services";
import styles from "./ServiceLandingPage.module.css";

export function ServiceLandingPage({ service }: { service: ServicePage }) {
  const related = servicePages.filter((item) => item.slug !== service.slug && item.slug !== "n8n-otomasyon");
  const number = String(servicePages.indexOf(service) + 1).padStart(2, "0");

  return (
    localizeTree(<div className="page-wrapper">
      <DocsPostsIntroductionGlobalStyles />
      <DocsPostsIntroductionNav />
      <main className="main-wrapper">
        <article className={styles.page}>
          <header className={styles.hero}>
            <div className="padding-global"><div className="container-base">
              <nav aria-label="Sayfa yolu" className={styles.breadcrumb}>
                <a href="/hizmetler">HİZMETLER</a><span aria-hidden="true"> / </span><span>{service.title}</span>
              </nav>
              <div className={styles.heroGrid}>
                <div className={styles.heroCopy}>
                  <div className={styles.eyebrow}>[ WHITEGATE AI / ÇÖZÜM {number} ]</div>
                  <h1>{service.title}</h1>
                  <p>{service.lead}</p>
                  <a className={styles.heroLink} href="/iletisim">ŞİRKETİNİZDEKİ İŞİ KONUŞALIM <span aria-hidden="true">↗</span></a>
                </div>
                <figure className={styles.heroVisual}>
                  <img src={service.image} alt={service.imageAlt} width={1536} height={1024} fetchPriority="high" />
                  <figcaption>Uygulama türü / {number}</figcaption>
                </figure>
              </div>
            </div></div>
          </header>

          <div className={styles.pathway}>
            <div className="padding-global"><div className="container-base">
              <span>PLANLIYORUZ</span><b aria-hidden="true">→</b><span>GELİŞTİRİYORUZ</span><b aria-hidden="true">→</b><span>KULLANIMA ALIYORUZ</span>
            </div></div>
          </div>

          <section className={styles.body} aria-label="Çözümün ayrıntıları">
            <div className="padding-global"><div className="container-base">
              {service.sections.map((section, index) => (
                <section className={styles.chapter} key={section.heading}>
                  <div className={styles.chapterHeading}>
                    <span>// {String(index + 1).padStart(2, "0")}</span>
                    <h2>{section.heading}</h2>
                  </div>
                  <div className={styles.chapterText}>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                  </div>
                </section>
              ))}
            </div></div>
          </section>

          <section className={styles.related} aria-labelledby="related-services-heading">
            <div className="padding-global"><div className="container-base">
              <div className={styles.relatedHeading}><span>[ SONRAKİ ADIM ]</span><h2 id="related-services-heading">Başka neler kurabiliriz?</h2></div>
              <div className={styles.relatedGrid}>
                {related.map((item) => (
                  <a href={`/hizmetler/${item.slug}`} key={item.slug}>
                    <span>{item.title}</span><span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div></div>
          </section>
        </article>
      </main>
      <DocsPostsIntroductionCtaSection />
      <DocsPostsIntroductionFooter />
    </div>, getLocale())
  );
}
