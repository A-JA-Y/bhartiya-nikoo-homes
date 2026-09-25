import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";
import OpenModalButton from "@/components/OpenModalButton";
import { apartmentPrices, villaPrices, additionalCharges, PRICE_NOTE, WORKING_RATES, RERA, CONTACT } from "@/data/projectData";

export const metadata: Metadata = {
  title: "Nikoo Homes 8 Price List 2026 | Studio to 4 BHK Price",
  description:
    "Nikoo Homes 8 price list 2026: studio from ₹67 lakh, 2 BHK ₹1.40 Cr, 3 BHK ₹2.04 Cr, 4 BHK ₹2.94 Cr at ~₹12,000/sq ft. GST, stamp duty, floor rise and payment plan explained.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/price" },
  keywords: "Nikoo Homes 8 price, Nikoo Homes 8 price list, Bhartiya Nikoo Homes 8 price, Nikoo Homes 8 studio price, Nikoo Homes 8 3 BHK price",
};

// Illustrative all-in cost for the 3 BHK (G3) at the indicative launch price.
const workedExample = [
  { item: "Indicative base price — 3 BHK (G3), 1,730 sq ft", amount: "₹2.04 Cr" },
  { item: "GST at 5% on the base price", amount: "≈ ₹10.2 lakh" },
  { item: "Stamp duty and registration at ~7.6%", amount: "≈ ₹15.5 lakh" },
  { item: "Floor rise (depends on level)", amount: "₹2 – 6 lakh" },
  { item: "Corpus fund and maintenance deposit", amount: "₹3 – 5 lakh" },
  { item: "Khata, BWSSB, BESCOM and infrastructure charges", amount: "As per agreement" },
];

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Price"
        subtitle="Nikoo Homes 8 Price List 2026"
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700" data-animate="fade-up">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Nikoo Homes 8 Price List 2026</h1>
            <p className="text-lg leading-relaxed mb-6">
              Nikoo Homes 8 prices start at approximately <strong>₹67 lakh</strong> for a 501 sq ft studio and run to
              approximately <strong>₹2.94 crore</strong> for the 2,506 sq ft 4 BHK with staff room, at an indicative
              launch rate of ₹12,000 to ₹12,500 per sq ft. Courtyard villas, where released, are indicated from
              ₹5.98 crore. Prices exclude GST, stamp duty, registration, floor rise, corpus and statutory charges,
              and are revised release to release.
            </p>
            <OpenModalButton className="link-anim inline-block text-[#c8922a] font-semibold cursor-pointer">
              Get the Current Cost Sheet <span className="arrow-nudge">&rarr;</span>
            </OpenModalButton>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-animate="fade-up">Apartments — Indicative Launch Pricing</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4" data-animate="fade-up">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Type</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Carpet Area</th>
                    <th className="px-5 py-4">Saleable Area</th>
                    <th className="px-5 py-4">Indicative Price</th>
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

            <h3 className="text-lg font-bold text-gray-900 mb-3 mt-8" data-animate="fade-up">Courtyard Villas (limited release — confirm availability)</h3>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4" data-animate="fade-up">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Type</th>
                    <th className="px-5 py-4">Saleable Area</th>
                    <th className="px-5 py-4">Indicative Price</th>
                  </tr>
                </thead>
                <tbody>
                  {villaPrices.map((row) => (
                    <tr key={row.type} className="border-t border-[#e5dcc5] hover:bg-[#FAF3E3] transition-colors">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.saleable}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-2 italic">{PRICE_NOTE}</p>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">{WORKING_RATES}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700" data-animate="fade-right">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Charges in Karnataka</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {additionalCharges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Indicative monthly maintenance runs from approximately ₹2,000 for a studio to approximately
                ₹10,000 for a four-bedroom home.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700" data-animate="fade-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Milestones</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Expression of Interest:</strong> typically ₹5 lakh</li>
                <li><strong>Booking:</strong> on a 10% down payment</li>
                <li><strong>Balance:</strong> as per the construction-linked schedule in the agreement to sell</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm text-yellow-800">
                ⚠️ Confirm the current slab with our team before transferring any amount.
              </div>
            </div>
          </div>

          <div data-animate="fade-up">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Worked Example — What a 3 BHK Actually Costs</h2>
            <p className="text-gray-600 text-sm mb-5">
              An illustration of how the charges above stack up on the 3 BHK (G3) at its indicative launch price.
              The binding figures are in the current cost sheet and your agreement to sell.
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm text-left">
                <tbody>
                  {workedExample.map((row) => (
                    <tr key={row.item} className="border-b border-[#e5dcc5] hover:bg-[#FAF3E3] transition-colors">
                      <td className="px-5 py-3 text-gray-700">{row.item}</td>
                      <td className="px-5 py-3 text-gray-900 font-semibold text-right whitespace-nowrap">{row.amount}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#FAF8F4]">
                    <td className="px-5 py-4 font-bold text-gray-900">Indicative all-in (before Khata, BWSSB, BESCOM and infrastructure)</td>
                    <td className="px-5 py-4 font-bold text-[#c8922a] text-right whitespace-nowrap">≈ ₹2.35 – 2.41 Cr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 italic mt-3">
              Illustrative only. GST and stamp duty are shown on the base price; actual amounts depend on the
              agreement value, the floor you choose and the prevailing rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700" data-animate="fade-right">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Moves the Price</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Configuration and size:</strong> from 501 sq ft to 2,506 sq ft saleable across nine types.</li>
                <li><strong>Floor rise:</strong> typically ₹2 to 6 lakh depending on level.</li>
                <li><strong>Release:</strong> launch pricing is revised release to release.</li>
                <li><strong>Villa or apartment:</strong> courtyard villas work out at roughly ₹21,000 to ₹21,700 per sq ft.</li>
              </ul>
              <p>We share a unit-specific quote for the exact home you shortlist.</p>
            </div>

            <div className="prose max-w-none text-gray-700" data-animate="fade-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Buyers Look at Nikoo Homes 8</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>A build-to-own developer that still runs the mall, hotel, office park and school it built.</li>
                <li>Nikoo Homes 1 to 5 delivered, with more than 6,600 families resident.</li>
                <li>Launch pricing near ₹12,000 per sq ft, competitive in the Thanisandra belt.</li>
                <li>Studio and 1 BHK stock at ₹67 to 93 lakh — rare at this quality in North Bangalore.</li>
                <li>Five to seven minutes from Bhartiya City; Manyata Tech Park about 5.6 km away.</li>
              </ul>
              <p>The honest risk is traffic — buy for a 2028-onward commute, once the Blue Line metro reaches Hebbal and Nagawara.</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700" data-animate="fade-up">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">EMI Calculator — Plan Your Nikoo Homes 8 Purchase</h2>
            <p className="mb-4">Use the calculator below to estimate your monthly outflow from the property value, down payment, tenure and interest rate. It opens on the 2 BHK&apos;s ₹1.40 crore starting price with a 20% advance — adjust the sliders to your own budget and bank offer.</p>
            <p className="italic text-sm text-gray-500 mb-6">(EMI figures are indicative and for planning purposes only; actual rates depend on your lender and profile.)</p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2" data-animate="fade-up">
            <p><strong>Project:</strong> Bhartiya Nikoo Homes 8, Bellahalli, off Thanisandra Main Road, Bengaluru</p>
            <p><strong>Developer:</strong> Bhartiya Urban</p>
            <p><strong>RERA (Phase 1):</strong> {RERA.phase1} &middot; <strong>RERA (Phase 2):</strong> {RERA.phase2} — verify at rera.karnataka.gov.in</p>
            <p><strong>Contact:</strong> {CONTACT.phoneDisplay}</p>
            <p><strong>Page last reviewed:</strong> September 2026</p>
            <p>
              See also:{" "}
              <Link href="/floor-plan" className="link-anim text-[#c8922a]">Floor plans</Link> ·{" "}
              <Link href="/configurations" className="link-anim text-[#c8922a]">Configurations</Link> ·{" "}
              <Link href="/location" className="link-anim text-[#c8922a]">Location</Link>
            </p>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
