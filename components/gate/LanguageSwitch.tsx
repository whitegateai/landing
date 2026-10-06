"use client";
import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { localizedHref } from "@/lib/i18n";
import styles from "./LanguageSwitch.module.css";

export function LanguageSwitch({ machine = false }: { machine?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname() || "/";
  return <nav className={`${styles.switch}${machine ? ` ${styles.machine}` : ""}`} aria-label={locale === "tr" ? "Site dili" : "Site language"} data-language-switch="">
    {(["tr", "en"] as const).map(language => language === locale
      ? <span key={language} aria-current="page" lang={language}>{language.toUpperCase()}</span>
      : <a key={language} href={localizedHref(pathname, language)} hrefLang={language} lang={language} aria-label={language === "tr" ? "Türkçe" : "English"} onClick={event => {
          event.currentTarget.href = localizedHref(window.location.pathname, language) + window.location.search + window.location.hash;
        }}>{language.toUpperCase()}</a>)}
  </nav>;
}
