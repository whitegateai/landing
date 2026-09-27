import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "AI Çıktıları Neden İşe Yaramaz? 6 Kontrol | WhiteGate AI",
  description:
    "AI'ın hazırladığı yanıt neden kullanılamaz? Yanlış kaynak, eksik bağlam, belirsiz yetki ve format sorunlarını gerçek iş örneğiyle kontrol edin.",
  alternates: { canonical: "/yayinlar/ai-ciktilari-neden-kullanilamaz-kalir" },
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
                <h1 className="heading-style-h2">AI çıktıları neden işe yaramaz? Kullanımdan önce 6 kontrol</h1>
              </div>
              <img src="/gate-assets/journal-workflow-v1.webp" loading="lazy" alt="AI çıktısını değerlendirme rehberi için soyut görsel" className="blog_detail-image" />
            </div>
          </div></div></div>
        </section>
        <section className="section detail-content">
          <div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
            <aside className="blog-detail-left"><div className="blog-new-wrap">
              <div className="blog-new-heading">İlgili yayın</div>
              <a href="/yayinlar/ai-agent-ne-zaman-gerekir" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">AI agent ne zaman gerekir?</div></div></a>
            </div></aside>
            <article className="blog-detail-main"><div className="blog_richtext w-richtext">
              <h2>Kısa yanıt</h2>
              <p>AI çıktısı akıcı yazıldığı için kullanılabilir hale gelmez. Doğru iş için hazırlanmış, güncel bilgiye dayanmış, istenen biçimde gelmiş ve hangi durumda gönderilip hangi durumda duracağı belli olmalıdır. Bunlardan biri eksikse ekip metni baştan kontrol eder; AI zaman kazandırmak yerine yeni bir kontrol işi yaratır.</p>

              <h2>Örnek: müşteri sorusuna verilen hazır yanıt</h2>
              <p>Bir müşteri “Bu ürün stokta mı, cuma teslim edilir mi?” diye soruyor. AI katalogdan ürün açıklamasını bulup düzgün bir e-posta yazıyor. Fakat stok bilgisini eski bir dosyadan almış; teslimat bölgesini ve sipariş saatini hiç kontrol etmemiş. Cümleler doğru görünse de yanıt müşteriye verilebilecek bir söz değil.</p>
              <p>İşe yarayan uygulama bu soruyu parçalara ayırır: ürün bilgisi nerede, canlı stok nerede, teslim tarihi hangi kurala bağlı? Bilgi eksikse kesin söz vermez; eksik alanı sorar veya işi yetkili kişiye devreder.</p>

              <h2>Çıktıyı kullanmadan önce neyi kontrol etmeli?</h2>
              <ol>
                <li><strong>Görev:</strong> AI'dan özet mi, taslak mı, doğrudan gönderilecek bir yanıt mı bekleniyor? Bunlar farklı yetki düzeyleridir.</li>
                <li><strong>Kaynak:</strong> Ürün, fiyat, politika veya müşteri bilgisi hangi güncel kayıttan geliyor? Kaynağı yoksa kesin ifade de olmamalı.</li>
                <li><strong>Bağlam:</strong> Müşterinin kim olduğu, önceki konuşma ve varsa istisna AI'a ulaşıyor mu?</li>
                <li><strong>Biçim:</strong> Çıktı, ekibin kullandığı alana sığıyor mu? Serbest metin gerekliyse kısa ve açık mı; yapılandırılmış alan gerekiyorsa alanlar doğru mu?</li>
                <li><strong>Yetki:</strong> Hangi yanıtlar otomatik gidebilir? İade, fiyat değişikliği veya yeni taahhüt gibi durumlarda kim devreye girer?</li>
                <li><strong>İz:</strong> Yanıtın dayandığı bilgi ve alınan aksiyon sonradan görülebiliyor mu?</li>
              </ol>

              <h2>Her çıktıyı bir insan mı onaylamalı?</h2>
              <p>Hayır. Sık sorulan, güncel kaynağı ve sınırı belli bir soru AI tarafından doğrudan yanıtlanabilir. Belirsiz teslim sözü, çelişen müşteri kaydı veya özel fiyat talebi farklı bir yol gerektirir. İnsan onayı, bütün işlere yapıştırılan bir düğme değil; işlemin riskine göre seçilen bir duraktır.</p>
              <p>Bu ayrım bir kural listesiyle başlar, gerçek talep örnekleriyle sınanır ve canlı kullanımda izlenir. <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">NIST'in AI Risk Management Framework kaynağı</a> da AI sistemlerini bağlama göre değerlendirme ve izleme ihtiyacını ele alır.</p>

              <h2>İlk denemeyi nasıl yaparsınız?</h2>
              <ul>
                <li>Son dönemde gelen 20 gerçek soruyu, kişisel bilgileri ayıklayarak toplayın.</li>
                <li>Her soru için doğru bilgi kaynağını ve kabul edilebilir yanıtı işaretleyin.</li>
                <li>AI'ın doğrudan yanıtlayabileceği, bilgi isteyeceği ve devredeceği durumları ayırın.</li>
                <li>Yanlış ya da eksik yanıtlarda nedenin kaynaktan mı, kuraldan mı, tasarımdan mı geldiğini kaydedin.</li>
              </ul>
              <p>WhiteGate bu sınırları şirketinizin gerçek işi üzerinde kurar, uygulamayı gerekli bilgilere bağlar ve ekibinizle kullanıma alır. <a href="/iletisim">İlk AI uygulamanız için konuşalım.</a></p>
            </div></article>
          </div></div></div>
        </section>
        <PostCtaSection />
      </main>
      <PostFooter />
    </div>
  );
}
