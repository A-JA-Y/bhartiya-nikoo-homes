// Shape of the page copy modules in this folder. Each module holds one page's
// publishable copy from its SEO content doc: meta tags, the H1, and the H2
// sections in order. Inline text is a small Markdown subset rendered by
// components/content/Md.tsx: [label](/path) links and **bold**.

export type Faq = { q: string; a: string };

export type Card = { title: string; href: string; meta: string; text: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "label"; text: string }
  | { type: "table"; head: string[] | null; rows: string[][] }
  | { type: "faq"; items: Faq[] }
  | { type: "cards"; items: Card[] }
  | { type: "cta"; labels: string[] };

export type Section = { id: string; title: string; blocks: Block[] };

export type PageCopy = {
  meta: { title: string; description: string; path: string };
  h1: string;
  sections: Section[];
  disclaimer: string | null;
};
