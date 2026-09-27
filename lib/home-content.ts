import type { HomePageContent } from "@/sanity/lib/homePage";

// WhiteGate's accepted public language is controlled from SLAB (WG-015/WG-017).
// Keep this source ahead of the older Sanity homePage document until the CMS is
// intentionally resynchronised with the same wording.
export const canonicalHomePageContent: Required<HomePageContent> = {
  seoTitle: "AI Dönüşümü ve AI Uygulamaları | WhiteGate",
  seoDescription:
    "WhiteGate şirketlerin AI dönüşümünü planlar; size özel AI uygulamaları ve agentlar geliştirir, ekibinizle kullanıma alır.",
  heroLead: "Şirketinizi",
  heroWords: ["ilk AI uygulaması", "AI asistanı", "iş otomasyonu"],
  heroTail: "taşıyoruz.",
  heroDescription:
    "Müşteri sorularını yanıtlayan, şirket bilgisini bulan ve ekibe işinde yardımcı olan AI uygulamaları geliştiriyoruz. Hangi uygulamayla başlayacağımızı birlikte belirliyor, ekibinizle kullanıma alıyoruz.",
  heroButtonLabel: "Uygunluk Görüşmesi",
  ctaTag: "Uygunluk Görüşmesi",
  ctaLead: "Şirketinizde AI'ın",
  ctaWords: ["ilk gerçek işini", "ilk uygulama alanını", "ekibinize ilk katkısını"],
  ctaTail: "birlikte bulalım.",
  ctaButtonLabel: "Uygunluk Görüşmesi",
  nokiaPhoneMessages: ["Rapor tamam", "Ekip haberdar", "Kontrol sende"],
  nokiaMobileLink: "Nokia 3310 fikrini keşfet ↗",
  nokiaCardTitle: "Nokia 3310 ile şirket yönetilir mi?",
  nokiaCardHint: "Şaka gibi. Sistem gerçek olabilir.",
  nokiaCardAction: "Oku",
  scenarioCards: [
    { number: "01", team: "SATIŞ", title: "Teklif talebi masada kalmaz", text: "E-posta veya formdan gelen isteği okur, eksik bilgiyi toplar ve teklif taslağını hazırlar. Fiyatı yetkili kişi onaylar.", steps: "Talep → Taslak → Onay", image: "/gate-assets/scenario-inquiries-v2.webp", href: "/vaka-analizleri/tekliften-teslime-takip" },
    { number: "02", team: "MÜŞTERİ", title: "Soruyu bilen yerden yanıtlar", text: "Ürün ve hizmet bilgisinde cevabı bulur. Rutin soruyu yanıtlar; özel fiyat veya emin olmadığı konuyu ekibe taşır.", steps: "Soru → Doğru bilgi → Yanıt", image: "/gate-assets/scenario-knowledge-v2.webp", href: "/vaka-analizleri/ai-agent-sistemi" },
    { number: "03", team: "OPERASYON", title: "Bugün neresi gecikiyor?", text: "Görev ve teslim kayıtlarını bir araya getirir. Yaklaşan tarihi, bekleyen onayı ve sıradaki işi sahibine gösterir.", steps: "Kayıt → Gecikme uyarısı → Aksiyon", image: "/gate-assets/scenario-operations-v2.webp", href: "/vaka-analizleri/operasyon-paneli" },
    { number: "04", team: "İŞ AKIŞI", title: "Talepler doğru yere gider", text: "Gelen mesajı konusuna göre ayırır, ilgili ekibe ulaştırır ve takip edilmesi gerekenleri görünür tutar.", steps: "Mesaj → Sınıflandırma → Ekip", image: "/gate-assets/scenario-routing-v2.webp", href: "/vaka-analizleri/otomasyon-ve-entegrasyon" },
  ],
};
