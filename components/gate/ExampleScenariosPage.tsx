import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { ReactNode } from "react";
import type { EditorialListItem } from "@/sanity/lib/editorial";
import { CmsCaseCards } from "@/components/cms/EditorialCards";
import {
  DocsPostsIntroductionFooter,
  DocsPostsIntroductionGlobalStyles,
  DocsPostsIntroductionNav,
} from "@/components/gate/generated/DocsPostsIntroductionPage";
import styles from "./ExampleScenariosPage.module.css";

const examples = {
  "tekliften-teslime-takip": {
    title: "Tekliften teslime takip",
    question: "Bir teklifin son durumu yalnızca onu takip eden kişinin aklındaysa ne olur?",
    user: "Satış ve teslim ekibi",
    input: "Müşteri talebi, teklif dosyası, revizyon ve onay kayıtları",
    action: "AI gelen talebi özetler, eksik bilgileri işaretler ve sonraki adım için taslak hazırlar.",
    check: "Sorumlu çalışan taslağı ve değişiklikleri kontrol eder; teklif ve müşteri iletişimini o onaylar.",
    output: "Teklifin durumu, sahibi, bekleyen kararı ve teslim adımı tek yerde görülür.",
    fit: "Teklif, revize ve teslim bilgisi bugün e-posta, tablo ve mesajlar arasında dağılıyorsa bu örnek konuşmaya değer.",
  },
  "ai-agent-sistemi": {
    title: "Ürün bilgisi AI asistanı",
    question: "Ekibiniz aynı ürün sorusunun cevabını her seferinde yeniden mi arıyor?",
    user: "Müşteri sorularını yanıtlayan ekip",
    input: "Müşteri sorusu ve onaylı ürün belgeleri",
    action: "AI belgelerde ilgili bilgiyi bulur, kaynağını gösterir ve yanıt taslağı hazırlar.",
    check: "Çalışan kaynağı ve taslağı inceler; müşteriye gidecek yanıtı kendisi gönderir.",
    output: "Ekibin kendi belgeleriyle çalıştığı, günlük kullanım için hazırlanmış bir asistan.",
    fit: "Bilgi farklı dosyalarda duruyor ve yanıt birkaç kişinin hafızasına bağlı kalıyorsa ilk uygulama adayı olabilir.",
  },
  "operasyon-paneli": {
    title: "İş durumu ve karar paneli",
    question: "Bir iş geciktiğinde bunu kimin, ne zaman fark ettiğini biliyor musunuz?",
    user: "Operasyon yöneticisi ve iş sahipleri",
    input: "Görev kayıtları, sorumlular, tarihler ve mevcut durum",
    action: "Uygulama kayıtları bir araya getirir; AI açık işleri özetleyip dikkat gerektiren kayıtları işaretleyebilir.",
    check: "İş sahibi durumu doğrular, önceliği ve yapılacak müdahaleyi belirler.",
    output: "Sorumlusu, son adımı ve bekleyen kararı görünen bir çalışma paneli.",
    fit: "Durum raporu hazırlamak için her hafta farklı kişilere ve dosyalara dönülüyorsa bu örnek anlam kazanır.",
  },
  "otomasyon-ve-entegrasyon": {
    title: "Talep ve araç bağlantısı",
    question: "Bir talep geldiğinde aynı bilgi kaç araca yeniden yazılıyor?",
    user: "Talebi alan ve işleyen ekip",
    input: "Form veya e-posta talebi, müşteri kaydı ve gerekli belge",
    action: "AI talebi sınıflandırıp eksik alanları çıkarır; bağlantı uygun araca görev taslağı aktarır.",
    check: "Çalışan kritik bilgiyi ve yönlendirmeyi onaylar; hata veya eksik veri ayrı görünür.",
    output: "Girişten sorumluya kadar izlenebilen, mevcut araçlara göre tasarlanmış bir iş yolu.",
    fit: "Aynı talep e-posta, CRM ve görev aracında elle taşınıyorsa önce bu aktarım incelenebilir.",
  },
} as const;

export type ExampleSlug = keyof typeof examples;

function Shell({ children }: { children: ReactNode }) {
  return (
    localizeTree(<div className="page-wrapper">
      <DocsPostsIntroductionGlobalStyles />
      <DocsPostsIntroductionNav />
      <main className="main-wrapper">{children}</main>
      <DocsPostsIntroductionFooter />
    </div>, getLocale())
  );
}

function Contact({ title }: { title: string }) {
  return (
    localizeTree(<section className={styles.contact}>
      <div className={styles.inner}>
        <span className={styles.code}>[ SONRAKİ ADIM ]</span>
        <h2>{title}</h2>
        <p>Uygunluk Görüşmesi’nde işinizi ve kullandığınız araçları dinleriz. İlk uygulama netse kapsam ve teklife geçeriz; belirsizse ayrı bir AI Dönüşüm Planı gerekip gerekmediğine karar veririz.</p>
        <a href="/iletisim" className={styles.button}>Uygunluk Görüşmesi <span aria-hidden="true">↗</span></a>
      </div>
    </section>, getLocale())
  );
}

export function ExampleScenariosIndex({ cases = [] }: { cases?: EditorialListItem[] }) {
  return (
    localizeTree(<Shell>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.code}>[ N.01 / ÖRNEK UYGULAMALAR ]</span>
          <h1>AI, sizin şirketinizde hangi işi üstlenebilir?</h1>
          <p className={styles.lead}>Bunu bir araç listesi değil, ekibinizin her gün yaptığı gerçek bir iş üzerinden düşünün. Aşağıdaki dört anlatım tamamlanmış müşteri vakası değil; kurulabilecek uygulama senaryoları.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <span className={styles.code}>[ N.02 / NEREDEN BAŞLANIR ]</span>
          <h2>İlk uygulama, adı belli bir işe bağlanır.</h2>
          <div className={styles.threeColumns}>
            <div><b>01 / İş</b><p>Kim hangi bilgiyi arıyor, hazırlıyor veya aktarıyor?</p></div>
            <div><b>02 / AI görevi</b><p>AI bilgiyi bulabilir, özetleyebilir ya da bir taslak hazırlayabilir.</p></div>
            <div><b>03 / İnsan kararı</b><p>Çalışan çıktıyı kontrol eder; müşteriye veya sisteme gidecek adımı onaylar.</p></div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <span className={styles.code}>[ N.03 / KENDİ İŞİNİZE BAKIN ]</span>
          <h2>Şirketinizde hangi soru tekrar tekrar aynı kişiye dönüyor?</h2>
          <p>Belki ürün bilgisi aranıyor, belki teklifin son durumu soruluyor. İlk görüşmede bu işi ve onu bugün yapan kişiyi buluruz; AI’ın nerede işe yarayacağını birlikte seçeriz.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <span className={styles.code}>[ N.04 / ÖRNEK SENARYOLAR ]</span>
          <h2>Uygulama nasıl görünür?</h2>
          <p className={styles.note}>Her senaryo olası bir başlangıcı gösterir. Gerçek kapsam, şirketinizin belgeleri, araçları ve kullanıcıları incelendikten sonra belirlenir.</p>
          <div className={styles.cards}>
            {Object.entries(examples).map(([slug, item], index) => (
              <a className={styles.card} href={`/vaka-analizleri/${slug}`} key={slug}>
                <span className={styles.code}>// {String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.question}</p>
                <span className={styles.cardLink}>Örneği incele ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CmsCaseCards cases={cases} />
      <Contact title="Kendi şirketinizde ilk uygulama ne olabilir?" />
    </Shell>, getLocale())
  );
}

export function ExampleScenario({ slug }: { slug: ExampleSlug }) {
  const item = examples[slug];
  return (
    localizeTree(<Shell>
      <article>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <a className={styles.back} href="/vaka-analizleri">← Tüm örnek uygulamalar</a>
            <span className={styles.code}>[ ÖRNEK SENARYO / MÜŞTERİ VAKASI DEĞİL ]</span>
            <h1>{item.title}</h1>
            <p className={styles.lead}>{item.question}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <span className={styles.code}>[ 01 / GÜNLÜK İŞ ]</span>
            <h2>Kim, neyle çalışır?</h2>
            <p><strong>Kullanıcı:</strong> {item.user}</p>
            <p><strong>Girdi:</strong> {item.input}</p>
            <p>{item.fit}</p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.inner}>
            <span className={styles.code}>[ 02 / AI UYGULAMASI ]</span>
            <h2>AI hangi işi yapar?</h2>
            <p>{item.action}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <span className={styles.code}>[ 03 / KONTROL ]</span>
            <h2>Karar kimde kalır?</h2>
            <p>{item.check}</p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.inner}>
            <span className={styles.code}>[ 04 / ELİNİZDE NE OLUR ]</span>
            <h2>Ekibin kullanacağı çıktı</h2>
            <p>{item.output}</p>
            <p className={styles.note}>Bu anlatım bir teslim veya sonuç taahhüdü değildir. Uygulama, bağlantılar ve kabul ölçütleri teklif kapsamıyla netleşir.</p>
          </div>
        </section>
      </article>
      <Contact title="Bu işi şirketinizde denemek ister misiniz?" />
    </Shell>, getLocale())
  );
}
