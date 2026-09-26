"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./WhiteGateCalmHero.module.css";

const VIDEO_URL = "/gate-assets/whitegate-calm-loop-tr.mp4";

const phoneMessages = ["Rapor tamam", "Ekip haberdar", "Kontrol sende"];
const heroGridCells = Array.from({ length: 330 }, (_, index) => index);
const cloudPixels = [
  [-1, -1, "edge"], [-1, 0, "core"],
  [0, -2, "edge"], [0, -1, "core"], [0, 0, "core"], [0, 1, "edge"],
] as const;

function CloudGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cells = Array.from(grid.children) as HTMLElement[];
    let activeIndex = -1;
    let activeCells: HTMLElement[] = [];

    const clearCloud = () => {
      activeCells.forEach((cell) => cell.classList.remove(styles.cloudCore, styles.cloudEdge));
      activeCells = [];
      activeIndex = -1;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cloud-cell]") : null;
      if (!target || !grid.contains(target)) return clearCloud();

      const index = Number(target.dataset.cloudCell);
      if (index === activeIndex) return;
      clearCloud();
      activeIndex = index;

      const columns = window.innerWidth <= 1300 ? 20 : window.innerWidth <= 1600 ? 24 : 30;
      const row = Math.floor(index / columns);
      const column = index % columns;
      cloudPixels.forEach(([rowOffset, columnOffset, strength]) => {
        const nextRow = row + rowOffset;
        const nextColumn = column + columnOffset;
        if (nextRow < 0 || nextRow >= 11 || nextColumn < 0 || nextColumn >= columns) return;
        const cell = cells[nextRow * columns + nextColumn];
        cell.classList.add(strength === "core" ? styles.cloudCore : styles.cloudEdge);
        activeCells.push(cell);
      });
    };

    grid.addEventListener("pointermove", onPointerMove);
    grid.addEventListener("pointerleave", clearCloud);
    window.addEventListener("resize", clearCloud);
    return () => {
      grid.removeEventListener("pointermove", onPointerMove);
      grid.removeEventListener("pointerleave", clearCloud);
      window.removeEventListener("resize", clearCloud);
      clearCloud();
    };
  }, []);

  return (
    <div className={styles.hoverGrid} ref={gridRef} aria-hidden="true">
      {heroGridCells.map((cell) => <span className={styles.gridCell} data-cloud-cell={cell} key={cell} />)}
    </div>
  );
}

function TypingMessages() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const message = phoneMessages[messageIndex];
    const delay = !deleting && length === message.length ? 2000 : deleting ? 50 : 100;
    const timer = window.setTimeout(() => {
      if (deleting && length === 0) {
        setMessageIndex((current) => (current + 1) % phoneMessages.length);
        setDeleting(false);
      } else if (!deleting && length === message.length) {
        setDeleting(true);
      } else {
        setLength((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, length, messageIndex, reduceMotion]);

  const text = reduceMotion ? phoneMessages[2] : phoneMessages[messageIndex].slice(0, length);

  return (
    <span className={styles.phoneMessage} aria-hidden="true">
      {text}<span className={styles.cursor} />
    </span>
  );
}

export function WhiteGateCalmHero() {
  return (
    <section className={styles.hero} aria-labelledby="whitegate-calm-title">
      <div className={styles.scene} aria-hidden="true">
        <video className={styles.video} autoPlay loop muted playsInline preload="metadata" poster="/gate-assets/whitegate-calm-poster-tr.webp">
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <TypingMessages />
        <span className={styles.readLabel}>Oku</span>
      </div>
      <CloudGrid />
      <div className={styles.content}>
        <h1 id="whitegate-calm-title">İşiniz ilerlesin.<br />Siz nefes alın.</h1>
        <p>Şirketinizi AI çağına taşıyoruz. Size özel AI uygulamaları ve agentlar geliştiriyor, ekibinizle kullanıma alıyoruz.</p>
        <Link className={styles.mobileCaseLink} href="/yayinlar/nokia-3310-ile-sirket-yonetmek">Nokia 3310 fikrini keşfet ↗</Link>
      </div>
      <Link className={styles.caseCard} href="/yayinlar/nokia-3310-ile-sirket-yonetmek" aria-label="Nokia 3310 ile şirket yönetmek: yazıyı oku">
        <img src="/gate-assets/nokia-sms-doodle.webp" alt="" width="650" height="464" />
        <strong>Nokia 3310 ile<br />şirket yönetilir mi?</strong>
        <span className={styles.caseHint}>Şaka gibi. Sistem gerçek olabilir.</span>
        <span className={styles.caseAction}>Oku <span aria-hidden="true">↗</span></span>
      </Link>
    </section>
  );
}
