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
    title: "Apartments in Thanisandra: How Nikoo Homes 8 Compares in 2026",
    slug: "apartments-in-thanisandra",
    excerpt:
      "What to compare when shortlisting apartments in Thanisandra — developer record, commute, price per sq ft, open space and possession — with Nikoo Homes 8's numbers for each.",
    metaTitle: "Apartments in Thanisandra 2026 | Nikoo Homes 8 Compared",
    metaDescription:
      "Shortlisting apartments in Thanisandra? How Nikoo Homes 8 compares with TVS Emerald Auralis, Casagrand Estancia, Century Bliss and Century Immencity on the factors that matter.",
    keywords: ["apartments in Thanisandra", "Nikoo Homes 8", "3 BHK Thanisandra Main Road", "flats near Manyata Tech Park", "Bhartiya Urban Thanisandra"],
    canonical: "https://bhartiyanikoohomes8.com/blog/apartments-in-thanisandra",
    image: "/blog-apartments-in-thanisandra.webp",
    altText: "Aerial render of Nikoo Homes 8 towers and the Central Spine at dusk, Thanisandra",
    date: "2026-09-22",
    updatedAt: "2026-09-22",
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
    title: "Studio Apartments in North Bangalore: The Rental-Yield Case for Nikoo Homes 8",
    slug: "studio-apartments-north-bangalore-rental-yield",
    excerpt:
      "Why studio and 1 BHK stock at ₹67 to 93 lakh is the investor play against the Manyata tenant base — and how to work out the yield honestly before you buy.",
    metaTitle: "Studio Apartments Bangalore Investment | Nikoo Homes 8 Yield",
    metaDescription:
      "Studio apartments in North Bangalore as an investment: Nikoo Homes 8 studios from ₹67 lakh near Manyata Tech Park, all-in costs, a yield worked example and the risks.",
    keywords: ["studio apartments Bangalore investment", "Nikoo Homes 8 studio", "rental yield North Bangalore", "flats near Manyata Tech Park"],
    canonical: "https://bhartiyanikoohomes8.com/blog/studio-apartments-north-bangalore-rental-yield",
    image: "/blog-studio-apartments-rental-yield.webp",
    altText: "Bright bedroom interior render at Nikoo Homes 8",
    date: "2026-09-23",
    updatedAt: "2026-09-23",
    author: "Real Revenue",
    category: "Investment",
    readTime: "6 min read",
    tags: ["studio", "rental yield", "investment", "manyata"],
    featured: true,
  },
];
