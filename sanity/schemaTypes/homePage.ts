import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Ana Sayfa",
  type: "document",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO başlığı",
      type: "string",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO açıklaması",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: "heroLead",
      title: "Hero ilk satır",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroWords",
      title: "Hero dönüşümlü ifadeler",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1).unique(),
    }),
    defineField({
      name: "heroTail",
      title: "Hero son satır",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero açıklaması",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroButtonLabel",
      title: "Hero butonu",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "ctaTag", title: "Alt CTA etiketi", type: "string" }),
    defineField({ name: "ctaLead", title: "Alt CTA ilk satır", type: "string" }),
    defineField({
      name: "ctaWords",
      title: "Alt CTA dönüşümlü ifadeler",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.unique(),
    }),
    defineField({ name: "ctaTail", title: "Alt CTA son satır", type: "string" }),
    defineField({ name: "ctaButtonLabel", title: "Alt CTA butonu", type: "string" }),
  ],
  initialValue: {
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
  },
  preview: {
    prepare: () => ({ title: "Ana Sayfa" }),
  },
});
