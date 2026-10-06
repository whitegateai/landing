import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "Tekliften Teslime Takip Nasıl Kurulur? Örnek İş Akışı | WhiteGate AI",
  description:
    "Teklif, revizyon, onay ve teslimi tek yerde nasıl takip edersiniz? Gerekli kayıt alanları, AI'ın görevi ve uygulama kontrol listesi.",
  alternates: { canonical: "/yayinlar/tekliften-teslime-takip-akisi" },
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
                <h1 className="heading-style-h2">Tekliften teslime takip nasıl kurulur? Örnek iş akışı</h1>
              </div>
              <img src="/gate-assets/journal-workflow-v1.webp" loading="lazy" alt="Tekliften teslime takip rehberi görseli" className="blog_detail-image" />
            </div>
          </div></div></div>
        </section>
        <section className="section detail-content">
          <div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
            <aside className="blog-detail-left">
              <div className="blog-new-wrap">
                <div className="blog-new-heading">İlgili yayın</div>
                <a href="/yayinlar/ai-agent-ne-zaman-gerekir" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">AI agent ne zaman gerekir?</div></div></a>
              </div>
            </aside>
            <article className="blog-detail-main">
              <style>{".blog-detail-main table th,.blog-detail-main table td{padding:.75rem;text-align:left;border-bottom:1px solid #d7dadd;vertical-align:top}.blog-detail-main table th{font-weight:600}"}</style>
              <div className="blog_richtext w-richtext">
                <h2>Kısa yanıt</h2>
                <p>Tekliften teslime takip, her müşteri işi için tek bir kayıt açıp teklifin sürümünü, sorumlusunu, durumunu ve sonraki adımını orada tutarak kurulur. Onaylanan teklif teslim işlerini başlatır; revizyon ve gecikmeler aynı kayıtta görünür. AI, taslak ve özet hazırlayabilir veya bekleyen işi hatırlatabilir. Fiyat ve müşteri taahhüdü gibi kararlar ise yetkili kişinin onayından geçer.</p>

                <h2>Takip kaydında hangi bilgiler olmalı?</h2>
                <p>Bir tablo ya da mevcut CRM içinde şu alanlarla başlayın. Ekibin gerçekten doldurmadığı alanları baştan çoğaltmayın.</p>
                <div style={{ overflowX: "auto" }}><table style={{ width: "100%", minWidth: 520 }}>
                  <thead><tr><th scope="col">Alan</th><th scope="col">Ne işe yarar?</th></tr></thead>
                  <tbody>
                    <tr><td>Müşteri ve iş</td><td>Hangi talep ve teslim konuşuluyor?</td></tr>
                    <tr><td>Teklif sürümü</td><td>Müşterinin gördüğü son kapsam hangisi?</td></tr>
                    <tr><td>Sorumlu</td><td>Bir sonraki hareketi kim yapacak?</td></tr>
                    <tr><td>Durum ve tarih</td><td>İş hangi aşamada, en son ne zaman değişti?</td></tr>
                    <tr><td>Sonraki adım</td><td>Ne yapılacak ve ne zamana kadar?</td></tr>
                  </tbody>
                </table></div>

                <h2>Örnek: tekliften teslimata dört adım</h2>
                <ol>
                  <li><strong>Teklif:</strong> Satış ekibi talebi ve kapsamı kaydeder. Teklifin ilk sürümü hazırlanır ve sorumlu kişi atanır.</li>
                  <li><strong>Revizyon:</strong> Müşteri bir değişiklik istediğinde yeni sürüm açılır. Eski kapsam ve karar kaybolmaz.</li>
                  <li><strong>Onay:</strong> Yetkili kişi fiyatı, kapsamı ve taahhütleri kontrol eder. Müşteri onayı kayda geçince teslim görevleri açılır.</li>
                  <li><strong>Teslim:</strong> Görev sahibi ilerlemeyi günceller. Eksik bilgi veya gecikme varsa ilgili kişiye haber gider; teslim ve müşteri bilgilendirmesi kayda işlenir.</li>
                </ol>
                <p>Örneğin müşteri teklifin üçüncü sürümünü onayladığında ekip, birinci sürümdeki iş listesiyle çalışmaya başlamamalı. Onaylanan sürüm ile teslim görevleri birbirine bağlanırsa bu hata görünür olur.</p>

                <h2>AI burada hangi işi üstlenebilir?</h2>
                <ul>
                  <li>Gelen talebi okuyup teklif için ilk taslağı ve eksik bilgi sorularını hazırlar.</li>
                  <li>İki sürüm arasındaki değişiklikleri özetler; ekip kapsam farkını hızlıca görür.</li>
                  <li>Bekleyen onayı veya yaklaşan teslim tarihini ilgili sorumluya bildirir.</li>
                </ul>
                <p>AI'ın hazırladığı metnin müşteriye otomatik gönderilip gönderilmeyeceği işin riskine göre belirlenir. Standart durum güncellemesi otomatik gidebilir; fiyat, sözleşme kapsamı ve yeni taahhütler için yetkili onayı tanımlanır.</p>

                <h2>Başlamadan önce kontrol listesi</h2>
                <ul>
                  <li>Teklifin onaylanan sürümü herkes tarafından aynı yerden görülebiliyor mu?</li>
                  <li>Her açık işin bir sorumlusu ve sonraki adımı var mı?</li>
                  <li>Müşteri değişiklikleri eski kararın üzerine yazılmadan saklanıyor mu?</li>
                  <li>Onaydan sonra teslim görevlerini kimin açacağı belli mi?</li>
                  <li>Geciken iş ve teslim tarihi için kime haber verileceği tanımlı mı?</li>
                </ul>
                <p>Bu soruların yanıtı netleşince mevcut araçlarla başlayıp gereken bağlantıları kurabilirsiniz. WhiteGate, uygun ilk uygulamayı belirler, geliştirir ve ekibinizle günlük kullanıma alır. <a href="/hizmetler">Hizmet yaklaşımını inceleyin</a> veya <a href="/iletisim">uygunluk görüşmesi isteyin</a>.</p>
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
