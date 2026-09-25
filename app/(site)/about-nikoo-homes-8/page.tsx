import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import GaurTownship from "@/components/GaurTownship";
import StickyDownloadButton from "@/components/StickyButton";
import OpenModalButton from "@/components/OpenModalButton";
import { RERA } from "@/data/projectData";

export const metadata: Metadata = {
  title: "About Nikoo Homes 8 | Bhartiya Garden Enclave, Bellahalli",
  description:
    "About Bhartiya Nikoo Homes 8 — 1,010 homes across six towers on 11.35 acres at Bellahalli, off Thanisandra Main Road, with 75% open space and a car-free Central Spine.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/about-nikoo-homes-8" },
};

const homeMix = [
  { config: "Studio", size: "501 sq ft" },
  { config: "1 BHK", size: "786 sq ft" },
  { config: "1 BHK + Study", size: "1,088 sq ft" },
  { config: "2 BHK", size: "1,165 sq ft" },
  { config: "2 BHK + Study", size: "1,371 sq ft" },
  { config: "3 BHK", size: "1,730 sq ft" },
  { config: "3 BHK + Study", size: "2,006 sq ft" },
  { config: "3 BHK Duplex Loft", size: "2,132 sq ft" },
  { config: "4 BHK + Staff", size: "2,506 sq ft" },
];

export default function AboutNikooHomes8Page() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="About Nikoo Homes 8"
        subtitle="The eighth Nikoo Homes phase by Bhartiya Urban — Bhartiya Garden Enclave, 1,010 homes on 11.35 acres at Bellahalli, off Thanisandra Main Road."
      />
      <AboutProject heading={true} />

      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div data-animate="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">An Unusually Broad Home Mix</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Nine apartment types run from a 501 sq ft studio to a 2,506 sq ft four-bedroom home
              with staff quarters. A limited number of low-rise courtyard villas — three bedrooms
              plus study, and four bedrooms, in the 2,800 to 3,230 sq ft range — are also part of
              the plan. Availability and pricing on these change release to release, so ask.
            </p>
            <ul className="grid grid-cols-2 gap-2" data-stagger>
              {homeMix.map((item) => (
                <li
                  key={item.config}
                  data-animate="fade-up"
                  className="card-anim bg-white border border-[#e5dcc5] rounded-md px-3 py-2"
                >
                  <span className="block text-sm font-semibold text-gray-900">{item.config}</span>
                  <span className="block text-xs text-[#c8922a]">{item.size}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6" data-animate="fade-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pricing, Clubhouse and RERA</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Launch pricing runs at roughly ₹12,000 to ₹12,500 per sq ft for the apartments.
                The clubhouse — the Black Swan Club — extends to over 40,000 sq ft. The project
                launched on {RERA.launch} with a stated business potential of over ₹2,000 crore,
                and is registered with Karnataka RERA in two phases, with a filed completion date
                of {RERA.completion}.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#DCA54A] rounded-r-lg p-5 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-2">Is Nikoo Homes 8 inside Bhartiya City?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. Nikoo Homes 8 is on a separate parcel of roughly 11 acres at Bellahalli, about
                five to seven minutes&apos; drive from the 125-acre Bhartiya City township. Residents
                have easy access to the mall, hotel, school and office park there — the township
                next door is the selling point, not a shared boundary.
              </p>
              <Link href="/bhartiya-city" className="link-anim inline-block mt-3 text-sm font-semibold text-[#c8922a]">
                Bhartiya City — the township next door <span className="arrow-nudge">→</span>
              </Link>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>RERA (Phase 1):</strong> {RERA.phase1}</p>
              <p><strong>RERA (Phase 2):</strong> {RERA.phase2}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <OpenModalButton className="btn-anim bg-[#c8952a] hover:bg-[#b07d1f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md cursor-pointer">
                Get the Price Sheet
              </OpenModalButton>
              <Link
                href="/master-plan"
                className="btn-anim border-2 border-[#DCA54A] text-[#c8922a] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md"
              >
                See the Master Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GaurTownship />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
