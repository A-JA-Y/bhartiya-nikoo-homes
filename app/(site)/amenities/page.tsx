import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Amenities from "@/components/Amenities";
import StickyDownloadButton from "@/components/StickyButton";
import FaqAccordion from "@/components/FaqAccordion";
import OpenModalButton from "@/components/OpenModalButton";
import heroImage from "@/assets/nikoo-homes-8-aerial-view.webp";

export const metadata: Metadata = {
  title: "Nikoo Homes 8 Amenities and the Black Swan Club",
  description:
    "Nikoo Homes 8 amenities: the 40,000+ sq ft Black Swan Club with rooftop pool, gym, spa, library, co-working and mini theatre, plus tennis, squash, a car-free Central Spine and themed gardens.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/amenities" },
};

const amenityGroups = [
  {
    title: "The Black Swan Club — 40,000+ Sq Ft",
    items: ["Rooftop swimming pool", "Fully equipped gymnasium", "Spa and wellness suite", "Indoor games room", "Library", "Co-working spaces", "Mini theatre", "Banquet and party hall", "Guest rooms for visiting family"],
  },
  {
    title: "Pools & Water",
    items: ["Rooftop swimming pool", "Lap pool", "Leisure pool", "Children's pool"],
  },
  {
    title: "Sports",
    items: ["Tennis court", "Basketball court", "Squash court", "Multipurpose court", "Rock climbing wall", "Jogging track", "Skating track"],
  },
  {
    title: "Wellness & Landscape",
    items: ["Pedestrianised Central Spine", "Meditation and yoga deck", "Sensory garden", "Aroma garden", "Meditation garden", "Linear garden", "Community garden and organic kitchen", "Bird baths", "Party lawn"],
  },
  {
    title: "Family & Social",
    items: ["Children's play areas", "Barbecue pit", "Cabana shacks", "Pet zone", "Neighbourhood retail within the development"],
  },
  {
    title: "Sustainability & Infrastructure",
    items: ["Bioswale for stormwater management", "Tree canopy programme", "Rooftop wildflower garden", "Sewage treatment plant with treated water reuse", "Rainwater harvesting", "Two basement parking levels plus perimeter ring road", "24x7 CCTV surveillance and gated security", "Power backup for common areas and lifts"],
  },
];

const bhartiyaCityNearby = [
  "Bhartiya Mall of Bengaluru — approximately 8 lakh sq ft, 150+ stores",
  "The Leela Bhartiya City — 281-key luxury hotel and convention centre",
  "Chaman Bhartiya School",
  "BCIT office and IT park",
  "Performing Arts Pavilion and retail high street",
  "Four-acre central park",
];

const faqData = [
  {
    q: "How big is the clubhouse at Nikoo Homes 8?",
    a: "The Black Swan Club extends to over 40,000 sq ft and includes a rooftop swimming pool, gymnasium, spa, indoor games, library, co-working spaces, a mini theatre, a banquet hall and guest rooms.",
  },
  {
    q: "What pools are there at Nikoo Homes 8?",
    a: "A rooftop swimming pool at the Black Swan Club, plus a lap pool, a leisure pool and a children's pool.",
  },
  {
    q: "What sports facilities does Nikoo Homes 8 have?",
    a: "Tennis, basketball, squash and multipurpose courts, a rock climbing wall, a jogging track and a skating track.",
  },
  {
    q: "Is Nikoo Homes 8 pet friendly?",
    a: "Yes. The amenity plan includes a dedicated pet zone.",
  },
  {
    q: "What is within reach at Bhartiya City?",
    a: "Within five to seven minutes: Bhartiya Mall of Bengaluru, The Leela Bhartiya City hotel and convention centre, Chaman Bhartiya School, the BCIT office and IT park, the Performing Arts Pavilion and retail high street, and a four-acre central park.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bhartiyanikoohomes8.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Amenities", "item": "https://bhartiyanikoohomes8.com/amenities" }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqData.map((item) => ({
                  "@type": "Question",
                  "name": item.q,
                  "acceptedAnswer": { "@type": "Answer", "text": item.a }
                }))
              }
            ]
          })
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Aerial view of the Black Swan Club, the Circle of Life lawn and the gardens at Nikoo Homes 8"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-kenburns"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="rise rise-1 inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle
          </span>
          <h3 className="rise rise-2 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="rise rise-3 text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            A 40,000+ sq ft clubhouse on a car-free spine, a run of themed gardens — and a whole
            township of amenities five to seven minutes away.
          </p>

        </div>
      </section>

      <Amenities />

      {/* Intro Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto" data-animate="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nikoo Homes 8 Amenities and the Black Swan Club
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            The organising idea at Nikoo Homes 8 is simple: keep the cars on the perimeter and give
            the middle of the site to people. The pedestrianised Central Spine runs the full length
            of the plot, the Black Swan Club sits on it, and the landscape programme is strung along
            it — so the amenities are something you walk through every day, not a block you visit.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Around seventy-five per cent of the site is open. And because Bhartiya Urban still runs
            the mall, the hotel, the school and the office park at Bhartiya City, the amenities
            outside the gate are maintained by the same developer that built them.
          </p>
        </div>
      </section>

      {/* Amenity groups */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4" data-animate="fade-up">
            Everything Inside the Gate
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-gray-700 mb-12" data-animate="fade-up">
            Six groups of amenities, from the clubhouse to the infrastructure that keeps the site
            running.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger>
            {amenityGroups.map((group) => (
              <div key={group.title} data-animate="fade-up" className="card-anim bg-white rounded-xl p-6 border-l-4 border-[#DCA54A] shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[#c8922a] mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bhartiya City */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto" data-animate="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Within Five to Seven Minutes, at Bhartiya City
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Nikoo Homes 8 is not inside Bhartiya City — it sits on its own parcel at Bellahalli —
            but the township is a short drive away, and its amenities are part of everyday life here.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mb-6" data-stagger>
            {bhartiyaCityNearby.map((item) => (
              <li key={item} data-animate="fade-up" className="flex items-start gap-3 bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg px-4 py-3 text-gray-700 text-sm">
                <span className="text-[#c8922a] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <Link href="/bhartiya-city" className="link-anim text-[#c8922a] font-medium">
              Bhartiya City — the township next door <span className="arrow-nudge">→</span>
            </Link>
            <Link href="/location" className="link-anim text-[#c8922a] font-medium">
              Location & connectivity <span className="arrow-nudge">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8" data-animate="fade-up">
            Amenities — Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqData} idPrefix="amenities-faq" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-animate="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Come and Walk the Spine
          </h2>
          <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
            The car-free centre of this project is the part that does not photograph. We run site
            visits seven days a week with pickup from Hebbal or Manyata, and you leave with the cost
            sheet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="btn-anim px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#c9953a] transition-colors text-lg"
            >
              Book a Site Visit
            </Link>
            <OpenModalButton className="btn-anim px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg cursor-pointer">
              Get the Price Sheet
            </OpenModalButton>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
