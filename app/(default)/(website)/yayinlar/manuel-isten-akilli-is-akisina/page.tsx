import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "Manuel İşler Nasıl Otomatikleştirilir? | WhiteGate AI",
  description:
    "E-posta, tablo ve mesajlar arasında yürüyen işi nasıl akışa çevirirsiniz? İlk süreç seçimi, örnek uygulama ve başlama kontrol listesi.",
  alternates: { canonical: "/yayinlar/manuel-isten-akilli-is-akisina" },
};

export default function Page() {
  return (
    localizeTree(<div className="page-wrapper">
      <PostNav />
      <main className="main-wrapper">
        <section className="section detail-header">
          <div className="padding-global"><div className="container-base"><div className="detail-padding">
            <div className="blog_detail-header">
              <a href="/yayinlar" className="back-btn" aria-label="Yayınlara dön">←</a>
              <div className="blog_detail-header-heading">
                <div className="blog_detail-header-info"><div className="blog-card-tag">İş akışı</div></div>
                <h1 className="heading-style-h2">Manuel işler nasıl otomatikleştirilir? İlk akışı seçme rehberi</h1>
              </div>
              <img src="/gate-assets/journal-manual-workflow-v1.webp" loading="lazy" alt="Manuel taleplerden takip edilen iş akışına geçişi gösteren ofis masası" className="blog_detail-image" />
            </div>
          </div></div></div>
        </section>
        <section className="section detail-content">
          <div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
            <aside className="blog-detail-left"><div className="blog-new-wrap">
              <div className="blog-new-heading">İlgili yayın</div>
              <a href="/yayinlar/tekliften-teslime-takip-akisi" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">Tekliften teslime takip nasıl kurulur?</div></div></a>
            </div></aside>
            <article className="blog-detail-main"><div className="blog_richtext w-richtext">
              <h2>Kısa yanıt</h2>
              <p>Manuel işi otomatikleştirmek için önce tek bir işin nerede başladığını, kimin üstlendiğini ve ne zaman bittiğini görünür kılın. Sonra tekrar eden kayıt, bilgi toplama ve bildirim adımlarını akışa bağlayın. Karar gerektiren istisnaları ayrıca tanımlayın. Bütün şirketi bir seferde otomatikleştirmeye çalışmak yerine, ekibin her gün yaşadığı bir sürtünmeyle başlayın.</p>

              <h2>Hangi işi önce seçmeli?</h2>
              <p>İyi ilk aday; sık gelen, başlangıcı belli, sonucu ölçülebilen ve hata olduğunda fark edilebilen iştir. Örneğin müşteri destek talebinin gelen kutusundan ekip arkadaşına aktarılması. “Bazen unutuluyor” ifadesi tek başına yeterli değil; son birkaç talepte kimin neyi beklediğini incelemek gerekir.</p>
              <ul>
                <li>Talep hangi kanaldan geliyor: e-posta, form, mesaj, telefon notu?</li>
                <li>Birinin tekrar tekrar kopyaladığı bilgi hangisi?</li>
                <li>Bekleme nerede oluşuyor ve kimin haberi olmuyor?</li>
                <li>Yanlış yönlendirme olursa kim düzeltiyor?</li>
              </ul>

              <h2>Örnek: kaybolan destek talebini akışa almak</h2>
              <ol>
                <li><strong>Geliş:</strong> Müşteri “Kurulumdan sonra giriş yapamıyorum” diye yazıyor. Talep tek bir kayda dönüşüyor; müşteri, ürün ve zaman bilgisi kaybolmuyor.</li>
                <li><strong>Anlama:</strong> AI mesajı özetliyor, eksik bilgiyi soruyor ve bilinen bir sorun olup olmadığını yetkili kaynakta kontrol ediyor.</li>
                <li><strong>Yönlendirme:</strong> Bilinen, düşük riskli bir adım varsa onaylanmış bilgiyle yanıt verebiliyor. Hesap erişimi veya sıra dışı hata söz konusuysa doğru ekibe aktarıyor.</li>
                <li><strong>Takip:</strong> İş açık kaldığında sorumlu ve sonraki adım görünür oluyor. Yanıt verildiğinde kayıt kapanıyor; sessizce kaybolmuyor.</li>
              </ol>
              <p>Bu akışın AI gerektirmeyen kısmı da vardır: kayıt açma, tarih koyma ve bildirim gönderme sabit kurallarla çalışabilir. AI, mesajı anlamak veya doğru bilgiyi bulmak gerektiğinde eklenir. Böylece sistem, gereksiz karmaşıklık olmadan işe yarar.</p>

              <h2>Başlamadan önce beş kontrol</h2>
              <ol>
                <li>İşi yapan ekip mevcut adımları aynı şekilde mi anlatıyor?</li>
                <li>Kayıt için tek bir ana yer seçildi mi?</li>
                <li>AI'ın okuyacağı bilgi güncel ve erişim açısından uygun mu?</li>
                <li>Otomatik yanıt, insan devri ve hata durumları açık mı?</li>
                <li>İlk hafta hangi gerçek talep örnekleriyle denenecek?</li>
              </ol>
              <p>WhiteGate ilk akışı seçer, gereken AI uygulamasını ve bağlantıları geliştirir, ekiple günlük kullanımda dener. <a href="/iletisim">Şirketinizde ilk hangi işin uygun olduğunu konuşalım.</a></p>
            </div></article>
          </div></div></div>
        </section>
        <PostCtaSection />
      </main>
      <PostFooter />
    </div>, getLocale())
  );
}
