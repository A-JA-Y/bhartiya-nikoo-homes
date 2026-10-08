import { FaKey, FaHardHat, FaRocket } from "react-icons/fa";
import copy from "@/content/pages/bhartiya-city";
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

import heroImage from "@/assets/bhartiya-city-aerial.webp";
import greenAvenues from "@/assets/bhartiya-city-green-avenues.webp";
import mall from "@/assets/bhartiya-mall-of-bengaluru.webp";
import leela from "@/assets/the-leela-bhartiya-city.webp";
import highStreet from "@/assets/bhartiya-city-high-street.webp";
import nh8Hero from "@/assets/nikoo-homes-8-hero.webp";
import aerialView from "@/assets/nikoo-homes-8-aerial-view.webp";

const HERO_ALT = "Aerial view of Bhartiya City, the 125-acre township near Hebbal, with its central park and towers";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const glance = getSection(copy, "bhartiya-city-at-a-glance");
const inside = getSection(copy, "what-is-inside-bhartiya-city");
const phases = getSection(copy, "nikoo-homes-1-to-5-at-bhartiya-city");
const buying = getSection(copy, "buying-in-bhartiya-city-resale-under-construction-and-new-launch");
const newLaunch = getSection(copy, "bhartiya-city-new-launch-nikoo-homes-8-at-bellahalli");
const developers = getSection(copy, "the-bhartiya-city-developers-bhartiya-urban");
const location = getSection(copy, "bhartiya-city-location");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

const [buyingIntro, buyingClose] = paragraphs(buying);

export default function BhartiyaCityPage() {
  return (
    <>
      <PageHero
        title={copy.h1}
        eyebrow="Bhartiya City Nikoo Homes"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Bhartiya City", href: "/bhartiya-city" }]}
        facts={["125 acres near Hebbal", "Launched 2012", "6,600+ families", "Nikoo Homes 8 is 5–7 min away"]}
      >
        <PriceSheetButton>Get the Nikoo Homes 8 Price Sheet</PriceSheetButton>
        <SiteVisitLink />
      </PageHero>

      <Section narrow>
        <Blocks blocks={intro.blocks} className="prose-lead" />
      </Section>

      <MediaSection
        section={glance}
        tone="cream"
        eyebrow="The township"
        reverse
        media={<Figure image={greenAvenues} alt="Residential towers and lawns inside Bhartiya City" aspect="4/5" position="40% center" />}
      />

      <Section id={inside.id}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12">
          <SectionHeading title={inside.title} eyebrow="Built, kept and run by the developer" />
          <Blocks blocks={inside.blocks} />
        </div>
        <ImageStrip
          columns={4}
          className="mt-8"
          images={[
            { image: mall, alt: "Shoppers inside Bhartiya Mall of Bengaluru", caption: "Bhartiya Mall of Bengaluru" },
            { image: leela, alt: "The Leela Bhartiya City hotel at dusk", caption: "The Leela Bhartiya City" },
            { image: highStreet, alt: "Evening crowd on the Bhartiya City high street", caption: "Performing arts and high street" },
            { image: greenAvenues, alt: "Towers and gardens at Bhartiya City", caption: "Central park and gardens" },
          ]}
        />
      </Section>

      <TextSection section={phases} tone="cream" narrow={false} eyebrow="Phase by phase, with RERA numbers" />

      <Section id={buying.id}>
        <SectionHeading title={buying.title} eyebrow="Three ways to buy" />
        <div className="prose-nh mt-6 max-w-3xl">
          <p>
            <Md text={buyingIntro} />
          </p>
        </div>
        <LabelCards items={blocksOfType(buying.blocks, "ul")[0]?.items ?? []} icons={[FaKey, FaHardHat, FaRocket]} className="mt-8" />
        <div className="prose-nh mt-8 max-w-3xl">
          <p>
            <Md text={buyingClose} />
          </p>
        </div>
      </Section>

      <MediaSection
        section={newLaunch}
        tone="sand"
        eyebrow="Bhartiya Garden Enclave"
        media={<Figure image={nh8Hero} alt="Nikoo Homes 8 towers and the Black Swan Club at Bellahalli at dusk" aspect="4/3" caption="Nikoo Homes 8 at Bellahalli. Artist's impression." />}
      />

      <MediaSection
        section={developers}
        eyebrow="Since 1987"
        reverse
        media={<Figure image={leela} alt="The Leela Bhartiya City, owned and operated by the Bhartiya Group" aspect="16/10" />}
      />

      <MediaSection
        section={location}
        tone="cream"
        eyebrow="Thanisandra Main Road"
        media={<Figure image={aerialView} alt="Aerial view of the gardens and clubhouse at Nikoo Homes 8, up the road from Bhartiya City" aspect="16/10" />}
      />

      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="bhartiya-city-faq" tone="white" />
      <ExploreGrid current="/bhartiya-city" tone="cream" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="bhartiya-city-contact" image={heroImage} />
    </>
  );
}
