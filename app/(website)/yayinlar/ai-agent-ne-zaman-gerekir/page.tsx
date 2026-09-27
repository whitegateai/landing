import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "AI Agent Nedir? Chatbot ve Otomasyondan Farkı | WhiteGate AI",
  description:
    "AI agent ne zaman gerekir? Chatbot, otomasyon ve agent arasındaki farkı müşteri talebi örneğiyle; yanıt ve devir sınırlarıyla öğrenin.",
  alternates: { canonical: "/yayinlar/ai-agent-ne-zaman-gerekir" },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <PostNav />
      <main className="main-wrapper">
        <section className="section detail-header">
          <div className="padding-global"><div className="container-base"><div className="detail-padding">
            <div className="blog_detail-header">
              <a href="/yayinlar" className="back-btn" aria-label="Yayınlara dön">←</a>
              <div className="blog_detail-header-heading">
                <div className="blog_detail-header-info"><div className="blog-card-tag">AI uygulamaları</div></div>
                <h1 className="heading-style-h2">AI agent nedir? Chatbot ve otomasyondan ne zaman ayrılır?</h1>
              </div>
              <img src="/gate-assets/journal-knowledge-v1.webp" loading="lazy" alt="AI agent rehberi görseli" className="blog_detail-image" />
            </div>
          </div></div></div>
        </section>
        <section className="section detail-content">
          <div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
            <aside className="blog-detail-left">
              <div className="blog-new-wrap">
                <div className="blog-new-heading">İlgili yayın</div>
                <a href="/yayinlar/problemden-sisteme-ai-ne-zaman-ise-yarar" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">İlk AI uygulaması nasıl seçilir?</div></div></a>
              </div>
            </aside>
            <article className="blog-detail-main">
              <style>{".blog-detail-main table th,.blog-detail-main table td{padding:.75rem;text-align:left;border-bottom:1px solid #d7dadd;vertical-align:top}.blog-detail-main table th{font-weight:600}"}</style>
              <div className="blog_richtext w-richtext">
                <h2>Kısa yanıt</h2>
                <p>AI agent, bir hedefe ulaşmak için bilgi okuyabilen, gerektiğinde araç kullanabilen ve tanımlı sınırlar içinde birden fazla adımı yürütebilen AI uygulamasıdır. Sadece soru yanıtlamak gerekiyorsa bir chatbot, sabit kurallarla ilerleyen iş için otomasyon yeterli olabilir. Agent, görevin yolu gelen bilgiye göre değiştiğinde ve farklı araçlardan işlem yapmak gerektiğinde anlam kazanır.</p>

                <h2>Chatbot, otomasyon ve agent arasındaki fark ne?</h2>
                <div style={{ overflowX: "auto" }}><table style={{ width: "100%", minWidth: 560 }}>
                  <thead><tr><th scope="col">Seçenek</th><th scope="col">İyi yaptığı iş</th><th scope="col">Örnek</th></tr></thead>
                  <tbody>
                    <tr><td>Chatbot</td><td>Soru alıp bilgiye dayalı yanıt vermek</td><td>Çalışma saatini veya iade koşulunu açıklamak</td></tr>
                    <tr><td>Otomasyon</td><td>Önceden belli adımları tekrarlamak</td><td>Form gelince CRM kaydı ve görev açmak</td></tr>
                    <tr><td>AI agent</td><td>Değişen talebi yorumlayıp uygun araç ve adımları seçmek</td><td>Talebi sınıflandırmak, kaydı kontrol etmek, uygun yanıtı veya devri başlatmak</td></tr>
                  </tbody>
                </table></div>
                <p>Bu seçenekler birlikte de çalışabilir. Müşterinin gördüğü sohbet ekranı aynı kalırken arka planda sabit kurallar ve agent görevleri bulunabilir.</p>

                <h2>Bir müşteri talebinde nasıl çalışır?</h2>
                <p>“Siparişim gecikti, adresimi de değiştirmek istiyorum” mesajını düşünün. Basit chatbot teslimat politikasını anlatır. Otomasyon mesajı destek kuyruğuna ekler. Agent ise yetkisi varsa sipariş durumunu kontrol eder, adres değişikliğinin hâlâ mümkün olup olmadığını öğrenir ve uygun sonraki adımı seçer.</p>
                <p>Durum açık ve düşük riskliyse müşteriye onaylı bilgilerle doğrudan yanıt verebilir. Kargo yola çıktıysa, veri çelişkiliyse veya istisna gerekiyorsa kaydı özetleyip doğru çalışana devreder. “AI her mesajı insana bırakır” gibi genel bir kural yoktur; hangi durumda ne yapabileceği önceden belirlenir.</p>

                <h2>Yanıt ve devir sınırları nasıl tanımlanır?</h2>
                <ul>
                  <li><strong>Bilgi kaynağı:</strong> Agent hangi belge, ürün kaydı veya sipariş verisine bakabilir?</li>
                  <li><strong>İşlem yetkisi:</strong> Sadece yanıt mı verir; kayıt açar, randevu oluşturur veya adres değiştirir mi?</li>
                  <li><strong>Devir eşiği:</strong> Belirsiz bilgi, istisna, şikâyet veya yüksek tutarlı karar kime gider?</li>
                  <li><strong>Kayıt:</strong> Hangi bilgiyi kullandığı ve hangi adımı attığı sonradan görülebilir mi?</li>
                </ul>

                <h2>Agent kurmadan önce beş test sorusu</h2>
                <ol>
                  <li>İş tek bir yanıtla mı bitiyor, yoksa birkaç sisteme bakıp işlem yapmak mı gerekiyor?</li>
                  <li>Karar yolu talebe göre gerçekten değişiyor mu?</li>
                  <li>Agentın kullanacağı bilgiler güncel ve erişilebilir mi?</li>
                  <li>Hangi işlemlere kendi başına izin verileceği yazılı mı?</li>
                  <li>Yanlış yanıt veya işlem nasıl fark edilip düzeltilecek?</li>
                </ol>
                <p>Yanıtlar ilk görevi ve sınırlarını belirler. WhiteGate, uygun uygulamayı seçer, gerekli bağlantıları geliştirir ve ekibinizle gerçek talep örneklerinde kullanıma alır. <a href="/hizmetler">Hizmetleri inceleyin</a> veya <a href="/iletisim">işinizi anlatın</a>.</p>
              </div>
            </article>
          </div></div></div>
        </section>
        <PostCtaSection />
      </main>
      <PostFooter />
    </div>
  );
}
