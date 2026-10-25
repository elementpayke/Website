"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { hover } from "@/lib/design/pseudo";
import {
  ICONS,
  MENU_FEATURE,
  NAV_GROUPS,
  NAV_GROUP_KEYS,
  resolveNavHref,
  type NavGroupKey,
} from "./navData";

const INK = "#131126";
const PURPLE = "#3B2ED3";
const MUTED = "#4C4A66";

type Props = {
  active?: NavGroupKey;
};

export default function EPNav({ active }: Props) {
  const [menu, setMenu] = useState<NavGroupKey | null>(null);
  const [mob, setMob] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [grp, setGrp] = useState<NavGroupKey | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      const isMob = w <= 900;
      setMob(isMob);
      setNarrow(w <= 420);
      if (!isMob) setMobOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openMenu = (key: NavGroupKey) => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    setMenu(key);
  };
  const scheduleOpen = (key: NavGroupKey) => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setMenu(key), menu ? 200 : 70);
  };
  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 450);
  };
  const closeNow = () => {
    clearTimeout(openTimer.current);
    setMenu(null);
  };

  const showCta = !(mob && narrow);

  return (
    <header
      onMouseEnter={() => clearTimeout(closeTimer.current)}
      onMouseLeave={scheduleClose}
      style={{ padding: "12px clamp(12px,3vw,32px) 0", fontFamily: "var(--font-body)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(8px,1.6vw,20px)",
            padding: "8px 8px 8px clamp(12px,1.6vw,20px)",
            borderRadius: 18,
            background: "rgba(246,244,239,.9)",
            backdropFilter: "saturate(1.4) blur(16px)",
            boxShadow: "inset 0 0 0 1px rgba(19,17,38,.06)",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 10, color: INK, flex: "none" }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: PURPLE,
                display: "grid",
                placeItems: "center",
              }}
            >
              <span style={{ width: 12, height: 12, borderRadius: 3, background: "#fff" }} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: "-0.02em",
              }}
            >
              ElementPay
            </span>
          </Link>

          {!mob && (
            <nav
              style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
                minWidth: 0,
                flexWrap: "wrap",
                overflow: "hidden",
                height: 40,
              }}
            >
              {NAV_GROUP_KEYS.map((key) => {
                const isActive = menu === key || (!menu && active === key);
                return (
                  <button
                    key={key}
                    type="button"
                    onMouseEnter={() => scheduleOpen(key)}
                    onMouseLeave={() => clearTimeout(openTimer.current)}
                    onClick={() => openMenu(key)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 40,
                      boxSizing: "border-box",
                      lineHeight: 1,
                      padding: "0 clamp(6px,0.9vw,14px)",
                      border: 0,
                      borderRadius: 12,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      font: "500 clamp(13px,1.3vw,15px) var(--font-body)",
                      background: menu === key ? "rgba(19,17,38,.06)" : "transparent",
                      color: isActive ? PURPLE : MUTED,
                    }}
                  >
                    {key}
                  </button>
                );
              })}
              <Link
                href="/blog"
                onMouseEnter={closeNow}
                className={hover("background:#F6F4EF;color:#131126")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 40,
                  boxSizing: "border-box",
                  lineHeight: 1,
                  padding: "0 clamp(6px,0.9vw,14px)",
                  borderRadius: 12,
                  whiteSpace: "nowrap",
                  font: "500 clamp(13px,1.3vw,15px) var(--font-body)",
                  color: MUTED,
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
            </nav>
          )}

          {mob && <span style={{ flex: 1 }} />}

          {showCta && (
            <Link
              href="/contact"
              className={hover("background:#2A1FB0;color:#fff")}
              style={{
                padding: "11px clamp(12px,1.4vw,18px)",
                borderRadius: 999,
                fontSize: "clamp(13px,1.3vw,15px)",
                fontWeight: 500,
                background: PURPLE,
                color: "#fff",
                whiteSpace: "nowrap",
                flex: "none",
              }}
            >
              Talk to sales
            </Link>
          )}

          {mob && (
            <button
              type="button"
              onClick={() => {
                setMobOpen((v) => !v);
                setGrp((g) => g ?? (active && NAV_GROUPS[active] ? active : "Products"));
              }}
              aria-expanded={mobOpen}
              aria-label="Menu"
              style={{
                height: 44,
                minWidth: 44,
                padding: "0 14px",
                border: 0,
                borderRadius: 999,
                background: INK,
                color: "#fff",
                font: "500 15px var(--font-body)",
                cursor: "pointer",
                flex: "none",
              }}
            >
              {mobOpen ? "Close" : "Menu"}
            </button>
          )}
        </div>

        {mob && mobOpen && (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "100%",
              marginTop: 8,
              maxHeight: "calc(100dvh - 96px)",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "contain",
              borderRadius: 20,
              background: "#fff",
              color: INK,
              boxShadow: "0 30px 60px -20px rgba(19,17,38,.35)",
              padding: "8px 8px 16px",
            }}
          >
            <Link
              href="/contact"
              className={hover("background:#2A1FB0;color:#fff")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 52,
                margin: "6px 6px 10px",
                borderRadius: 999,
                background: PURPLE,
                color: "#fff",
                fontWeight: 500,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Talk to sales
            </Link>
            {NAV_GROUP_KEYS.map((key) => {
              const open = grp === key;
              return (
                <div key={key} style={{ borderTop: "1px solid #EEECF4" }}>
                  <button
                    type="button"
                    onClick={() => setGrp((g) => (g === key ? null : key))}
                    aria-expanded={open}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      minHeight: 52,
                      padding: "0 14px",
                      border: 0,
                      background: "transparent",
                      color: INK,
                      font: "600 17px var(--font-body)",
                      cursor: "pointer",
                    }}
                  >
                    {key}
                    <span style={{ color: PURPLE, fontSize: 20 }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", padding: "0 6px 8px" }}>
                      {NAV_GROUPS[key].items.map(([icon, t, d, x]) => (
                        <a
                          key={t}
                          href={resolveNavHref(x)}
                          target={x.startsWith("http") ? "_blank" : "_self"}
                          rel={x.startsWith("http") ? "noopener" : undefined}
                          className={hover("background:#F6F4EF;color:#131126")}
                          style={{
                            display: "flex",
                            gap: 12,
                            alignItems: "flex-start",
                            padding: "12px 8px",
                            borderRadius: 12,
                            color: INK,
                            minHeight: 44,
                            textDecoration: "none",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={PURPLE}
                            strokeWidth={1.6}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", marginTop: 2 }}
                          >
                            <path d={ICONS[icon]} />
                          </svg>
                          <span>
                            <span style={{ display: "block", fontWeight: 600, fontSize: 15 }}>{t}</span>
                            <span style={{ display: "block", fontSize: 13, lineHeight: "19px", color: MUTED, marginTop: 2 }}>
                              {d}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/blog"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: 52,
                padding: "0 14px",
                borderTop: "1px solid rgba(19,17,38,.08)",
                color: INK,
                font: "600 17px var(--font-body)",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
          </div>
        )}

        {!mob && menu && (
          <div
            onMouseEnter={() => clearTimeout(closeTimer.current)}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(100%,880px)",
              top: "100%",
              borderTop: "14px solid transparent",
              backgroundClip: "padding-box",
              padding: 10,
              borderRadius: 22,
              backgroundColor: "#fff",
              animation: "epDrop .18s ease-out",
              color: INK,
              boxShadow: "0 40px 80px -24px rgba(19,17,38,.35)",
              display: "grid",
              gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
              gap: 10,
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                padding: 22,
                minHeight: 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 18,
                color: "#fff",
                background: INK,
              }}
            >
              <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#B4B1D0" }}>
                {"0" + (NAV_GROUP_KEYS.indexOf(menu) + 1) + " / 0" + NAV_GROUP_KEYS.length}
              </span>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: PURPLE,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d={ICONS[NAV_GROUPS[menu].items[0][0]]} />
                </svg>
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {menu}
                </div>
                <div style={{ fontSize: 14, lineHeight: "20px", color: "#B4B1D0", marginTop: 6 }}>
                  {NAV_GROUPS[menu].blurb}
                </div>
                <a
                  href={resolveNavHref(MENU_FEATURE[menu].href)}
                  className={hover("color:#A79EFF")}
                  style={{ display: "inline-block", marginTop: 14, color: "#fff", fontSize: 13, fontWeight: 500 }}
                >
                  {MENU_FEATURE[menu].title} →
                </a>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,250px),1fr))",
                gap: 2,
                alignContent: "start",
              }}
            >
              {NAV_GROUPS[menu].items.map(([icon, t, d, x]) => (
                <a
                  key={t}
                  href={resolveNavHref(x)}
                  target={x.startsWith("http") ? "_blank" : "_self"}
                  rel={x.startsWith("http") ? "noopener" : undefined}
                  onClick={closeNow}
                  className={hover("background:#F6F4EF;color:#131126")}
                  style={{ display: "flex", gap: 14, padding: 14, borderRadius: 14, color: INK }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={PURPLE}
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none", marginTop: 1 }}
                  >
                    <path d={ICONS[icon]} />
                  </svg>
                  <span>
                    <span style={{ display: "block", fontWeight: 600, fontSize: 15 }}>{t}</span>
                    <span style={{ display: "block", fontSize: 13, lineHeight: "19px", color: MUTED, marginTop: 2 }}>
                      {d}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
