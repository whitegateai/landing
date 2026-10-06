import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogFooter, BlogNav } from "@/components/gate/generated/BlogPage";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Nokia 3310 ile Şirket Yönetmek Mümkün mü? | WhiteGate AI",
  description: "Bir SMS ile işin durumunu öğrenmek mümkün olsaydı? Nokia 3310 üzerinden AI destekli şirket yönetimini anlatan kurgusal bir senaryo ve gerçek kurulum soruları.",
  path: "/yayinlar/nokia-3310-ile-sirket-yonetmek",
});

export default function Page() {
  return (
    localizeTree(<div className="page-wrapper">
      <BlogNav />
      <main className={styles.page}>
        <article>
          <header className={styles.hero}>
            <div className={styles.heroInner}>
              <h1>Nokia 3310 ile şirketini<br /><em>nasıl yönetirsin?</em></h1>
              <p className={styles.lede}>Bir mesajla işin durumunu öğrendiğinizi düşünün. AI uygulamaları gelen işleri karşılasın, hazırlık yapsın, açık işleri izlesin. Rutin işleri ilerletsin; size yalnızca gerçekten müdahale etmeniz gereken durumlar gelsin.</p>
              <div className={styles.heroActions}><Link href="/iletisim">Şirketimde nasıl çalışır? <span aria-hidden="true">↗</span></Link><a href="#senaryo">Senaryoyu incele ↓</a></div>
            </div>
          </header>

          <div className={styles.article}>
            <p className={styles.disclosure}>Kısa yanıt: Evet, şirketin durumunu SMS gibi basit bir kanaldan öğrenmek teknik olarak tasarlanabilir. Telefon yalnızca arayüzdür; iş, şirket verilerini ve görevleri birbirine bağlayan uygulamada yürür. Aşağıdaki şirket, mesajlar ve kurulum kurgusaldır; çalışan bir WhiteGate müşteri sistemi olarak sunulmuyor.</p>

            <section className={styles.belief}>
              <div className={styles.sectionLabel}>FİKRİN ÖZÜ</div>
              <h2>İşin nabzı tek soruya sığabilir.</h2>
              <p>İyi kurulmuş bir AI çalışma düzeninde gelen iş kaybolmaz, bekleyen yanıt birinin hafızasında kalmaz, gecikme son anda öğrenilmez. İşin durumu, sorumlusu ve sıradaki karar görünür olur. Nokia 3310 bu fikri en küçük ekranda gösteriyor.</p>
            </section>

            <section id="senaryo" className={styles.story}>
              <div className={styles.sectionLabel}>01 / SAHİLDESİNİZ</div>
              <h2>Deniz güzel. İşler ne durumda?</h2>
              <p>Tatilde telefonunuz bozuldu. Bir yakınınızın eski 3310&apos;unu geçici olarak ödünç aldınız. İnternet yok, uygulama yok. Ekibin işlerini merak ettiğinizde tek bir mesaj yazıyorsunuz: <strong>DURUM</strong>.</p>
              <figure className={styles.smsFigure}>
                <img src="/gate-assets/nokia-case-sms.webp" width="1536" height="1024" alt="Sahildeki eski telefonun ekranında kurgusal durum mesajı: DURUM, 2 IS TAMAM, 1 ONAY BEKLIYOR, EKIP DEVAM EDIYOR." />
              </figure>
              <p>Siz denize dönerken bir AI uygulaması güncel bilgiyi topluyor, diğeri sıradaki işi hazırlıyor, bir başkası açık işleri izliyor. Günün bütün mesajları önünüze yığılmıyor. Standart durumlar tanımlı sınırlar içinde ilerliyor; karar veya istisna gerektirenler size geliyor.</p>
            </section>

            <section className={styles.system}>
              <div className={styles.sectionLabel}>02 / AI İŞÇİLERİN İŞ BÖLÜMÜ</div>
              <h2>İşi telefon yapmıyor.<br />AI işçileri yapıyor.</h2>
              <p>WhiteGate önce işlerin nasıl yürüdüğünü öğrenir; ardından her AI işçisine belli görevler, kullanabileceği bilgiler ve duracağı sınırlar tanımlar. Bu senaryoda üçü birlikte çalışıyor:</p>
              <ol className={styles.steps}>
                <li><span className={styles.stepNumber} aria-hidden="true">01</span><div className={styles.stepName}><span>TALEP</span><h3>Gelen işi karşılar</h3></div><p>Yeni müşteri talebini okur, eksik bilgileri işaretler, ilgili kişiye görev açar. Kimsenin gelen kutusunu nöbetle izlemesi gerekmez.</p></li>
                <li><span className={styles.stepNumber} aria-hidden="true">02</span><div className={styles.stepName}><span>HAZIRLIK</span><h3>Yanıtı hazırlar</h3></div><p>Gereken bilgileri bir araya getirir, eksikleri sorar. Sınırı belli soruları doğrudan yanıtlayabilir; fiyat veya yeni taahhüt gibi konuları yetkili kişiye bırakır.</p></li>
                <li><span className={styles.stepNumber} aria-hidden="true">03</span><div className={styles.stepName}><span>TAKİP</span><h3>İşi ilerletir</h3></div><p>Bekleyen yanıtları ve teslim tarihlerini izler; ekibe hatırlatır, size yalnızca karar veya gecikme sinyali verir.</p></li>
              </ol>
              <div className={styles.systemNote}><span>BİR GÜNÜN RİTMİ</span><p><strong>Sabah</strong> yeni iş kayda geçer. <strong>Öğlen</strong> eksik bilgiler tamamlanır. <strong>Akşam</strong> açık işlerin özeti çıkar. Siz bütün adımları takip etmek yerine gerektiği yerde yön verirsiniz.</p></div>
            </section>

            <section className={styles.split}>
              <div>
                <div className={styles.sectionLabel}>03 / SİZE KALAN ALAN</div>
                <h2>Bir SMS, daha az takip yükü.</h2>
              </div>
              <ul>
                <li><strong>İş nerede diye sormazsınız.</strong> Bekleyen işler, teslimler ve müşteri yanıtları tek kısa özette görünür.</li>
                <li><strong>Her bildirim karar değildir.</strong> AI uygulamaları rutin takibi sürdürür; sizin yetkiniz gereken bir durum çıkarsa size gelir.</li>
                <li><strong>Ekibin işi de kolaylaşır.</strong> Talep, taslak, sorumlu ve sonraki adım önceden hazırlanmış olur.</li>
                <li><strong>Telefon sadece kapıdır.</strong> İsterseniz aynı düzene daha sonra bilgisayardan veya başka bir kanaldan da ulaşırsınız.</li>
              </ul>
            </section>

            <section className={styles.reality}>
              <div className={styles.processGrid}>
                <div className={styles.processLead}>
                  <div className={styles.sectionLabel}>04 / WHITEGATE NASIL KURAR?</div>
                  <h2>İlk adım: öncelikli işi seçmek.</h2>
                  <p className={styles.processIntro}>En çok takip gerektiren operasyon akışını seçer, işe yarayan ilk kullanım şeklini ekibinizle birlikte kurarız.</p>
                </div>
                <ol className={styles.processSteps}>
                  <li><span aria-hidden="true">01</span><div><h3>Planlıyoruz</h3><p>Ekibinizin gün içinde en çok neyi tekrar tekrar kontrol ettiğine bakıyoruz. AI işçileri hangi bilgiyi bulabilir, hangi kararı siz vermelisiniz? İlk kurulacak işi buradan seçiyoruz.</p></div></li>
                  <li><span aria-hidden="true">02</span><div><h3>Geliştiriyoruz</h3><p>Size özel AI işçilerini görevleriyle kuruyor, kullandığınız araçlara bağlıyoruz. Talebi okuma, taslak hazırlama, eksik bilgi isteme ve açık işleri izleme görevlerini gerçek örneklerle deniyoruz.</p></div></li>
                  <li><span aria-hidden="true">03</span><div><h3>Kullanıma alıyoruz</h3><p>Ekibiniz günlük işinde kullanmaya başlıyor. Siz de uzun raporlar yerine “DURUM” gibi kısa bir soruyla özeti alıyorsunuz. İlk kullanımda aksayan noktaları birlikte düzeltiyoruz.</p></div></li>
                </ol>
              </div>
              <div className={styles.processOutro}><span>3310 burada küçük bir mizah payı taşıyor. Asıl fikir ciddi:</span><p>İşin durumunu öğrenmek için <em>bütün konuşmaları tek tek okumanız gerekmesin.</em></p><span>Hangi işin kendi kendine ilerleyeceği, hangisinin size geleceği tasarımda belirlenir.</span></div>
            </section>

            <section className={styles.faq}>
              <div className={styles.sectionLabel}>05 / KISA CEVAPLAR</div>
              <h2>Bu fikir işime uyar mı?</h2>
              <details><summary>Gerçekten Nokia 3310 kullanmam gerekir mi?<span aria-hidden="true">+</span></summary><p>Hayır. 3310 bu hikâyenin eğlenceli yüzü. Asıl amaç, ihtiyaç duyduğunuz iş bilgisini size uygun en basit kanaldan ulaştırmak.</p></details>
              <details><summary>AI uygulamaları kendi başlarına neleri yapar?<span aria-hidden="true">+</span></summary><p>Talep okuyabilir, bilgi toplayabilir, takip yapabilir ve kaynağı belli rutin soruları yanıtlayabilirler. Hangi işlemde yetkili onayı gerektiği; kullanılan bilgi, işlem yetkisi ve hata riskiyle birlikte belirlenir.</p></details>
              <details><summary>İlk adımda neye bakarız?<span aria-hidden="true">+</span></summary><p>Teklif, müşteri talebi veya teslimat gibi bir öncelikli iş alanına bakarız. Mevcut araçları, tekrar eden işleri ve karar noktalarını birlikte netleştiririz. Uygun bir uygulama yolu varsa kapsamını çıkarırız.</p></details>
            </section>

            <section className={styles.cta} aria-label="Şirketimde nasıl çalışır?">
              <Image className={styles.ctaDesktopImage} src="/gate-assets/nokia-case-cta-dialogue-v1.webp" width={1672} height={941} sizes="(max-width: 700px) 1px, (max-width: 1048px) calc(100vw - 48px), 1000px" alt="Sahildeki patron 3310'dan İşler ne durumda diye soruyor. Yanıt: Yolunda. Siz niye hâlâ telefondasınız?" />
              <Link className={styles.ctaDesktopLink} href="/iletisim"><span className={styles.srOnly}>Benim şirketimde nasıl olur? İletişime geçin.</span></Link>
              <div className={styles.ctaMobile}>
                <Image className={styles.ctaMobileImage} src="/gate-assets/nokia-case-cta-mobile-v1.webp" alt="" fill sizes="(max-width: 700px) calc(100vw - 48px), 1px" />
                <div className={styles.ctaMobileCopy}>
                  <p className={styles.ctaQuestion}><strong>PATRON:</strong> İşler ne durumda?</p>
                  <p className={styles.ctaReply}>Yolunda. Siz niye hâlâ telefondasınız?</p>
                  <p className={styles.ctaTagline}>İşler yürüsün. Tatil gerçekten tatil olsun.</p>
                </div>
                <Link className={styles.ctaMobileLink} href="/iletisim">Benim şirketimde nasıl olur? <span aria-hidden="true">↗</span></Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <BlogFooter />
    </div>, getLocale())
  );
}
