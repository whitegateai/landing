"use client";

import { useEffect, useRef } from "react";
import { gatePageData, type GateScript } from "./gatePageData";

const TRANSITION_STORAGE_KEY = "gate-page-transition";
const TYPEWRITER_SCRIPT_MARKER = "gsap.utils.toArray('[data-typewriter]')";
const TYPEWRITER_SCRIPT = `
window.addEventListener('load', function () {
  gsap.utils.toArray('[data-typewriter]').forEach(el => {
    const words = (el.dataset.words || '').split(',').map(word => word.trim()).filter(Boolean)
    if (!words.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = words[0]
      return
    }

    const TYPE_SPEED = 50
    const DELETE_SPEED = 35
    const HOLD_AT_END = 800
    let wordIndex = 0
    let charIndex = 0

    const color = getComputedStyle(el).color
    el.textContent = ''
    const cursor = document.createElement('span')
    cursor.setAttribute('style', 'display:inline-block;width:.55em;height:1em;background:' + color + ';vertical-align:middle;margin-left:2px;position:relative;top:-.05em;opacity:0')
    const text = document.createTextNode('')
    el.append(text, cursor)

    function type() {
      const word = words[wordIndex]
      charIndex += 1
      text.textContent = word.slice(0, charIndex - 1)
      cursor.textContent = word[charIndex - 1] || ' '
      cursor.style.opacity = '1'
      if (charIndex < word.length) return setTimeout(type, TYPE_SPEED)
      setTimeout(function () {
        text.textContent = word
        cursor.textContent = ' '
        setTimeout(erase, HOLD_AT_END)
      }, TYPE_SPEED)
    }

    function erase() {
      const word = words[wordIndex]
      charIndex -= 1
      text.textContent = word.slice(0, charIndex)
      cursor.textContent = ' '
      cursor.style.opacity = '1'
      if (charIndex > 0) return setTimeout(erase, DELETE_SPEED)
      wordIndex = (wordIndex + 1) % words.length
      setTimeout(type, 200)
    }

    setTimeout(type, parseInt(el.dataset.delay) || 0)
  })
})
`;

function setScriptAttrs(script: HTMLScriptElement, attrs: Record<string, string> = {}) {
  for (const [key, value] of Object.entries(attrs)) {
    script.setAttribute(key === "crossOrigin" ? "crossorigin" : key, value);
  }
}

function removeWebflowBadge() {
  document.querySelectorAll(".w-webflow-badge").forEach((item) => item.remove());
}

function delay(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms));
}

function animateSquares(items: HTMLElement[], from: number, to: number) {
  const duration = 140;
  const stagger = 0.8;
  if (!("animate" in document.body)) {
    items.forEach((item) => {
      item.style.opacity = String(to);
    });
    return delay(duration + items.length * stagger);
  }

  return Promise.all(
    items.map(
      (item, index) =>
        new Promise<void>((resolve) => {
          const animation = item.animate([{ opacity: from }, { opacity: to }], {
            delay: index * stagger,
            duration,
            easing: "cubic-bezier(.22,1,.36,1)",
            fill: "forwards",
          });
          animation.finished
            .catch(() => undefined)
            .finally(() => {
              item.style.opacity = String(to);
              resolve();
            });
        }),
    ),
  ).then(() => undefined);
}

function shuffled<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function createFallbackPreload() {
  const preload = document.createElement("div");
  preload.className = "preload";
  for (let rowIndex = 0; rowIndex < 11; rowIndex += 1) {
    const row = document.createElement("div");
    row.className = "preload-row";
    for (let columnIndex = 0; columnIndex < 10; columnIndex += 1) {
      const square = document.createElement("div");
      square.className = "preload-square";
      row.appendChild(square);
    }
    preload.appendChild(row);
  }
  return preload;
}

function markTransitionReveal() {
  try {
    window.sessionStorage.setItem(TRANSITION_STORAGE_KEY, "1");
  } catch {
    // Ignore storage failures; navigation still works without the reveal handoff.
  }
}

function hasTransitionReveal() {
  try {
    return window.sessionStorage.getItem(TRANSITION_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function clearTransitionReveal() {
  try {
    window.sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
  } catch {
    // Ignore storage failures; the visual fallback still reveals the page.
  }
}

function getTransitionPreload() {
  let preload = document.getElementById("gate-transition-preload") as HTMLElement | null;
  if (preload) return preload;

  const source = document.querySelector<HTMLElement>(".preload");
  preload = (source?.cloneNode(true) as HTMLElement | undefined) ?? createFallbackPreload();
  preload.id = "gate-transition-preload";
  preload.setAttribute("aria-hidden", "true");
  preload.style.display = "none";
  preload.style.inset = "0";
  preload.style.position = "fixed";
  preload.style.width = "100vw";
  preload.style.height = "100vh";
  preload.style.overflow = "hidden";
  preload.style.zIndex = "2147483000";
  preload.style.pointerEvents = "none";
  document.body.appendChild(preload);
  return preload;
}

function hidePagePreloadSquares() {
  document.querySelectorAll<HTMLElement>(".preload .preload-square").forEach((item) => {
    if (item.closest("#gate-transition-preload")) return;
    item.style.opacity = "0";
    item.style.transform = "translate3d(0px, 0px, 0px)";
  });
}

function holdPreloadCovered() {
  const preload = getTransitionPreload();
  const squares = Array.from(preload.querySelectorAll<HTMLElement>(".preload-square"));
  if (squares.length === 0) return null;

  document.documentElement.classList.add("gate-is-transitioning");
  preload.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
  preload.style.display = "flex";

  squares.forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "translate3d(0px, 0px, 0px)";
  });

  return { preload, squares };
}

async function playPreloadCover() {
  const preload = getTransitionPreload();
  const squares = Array.from(preload.querySelectorAll<HTMLElement>(".preload-square"));
  if (squares.length === 0) return;

  document.documentElement.classList.add("gate-is-transitioning");

  preload.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
  preload.style.display = "flex";

  squares.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translate3d(0px, 0px, 0px)";
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    squares.forEach((item) => {
      item.style.opacity = "1";
    });
    return;
  }

  await animateSquares(shuffled(squares), 0, 1);
}

async function playPreloadReveal() {
  const held = holdPreloadCovered();
  if (!held) return;

  hidePagePreloadSquares();
  await delay(40);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    held.squares.forEach((item) => {
      item.style.opacity = "0";
    });
  } else {
    await animateSquares(shuffled(held.squares), 1, 0);
  }

  held.preload.style.display = "none";
  document.documentElement.classList.remove("gate-is-transitioning");
  hidePagePreloadSquares();
}

function forcePreloadRevealComplete() {
  const preload = document.getElementById("gate-transition-preload") as HTMLElement | null;
  if (preload) {
    preload.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
    preload.querySelectorAll<HTMLElement>(".preload-square").forEach((item) => {
      item.style.opacity = "0";
    });
    preload.style.display = "none";
  }
  document.documentElement.classList.remove("gate-is-transitioning");
  hidePagePreloadSquares();
}

function lockHeaderScrambleWidths() {
  document.querySelectorAll<HTMLElement>(".navbar [data-scramble-hover-text]").forEach((item) => {
    const width = item.getBoundingClientRect().width;
    if (width <= 0) return;
    item.style.display = "inline-block";
    item.style.width = `${Math.ceil(width)}px`;
    item.style.overflow = "hidden";
    item.style.whiteSpace = "nowrap";
  });
}

function syncHeadingTrailingSlashes() {
  document.querySelectorAll<HTMLElement>("h2.heading-style-h3").forEach((heading) => {
    const text = heading.querySelector<HTMLElement>(":scope > [data-scramble]");
    const slashes = Array.from(heading.querySelectorAll<HTMLElement>(":scope > .heading-slash"));
    if (!text || slashes.length < 2) return;

    const firstSlash = slashes[0];
    const trailingSlash = slashes[slashes.length - 1];
    const chars = Array.from(text.querySelectorAll<HTMLElement>("span[data-w]"));
    if (chars.length === 0) {
      trailingSlash.removeAttribute("style");
      return;
    }

    const visibleChars = chars.filter((item) => {
      const rect = item.getBoundingClientRect();
      return rect.width > 0.5 && Number(getComputedStyle(item).opacity) > 0.05;
    });
    const anchor = visibleChars.at(-1) ?? firstSlash;
    const headingRect = heading.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(heading).fontSize) * 0.16;

    heading.style.position = "relative";
    trailingSlash.style.position = "absolute";
    trailingSlash.style.left = "0";
    trailingSlash.style.top = "0";
    trailingSlash.style.pointerEvents = "none";
    trailingSlash.style.transform = `translate3d(${anchorRect.right - headingRect.left + gap}px, ${
      anchorRect.top - headingRect.top
    }px, 0)`;
  });
}

function installHeadingTrailingSlashSync() {
  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      syncHeadingTrailingSlashes();
    });
  };

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.target instanceof Element && mutation.target.closest("h2.heading-style-h3"))) {
      schedule();
    }
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["style"], childList: true, subtree: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("scroll", schedule, { passive: true });
  schedule();

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("resize", schedule);
    window.removeEventListener("scroll", schedule);
  };
}

function installHowItWorksScroll() {
  const rays = Array.from(document.querySelectorAll<HTMLElement>(".hiw-ray"));
  if (rays.length === 0) return () => undefined;

  let frame = 0;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const fullText = (item: HTMLElement) => {
    if (!item.dataset.hiwText) {
      item.dataset.hiwText = item.textContent ?? "";
      const height = item.getBoundingClientRect().height;
      if (height > 0) item.style.minHeight = `${Math.ceil(height)}px`;
    }
    return item.dataset.hiwText;
  };

  const setCard = (card: HTMLElement, index: number, active: boolean, lineProgress: number, textProgress: number) => {
    card.querySelector(".hiw-card-inner")?.classList.toggle("active", active);
    card.querySelectorAll<HTMLElement>(".hiw-card-number").forEach((number) => {
      number.classList.toggle("active", active && number.textContent?.includes(String(index + 1).padStart(3, "0")));
    });
    card.querySelector(".hiw-card-title")?.classList.toggle("active", active);
    card.querySelectorAll(".hiw-card-img, .hiw-card-img2").forEach((image) => image.classList.toggle("active", active));
    card.querySelector(".hiw-card-process-dot")?.classList.toggle("active", active || lineProgress >= 1);

    const line = card.querySelector<HTMLElement>(".hiw-card-process-line");
    if (line) line.style.width = `${Math.round(clamp01(lineProgress) * 100)}%`;

    const desc = card.querySelector<HTMLElement>(".hiw-card-desc");
    if (!desc) return;
    const text = fullText(desc);
    const typed = reducedMotion.matches ? 1 : clamp01((textProgress - 0.08) / 0.68);
    desc.textContent = active ? text.slice(0, Math.max(1, Math.ceil(text.length * typed))) : text;
    desc.classList.toggle("active", active);
  };

  const sync = () => {
    const viewport = window.innerHeight;
    const narrow = window.matchMedia("(max-width: 991px)").matches;

    rays.forEach((ray) => {
      const cards = Array.from(ray.querySelectorAll<HTMLElement>(".hiw-card-wrap > .hiw-card"));
      const slides = Array.from(ray.querySelectorAll<HTMLElement>(".hiw-slide"));
      const count = cards.length || slides.length;
      if (count === 0) return;

      const rect = ray.getBoundingClientRect();
      const startOffset = narrow ? viewport * 0.65 : 0;
      const range = Math.max(ray.offsetHeight - viewport + startOffset, viewport * 0.75);
      const progress = clamp01((startOffset - rect.top) / range);
      const scaled = progress * count;
      const activeIndex = progress >= 1 ? count - 1 : Math.min(count - 1, Math.floor(scaled));
      const segmentProgress = progress >= 1 ? 1 : scaled - activeIndex;

      cards.forEach((card, index) => {
        setCard(card, index, index === activeIndex, index < activeIndex ? 1 : index === activeIndex ? segmentProgress : 0, segmentProgress);
      });

      slides.forEach((slide, index) => {
        const active = index === activeIndex;
        slide.style.opacity = active ? "1" : "0";
        slide.style.pointerEvents = active ? "auto" : "none";
        slide.style.zIndex = String(active ? count + 1 : count - index);
        const card = slide.querySelector<HTMLElement>(".hiw-card");
        if (card) setCard(card, index, active, active ? segmentProgress : index < activeIndex ? 1 : 0, segmentProgress);
      });
    });
  };

  const schedule = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      sync();
    });
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  reducedMotion.addEventListener("change", schedule);
  schedule();

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    reducedMotion.removeEventListener("change", schedule);
  };
}

function installCapabilitiesAutoTabs() {
  const roots = Array.from(document.querySelectorAll<HTMLElement>(".capabilities-tabs"));
  const cleanups = roots
    .map((root) => {
      const links = Array.from(root.querySelectorAll<HTMLElement>(".capabilities-tab[data-w-tab]"));
      const panes = Array.from(root.querySelectorAll<HTMLElement>(".capabilities-tab-pane[data-w-tab]"));
      if (links.length < 2 || panes.length < 2) return null;

      const menu = root.querySelector<HTMLElement>(".capabilities-tabs-menu");
      const media = root.querySelector<HTMLElement>(".capabilities-grid-right.w-tab-content");
      let timer = 0;
      let heightFrame = 0;
      let index = Math.max(
        0,
        links.findIndex((link) => link.classList.contains("w--current")),
      );

      const syncMediaHeight = () => {
        const rects = links.map((link) => link.getBoundingClientRect()).filter((rect) => rect.height > 0);
        const top = Math.min(...rects.map((rect) => rect.top));
        const bottom = Math.max(...rects.map((rect) => rect.bottom));
        const height = Number.isFinite(top) && Number.isFinite(bottom) ? bottom - top : (menu?.getBoundingClientRect().height ?? 0);
        if (height > 0) media?.style.setProperty("--capabilities-media-height", `${Math.ceil(height)}px`);
      };

      const scheduleHeightSync = () => {
        if (heightFrame) return;
        heightFrame = window.requestAnimationFrame(() => {
          heightFrame = 0;
          syncMediaHeight();
        });
      };

      const sync = () => {
        const activeName = links[index]?.getAttribute("data-w-tab");
        links.forEach((link, linkIndex) => {
          const active = linkIndex === index;
          link.classList.toggle("w--current", active);
          link.querySelector(".capabilities-item-top")?.classList.toggle("current", active);
          link.querySelector(".capabilities-dot-wrap")?.classList.toggle("current", active);
          link.querySelector(".capabilities-item-bottom")?.classList.toggle("current", active);
        });
        panes.forEach((pane, paneIndex) => {
          pane.classList.toggle("w--tab-active", pane.getAttribute("data-w-tab") === activeName || paneIndex === index);
        });

        const video = panes[index]?.querySelector("video");
        if (video) {
          try {
            video.currentTime = 0;
          } catch {
            // Some browsers reject currentTime until metadata is available.
          }
          void video.play().catch(() => undefined);
        }

        scheduleHeightSync();
      };

      const getDelay = () => {
        const video = panes[index]?.querySelector("video");
        return video && Number.isFinite(video.duration) && video.duration > 1
          ? Math.min(Math.max(video.duration * 1000, 3500), 9000)
          : 5200;
      };

      const schedule = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          index = (index + 1) % links.length;
          sync();
          schedule();
        }, getDelay());
      };

      const onClick = (event: Event) => {
        const link = event.target instanceof Element ? event.target.closest<HTMLElement>(".capabilities-tab[data-w-tab]") : null;
        if (!link || !root.contains(link)) return;
        const nextIndex = links.indexOf(link);
        if (nextIndex < 0) return;
        index = nextIndex;
        sync();
        schedule();
      };

      root.addEventListener("click", onClick);
      window.addEventListener("resize", scheduleHeightSync);
      sync();
      schedule();

      return () => {
        window.clearTimeout(timer);
        if (heightFrame) window.cancelAnimationFrame(heightFrame);
        root.removeEventListener("click", onClick);
        window.removeEventListener("resize", scheduleHeightSync);
      };
    })
    .filter((cleanup): cleanup is () => void => Boolean(cleanup));

  return () => cleanups.forEach((cleanup) => cleanup());
}

type Gsap = {
  fromTo: (target: Element, from: Record<string, unknown>, to: Record<string, unknown>) => void;
  killTweensOf: (target: Element | Element[]) => void;
  set: (target: Element | Element[], vars: Record<string, unknown>) => void;
  to: (target: Element | Element[], vars: Record<string, unknown>) => void;
};

function installPixelEmbers() {
  const grid = document.querySelector<HTMLElement>(".hero .pixel-grid");
  if (!grid) return () => undefined;

  const colors = ["#003cff", "#0055ff", "#1670ff", "#4b91ff"];
  const pixels = Array.from(grid.querySelectorAll<HTMLElement>(".pixel-box-color"));
  const gsap = (window as typeof window & { gsap?: Gsap }).gsap;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!gsap || reducedMotion || pixels.length === 0) return () => undefined;

  const active = new Set<HTMLElement>();
  let timer = 0;
  let stopped = false;

  const pulse = () => {
    if (active.size >= 8) return;
    const ember = pixels[Math.floor(Math.random() * pixels.length)];
    if (!ember || active.has(ember)) return;

    active.add(ember);
    ember.classList.add("pixel-ember");
    gsap.set(ember, { opacity: 0, backgroundColor: colors[Math.floor(Math.random() * colors.length)] });
    gsap.to(ember, {
      opacity: 0.18 + Math.random() * 0.38,
      duration: 0.8 + Math.random() * 1.2,
      ease: "sine.inOut",
      onComplete: () =>
        gsap.to(ember, {
          opacity: 0,
          duration: 1.4 + Math.random() * 2.2,
          ease: "sine.inOut",
          onComplete: () => {
            active.delete(ember);
            ember.classList.remove("pixel-ember");
          },
        }),
    });
  };

  const schedule = () => {
    if (stopped) return;
    pulse();
    timer = window.setTimeout(schedule, 180 + Math.random() * 720);
  };
  schedule();

  return () => {
    stopped = true;
    window.clearTimeout(timer);
    gsap.killTweensOf(pixels);
    pixels.forEach((ember) => {
      ember.classList.remove("pixel-ember");
      ember.removeAttribute("style");
    });
  };
}

function installTestimonialScroll() {
  const section = document.querySelector<HTMLElement>(".testimonial");
  const mask = section?.querySelector<HTMLElement>(".testimonial-slider-mask");
  const slides = mask ? Array.from(mask.querySelectorAll<HTMLElement>(":scope > .testimonial-slide")) : [];
  const gsap = (window as typeof window & { gsap?: Gsap }).gsap;
  if (!section || !mask || slides.length < 2 || !gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => undefined;
  }

  let frame = 0;
  const sync = () => {
    frame = 0;
    const rect = section.getBoundingClientRect();
    const progress = clamp01((window.innerHeight * 0.88 - rect.top) / (rect.height + window.innerHeight * 0.68));
    const slideWidth = slides[0]?.getBoundingClientRect().width ?? 0;
    const maxTravel = Math.max(0, slideWidth * slides.length - mask.getBoundingClientRect().width);
    const travel = Math.min(maxTravel, window.innerWidth * (window.innerWidth < 768 ? 1.8 : 2.2));
    const start = window.innerWidth * 0.12;

    gsap.to(mask, {
      "--testimonial-scroll-x": `${start - (start + travel) * progress}px`,
      duration: 0.48,
      ease: "power2.out",
      overwrite: true,
    });
  };
  const schedule = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(sync);
  };

  mask.classList.add("testimonial-scroll-active");
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  schedule();

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    gsap.killTweensOf(mask);
    mask.classList.remove("testimonial-scroll-active");
    mask.style.removeProperty("--testimonial-scroll-x");
  };
}

function installFaqAccordions() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>(".faq-tabs")).map((root, rootIndex) => {
    const links = Array.from(root.querySelectorAll<HTMLElement>(".faq-tab-link"));
    if (links.length === 0) return () => undefined;

    const setActive = (nextIndex: number, animate: boolean) => {
      const gsap = (window as typeof window & { gsap?: Gsap }).gsap;
      links.forEach((link, index) => {
        const active = index === nextIndex;
        const answer = link.querySelector<HTMLElement>(".faq-answer-wrap");
        const icon = link.querySelector<HTMLElement>(".faq-btn-icon");
        link.classList.toggle("w--current", active);
        link.setAttribute("aria-expanded", String(active));
        answer?.setAttribute("aria-hidden", String(!active));
        if (!answer) return;

        if (!gsap || reducedMotion || !animate) {
          answer.style.height = active ? "auto" : "0px";
          answer.style.opacity = active ? "1" : "0";
          if (icon) icon.style.transform = active ? "rotate(45deg)" : "rotate(0deg)";
          return;
        }

        gsap.killTweensOf(answer);
        gsap.to(answer, {
          height: active ? "auto" : 0,
          opacity: active ? 1 : 0,
          duration: active ? 0.42 : 0.28,
          ease: "power2.out",
          overwrite: true,
        });
        if (icon) {
          gsap.killTweensOf(icon);
          gsap.to(icon, { rotation: active ? 45 : 0, duration: 0.28, ease: "power2.out", overwrite: true });
        }
      });
    };

    links.forEach((link, index) => {
      const answer = link.querySelector<HTMLElement>(".faq-answer-wrap");
      const id = `faq-answer-${rootIndex}-${index}`;
      link.setAttribute("role", "button");
      link.setAttribute("tabindex", "0");
      link.setAttribute("aria-controls", id);
      if (answer) answer.id = id;
    });

    const activate = (event: Event) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLElement>(".faq-tab-link") : null;
      if (!link || !root.contains(link)) return;
      event.preventDefault();
      const index = links.indexOf(link);
      if (index >= 0) setActive(index, true);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") activate(event);
    };

    root.addEventListener("click", activate);
    root.addEventListener("keydown", onKeyDown);
    setActive(Math.max(0, links.findIndex((link) => link.classList.contains("w--current"))), false);

    return () => {
      root.removeEventListener("click", activate);
      root.removeEventListener("keydown", onKeyDown);
      const gsap = (window as typeof window & { gsap?: Gsap }).gsap;
      links.forEach((link) => {
        const answer = link.querySelector<HTMLElement>(".faq-answer-wrap");
        const icon = link.querySelector<HTMLElement>(".faq-btn-icon");
        if (answer) gsap?.killTweensOf(answer);
        if (icon) gsap?.killTweensOf(icon);
      });
    };
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function installContactForm() {
  const form = document.querySelector<HTMLFormElement>("#email-form");
  if (!form) return () => undefined;

  const wrapper = form.closest<HTMLElement>(".w-form");
  const success = wrapper?.querySelector<HTMLElement>(".w-form-done");
  const failure = wrapper?.querySelector<HTMLElement>(".w-form-fail");
  const submit = form.querySelector<HTMLInputElement>("[type='submit']");
  success?.setAttribute("role", "status");
  success?.setAttribute("aria-live", "polite");
  failure?.setAttribute("role", "alert");

  const honeypot = document.createElement("input");
  honeypot.name = "website";
  honeypot.type = "text";
  honeypot.tabIndex = -1;
  honeypot.autocomplete = "off";
  honeypot.setAttribute("aria-hidden", "true");
  honeypot.style.cssText = "position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden";
  form.appendChild(honeypot);

  const onSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!form.reportValidity() || submit?.disabled) return;

    const data = new FormData(form);
    if (submit) {
      submit.disabled = true;
      submit.value = "Gönderiliyor…";
    }
    failure?.style.setProperty("display", "none");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("First-Name"),
          lastName: data.get("Last-Name"),
          email: data.get("Email"),
          message: data.get("Message"),
          website: data.get("website"),
        }),
      });
      if (!response.ok) throw new Error("contact submission failed");
      form.style.display = "none";
      success?.style.setProperty("display", "block");
      form.reset();
    } catch {
      failure?.style.setProperty("display", "block");
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.value = "Gönder";
      }
    }
  };

  form.addEventListener("submit", onSubmit, true);
  return () => {
    form.removeEventListener("submit", onSubmit, true);
    honeypot.remove();
  };
}

function installPixelHoverFallback() {
  const leaveTimers = new Map<HTMLElement, number>();

  const getTile = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return null;
    return target.closest<HTMLElement>(".pixel-grid .pixel-box");
  };

  const clearLeave = (tile: HTMLElement) => {
    const timer = leaveTimers.get(tile);
    if (timer) window.clearTimeout(timer);
    leaveTimers.delete(tile);
  };

  const setColorOpacity = (tile: HTMLElement, opacity: "0" | "1") => {
    const color = tile.querySelector<HTMLElement>(".pixel-box-color");
    if (!color || color.classList.contains("pixel-ember")) return;
    color.style.transition = "opacity 200ms ease, transform 200ms ease";
    color.style.opacity = opacity;
    color.style.transform = "translate3d(0px, 0px, 0px)";
  };

  const onPointerOver = (event: PointerEvent) => {
    const tile = getTile(event.target);
    if (!tile || (event.relatedTarget instanceof Node && tile.contains(event.relatedTarget))) return;
    clearLeave(tile);
    setColorOpacity(tile, "1");
  };

  const onPointerOut = (event: PointerEvent) => {
    const tile = getTile(event.target);
    if (!tile || (event.relatedTarget instanceof Node && tile.contains(event.relatedTarget))) return;
    clearLeave(tile);
    leaveTimers.set(tile, window.setTimeout(() => setColorOpacity(tile, "0"), 500));
  };

  document.addEventListener("pointerover", onPointerOver);
  document.addEventListener("pointerout", onPointerOut);

  return () => {
    document.removeEventListener("pointerover", onPointerOver);
    document.removeEventListener("pointerout", onPointerOut);
    for (const timer of leaveTimers.values()) window.clearTimeout(timer);
  };
}

function installPageTransitions() {
  let navigating = false;

  const isInternalLink = (anchor: HTMLAnchorElement) => {
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || anchor.target || anchor.hasAttribute("download")) return false;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) return false;
    return url.pathname + url.search !== window.location.pathname + window.location.search;
  };

  const onClick = (event: MouseEvent) => {
    if (navigating || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!(event.target instanceof Element)) return;

    const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!anchor || !isInternalLink(anchor)) return;

    event.preventDefault();
    navigating = true;
    markTransitionReveal();
    void playPreloadCover().finally(() => {
      window.location.assign(anchor.href);
    });
  };

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}

export function GatePageScripts() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const runtimePath =
      ({
        "/hakkimizda": "/about",
        "/hizmetler": "/docs",
        "/iletisim": "/contact",
        "/yayinlar": "/blog",
        "/vaka-analizleri": "/careers",
        "/gizlilik-politikasi": "/privacy-policy",
        "/kullanim-sartlari": "/terms-of-service",
        "/sistem-plani": "/waitlist",
      } as Record<string, string>)[path] ?? path;
    const config =
      gatePageData[runtimePath] ??
      (path.startsWith("/rehberler/") || path.startsWith("/hizmetler/")
        ? gatePageData["/docs-posts/introduction"]
        : path.startsWith("/yayinlar/")
          ? gatePageData["/post/from-prompt-to-product-making-ai-useful"]
          : path.startsWith("/vaka-analizleri/")
            ? gatePageData["/job-posts/ai-product-engineer"]
            : gatePageData["/"]);
    let cancelled = false;
    const appended: HTMLScriptElement[] = [];
    const root = document.documentElement;
    const previous = Object.fromEntries(
      Object.keys(config.page).map((key) => [`data-wf-${key}`, root.getAttribute(`data-wf-${key}`)]),
    );
    const hadTouch = root.classList.contains("w-mod-touch");
    const badgeObserver = new MutationObserver(removeWebflowBadge);
    const dispatchSyntheticLoad = document.readyState === "complete";
    const revealTransition = hasTransitionReveal();
    const removePixelHoverFallback = installPixelHoverFallback();
    const removePageTransitions = installPageTransitions();
    const removeHeadingTrailingSlashSync = installHeadingTrailingSlashSync();
    const removeHowItWorksScroll = installHowItWorksScroll();
    const removeCapabilitiesAutoTabs = installCapabilitiesAutoTabs();
    const removeFaqAccordions = installFaqAccordions();
    const removeContactForm = installContactForm();
    let removePixelEmbers: () => void = () => undefined;
    let removeTestimonialScroll: () => void = () => undefined;
    let revealTimer = 0;
    let revealFallbackTimer = 0;

    root.classList.add("w-mod-js");
    if (revealTransition) {
      holdPreloadCovered();
      revealFallbackTimer = window.setTimeout(() => {
        forcePreloadRevealComplete();
        clearTransitionReveal();
      }, 1500);
      revealTimer = window.setTimeout(() => {
        void playPreloadReveal().finally(() => {
          window.clearTimeout(revealFallbackTimer);
          clearTransitionReveal();
        });
      }, 60);
    }
    if ("ontouchstart" in window) root.classList.add("w-mod-touch");
    for (const [key, value] of Object.entries(config.page)) {
      if (value) root.setAttribute(`data-wf-${key}`, value);
    }

    removeWebflowBadge();
    badgeObserver.observe(document.body, { childList: true, subtree: true });
    lockHeaderScrambleWidths();
    window.requestAnimationFrame(lockHeaderScrambleWidths);

    const preloadTimer = window.setTimeout(() => {
      if (root.classList.contains("gate-is-transitioning")) return;
      removeWebflowBadge();
      document.querySelectorAll<HTMLElement>(".preload-square").forEach((item) => {
        if (getComputedStyle(item).opacity !== "0") {
          item.style.opacity = "0";
          item.style.transform = "translate3d(0px, 0px, 0px)";
        }
      });
    }, 3200);

    const append = (item: GateScript) =>
      new Promise<void>((resolve) => {
        const script = document.createElement("script");
        setScriptAttrs(script, item.attrs);
        appended.push(script);

        if (item.src) {
          script.src = item.src;
          script.onload = () => resolve();
          script.onerror = () => resolve();
        } else {
          script.text = item.code?.includes(TYPEWRITER_SCRIPT_MARKER) ? TYPEWRITER_SCRIPT : (item.code ?? "");
        }

        document.body.appendChild(script);
        if (!item.src) resolve();
      });

    void (async () => {
      for (const item of config.scripts) {
        if (cancelled) return;
        await append(item);
      }
      const webflow = (window as typeof window & { Webflow?: { ready?: () => void } }).Webflow;
      webflow?.ready?.();
      removePixelEmbers = installPixelEmbers();
      removeTestimonialScroll = installTestimonialScroll();
      removeWebflowBadge();
      if (!cancelled && dispatchSyntheticLoad) {
        window.dispatchEvent(new Event("load"));
      }
    })();

    return () => {
      cancelled = true;
      ran.current = false;
      window.clearTimeout(preloadTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(revealFallbackTimer);
      removePixelHoverFallback();
      removePageTransitions();
      removeHeadingTrailingSlashSync();
      removeHowItWorksScroll();
      removeCapabilitiesAutoTabs();
      removeFaqAccordions();
      removeContactForm();
      removePixelEmbers();
      removeTestimonialScroll();
      badgeObserver.disconnect();
      appended.forEach((script) => script.remove());
      for (const [key, value] of Object.entries(previous)) {
        value ? root.setAttribute(key, value) : root.removeAttribute(key);
      }
      if (!hadTouch) root.classList.remove("w-mod-touch");
    };
  }, []);

  return null;
}
