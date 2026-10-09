import { FaBook, FaChartLine, FaMapMarkedAlt, FaBalanceScale } from "react-icons/fa";
import copy from "@/content/pages/blog";
import { blocksOfType, getFaqs, getSection, paragraphs } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";
import { blogData } from "@/data/blogData";

import PageHero from "@/components/content/PageHero";
import Section, { SectionHeading } from "@/components/content/Section";
import Blocks from "@/components/content/Blocks";
import LabelCards from "@/components/content/LabelCards";
import ArticleCard from "@/components/content/ArticleCard";
import FaqSection from "@/components/content/FaqSection";
import ContactBlock from "@/components/content/ContactBlock";
import { DestinationCards } from "@/components/content/ExploreGrid";
import Md from "@/components/content/Md";

import heroImage from "@/assets/interior-studio.webp";
import PageStructuredData from "@/components/content/PageStructuredData";

const HERO_ALT = "Study desk by a window in a Nikoo Homes 8 studio apartment render";

export const metadata = pageMetadata({ ...copy.meta, image: heroImage, imageAlt: HERO_ALT });

const intro = getSection(copy, "intro");
const startHere = getSection(copy, "start-here");
const covers = getSection(copy, "what-the-blog-covers");
const latest = getSection(copy, "latest-articles");
const questions = getSection(copy, "questions-the-blog-answers");
const contact = getSection(copy, "contact-us");

const docCards = blocksOfType(latest.blocks, "cards")[0]?.items ?? [];

// Every post, newest first. Posts the blog doc describes use its card copy;
// posts added later fall back to their own title and excerpt.
const articles = [...blogData]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((post) => {
    const href = `/blog/${post.slug}`;
    const card = docCards.find((c) => c.href === href);
    const [category, date] = card
      ? card.meta.split(" · ")
      : [post.category, new Date(post.date).toLocaleDateString("en-IN", { month: "long", year: "numeric" })];
    return {
      href,
      category,
      date,
      title: card?.title ?? post.title,
      text: card?.text ?? post.excerpt,
      image: post.image,
      alt: post.altText ?? post.title,
    };
  });

export default function BlogPage() {
  return (
    <>
      <PageStructuredData copy={copy} type="blog" image={heroImage} />
      <PageHero
        title={copy.h1}
        eyebrow="Real Revenue · Buyer guides"
        image={heroImage}
        imageAlt={HERO_ALT}
        crumbs={[{ name: "Blog", href: "/blog" }]}
        facts={["Dated and checked", "Brochure figures", "Comparisons stated plainly"]}
      />

      <Section narrow>
        <Blocks blocks={intro.blocks} className="prose-lead" />
      </Section>

      <Section id={startHere.id} tone="cream">
        <SectionHeading title={startHere.title} eyebrow="New to the project?" />
        <Blocks blocks={startHere.blocks} className="mt-6 max-w-4xl" />
        <div className="mt-8">
          <DestinationCards
            hrefs={["/configurations", "/price", "/floor-plan", "/master-plan", "/amenities", "/location", "/about-nikoo-homes-8", "/contact-us"]}
          />
        </div>
      </Section>

      <Section id={covers.id}>
        <SectionHeading title={covers.title} eyebrow="Four kinds of post" />
        <LabelCards
          items={blocksOfType(covers.blocks, "ul")[0]?.items ?? []}
          columns={4}
          icons={[FaBook, FaChartLine, FaMapMarkedAlt, FaBalanceScale]}
          className="mt-8"
        />
        <div className="prose-nh mt-8 max-w-3xl">
          {paragraphs(covers).map((text) => (
            <p key={text}>
              <Md text={text} />
            </p>
          ))}
        </div>
      </Section>

      <Section id={latest.id} tone="sand">
        <SectionHeading title={latest.title} eyebrow="Latest from the blog" />
        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2" data-stagger>
          {articles.map((a) => (
            <li key={a.href} data-animate="fade-up">
              <ArticleCard href={a.href} image={a.image} alt={a.alt} category={a.category} date={a.date} title={a.title} excerpt={a.text} />
            </li>
          ))}
        </ul>
      </Section>

      <FaqSection title={questions.title} items={getFaqs(copy)} idPrefix="blog-faq" eyebrow="Quick answers" tone="white" />
      <ContactBlock section={contact} idPrefix="blog-contact" />
    </>
  );
}
