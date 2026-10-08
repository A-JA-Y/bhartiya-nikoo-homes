import type { StaticImageData } from "next/image";
import copy from "@/content/pages/configurations";
import { blocksOfType, getFaqs, getFaqSection, getSection } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import MediaSection, { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import LabelCards from "@/components/content/LabelCards";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import { BrochureButton, PriceSheetButton } from "@/components/content/CtaButtons";

import heroImage from "@/assets/interior-bedroom.webp";
import interiorStudio from "@/assets/interior-studio.webp";
import interior1Bhk from "@/assets/interior-1-bhk.webp";
import interior2Bhk from "@/assets/interior-2-bhk.webp";
import interior3BhkStudy from "@/assets/interior-3-bhk-study.webp";
import interiorLoft from "@/assets/interior-loft.webp";
import interiorKitchen from "@/assets/interior-kitchen.webp";
import interior3Bhk from "@/assets/interior-3-bhk.webp";
import villaIllustration from "@/assets/courtyard-villa-illustration.webp";
import gardenWalk from "@/assets/garden-walk-illustration.webp";

const HERO_ALT = "Bedroom with a bay window looking over the city at Nikoo Homes 8";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const summary = getSection(copy, "villa-and-configuration-summary");
const areaSplit = getSection(copy, "how-carpet-area-becomes-saleable-area");
const specifications = getSection(copy, "specifications");
const suits = getSection(copy, "which-nikoo-homes-8-configuration-suits-you");
const crossLinks = getSection(copy, "price-floor-plan-master-plan-amenities-and-location");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

// One section per home type, each with an interior render (artist's impressions).
const types: { id: string; nav: string; image: StaticImageData; alt: string; caption: string }[] = [
  { id: "studio-apartment-501-sq-ft", nav: "Studio", image: interiorStudio, alt: "Studio apartment interior render at Nikoo Homes 8", caption: "Studio, type A1A. Artist's impression." },
  { id: "1-bhk-and-1-bhk-study-786-and-1-088-sq-ft", nav: "1 BHK", image: interior1Bhk, alt: "1 BHK bedroom interior render at Nikoo Homes 8", caption: "1 BHK bedroom. Artist's impression." },
  { id: "2-bhk-and-2-bhk-study-1-165-and-1-371-sq-ft", nav: "2 BHK", image: interior2Bhk, alt: "2 BHK living room interior render at Nikoo Homes 8", caption: "2 BHK living room. Artist's impression." },
  { id: "3-bhk-and-3-bhk-study-1-730-and-2-006-sq-ft", nav: "3 BHK", image: interior3BhkStudy, alt: "3 BHK master bedroom with wooden flooring at Nikoo Homes 8", caption: "3 BHK master bedroom. Artist's impression." },
  { id: "3-bhk-duplex-loft-2-132-sq-ft", nav: "Duplex Loft", image: interiorLoft, alt: "Double-height living room of the 3 BHK duplex loft at Nikoo Homes 8", caption: "Duplex loft, double-height living. Artist's impression." },
  { id: "4-bhk-staff-2-506-sq-ft", nav: "4 BHK", image: interiorKitchen, alt: "Open kitchen and dining area render for the Nikoo Homes 8 4 BHK", caption: "4 BHK kitchen and dining. Artist's impression." },
  { id: "courtyard-villas-2-800-to-3-230-sq-ft", nav: "Villas", image: villaIllustration, alt: "Illustration of a courtyard villa terrace opening onto a lawn", caption: "Courtyard villa, limited release. Illustrative." },
];

export default function ConfigurationsPage() {
  return (
    <>
      <PageHero
        title={copy.h1}
        eyebrow="Villa & configuration"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Configurations", href: "/configurations" }]}
        facts={["9 apartment types", "2 courtyard villa types", "501 to 2,506 sq ft", "From ₹67 lakh"]}
      >
        <PriceSheetButton />
        <BrochureButton />
      </PageHero>

      <Section narrow>
        <Blocks blocks={intro.blocks} className="prose-lead" />
        <nav aria-label="Jump to a home type" className="mt-8" data-animate="fade-up">
          <p className="eyebrow mb-3">Jump to a home type</p>
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {[...types, { id: specifications.id, nav: "Specifications" }].map((t) => (
              <li key={t.id} className="flex-shrink-0">
                <a
                  href={`#${t.id}`}
                  className="inline-block rounded-full border border-line bg-cream px-4 py-2 text-xs font-semibold text-gray-800 transition-colors hover:border-gold hover:bg-gold hover:text-white"
                >
                  {t.nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      <TextSection section={summary} tone="cream" narrow={false} eyebrow="Every type, carpet and saleable" table={{ mobileTitleColumn: 1 }} />
      <TextSection section={areaSplit} narrow={false} eyebrow="The developer's area statement" table={{ variant: "scroll" }} />

      {types.map((t, i) => (
        <MediaSection
          key={t.id}
          section={getSection(copy, t.id)}
          tone={i % 2 === 0 ? "cream" : "white"}
          reverse={i % 2 === 1}
          eyebrow={t.nav === "Villas" ? "Limited release" : `Nikoo Homes 8 ${t.nav}`}
          media={
            t.nav === "Villas" ? (
              <div className="grid grid-cols-1 gap-4">
                <Figure image={t.image} alt={t.alt} aspect="4/3" caption={t.caption} />
                <Figure image={gardenWalk} alt="Illustration of a resident walking dogs on the garden lawn by the villa pathway" aspect="2/1" />
              </div>
            ) : (
              <Figure image={t.image} alt={t.alt} aspect="4/3" caption={t.caption} />
            )
          }
        />
      ))}

      <MediaSection
        section={specifications}
        tone="sand"
        eyebrow="What every home is finished with"
        media={<Figure image={interior3Bhk} alt="Kitchen render with a stone counter and modular fit-out at Nikoo Homes 8" aspect="1/1" caption="Kitchen fit-out. Artist's impression." />}
      />

      <Section id={suits.id}>
        <SectionHeading title={suits.title} eyebrow="Who each home suits" />
        <LabelCards items={blocksOfType(suits.blocks, "ul")[0]?.items ?? []} numbered className="mt-8" />
      </Section>

      <TextSection section={crossLinks} tone="cream" eyebrow="Keep reading" />
      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="config-faq" tone="white" />
      <ExploreGrid current="/configurations" tone="cream" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="config-contact" image={interiorLoft} />
    </>
  );
}
