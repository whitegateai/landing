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
    seoTitle: "WhiteGate | Özel Yazılım ve Yapay Zeka Sistemleri",
    seoDescription:
      "WhiteGate, işletmeler için özel yazılım ve yapay zeka sistemleri kurar. AI agentları, otomasyonlar, entegrasyonlar, web/mobil uygulamalar ve operasyon panellerini mevcut araçlarınıza bağlayıp canlıya alır.",
    heroLead: "Dağılan işleri",
    heroWords: ["Özel Yazılım", "AI Agent", "Otomasyon"],
    heroTail: "ile canlı kullanıma alırız.",
    heroDescription:
      "Teklif, teslimat, müşteri süreci, raporlama veya belge kontrolü dağınıksa önce akışı netleştiririz. Gereken yazılımı, otomasyonu, AI agentı veya dashboard'u kurup mevcut araçlarınıza bağlarız.",
    heroButtonLabel: "Görüşme Planla",
    ctaTag: "Başlangıç görüşmesi",
    ctaLead: "Akışı netleştir",
    ctaWords: ["sisteme çevir", "ölçülebilir yap", "canlıya al"],
    ctaTail: "birlikte kuralım.",
    ctaButtonLabel: "görüşme planla",
  },
  preview: {
    prepare: () => ({ title: "Ana Sayfa" }),
  },
});
