import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Next.js app-router folders can't mix static text with a dynamic segment
  // (e.g. "send-money-to-[country]" is not a valid route). These rewrites
  // expose the required hyphenated public URLs while the actual pages live
  // at clean internal dynamic routes.
  async rewrites() {
    return [
      { source: "/send-money-to-:country", destination: "/send-money-to/:country" },
      { source: "/stablecoin-payments-in-:country", destination: "/stablecoin-payments-in/:country" },
      { source: "/open-a-:currency-account", destination: "/open-a-account/:currency" },
      { source: "/send-money-from-:origin-to-:dest", destination: "/send-money-from/:origin/:dest" },
      { source: "/usdc-to-:country", destination: "/usdc-to/:country" },
      { source: "/usdt-to-:country", destination: "/usdt-to/:country" },
    ];
  },
};

export default nextConfig;
