export function installMachineExit(document: Document, window: Window & typeof globalThis) {
  let timer = 0;
  const reset = () => {
    window.clearTimeout(timer);
    timer = 0;
    document.documentElement.removeAttribute("data-machine-closing");
  };
  const restore = (event: PageTransitionEvent) => { if (event.persisted) reset(); };
  const click = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof window.Element ? (event.target as Element).closest<HTMLAnchorElement>("a[data-human-return]") : null;
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    if (timer) return;
    document.documentElement.setAttribute("data-machine-closing", "");
    timer = window.setTimeout(() => window.location.assign(link.href), 650);
  };
  document.addEventListener("click", click);
  window.addEventListener("pageshow", restore);
  return () => {
    reset();
    document.removeEventListener("click", click);
    window.removeEventListener("pageshow", restore);
  };
}
