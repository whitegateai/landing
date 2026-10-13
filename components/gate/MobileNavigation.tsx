"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MobileNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".page-wrapper .navbar");
    const button = nav?.querySelector<HTMLElement>(".nav_menu-button");
    const menu = nav?.querySelector<HTMLElement>(".nav-menu");
    if (!nav || !button || !menu) return;
    const mobile = window.matchMedia("(max-width: 991px)");
    const english = document.documentElement.lang === "en";
    let open = false;
    if (!menu.id) menu.id = "whitegate-mobile-menu";
    button.setAttribute("aria-controls", menu.id);

    const sync = () => {
      const expanded = mobile.matches && open;
      const state = expanded ? "open" : "closed";
      if (menu.dataset.mobileNav !== state) menu.dataset.mobileNav = state;
      if (button.getAttribute("aria-expanded") !== String(expanded)) button.setAttribute("aria-expanded", String(expanded));
      if (button.getAttribute("aria-controls") !== menu.id) button.setAttribute("aria-controls", menu.id);
      const label = english ? (expanded ? "Close menu" : "Open menu") : (expanded ? "Menüyü kapat" : "Menüyü aç");
      if (button.getAttribute("aria-label") !== label) button.setAttribute("aria-label", label);
      if (button.classList.contains("w--open") !== expanded) button.classList.toggle("w--open", expanded);
      if (menu.classList.contains("w--open") !== expanded) menu.classList.toggle("w--open", expanded);
      if (menu.inert !== (mobile.matches && !expanded)) menu.inert = mobile.matches && !expanded;
      nav.toggleAttribute("data-mobile-menu-open", expanded);
    };
    const setOpen = (next: boolean) => {
      open = next;
      sync();
    };
    const click = (event: MouseEvent) => {
      if (!mobile.matches) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      setOpen(!open);
    };
    const keyDown = (event: KeyboardEvent) => {
      if (!mobile.matches) return;
      if (event.key === "Escape" && open) {
        event.preventDefault();
        setOpen(false);
        button.focus({ preventScroll: true });
      } else if ((event.key === "Enter" || event.key === " ") && event.target === button) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setOpen(!open);
      }
    };
    const outside = (event: PointerEvent) => {
      if (open && event.target instanceof Node && !nav.contains(event.target)) setOpen(false);
    };
    const linkClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a")) setOpen(false);
    };
    const focusIn = (event: FocusEvent) => {
      if (open && event.target instanceof Node && !nav.contains(event.target)) setOpen(false);
    };
    const resize = () => setOpen(false);

    // The imported Webflow runtime may rewrite aria-expanded after hydration.
    // Keep one source of truth for the visible menu and its accessibility state.
    const observer = new MutationObserver(sync);
    observer.observe(button, { attributes: true, attributeFilter: ["aria-expanded", "aria-controls", "class", "aria-label"] });
    observer.observe(menu, { attributes: true, attributeFilter: ["class"] });
    sync();
    button.addEventListener("click", click, true);
    document.addEventListener("keydown", keyDown, true);
    document.addEventListener("pointerdown", outside, true);
    menu.addEventListener("click", linkClick, true);
    document.addEventListener("focusin", focusIn);
    mobile.addEventListener("change", resize);
    return () => {
      observer.disconnect();
      setOpen(false);
      menu.removeAttribute("data-mobile-nav");
      menu.inert = false;
      button.removeEventListener("click", click, true);
      document.removeEventListener("keydown", keyDown, true);
      document.removeEventListener("pointerdown", outside, true);
      menu.removeEventListener("click", linkClick, true);
      document.removeEventListener("focusin", focusIn);
      mobile.removeEventListener("change", resize);
    };
  }, [pathname]);

  return null;
}
