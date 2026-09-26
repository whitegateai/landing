import type { HomePageContent } from "@/sanity/lib/homePage";

// WhiteGate's accepted public language is controlled from SLAB (WG-015/WG-017).
// Keep this source ahead of the older Sanity homePage document until the CMS is
// intentionally resynchronised with the same wording.
export const canonicalHomePageContent: Required<HomePageContent> = {
  seoTitle: "AI Dönüşümü ve AI Uygulamaları | WhiteGate",
  seoDescription:
    "WhiteGate şirketlerin AI dönüşümünü planlar; size özel AI uygulamaları ve agentlar geliştirir, ekibinizle kullanıma alır.",
  heroLead: "Şirketinizi",
  heroWords: ["AI çağına", "AI agentlara", "AI iş akışlarına", "AI uygulamalarına", "doğru sisteme"],
  heroTail: "taşıyoruz.",
  heroDescription:
    "Şirketinizin AI dönüşümünü yapıyoruz. Önce AI’ın hangi işleri üstlenebileceğini belirliyoruz. Ardından size özel AI asistanları ve agentlar geliştirip kullandığınız araçlara bağlıyoruz. Ekibinizle kullanıma alıyor, ihtiyaçlarınıza göre geliştiriyoruz.",
  heroButtonLabel: "Uygunluk Görüşmesi",
  ctaTag: "Uygunluk Görüşmesi",
  ctaLead: "AI dönüşümünüz için",
  ctaWords: ["doğru başlangıcı"],
  ctaTail: "birlikte belirleyelim.",
  ctaButtonLabel: "Uygunluk Görüşmesi",
};
