export type NewsMeta = {
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
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-blue-line",
    title: "Blue Line Metro: Hebbal Targeted for June 2027, Nagawara for March 2028, and What It Changes for Thanisandra",
    slug: "namma-metro-blue-line-hebbal-nagawara-thanisandra",
    excerpt:
      "Phase 2B runs from Kasturi Nagar through Nagawara, Veerannapalya, Kempapura and Hebbal to the airport. The Hebbal date gives this corridor its first rail route to the airport; the Nagawara interchange gives it a way around the Hebbal junction. Why the second matters more for a Bellahalli commute, and what to do with a 2026 purchase in the meantime.",
    metaTitle: "Blue Line Metro Hebbal 2027, Nagawara 2028 | Thanisandra Impact",
    metaDescription:
      "Namma Metro Blue Line Phase 2B timeline — Hebbal June 2027, Nagawara March 2028 — and what it changes for commuters and buyers at Nikoo Homes 8, Thanisandra.",
    keywords: ["Namma Metro Blue Line", "Nagawara metro", "Hebbal metro", "Thanisandra metro", "Nikoo Homes 8"],
    canonical: "https://bhartiyanikoohomes8.com/news/namma-metro-blue-line-hebbal-nagawara-thanisandra",
    image: "/news-namma-metro-blue-line.webp",
    altText: "Nikoo Homes 8 towers on the Thanisandra corridor served by the upcoming Blue Line metro",
    date: "2026-09-21",
    updatedAt: "2026-09-21",
    author: "Real Revenue",
    category: "Infrastructure",
    readTime: "4 min read",
    featured: true,
    tags: ["metro", "thanisandra", "hebbal", "nagawara"],
    location: "Bengaluru",
    newsType: "Infrastructure",
  },
  {
    id: "news-launch",
    title: "Bhartiya City New Launch: Bhartiya Urban Opens Nikoo Homes 8 at Bellahalli, 1,010 Homes on 11.35 Acres",
    slug: "bhartiya-urban-launches-nikoo-homes-8-bellahalli",
    excerpt:
      "The eighth Nikoo Homes phase and the Bhartiya City new project of 2026: six towers of 16 to 24 floors, studio to 4 BHK with a duplex loft and courtyard villas, a 40,000 sq ft Black Swan Club and 75% open ground, five to seven minutes from the township, with a stated business potential of over ₹2,000 crore.",
    metaTitle: "Nikoo Homes 8 Launched at Bellahalli | 1,010 Homes by Bhartiya Urban",
    metaDescription:
      "Bhartiya Urban launched Nikoo Homes 8 on 17 June 2026: 1,010 homes on 11.35 acres at Bellahalli, studios from ₹67 lakh, RERA registered, completion December 2030.",
    keywords: ["Nikoo Homes 8 launch", "Bhartiya Urban", "Nikoo Homes 8 Bellahalli", "Nikoo Homes 8 RERA"],
    canonical: "https://bhartiyanikoohomes8.com/news/bhartiya-urban-launches-nikoo-homes-8-bellahalli",
    image: "/news-nikoo-homes-8-launch.webp",
    altText: "Aerial render of the Black Swan Club and gardens at Nikoo Homes 8",
    date: "2026-06-17",
    updatedAt: "2026-06-17",
    author: "Real Revenue",
    category: "Project News",
    readTime: "3 min read",
    featured: true,
    tags: ["launch", "nikoo homes 8", "bhartiya urban"],
    location: "Bengaluru",
    newsType: "Launch",
  },
];

export default NewsData;
