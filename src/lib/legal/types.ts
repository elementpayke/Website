import type { ReactNode } from "react";

export type LegalBlock =
  | { type: "p"; children: ReactNode }
  | { type: "ul"; items: ReactNode[] }
  | { type: "clauses"; items: { n: string; children: ReactNode }[] }
  | { type: "table"; head: string[]; rows: ReactNode[][] };

export type LegalSection = {
  /** Heading text verbatim from source, e.g. "1. Definitions" or "Schedule 1: Prohibited Activities". */
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  /** Short line under the eyebrow date, e.g. version/effective date. */
  eyebrow: string;
  lede: string;
  /** Optional preamble paragraph rendered above the first numbered section. */
  intro?: ReactNode;
  sections: LegalSection[];
};
