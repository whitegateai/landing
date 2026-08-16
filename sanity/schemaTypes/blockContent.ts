import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "İçerik",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Metin", value: "normal" },
        { title: "Başlık 2", value: "h2" },
        { title: "Başlık 3", value: "h3" },
        { title: "Alıntı", value: "blockquote" },
      ],
      marks: {
        annotations: [
          {
            name: "link",
            title: "Bağlantı",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "Adres",
                type: "url",
                validation: (rule) => rule.required().uri({ scheme: ["http", "https", "mailto"] }),
              }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternatif metin",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({ name: "caption", title: "Açıklama", type: "string" }),
      ],
    }),
  ],
});
