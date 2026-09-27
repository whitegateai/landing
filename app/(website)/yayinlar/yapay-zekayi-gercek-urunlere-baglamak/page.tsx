import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "AI Demosu Nasıl Kullanılan Bir Uygulamaya Dönüşür? | WhiteGate AI",
  description: "AI prototipi ile günlük kullanılan uygulama arasında ne eksik? Kullanıcı, bilgi, yetki, hata ve ölçüm sınırlarıyla somut bir örnek.",
  alternates: { canonical: "/yayinlar/yapay-zekayi-gercek-urunlere-baglamak" },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <PostNav />
      <main className="main-wrapper">
        <section className="section detail-header"><div className="padding-global"><div className="container-base"><div className="detail-padding"><div className="blog_detail-header">
          <a href="/yayinlar" className="back-btn" aria-label="Yayınlara dön">←</a>
          <div className="blog_detail-header-heading"><div className="blog_detail-header-info"><div className="blog-card-tag">AI ürünü</div></div><h1 className="heading-style-h2">AI demosu nasıl kullanılan bir uygulamaya dönüşür?</h1></div>
          <img src="/gate-assets/scenario-inquiries-v2.webp" loading="lazy" alt="AI uygulaması geliştirmeyi anlatan yayın görseli" className="blog_detail-image" />
        </div></div></div></div></section>
        <section className="section detail-content"><div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
          <aside className="blog-detail-left"><div className="blog-new-wrap"><div className="blog-new-heading">İlgili yayın</div><a href="/yayinlar/ai-agent-ne-zaman-gerekir" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">AI agent ne zaman gerekir?</div></div></a></div></aside>
          <article className="blog-detail-main"><div className="blog_richtext w-richtext">
            <h2>Kısa yanıt</h2>
            <p>Bir AI demosu tek bir örnekte iyi yanıt gösterebilir. Günlük kullanılan uygulama ise doğru kişiden bilgi alır, yetkili kayda bakar, izin verilen işlemi yapar, sonucu kaydeder ve sorun çıkarsa anlaşılır bir yol sunar. Modelin yanıtı bu ürünün yalnız bir parçasıdır.</p>
            <h2>Örnek: Randevu alan AI asistanı</h2>
            <p>Demoda “Perşembe öğleden sonra uygunum” mesajına güzel bir cevap üretmek kolaydır. Canlı uygulamada uygun saatlerin gerçekten takvimden okunması, müşterinin adının ve iletişim bilgisinin alınması, dolu saatin iki kişiye verilmemesi, randevunun oluşturulması ve değişiklik talebinin işlenmesi gerekir. Müsaitlik bilgisi gelmiyorsa asistan rastgele saat önermez; yeniden deneme veya ekibe yönlendirme yolunu kullanır.</p>
            <h2>Çalışan ürünün beş parçası</h2>
            <ol>
              <li><strong>Giriş:</strong> Kullanıcı talebi hangi ekranda veya kanalda iletecek? Hangi bilgi eksikse sorulacak?</li>
              <li><strong>Yetkili bilgi:</strong> Uygulama hangi belge, takvim veya iş kaydına bakacak? Bunlar kim tarafından güncellenecek?</li>
              <li><strong>İşlem:</strong> AI yalnız öneri mi verecek, yoksa randevu, kayıt veya yanıt da oluşturabilecek mi?</li>
              <li><strong>İstisna:</strong> Yanlış, eksik veya çelişkili bilgiyle karşılaşınca ne yapacak? Kullanıcıya ne gösterecek?</li>
              <li><strong>Gözlem:</strong> Hangi talep sonuçlandı, hangisi devredildi, hangi işlem başarısız oldu?</li>
            </ol>
            <p>AI bazen doğrudan yanıt verip işlemi tamamlayabilir; bazen bir çalışana devretmesi gerekir. Sınır, kanalın “chatbot” veya “agent” diye adlandırılmasıyla değil, işin riski ve verilen yetkiyle belirlenir.</p>
            <h2>İlk sürüm için kabul testi</h2>
            <p>Tek görevle başlayın. Normal talep, eksik bilgi, dolu saat, bağlantı hatası ve iptal isteğini deneyin. Her örnekte kullanıcıya görünen yanıtı, arka planda değişen kaydı ve ekibin göreceği durumu kontrol edin. Model veya bilgi kaynağı değiştiğinde aynı örnekleri tekrar çalıştırın. <a href="https://platform.openai.com/docs/guides/evals" target="_blank" rel="noopener noreferrer">OpenAI&apos;ın değerlendirme rehberi</a> bu tür örneklerle davranışı sınamayı destekler.</p>
            <h2>Ne teslim alınmalı?</h2>
            <ul><li>Kullanıcıların erişebildiği uygulama veya kanal</li><li>Kararlaştırılan bilgi ve araç bağlantıları</li><li>Yetki ve istisna kuralları</li><li>Gerçek iş örnekleriyle test sonuçları ve kullanım anlatımı</li></ul>
            <p>WhiteGate, ilk görevi ekibinizle seçer, gerekli uygulamayı geliştirir ve gerçek kullanımda birlikte dener. <a href="/yayinlar/iyi-cikti-icin-dogru-girdi-tasarimi">Bilgi hazırlama rehberine</a> bakın veya <a href="/iletisim">uygulama fikrinizi konuşun</a>.</p>
          </div></article>
        </div></div></div></section>
        <PostCtaSection />
      </main>
      <PostFooter />
    </div>
  );
}
