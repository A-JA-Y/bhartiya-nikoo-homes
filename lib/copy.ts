import type { Block, Faq, PageCopy, Section } from "@/content/pages/types";

// Looks a section up by id. Throws so a renamed heading in the copy fails the
// build instead of silently dropping a section from the page.
export function getSection(copy: PageCopy, id: string): Section {
  const section = copy.sections.find((s) => s.id === id);
  if (!section) {
    throw new Error(`Section "${id}" not found in the copy for ${copy.meta.path}`);
  }
  return section;
}

export function blocksOfType<T extends Block["type"]>(
  blocks: Block[],
  type: T
): Extract<Block, { type: T }>[] {
  return blocks.filter((b): b is Extract<Block, { type: T }> => b.type === type);
}

// The page's FAQ list, from whichever section carries the question blocks.
export function getFaqs(copy: PageCopy): Faq[] {
  for (const section of copy.sections) {
    const faq = blocksOfType(section.blocks, "faq")[0];
    if (faq) return faq.items;
  }
  return [];
}

export function getFaqSection(copy: PageCopy): Section {
  const section = copy.sections.find((s) => s.blocks.some((b) => b.type === "faq"));
  if (!section) throw new Error(`No FAQ section in the copy for ${copy.meta.path}`);
  return section;
}

// Paragraph text of a section, in order.
export function paragraphs(section: Section): string[] {
  return blocksOfType(section.blocks, "p").map((b) => b.text);
}
