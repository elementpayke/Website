#!/usr/bin/env node
/**
 * Imports the static pages from a Claude Design export into the site.
 *
 *   node scripts/import-design.mjs <path-to-design-project>
 *
 * A "static" design page is a *.dc.html file whose only components are the
 * shared EPNav and EPFooter and which has no template bindings. Everything
 * between the nav and the footer is copied as-is (inline styles and all) so
 * the built page is pixel-identical to the design. For each page this writes
 * src/content/design-pages/<lang>/<slug>.json with:
 *
 *   - head metadata (title, description, canonical, hreflang, Open Graph, Twitter)
 *   - JSON-LD blocks, verbatim
 *   - the page body HTML, with links rewritten from design filenames to the
 *     canonical URLs, flags pointed at /flags, design fonts mapped to the
 *     next/font CSS variables, and `style-hover`/`style-focus` attributes
 *     turned into classes
 *
 * The pseudo-class rules are collected into src/app/design-pseudo.css.
 * Re-run after every design export; the output is deterministic.
 */
import fs from "node:fs";
import path from "node:path";
import { parse, serialize } from "parse5";

const SRC = process.argv[2];
if (!SRC) {
  console.error("usage: node scripts/import-design.mjs <design-project-dir>");
  process.exit(1);
}
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "src/content/design-pages");
const SITE = "https://www.elementpay.net";

// ---------------------------------------------------------------------------
// URL map: every design file -> its public path (from its canonical link).
// ---------------------------------------------------------------------------
const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".dc.html") || f === "Coverage.html");
const urlOf = new Map();
for (const f of files) {
  const s = fs.readFileSync(path.join(SRC, f), "utf8");
  const m = s.match(/rel="canonical" href="([^"]*)"/);
  if (m) urlOf.set(f, m[1].replace(SITE, "") || "/");
}
// HANDOFF.md: Coverage v3 replaces the old coverage page at /coverage.
urlOf.set("Coverage.html", "/coverage");
urlOf.set("Coverage v3.dc.html", "/coverage");

function rewriteHref(href) {
  if (!href || /^(https?:|mailto:|tel:|#)/.test(href)) {
    return href?.startsWith(SITE + "/") ? href.slice(SITE.length) : href;
  }
  const [file, hash] = href.split("#");
  const target = urlOf.get(decodeURIComponent(file));
  if (!target) throw new Error(`unmapped link: ${href}`);
  return hash ? `${target}#${hash}` : target;
}

// ---------------------------------------------------------------------------
// Styles: design fonts -> next/font variables; pseudo attributes -> classes.
// ---------------------------------------------------------------------------
const FONT_VARS = [
  [/'Space Grotesk'/g, "var(--font-heading)"],
  [/'DM Sans'/g, "var(--font-body)"],
  [/'DM Mono'/g, "var(--font-label)"],
];
const mapFonts = (css) => FONT_VARS.reduce((acc, [re, v]) => acc.replace(re, v), css);

// Same semantics as the design runtime: every declaration becomes !important
// so the pseudo state beats the element's inline style. Class names must match
// src/lib/design/pseudo.ts, which components use for the same states.
function importantify(css) {
  return css
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => (/!\s*important$/i.test(d) ? d : `${d} !important`))
    .join(";");
}
function fnv1a(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}
const pseudoRules = new Map();
function pseudoClass(pseudo, css) {
  const body = importantify(mapFonts(css));
  const cls = `dp-${fnv1a(`${pseudo}|${body}`)}`;
  const isElement = pseudo === "before" || pseudo === "after";
  pseudoRules.set(cls, `.${cls}:${isElement ? ":" : ""}${pseudo}{${body}}`);
  return cls;
}

// ---------------------------------------------------------------------------
// DOM helpers (parse5 tree)
// ---------------------------------------------------------------------------
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const setAttr = (n, k, v) => {
  const a = n.attrs.find((x) => x.name === k);
  if (a) a.value = v;
  else n.attrs.push({ name: k, value: v });
};
const text = (n) => (n.childNodes || []).map((c) => (c.nodeName === "#text" ? c.value : text(c))).join("");
function* walk(n) {
  yield n;
  for (const c of n.childNodes || []) yield* walk(c);
  if (n.content) yield* walk(n.content);
}
const find = (n, pred) => {
  for (const x of walk(n)) if (pred(x)) return x;
  return null;
};

const DROP_ATTRS = /^(hint-|data-screen-label$|data-resource-id$)/;

function transformBody(node, page) {
  for (const n of walk(node)) {
    if (!n.attrs) continue;
    const classes = [];
    n.attrs = n.attrs.filter((a) => {
      if (DROP_ATTRS.test(a.name)) return false;
      const m = a.name.match(/^style-([a-z-]+)$/);
      if (m) {
        classes.push(pseudoClass(m[1], a.value));
        return false;
      }
      return true;
    });
    if (classes.length) setAttr(n, "class", [attr(n, "class"), ...classes].filter(Boolean).join(" "));
    const style = attr(n, "style");
    if (style) setAttr(n, "style", mapFonts(style));
    if (n.nodeName === "a") setAttr(n, "href", rewriteHref(attr(n, "href")));
    if (n.nodeName === "img") {
      const src = attr(n, "src");
      if (src?.startsWith("flags/")) setAttr(n, "src", "/" + src);
      else if (src && !/^(https?:|\/|data:)/.test(src)) throw new Error(`${page}: unexpected img src ${src}`);
    }
  }
}

// BRAND.md bans delivery-speed and opening-hours promises. The English design
// pages were already cleaned of them; the French pages were not, so their
// claims are rewritten here to the same wording the English pages use.
const FR_CLAIMS = [
  [/Avec ElementPay, il arrive généralement en moins d’une minute, 7 jours sur 7\./g,
    "Avec ElementPay, il est envoyé sur les réseaux locaux avec le taux et les frais affichés à l’avance, financé en devises ou en stablecoins."],
  [/arrivent en moins d’une minute après confirmation, y compris le week-end et les jours fériés/g,
    "partent sur le réseau local dès la confirmation, avec un statut pour chaque paiement"],
  [/arrivent en moins d’une minute après confirmation, y compris le week-end/g,
    "partent sur le réseau local dès la confirmation, avec un statut pour chaque paiement"],
  [/, généralement en moins d’une minute/g, ""],
  [/ en quelques secondes/g, ""],
  [/Livré en quelques secondes/g, "Livré"],
  [/Environ 30 secondes/g, "Selon le réseau local"],
  [/24h\/24, 7j\/7/g, "Fixés par chaque réseau local"],
  [/, 7j\/7/g, ""],
];
const scrubFr = (s) => FR_CLAIMS.reduce((acc, [re, v]) => acc.replace(re, v), s);

// Top-level CSS rules (an @media block counts as one rule).
function splitRules(css) {
  const rules = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < css.length; i++) {
    if (css[i] === "{") depth++;
    else if (css[i] === "}" && --depth === 0) {
      rules.push(css.slice(start, i + 1).trim());
      start = i + 1;
    }
  }
  return rules.filter(Boolean);
}
// Resets every design page repeats; globals.css already carries them.
const SHARED_RULES =
  /^(html\s*\{\s*lang|body\s*\{\s*margin:0;background:#fff|a\s*\{\s*color:#3B2ED3|a:hover\s*\{|\*:focus-visible|summary(::-webkit-details-marker)?\s*\{|html\s*\{\s*-webkit-text-size-adjust|body\s*\{\s*overflow-x|img,\s*svg,\s*video|@media \(max-width:700px\)\s*\{\s*\[style\*="grid-column:span 2"\])/;

function readHead(helmet, url) {
  const head = { title: "", description: "", canonical: url, alternates: {}, og: {}, twitter: {} };
  const jsonLd = [];
  let css = "";
  for (const n of walk(helmet)) {
    if (n.nodeName === "title") head.title = text(n).trim();
    if (n.nodeName === "meta") {
      const name = attr(n, "name");
      const prop = attr(n, "property");
      const content = attr(n, "content");
      if (name === "description") head.description = content;
      if (prop?.startsWith("og:")) head.og[prop.slice(3)] = content;
      if (name?.startsWith("twitter:")) head.twitter[name.slice(8)] = content;
    }
    if (n.nodeName === "link" && attr(n, "rel") === "alternate" && attr(n, "hreflang")) {
      head.alternates[attr(n, "hreflang")] = attr(n, "href").replace(SITE, "") || "/";
    }
    if (n.nodeName === "script" && attr(n, "type") === "application/ld+json") jsonLd.push(JSON.parse(text(n)));
    if (n.nodeName === "style") css += text(n);
  }
  // The helmet <style> mostly repeats the site-wide resets already in
  // globals.css; keep only the page-specific rules.
  return { head, jsonLd, css };
}

// ---------------------------------------------------------------------------
// Convert one page
// ---------------------------------------------------------------------------
function convert(file) {
  const raw = fs.readFileSync(path.join(SRC, file), "utf8");
  const url = urlOf.get(file);
  const lang = url.startsWith("/fr/") ? "fr" : "en";
  const src = lang === "fr" ? scrubFr(raw) : raw;
  const doc = parse(src);
  const xdc = find(doc, (n) => n.nodeName === "x-dc");
  const helmet = find(xdc, (n) => n.nodeName === "helmet");

  const { head, jsonLd, css } = readHead(helmet, url);
  // A page-level body background (only the cream pages differ from white)
  // becomes a page field rather than a global body rule.
  let background = null;
  const extraCss = splitRules(css)
    .filter((r) => {
      const bg = r.match(/^body\s*\{[^}]*background:(#[0-9A-Fa-f]{3,6})/);
      if (bg) background = bg[1];
      return !bg && !SHARED_RULES.test(r);
    })
    .map(mapFonts)
    .join("\n");

  // Body: everything between the EPNav import and the EPFooter import. Some
  // exports leave a <div> unclosed, which nests the footer inside the content
  // (browsers parse it the same way), so the footer is located anywhere in
  // the tree and must simply be the last thing in document order.
  const isImport = (name) => (n) => n.nodeName === "dc-import" && attr(n, "name") === name;
  const nav = find(xdc, isImport("EPNav"));
  const footer = find(xdc, isImport("EPFooter"));
  if (!nav || nav.parentNode !== xdc || !footer) throw new Error(`${file}: unexpected nav/footer placement`);
  const order = [...walk(xdc)];
  const after = order.slice(order.indexOf(footer) + 1).filter((n) => !(n.nodeName === "#text" && !n.value.trim()) && n.nodeName !== "#comment");
  if (after.some((n) => !["script", "#text"].includes(n.nodeName) && !(n.parentNode?.nodeName === "script"))) {
    throw new Error(`${file}: content after footer`);
  }
  // The footer has no background of its own; it shows whatever band it sits in.
  let footerBackground = null;
  for (let a = footer.parentNode; a && a !== xdc && !footerBackground; a = a.parentNode) {
    footerBackground = (attr(a, "style") || "").match(/background(?:-color)?:\s*(#[0-9A-Fa-f]{3,6})/)?.[1] ?? null;
  }
  footer.parentNode.childNodes = footer.parentNode.childNodes.filter((n) => n !== footer);
  const navActive = attr(nav, "active") || null;
  const bodyNodes = xdc.childNodes.filter((n) => n !== helmet && n !== nav && n.nodeName !== "script" && n.nodeName !== "#comment");
  for (const n of [...walk({ childNodes: bodyNodes })]) {
    if (n.childNodes) n.childNodes = n.childNodes.filter((c) => c.nodeName !== "script");
  }
  const wrapper = { nodeName: "div", tagName: "div", attrs: [], childNodes: bodyNodes, namespaceURI: "http://www.w3.org/1999/xhtml" };
  bodyNodes.forEach((n) => (n.parentNode = wrapper));
  transformBody(wrapper, file);

  return {
    slug: url.replace(/^\/(fr\/)?/, ""),
    lang,
    url,
    nav: navActive,
    head,
    jsonLd,
    background: background && background.toUpperCase() !== "#FFF" ? background : null,
    footerBackground,
    css: extraCss || null,
    html: serialize(wrapper).trim(),
  };
}

function isStatic(file) {
  if (!file.endsWith(".dc.html")) return false;
  const s = fs.readFileSync(path.join(SRC, file), "utf8");
  const imports = new Set([...s.matchAll(/<dc-import name="([^"]*)"/g)].map((m) => m[1]));
  if (!imports.has("EPNav") || !imports.has("EPFooter")) return false;
  return [...imports].every((n) => n === "EPNav" || n === "EPFooter") && !s.includes("{{");
}

fs.rmSync(OUT, { recursive: true, force: true });
const index = [];
for (const file of files.filter(isStatic).sort()) {
  const page = convert(file);
  const dir = path.join(OUT, page.lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${page.slug}.json`), JSON.stringify(page, null, 1) + "\n");
  index.push({ slug: page.slug, lang: page.lang, url: page.url, title: page.head.title, description: page.head.description });
}
fs.writeFileSync(path.join(OUT, "index.json"), JSON.stringify(index, null, 1) + "\n");

// Head metadata (title, description, Open Graph, hreflang, JSON-LD) for the
// pages built by hand from design components (products, solutions, company,
// blog, press, status, careers, contact, coverage, home), keyed by URL.
const heads = {};
for (const file of files.filter((f) => !isStatic(f) && urlOf.has(f) && f !== "Coverage.html").sort()) {
  const url = urlOf.get(file);
  const doc = parse(fs.readFileSync(path.join(SRC, file), "utf8"));
  const helmet = find(doc, (n) => n.nodeName === "helmet");
  if (!helmet) continue;
  const { head, jsonLd } = readHead(helmet, url);
  heads[url] = { head, jsonLd };
}
fs.writeFileSync(path.join(OUT, "heads.json"), JSON.stringify(heads, null, 1) + "\n");

// Components (nav, footer, homepage, product and solution templates) are
// ported by hand and reference these states through src/lib/design/pseudo.ts,
// so collect every literal style-* attribute in the export, not just pages'.
for (const file of files) {
  const s = fs.readFileSync(path.join(SRC, file), "utf8");
  for (const m of s.matchAll(/ style-([a-z-]+)="([^"]*)"/g)) {
    if (!m[2].includes("{{")) pseudoClass(m[1], m[2].replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  }
}

const pseudoCss = [...pseudoRules.keys()].sort().map((k) => pseudoRules.get(k)).join("\n");
fs.writeFileSync(
  path.join(ROOT, "src/app/design-pseudo.css"),
  "/* Generated by scripts/import-design.mjs: hover/focus states from the design's style-* attributes. */\n" + pseudoCss + "\n",
);
console.log(`imported ${index.length} pages, ${pseudoRules.size} pseudo rules`);
