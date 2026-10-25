import Image from "next/image";
import Link from "next/link";
import EPNav from "@/components/nav/EPNav";
import EPFooter from "@/components/footer/EPFooter";
import DesignJsonLd from "@/components/design/DesignJsonLd";
import { resolveNavHref } from "@/components/nav/navData";
import { hover } from "@/lib/design/pseudo";
import { SOLUTION_LIST, STACK_PRODUCTS, type Solution } from "@/lib/solutions/solutionsData";

const flag = (iso: string) => `/flags/${iso}.svg`;
const wrap = { maxWidth: 1240, margin: "0 auto" } as const;
const h2 = {
  fontFamily: "var(--font-heading)",
  fontSize: "clamp(28px, 1.5vw + 22px, 44px)",
  lineHeight: 0.95,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  margin: 0,
} as const;
const mono = { fontFamily: "var(--font-label)", fontSize: 12 } as const;

function FlowCard({ iso, name, detail }: { iso: string; name: string; detail: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 16, background: "rgba(255,255,255,.08)" }}>
      <Image src={flag(iso)} alt="" width={30} height={21} style={{ width: 30, height: 21, borderRadius: 4, objectFit: "cover", flex: "none" }} />
      <span style={{ minWidth: 0 }}>
        <b style={{ display: "block", fontWeight: 600, fontSize: 15 }}>{name}</b>
        <span style={{ display: "block", fontSize: 13, color: "#B4B1D0" }}>{detail}</span>
      </span>
    </div>
  );
}

function FlowLine({ delay }: { delay?: string }) {
  return (
    <div style={{ position: "relative", width: "100%", height: 2, background: "rgba(255,255,255,.15)", overflow: "hidden" }}>
      <span style={{ position: "absolute", top: 0, left: 0, width: "30%", height: 2, background: "#fff", animation: `epFlow 1.8s linear infinite${delay ? ` ${delay}` : ""}` }} />
    </div>
  );
}

/** A solution page (design: Solutions.dc.html). */
export default function SolutionPage({ solution: s }: { solution: Solution }) {
  const h1Text = s.t.replace(/\.$/, "");
  return (
    <>
      <DesignJsonLd url={s.path} />
      <div style={{ position: "sticky", top: 0, zIndex: 30 }}>
        <EPNav active="Solutions" />
      </div>

      <section data-screen-label="Solution hero" style={{ ...wrap, padding: "clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(40px,5vw,64px)" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: "#6E6C8A" }}>
          <Link href="/" style={{ color: "#6E6C8A" }}>
            Home
          </Link>
          <span>/</span>
          <span>Solutions</span>
          <span>/</span>
          <span style={{ color: "#3B2ED3" }}>{s.n}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(32px,5vw,72px)", marginTop: 24, alignItems: "end" }}>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 2.2vw + 26px, 58px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 700, margin: 0, maxWidth: "14ch" }}>
            {h1Text}
            <span aria-hidden="true" style={{ display: "inline-block", width: ".2em", height: ".2em", marginLeft: ".06em", background: "#FFB224" }} />
          </h1>
          <div>
            <p style={{ fontSize: "clamp(17px,1.4vw,19px)", lineHeight: 1.55, color: "#4C4A66", margin: 0, maxWidth: "46ch" }}>{s.l}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <Link href="/contact" className={hover("background:#2A1FB0;color:#fff")} style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#3B2ED3", color: "#fff" }}>
                Talk to sales
              </Link>
              <Link href="/coverage" className={hover("background:#ECEAE4;color:#131126")} style={{ padding: "16px 26px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#F6F4EF", color: "#131126" }}>
                See coverage →
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 40 }}>
          {SOLUTION_LIST.map((o) => (
            <Link
              key={o.slug}
              href={o.path}
              style={{ padding: "9px 14px", borderRadius: 999, fontSize: 14, fontWeight: 500, background: o.slug === s.slug ? "#131126" : "#F6F4EF", color: o.slug === s.slug ? "#fff" : "#131126" }}
            >
              {o.n}
            </Link>
          ))}
        </div>
      </section>

      <section data-screen-label="Money flow" style={{ background: "#131126", color: "#F6F4EF" }}>
        <div style={{ ...wrap, padding: "clamp(56px,7vw,96px) clamp(20px,4vw,48px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
            <h2 style={{ ...h2, maxWidth: "14ch" }}>{s.flowT}</h2>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ ...mono, color: "#B4B1D0", marginRight: 4 }}>FUND IN</span>
              {s.fund.map((n) => {
                const coin = n.startsWith("USD") && n.length === 4;
                return (
                  <span key={n} style={{ padding: "6px 11px", borderRadius: 8, fontSize: 13, fontWeight: 600, background: coin ? "#fff" : "rgba(255,255,255,.12)", color: coin ? "#131126" : "#F6F4EF" }}>
                    {n}
                  </span>
                );
              })}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 16, marginTop: 40, alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8 }}>
              <div style={{ ...mono, letterSpacing: ".1em", color: "#B4B1D0" }}>{s.fromL}</div>
              {s.from.map(([iso, name, detail]) => (
                <FlowCard key={name} iso={iso} name={name} detail={detail} />
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 14, placeItems: "center" }}>
              <FlowLine />
              <div style={{ width: "100%", padding: 22, borderRadius: 22, background: "#fff", color: "#131126", display: "grid", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "#3B2ED3", display: "grid", placeItems: "center" }}>
                    <span style={{ width: 11, height: 11, borderRadius: 3, background: "#fff" }} />
                  </span>
                  <b style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700 }}>ElementPay</b>
                  <span style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#3B2ED3", animation: "epPulse 1.4s infinite" }} />
                </div>
                {s.core.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "10px 12px", borderRadius: 12, background: "#F6F4EF", fontSize: 13 }}>
                    <span style={{ color: "#4C4A66" }}>{k}</span>
                    <b style={{ fontWeight: 600 }}>{v}</b>
                  </div>
                ))}
              </div>
              <FlowLine delay=".9s" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 8 }}>
              <div style={{ ...mono, letterSpacing: ".1em", color: "#B4B1D0" }}>{s.toL}</div>
              {s.to.map(([iso, name, detail]) => (
                <FlowCard key={name} iso={iso} name={name} detail={detail} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: "#F6F4EF" }}>
        <section data-screen-label="Use cases" style={{ ...wrap, padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={h2}>What teams use it for.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 12, marginTop: 32 }}>
            {s.uses.map(([t, d], i) => (
              <div key={t} style={{ padding: 28, borderRadius: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 12, minHeight: 220 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 48, lineHeight: 1, fontWeight: 700, color: "#7C6FFF" }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 26, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.025em", marginTop: "auto" }}>{t}</span>
                <span style={{ fontSize: 15, lineHeight: "23px", color: "#4C4A66" }}>{d}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          data-screen-label="A day"
          style={{ ...wrap, padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}
        >
          <div style={{ position: "sticky", top: 110 }}>
            <h2 style={h2}>A day on ElementPay.</h2>
            <p style={{ fontSize: 16, lineHeight: "25px", color: "#4C4A66", margin: "20px 0 0", maxWidth: "36ch" }}>{s.dayIntro}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 0, gridColumn: "span 2", minWidth: 0 }}>
            {s.day.map(([t, iso, e]) => (
              <div key={`${t}-${e}`} style={{ display: "grid", gridTemplateColumns: "70px 18px minmax(0,1fr)", gap: 16, alignItems: "stretch" }}>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 14, color: "#3B2ED3", paddingTop: 22 }}>{t}</span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ width: 2, height: 24, background: "#E2DED4" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#3B2ED3", flex: "none" }} />
                  <span style={{ width: 2, flex: 1, background: "#E2DED4" }} />
                </span>
                <div style={{ margin: "8px 0", padding: "16px 18px", borderRadius: 16, background: "#fff", display: "flex", gap: 12, alignItems: "center" }}>
                  <Image src={flag(iso)} alt="" width={26} height={18} style={{ width: 26, height: 18, borderRadius: 3, objectFit: "cover", flex: "none" }} />
                  <span style={{ fontSize: 15, lineHeight: "22px" }}>{e}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section data-screen-label="Stack" style={{ ...wrap, padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...h2, lineHeight: "normal", letterSpacing: "-0.03em" }}>Built with.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 12, marginTop: 24 }}>
            {s.stack.map((k) => (
              <Link
                key={k}
                href={resolveNavHref(k)}
                className={hover("background:#ECEAE4;color:#131126")}
                style={{ display: "flex", flexDirection: "column", gap: 8, padding: 24, borderRadius: 20, background: "#fff", color: "#131126" }}
              >
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>{STACK_PRODUCTS[k][0]} →</span>
                <span style={{ fontSize: 14, lineHeight: "21px", color: "#4C4A66" }}>{STACK_PRODUCTS[k][1]}</span>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ ...wrap, padding: "clamp(80px,10vw,140px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ borderRadius: 28, background: "#3B2ED3", color: "#fff", padding: "clamp(36px,6vw,80px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ ...h2, lineHeight: 0.92, letterSpacing: "-0.045em", maxWidth: "12ch" }}>Talk to us about {s.short}.</h2>
            </div>
            <Link href="/contact" className={hover("background:#F6F4EF;color:#131126")} style={{ padding: "16px 28px", borderRadius: 999, fontSize: 16, fontWeight: 500, background: "#fff", color: "#3B2ED3" }}>
              Talk to sales
            </Link>
          </div>
        </section>
        <EPFooter />
      </div>
    </>
  );
}
