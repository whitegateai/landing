import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Vaka / Sistem",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Başlık", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Adres",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kısa açıklama",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "tags",
      title: "Etiketler",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1).max(4).unique(),
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın tarihi",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak görseli",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternatif metin", type: "string", validation: (rule) => rule.required() })],
    }),
    defineField({ name: "body", title: "Vaka içeriği", type: "blockContent", validation: (rule) => rule.required() }),
  ],
  orderings: [{ title: "En yeni", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", tags: "tags", media: "coverImage" },
    prepare: ({ title, tags, media }) => ({ title, subtitle: tags?.join(" · "), media }),
  },
});
