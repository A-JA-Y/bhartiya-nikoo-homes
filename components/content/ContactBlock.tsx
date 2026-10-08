import Image, { type StaticImageData } from "next/image";
import type { Section as CopySection } from "@/content/pages/types";
import { SectionHeading } from "./Section";
import Blocks from "./Blocks";
import LeadForm from "./LeadForm";
import { CallLink, WhatsAppLink } from "./CtaButtons";
import Md from "./Md";
import defaultImage from "@/assets/nikoo-homes-8-aerial-view.webp";

// The "Contact Us" section that closes every page: the page's own contact
// copy, call and WhatsApp buttons, the lead form, then the page disclaimer.
export default function ContactBlock({
  section,
  disclaimer,
  idPrefix,
  image = defaultImage,
  formTitle,
  formIntro,
}: {
  section: CopySection;
  disclaimer?: string | null;
  idPrefix: string;
  image?: StaticImageData;
  formTitle?: string;
  formIntro?: string;
}) {
  return (
    <section
      id="book-site-visit"
      className="on-dark relative isolate scroll-mt-24 overflow-hidden bg-ink px-4 py-14 text-white sm:px-6 md:py-20"
    >
      <Image src={image} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink/92 to-ink/75" />

      <div className="mx-auto grid grid-cols-1 max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
        <div data-animate="fade-right">
          <SectionHeading title={section.title} eyebrow="Site visits seven days a week" />
          <Blocks blocks={section.blocks} className="mt-6" />
          <div className="mt-7 flex flex-wrap gap-3">
            <CallLink />
            <WhatsAppLink />
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            {[
              "Pickup from Hebbal or Manyata",
              "Live cost sheet and inventory, same day",
              "Home loan offers compared at no cost",
              "NRI documentation handled",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div data-animate="fade-left">
          <LeadForm idPrefix={idPrefix} title={formTitle} intro={formIntro} />
        </div>
      </div>

      {disclaimer && (
        <p className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-[11px] italic leading-relaxed text-white/55 sm:text-xs">
          <Md text={disclaimer} />
        </p>
      )}
    </section>
  );
}
