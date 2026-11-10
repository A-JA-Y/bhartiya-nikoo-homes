import { FaFileContract, FaBuilding, FaRulerCombined, FaMapMarkedAlt, FaTags } from "react-icons/fa";
import copy, { UPDATED } from "@/content/pages/best-residential-projects-in-bangalore-2026";
import type { Block, Section as CopySection } from "@/content/pages/types";
import { blocksOfType, getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import LabelCards from "@/components/content/LabelCards";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import Md from "@/components/content/Md";
import PageStructuredData from "@/components/content/PageStructuredData";
import { PriceSheetButton, SiteVisitLink } from "@/components/content/CtaButtons";

import heroImage from "@/assets/bhartiya-city-high-street.webp";
import nh8Towers from "@/assets/nikoo-homes-8-towers.webp";

const HERO_ALT =
  "Evening crowd on the Bhartiya City high street in North Bengaluru, the corridor that holds three of the five projects compared on this page";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const glance = getSection(copy, "the-five-at-a-glance");
const howWePicked = getSection(copy, "how-we-picked-the-best-residential-projects-in-bangalore");
const topFive = getSection(copy, "top-5-residential-projects-in-bangalore-2026");
const zones = getSection(copy, "which-zone-should-you-buy-in");
const villaOrApartment = getSection(copy, "villa-or-apartment");
const beforeYouBook = getSection(copy, "before-you-book-six-things-to-check");
const faqSection = getFaqSection(copy);
const shortVersion = getSection(copy, "the-short-version");
const contact = getSection(copy, "contact-us");

// Each project section carries its body paragraphs plus a "**Best for:**" and a
// "**Key facts:**" paragraph; the page lays those last two out on their own.
function splitProject(section: CopySection) {
  const all = paragraphs(section);
  const pick = (prefix: string) =>
    all.find((text) => text.startsWith(prefix))?.slice(prefix.length).trim() ?? "";

  return {
    body: all
      .filter((text) => !text.startsWith("**Best for:**") && !text.startsWith("**Key facts:**"))
      .map((text): Block => ({ type: "p", text })),
    bestFor: pick("**Best for:**"),
    keyFacts: pick("**Key facts:**"),
  };
}

// Presentation detail for the five entries: the zone eyebrow and the headline
// price, both read off the at-a-glance table in the copy.
const projects = [
  { id: "bhartiya-nikoo-homes-8-bellahalli-thanisandra-main-road", zone: "North Bangalore · Thanisandra Main Road", price: "₹67 L onwards" },
  { id: "century-blue-moon-jakkur-international-airport-road", zone: "North Bangalore · Jakkur", price: "₹4.25 Cr onwards" },
  { id: "embassy-riverine-tharahunise-north-bangalore", zone: "North Bangalore · Tharahunise", price: "₹14.10 Cr onwards" },
  { id: "godrej-florenne-off-soukya-road-whitefield", zone: "East Bangalore · Whitefield", price: "₹5.40 Cr onwards" },
  { id: "purva-orient-grand-lal-bagh-main-road-central-bangalore", zone: "Central Bangalore · Lal Bagh Main Road", price: "₹9 Cr onwards" },
].map((entry, index) => {
  const section = getSection(copy, entry.id);
  return { ...entry, section, rank: index + 1, ...splitProject(section) };
});

// One entry in the ranked list. The first gets a photograph because it is the
// project this site represents; the comparison set is deliberately unillustrated
// rather than illustrated with someone else's render.
function ProjectEntry({ project }: { project: (typeof projects)[number] }) {
  const { section, rank, zone, price, body, bestFor, keyFacts } = project;
  const withFigure = rank === 1;

  return (
    <Section id={section.id} tone={rank % 2 === 0 ? "cream" : "white"}>
      <div className="flex items-start gap-4 sm:gap-5" data-animate="fade-up">
        <span
          aria-hidden="true"
          className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#f6ecd4] text-base font-semibold text-gold-ink sm:h-12 sm:w-12 sm:text-lg"
        >
          {String(rank).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <p className="eyebrow mb-2">{zone}</p>
          <h3 className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl lg:text-[1.7rem]">
            {section.title}
          </h3>
          <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-white px-3 py-1 text-xs font-semibold text-gold-ink">
            <FaTags aria-hidden="true" className="text-[10px]" />
            {price}
          </p>
        </div>
      </div>

      <div
        className={
          withFigure
            ? "mt-7 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start lg:gap-12"
            : "mt-7"
        }
      >
        <div className="min-w-0">
          <Blocks blocks={body} className="max-w-3xl" />

          {bestFor && (
            <div
              className="mt-6 max-w-3xl rounded-2xl border border-gold/30 bg-[#fdf8ed] p-4 sm:p-5"
              data-animate="fade-up"
            >
              <p className="eyebrow mb-1.5">Best for</p>
              <p className="text-sm leading-relaxed text-gray-700">
                <Md text={bestFor} />
              </p>
            </div>
          )}

          {keyFacts && (
            <p className="mt-5 max-w-3xl border-t border-line pt-4 text-xs leading-relaxed text-gray-500">
              <span className="font-semibold uppercase tracking-widest text-gray-600">Key facts</span>{" "}
              <Md text={keyFacts} />
            </p>
          )}
        </div>

        {withFigure && (
          <Figure
            image={nh8Towers}
            alt="Nikoo Homes 8 towers above the landscaped Central Spine at Bellahalli, off Thanisandra Main Road"
            aspect="4/5"
            caption="Nikoo Homes 8, Bellahalli. Artist's impression."
          />
        )}
      </div>
    </Section>
  );
}

export default function BestResidentialProjectsPage() {
  return (
    <>
      <PageStructuredData
        copy={copy}
        type="guide"
        image={heroImage}
        extra={{ datePublished: UPDATED.iso, dateModified: UPDATED.iso }}
      />
      <PageHero
        title={copy.h1}
        eyebrow="Buyer guide · Bangalore 2026"
        image={heroImage}
        imageAlt={HERO_ALT}
        imagePosition="center 60%"
        crumbs={[{ name: "Best Projects in Bangalore", href: copy.meta.path }]}
        facts={[UPDATED.label, "5 projects compared", "₹67 L to ₹17 Cr", "RERA numbers checked"]}
      >
        <PriceSheetButton>Get the Nikoo Homes 8 Price Sheet</PriceSheetButton>
        <SiteVisitLink />
      </PageHero>

      <Section narrow>
        <p className="mb-5 text-xs font-medium uppercase tracking-widest text-gray-500">
          <time dateTime={UPDATED.iso}>{UPDATED.label}</time>
        </p>
        <Blocks blocks={intro.blocks} className="prose-lead" />
      </Section>

      <TextSection
        section={glance}
        tone="cream"
        narrow={false}
        eyebrow="Price, RERA and possession side by side"
        table={{ variant: "scroll", caption: "The five best residential projects in Bangalore in 2026 compared on location, configuration, base price and possession" }}
      />

      <Section id={howWePicked.id}>
        <SectionHeading title={howWePicked.title} eyebrow="Our five checks" />
        <LabelCards
          items={blocksOfType(howWePicked.blocks, "ul")[0]?.items ?? []}
          icons={[FaFileContract, FaBuilding, FaRulerCombined, FaMapMarkedAlt, FaTags]}
          className="mt-8"
        />
        <div className="prose-nh mt-8 max-w-3xl">
          {paragraphs(howWePicked).map((text) => (
            <p key={text}>
              <Md text={text} />
            </p>
          ))}
        </div>
      </Section>

      <Section id={topFive.id} tone="ink" compact>
        <SectionHeading title={topFive.title} eyebrow="Ranked, with the numbers behind each one" />
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/75">
          One project per budget tier, in the order we would put them in front of a client. Prices are the
          developer&apos;s base figures as confirmed in November 2026.
        </p>
      </Section>

      {projects.map((project) => (
        <ProjectEntry key={project.id} project={project} />
      ))}

      <TextSection section={zones} tone="sand" narrow={false} eyebrow="North, east or central" />
      <TextSection section={villaOrApartment} eyebrow="The land question" />

      <Section id={beforeYouBook.id} tone="cream">
        <SectionHeading title={beforeYouBook.title} eyebrow="The buyer's checklist" />
        <LabelCards
          items={blocksOfType(beforeYouBook.blocks, "ul")[0]?.items ?? []}
          columns={3}
          numbered
          className="mt-8"
        />
      </Section>

      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="best-projects-faq" tone="white" />
      <TextSection section={shortVersion} tone="sand" narrow="center" eyebrow="In one paragraph" />
      <ExploreGrid current={copy.meta.path} tone="white" />
      <ContactBlock
        section={contact}
        disclaimer={copy.disclaimer}
        idPrefix="best-projects-contact"
        image={heroImage}
        formTitle="Compare these five on your budget"
        formIntro="Tell us the budget and the zone and we will send the all-inclusive working for the units that fit, same day."
      />
    </>
  );
}
