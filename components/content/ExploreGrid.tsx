import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Section, { SectionHeading } from "./Section";

import configurationsThumb from "@/assets/thumbs/interior-loft.webp";
import priceThumb from "@/assets/thumbs/towers.webp";
import floorPlanThumb from "@/assets/thumbs/interior-2-bhk.webp";
import masterPlanThumb from "@/assets/thumbs/master-plan.webp";
import amenitiesThumb from "@/assets/thumbs/black-swan-club.webp";
import locationThumb from "@/assets/thumbs/bhartiya-mall.webp";
import bhartiyaCityThumb from "@/assets/thumbs/bhartiya-city-aerial.webp";
import aboutThumb from "@/assets/thumbs/aerial-view.webp";
import developerThumb from "@/assets/thumbs/the-leela.webp";
import newsThumb from "@/assets/thumbs/hero.webp";
import blogThumb from "@/assets/thumbs/central-spine.webp";
import contactThumb from "@/assets/thumbs/club-lounge.webp";

type Destination = { href: string; title: string; blurb: string; image: StaticImageData; alt: string };

export const destinations: Destination[] = [
  { href: "/configurations", title: "Villa & Configuration", blurb: "Studio to 4 BHK, the duplex loft and courtyard villas, with carpet and saleable areas.", image: configurationsThumb, alt: "Double-height living room of the Nikoo Homes 8 duplex loft" },
  { href: "/price", title: "Price", blurb: "Price list 2026, price per sq ft, the cost sheet and the payment plan.", image: priceThumb, alt: "Nikoo Homes 8 towers above the landscaped podium" },
  { href: "/floor-plan", title: "Floor Plan", blurb: "All nine apartment plans, room by room, and the brochure PDF.", image: floorPlanThumb, alt: "Living room render of a Nikoo Homes 8 2 BHK" },
  { href: "/master-plan", title: "Master Plan", blurb: "Six towers, the car-free Central Spine and 22 landscape zones on 11.35 acres.", image: masterPlanThumb, alt: "Nikoo Homes 8 landscape master plan" },
  { href: "/amenities", title: "Amenities", blurb: "The 40,000 sq ft Black Swan Club, four pools, courts and themed gardens.", image: amenitiesThumb, alt: "The Black Swan Club with its rooftop pool" },
  { href: "/location", title: "Location", blurb: "Bellahalli, off Thanisandra Main Road: Manyata, Hebbal, the airport and the metro.", image: locationThumb, alt: "Bhartiya Mall of Bengaluru, two to five minutes from Nikoo Homes 8" },
  { href: "/bhartiya-city", title: "Bhartiya City", blurb: "The 125-acre township next door and the Nikoo Homes phases inside it.", image: bhartiyaCityThumb, alt: "Aerial view of Bhartiya City and its central park" },
  { href: "/about-nikoo-homes-8", title: "About Nikoo Homes 8", blurb: "Bhartiya Garden Enclave: the phase history, what works and what to weigh.", image: aboutThumb, alt: "Aerial view of the Black Swan Club and gardens at Nikoo Homes 8" },
  { href: "/about-bhartiya-urban", title: "About Bhartiya Urban", blurb: "The developer that built Bhartiya City and still runs it.", image: developerThumb, alt: "The Leela Bhartiya City at dusk" },
  { href: "/news", title: "News", blurb: "Dated status board: RERA, possession date, prices and the metro.", image: newsThumb, alt: "Nikoo Homes 8 towers and the Central Spine at dusk" },
  { href: "/blog", title: "Blog", blurb: "Buyer guides, rental yield and North Bangalore comparisons.", image: blogThumb, alt: "Tree-lined Central Spine walkway at Nikoo Homes 8" },
  { href: "/contact-us", title: "Contact Us", blurb: "Site visits seven days a week, the brochure and the live cost sheet.", image: contactThumb, alt: "Lounge inside the Black Swan Club" },
];

const CORE = ["/configurations", "/price", "/floor-plan", "/master-plan", "/amenities", "/location", "/bhartiya-city", "/about-nikoo-homes-8"];

// Image cards linking to section pages: a swipeable rail on phones, a grid
// from md up.
export function DestinationCards({ hrefs = CORE, current }: { hrefs?: string[]; current?: string }) {
  const items = hrefs
    .filter((href) => href !== current)
    .map((href) => destinations.find((d) => d.href === href))
    .filter((d): d is Destination => Boolean(d));

  return (
    <ul className="rail md:mx-0 md:grid-flow-row md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-4" data-stagger>
      {items.map((item) => (
        <li key={item.href} data-animate="fade-up">
          <Link
            href={item.href}
            className="card-anim group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 33vw, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-base font-semibold text-gray-900 transition-colors group-hover:text-gold-ink">
                {item.title}
              </p>
              <p className="mt-1 flex-1 text-[13px] leading-relaxed text-gray-600">{item.blurb}</p>
              <span className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-gold-ink">
                Read more <span className="arrow-nudge">→</span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// "Explore" band closing each section page, linking to the other pages.
export default function ExploreGrid({
  current,
  hrefs = CORE,
  title = "Explore Nikoo Homes 8",
  eyebrow = "Keep reading",
  tone = "white",
}: {
  current?: string;
  hrefs?: string[];
  title?: string;
  eyebrow?: string;
  tone?: "white" | "cream" | "sand";
}) {
  return (
    <Section tone={tone} compact>
      <SectionHeading title={title} eyebrow={eyebrow} as="h2" className="mb-7" />
      <DestinationCards hrefs={hrefs} current={current} />
    </Section>
  );
}
