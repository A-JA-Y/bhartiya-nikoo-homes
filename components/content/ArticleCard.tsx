import Image from "next/image";
import Link from "next/link";

// Card for a blog post or news update. The whole card is one crawlable link.
export default function ArticleCard({
  href,
  image,
  alt,
  category,
  date,
  title,
  excerpt,
  cta = "Read article",
  headingLevel = "h3",
}: {
  href: string;
  image: string;
  alt: string;
  category: string;
  date?: string;
  title: string;
  excerpt: string;
  cta?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link
      href={href}
      className="card-anim group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, 360px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-ink">
          {category}
          {date && <span className="font-normal normal-case tracking-normal text-gray-500"> · {date}</span>}
        </p>
        <Heading className="mt-2 text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-gold-ink sm:text-lg">
          {title}
        </Heading>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{excerpt}</p>
        <span className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-gold-ink">
          {cta} <span className="arrow-nudge">→</span>
        </span>
      </div>
    </Link>
  );
}
