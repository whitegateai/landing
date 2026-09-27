import type { Metadata } from "next";
import { PostCtaSection, PostFooter, PostNav } from "@/components/gate/generated/PostPage";

export const metadata: Metadata = {
  title: "AI'dan Daha İyi Yanıt Almak İçin Girdi Nasıl Hazırlanır? | WhiteGate AI",
  description: "Şirket içi AI asistanı eksik yanıt veriyorsa neyi düzeltmeli? Talimat, kaynak, örnek ve yanıt sınırları için pratik rehber.",
  alternates: { canonical: "/yayinlar/iyi-cikti-icin-dogru-girdi-tasarimi" },
};

export default function Page() {
  return (
    <div className="page-wrapper">
      <PostNav />
      <main className="main-wrapper">
        <section className="section detail-header"><div className="padding-global"><div className="container-base"><div className="detail-padding"><div className="blog_detail-header">
          <a href="/yayinlar" className="back-btn" aria-label="Yayınlara dön">←</a>
          <div className="blog_detail-header-heading"><div className="blog_detail-header-info"><div className="blog-card-tag">AI uygulamaları</div></div><h1 className="heading-style-h2">AI&apos;dan daha iyi yanıt almak için girdi nasıl hazırlanır?</h1></div>
          <img src="/gate-assets/journal-knowledge-v1.webp" loading="lazy" alt="AI girdisi ve bilgi düzenini anlatan yayın görseli" className="blog_detail-image" />
        </div></div></div></div></section>
        <section className="section detail-content"><div className="padding-global"><div className="container-base"><div className="blog-detail-grid">
          <aside className="blog-detail-left"><div className="blog-new-wrap"><div className="blog-new-heading">İlgili yayın</div><a href="/yayinlar/ai-ciktilari-neden-kullanilamaz-kalir" className="blog-card"><div className="blog-new-content"><div className="blog-new-title">AI çıktıları neden kullanılamaz kalır?</div></div></a></div></aside>
          <article className="blog-detail-main"><div className="blog_richtext w-richtext">
            <h2>Kısa yanıt</h2>
            <p>İyi bir AI girdisi uzun bir komuttan ibaret değildir. Asistanın yapacağı iş, bakacağı güncel bilgi, kullanıcıdan alacağı eksik bilgiler ve hangi durumda başka bir adım seçeceği açık olmalıdır. Aynı soruya farklı yanıtlar geliyorsa yalnız komutu uzatmak yerine bu dört parçayı kontrol edin.</p>
            <h2>Örnek: Müşteri teslim tarihini soruyor</h2>
            <p>“Müşteriye nazik cevap ver” talimatı yeterli görünür. Fakat asistan hangi siparişe baktığını, teslim tarihinin hangi kayıtta güncellendiğini ve gecikme olduğunda ne söyleyebileceğini bilmez. İyi kurulmuş uygulama sipariş numarasını alır, izinli kayıttaki son duruma bakar ve doğruladığı bilgiyi iletir. Kayıt çelişkiliyse uygun ekibe yönlendirir. Her yanıtın insan onayına gitmesi gerekmez; yanıt yetkisi ve istisnalar işe göre belirlenir.</p>
            <h2>Girdinin dört parçası</h2>
            <ol>
              <li><strong>Görev:</strong> “Teslimat sorusunu yanıtla” gibi kullanıcının beklediği işi yazın.</li>
              <li><strong>Kaynak:</strong> Katalog, sipariş kaydı veya prosedürden hangisinin geçerli olduğunu belirtin. Dosyanın sahibi ve güncelleme tarihi belli olsun.</li>
              <li><strong>Eksik bilgi:</strong> Sipariş numarası yoksa ne sorulacağını, kimlik doğrulanmadan neyin paylaşılmayacağını belirleyin.</li>
              <li><strong>Sınır ve çıktı:</strong> Yanıtın dili ve içeriği belli olsun. İstisnada hangi ekibe, hangi özetle devredeceğini yazın.</li>
            </ol>
            <h2>Gerçek sorularla deneyin</h2>
            <p>Normal istek, eksik bilgi, eski belge, çelişkili kayıt ve yetki dışı işlem için anonimleştirilmiş örnekler seçin. Her biri için beklenen davranışı yazın. Yalnız cümlenin güzel olmasını değil, doğru kaynağın kullanılmasını ve gerektiğinde durmasını kontrol edin. Kaynak değiştiğinde örnekleri yeniden çalıştırın. <a href="https://platform.openai.com/docs/guides/evals" target="_blank" rel="noopener noreferrer">OpenAI değerlendirme rehberi</a> de örneklerle test etmeyi önerir.</p>
            <h2>Başlamadan önce</h2>
            <ul><li>Asistanın çözeceği ilk soru tipi belli mi?</li><li>Yetkili bilgi kaynağı ve güncelleme sahibi kim?</li><li>Eksik bilgi ve istisnada ne olacak?</li><li>Yanıtın işe yaradığını hangi gerçek örneklerle ölçeceğiz?</li></ul>
            <p>WhiteGate, seçilen iş için bilgileri düzenler, AI uygulamasını bu kaynaklara bağlar ve ekibinizle gerçek sorular üzerinde dener. <a href="/hizmetler">Nasıl çalıştığımızı görün</a> veya <a href="/iletisim">ilk uygulamanızı konuşun</a>.</p>
          </div></article>
        </div></div></div></section>
        <PostCtaSection />
      </main>
      <PostFooter />
    </div>
  );
}
