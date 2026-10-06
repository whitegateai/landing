import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "Şirketiniz İçin İlk AI Uygulaması Nasıl Seçilir? | WhiteGate AI",
  description:
    "Şirketinizde AI ile nereden başlamalısınız? Sıklık, veri, tekrar, risk ve iş sahibi üzerinden ilk uygulamayı seçmek için pratik rehber.",
  alternates: { canonical: "/yayinlar/problemden-sisteme-ai-ne-zaman-ise-yarar" },
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
                <div className="blog_detail-header-info"><div className="blog-card-tag">Başlangıç rehberi</div></div>
                <h1 className="heading-style-h2">Şirketiniz için ilk AI uygulaması nasıl seçilir?</h1>
              </div>
              <img src="/gate-assets/journal-first-step-v1.webp" loading="lazy" alt="İlk AI uygulamasını seçme rehberi görseli" className="blog_detail-image" />
            </div>
          </div></div></div>
        </section>
        <section className="section detail-content">
          <div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
            <aside className="blog-detail-left">
              <div className="blog-new-wrap">
                <div className="blog-new-heading">İlgili yayın</div>
                <a href="/yayinlar/tekliften-teslime-takip-akisi" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">Tekliften teslime takip nasıl kurulur?</div></div></a>
              </div>
            </aside>
            <article className="blog-detail-main">
              <style>{".blog-detail-main table th,.blog-detail-main table td{padding:.75rem;text-align:left;border-bottom:1px solid #d7dadd;vertical-align:top}.blog-detail-main table th{font-weight:600}"}</style>
              <div className="blog_richtext w-richtext">
                <h2>Kısa yanıt</h2>
                <p>İlk AI uygulamasını en etkileyici demoya göre seçmeyin. Ekibin sık yaptığı, bilgisi erişilebilir olan ve sonucu kolayca kontrol edilebilen bir işle başlayın. Bu bir müşteri sorusunu yanıtlama, teklif taslağı hazırlama veya gelen talepleri doğru ekibe yönlendirme olabilir. Uygulama, gerçek kullanıcıyla günlük işte denenebildiğinde değerini gösterebilir.</p>

                <h2>Hangi işi önce ele almalı?</h2>
                <p>Aday işleri yan yana koyup şu beş soruya cevap verin:</p>
                <div style={{ overflowX: "auto" }}><table style={{ width: "100%", minWidth: 560 }}>
                  <thead><tr><th scope="col">Ölçüt</th><th scope="col">Sorulacak soru</th></tr></thead>
                  <tbody>
                    <tr><td>Sıklık</td><td>Bu iş her hafta gerçekten kaç kez geliyor?</td></tr>
                    <tr><td>Veri</td><td>Gerekli bilgi nerede ve güncel mi?</td></tr>
                    <tr><td>Tekrar</td><td>Benzer adımlar ne kadar sık yineleniyor?</td></tr>
                    <tr><td>Risk</td><td>Yanlış cevap veya işlem kime, nasıl etki eder?</td></tr>
                    <tr><td>İş sahibi</td><td>Uygulamayı kim kullanacak ve sonucu kim değerlendirecek?</td></tr>
                  </tbody>
                </table></div>
                <p>Sıklık yüksek olsa bile veri dağınıksa önce kaynakları toparlamak gerekebilir. Risk yüksekse uygulama taslak hazırlayarak başlayabilir; izinler ve kontrol noktaları daha sonra genişletilir.</p>

                <h2>Bir ilk uygulamanın sınırı nasıl yazılır?</h2>
                <p>“Satışa AI kuralım” yerine kullanıcı, girdi ve çıktıyı tarif edin:</p>
                <ol>
                  <li><strong>Giriş:</strong> Müşteriden e-posta ile ürün ve teslimat sorusu gelir.</li>
                  <li><strong>AI görevi:</strong> Asistan güncel ürün belgesinden yanıtı bulur, eksik bilgiyi işaretler ve uygun yanıtı hazırlar.</li>
                  <li><strong>Çıktı:</strong> Müşteri yanıtı veya satış ekibinin kullanacağı taslak oluşur.</li>
                  <li><strong>Kontrol:</strong> Standart sorular tanımlı sınırlar içinde doğrudan yanıtlanabilir; fiyat istisnası ve belirsiz bilgi ilgili çalışana gider.</li>
                </ol>
                <p>Böylece ekibin ne açacağı, AI'ın ne yapacağı ve hangi durumda devredeceği anlaşılır. Kullanılan bilgi kaynağı değiştiğinde yanıtın nasıl güncelleneceği de kapsamda yer alır.</p>

                <h2>Önce plan mı, doğrudan uygulama mı?</h2>
                <p>Hangi işin seçileceği, veri kaynakları veya öncelik sırası belirsizse ayrıntılı <a href="/hizmetler">AI Dönüşüm Planı</a> işe yarar. Bu çalışma, aday uygulamaları sıralayıp ilk uygulamanın kapsamını netleştirir. İş, kullanıcı ve gerekli bağlantılar zaten belliyse doğrudan uygulama kapsamı ve teklifine geçilebilir. Kısa uygunluk görüşmesinde hangi yolun uygun olduğu konuşulur.</p>

                <h2>İlk kullanımda neye bakılır?</h2>
                <ul>
                  <li>Uygulama gerçek iş örneklerinde beklenen görevi tamamlıyor mu?</li>
                  <li>Yanlış veya eksik cevaplar fark edilip düzeltilebiliyor mu?</li>
                  <li>Ekibin kullanacağı ekran, mesaj veya kayıt günlük işe uyuyor mu?</li>
                  <li>Devir gereken durumlar doğru kişiye ulaşıyor mu?</li>
                </ul>
                <p>WhiteGate ilk uygulamayı seçmenize, geliştirmenize ve ekibinizle kullanıma almanıza yardımcı olur. <a href="/iletisim">Şirketinizdeki işi anlatın</a>; birlikte nereden başlanacağını belirleyelim.</p>
              </div>
            </article>
          </div></div></div>
        </section>
        <PostCtaSection />
      </main>
      <PostFooter />
    </div>, getLocale())
  );
}
