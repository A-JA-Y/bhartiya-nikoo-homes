import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";
import { faqs } from "@/data/projectData";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const GaurTownship = dynamic(() => import("@/components/GaurTownship"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const FaqAccordion = dynamic(() => import("@/components/FaqAccordion"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingWhatsapp = dynamic(()=>import("@/components/FloatingWhatsapp"));
const FloatingCall = dynamic(()=>import("@/components/FloatingcallButton"));

const SITE = "https://bhartiyanikoohomes8.com/";

// Section 15 schema. The FAQPage entries are generated from the same FAQ data
// rendered on the page, so the markup always matches the visible answers.
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": `${SITE}#project`,
      name: "Bhartiya Nikoo Homes 8",
      alternateName: "Nikoo Homes 8",
      url: SITE,
      image: `${SITE}nikoo-homes-8-og.webp`,
      description:
        "Bhartiya Nikoo Homes 8 is an 11.35-acre residential development of approximately 1,010 homes across six towers at Bellahalli, off Thanisandra Main Road, North Bengaluru, by Bhartiya Urban, with studios to 4 BHK homes and a limited courtyard villa segment.",
      numberOfAccommodationUnits: 1010,
      petsAllowed: true,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bellahalli, off Thanisandra Main Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560064",
        addressCountry: "IN",
      },
      amenityFeature: [
        "40,000 sq ft Black Swan Club",
        "Rooftop Swimming Pool",
        "Car-Free Central Spine",
        "Gymnasium",
        "Tennis Court",
        "Squash Court",
        "Rock Climbing Wall",
        "Mini Theatre",
        "Co-working Spaces",
        "Pet Zone",
      ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    },
    {
      "@type": "Product",
      name: "Nikoo Homes 8 Studio Apartment",
      description:
        "Studio apartment of 501 sq ft saleable area at Bhartiya Nikoo Homes 8, Bellahalli, North Bengaluru.",
      brand: { "@type": "Brand", name: "Bhartiya Urban" },
      offers: { "@type": "Offer", price: "6700000", priceCurrency: "INR", availability: "https://schema.org/InStock", url: SITE },
    },
    {
      "@type": "Product",
      name: "Nikoo Homes 8 3 BHK Apartment",
      description:
        "3 BHK apartment of 1,730 sq ft saleable area at Bhartiya Nikoo Homes 8, Bellahalli, North Bengaluru.",
      brand: { "@type": "Brand", name: "Bhartiya Urban" },
      offers: { "@type": "Offer", price: "20400000", priceCurrency: "INR", availability: "https://schema.org/InStock", url: SITE },
    },
    {
      "@type": "RealEstateAgent",
      name: "Real Revenue",
      url: SITE,
      areaServed: "Bengaluru",
      telephone: "+91-6356663535",
      email: "vishalajitsaria1988@gmail.com",
      parentOrganization: { "@type": "Organization", name: "Earlydays Innovations Private Limited" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Thanisandra Apartments", item: `${SITE}#location` },
        { "@type": "ListItem", position: 3, name: "Nikoo Homes 8", item: `${SITE}#project` },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="sr-only">
        Bhartiya Nikoo Homes 8 — Studio to 4 BHK Homes and Courtyard Villas at Bellahalli, North Bangalore
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="md:px-[30px] md:py-[45px] md:relative top-[-98px]">
          <div className="md:block max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject  heading={false}/>
        <Amenities />
        <GaurTownship />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />

        <section className="w-full bg-white py-16 px-6" id="faq">
          <div className="max-w-4xl mx-auto">
            <h6 className="text-center uppercase text-xs tracking-widest text-[#DCA54A] mb-3" data-animate="fade-up">
              FAQ
            </h6>
            <h2 className="text-center font-bold text-gray-900 text-3xl mb-10" data-animate="fade-up" data-delay="100">
              Nikoo Homes 8 — Frequently Asked Questions
            </h2>
            <FaqAccordion items={faqs} idPrefix="home-faq" />
          </div>
        </section>

        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <FloatingCall />
      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}
