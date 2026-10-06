import { getLocale } from "@/lib/locale-server";
import { localizeTree } from "@/lib/localize-tree";
import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "Dağınık Şirket Verisiyle Nasıl Sağlıklı Karar Alınır? | WhiteGate AI",
  description: "Excel, CRM ve mesajlarda duran farklı kayıtları yönetim için nasıl anlamlı hale getirirsiniz? Tek kaynak, ortak tanım ve karar ekranı için rehber.",
  alternates: { canonical: "/yayinlar/daginik-veriden-yonetilebilir-karara" },
};

export default function Page() {
  return (
    localizeTree(<div className="page-wrapper">
      <PostNav />
      <main className="main-wrapper">
        <section className="section detail-header"><div className="padding-global"><div className="container-base"><div className="detail-padding"><div className="blog_detail-header">
          <a href="/yayinlar" className="back-btn" aria-label="Yayınlara dön">←</a>
          <div className="blog_detail-header-heading"><div className="blog_detail-header-info"><div className="blog-card-tag">Veri ve karar</div></div><h1 className="heading-style-h2">Dağınık şirket verisiyle nasıl sağlıklı karar alınır?</h1></div>
          <img src="/gate-assets/scenario-knowledge-v2.webp" loading="lazy" alt="Farklı bilgi kaynaklarının birleşimini anlatan yayın görseli" className="blog_detail-image" />
        </div></div></div></div></section>
        <section className="section detail-content"><div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
          <aside className="blog-detail-left"><div className="blog-new-wrap"><div className="blog-new-heading">İlgili yayın</div><a href="/yayinlar/tekliften-teslime-takip-akisi" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">Tekliften teslime takip akışı nasıl kurulur?</div></div></a></div></aside>
          <article className="blog-detail-main"><div className="blog_richtext w-richtext">
            <h2>Kısa yanıt</h2>
            <p>Önce hangi kararı vermek istediğinizi seçin. Sonra gereken verinin ne anlama geldiğini, hangi kaynaktan geldiğini ve ne zaman güncellendiğini netleştirin. Her dosyayı tek ekrana toplamak tek başına çözüm değildir; aynı iş iki yerde farklı görünüyorsa gösterge de yanıltır.</p>
            <h2>Örnek: “Hangi işler gecikiyor?”</h2>
            <p>Operasyon teslim tarihini tabloda, satış müşteri notunu CRM&apos;de, proje yöneticisi son durumu mesajlarda tutuyor olabilir. Yönetici geciken işleri istediğinde üç farklı cevap çıkar. İlk iş, “gecikme”nin ne olduğunu kararlaştırmaktır: müşteriye vaat edilen teslim tarihi mi, iç hedef mi, onay bekleyen iş mi? Ardından her iş için tekil kimlik, sorumlu ve son güncelleme zamanı belirlenir.</p>
            <h2>Karar ekranından önce üç karar</h2>
            <ol>
              <li><strong>Yetkili kayıt:</strong> Teslim tarihi değiştiğinde hangi araçtaki değer esas alınacak? İki kayıt uyuşmazsa kim düzeltecek?</li>
              <li><strong>Ortak tanım:</strong> “Açık iş” ve “gecikmiş teslim” herkes için aynı anlama geliyor mu?</li>
              <li><strong>Güncellik:</strong> Ekran hangi sıklıkla yenilenecek? Kullanıcı son güncelleme anını görebilecek mi?</li>
            </ol>
            <p>Bunlar veri kalitesinin temel boyutlarıdır. <a href="https://docs.cloud.google.com/knowledge-catalog/docs/auto-data-quality-overview" target="_blank" rel="noopener noreferrer">Google Cloud&apos;un veri kalitesi tanımları</a> eksiksizlik, tutarlılık, doğruluk ve güncelliği ayrı ayrı ele alır. “Veri temiz” demek hangi sorunun çözüldüğünü göstermez.</p>
            <h2>Küçük bir ilk sürüm nasıl görünür?</h2>
            <p>Yalnız bu hafta teslim edilecek işleri listeleyin. Her satırda müşteri, iş sahibi, vaat edilen tarih, mevcut durum, bekleyen adım ve kaynağın son güncellemesi olsun. Eksik kayıtları gizlemeyin; “tarih bilinmiyor” veya “sorumlu atanmadı” olarak gösterin. Ekip önce listenin doğru olup olmadığını kontrol eder. Doğru liste kullanıma girince uyarı, özet ve AI destekli soru yanıtlama eklenebilir.</p>
            <h2>Kontrol listesi</h2>
            <ul><li>İlk karar sorusu tek cümlede söylenebiliyor mu?</li><li>Her alanın yetkili kaynağı ve düzeltme sahibi belli mi?</li><li>Tekrarlanan kayıtlar ve boş alanlar görünür mü?</li><li>Ekrandaki sayıdan kaynak kayda geri dönülebiliyor mu?</li></ul>
            <p>WhiteGate, seçilen karar için gerekli araçları bağlar, kayıtların anlamını ekibinizle netleştirir ve günlük işte kullanılan ekranı geliştirir. <a href="/yayinlar/mevcut-araclari-bozmadan-entegrasyon">Araçları bağlama rehberini</a> okuyun veya <a href="/iletisim">kendi karar sorunuzu konuşun</a>.</p>
          </div></article>
        </div></div></div></section>
        <PostCtaSection />
      </main>
      <PostFooter />
    </div>, getLocale())
  );
}
