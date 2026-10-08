import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import copy from "@/content/pages/master-plan";
import { blocksOfType, getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";
import { MASTER_PLAN_PDF } from "@/data/projectData";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import MediaSection, { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import LabelCards from "@/components/content/LabelCards";
import ImageStrip from "@/components/content/ImageStrip";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import ReraCard from "@/components/content/ReraCard";
import Md from "@/components/content/Md";
import { buttonStyles } from "@/components/content/buttonStyles";
import { PriceSheetButton } from "@/components/content/CtaButtons";

import heroImage from "@/assets/circle-of-life-lawn.webp";
import masterPlan from "@/assets/nikoo-homes-8-master-plan.webp";
import aerialView from "@/assets/nikoo-homes-8-aerial-view.webp";
import centralSpine from "@/assets/central-spine-walkway.webp";
import towers from "@/assets/nikoo-homes-8-towers.webp";
import clubRooftop from "@/assets/black-swan-club.webp";
import communityGarden from "@/assets/community-garden-illustration.webp";
import gardenEnclave from "@/assets/garden-enclave-illustration.webp";
import tennisCourt from "@/assets/nikoo-homes-8-tennis-court.webp";
import villaIllustration from "@/assets/courtyard-villa-illustration.webp";
import gardenWalk from "@/assets/garden-walk-illustration.webp";

const HERO_ALT = "The Circle of Life lawn and gardens along the Central Spine at Nikoo Homes 8";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const glance = getSection(copy, "master-plan-at-a-glance");
const separation = getSection(copy, "how-vehicles-and-people-are-separated");
const towersCopy = getSection(copy, "towers-a-to-f-two-offset-blocks");
const spine = getSection(copy, "the-central-spine-and-the-black-swan-club");
const zones = getSection(copy, "the-22-landscape-zones-on-the-master-plan");
const villaEdge = getSection(copy, "the-villa-edge");
const water = getSection(copy, "water-drainage-and-green-cover");
const phases = getSection(copy, "phases-and-construction-sequence");
const crossLinks = getSection(copy, "villa-and-configuration-floor-plan-price-amenities-and-location");
const checklist = getSection(copy, "what-to-check-on-the-master-plan-before-a-site-visit");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

const [zonesIntro, zonesClose] = paragraphs(zones);

export default function MasterPlanPage() {
  return (
    <>
      <PageHero
        title={copy.h1}
        eyebrow="Bhartiya Garden Enclave master plan"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Master Plan", href: "/master-plan" }]}
        facts={["11.35 acres", "6 towers in two offset blocks", "22 landscape zones", "75% open ground"]}
      >
        <a href={MASTER_PLAN_PDF} download className={buttonStyles.primary}>
          <FaDownload aria-hidden="true" className="text-[11px]" />
          Download Master Plan PDF
        </a>
        <PriceSheetButton style="outline">Get the Full Brochure</PriceSheetButton>
      </PageHero>

      <Section>
        <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-lg" data-animate="zoom-in">
          <a href={MASTER_PLAN_PDF} download aria-label="Download the Nikoo Homes 8 master plan PDF" className="block">
            <Image
              src={masterPlan}
              alt="Nikoo Homes 8 landscape master plan showing Towers A to F, the Central Spine, the Black Swan Club, the tennis court and the courtyard villa edge"
              sizes="(max-width: 1200px) 100vw, 1150px"
              className="h-auto w-full"
            />
          </a>
          <figcaption className="flex flex-col gap-2 border-t border-line px-4 py-3 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <span>Landscape master plan with the 22 numbered zones. Artist&apos;s impression, indicative.</span>
            <a href={MASTER_PLAN_PDF} download className="text-link whitespace-nowrap">
              Download the PDF <span className="arrow-nudge">→</span>
            </a>
          </figcaption>
        </figure>
        <Blocks blocks={intro.blocks} className="prose-lead mx-auto mt-10 max-w-4xl" />
      </Section>

      <MediaSection
        section={glance}
        tone="cream"
        eyebrow="At a glance"
        reverse
        media={<Figure image={aerialView} alt="Aerial view of the Black Swan Club, the gardens and the tennis court at Nikoo Homes 8" aspect="4/3" />}
      />

      <MediaSection
        section={separation}
        eyebrow="Cars on the edge"
        media={<Figure image={centralSpine} alt="Families walking along the car-free Central Spine at Nikoo Homes 8" aspect="4/3" caption="The pedestrian Central Spine (zone 13). Artist's impression." />}
      />

      <MediaSection
        section={towersCopy}
        tone="cream"
        eyebrow="16 to 24 floors"
        reverse
        media={<Figure image={towers} alt="Nikoo Homes 8 towers in two staggered blocks above the gardens" aspect="4/5" />}
      />

      <MediaSection
        section={spine}
        eyebrow="Zone 13 and zone 14"
        media={<Figure image={clubRooftop} alt="The Black Swan Club and its rooftop swimming pool on the Central Spine" aspect="16/10" caption="The Black Swan Club and pool (zone 14). Artist's impression." />}
      />

      <Section id={zones.id} tone="sand">
        <SectionHeading title={zones.title} eyebrow="22 numbered zones" />
        <div className="prose-nh mt-6 max-w-3xl">
          <p>
            <Md text={zonesIntro} />
          </p>
        </div>
        <LabelCards items={blocksOfType(zones.blocks, "ul")[0]?.items ?? []} columns={2} className="mt-8" />
        <div className="prose-nh mt-8 max-w-3xl">
          <p>
            <Md text={zonesClose} />
          </p>
        </div>
        <ImageStrip
          className="mt-10"
          images={[
            { image: communityGarden, alt: "Illustration of a resident tending the community garden", caption: "Community garden (2)" },
            { image: tennisCourt, alt: "Tennis court at one end of the Central Spine", caption: "Tennis court (20)" },
            { image: gardenEnclave, alt: "Illustration of a flowering garden beside a home", caption: "Wildflower and sensory gardens" },
          ]}
        />
      </Section>

      <MediaSection
        section={villaEdge}
        eyebrow="Zone 10"
        reverse
        media={<Figure image={villaIllustration} alt="Illustration of a courtyard villa terrace opening onto a lawn" aspect="4/3" caption="Courtyard villas, limited release. Illustrative." />}
      />

      <MediaSection
        section={water}
        tone="cream"
        eyebrow="75% open ground"
        media={<Figure image={gardenWalk} alt="Illustration of a resident walking dogs across the planted lawns at Nikoo Homes 8" aspect="2/1" />}
      />

      <MediaSection section={phases} eyebrow="Two RERA phases" reverse media={<ReraCard />} />

      <TextSection section={crossLinks} tone="cream" eyebrow="Keep reading" />

      <Section id={checklist.id}>
        <SectionHeading title={checklist.title} eyebrow="On the site visit" />
        <LabelCards items={blocksOfType(checklist.blocks, "ul")[0]?.items ?? []} numbered className="mt-8" />
      </Section>

      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="master-plan-faq" />
      <ExploreGrid current="/master-plan" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="master-plan-contact" image={heroImage} />
    </>
  );
}
