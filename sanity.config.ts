"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "whitegate",
  title: "WhiteGate İçerik",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("İçerik")
          .items([
            S.listItem()
              .title("Ana Sayfa")
              .child(S.document().schemaType("homePage").documentId("homePage")),
            S.divider(),
            S.documentTypeListItem("blogPost").title("Blog Yazıları"),
            S.documentTypeListItem("caseStudy").title("Vakalar / Sistemler"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => schemaType !== "homePage"),
  },
});
