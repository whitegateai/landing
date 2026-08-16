import { defineField, defineType } from "sanity";

export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Başvuru",
  type: "document",
  fields: [
    defineField({ name: "firstName", title: "Ad", type: "string", readOnly: true }),
    defineField({ name: "lastName", title: "Soyad", type: "string", readOnly: true }),
    defineField({ name: "email", title: "E-posta", type: "string", readOnly: true }),
    defineField({ name: "message", title: "Mesaj", type: "text", rows: 8, readOnly: true }),
    defineField({
      name: "status",
      title: "Durum",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "Yeni", value: "new" },
          { title: "İletişime geçildi", value: "contacted" },
          { title: "Kapatıldı", value: "closed" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "submittedAt", title: "Başvuru tarihi", type: "datetime", readOnly: true }),
    defineField({ name: "source", title: "Kaynak", type: "string", readOnly: true }),
  ],
  orderings: [{ title: "En yeni", name: "submittedAtDesc", by: [{ field: "submittedAt", direction: "desc" }] }],
  preview: {
    select: { firstName: "firstName", lastName: "lastName", email: "email", status: "status" },
    prepare: ({ firstName, lastName, email, status }) => ({
      title: `${firstName ?? ""} ${lastName ?? ""}`.trim() || "İsimsiz başvuru",
      subtitle: `${status === "new" ? "YENİ · " : ""}${email ?? "E-posta yok"}`,
    }),
  },
});
