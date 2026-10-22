import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot", "Applebot"], allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
