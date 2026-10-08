import { FaPhoneAlt, FaEnvelope, FaWpforms, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import copy from "@/content/pages/contact";
import { blocksOfType, getFaqs, getFaqSection, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";
import { CONTACT } from "@/data/projectData";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import MediaSection, { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import Figure from "@/components/content/Figure";
import LabelCards from "@/components/content/LabelCards";
import LeadForm from "@/components/content/LeadForm";
import FaqSection from "@/components/content/FaqSection";
import ExploreGrid from "@/components/content/ExploreGrid";
import Md from "@/components/content/Md";
import { CallLink, WhatsAppLink } from "@/components/content/CtaButtons";

import heroImage from "@/assets/black-swan-club-lounge.webp";
import centralSpine from "@/assets/central-spine-walkway.webp";

const HERO_ALT = "Lounge inside the Black Swan Club at Nikoo Homes 8";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const reach = getSection(copy, "how-to-reach-us");
const youGet = getSection(copy, "what-you-get-when-you-contact-us");
const siteVisit = getSection(copy, "book-a-nikoo-homes-8-site-visit");
const beforeYouBook = getSection(copy, "before-you-book-what-to-have-ready");
const offices = getSection(copy, "offices");
const askUs = getSection(copy, "what-to-ask-us");
const faqSection = getFaqSection(copy);

// The doc leaves the email as a placeholder; fill it from the site's contact details.
const reachItems = (blocksOfType(reach.blocks, "ul")[0]?.items ?? []).map((item) =>
  item.replace("[branded address]", `[${CONTACT.email}](mailto:${CONTACT.email})`)
);

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title={copy.h1}
        eyebrow="Call or WhatsApp · Seven days a week"
        image={heroImage}
        imageAlt={HERO_ALT}
        imagePosition="center 35%"
        crumbs={[{ name: "Contact Us", href: "/contact-us" }]}
      >
        <CallLink />
        <WhatsAppLink />
      </PageHero>

      <Section id="book-site-visit">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Blocks blocks={intro.blocks} className="prose-lead" />
            <div id={reach.id} className="mt-10 scroll-mt-24">
              <SectionHeading title={reach.title} eyebrow="Phone, email, form or the site" />
              <LabelCards items={reachItems} columns={2} icons={[FaPhoneAlt, FaEnvelope, FaWpforms, FaMapMarkerAlt]} className="mt-6" />
              <div className="prose-nh mt-6">
                {paragraphs(reach).map((text) => (
                  <p key={text}>
                    <Md text={text} />
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <LeadForm
              idPrefix="contact-page"
              eyebrow="Site visit · Cost sheet · Brochure"
              title="Book a site visit or get the cost sheet"
              intro="We call back on the number you give, usually the same day."
            />
          </div>
        </div>
      </Section>

      <Section id={youGet.id} tone="cream">
        <SectionHeading title={youGet.title} eyebrow="Same-day answers" />
        <LabelCards items={blocksOfType(youGet.blocks, "ul")[0]?.items ?? []} numbered className="mt-8" />
      </Section>

      <MediaSection
        section={siteVisit}
        eyebrow="Pickup from Hebbal or Manyata"
        media={<Figure image={centralSpine} alt="Families walking along the car-free Central Spine at Nikoo Homes 8" aspect="4/3" caption="On site you walk the Central Spine. Artist's impression." />}
      />

      <TextSection section={beforeYouBook} tone="sand" eyebrow="EOI and booking documents" />

      <Section id={offices.id}>
        <SectionHeading title={offices.title} eyebrow="Where to find us" />
        <LabelCards items={blocksOfType(offices.blocks, "ul")[0]?.items ?? []} icons={[FaMapMarkerAlt, FaBuilding, FaBuilding]} className="mt-8" />
        <div className="prose-nh mt-6 max-w-3xl">
          {paragraphs(offices).map((text) => (
            <p key={text}>
              <Md text={text} />
            </p>
          ))}
        </div>
      </Section>

      <TextSection section={askUs} tone="cream" eyebrow="Questions worth asking" />
      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="contact-faq" tone="white" />

      {copy.disclaimer && (
        <Section tone="sand" compact narrow>
          <p className="text-xs italic leading-relaxed text-gray-500">
            <Md text={copy.disclaimer} />
          </p>
        </Section>
      )}

      <ExploreGrid current="/contact-us" />
    </>
  );
}
