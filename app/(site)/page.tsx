import Image from "next/image";
import { FaSwimmingPool, FaTableTennis, FaLeaf, FaShieldAlt } from "react-icons/fa";
import copy from "@/content/pages/home";
import { getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { MAP_EMBED_URL, MAP_LINK_URL, SITE_URL } from "@/data/projectData";

import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import WalkThroughVideo from "@/components/WalkThroughVideo";
import BlogSection from "@/components/BlogSection";
import NewsSection from "@/components/NewsSection";
import QRSection from "@/components/QRSections";
import EmiCalculator from "@/components/EmiCalculator";
import { GatedMasterPlan, GatedPlanGrid } from "@/components/GatedPlans";
import Section, { SectionHeading } from "@/components/content/Section";
import MediaSection from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import ImageStrip from "@/components/content/ImageStrip";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ReraCard from "@/components/content/ReraCard";
import JsonLd from "@/components/content/JsonLd";
import Md, { plainText } from "@/components/content/Md";

import aerialView from "@/assets/nikoo-homes-8-aerial-view.webp";
import centralSpine from "@/assets/central-spine-walkway.webp";
import towers from "@/assets/nikoo-homes-8-towers.webp";
import interiorStudio from "@/assets/interior-studio.webp";
import interior2Bhk from "@/assets/interior-2-bhk.webp";
import interiorLoft from "@/assets/interior-loft.webp";
import villaIllustration from "@/assets/courtyard-villa-illustration.webp";
import interiorKitchen from "@/assets/interior-kitchen.webp";
import clubRooftop from "@/assets/black-swan-club.webp";
import clubLounge from "@/assets/black-swan-club-lounge.webp";
import tennisCourt from "@/assets/nikoo-homes-8-tennis-court.webp";
import partyIllustration from "@/assets/black-swan-club-party-illustration.webp";
import mall from "@/assets/bhartiya-mall-of-bengaluru.webp";
import leela from "@/assets/the-leela-bhartiya-city.webp";
import highStreet from "@/assets/bhartiya-city-high-street.webp";
import gardenWalk from "@/assets/garden-walk-illustration.webp";
import masterPlan from "@/assets/nikoo-homes-8-master-plan.webp";
import planStudio from "@/assets/floor-plan-studio.webp";
import plan2Bhk from "@/assets/floor-plan-2-bhk.webp";
import plan3Bhk from "@/assets/floor-plan-3-bhk.webp";
import plan4Bhk from "@/assets/floor-plan-4-bhk-staff.webp";

export const metadata = pageMetadata(copy.meta);

const intro = getSection(copy, "intro");
const [taglineText, introText, statsText] = paragraphs(intro);
const about = getSection(copy, "about-nikoo-homes-8");
const highlights = getSection(copy, "project-highlights");
const configuration = getSection(copy, "villa-and-configuration");
const price = getSection(copy, "price");
const floorPlan = getSection(copy, "floor-plan");
const masterPlanCopy = getSection(copy, "master-plan");
const amenities = getSection(copy, "amenities");
const location = getSection(copy, "location");
const developer = getSection(copy, "about-bhartiya-urban");
const rera = getSection(copy, "rera-number-and-possession-date");
const whyBuy = getSection(copy, "why-buy-nikoo-homes-8");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

// "**Black Swan Club:** rooftop pool, ..." -> label and list for the amenity cards.
const amenityParagraphs = paragraphs(amenities);
const amenityIcons = [FaSwimmingPool, FaTableTennis, FaLeaf, FaShieldAlt];
const amenityGroups = amenityParagraphs
  .map((text) => text.match(/^\*\*(.+?):\*\*\s*(.*)$/))
  .filter((m): m is RegExpMatchArray => Boolean(m))
  .map((m, i) => ({ label: m[1], text: m[2], Icon: amenityIcons[i % amenityIcons.length] }));
const amenityLead = amenityParagraphs[0];
const amenityClose = amenityParagraphs[amenityParagraphs.length - 1];

const whyBuyIntro = whyBuy.blocks.slice(0, 2);
const worthWeighing = paragraphs(whyBuy).find((p) => p.startsWith("Worth weighing"));

const plans = [
  { image: planStudio, label: "Studio · 501 sq ft", alt: "Nikoo Homes 8 studio floor plan, 501 sq ft" },
  { image: plan2Bhk, label: "2 BHK · 1,165 sq ft", alt: "Nikoo Homes 8 2 BHK floor plan, 1,165 sq ft" },
  { image: plan3Bhk, label: "3 BHK · 1,730 sq ft", alt: "Nikoo Homes 8 3 BHK floor plan, 1,730 sq ft" },
  { image: plan4Bhk, label: "4 BHK + Staff · 2,506 sq ft", alt: "Nikoo Homes 8 4 BHK with staff room floor plan, 2,506 sq ft" },
];

const SITE = `${SITE_URL}/`;
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}#webpage`,
      url: SITE,
      name: copy.meta.title,
      description: copy.meta.description,
      about: { "@id": `${SITE}#project` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE}#project`,
      name: "Bhartiya Nikoo Homes 8",
      alternateName: ["Nikoo Homes 8", "Bhartiya Garden Enclave"],
      url: SITE,
      image: `${SITE}nikoo-homes-8-og.webp`,
      description: plainText(introText),
      numberOfAccommodationUnits: 1010,
      petsAllowed: true,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bellahalli, off Thanisandra Main Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560064",
        addressCountry: "IN",
      },
      amenityFeature: [
        "40,000 sq ft Black Swan Club",
        "Rooftop Swimming Pool",
        "Car-Free Central Spine",
        "Gymnasium",
        "Tennis Court",
        "Squash Court",
        "Rock Climbing Wall",
        "Mini Theatre",
        "Co-working Spaces",
        "Pet Zone",
      ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    },
    {
      "@type": "Product",
      name: "Nikoo Homes 8 Studio Apartment",
      description: "Studio apartment of 501 sq ft saleable area at Bhartiya Nikoo Homes 8, Bellahalli, North Bengaluru.",
      brand: { "@type": "Brand", name: "Bhartiya Urban" },
      offers: { "@type": "Offer", price: "6700000", priceCurrency: "INR", availability: "https://schema.org/InStock", url: absoluteUrl("/price") },
    },
    {
      "@type": "Product",
      name: "Nikoo Homes 8 3 BHK Apartment",
      description: "3 BHK apartment of 1,730 sq ft saleable area at Bhartiya Nikoo Homes 8, Bellahalli, North Bengaluru.",
      brand: { "@type": "Brand", name: "Bhartiya Urban" },
      offers: { "@type": "Offer", price: "20400000", priceCurrency: "INR", availability: "https://schema.org/InStock", url: absoluteUrl("/price") },
    },
    {
      "@type": "RealEstateAgent",
      name: "Real Revenue",
      url: SITE,
      areaServed: "Bengaluru",
      telephone: "+91-6356663535",
      parentOrganization: { "@type": "Organization", name: "Earlydays Innovations Private Limited" },
    },
  ],
};

export default function Home() {
  return (
    <div className="w-full">
      <JsonLd data={schemaGraph} />

      <Hero
        title={copy.h1}
        tagline={taglineText.split(" · ")}
        intro={introText}
        stats={statsText.split(" · ")}
      />
      <ReraStrip />

      <section className="px-4 pt-6 sm:px-6 md:relative md:-top-24 md:-mb-12 md:pt-0">
        <div className="mx-auto max-w-5xl">
          <ContactForm />
        </div>
      </section>

      {/* About */}
      <MediaSection
        section={about}
        eyebrow="Bhartiya Garden Enclave · Bellahalli"
        media={
          <div className="grid grid-cols-2 gap-3" data-animate="zoom-in">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
              <Image src={aerialView} alt="Aerial view of the Black Swan Club, Central Spine gardens and tennis court at Nikoo Homes 8" fill sizes="(max-width: 1024px) 100vw, 460px" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
              <Image src={centralSpine} alt="Tree-lined pedestrian Central Spine at Nikoo Homes 8" fill sizes="(max-width: 1024px) 50vw, 230px" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
              <Image src={towers} alt="Residential towers of Nikoo Homes 8 above the landscaped podium" fill sizes="(max-width: 1024px) 50vw, 230px" className="object-cover" />
            </div>
          </div>
        }
      />

      {/* Project highlights */}
      <MediaSection
        section={highlights}
        tone="cream"
        eyebrow="At a glance"
        reverse
        media={
          <Figure
            image={towers}
            alt="Nikoo Homes 8 towers A to F rising above the gardens on the Central Spine"
            aspect="4/5"
            caption="Six towers, A to F, of two basements plus ground plus 16 to 24 floors. Artist's impression."
          />
        }
      />

      {/* Villa & configuration */}
      <Section id={configuration.id}>
        <SectionHeading title={configuration.title} eyebrow="Studio to 4 BHK · Courtyard villas" />
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
          <Blocks blocks={configuration.blocks.slice(0, 2)} />
          <div className="flex flex-col gap-6">
            <ImageStrip
              columns={2}
              aspect="1/1"
              className="lg:grid-cols-2"
              images={[
                { image: interiorStudio, alt: "Studio apartment interior render at Nikoo Homes 8", caption: "Studio · 501 sq ft" },
                { image: interior2Bhk, alt: "2 BHK living room interior render at Nikoo Homes 8", caption: "2 BHK · 1,165 sq ft" },
                { image: interiorLoft, alt: "Double-height living room of the 3 BHK duplex loft", caption: "Duplex loft · 2,132 sq ft" },
                { image: villaIllustration, alt: "Illustration of a courtyard villa terrace opening onto a lawn", caption: "Courtyard villa · from 2,800 sq ft" },
              ]}
            />
            <Blocks blocks={configuration.blocks.slice(2, 3)} />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-2xl border border-line bg-cream p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Blocks blocks={configuration.blocks.slice(3)} />
          <Figure image={interiorKitchen} alt="Kitchen interior render with a granite counter at Nikoo Homes 8" aspect="16/9" />
        </div>
      </Section>

      {/* Price */}
      <Section id={price.id} tone="cream">
        <SectionHeading title={price.title} eyebrow="Price list · Per sq ft · Payment plan" />
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12">
          <Blocks blocks={price.blocks} />
          <div className="lg:sticky lg:top-28 lg:self-start">
            <EmiCalculator />
          </div>
        </div>
      </Section>

      {/* Floor plan */}
      <Section id={floorPlan.id}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-start lg:gap-12">
          <div>
            <SectionHeading title={floorPlan.title} eyebrow="Nine plans · One PDF" />
            <Blocks blocks={floorPlan.blocks} className="mt-6" />
          </div>
          <GatedPlanGrid plans={plans} className="grid-cols-2" />
        </div>
      </Section>

      {/* Master plan */}
      <MediaSection
        section={masterPlanCopy}
        tone="sand"
        eyebrow="11.35 acres · 6 towers"
        reverse
        media={
          <GatedMasterPlan
            image={masterPlan}
            alt="Nikoo Homes 8 master plan with Towers A to F, the Central Spine and the Black Swan Club"
          />
        }
      />

      {/* Amenities */}
      <Section id={amenities.id} tone="brown">
        <SectionHeading title={amenities.title} eyebrow="The Black Swan Club · 40,000+ sq ft" />
        <div className="prose-nh mt-6 max-w-3xl">
          <p>
            <Md text={amenityLead} />
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
          <ul className="grid gap-4 sm:grid-cols-2" data-stagger>
            {amenityGroups.map(({ label, text, Icon }) => (
              <li key={label} data-animate="fade-up" className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-light/15 text-gold-light">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">{text}</p>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 self-start" data-animate="zoom-in">
            {[
              { image: clubRooftop, alt: "The Black Swan Club with its rooftop swimming pool" },
              { image: clubLounge, alt: "Lounge inside the Black Swan Club" },
              { image: tennisCourt, alt: "Tennis court beside the gardens at Nikoo Homes 8" },
              { image: partyIllustration, alt: "Illustration of residents gathering at the Black Swan Club" },
            ].map((item) => (
              <div key={item.alt} className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 50vw, 260px" className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
        <div className="prose-nh mt-8 max-w-3xl">
          <p>
            <Md text={amenityClose} />
          </p>
        </div>
      </Section>

      {/* Location */}
      <MediaSection
        section={location}
        eyebrow="Bellahalli · Thanisandra Main Road"
        media={
          <div data-animate="zoom-in">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-md">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Map showing Nikoo Homes 8 at Bellahalli, off Thanisandra Main Road"
              />
            </div>
            <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="text-link mt-3 inline-block text-sm">
              Get driving directions <span className="arrow-nudge">→</span>
            </a>
          </div>
        }
      />

      {/* About Bhartiya Urban */}
      <Section id={developer.id} tone="cream">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12">
          <SectionHeading title={developer.title} eyebrow="The developer · Since 1987" />
          <Blocks blocks={developer.blocks} />
        </div>
        <ImageStrip
          className="mt-8"
          images={[
            { image: mall, alt: "Shoppers inside Bhartiya Mall of Bengaluru", caption: "Bhartiya Mall of Bengaluru" },
            { image: leela, alt: "The Leela Bhartiya City hotel at dusk", caption: "The Leela Bhartiya City" },
            { image: highStreet, alt: "Evening crowd at the open-air venue in Bhartiya City", caption: "Bhartiya City high street" },
          ]}
        />
      </Section>

      {/* RERA */}
      <MediaSection section={rera} eyebrow="Registration · Possession" media={<ReraCard />} />

      {/* Why buy */}
      <MediaSection
        section={{ ...whyBuy, blocks: whyBuyIntro }}
        tone="sand"
        eyebrow="Is it a good investment?"
        reverse
        media={<Figure image={gardenWalk} alt="Illustration of a resident walking two dogs through the gardens at Nikoo Homes 8" aspect="4/3" />}
        after={
          worthWeighing && (
            <aside className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-sm leading-relaxed text-amber-950">
              <Md text={worthWeighing} />
            </aside>
          )
        }
      />

      <WalkThroughVideo />
      <BlogSection />
      <NewsSection />

      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="home-faq" tone="white" />

      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="home-contact" />
      <QRSection />
    </div>
  );
}
