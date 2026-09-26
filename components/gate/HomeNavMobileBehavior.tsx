"use client";

import { useEffect } from "react";

export function HomeNavMobileBehavior() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".page-wrapper .navbar");
    const button = nav?.querySelector<HTMLElement>(".nav_menu-button");
    const menu = nav?.querySelector<HTMLElement>(".nav-menu");
    if (!nav || !button || !menu) return;

    const setOpen = (open: boolean) => {
      button.classList.toggle("w--open", open);
      menu.classList.toggle("w--open", open);
      button.setAttribute("aria-expanded", String(open));
    };

    const syncExpanded = () => {
      const expanded = String(menu.classList.contains("w--open"));
      if (button.getAttribute("aria-expanded") !== expanded) {
        button.setAttribute("aria-expanded", expanded);
      }
    };
    const observer = new MutationObserver(syncExpanded);
    observer.observe(button, { attributes: true, attributeFilter: ["aria-expanded"] });

    let pendingFrame = 0;

    const toggle = (event: Event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      const open = !menu.classList.contains("w--open");
      setOpen(open);
      window.cancelAnimationFrame(pendingFrame);
      pendingFrame = window.requestAnimationFrame(() => setOpen(open));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") toggle(event);
      if (event.key === "Escape") setOpen(false);
    };

    const onOutsideClick = (event: MouseEvent) => {
      if (!nav.contains(event.target as Node)) setOpen(false);
    };

    const onLinkClick = () => setOpen(false);
    const onResize = () => {
      if (window.innerWidth > 991) setOpen(false);
    };

    button.addEventListener("click", toggle, true);
    button.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("click", onOutsideClick);
    window.addEventListener("resize", onResize);
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", onLinkClick));

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(pendingFrame);
      button.removeEventListener("click", toggle, true);
      button.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("click", onOutsideClick);
      window.removeEventListener("resize", onResize);
      menu.querySelectorAll("a").forEach((link) => link.removeEventListener("click", onLinkClick));
    };
  }, []);

  return null;
}
