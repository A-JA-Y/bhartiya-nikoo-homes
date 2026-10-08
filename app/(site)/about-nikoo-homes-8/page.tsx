import copy from "@/content/pages/about";
import { blocksOfType, getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import MediaSection, { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import TopicGrid from "@/components/content/TopicGrid";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import ReraCard from "@/components/content/ReraCard";
import Md from "@/components/content/Md";
import { PriceSheetButton, SiteVisitLink } from "@/components/content/CtaButtons";

import heroImage from "@/assets/nikoo-homes-8-aerial-view.webp";
import gardenEnclave from "@/assets/garden-enclave-illustration.webp";
import towers from "@/assets/nikoo-homes-8-towers.webp";
import bhartiyaCity from "@/assets/bhartiya-city-aerial.webp";
import masterPlan from "@/assets/nikoo-homes-8-master-plan.webp";
import interiorLoft from "@/assets/interior-loft.webp";
import interior2Bhk from "@/assets/interior-2-bhk.webp";
import interiorBedroom from "@/assets/interior-bedroom.webp";
import clubRooftop from "@/assets/black-swan-club.webp";
import mall from "@/assets/bhartiya-mall-of-bengaluru.webp";
import leela from "@/assets/the-leela-bhartiya-city.webp";

const HERO_ALT = "Aerial view of the Black Swan Club, the Central Spine gardens and the tennis court at Nikoo Homes 8";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const overview = getSection(copy, "overview");
const history = getSection(copy, "from-nikoo-homes-1-to-nikoo-homes-8");
const versus = getSection(copy, "vs-nikoo-homes-5");
const review = getSection(copy, "review-what-works-and-what-to-weigh");
const rera = getSection(copy, "rera-number-launch-and-possession-date");
const developer = getSection(copy, "about-bhartiya-urban");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

const topics = [
  { section: getSection(copy, "master-plan"), image: masterPlan, alt: "Nikoo Homes 8 landscape master plan with the six towers and the Central Spine" },
  { section: getSection(copy, "villa-and-configuration"), image: interiorLoft, alt: "Double-height living room of the 3 BHK duplex loft" },
  { section: getSection(copy, "price"), image: interior2Bhk, alt: "Living room render of a Nikoo Homes 8 2 BHK" },
  { section: getSection(copy, "floor-plan"), image: interiorBedroom, alt: "Bedroom with a bay window at Nikoo Homes 8" },
  { section: getSection(copy, "amenities"), image: clubRooftop, alt: "The Black Swan Club with its rooftop swimming pool" },
  { section: getSection(copy, "location"), image: mall, alt: "Bhartiya Mall of Bengaluru, two to five minutes from Nikoo Homes 8" },
];

// Review section: intro, "What works" list, "What to weigh" list, verdict.
const [reviewIntro, reviewVerdict] = paragraphs(review);
const [worksList, weighList] = blocksOfType(review.blocks, "ul");
const [worksLabel, weighLabel] = blocksOfType(review.blocks, "label");

export default function AboutNikooHomes8Page() {
  return (
    <>
      <PageHero
        title={copy.h1}
        eyebrow="Bhartiya Garden Enclave · Review"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "About Nikoo Homes 8", href: "/about-nikoo-homes-8" }]}
        facts={["11.35 acres", "6 towers · 1,010 homes", "Launched 17 June 2026", "Possession December 2030"]}
      >
        <PriceSheetButton />
        <SiteVisitLink />
      </PageHero>

      <Section narrow>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <Blocks blocks={intro.blocks} className="prose-lead" />
          <Figure
            image={gardenEnclave}
            alt="Illustration of a garden in bloom outside a home at Bhartiya Garden Enclave"
            aspect="3/4"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </Section>

      <MediaSection
        section={overview}
        tone="cream"
        eyebrow="At a glance"
        reverse
        media={<Figure image={towers} alt="Nikoo Homes 8 towers above the landscaped podium" aspect="4/5" caption="Six towers, A to F, around a car-free Central Spine. Artist's impression." />}
      />

      <MediaSection
        section={history}
        eyebrow="Nikoo Homes 1 to 9"
        media={<Figure image={bhartiyaCity} alt="Aerial view of Bhartiya City, home to Nikoo Homes 1 to 5" aspect="4/3" caption="Bhartiya City, five to seven minutes from Bellahalli." />}
      />

      <TextSection section={versus} tone="sand" narrow={false} eyebrow="Resale inside the township or launch next door" />

      <TopicGrid topics={topics} eyebrow="The project, topic by topic" />

      {/* Review: what works and what to weigh */}
      <Section id={review.id} tone="cream">
        <SectionHeading title={review.title} eyebrow="Our take" />
        <div className="prose-nh mt-6 max-w-3xl">
          <p>
            <Md text={reviewIntro} />
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6" data-animate="fade-up">
            <h3 className="text-lg font-semibold text-gray-900">{worksLabel?.text}</h3>
            <ul className="check-list prose-nh-list mt-4">
              {worksList?.items.map((item) => (
                <li key={item}>
                  <Md text={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 shadow-sm sm:p-6" data-animate="fade-up">
            <h3 className="text-lg font-semibold text-gray-900">{weighLabel?.text}</h3>
            <ul className="check-list is-caution prose-nh-list mt-4">
              {weighList?.items.map((item) => (
                <li key={item}>
                  <Md text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="prose-nh mt-8 max-w-3xl rounded-2xl border-l-4 border-gold bg-white p-5 shadow-sm" data-animate="fade-up">
          <p>
            <Md text={reviewVerdict} />
          </p>
        </div>
      </Section>

      <MediaSection section={rera} eyebrow="Registration · Possession" media={<ReraCard />} />

      <MediaSection
        section={developer}
        tone="sand"
        eyebrow="The developer · Since 1987"
        reverse
        media={<Figure image={leela} alt="The Leela Bhartiya City, built and operated by the Bhartiya Group" aspect="16/10" />}
      />

      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="about-faq" />
      <ExploreGrid current="/about-nikoo-homes-8" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="about-contact" />
    </>
  );
}
