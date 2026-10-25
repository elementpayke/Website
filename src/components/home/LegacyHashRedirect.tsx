"use client";

import { useEffect } from "react";

// The old single-page site linked to sections by hash (/#contact, ...).
// Hashes never reach the server, so inbound links are mapped here
// (HANDOFF.md, "Redirects from the old site"). Only runs on first load, so
// in-page anchors such as #platform keep working.
const LEGACY_HASHES: Record<string, string> = {
  "#contact": "/contact",
  "#payments": "/payments",
  "#coverage": "/coverage",
  "#solutions": "/for-fintechs-and-wallets",
};

export default function LegacyHashRedirect() {
  useEffect(() => {
    const target = LEGACY_HASHES[window.location.hash];
    if (target) window.location.replace(target);
  }, []);
  return null;
}
