import type { ReactNode } from "react";
import type { Section as CopySection } from "@/content/pages/types";
import type { DataTableOptions } from "./DataTable";
import Section, { SectionHeading, type Tone } from "./Section";
import Blocks from "./Blocks";

// A copy section with media beside it: heading and copy on one side, image
// (or any media) on the other; stacked heading, media, copy on phones.
export default function MediaSection({
  section,
  media,
  eyebrow,
  tone = "white",
  reverse = false,
  table,
  after,
  id,
}: {
  section: CopySection;
  media: ReactNode;
  eyebrow?: string;
  tone?: Tone;
  reverse?: boolean;
  table?: DataTableOptions;
  after?: ReactNode;
  id?: string;
}) {
  return (
    <Section id={id ?? section.id} tone={tone}>
      <div className={`media-grid ${reverse ? "is-reversed" : ""}`}>
        <div className="mg-head">
          <SectionHeading title={section.title} eyebrow={eyebrow} />
        </div>
        <div className="mg-media">{media}</div>
        <div className="mg-body" data-animate="fade-up">
          <Blocks blocks={section.blocks} table={table} />
          {after}
        </div>
      </div>
    </Section>
  );
}

// A copy section without media, full width.
export function TextSection({
  section,
  eyebrow,
  tone = "white",
  narrow = true,
  table,
  before,
  after,
  id,
}: {
  section: CopySection;
  eyebrow?: string;
  tone?: Tone;
  narrow?: boolean | "center";
  table?: DataTableOptions;
  before?: ReactNode;
  after?: ReactNode;
  id?: string;
}) {
  return (
    <Section id={id ?? section.id} tone={tone} narrow={narrow}>
      <SectionHeading title={section.title} eyebrow={eyebrow} />
      {before}
      <div className="mt-6" data-animate="fade-up">
        <Blocks blocks={section.blocks} table={table} />
      </div>
      {after}
    </Section>
  );
}
