import type { PageCopy } from "@/content/pages/types";
import { getFaqs } from "@/lib/copy";
import { MAP_LINK_URL, SITE_URL } from "@/data/projectData";

const siteUrl = `${SITE_URL}/`;

const project = {
  "@type": "ApartmentComplex",
  "@id": `${SITE_URL}/#project`,
  name: "Bhartiya Nikoo Homes 8",
  alternateName: ["Nikoo Homes 8", "Bhartiya Garden Enclave"],
  description:
    "Nikoo Homes 8 is the eighth residential phase from Bhartiya Urban: approximately 1,010 homes in six towers on 11.35 acres at Bellahalli, off Thanisandra Main Road, North Bengaluru.",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bellahalli, off Thanisandra Main Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560064",
    addressCountry: "IN",
  },
  hasMap: MAP_LINK_URL,
  telephone: "+916356663535",
  numberOfAccommodationUnits: 1010,
  petsAllowed: true,
  identifier: [
    { "@type": "PropertyValue", propertyID: "Karnataka RERA (Phase 1)", value: "PRM/KA/RERA/1251/309/PR/070526/008628" },
    { "@type": "PropertyValue", propertyID: "Karnataka RERA (Phase 2)", value: "PRM/KA/RERA/1251/309/PR/070526/008629" },
  ],
};

export const sitewideSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#organization`,
      name: "Real Revenue",
      alternateName: "RealRevenue",
      description:
        "Real Revenue is an authorised channel partner for Bhartiya Nikoo Homes 8. This website is a marketing initiative and not the official website of Bhartiya Urban.",
      url: siteUrl,
      telephone: "+916356663535",
      email: "vishalajitsaria1988@gmail.com",
      address: [
        {
          "@type": "PostalAddress",
          name: "Noida Office",
          streetAddress: "19th Floor, Etherea, Bhutani Alphathum Tower B, Sector 90",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201304",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          name: "Mumbai Office",
          streetAddress: "LG 32 1/2, Indira Nagar, Sunderbaug, Kamani, Kurla",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400070",
          addressCountry: "IN",
        },
      ],
      areaServed: { "@type": "City", name: "Bengaluru" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+916356663535",
        email: "vishalajitsaria1988@gmail.com",
        areaServed: "IN",
        url: `${SITE_URL}/contact-us`,
      },
      knowsAbout: ["Bhartiya Nikoo Homes 8", "Apartments in Thanisandra", "North Bangalore real estate"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: siteUrl,
      name: "Bhartiya Nikoo Homes 8",
      alternateName: "Nikoo Homes 8",
      description:
        "Nikoo Homes 8 by Bhartiya Urban at Bellahalli, Thanisandra Main Road. Studio to 4 BHK from ₹67 lakh and courtyard villas. Price, floor plan, amenities, RERA.",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#developer`,
      name: "Bhartiya Urban",
      description:
        "Bhartiya Urban is the real estate arm of the Bhartiya Group and the developer of Bhartiya City and the Nikoo Homes series in Bengaluru.",
      parentOrganization: {
        "@type": "Organization",
        name: "Bhartiya Group",
        legalName: "Bhartiya International Limited",
        foundingDate: "1987",
        founder: { "@type": "Person", name: "Snehdeep Aggarwal" },
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#navigation`,
      name: "Main navigation",
      itemListElement: [
        ["Home", "/"],
        ["About Nikoo Homes 8", "/about-nikoo-homes-8"],
        ["Configurations", "/configurations"],
        ["Price", "/price"],
        ["Floor Plans", "/floor-plan"],
        ["Master Plan", "/master-plan"],
        ["Location", "/location"],
        ["Amenities", "/amenities"],
        ["Bhartiya City", "/bhartiya-city"],
        ["About Bhartiya Urban", "/about-bhartiya-urban"],
        ["Blogs", "/blog"],
        ["News", "/news"],
        ["Contact Us", "/contact-us"],
      ].map(([name, path], index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name,
        url: `${SITE_URL}${path}`,
      })),
    },
  ],
};

type PageSchemaType =
  | "about"
  | "configurations"
  | "price"
  | "floor-plan"
  | "master-plan"
  | "location"
  | "amenities"
  | "bhartiya-city"
  | "developer"
  | "contact"
  | "home"
  | "blog"
  | "news";

export function pageSchema(copy: PageCopy, type: PageSchemaType, imageUrl?: string) {
  const path = copy.meta.path === "/" ? "/" : copy.meta.path;
  const url = `${SITE_URL}${path}`;
  const faqs = getFaqs(copy);
  const pageType = type === "about" || type === "developer" ? "AboutPage" : type === "blog" || type === "news" || type === "configurations" ? "CollectionPage" : type === "contact" ? "ContactPage" : "WebPage";
  const entityByType: Record<string, Record<string, unknown>> = {
    configurations: {
      "@type": "ItemList",
      "@id": `${url}#unit-types`,
      name: "Nikoo Homes 8 home types",
      numberOfItems: 11,
      itemListElement: [
        ["Studio (A1A)", 0, 501], ["1 BHK (B3)", 1, 786], ["1 BHK + Study (C1A)", 1, 1088],
        ["2 BHK (D1B)", 2, 1165], ["2 BHK + Study (F1A)", 2, 1371], ["3 BHK (G3)", 3, 1730],
        ["3 BHK + Study (H1B)", 3, 2006], ["3 BHK Duplex Loft (L1B)", 3, 2132],
        ["4 BHK + Staff (J1A)", 4, 2506], ["3 Bed + Study Courtyard Villa", 3, 2800],
        ["4 Bed Courtyard Villa", 4, 3100],
      ].map(([name, bedrooms, size], index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@type": index > 8 ? "House" : "Apartment", name: `Nikoo Homes 8 ${name}`, numberOfBedrooms: bedrooms, floorSize: { "@type": "QuantitativeValue", value: size, unitCode: "FTK" }, containedInPlace: { "@id": `${SITE_URL}/#project` } },
      })),
    },
    amenities: {
      "@type": "ItemList",
      "@id": `${url}#amenities`,
      name: "Nikoo Homes 8 amenities",
      numberOfItems: 37,
      itemListElement: [
        "Black Swan Club (40,000+ sq ft clubhouse)", "Rooftop swimming pool", "Lap pool", "Leisure pool", "Children's pool",
        "Fully equipped gymnasium", "Spa and wellness suite", "Indoor games room", "Library", "Co-working spaces", "Mini theatre",
        "Banquet and party hall", "Guest rooms for visiting family", "Tennis court", "Basketball court", "Squash court",
        "Multipurpose court", "Rock climbing wall", "Jogging track", "Skating track", "Pedestrianised Central Spine",
        "Meditation and yoga deck", "Sensory garden", "Aroma garden", "Meditation garden", "Linear garden",
        "Community garden and organic kitchen", "Party lawn", "Children's play areas", "Barbecue pit", "Cabana shacks",
        "Pet zone", "Rainwater harvesting", "Sewage treatment plant with treated water reuse", "Two basement parking levels",
        "24x7 CCTV surveillance and gated security", "Power backup for common areas and lifts",
      ].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })),
    },
    location: {
      "@type": "Place",
      "@id": `${url}#place`,
      name: "Bhartiya Nikoo Homes 8 (Bhartiya Garden Enclave)",
      address: project.address,
      hasMap: MAP_LINK_URL,
      sameAs: `${SITE_URL}/#project`,
    },
    "master-plan": {
      "@type": "ImageObject",
      "@id": `${url}#master-plan-image`,
      name: "Nikoo Homes 8 Master Plan",
      contentUrl: imageUrl,
      caption: "Nikoo Homes 8 landscape master plan showing Towers A to F, the Central Spine and the Black Swan Club",
    },
    "bhartiya-city": {
      "@type": "Place",
      "@id": `${url}#bhartiya-city`,
      name: "Bhartiya City",
      description: "A 125-acre integrated development near Hebbal, Bengaluru, with Bhartiya Mall of Bengaluru, The Leela Bhartiya City, BCIT and Chaman Bhartiya School.",
      image: imageUrl,
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
    },
  };
  const graph: Record<string, unknown>[] = [
    {
      "@type": pageType,
      "@id": `${url}#webpage`,
      url,
      name: copy.meta.title,
      description: copy.meta.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      ...(imageUrl ? { primaryImageOfPage: { "@type": "ImageObject", url: imageUrl } } : {}),
      breadcrumb: { "@id": `${url}#breadcrumb` },
      about: { "@id": `${SITE_URL}/#project` },
      ...(entityByType[type] ? { mainEntity: { "@id": entityByType[type]["@id"] } } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: copy.h1.split(" – ")[0], item: url },
      ],
    },
    project,
  ];

  if (entityByType[type]) graph.push(entityByType[type]);

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
