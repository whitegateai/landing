import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { installMachineExit } from "../components/gate/machine-exit.ts";

const { window } = new JSDOM('<a data-human-return href="/en"><span>HUMAN</span></a><a href="/en/ai/hizmetler">SERVICES</a>', { url: "http://127.0.0.1:3010/en/ai/home" });
let pending, reduced = false;
const navigated = [];
const view = {
  Element: window.Element,
  matchMedia: () => ({ matches: reduced }),
  setTimeout: (callback, delay) => { assert.equal(delay, 650); pending = callback; return 1; },
  clearTimeout: () => { pending = undefined; },
  location: { assign: href => navigated.push(href) },
  addEventListener: window.addEventListener.bind(window),
  removeEventListener: window.removeEventListener.bind(window),
};
const cleanup = installMachineExit(window.document, view);
const human = window.document.querySelector("span");
const click = (element, options = {}) => {
  const event = new window.MouseEvent("click", { bubbles: true, cancelable: true, button: 0, ...options });
  element.dispatchEvent(event);
  return event.defaultPrevented;
};
assert.equal(click(window.document.querySelectorAll("a")[1]), false);
assert.equal(click(human, { ctrlKey: true }), false);
assert.equal(click(human, { metaKey: true }), false);
assert.equal(click(human, { button: 1 }), false);
human.parentElement.target = "_blank";
assert.equal(click(human), false);
human.parentElement.removeAttribute("target");
reduced = true;
assert.equal(click(human), false);
reduced = false;
assert.equal(click(human), true);
assert.ok(window.document.documentElement.hasAttribute("data-machine-closing"));
const first = pending;
window.dispatchEvent(new window.PageTransitionEvent("pageshow", { persisted: false }));
assert.equal(pending, first);
assert.equal(click(human), true);
assert.equal(pending, first);
pending();
assert.deepEqual(navigated, ["http://127.0.0.1:3010/en"]);
window.dispatchEvent(new window.PageTransitionEvent("pageshow", { persisted: true }));
assert.equal(window.document.documentElement.hasAttribute("data-machine-closing"), false);
assert.equal(pending, undefined);
assert.equal(click(human), true);
cleanup();
assert.equal(pending, undefined);
assert.equal(click(human), false);
window.close();
console.log("PASS: Machine exit delay, paired URL, duplicate click, modifier/new-tab/reduced-motion bypass and back-navigation cleanup.");
