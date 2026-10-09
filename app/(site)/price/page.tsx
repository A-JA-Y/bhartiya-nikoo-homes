import copy from "@/content/pages/price";
import { getFaqs, getFaqSection, getSection } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import MediaSection, { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import EmiCalculator from "@/components/EmiCalculator";
import { BrochureButton, PriceSheetButton } from "@/components/content/CtaButtons";

import heroImage from "@/assets/nikoo-homes-8-hero.webp";
import PageStructuredData from "@/components/content/PageStructuredData";
import towers from "@/assets/nikoo-homes-8-towers.webp";
import interior2Bhk from "@/assets/interior-2-bhk.webp";
import greenAvenues from "@/assets/bhartiya-city-green-avenues.webp";
import clubRooftop from "@/assets/black-swan-club.webp";

const HERO_ALT = "Nikoo Homes 8 towers, the Central Spine and the Black Swan Club at dusk";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const priceList = getSection(copy, "price-list-2026");
const perSqFt = getSection(copy, "price-per-sq-ft");
const costSheet = getSection(copy, "cost-sheet-what-gets-added-to-the-base-price");
const workedExample = getSection(copy, "worked-example-all-in-cost-of-a-2-bhk");
const paymentPlan = getSection(copy, "payment-plan");
const homeLoan = getSection(copy, "home-loan-and-emi");
const preLaunch = getSection(copy, "pre-launch-price-launch-price-and-offers");
const resale = getSection(copy, "price-vs-bhartiya-city-nikoo-homes-resale");
const competitive = getSection(copy, "is-the-nikoo-homes-8-price-competitive");
const crossLinks = getSection(copy, "villa-and-configuration-floor-plan-master-plan-amenities-and-location");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

// Summary of the payment plan paragraph, shown as three steps above it.
const steps = [
  { title: "Expression of Interest", body: "Typically ₹5 lakh, to join the unit-selection queue for a release." },
  { title: "Booking", body: "10% of the sale value on allotment, with the EOI adjusted against it." },
  { title: "Construction-linked balance", body: "Paid at the milestones in the agreement to sell; 70% goes to RERA escrow." },
];

export default function PricePage() {
  return (
    <>
      <PageStructuredData copy={copy} type="price" image={heroImage} />
      <PageHero
        title={copy.h1}
        eyebrow="Price list 2026"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Price", href: "/price" }]}
        facts={["Studio from ₹67 lakh", "4 BHK + staff ₹2.94 Cr", "≈ ₹12,000–12,500 per sq ft", "Villas from ₹5.98 Cr"]}
      >
        <PriceSheetButton>Get the Cost Sheet</PriceSheetButton>
        <BrochureButton />
      </PageHero>

      <Section narrow>
        <Blocks blocks={intro.blocks} className="prose-lead" />
      </Section>

      <TextSection section={priceList} tone="cream" narrow={false} eyebrow="Indicative base prices" />

      <MediaSection
        section={perSqFt}
        eyebrow="What moves the rate"
        media={<Figure image={towers} alt="Nikoo Homes 8 towers of 16 to 24 floors above the gardens" aspect="4/3" caption="Floor, position and release move the rate on a specific unit." />}
      />

      <TextSection section={costSheet} tone="sand" narrow={false} eyebrow="Charges on top of the base price" table={{ groupFirstColumn: true }} />

      <MediaSection
        section={workedExample}
        eyebrow="2 BHK, type D1B"
        reverse
        table={{ totalLastRow: true }}
        media={<Figure image={interior2Bhk} alt="Living room render of the Nikoo Homes 8 2 BHK" aspect="1/1" caption="2 BHK living room. Artist's impression." />}
      />

      <Section id={paymentPlan.id} tone="cream">
        <SectionHeading title={paymentPlan.title} eyebrow="EOI · Booking · Construction-linked" />
        <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3" data-stagger>
          {steps.map((step, i) => (
            <li key={step.title} data-animate="fade-up" className="relative rounded-2xl border border-line bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-semibold text-white">{i + 1}</span>
              <p className="mt-3 text-base font-semibold text-gray-900">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.body}</p>
            </li>
          ))}
        </ol>
        <Blocks blocks={paymentPlan.blocks} className="mt-8 max-w-4xl" />
      </Section>

      <Section id={homeLoan.id}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <SectionHeading title={homeLoan.title} eyebrow="Loans and monthly outgo" />
            <Blocks blocks={homeLoan.blocks} className="mt-6" />
          </div>
          <EmiCalculator />
        </div>
      </Section>

      <TextSection section={preLaunch} tone="sand" eyebrow="EOIs and offers" />

      <MediaSection
        section={resale}
        eyebrow="Launch or resale"
        media={<Figure image={greenAvenues} alt="Residential towers and lawns inside Bhartiya City" aspect="4/3" caption="Bhartiya City, where Nikoo Homes 1 to 5 trade on resale." />}
      />

      <MediaSection
        section={competitive}
        tone="cream"
        eyebrow="Benchmarking the rate"
        reverse
        media={<Figure image={clubRooftop} alt="The Black Swan Club and its rooftop pool, included in the Nikoo Homes 8 rate" aspect="16/10" />}
      />

      <TextSection
        section={crossLinks}
        eyebrow="Keep reading"
        after={<p className="mt-6 text-xs text-gray-500">Page last reviewed: October 2026.</p>}
      />

      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="price-faq" />
      <ExploreGrid current="/price" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="price-contact" image={heroImage} />
    </>
  );
}
