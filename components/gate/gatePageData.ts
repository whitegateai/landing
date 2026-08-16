export type GateScript = { src?: string; attrs?: Record<string, string>; code?: string };
export type GatePageConfig = { page: Record<string, string | undefined>; scripts: GateScript[] };

export const gatePageData = {
  "/": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69cb64675294f782e2317f60",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "application/json",
          "class": "w-json"
        },
        "code": "{\n  \"items\": [\n    {\n      \"url\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"originalUrl\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"width\": 940,\n      \"height\": 528,\n      \"thumbnailUrl\": \"https://i.ytimg.com/vi/OxoOCp24Ojk/hqdefault.jpg\",\n      \"html\": \"<iframe class=\\\"embedly-embed\\\" src=\\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FOxoOCp24Ojk%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOxoOCp24Ojk&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOxoOCp24Ojk%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube\\\" width=\\\"940\\\" height=\\\"528\\\" scrolling=\\\"no\\\" title=\\\"YouTube embed\\\" frameborder=\\\"0\\\" allow=\\\"autoplay; fullscreen; encrypted-media; picture-in-picture;\\\" allowfullscreen=\\\"true\\\"></iframe>\",\n      \"type\": \"video\"\n    }\n  ],\n  \"group\": \"\"\n}"
      },
      {
        "attrs": {
          "type": "application/json",
          "class": "w-json"
        },
        "code": "{\n  \"items\": [\n    {\n      \"url\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"originalUrl\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"width\": 940,\n      \"height\": 528,\n      \"thumbnailUrl\": \"https://i.ytimg.com/vi/OxoOCp24Ojk/hqdefault.jpg\",\n      \"html\": \"<iframe class=\\\"embedly-embed\\\" src=\\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FOxoOCp24Ojk%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOxoOCp24Ojk&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOxoOCp24Ojk%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube\\\" width=\\\"940\\\" height=\\\"528\\\" scrolling=\\\"no\\\" title=\\\"YouTube embed\\\" frameborder=\\\"0\\\" allow=\\\"autoplay; fullscreen; encrypted-media; picture-in-picture;\\\" allowfullscreen=\\\"true\\\"></iframe>\",\n      \"type\": \"video\"\n    }\n  ],\n  \"group\": \"\"\n}"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-r35yfvOfybU/mILj9Tw1FMRySFfkayvZnU401HuWMJTJLdwzFgXRMWr4whQiMCTC",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.a3140c51201be139.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-p9iysqcuXpAukf5fyXN3jpb5DQNbPRfKOifX83QtHajKZ/Jv8o8a+z/vZbWtO0Bp",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.97c7732b.443184e11cde16a4.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/about": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f40f69e1d062f10ba1d806",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-qBlnR+ZL5IaL/2wGpiunHjE9TCHpzy1+vuJrz3+gSRBWhpc56SMWwoD4kLNYgBzn",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.9c1c9fbb.701d1f009e49f73f.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0c29823a56dcbe066012dd",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/pricing": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f45c6722c7c36f20635695",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "application/json",
          "class": "w-json"
        },
        "code": "{\n  \"items\": [\n    {\n      \"url\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"originalUrl\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"width\": 940,\n      \"height\": 528,\n      \"thumbnailUrl\": \"https://i.ytimg.com/vi/OxoOCp24Ojk/hqdefault.jpg\",\n      \"html\": \"<iframe class=\\\"embedly-embed\\\" src=\\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FOxoOCp24Ojk%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOxoOCp24Ojk&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOxoOCp24Ojk%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube\\\" width=\\\"940\\\" height=\\\"528\\\" scrolling=\\\"no\\\" title=\\\"YouTube embed\\\" frameborder=\\\"0\\\" allow=\\\"autoplay; fullscreen; encrypted-media; picture-in-picture;\\\" allowfullscreen=\\\"true\\\"></iframe>\",\n      \"type\": \"video\"\n    }\n  ],\n  \"group\": \"\"\n}"
      },
      {
        "attrs": {
          "type": "application/json",
          "class": "w-json"
        },
        "code": "{\n  \"items\": [\n    {\n      \"url\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"originalUrl\": \"https://www.youtube.com/watch?v=OxoOCp24Ojk\",\n      \"width\": 940,\n      \"height\": 528,\n      \"thumbnailUrl\": \"https://i.ytimg.com/vi/OxoOCp24Ojk/hqdefault.jpg\",\n      \"html\": \"<iframe class=\\\"embedly-embed\\\" src=\\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FOxoOCp24Ojk%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOxoOCp24Ojk&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FOxoOCp24Ojk%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube\\\" width=\\\"940\\\" height=\\\"528\\\" scrolling=\\\"no\\\" title=\\\"YouTube embed\\\" frameborder=\\\"0\\\" allow=\\\"autoplay; fullscreen; encrypted-media; picture-in-picture;\\\" allowfullscreen=\\\"true\\\"></iframe>\",\n      \"type\": \"video\"\n    }\n  ],\n  \"group\": \"\"\n}"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/blog": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5a7d9533f27ed6afc8721",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/from-prompt-to-product-making-ai-useful": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "from-prompt-to-product-making-ai-useful"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/contact": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f4cd90a4d54bbae4b807ec",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/404": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f1bc008225e5ff88d7e8a6",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/401": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a05b22119bfef3d5a047b1b",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "application/javascript"
        },
        "code": "(function _handlePasswordPageOnload() {\n\t  if (/[?&]e=1(&|$)/.test(document.location.search)) {\n\t    document.querySelector('.w-password-page.w-form-fail').style.display = 'block';\n\t  }\n\t})()"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/careers": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f4af26ff56dd284dcbdb02",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/ai-processing": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "ai-processing"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/api-overview": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "api-overview"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/connecting": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "connecting"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/custom-workflows": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "custom-workflows"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/first-workflow": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "first-workflow"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/inputs-context": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "inputs-context"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/installation": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "installation"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/introduction": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "introduction"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/optimization": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "optimization"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/outputs-results": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "outputs-results"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/scaling-performance": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "scaling-performance"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/docs-posts/sdks-usage": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0a9847c0c6d9a5fe3e291b",
      "site": "69cb64665294f782e2317f2f",
      "collection": "6a0a9847c0c6d9a5fe3e2915",
      "item-slug": "sdks-usage"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-Q50Hmz95bmk4qDSlY3YZLdHVlUGr9PVgnZ6hlbHCtSAFPwytkRywy33TiHTbIfTE",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.ca14ef45.f1de463b54eb59b8.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/building-ai-workflows-that-scale": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "building-ai-workflows-that-scale"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/connecting-ai-to-real-products": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "connecting-ai-to-real-products"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/designing-ai-systems-not-just-features": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "designing-ai-systems-not-just-features"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/designing-ai-workflows-that-actually-work": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "designing-ai-workflows-that-actually-work"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/from-manual-tasks-to-intelligent-workflows": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "from-manual-tasks-to-intelligent-workflows"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/from-raw-data-to-actionable-results": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "from-raw-data-to-actionable-results"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/how-to-structure-inputs-for-better-outputs": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "how-to-structure-inputs-for-better-outputs"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/integrating-ai-without-breaking-your-stack": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "integrating-ai-without-breaking-your-stack"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/post/why-most-ai-outputs-are-hard-to-use": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69f5b82b7261bd70865ea9af",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69f5b82a7261bd70865ea9a9",
      "item-slug": "why-most-ai-outputs-are-hard-to-use"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/privacy-policy": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69fcb85e88a75f1c466e9aef",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/terms-of-service": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69fcc1786cfc6aa8a22a2a22",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/utility-pages/changelog": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69fcc3a39ae9d1cca52da790",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/utility-pages/instructions": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a1854beeee56f95d94d098b",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/utility-pages/license": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a05a5c06683c9f8f08300a1",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/utility-pages/style-guide": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69cb710498171ade631b61a6",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/waitlist": {
    "page": {
      "domain": "whitegate.studio",
      "page": "6a0c13aeaef3c662ec039305",
      "site": "69cb64665294f782e2317f2f"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/job-posts/ai-product-engineer": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69fcb050159f0be125cb2eec",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69fcb04f159f0be125cb2e13",
      "item-slug": "ai-product-engineer"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/job-posts/ai-workflow-engineer": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69fcb050159f0be125cb2eec",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69fcb04f159f0be125cb2e13",
      "item-slug": "ai-workflow-engineer"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/job-posts/machine-learning-engineer": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69fcb050159f0be125cb2eec",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69fcb04f159f0be125cb2e13",
      "item-slug": "machine-learning-engineer"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  },
  "/job-posts/product-designer-ai-systems": {
    "page": {
      "domain": "whitegate.studio",
      "page": "69fcb050159f0be125cb2eec",
      "site": "69cb64665294f782e2317f2f",
      "collection": "69fcb04f159f0be125cb2e13",
      "item-slug": "product-designer-ai-systems"
    },
    "scripts": [
      {
        "attrs": {
          "type": "text/javascript"
        },
        "code": "!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          "crossOrigin": "anonymous"
        },
        "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69cb64665294f782e2317f2f"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-n8Gjq2B7Ziergmx7aO6fWTcrGUwram5eU1cHVs2I1wJI7Ruqgx6Jw9RNiTfF7KJa",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.1095e6abef78453b.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-035x08sLG2mXTybR4DUm/lsC71CGKRsVvQlIj+4iNFk7QVeKUWzSgUqNztJIbe9m",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.schunk.dcf9ef2b2f125e0c.js"
      },
      {
        "attrs": {
          "type": "text/javascript",
          "integrity": "sha384-OKUjY6aQWTf9WzepA6gqw8BzT20xRQQcJ9gfIaYl9Emuvg1ELtY/l9vmiqGjLK93",
          "crossOrigin": "anonymous"
        },
        "src": "/gate-js/gate-runtime.07f3140c.3644bece2517b70d.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
      },
      {
        "attrs": {
          "type": "text/javascript"
        },
        "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
      },
      {
        "attrs": {},
        "src": "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrambleTextPlugin.min.js"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)\n\n  const SCRAMBLE_CHARS = '!<>-_\\\\/[]{}—=+*^?#______'\n\n  function splitIntoCharSpans(el) {\n    el.setAttribute('aria-label', el.innerText)\n\n    const frag = document.createDocumentFragment()\n    const chars = []\n\n    function walk(node, parent) {\n      if (\n        node.nodeType === 1 &&\n        (node.getAttribute('data-scramble') === 'skip' ||\n         node.closest('[data-scramble=\"skip\"]'))\n      ) {\n        parent.appendChild(node.cloneNode(true))\n        return\n      }\n\n      if (node.nodeType === 3) {\n        const tokens = node.textContent.split(/(\\s+)/)\n        tokens.forEach(token => {\n          if (!token) return\n          if (/^\\s+$/.test(token)) {\n            token.split('').forEach(char => {\n              if (char === '\\n') { parent.appendChild(document.createElement('br')); return }\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;white-space:pre;vertical-align:bottom'\n              sp.textContent = ' '\n              parent.appendChild(sp)\n              chars.push({ span: sp, char: ' ' })\n            })\n          } else {\n            const wordWrap = document.createElement('span')\n            wordWrap.style.cssText = 'display:inline-block;white-space:nowrap'\n            parent.appendChild(wordWrap)\n            token.split('').forEach(char => {\n              const sp = document.createElement('span')\n              sp.style.cssText = 'display:inline-block;vertical-align:bottom'\n              sp.textContent = char\n              wordWrap.appendChild(sp)\n              chars.push({ span: sp, char })\n            })\n          }\n        })\n      }\n\n      if (node.nodeType === 1) {\n        const clone = node.cloneNode(false)\n        parent.appendChild(clone)\n        node.childNodes.forEach(child => walk(child, clone))\n      }\n    }\n\n    walk(el, frag)\n    el.innerHTML = ''\n    el.appendChild(frag)\n\n    const widths = chars.map(({ span }) => span.getBoundingClientRect().width)\n    chars.forEach(({ span }, i) => {\n      span.dataset.w = widths[i]\n      span.style.width = '0px'\n      span.style.opacity = '0'\n    })\n\n    return chars\n  }\n\n  function initScramble(el) {\n    const CONFIG = {\n      duration: parseFloat(el.dataset.duration) || 0.4,\n      stagger:  parseFloat(el.dataset.stagger)  || 0.04,\n      speed:    parseFloat(el.dataset.speed)    || 0.5\n    }\n\n    el.style.minHeight = el.getBoundingClientRect().height + 'px'\n    const chars = splitIntoCharSpans(el)\n    const tl = gsap.timeline({ paused: true })\n\n    chars.forEach(({ span, char }, i) => {\n      const naturalW = parseFloat(span.dataset.w)\n      const t = i * CONFIG.stagger\n\n      tl.to(span, { width: naturalW, opacity: 1, duration: CONFIG.duration * 0.25, ease: 'power2.out' }, t)\n\n      if (char !== ' ') {\n        tl.to(span, {\n          duration: CONFIG.duration,\n          scrambleText: { text: char, chars: SCRAMBLE_CHARS, speed: CONFIG.speed }\n        }, t)\n      }\n    })\n\n    ScrollTrigger.create({\n      trigger: el,\n      start: 'top 80%',\n      once: true,\n      onEnter: () => tl.play()\n    })\n  }\n\n  gsap.utils.toArray('[data-scramble]:not([data-scramble=\"skip\"])').forEach(initScramble)\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n\nwindow.addEventListener('load', function () {\n\n  gsap.utils.toArray('[data-typewriter]').forEach(el => {\n    const words = (el.dataset.words || '')\n      .split(',')\n      .map(w => w.trim())\n      .filter(Boolean)\n\n    if (!words.length) return\n\n    // ── Config ──────────────────────────────\n    const INITIAL_DELAY = parseInt(el.dataset.delay) || 0\n    const TYPE_SPEED  = 50    \n    const HOLD_AT_END = 800   \n    const BLINK_SPEED = 400   \n    const BLINK_TIMES = 2     \n\n    let wordIndex = 0\n    let charIndex = 0\n\n    const color = getComputedStyle(el).color\n    el.textContent = ''\n\n    const cursorEl = document.createElement('span')\n    cursorEl.setAttribute('style', `\n      display: inline-block;\n      width: 0.55em;\n      height: 1em;\n      background: ${color};\n      vertical-align: middle;\n      margin-left: 2px;\n      position: relative;\n      top: -0.05em;\n      opacity: 0;\n    `)\n    el.appendChild(cursorEl)\n\n    const textNode = document.createTextNode('')\n    el.insertBefore(textNode, cursorEl)\n\n    function renderTyping(word) {\n      textNode.textContent = word.slice(0, charIndex - 1)\n      cursorEl.textContent = word[charIndex - 1] || ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function renderDone(word) {\n      textNode.textContent = word\n      cursorEl.textContent = ' '\n      cursorEl.style.opacity = '1'\n    }\n\n    function blinkThenClear(word, count) {\n      if (count <= 0) {\n        textNode.textContent = ''\n        cursorEl.textContent = ' '\n        cursorEl.style.opacity = '0'\n        charIndex = 0\n        wordIndex = (wordIndex + 1) % words.length\n        setTimeout(type, 200)\n        return\n      }\n      cursorEl.style.opacity = '0'\n      setTimeout(() => {\n        cursorEl.style.opacity = '1'\n        setTimeout(() => blinkThenClear(word, count - 1), BLINK_SPEED)\n      }, BLINK_SPEED)\n    }\n\n    function type() {\n      const currentWord = words[wordIndex]\n      if (!currentWord) return\n      charIndex++\n      renderTyping(currentWord)\n      if (charIndex > currentWord.length) {\n        renderDone(currentWord)\n        setTimeout(() => blinkThenClear(currentWord, BLINK_TIMES), HOLD_AT_END)\n        return\n      }\n      setTimeout(type, TYPE_SPEED)\n    }\n\n    setTimeout(type, INITIAL_DELAY)\n  })\n\n})\n"
      },
      {
        "attrs": {},
        "code": "\n  \nwindow.addEventListener('load', function () {\n\n  gsap.registerPlugin(ScrambleTextPlugin)\n\n  gsap.utils.toArray('[data-scramble-hover]').forEach(el => {\n    const target = el.querySelector('[data-scramble-hover-text]') || el\n\n    const hoverAnim = gsap.to(target, {\n      duration: 0.8,\n      paused: true,\n      scrambleText: {\n        text: '{original}',\n        chars: '!<>-_\\\\/[]{}—=+*^?#',  \n        speed: 0.5          \n      }\n    })\n\n    el.addEventListener('mouseenter', () => hoverAnim.play(0))\n  })\n\n})\n"
      }
    ]
  }
} as Record<string, GatePageConfig>;
