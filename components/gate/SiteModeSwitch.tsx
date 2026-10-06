"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./SiteModeSwitch.module.css";
import { useLocale } from "./LocaleProvider";
import { localizedHref, unlocalizedPath } from "@/lib/i18n";
import { installMachineExit } from "./machine-exit";

const servicePaths = new Set([
  "/hizmetler/ozel-yazilim-gelistirme",
  "/hizmetler/yapay-zeka-otomasyonu",
  "/hizmetler/ai-agent-gelistirme",
  "/hizmetler/sistem-entegrasyonu",
  "/hizmetler/n8n-otomasyon",
]);

function pairedMachineHref(pathname: string, fallback: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === "/") return "/ai/home";
  if (path === "/hizmetler" || servicePaths.has(path)) return `/ai${path}`;
  if (path === "/vaka-analizleri" || path.startsWith("/vaka-analizleri/")) return "/ai/senaryolar";
  if (path === "/iletisim") return "/ai/iletisim";
  return fallback;
}

export function SiteModeSwitch({ mode, humanHref = "/", machineHref = "/ai/home" }: {
  mode: "human" | "machine";
  humanHref?: string;
  machineHref?: string;
}) {
  const pathname = usePathname();
  const locale = useLocale();
  const wrapper = useRef<HTMLDivElement>(null);
  const [nearFooter, setNearFooter] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (mode === "machine") return installMachineExit(document, window);
  }, [mode]);

  useEffect(() => {
    if (mode !== "human") return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      setNearFooter(scrollRange > 120 && scrollRange - window.scrollY < 120);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    observer?.observe(document.body);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [mode, pathname]);

  const footerHidden = nearFooter && !hasFocus;
  const targetMachineHref = localizedHref(mode === "human" && pathname ? pairedMachineHref(unlocalizedPath(pathname), machineHref) : machineHref, locale);
  const humanLabel = locale === "tr" ? "İNSAN" : "HUMAN";
  const machineLabel = locale === "tr" ? "MAKİNE" : "MACHINE";

  return <div
    ref={wrapper}
    className={`${styles.wrapper}${footerHidden ? ` ${styles.footerHidden}` : ""}`}
    data-site-mode-switch=""
    data-mode={mode}
    aria-hidden={footerHidden || undefined}
    onFocusCapture={() => setHasFocus(true)}
    onBlurCapture={event => {
      if (!(event.relatedTarget instanceof Node) || !wrapper.current?.contains(event.relatedTarget)) setHasFocus(false);
    }}
  >
    <nav className={styles.switch} aria-label={locale === "tr" ? "Site görünümü" : "Site view"}>
      {mode === "human" ? <span aria-current="page">{humanLabel}</span> : <a data-human-return="" href={localizedHref(humanHref, locale)} tabIndex={footerHidden ? -1 : undefined}>{humanLabel}</a>}
      {mode === "machine" ? <span aria-current="page">{machineLabel}</span> : <a href={targetMachineHref} tabIndex={footerHidden ? -1 : undefined}>{machineLabel}</a>}
    </nav>
  </div>;
}
