import { DM_Mono, DM_Sans, Space_Grotesk } from "next/font/google";

// BRAND.md section 3: Space Grotesk headings, DM Sans body, DM Mono labels.
// Shared by both root layouts ((site) in English, (fr) in French).
const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-label",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const fontVariables = `${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`;
