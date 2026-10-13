"use client";

import { useEffect, useRef } from "react";
import styles from "./TeamPortrait.module.css";

type Props = { src: string; avatarSrc: string; alt: string };
type Point = { x: number; y: number };
type Pixel = { column: number; row: number; time: number; strength: number };

export function TeamPortrait({ src, avatarSrc, alt }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !frame || !context) return;

    const finePointer = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const avatar = new Image();
    const pixels = new Map<string, Pixel>();
    let width = 0;
    let height = 0;
    let cellSize = 14;
    let animation = 0;
    let previous: Point | null = null;
    let loaded = false;
    let requested = false;
    const lifetime = 1500;

    const clear = () => {
      cancelAnimationFrame(animation);
      animation = 0;
      pixels.clear();
      previous = null;
      context.clearRect(0, 0, width, height);
    };

    const resize = () => {
      clear();
      width = frame.clientWidth;
      height = frame.clientHeight;
      cellSize = Math.max(12, Math.min(18, width / 26));
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const paint = (now: number) => {
      animation = 0;
      context.clearRect(0, 0, width, height);
      if (!loaded || !width || !height) return;

      // Match object-fit: cover so each square reveals the same avatar layer.
      const scale = Math.max(width / avatar.naturalWidth, height / avatar.naturalHeight);
      const imageWidth = avatar.naturalWidth * scale;
      const imageHeight = avatar.naturalHeight * scale;
      const imageX = (width - imageWidth) / 2;
      const imageY = (height - imageHeight) / 2;
      for (const [key, pixel] of pixels) {
        const age = now - pixel.time;
        if (!reducedMotion.matches && age >= lifetime) {
          pixels.delete(key);
          continue;
        }
        const fade = reducedMotion.matches ? 1 : Math.pow(1 - Math.max(0, age - 200) / (lifetime - 200), 1.4);
        context.save();
        context.globalAlpha = pixel.strength * fade;
        context.beginPath();
        context.rect(pixel.column * cellSize, pixel.row * cellSize, cellSize, cellSize);
        context.clip();
        context.drawImage(avatar, imageX, imageY, imageWidth, imageHeight);
        context.restore();
      }
      if (pixels.size && !reducedMotion.matches) animation = requestAnimationFrame(paint);
    };

    const stamp = (point: Point, now: number) => {
      const column = Math.floor(point.x / cellSize);
      const row = Math.floor(point.y / cellSize);
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const distance = Math.hypot(dx, dy);
          const x = column + dx;
          const y = row + dy;
          if (distance > 4 || x < 0 || y < 0 || x * cellSize >= width || y * cellSize >= height) continue;
          // Break up the edge into discrete pixels, keeping a readable center.
          if (distance > 2.5 && (x + y) % 2 === 0) continue;
          pixels.set(`${x}:${y}`, { column: x, row: y, time: now, strength: distance < 2.5 ? 1 : .8 });
        }
      }
    };

    const move = (event: PointerEvent) => {
      if (!finePointer.matches || event.pointerType === "touch") return;
      if (!requested) {
        requested = true;
        avatar.src = avatarSrc;
      }
      const bounds = frame.getBoundingClientRect();
      const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      const now = performance.now();
      if (reducedMotion.matches) pixels.clear();
      if (previous && !reducedMotion.matches) {
        const steps = Math.ceil(Math.hypot(point.x - previous.x, point.y - previous.y) / (cellSize / 2));
        for (let step = 1; step < steps; step++) {
          stamp({ x: previous.x + (point.x - previous.x) * step / steps, y: previous.y + (point.y - previous.y) * step / steps }, now);
        }
      }
      stamp(point, now);
      previous = point;
      if (!animation && loaded) animation = requestAnimationFrame(paint);
    };

    const leave = () => {
      previous = null;
      if (reducedMotion.matches) clear();
    };
    avatar.onload = () => {
      loaded = true;
      if (pixels.size && !animation) animation = requestAnimationFrame(paint);
    };
    avatar.onerror = clear;
    const observer = new ResizeObserver(resize);
    observer.observe(frame);
    resize();
    frame.addEventListener("pointermove", move);
    frame.addEventListener("pointerenter", move);
    frame.addEventListener("pointerleave", leave);
    frame.addEventListener("pointercancel", clear);
    finePointer.addEventListener("change", clear);
    reducedMotion.addEventListener("change", clear);
    return () => {
      clear();
      observer.disconnect();
      avatar.onload = null;
      avatar.onerror = null;
      frame.removeEventListener("pointermove", move);
      frame.removeEventListener("pointerenter", move);
      frame.removeEventListener("pointerleave", leave);
      frame.removeEventListener("pointercancel", clear);
      finePointer.removeEventListener("change", clear);
      reducedMotion.removeEventListener("change", clear);
    };
  }, [avatarSrc]);

  return <>
    <img loading="lazy" src={src} alt={alt} className="team-card-img" />
    <canvas ref={canvasRef} className={styles.reveal} aria-hidden="true" />
  </>;
}
