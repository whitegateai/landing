import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Yazısı",
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
    defineField({ name: "category", title: "Kategori", type: "string", validation: (rule) => rule.required() }),
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
    defineField({ name: "body", title: "Yazı", type: "blockContent", validation: (rule) => rule.required() }),
  ],
  orderings: [{ title: "En yeni", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
