import { cloneElement, isValidElement, type ReactNode, type ReactElement } from "react";
import { localizeData, localizedHref, translate, type Locale } from "./i18n";

export function localizeTree(node: ReactNode, locale: Locale): ReactNode {
  if (locale === "tr") return node;
  if (typeof node === "string") return translate(node, locale);
  if (Array.isArray(node)) return node.map(child => localizeTree(child, locale));
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, unknown>>;
  const props: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(element.props)) {
    if (key === "children") props[key] = localizeTree(value as ReactNode, locale);
    else if (key === "href" && typeof value === "string") props[key] = localizedHref(value, locale);
    else if (["alt", "title", "aria-label", "placeholder", "data-wait", "data-hiw-text"].includes(key) && typeof value === "string") props[key] = translate(value, locale);
    else if (key === "value" && element.type === "input" && element.props.type === "submit" && typeof value === "string") props[key] = translate(value, locale);
    else if (key === "data-words" && typeof value === "string") props[key] = value.split(",").map(word => translate(word, locale)).join(",");
    else if (["content", "messages", "document", "posts", "cases"].includes(key)) props[key] = localizeData(value, locale);
    else if (key === "dangerouslySetInnerHTML" && element.type === "script" && element.props.type === "application/ld+json") {
      const source = value as { __html: string };
      const json = localizeData(JSON.parse(source.__html), locale);
      props[key] = { __html: JSON.stringify(json).replace(/"inLanguage":"tr-TR"/g, '"inLanguage":"en-US"').replace(/</g, "\\u003c") };
    }
  }
  return cloneElement(element, props);
}
