import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticleBySlug } from "@/lib/blog/articles";
import { buildArticleBlocks } from "@/lib/blog/toc";
import ArticleToc from "@/components/blog/ArticleToc";
import { SITE_URL } from "@/lib/site";
import { TYPE, fullStopSquare } from "@/lib/brand";

const INK = "#131126";
const PURPLE = "#3B2ED3";
const MUTED = "#4C4A66";
const SOFT = "#6E6C8A";
const CREAM = "#F6F4EF";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const title = `${article.title} | ElementPay`;
  return {
    title: article.title,
    description: article.desc,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title,
      description: article.desc,
      url: `/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.desc,
    },
  };
}

function pickMoreArticles(slug: string, cat: string) {
  return ARTICLES.filter((a) => a.slug !== slug)
    .sort((a, b) => Number(b.cat === cat) - Number(a.cat === cat))
    .slice(0, 3);
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const { blocks, toc } = buildArticleBlocks(article);
  const more = pickMoreArticles(article.slug, article.cat);
  const h1Text = article.title.replace(/\.$/, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.desc,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.date,
    author: { "@type": "Organization", name: "ElementPay" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article data-screen-label="Article">
        <header style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(20px,4vw,48px) 0" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-label)", fontSize: 13, color: SOFT }}>
            <Link href="/blog" style={{ color: SOFT, textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: PURPLE }}>{article.cat}</span>
          </div>
          <h1 style={{ ...TYPE.h1Article, margin: "20px 0 0" }}>
            {h1Text}
            <span aria-hidden="true" style={fullStopSquare} />
          </h1>
          <p style={{ fontSize: "clamp(18px,1.6vw,21px)", lineHeight: 1.5, color: MUTED, margin: "20px 0 0", maxWidth: "60ch" }}>
            {article.desc}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <span style={{ width: 40, height: 40, borderRadius: 12, background: PURPLE, display: "grid", placeItems: "center" }}>
              <span style={{ width: 15, height: 15, borderRadius: 4, background: "#fff" }} />
            </span>
            <span>
              <span style={{ display: "block", fontWeight: 600, fontSize: 15 }}>ElementPay Team</span>
              <span style={{ display: "block", fontFamily: "var(--font-label)", fontSize: 12, color: SOFT }}>
                {article.date} · {article.read} read
              </span>
            </span>
          </div>
        </header>

        <div style={{ maxWidth: 1240, margin: "40px auto 0", padding: "0 clamp(20px,4vw,48px)" }}>
          <div style={{ position: "relative", aspectRatio: "21/8", borderRadius: 28, background: PURPLE, overflow: "hidden" }}>
            <Image
              src={`/flags/${article.flag}.svg`}
              alt=""
              fill
              sizes="1240px"
              style={{ objectFit: "cover", filter: "grayscale(1) contrast(1.2)", mixBlendMode: "screen", opacity: 0.4 }}
            />
          </div>
        </div>

        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "clamp(40px,6vw,72px) clamp(20px,4vw,48px) 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
            gap: "clamp(24px,4vw,64px)",
            alignItems: "start",
          }}
        >
          <ArticleToc toc={toc} tags={article.tags} />

          <div style={{ gridColumn: "span 2", minWidth: 0, maxWidth: 720 }}>
            {blocks.map((b, i) => {
              if (b.isH) {
                return (
                  <h2 key={i} id={b.id} style={{ ...TYPE.h3Feature, margin: "40px 0 0" }}>
                    {b.text}
                  </h2>
                );
              }
              if (b.isUl) {
                return (
                  <ul key={i} style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                    {b.items.map((item) => (
                      <li
                        key={item}
                        style={{ display: "flex", gap: 14, padding: "14px 16px", borderRadius: 14, background: CREAM, fontSize: 16, lineHeight: "25px" }}
                      >
                        <span style={{ color: PURPLE, flex: "none" }}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} style={{ fontSize: 18, lineHeight: "30px", color: "#131126", margin: "16px 0 0" }}>
                  {b.text}
                </p>
              );
            })}

            <div
              style={{
                marginTop: 48,
                padding: 28,
                borderRadius: 24,
                background: INK,
                color: "#F6F4EF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Image
                  src={`/flags/${article.flag}.svg`}
                  alt=""
                  width={40}
                  height={28}
                  style={{ borderRadius: 5, objectFit: "cover" }}
                />
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Move money with ElementPay.
                </span>
              </span>
              <Link
                href="/contact"
                style={{ padding: "14px 22px", borderRadius: 12, background: "#fff", color: INK, fontWeight: 500, textDecoration: "none" }}
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>

        <section style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,8vw,112px) clamp(20px,4vw,48px) 0" }}>
          <h2 style={{ ...TYPE.h2Section, margin: 0 }}>Keep reading.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 12, marginTop: 24 }}>
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/blog/${m.slug}`}
                style={{ display: "flex", gap: 16, alignItems: "center", padding: 18, borderRadius: 20, background: CREAM, color: INK, textDecoration: "none" }}
              >
                <Image
                  src={`/flags/${m.flag}.svg`}
                  alt=""
                  width={64}
                  height={46}
                  style={{ borderRadius: 8, objectFit: "cover", flex: "none" }}
                />
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-label)", fontSize: 12, color: PURPLE }}>{m.cat}</span>
                  <span style={{ display: "block", fontWeight: 600, fontSize: 15, lineHeight: "21px", marginTop: 4 }}>{m.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
