import { FaSchool, FaHospital, FaBriefcase, FaShoppingBag, FaHotel, FaMapMarkerAlt } from "react-icons/fa";
import copy from "@/content/pages/location";
import { getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";
import { MAP_EMBED_URL, MAP_LINK_URL } from "@/data/projectData";

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
import { buttonStyles } from "@/components/content/buttonStyles";
import { SiteVisitLink } from "@/components/content/CtaButtons";

import heroImage from "@/assets/bhartiya-city-green-avenues.webp";
import bhartiyaCity from "@/assets/bhartiya-city-aerial.webp";
import interiorStudio from "@/assets/interior-studio.webp";
import towers from "@/assets/nikoo-homes-8-towers.webp";
import aerialView from "@/assets/nikoo-homes-8-aerial-view.webp";
import mall from "@/assets/bhartiya-mall-of-bengaluru.webp";
import leela from "@/assets/the-leela-bhartiya-city.webp";
import highStreet from "@/assets/bhartiya-city-high-street.webp";

const HERO_ALT = "Residential towers and lawns at Bhartiya City on Thanisandra Main Road, five to seven minutes from Nikoo Homes 8";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const glance = getSection(copy, "location-at-a-glance");
const thanisandra = getSection(copy, "thanisandra-main-road-and-bellahalli");
const manyata = getSection(copy, "manyata-tech-park-and-the-office-belt");
const hebbal = getSection(copy, "hebbal-and-hennur-road");
const northBangalore = getSection(copy, "north-bangalore-the-airport-yelahanka-and-jakkur");
const metro = getSection(copy, "blue-line-metro");
const nearby = getSection(copy, "schools-hospitals-workplaces-malls-and-hotels-near-nikoo-homes-8");
const peakHour = getSection(copy, "the-peak-hour-reality");
const crossLinks = getSection(copy, "villa-and-configuration-floor-plan-master-plan-amenities-and-price");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

// "**Schools:** ..." paragraphs become cards; the closing paragraph stays as text.
const nearbyParagraphs = paragraphs(nearby);
const nearbyCards = nearbyParagraphs.filter((p) => p.startsWith("**"));
const nearbyClose = nearbyParagraphs.filter((p) => !p.startsWith("**"));

const blueLine = [
  { name: "Kasturi Nagar" },
  { name: "Nagawara", target: "March 2028" },
  { name: "Veerannapalya" },
  { name: "Kempapura" },
  { name: "Hebbal", target: "June 2027" },
  { name: "Airport" },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        title={copy.h1}
        eyebrow="Bellahalli · Thanisandra · North Bangalore"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Location", href: "/location" }]}
        facts={["Manyata ≈ 5.6 km", "Bhartiya City 5–7 min", "Airport ≈ 25 min", "Blue Line 2027–28"]}
      >
        <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
          <FaMapMarkerAlt aria-hidden="true" className="text-[11px]" />
          Get Driving Directions
        </a>
        <SiteVisitLink />
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div data-animate="zoom-in">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-md sm:aspect-[16/10]">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Map of Nikoo Homes 8 at Bellahalli, off Thanisandra Main Road, Bengaluru 560064"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
              <p className="text-gray-600">Bellahalli, off Thanisandra Main Road, Bengaluru 560064</p>
              <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="text-link">
                Open in Google Maps <span className="arrow-nudge">→</span>
              </a>
            </div>
          </div>
          <Blocks blocks={intro.blocks} className="prose-lead" />
        </div>
      </Section>

      <TextSection section={glance} tone="cream" narrow={false} eyebrow="Distances from the gate" />

      <MediaSection
        section={thanisandra}
        eyebrow="The corridor"
        media={<Figure image={bhartiyaCity} alt="Aerial view of Bhartiya City on Thanisandra Main Road" aspect="4/3" caption="Bhartiya City, five to seven minutes from the project." />}
      />

      <MediaSection
        section={manyata}
        tone="cream"
        eyebrow="About 5.6 km"
        reverse
        media={<Figure image={interiorStudio} alt="Studio apartment render at Nikoo Homes 8, the unit sized for Manyata tenants" aspect="1/1" caption="Studios from ₹67 lakh suit the Manyata rental market. Artist's impression." />}
      />

      <MediaSection
        section={hebbal}
        eyebrow="Hebbal · Hennur Road"
        media={<Figure image={towers} alt="Nikoo Homes 8 towers at Bellahalli" aspect="4/3" />}
      />

      <MediaSection
        section={northBangalore}
        tone="cream"
        eyebrow="Airport corridor"
        reverse
        media={<Figure image={aerialView} alt="Aerial view of the gardens and the Black Swan Club at Nikoo Homes 8" aspect="4/3" />}
      />

      {/* Blue Line metro */}
      <Section id={metro.id} tone="ink">
        <SectionHeading title={metro.title} eyebrow="Namma Metro · Phase 2B" />
        <div className="relative mt-10" data-animate="fade-up">
          <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-[11px] hidden h-[3px] rounded-full bg-gradient-to-r from-[#1e5bb8] via-[#3b82f6] to-[#1e5bb8] md:block" />
          <span aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-[3px] rounded-full bg-gradient-to-b from-[#1e5bb8] via-[#3b82f6] to-[#1e5bb8] md:hidden" />
          <ol className="relative grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-y-10" data-stagger>
            {blueLine.map((station) => (
              <li key={station.name} className="group relative flex items-center gap-4 md:flex-col md:gap-0 md:text-center" data-animate="fade-up">
                <span
                  className={`relative z-10 h-6 w-6 flex-shrink-0 rounded-full border-4 transition-transform duration-300 group-hover:scale-125 ${
                    station.target ? "border-white bg-gold-light" : "border-[#3b82f6] bg-white"
                  }`}
                />
                <span className="md:mt-3">
                  <span className="block text-sm font-semibold">{station.name}</span>
                  {station.target && (
                    <span className="mt-0.5 block text-[11px] uppercase tracking-wider text-gold-light">Target {station.target}</span>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <Blocks blocks={metro.blocks} className="mt-10 max-w-4xl" />
      </Section>

      <Section id={nearby.id}>
        <SectionHeading title={nearby.title} eyebrow="Daily life around the address" />
        <LabelCards
          items={nearbyCards}
          icons={[FaSchool, FaHospital, FaBriefcase, FaShoppingBag, FaHotel]}
          className="mt-8"
        />
        <ImageStrip
          className="mt-8"
          images={[
            { image: mall, alt: "Shoppers inside Bhartiya Mall of Bengaluru", caption: "Bhartiya Mall of Bengaluru" },
            { image: leela, alt: "The Leela Bhartiya City hotel at dusk", caption: "The Leela Bhartiya City" },
            { image: highStreet, alt: "Evening crowd on the Bhartiya City high street", caption: "Bhartiya City high street" },
          ]}
        />
        <div className="prose-nh mt-8 max-w-3xl">
          {nearbyClose.map((text) => (
            <p key={text}>
              <Md text={text} />
            </p>
          ))}
        </div>
      </Section>

      <Section id={peakHour.id} tone="sand" narrow>
        <SectionHeading title={peakHour.title} eyebrow="What a map does not show" />
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6" data-animate="fade-up">
          <Blocks blocks={peakHour.blocks} />
        </div>
      </Section>

      <TextSection section={crossLinks} eyebrow="Keep reading" />
      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="location-faq" />
      <ExploreGrid current="/location" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="location-contact" image={heroImage} />
    </>
  );
}
