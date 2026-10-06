import "server-only";
import { cache } from "react";
import type { Locale } from "./i18n";

// React cache is scoped to this server render; the English route seeds it before
// rendering the shared components. Turkish pages retain their static routes.
const localeState = cache(() => ({ locale: "tr" as Locale }));
export function setLocale(locale: Locale) { localeState().locale = locale; }
export function getLocale(): Locale { return localeState().locale; }
