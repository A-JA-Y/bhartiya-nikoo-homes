import Image from "next/image";
import { FaDumbbell, FaLaptop, FaUsers, FaBook } from "react-icons/fa";
import copy from "@/content/pages/amenities";
import { blocksOfType, getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

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
import Md from "@/components/content/Md";
import { PriceSheetButton, SiteVisitLink } from "@/components/content/CtaButtons";

import heroImage from "@/assets/black-swan-club.webp";
import aerialView from "@/assets/nikoo-homes-8-aerial-view.webp";
import clubLounge from "@/assets/black-swan-club-lounge.webp";
import clubDining from "@/assets/black-swan-club-dining.webp";
import partyIllustration from "@/assets/black-swan-club-party-illustration.webp";
import tennisCourt from "@/assets/nikoo-homes-8-tennis-court.webp";
import runningIllustration from "@/assets/nikoo-life-health.webp";
import circleOfLife from "@/assets/circle-of-life-lawn.webp";
import centralSpine from "@/assets/central-spine-walkway.webp";
import communityGarden from "@/assets/community-garden-illustration.webp";
import gardenEnclave from "@/assets/garden-enclave-illustration.webp";
import gardenWalk from "@/assets/garden-walk-illustration.webp";
import familyIllustration from "@/assets/nikoo-life-family.webp";
import towers from "@/assets/nikoo-homes-8-towers.webp";
import mall from "@/assets/bhartiya-mall-of-bengaluru.webp";
import leela from "@/assets/the-leela-bhartiya-city.webp";
import highStreet from "@/assets/bhartiya-city-high-street.webp";
import greenAvenues from "@/assets/bhartiya-city-green-avenues.webp";

const HERO_ALT = "The Black Swan Club with its rooftop swimming pool at Nikoo Homes 8";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const glance = getSection(copy, "amenities-at-a-glance");
const club = getSection(copy, "the-black-swan-club-40-000-sq-ft");
const pools = getSection(copy, "pools-courts-and-tracks");
const gardens = getSection(copy, "gardens-decks-and-the-central-spine");
const family = getSection(copy, "family-children-and-pets");
const estate = getSection(copy, "estate-security-and-sustainability");
const beyond = getSection(copy, "amenities-beyond-the-gate-bhartiya-city");
const cost = getSection(copy, "what-the-amenities-cost-and-when-they-open");
const crossLinks = getSection(copy, "villa-and-configuration-floor-plan-master-plan-price-and-location");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

const [clubIntro, clubClose] = paragraphs(club);

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title={copy.h1}
        eyebrow="Bhartiya Garden Enclave amenities"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Amenities", href: "/amenities" }]}
        facts={["40,000+ sq ft clubhouse", "4 pools · 4 courts", "Car-free Central Spine", "30+ amenities"]}
      >
        <PriceSheetButton />
        <SiteVisitLink />
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
          <Blocks blocks={intro.blocks} className="prose-lead" />
          <Figure image={aerialView} alt="Aerial view of the Black Swan Club, the gardens and the tennis court on the Central Spine" aspect="16/10" />
        </div>
      </Section>

      <TextSection section={glance} tone="cream" narrow={false} eyebrow="Thirty-plus items in five groups" />

      {/* The Black Swan Club */}
      <Section id={club.id} tone="brown">
        <SectionHeading title={club.title} eyebrow="Zone 14 on the master plan" />
        <div className="prose-nh mt-6 max-w-3xl">
          <p>
            <Md text={clubIntro} />
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
          <LabelCards
            items={blocksOfType(club.blocks, "ul")[0]?.items ?? []}
            columns={2}
            icons={[FaDumbbell, FaLaptop, FaUsers, FaBook]}
          />
          <div className="grid grid-cols-2 gap-3 self-start" data-animate="zoom-in">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image src={partyIllustration} alt="Illustration of residents gathering at the Black Swan Club" fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image src={clubLounge} alt="Lounge inside the Black Swan Club" fill sizes="(max-width: 1024px) 50vw, 260px" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image src={clubDining} alt="A chef plating a dish at the Black Swan Club" fill sizes="(max-width: 1024px) 50vw, 260px" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="prose-nh mt-8 max-w-3xl">
          <p>
            <Md text={clubClose} />
          </p>
        </div>
      </Section>

      <MediaSection
        section={pools}
        eyebrow="Four pools · Four courts"
        media={
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-3">
            <Figure image={tennisCourt} alt="Tennis court at one end of the Central Spine" aspect="4/3" sizes="(max-width: 1024px) 66vw, 320px" />
            <Figure image={runningIllustration} alt="Illustration of residents running on the jogging track" aspect="2/3" sizes="(max-width: 1024px) 33vw, 160px" />
          </div>
        }
      />

      <MediaSection
        section={gardens}
        tone="cream"
        eyebrow="Bhartiya Garden Enclave"
        reverse
        media={<Figure image={circleOfLife} alt="The Circle of Life lawn and the gardens along the Central Spine" aspect="4/3" />}
        after={
          <ImageStrip
            columns={3}
            aspect="1/1"
            className="mt-8"
            images={[
              { image: centralSpine, alt: "Tree-lined Central Spine walkway", caption: "Central Spine" },
              { image: communityGarden, alt: "Illustration of the community garden and organic kitchen", caption: "Community garden" },
              { image: gardenEnclave, alt: "Illustration of a flowering garden", caption: "Sensory gardens" },
            ]}
          />
        }
      />

      <MediaSection
        section={family}
        eyebrow="Play, barbecue and a pet zone"
        media={
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-3">
            <Figure image={gardenWalk} alt="Illustration of a resident walking two dogs on the lawns" aspect="4/3" sizes="(max-width: 1024px) 66vw, 320px" />
            <Figure image={familyIllustration} alt="Illustration of a family cooking together" aspect="2/3" sizes="(max-width: 1024px) 33vw, 160px" />
          </div>
        }
      />

      <MediaSection
        section={estate}
        tone="sand"
        eyebrow="The systems behind the site"
        reverse
        media={<Figure image={towers} alt="Nikoo Homes 8 towers above the planted podium and the ring road" aspect="4/3" />}
      />

      <Section id={beyond.id}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12">
          <SectionHeading title={beyond.title} eyebrow="Five to seven minutes away" />
          <Blocks blocks={beyond.blocks} />
        </div>
        <ImageStrip
          columns={4}
          className="mt-8"
          images={[
            { image: mall, alt: "Shoppers inside Bhartiya Mall of Bengaluru", caption: "Bhartiya Mall of Bengaluru" },
            { image: leela, alt: "The Leela Bhartiya City hotel at dusk", caption: "The Leela Bhartiya City" },
            { image: highStreet, alt: "Evening crowd on the Bhartiya City high street", caption: "Retail high street" },
            { image: greenAvenues, alt: "Towers and lawns at Bhartiya City", caption: "Central park and gardens" },
          ]}
        />
      </Section>

      <TextSection section={cost} tone="cream" eyebrow="Charges and timing" />
      <TextSection section={crossLinks} eyebrow="Keep reading" />
      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="amenities-faq" />
      <ExploreGrid current="/amenities" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="amenities-contact" image={heroImage} />
    </>
  );
}
