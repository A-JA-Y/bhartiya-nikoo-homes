import type { Faq } from "@/content/pages/types";
import FaqAccordion from "@/components/FaqAccordion";
import Section, { SectionHeading } from "./Section";
import JsonLd from "./JsonLd";
import { plainText } from "./Md";

// FAQ accordion plus the matching FAQPage markup, built from the same items
// so the structured data always matches the visible answers.
export default function FaqSection({
  title,
  items,
  idPrefix,
  tone = "cream",
  eyebrow = "FAQ",
}: {
  title: string;
  items: Faq[];
  idPrefix: string;
  tone?: "white" | "cream" | "sand";
  eyebrow?: string;
}) {
  return (
    <Section id="faq" tone={tone} narrow="center">
      <SectionHeading title={title} eyebrow={eyebrow} align="center" className="mb-8 md:mb-10" />
      <FaqAccordion items={items} idPrefix={idPrefix} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: plainText(item.q),
            acceptedAnswer: { "@type": "Answer", text: plainText(item.a) },
          })),
        }}
      />
    </Section>
  );
}
