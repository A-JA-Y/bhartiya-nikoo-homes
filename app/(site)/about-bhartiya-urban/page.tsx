import Image from "next/image";
import Link from "next/link";
import homeCopy from "@/content/pages/home";
import { getSection } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import ImageStrip from "@/components/content/ImageStrip";
import Figure from "@/components/content/Figure";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import { PriceSheetButton } from "@/components/content/CtaButtons";
import { buttonStyles } from "@/components/content/buttonStyles";

import heroImage from "@/assets/the-leela-bhartiya-city.webp";
import PageStructuredData from "@/components/content/PageStructuredData";
import logo from "@/assets/bhartiya-urban-nikoo-homes-logo.webp";
import cityAerial from "@/assets/bhartiya-city-aerial.webp";
import mall from "@/assets/bhartiya-mall-of-bengaluru.webp";
import highStreet from "@/assets/bhartiya-city-high-street.webp";
import greenAvenues from "@/assets/bhartiya-city-green-avenues.webp";
import nh8Hero from "@/assets/nikoo-homes-8-hero.webp";

const HERO_ALT = "The Leela Bhartiya City at dusk, built and operated by the Bhartiya Group";
const structuredDataCopy = {
  meta: {
    title: "Bhartiya Urban — Developer Profile | Nikoo Homes 8",
    description:
      "Bhartiya Urban, the real estate arm of the Bhartiya Group, built and still operates Bhartiya City. Nikoo Homes 1 to 5 are delivered, with 6,600+ families in residence.",
    path: "/about-bhartiya-urban",
  },
  h1: "Bhartiya Urban — Developer Profile",
  sections: [],
  disclaimer: null,
};

export const metadata = pageMetadata({
  title: "Bhartiya Urban — Developer Profile | Nikoo Homes 8",
  description:
    "Bhartiya Urban, the real estate arm of the Bhartiya Group, built and still operates Bhartiya City. Nikoo Homes 1 to 5 are delivered, with 6,600+ families in residence.",
  path: "/about-bhartiya-urban",
  image: heroImage,
  imageAlt: HERO_ALT,
});

const timeline = [
  { phase: "Nikoo Homes 1 to 5", status: "Delivered and occupied", detail: "More than 6,600 families in residence at Bhartiya City." },
  { phase: "Nikoo Homes 6", status: "Under construction", detail: "Kogilu." },
  { phase: "Nikoo Homes 7 (Bhartiya Garden Estate)", status: "Under construction", detail: "Sadahalli, near the airport." },
  { phase: "Nikoo Homes 8 (Bhartiya Garden Enclave)", status: "Launched June 2026", detail: "Bellahalli, off Thanisandra Main Road: 1,010 homes on 11.35 acres.", href: "/about-nikoo-homes-8" },
  { phase: "Nikoo Homes 9", status: "Phase 1 bookings open", detail: "Bagalur; bookings opened in September 2026." },
];

const bhartiyaCity = [
  "Bhartiya Mall of Bengaluru — roughly 8 lakh sq ft of leasable retail and 150+ stores, opened October 2021",
  "The Leela Bhartiya City — a 281-key luxury hotel and convention centre",
  "BCIT — the office and IT-SEZ park",
  "Chaman Bhartiya School",
  "A performing arts pavilion and retail high street",
  "A four-acre central park and over two hundred gardens",
];

const contact = getSection(homeCopy, "contact-us");

export default function AboutBhartiyaUrbanPage() {
  return (
    <>
      <PageStructuredData copy={structuredDataCopy} type="developer" image={heroImage} />
      <PageHero
        title="Bhartiya Urban — Developer Profile"
        eyebrow="The developer · Since 1987"
        lead="The real estate arm of the Bhartiya Group: the developer that built Bhartiya City, and still runs it."
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "About Bhartiya Urban", href: "/about-bhartiya-urban" }]}
      >
        <Link href="/bhartiya-city" className={buttonStyles.primary}>
          Explore Bhartiya City
        </Link>
        <PriceSheetButton style="outline">Nikoo Homes 8 Price Sheet</PriceSheetButton>
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
          <div data-animate="fade-up">
            <Image src={logo} alt="Bhartiya Urban | Nikoo Homes" width={220} height={60} className="mb-6 h-auto w-auto max-w-[200px]" />
            <div className="prose-nh prose-lead">
              <p>
                The Bhartiya Group was founded in 1987 by Snehdeep Aggarwal, beginning as a Punjab-based carpet and
                leather business and growing into one of India&apos;s largest leather goods and fashion exporters, listed
                as Bhartiya International Limited with operations in Italy and China.
              </p>
              <p>
                Bhartiya Urban is the group&apos;s real estate arm. Its defining project is{" "}
                <Link href="/bhartiya-city" className="text-link">Bhartiya City</Link>, a 125-acre integrated
                development near Hebbal launched in 2012 and planned for approximately 17 million sq ft across eight
                districts, with a four-acre central park and over two hundred gardens.
              </p>
              <p>
                The distinguishing feature of the model is that Bhartiya Urban retains and operates these assets rather
                than selling and exiting. Ashwinder R Singh is Chief Executive Officer of the real estate business.
              </p>
            </div>
            <ul className="check-list prose-nh-list mt-6">
              {bhartiyaCity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Figure image={cityAerial} alt="Aerial view of Bhartiya City with its central park and towers" aspect="4/5" caption="Bhartiya City, near Hebbal." />
        </div>
        <ImageStrip
          className="mt-10"
          images={[
            { image: mall, alt: "Shoppers inside Bhartiya Mall of Bengaluru", caption: "Bhartiya Mall of Bengaluru" },
            { image: highStreet, alt: "Evening crowd at the open-air venue in Bhartiya City", caption: "Performing arts and high street" },
            { image: greenAvenues, alt: "Towers and landscaped lawns at Bhartiya City", caption: "Central park and gardens" },
          ]}
        />
      </Section>

      <Section tone="cream" narrow="center">
        <SectionHeading title="The Nikoo Homes Programme" eyebrow="Nikoo Homes 1 to 9" align="center" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-600 md:text-base" data-animate="fade-up">
          Nikoo Homes 8 is the eighth phase of a residential programme that has actually completed — not a
          first-time promise.
        </p>
        <ol className="relative ml-3 mt-10 flex flex-col gap-8 border-l-2 border-line md:ml-6" data-stagger>
          {timeline.map((item) => (
            <li key={item.phase} className="group relative pl-8" data-animate="fade-left">
              <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-gold-light bg-white transition-transform duration-300 group-hover:scale-125" />
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-ink">{item.status}</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.href ? (
                  <Link href={item.href} className="hover:text-gold-ink">
                    {item.phase}
                  </Link>
                ) : (
                  item.phase
                )}
              </h3>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-gray-600" data-animate="fade-up">
          Phase-by-phase RERA numbers are on the <Link href="/bhartiya-city" className="text-link">Bhartiya City</Link> page.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div data-animate="fade-up">
            <SectionHeading title="The Pipeline" eyebrow="What comes next" />
            <p className="prose-nh mt-6">
              The company has stated a pipeline of over 5,000 apartments and approximately 9 million sq ft across
              roughly fifteen months, representing more than ₹9,000 crore of fresh inventory, with expansion planned
              into Whitefield and Sarjapur.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center" data-stagger>
              {[
                { value: "5,000+", label: "Apartments in the pipeline" },
                { value: "~9 mn", label: "Sq ft in roughly 15 months" },
                { value: "₹9,000 Cr+", label: "Fresh inventory" },
              ].map((stat) => (
                <div key={stat.label} className="card-anim rounded-xl border border-line bg-cream p-3 sm:p-4" data-animate="zoom-in">
                  <p className="text-base font-bold text-gold-ink sm:text-xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] leading-snug text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Figure image={nh8Hero} alt="Nikoo Homes 8 towers and the Black Swan Club at Bellahalli at dusk" aspect="16/10" caption="Nikoo Homes 8, the 2026 launch. Artist's impression." />
        </div>
      </Section>

      <ExploreGrid current="/about-bhartiya-urban" tone="cream" />
      <ContactBlock section={contact} disclaimer={homeCopy.disclaimer} idPrefix="developer-contact" image={heroImage} />
    </>
  );
}
