import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { SiteModeSwitch } from "@/components/gate/SiteModeSwitch";
import { getMachineDocument, machineDocumentPaths, machineEmail, machineNavigation } from "@/lib/machine-content";
import { SITE_URL } from "@/lib/seo";
import styles from "./page.module.css";

const wordmarkGlyphs: Record<string, string[]> = {
  " ": Array(6).fill("   "),
  W: ["█   █", "█   █", "█ █ █", "█ █ █", "██ ██", "█   █"],
  H: ["█   █", "█   █", "█████", "█   █", "█   █", "█   █"],
  I: ["█████", "  █  ", "  █  ", "  █  ", "  █  ", "█████"],
  T: ["█████", "  █  ", "  █  ", "  █  ", "  █  ", "  █  "],
  E: ["█████", "█    ", "████ ", "█    ", "█    ", "█████"],
  G: ["█████", "█    ", "█ ███", "█   █", "█   █", "█████"],
  A: [" ███ ", "█   █", "█   █", "█████", "█   █", "█   █"],
};
const machineWordmark = Array.from({ length: 6 }, (_, row) =>
  Array.from("WHITEGATE AI").map(letter => wordmarkGlyphs[letter][row]).join(" "),
).join("\n");
const wordmarkColumns = Math.max(...machineWordmark.split("\n").map(line => line.length));

// Turkish uppercasing must not change the spelling of the English brand.
function machineText(text: string) {
  return text.split(/(WhiteGate(?: AI)?)/g).map((part, index) =>
    part.startsWith("WhiteGate") ? <span key={index} lang="en">{part}</span> : part,
  );
}

type Props = { params: Promise<{ path?: string[] }> };
export const revalidate = 60;
export function generateStaticParams() { return machineDocumentPaths().map(path => ({ path: path.split("/") })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = (await params).path?.join("/") || "home";
  const document = await getMachineDocument(path);
  if (!document) return { robots: { index: false, follow: false } };
  return { title: `${document.title} :: Machine | WhiteGate AI`, description: document.description, alternates: { canonical: document.humanPath, types: { "text/markdown": `/ai/markdown/${path}` } }, icons: { icon: "/gate-assets/wg-black-logo-official.png" } };
}

export default async function MachinePage({ params }: Props) {
  const path = (await params).path?.join("/") || "home";
  const document = await getMachineDocument(path);
  if (!document) notFound();
  return <div className={styles.page}>
    <a className={styles.skip} href="#machine-content">İçeriğe geç</a>
    <div className={styles.screen} data-machine-screen="">
    <header className={styles.header}>
      <a className={styles.wordmark} href="/ai/home" lang="en"><img src="/gate-assets/wg-black-logo-official.png" alt="" width="20" height="20" /><span>WhiteGate AI</span><span className={styles.tag} aria-hidden="true">[ MACHINE ]</span></a>
      <pre className={styles.ascii} style={{ fontSize: `min(16px, calc((100vw - 48px) / ${(wordmarkColumns + 1) * 0.6 * 0.65}))` }} aria-hidden="true">{machineWordmark}</pre>
    </header>
    <nav className={styles.nav} aria-label="Machine sayfaları">{machineNavigation.map(item => <a key={item.path} href={`/ai/${item.path}`} lang={item.label === "index" ? "en" : undefined} aria-current={path === item.path ? "page" : path.startsWith(`${item.path}/`) ? "location" : undefined}>/{item.label}</a>)}</nav>
    <main id="machine-content" tabIndex={-1} data-machine-content="">
      <div className={styles.intro}><h1>{machineText(document.title)}</h1><p>{machineText(document.description)}</p>
        <div className={styles.formats}><a href={`/ai/markdown/${path}`}>[Markdown]</a><a href={document.humanPath}>[Human]</a><a href="/llms.txt">[llms.txt]</a></div>
      </div>
      <dl className={styles.facts}><div><dt lang="en">name</dt><dd lang="en">WhiteGate AI</dd></div><div><dt lang="en">language</dt><dd>Türkçe / tr-TR</dd></div><div><dt lang="en">website</dt><dd><a href={SITE_URL} lang="en">whitegateai.com</a></dd></div><div><dt lang="en">contact</dt><dd><a href={`mailto:${machineEmail}`} lang="en">{machineEmail}</a></dd></div></dl>
      {document.sections.map((section, index) => <section className={styles.section} key={section.title} style={{ "--machine-order": index + 4 } as CSSProperties}>
        <h2><span className={styles.headingPrefix} aria-hidden="true">──</span><span>{machineText(section.title)}</span><span className={styles.headingRule} aria-hidden="true" /></h2>
        {section.paragraphs?.map(paragraph => <p key={paragraph}>{machineText(paragraph)}</p>)}
        {section.items && <ul>{section.items.map(item => <li key={item.title}>{item.href ? <a href={item.href}>{machineText(item.title)}</a> : <strong>{machineText(item.title)}</strong>}{item.text && <p>{machineText(item.text)}</p>}</li>)}</ul>}
      </section>)}
      <section className={styles.section} style={{ "--machine-order": document.sections.length + 4 } as CSSProperties}><h2><span className={styles.headingPrefix} aria-hidden="true">──</span><span>Agent erişimi</span><span className={styles.headingRule} aria-hidden="true" /></h2><p>Bu görünüm site içeriğini sade HTML olarak sunar. Hizmet metinleri ve örnek senaryolar Human site ile aynı kaynaklardan gelir.</p><ul><li><a href="/llms.txt">/llms.txt</a></li><li><a href={`/ai/markdown/${path}`}>Bu sayfanın Markdown metni</a></li><li><a href="/sitemap.xml">/sitemap.xml</a></li></ul></section>
    </main>
    <footer className={styles.footer} style={{ "--machine-order": document.sections.length + 5 } as CSSProperties}><span aria-hidden="true">────────────────────────────────</span><span lang="en">WhiteGate AI // EOF</span></footer>
    </div>
    <SiteModeSwitch mode="machine" humanHref={document.humanPath} machineHref={`/ai/${path}`} />
  </div>;
}
