import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";
import OpenModalButton from "@/components/OpenModalButton";
import { apartmentPrices, villaPrices, additionalCharges, PRICE_NOTE, WORKING_RATES } from "@/data/projectData";

import interiorStudio from "@/assets/interior-studio.webp";
import interior1Bhk from "@/assets/interior-1-bhk.webp";
import interior1BhkStudy from "@/assets/interior-1-bhk-study.webp";
import interior2Bhk from "@/assets/interior-2-bhk.webp";
import interior2BhkStudy from "@/assets/interior-2-bhk-study.webp";
import interior3Bhk from "@/assets/interior-3-bhk.webp";
import interior3BhkStudy from "@/assets/interior-3-bhk-study.webp";
import interiorLoft from "@/assets/interior-loft.webp";
import interiorBedroom from "@/assets/interior-bedroom.webp";
import villaIllustration from "@/assets/courtyard-villa-illustration.webp";

export const metadata: Metadata = {
  title: "Nikoo Homes 8 Configurations | Studio to 4 BHK & Villas",
  description:
    "Nikoo Homes 8 configurations: studio 501 sq ft, 1 BHK, 1 BHK + study, 2 BHK, 2 BHK + study, 3 BHK, 3 BHK + study, 3 BHK duplex loft and 4 BHK + staff at 2,506 sq ft.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/configurations" },
};

const configDetails: Record<string, { image: typeof interiorStudio; alt: string; body: string }> = {
  A1A: { image: interiorStudio, alt: "Studio apartment interior render", body: "A cleverly zoned single room with the kitchen and bedroom positioned apart and a bay window for light. The smallest ticket in the project, and the one investors ask about first." },
  B3: { image: interior1Bhk, alt: "1 BHK bedroom interior render", body: "A one-bedroom that doesn't feel small: a bay window extends the bedroom and the living room opens onto a sit-out." },
  C1A: { image: interior1BhkStudy, alt: "1 BHK with study living area render", body: "The added study makes room for a work desk, a hobby corner or a surprise guest bed." },
  D1B: { image: interior2Bhk, alt: "2 BHK living room interior render", body: "Two bedrooms, one with an attached bathroom, a kitchen with room for guests, a deck on one side and bay windows on the other." },
  F1A: { image: interior2BhkStudy, alt: "2 BHK with study bedroom render", body: "The study doubles as a third room — ideal with grown-up children or parents at home — plus a private sit-out." },
  G3: { image: interior3Bhk, alt: "3 BHK kitchen interior render", body: "Living room and bedrooms spaced for family time and private time; homes with a large deck overlooking the city are also available." },
  H1B: { image: interior3BhkStudy, alt: "3 BHK with study bedroom render", body: "For working from home or entertaining: a study that works as an office or guest room, and a dressing area off the master bedroom." },
  L1B: { image: interiorLoft, alt: "Duplex loft double-height living room render", body: "A two-level loft with three large bedrooms and a deck alongside the double-height living area." },
  J1A: { image: interiorBedroom, alt: "Bedroom interior render", body: "Kitchen, dining and living blend into one space at the heart of the home, with an attached staff room for a live-in chef or help." },
};

export default function ConfigurationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences"
        title="Homes & Configurations"
        subtitle="Nine apartment types from a 501 sq ft studio to a 2,506 sq ft 4 BHK, plus a limited courtyard villa release."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700" data-animate="fade-up">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Nikoo Homes 8 Configurations — Studio to 4 BHK and Courtyard Villas</h1>
            <p className="text-lg leading-relaxed mb-6">
              Nikoo Homes 8 offers nine apartment types, from a <strong>501 sq ft studio at about ₹67 lakh</strong> to a{" "}
              <strong>2,506 sq ft 4 BHK with staff room at about ₹2.94 crore</strong>, across six towers at Bellahalli,
              off Thanisandra Main Road. A limited courtyard villa segment of 2,800 to 3,230 sq ft is part of the plan,
              released in small batches. The project is registered with Karnataka RERA in two phases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-animate="fade-up">Apartment Configurations and Prices</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4" data-animate="fade-up">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Type</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Carpet Area</th>
                    <th className="px-5 py-4">Saleable Area</th>
                    <th className="px-5 py-4">Indicative Price*</th>
                  </tr>
                </thead>
                <tbody>
                  {apartmentPrices.map((row) => (
                    <tr key={row.type} className="border-t border-[#e5dcc5] hover:bg-[#FAF3E3] transition-colors">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.config}</td>
                      <td className="px-5 py-4 text-gray-600">{row.carpet}</td>
                      <td className="px-5 py-4 text-gray-600">{row.saleable}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-2 italic">*{PRICE_NOTE}</p>
            <p className="text-xs text-gray-500 leading-relaxed italic">{WORKING_RATES}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-animate="fade-up">Every Home Type, in Brief</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
              {apartmentPrices.map((row) => {
                const detail = configDetails[row.type];
                return (
                  <div key={row.type} data-animate="fade-up" className="card-anim group bg-[#FAF8F4] rounded-lg border border-[#e5dcc5] overflow-hidden flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={detail.image}
                        alt={`${detail.alt} — Nikoo Homes 8 ${row.config}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 330px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-2.5 py-1 rounded">{row.type}</span>
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{row.config} — {row.price}</h3>
                      <p className="text-xs font-semibold text-[#c8922a]">{row.saleable} saleable · {row.carpet} carpet</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{detail.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-400 mt-3">Interior images are representative renders from the developer and are indicative only.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-[#FAF8F4] rounded-lg border border-[#e5dcc5] p-6 md:p-8" data-animate="fade-up">
            <div className="relative h-56 md:h-full min-h-[220px] rounded-lg overflow-hidden">
              <Image src={villaIllustration} alt="Illustration of a courtyard villa terrace opening onto a lawn" fill sizes="(max-width: 768px) 100vw, 450px" className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Courtyard Villas — Limited Release</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                A limited number of low-rise courtyard villas sit along one edge of the site,
                buffered from the towers by landscape. Availability and pricing change release to
                release — confirm current inventory before you plan around a villa. If released as
                a separate phase, the villas carry their own RERA registration; ask for that number
                specifically before booking.
              </p>
              <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] bg-white mb-4">
                <table className="w-full text-sm text-left">
                  <tbody>
                    {villaPrices.map((row) => (
                      <tr key={row.type} className="border-b last:border-b-0 border-[#e5dcc5]">
                        <td className="px-4 py-3 font-semibold text-gray-900">{row.type}</td>
                        <td className="px-4 py-3 text-gray-600">{row.saleable}</td>
                        <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <OpenModalButton className="btn-anim bg-[#c8952a] hover:bg-[#b07d1f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md cursor-pointer">
                Confirm Villa Availability
              </OpenModalButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700" data-animate="fade-right">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What&apos;s Included in the Price</h2>
              <p className="mb-4">The published launch specification covers:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Vitrified tiles in living, dining, kitchen and common areas</li>
                <li>Laminated wood flooring in the master bedroom of 2.5 BHK homes and above</li>
                <li>Granite kitchen platform with stainless steel sink; modular fit-out in select configurations</li>
                <li>Veneered, polished main door with safety lock</li>
                <li>UPVC systems for balconies and utility areas</li>
                <li>Concealed copper wiring with modular switches</li>
                <li>100% DG backup for common areas and lifts, partial backup in each home</li>
                <li>Access to the 40,000+ sq ft Black Swan Club and the Central Spine gardens</li>
              </ul>
              <Link href="/floor-plan" className="link-anim text-[#c8922a] font-semibold">Check floor plans <span className="arrow-nudge">→</span></Link>
            </div>

            <div className="prose max-w-none text-gray-700" data-animate="fade-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Costs to Plan For</h2>
              <p className="mb-4">Indicative prices exclude these charges, as applicable in Karnataka:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {additionalCharges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mb-2">
                Indicative monthly maintenance runs from approximately ₹2,000 for a studio to approximately
                ₹10,000 for a four-bedroom home.
              </p>
              <p>For a total-cost calculation on your chosen unit, <Link href="/price" className="link-anim text-[#c8922a] font-semibold">see the price page</Link>.</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700" data-animate="fade-up">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Plan & Financing</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Expression of Interest</strong> — typically ₹5 lakh</li>
              <li><strong>Booking</strong> — on a 10% down payment</li>
              <li><strong>Balance</strong> — as per the construction-linked schedule in your agreement to sell</li>
              <li><strong>Home loan</strong> — the project is approved by leading banks and housing finance companies; our team arranges pre-approval and compares offers across lenders at no cost to you</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm text-yellow-800">
              ⚠️ <strong>Note:</strong> Confirm the current slab with our team before transferring any amount.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700" data-animate="fade-right">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Prices Vary Within the Same Configuration</h2>
              <p className="mb-4">Two homes of the same type can be priced differently. The main factors:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Floor rise</strong> — typically ₹2 to 6 lakh depending on level</li>
                <li><strong>Release</strong> — prices are revised release to release</li>
                <li><strong>Tower</strong> — heights run from sixteen to twenty-four floors across Towers A to F</li>
                <li><strong>Outlook</strong> — some 3 BHK homes come with a large deck overlooking the city</li>
              </ul>
              <p>For a clear comparison on units you&apos;re shortlisting, <Link href="/contact-us" className="link-anim text-[#c8922a] font-semibold">contact our team</Link>.</p>
            </div>

            <div className="prose max-w-none text-gray-700" data-animate="fade-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Is Nikoo Homes 8 Worth the Price?</h2>
              <p className="font-semibold mb-2">Value drivers:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Build-to-own developer</strong> — Bhartiya Urban operates the mall, hotel, office park and school it built</li>
                <li><strong>Delivery record</strong> — Nikoo Homes 1 to 5 are handed over, with 6,600+ families resident</li>
                <li><strong>Pricing</strong> — around ₹12,000 per sq ft, competitive in the Thanisandra belt</li>
                <li><strong>Planning</strong> — 75% open space and a car-free Central Spine</li>
              </ul>
              <p className="font-semibold mb-2 mt-4 text-red-700">Risks to weigh:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-red-900">
                <li><strong>Traffic</strong> — Hebbal, the Outer Ring Road and Hennur Road congest badly at rush hour</li>
                <li><strong>Metro timing</strong> — the Blue Line is 2027 to 2028, not today</li>
                <li><strong>Timeline</strong> — the RERA-filed completion is December 2030; buy for a 2028-onward commute</li>
                <li><strong>Villas</strong> — confirm inventory and the villa RERA number in writing before booking</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]" data-animate="fade-up">
            <OpenModalButton className="btn-anim inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md cursor-pointer">
              Get the Price Sheet
            </OpenModalButton>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
      <VillaFeatures />
      <ReasonsToInvest />
    </>
  );
}
