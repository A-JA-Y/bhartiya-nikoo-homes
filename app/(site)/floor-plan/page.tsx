import Image, { type StaticImageData } from "next/image";
import copy from "@/content/pages/floor-plan";
import { blocksOfType, getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import MediaSection, { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import LabelCards from "@/components/content/LabelCards";
import LeadForm from "@/components/content/LeadForm";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import Md from "@/components/content/Md";
import { GatedPlanGrid } from "@/components/GatedPlans";
import { BrochureButton, SiteVisitLink } from "@/components/content/CtaButtons";

import heroImage from "@/assets/interior-1-bhk-study.webp";
import PageStructuredData from "@/components/content/PageStructuredData";
import brochureCover from "@/assets/nikoo-homes-8-brochure-cover.webp";
import villaIllustration from "@/assets/courtyard-villa-illustration.webp";
import greenAvenues from "@/assets/bhartiya-city-green-avenues.webp";
import planStudio from "@/assets/floor-plan-studio.webp";
import plan1Bhk from "@/assets/floor-plan-1-bhk.webp";
import plan1BhkStudy from "@/assets/floor-plan-1-bhk-study.webp";
import plan2Bhk from "@/assets/floor-plan-2-bhk.webp";
import plan2BhkStudy from "@/assets/floor-plan-2-bhk-study.webp";
import plan3Bhk from "@/assets/floor-plan-3-bhk.webp";
import plan3BhkStudy from "@/assets/floor-plan-3-bhk-study.webp";
import planLoft from "@/assets/floor-plan-3-bhk-duplex-loft.webp";
import plan4Bhk from "@/assets/floor-plan-4-bhk-staff.webp";

const HERO_ALT = "Living room render with a bay window at Nikoo Homes 8";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const glance = getSection(copy, "floor-plans-at-a-glance");
const howToRead = getSection(copy, "how-to-read-a-nikoo-homes-8-floor-plan");
const brochure = getSection(copy, "brochure-pdf-download");
const earlier = getSection(copy, "bhartiya-city-nikoo-homes-floor-plans-earlier-phases");
const crossLinks = getSection(copy, "villa-and-configuration-price-master-plan-amenities-and-location");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

type Plan = { image: StaticImageData; label: string; alt: string; subtitle: string };
const plan = (image: StaticImageData, name: string, code: string, area: string): Plan => ({
  image,
  label: `${name} · ${area}`,
  subtitle: `Type ${code}, ${area} saleable. Indicative; furniture is illustrative.`,
  alt: `Nikoo Homes 8 ${name} floor plan, type ${code}, ${area} saleable`,
});

const planSections: { id: string; plans: Plan[] }[] = [
  { id: "studio-floor-plan-a1a-501-sq-ft", plans: [plan(planStudio, "Studio", "A1A", "501 sq ft")] },
  {
    id: "1-bhk-and-1-bhk-study-floor-plans-b3-786-sq-ft-and-c1a-1-088-sq-ft",
    plans: [plan(plan1Bhk, "1 BHK", "B3", "786 sq ft"), plan(plan1BhkStudy, "1 BHK + Study", "C1A", "1,088 sq ft")],
  },
  {
    id: "2-bhk-and-2-bhk-study-floor-plans-d1b-1-165-sq-ft-and-f1a-1-371-sq-ft",
    plans: [plan(plan2Bhk, "2 BHK", "D1B", "1,165 sq ft"), plan(plan2BhkStudy, "2 BHK + Study", "F1A", "1,371 sq ft")],
  },
  {
    id: "3-bhk-and-3-bhk-study-floor-plans-g3-1-730-sq-ft-and-h1b-2-006-sq-ft",
    plans: [plan(plan3Bhk, "3 BHK", "G3", "1,730 sq ft"), plan(plan3BhkStudy, "3 BHK + Study", "H1B", "2,006 sq ft")],
  },
  { id: "3-bhk-duplex-loft-floor-plan-l1b-2-132-sq-ft", plans: [plan(planLoft, "3 BHK Duplex Loft", "L1B", "2,132 sq ft")] },
  { id: "4-bhk-staff-floor-plan-j1a-2-506-sq-ft", plans: [plan(plan4Bhk, "4 BHK + Staff", "J1A", "2,506 sq ft")] },
];

const [howIntro, howClose] = paragraphs(howToRead);
const howItems = blocksOfType(howToRead.blocks, "ul")[0]?.items ?? [];

export default function FloorPlanPage() {
  return (
    <>
      <PageStructuredData copy={copy} type="floor-plan" image={heroImage} />
      <PageHero
        title={copy.h1}
        eyebrow="Bhartiya Garden Enclave floor plans"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Floor Plan", href: "/floor-plan" }]}
        facts={["9 apartment plans", "Studio 501 sq ft to 4 BHK 2,506 sq ft", "Courtyard villas"]}
      >
        <BrochureButton style="primary">Download Floor Plan PDF</BrochureButton>
        <SiteVisitLink />
      </PageHero>

      <Section narrow>
        <Blocks blocks={intro.blocks} className="prose-lead" />
      </Section>

      <TextSection section={glance} tone="cream" narrow={false} eyebrow="All nine plans" table={{ mobileTitleColumn: 1 }} />

      {planSections.map((p, i) => (
        <MediaSection
          key={p.id}
          section={getSection(copy, p.id)}
          tone={i % 2 === 0 ? "white" : "cream"}
          reverse={i % 2 === 1}
          eyebrow={p.plans.length > 1 ? "Two plans" : "Floor plan"}
          media={
            <div>
              <GatedPlanGrid plans={p.plans} className={p.plans.length > 1 ? "grid-cols-2" : "grid-cols-1"} />
              <p className="mt-2 text-xs text-gray-500">Tap a plan to view it full size. Plans unlock with your details.</p>
            </div>
          }
        />
      ))}

      <MediaSection
        section={getSection(copy, "courtyard-villa-floor-plans-2-800-to-3-230-sq-ft")}
        eyebrow="Limited release"
        media={<Figure image={villaIllustration} alt="Illustration of a courtyard villa terrace opening onto a lawn" aspect="4/3" caption="Villa plans are shared once a release is confirmed." />}
      />

      <Section id={howToRead.id} tone="sand">
        <SectionHeading title={howToRead.title} eyebrow="Before you compare" />
        <div className="prose-nh mt-6 max-w-3xl">
          <p>
            <Md text={howIntro} />
          </p>
        </div>
        <LabelCards items={howItems} numbered className="mt-8" />
        <div className="prose-nh mt-8 max-w-3xl">
          <p>
            <Md text={howClose} />
          </p>
        </div>
      </Section>

      {/* Brochure download */}
      <Section id={brochure.id} tone="ink">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <SectionHeading title={brochure.title} eyebrow="Nine plans · One PDF" />
            <div className="mt-8 grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)]">
              <div className="relative aspect-[640/905] overflow-hidden rounded-md shadow-2xl ring-1 ring-white/10" data-animate="zoom-in">
                <Image src={brochureCover} alt="Cover of the Nikoo Homes 8 brochure" fill sizes="160px" className="object-cover" />
              </div>
              <Blocks blocks={brochure.blocks} />
            </div>
          </div>
          <LeadForm
            idPrefix="floor-plan-brochure"
            eyebrow="Brochure PDF"
            title="Send me the Nikoo Homes 8 brochure"
            intro="All nine plans with carpet and saleable areas, the price table, amenities and RERA details."
            submitLabel="Send Me the Brochure"
          />
        </div>
      </Section>

      <MediaSection
        section={earlier}
        eyebrow="Nikoo Homes 1 to 5"
        reverse
        media={<Figure image={greenAvenues} alt="Residential towers and lawns inside Bhartiya City" aspect="4/3" caption="The delivered phases sit inside Bhartiya City." />}
      />

      <TextSection section={crossLinks} tone="cream" eyebrow="Keep reading" />
      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="floor-plan-faq" tone="white" />
      <ExploreGrid current="/floor-plan" tone="cream" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="floor-plan-contact" />
    </>
  );
}
