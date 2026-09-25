import type { Metadata } from "next";
import Link from "next/link";
import StickyDownloadButton from "@/components/StickyButton";
import FaqAccordion from "@/components/FaqAccordion";
import { distances, faqs, MAP_EMBED_URL, MAP_LINK_URL } from "@/data/projectData";

export const metadata: Metadata = {
  title: "Nikoo Homes 8 Location — Bellahalli, Thanisandra",
  description:
    "Nikoo Homes 8 location at Bellahalli, off Thanisandra Main Road: 5–7 min to Bhartiya City, ~5.6 km to Manyata Tech Park, ~25 min to the airport, and the Blue Line metro timeline.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/location" },
};

const locationHighlights = [
  "Direct access to Thanisandra Main Road",
  "Bhartiya City (mall, hotel, school, BCIT) — 5–7 min drive",
  "Bhartiya Mall of Bengaluru — 2–5 min drive",
  "Manyata Tech Park — approx 5.6 km, 10–15 min off peak",
  "Manipal Hospital — approx 10 min",
  "Kempegowda International Airport — approx 25 min",
  "KR Puram Railway Station — approx 11.7 km",
];

const blueLine = [
  { name: "Kasturi Nagar" },
  { name: "Nagawara", target: "March 2028" },
  { name: "Veerannapalya" },
  { name: "Kempapura" },
  { name: "Hebbal", target: "June 2027" },
  { name: "Airport" },
];

const educationData = [
  "Chaman Bhartiya School (Bhartiya City) — the closest",
  "Vidyashilp Academy",
  "Ryan International",
  "Delhi Public School North",
  "Canadian International School",
  "Stonehill International",
];

const healthcareData = [
  "Manipal Hospital — approx 10 min",
  "Aster CMI Hospital, Hebbal",
  "Columbia Asia, Hebbal",
  "Cytecare Cancer Hospital",
  "Baptist Hospital",
];

const workspaceData = [
  "Manyata Tech Park",
  "BCIT at Bhartiya City",
  "Kirloskar Business Park",
  "Karle Town Centre",
  "The Hebbal office cluster",
];

const lifestyleData = [
  "Bhartiya Mall of Bengaluru",
  "Elements Mall",
  "Esteem Mall",
  "Phoenix Mall of Asia",
  "RMZ Galleria",
];

const faqData = [
  faqs[0],
  faqs[1],
  faqs[6],
  faqs[9],
  {
    q: "How far is Kempegowda International Airport from Nikoo Homes 8?",
    a: "Approximately 25 minutes by road via the airport corridor, depending on traffic.",
  },
  {
    q: "Which schools are near Nikoo Homes 8?",
    a: "Chaman Bhartiya School at Bhartiya City is the closest. The wider Thanisandra and Hebbal catchment is served by Vidyashilp Academy, Ryan International, Delhi Public School North, Canadian International School and Stonehill International.",
  },
];

export default function LocationPage() {
  return (
    <>


      {/* Main Content Section */}
      <section className="w-full bg-white py-16 px-6" id="location">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <p className="rise rise-1 text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
            Location & Connectivity
          </p>

          {/* H1 Heading */}
          <h1 className="rise rise-2 text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            Nikoo Homes 8 Location — Bellahalli, Thanisandra
          </h1>

          {/* Intro Paragraph */}
          <div className="rise rise-3 max-w-4xl mx-auto text-center mb-8">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Nikoo Homes 8 sits at Bellahalli, just off Thanisandra Main Road in North Bengaluru.
              This is the Hebbal–Thanisandra belt — the corridor that Manyata Tech Park built and
              that the airport road made permanent. Bhartiya City is five to seven minutes away,
              Manyata about 5.6 km, and the Blue Line metro is on its way.
            </p>
            <div className="mt-4">
              <a
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-anim inline-block bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions <span className="arrow-nudge">→</span>
              </a>
            </div>
          </div>

          {/* H2 - Where Exactly */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4" data-animate="fade-up">
            Where Exactly Is Nikoo Homes 8?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base" data-animate="fade-up">
            The project occupies an approximately 11.35-acre parcel at Bellahalli, on the
            Thanisandra Main Road frontage belt. It is not inside the 125-acre Bhartiya City
            township — it is a separate site roughly five to seven minutes&apos; drive away, close
            enough that the mall, the hotel, the school and the BCIT office park become part of
            everyday life.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8" data-animate="fade-up">
            <p className="font-semibold text-gray-800">Project Address:</p>
            <p className="text-gray-600 text-sm">
              Bhartiya Nikoo Homes 8 (Bhartiya Garden Enclave)<br />
              Bellahalli, off Thanisandra Main Road<br />
              Bengaluru, Karnataka 560064
            </p>
          </div>

          {/* H2 - Manyata commute */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4" data-animate="fade-up">
            The Manyata Commute, Honestly
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base" data-animate="fade-up">
            Manyata is close in kilometres — about five and a half in a straight line — but the
            drive depends entirely on when you leave. Off peak it is ten to fifteen minutes. At nine
            in the morning it can be twenty-five to thirty. Hebbal junction, the Outer Ring Road and
            Hennur Road all bottleneck at rush hour, and everyone who lives here knows it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base" data-animate="fade-up">
            That is why the metro matters more here than almost anywhere else in the city — and why
            this is a home to buy for a 2028-onward commute, not a 2026 one.
          </p>

          {/* Main Content with Map - Keep Original Layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">

            {/* LEFT: TEXT */}
            <div className="flex-1 max-w-lg" data-animate="fade-right">

              <h3 className="font-bold text-gray-900 mb-3 text-base">
                Distances at a Glance
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Measured from the project gate. Drive times vary materially with traffic — visit at
                your own commute hour before deciding.
              </p>

              <ul className="space-y-4" data-stagger>
                {locationHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group" data-animate="fade-up">
                    <span className="text-[#c8922a] mt-1 transition-transform duration-300 group-hover:scale-125">✓</span>
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: MAP */}
            <div className="flex-1 w-full" data-animate="fade-left">
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5] transition-shadow duration-300 hover:shadow-xl">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Nikoo Homes 8 location map — Bellahalli, Thanisandra Main Road"
                ></iframe>
              </div>
              <a
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-anim inline-block mt-3 text-sm text-[#c8922a]"
              >
                View on Google Maps <span className="arrow-nudge">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metro timeline */}
      <section className="w-full bg-[#141004] py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase mb-3 text-[#DCA54A] tracking-[0.2em]" data-animate="fade-up">
            Namma Metro · Blue Line, Phase 2B
          </p>
          <h2 className="text-center font-bold text-2xl md:text-3xl mb-4" data-animate="fade-up">
            The Metro Changes the Arithmetic
          </h2>
          <p className="text-center text-white/75 text-sm max-w-3xl mx-auto mb-12 leading-relaxed" data-animate="fade-up">
            The Blue Line, Phase 2B, runs from Kasturi Nagar through Nagawara, Veerannapalya,
            Kempapura and Hebbal to the airport. The Hebbal section is targeted for June 2027 and
            Nagawara for March 2028. Once the Nagawara interchange opens, the corridor gets a rail
            alternative to the Hebbal road bottleneck for the first time — the single biggest
            infrastructure variable for this micro-market.
          </p>

          <div className="relative">
          <span aria-hidden="true" className="hidden md:block absolute left-[8%] right-[8%] top-[11px] h-[3px] bg-gradient-to-r from-[#1e5bb8] via-[#3b82f6] to-[#1e5bb8] rounded-full" />
          <ol className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10" data-stagger>
            {blueLine.map((station) => (
              <li key={station.name} className="relative flex flex-col items-center text-center group" data-animate="fade-up">
                <span
                  className={`relative z-10 w-6 h-6 rounded-full border-4 transition-transform duration-300 group-hover:scale-125 ${
                    station.target ? "bg-[#DCA54A] border-white" : "bg-white border-[#3b82f6]"
                  }`}
                />
                <span className="mt-3 text-sm font-semibold">{station.name}</span>
                {station.target && (
                  <span className="mt-1 text-[11px] uppercase tracking-wider text-[#DCA54A]">Target {station.target}</span>
                )}
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* Connectivity Sections */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center" data-animate="fade-up">
            Connectivity from Nikoo Homes 8
          </h2>

          <div className="grid md:grid-cols-3 gap-6" data-stagger>
            <div className="card-anim bg-white rounded-lg p-6 border border-gray-200" data-animate="fade-up">
              <h3 className="font-bold text-gray-900 text-xl mb-3">Road</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><span className="text-[#c8922a] mt-1">•</span><span className="text-gray-600 text-sm">Thanisandra Main Road — direct access from the site frontage belt</span></li>
                <li className="flex items-start gap-3"><span className="text-[#c8922a] mt-1">•</span><span className="text-gray-600 text-sm">Bhartiya City — 5–7 minutes</span></li>
                <li className="flex items-start gap-3"><span className="text-[#c8922a] mt-1">•</span><span className="text-gray-600 text-sm">Hebbal junction, the Outer Ring Road and Hennur Road — all bottleneck at rush hour</span></li>
              </ul>
            </div>
            <div className="card-anim bg-white rounded-lg p-6 border border-gray-200" data-animate="fade-up">
              <h3 className="font-bold text-gray-900 text-xl mb-3">Air</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><span className="text-[#c8922a] mt-1">•</span><span className="text-gray-600 text-sm">Kempegowda International Airport — approx 25 minutes via the airport corridor</span></li>
                <li className="flex items-start gap-3"><span className="text-[#c8922a] mt-1">•</span><span className="text-gray-600 text-sm">Blue Line metro to the airport via Hebbal, once Phase 2B opens</span></li>
              </ul>
            </div>
            <div className="card-anim bg-white rounded-lg p-6 border border-gray-200" data-animate="fade-up">
              <h3 className="font-bold text-gray-900 text-xl mb-3">Rail</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><span className="text-[#c8922a] mt-1">•</span><span className="text-gray-600 text-sm">KR Puram Railway Station — approx 11.7 km in a straight line</span></li>
                <li className="flex items-start gap-3"><span className="text-[#c8922a] mt-1">•</span><span className="text-gray-600 text-sm">Nagawara metro interchange — targeted March 2028</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Distance Snapshot Table */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-6 text-center" data-animate="fade-up">
            Distance Snapshot — Nikoo Homes 8
          </h2>
          <div className="overflow-x-auto" data-animate="fade-up">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Destination</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Distance</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {distances.map((item, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-[#FAF3E3] transition-colors`}>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.destination}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.distance}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Distances are approximate and measured from the project gate. Drive times vary materially with traffic.
          </p>
        </div>
      </section>

      {/* Social infrastructure */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            { title: "Schools", intro: "Chaman Bhartiya School at Bhartiya City is the closest; the wider Thanisandra and Hebbal catchment adds several established names.", items: educationData },
            { title: "Healthcare", intro: "Major hospitals serving the corridor, with Manipal Hospital the nearest.", items: healthcareData },
            { title: "Workplaces", intro: "The employment base behind the corridor's rental demand.", items: workspaceData },
            { title: "Retail & Leisure", intro: "From the mall next door to the city's larger destinations.", items: lifestyleData },
          ].map((group) => (
            <div key={group.title} data-animate="fade-up">
              <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-3">
                {group.title} Near Nikoo Homes 8
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">{group.intro}</p>
              <ul className="grid grid-cols-1 gap-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#c8922a] mt-1">•</span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="w-full bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center" data-animate="fade-up">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqData} idPrefix="location-faq" />
          <p className="text-center text-sm text-gray-600 mt-8">
            Next: <Link href="/bhartiya-city" className="link-anim text-[#c8922a] font-semibold">Bhartiya City — the township next door</Link>
          </p>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://bhartiyanikoohomes8.com/location#faq",
                "mainEntity": faqData.map(item => ({
                  "@type": "Question",
                  "name": item.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://bhartiyanikoohomes8.com/location#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://bhartiyanikoohomes8.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Location",
                    "item": "https://bhartiyanikoohomes8.com/location"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://bhartiyanikoohomes8.com/location#webpage",
                "url": "https://bhartiyanikoohomes8.com/location",
                "name": "Nikoo Homes 8 Location — Bellahalli, Thanisandra",
                "description": "Nikoo Homes 8 location at Bellahalli, off Thanisandra Main Road: 5–7 min to Bhartiya City, ~5.6 km to Manyata Tech Park, ~25 min to the airport, and the Blue Line metro timeline.",
                "breadcrumb": {
                  "@id": "https://bhartiyanikoohomes8.com/location#breadcrumb"
                },
                "about": {
                  "@id": "https://bhartiyanikoohomes8.com/#project"
                },
                "mainEntity": {
                  "@id": "https://bhartiyanikoohomes8.com/location#faq"
                },
                "primaryImageOfPage": "https://bhartiyanikoohomes8.com/nikoo-homes-8-og.webp",
                "inLanguage": "en-IN"
              },
              {
                "@type": "ApartmentComplex",
                "@id": "https://bhartiyanikoohomes8.com/#project",
                "name": "Bhartiya Nikoo Homes 8",
                "description": "Studio to 4 BHK homes and a limited courtyard villa segment by Bhartiya Urban at Bellahalli, off Thanisandra Main Road, North Bengaluru.",
                "url": "https://bhartiyanikoohomes8.com/",
                "image": "https://bhartiyanikoohomes8.com/nikoo-homes-8-og.webp",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Bellahalli, off Thanisandra Main Road",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560064",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "RealEstateAgent",
                "@id": "https://bhartiyanikoohomes8.com/#organization",
                "name": "Real Revenue",
                "url": "https://bhartiyanikoohomes8.com/",
                "logo": "https://bhartiyanikoohomes8.com/bhartiya-urban-nikoo-homes-logo.webp",
                "telephone": "+91-6356663535",
                "email": "vishalajitsaria1988@gmail.com",
                "areaServed": {
                  "@type": "City",
                  "name": "Bengaluru"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
