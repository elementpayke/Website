/**
 * Hover/focus states from the design export. The design marks them with
 * `style-hover="..."` attributes; scripts/import-design.mjs turns every one
 * it finds (in pages and in components) into a class in
 * src/app/design-pseudo.css. Components use the same naming here, so
 * `hover("background:#2A1FB0")` returns the class the importer generated.
 *
 * Keep normalise() and classFor() in sync with the importer.
 */
const FONT_VARS: Array<[RegExp, string]> = [
  [/'Space Grotesk'/g, "var(--font-heading)"],
  [/'DM Sans'/g, "var(--font-body)"],
  [/'DM Mono'/g, "var(--font-label)"],
];

export function normalise(css: string): string {
  const mapped = FONT_VARS.reduce((acc, [re, v]) => acc.replace(re, v), css);
  return mapped
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => (/!\s*important$/i.test(d) ? d : `${d} !important`))
    .join(";");
}

// FNV-1a, 32-bit: tiny, deterministic and identical in Node and the browser.
function fnv1a(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

export function classFor(pseudo: string, css: string): string {
  return `dp-${fnv1a(`${pseudo}|${normalise(css)}`)}`;
}

export const hover = (css: string) => classFor("hover", css);
export const focus = (css: string) => classFor("focus", css);
