import Image, { type StaticImageData } from "next/image";
import type { Section as CopySection } from "@/content/pages/types";
import Section, { type Tone } from "./Section";
import Blocks from "./Blocks";

export type Topic = { section: CopySection; image: StaticImageData; alt: string; position?: string };

// Short copy sections shown as image cards, two across from md up. Each card
// keeps its section's H2 and anchor.
export default function TopicGrid({
  topics,
  eyebrow,
  tone = "white",
}: {
  topics: Topic[];
  eyebrow?: string;
  tone?: Tone;
}) {
  return (
    <Section tone={tone}>
      {eyebrow && <p className="eyebrow mb-6" data-animate="fade-up">{eyebrow}</p>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8" data-stagger>
        {topics.map(({ section, image, alt, position }) => (
          <article
            key={section.id}
            id={section.id}
            data-animate="fade-up"
            className="card-anim group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-sand">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: position ?? "center" }}
              />
            </div>
            <div className="flex-1 p-5 sm:p-6">
              <h2 className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">{section.title}</h2>
              <Blocks blocks={section.blocks} className="mt-3" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
