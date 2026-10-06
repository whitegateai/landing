"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./SiteModeSwitch.module.css";

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
  const wrapper = useRef<HTMLDivElement>(null);
  const [nearFooter, setNearFooter] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

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
  const targetMachineHref = mode === "human" && pathname ? pairedMachineHref(pathname, machineHref) : machineHref;

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
    <nav className={styles.switch} aria-label="Site görünümü">
      {mode === "human" ? <span lang="en" aria-current="page">HUMAN</span> : <a href={humanHref} lang="en" tabIndex={footerHidden ? -1 : undefined}>HUMAN</a>}
      {mode === "machine" ? <span lang="en" aria-current="page">MACHINE</span> : <a href={targetMachineHref} lang="en" tabIndex={footerHidden ? -1 : undefined}>MACHINE</a>}
    </nav>
  </div>;
}
