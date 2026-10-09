import copy from "@/content/pages/news";
import { blocksOfType, getFaqs, getFaqSection, getSection } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";
import NewsData from "@/data/newsData";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import { TextSection } from "@/components/content/MediaSection";
import Blocks from "@/components/content/Blocks";
import LabelCards from "@/components/content/LabelCards";
import ArticleCard from "@/components/content/ArticleCard";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import ExploreGrid from "@/components/content/ExploreGrid";
import { PriceSheetButton, SiteVisitLink } from "@/components/content/CtaButtons";

import heroImage from "@/assets/nikoo-homes-8-towers.webp";
import PageStructuredData from "@/components/content/PageStructuredData";

const HERO_ALT = "Nikoo Homes 8 towers rising above the gardens at Bellahalli";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const board = getSection(copy, "project-status-board-as-of-8-october-2026");
const latest = getSection(copy, "latest-updates");
const triggers = getSection(copy, "what-triggers-an-update-here");
const faqSection = getFaqSection(copy);
const contact = getSection(copy, "contact-us");

const docCards = blocksOfType(latest.blocks, "cards")[0]?.items ?? [];

// Every update, newest first, with the news doc's card copy where it has one.
const updates = [...NewsData]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((item) => {
    const href = `/news/${item.slug}`;
    const card = docCards.find((c) => c.href === href);
    const [category, date] = card
      ? card.meta.split(" · ")
      : [item.category, new Date(item.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })];
    return {
      href,
      category,
      date,
      title: card?.title ?? item.title,
      text: card?.text ?? item.excerpt,
      image: item.image,
      alt: item.altText ?? item.title,
    };
  });

export default function NewsPage() {
  return (
    <>
      <PageStructuredData copy={copy} type="news" image={heroImage} />
      <PageHero
        title={copy.h1}
        eyebrow="Status board · Updated 8 October 2026"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "News", href: "/news" }]}
        facts={["RERA registered 7 May 2026", "Possession December 2030", "Blue Line: Hebbal 2027, Nagawara 2028"]}
      >
        <PriceSheetButton />
        <SiteVisitLink />
      </PageHero>

      <Section narrow>
        <Blocks blocks={intro.blocks} className="prose-lead" />
      </Section>

      <TextSection section={board} tone="cream" narrow={false} eyebrow="Checked against the developer and the RERA portal" />

      <Section id={latest.id}>
        <SectionHeading title={latest.title} eyebrow="Dated updates" />
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" data-stagger>
          {updates.map((u) => (
            <li key={u.href} data-animate="fade-up">
              <ArticleCard href={u.href} image={u.image} alt={u.alt} category={u.category} date={u.date} title={u.title} excerpt={u.text} cta="Read update" />
            </li>
          ))}
        </ul>
      </Section>

      <Section id={triggers.id} tone="sand">
        <SectionHeading title={triggers.title} eyebrow="When this page changes" />
        <LabelCards items={blocksOfType(triggers.blocks, "ul")[0]?.items ?? []} columns={4} numbered className="mt-8" />
      </Section>

      <FaqSection title={faqSection.title} items={getFaqs(copy)} idPrefix="news-faq" tone="white" />
      <ExploreGrid current="/news" tone="cream" />
      <ContactBlock section={contact} disclaimer={copy.disclaimer} idPrefix="news-contact" />
    </>
  );
}
