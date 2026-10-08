import Link from "next/link";
import { blogData } from "@/data/blogData";
import ArticleCard from "./content/ArticleCard";
import Section, { SectionHeading } from "./content/Section";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", { month: "long", year: "numeric" });

export default function BlogSection() {
  const latestBlogs = [...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <Section id="blog" tone="white">
      <SectionHeading eyebrow="Our Blog" title="Buyer Guides & Market Insights" align="center" className="mb-10" />

      {/* Fewer than three cards: keep them centred rather than leaving an empty column. */}
      <div className={latestBlogs.length < 3 ? "mx-auto max-w-4xl" : undefined}>
      <ul className={`rail md:mx-0 md:grid-flow-row md:grid-cols-2 md:overflow-visible md:px-0 ${latestBlogs.length >= 3 ? "lg:grid-cols-3" : ""}`} data-stagger>
        {latestBlogs.map((item) => (
          <li key={item.id} data-animate="fade-up">
            <ArticleCard
              href={`/blog/${item.slug}`}
              image={item.image}
              alt={item.altText || item.title}
              category={item.category}
              date={formatDate(item.date)}
              title={item.title}
              excerpt={item.excerpt}
            />
          </li>
        ))}
      </ul>
      </div>

      <div className="mt-8 text-center" data-animate="fade-up">
        <Link
          href="/blog"
          className="btn-anim inline-block rounded-lg bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
        >
          Read the Nikoo Homes 8 Blog
        </Link>
      </div>
    </Section>
  );
}
