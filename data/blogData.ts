export type BlogMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

export const blogData: BlogMeta[] = [
  {
    id: "blog-apartments-in-thanisandra",
    title: "Projects in Thanisandra Compared: What to Check Before You Book in 2026",
    slug: "apartments-in-thanisandra",
    excerpt:
      "The five things that separate projects in Thanisandra from each other, developer record, commute at your hour, price per sq ft on carpet, open space and possession date, with Nikoo Homes 8's figure for each and where it loses.",
    metaTitle: "Projects in Thanisandra Compared 2026 | Nikoo Homes 8",
    metaDescription:
      "Comparing projects in Thanisandra? The checks that separate them, from developer record and commute to price per sq ft and possession, with Nikoo Homes 8's figures.",
    keywords: ["projects in Thanisandra", "new launch projects in Thanisandra", "flats for sale in Thanisandra", "Nikoo Homes 8"],
    canonical: "https://bhartiyanikoohomes8.com/blog/apartments-in-thanisandra",
    image: "/blog-apartments-in-thanisandra.webp",
    altText: "Aerial render of Nikoo Homes 8 towers and the Central Spine at dusk, Thanisandra",
    date: "2026-09-22",
    updatedAt: "2026-10-08",
    author: "Real Revenue",
    category: "Buyer Guide",
    readTime: "7 min read",
    tags: ["thanisandra", "north bangalore", "nikoo homes 8", "comparison"],
    featured: true,
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the price per sq ft at Nikoo Homes 8?",
          acceptedAnswer: { "@type": "Answer", text: "Launch pricing runs at roughly ₹12,000 to ₹12,500 per sq ft for the apartments." },
        },
        {
          "@type": "Question",
          name: "Which projects compete with Nikoo Homes 8 in Thanisandra?",
          acceptedAnswer: { "@type": "Answer", text: "The usual comparison set is TVS Emerald Auralis, Casagrand Estancia at Kogilu, Century Bliss and Century Immencity." },
        },
        {
          "@type": "Question",
          name: "What is the biggest risk of buying in Thanisandra?",
          acceptedAnswer: { "@type": "Answer", text: "Traffic. Hebbal, the Outer Ring Road and Hennur Road congest badly at rush hour, and the Blue Line metro is 2027 to 2028, not today." },
        },
      ],
    },
  },
  {
    id: "blog-studio-rental-yield",
    title: "Studio and 1 BHK Flats in Bangalore for Rental Yield: The Nikoo Homes 8 Numbers",
    slug: "studio-apartments-north-bangalore-rental-yield",
    excerpt:
      "Why the ₹67 to 93 lakh studio and 1 BHK stock is the unit investors ask about first, how to work out the yield on a Manyata tenant honestly, and where studio apartments in Bangalore for sale from a developer with a delivery record are actually rare.",
    metaTitle: "Studio & 1 BHK Flats in Bangalore for Rental Yield | Nikoo Homes 8",
    metaDescription:
      "Studio and 1 BHK flats in Bangalore for rental yield: Nikoo Homes 8 studios from ₹67 lakh near Manyata Tech Park, all-in costs, a worked yield example and the risks.",
    keywords: ["1 bhk flats in bangalore", "studio apartments in bangalore for sale", "nikoo homes 1 bhk", "Nikoo Homes 8 studio"],
    canonical: "https://bhartiyanikoohomes8.com/blog/studio-apartments-north-bangalore-rental-yield",
    image: "/blog-studio-apartments-rental-yield.webp",
    altText: "Bright bedroom interior render at Nikoo Homes 8",
    date: "2026-09-23",
    updatedAt: "2026-10-08",
    author: "Real Revenue",
    category: "Investment",
    readTime: "6 min read",
    tags: ["studio", "rental yield", "investment", "manyata"],
    featured: true,
  },
];
