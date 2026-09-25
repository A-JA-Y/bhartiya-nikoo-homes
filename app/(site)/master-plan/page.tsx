import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import StickyDownloadButton from "@/components/StickyButton";
import OpenModalButton from "@/components/OpenModalButton";
import { MASTER_PLAN_PDF } from "@/data/projectData";

import masterPlan from "@/assets/nikoo-homes-8-master-plan.webp";
import aerialView from "@/assets/nikoo-homes-8-aerial-view.webp";
import centralSpine from "@/assets/central-spine-walkway.webp";

export const metadata: Metadata = {
  title: "Nikoo Homes 8 Master Plan | Towers, Central Spine & Club",
  description:
    "Nikoo Homes 8 master plan: six towers in two offset blocks, a pedestrian-only Central Spine, the Black Swan Club, two basement levels and about 75% open ground on 11.35 acres.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/master-plan" },
};

// Landscape master plan legend, as numbered in the official brochure.
const legend = [
  "The Quiet Trail",
  "Community Garden",
  "Children's Play Area",
  "Linear Garden",
  "Meditation Garden",
  "BBQ Pit",
  "Organic Kitchen",
  "Aroma Garden",
  "Sensory Garden",
  "Villa Pathway / Planted Bioswale",
  "The Living Canopy",
  "Terraced Landscape",
  "The Central Spine",
  "Black Swan Club and Swimming Pool",
  "Wild Flower Garden",
  "Community Seating",
  "Wildlife Garden",
  "The Circle of Life",
  "Woodland Seating",
  "Tennis Court",
  "Feature Wall",
  "Entrance Island",
];

const planFacts = [
  { title: "Two offset blocks", body: "Towers A to F are arranged as two offset blocks so that no tower faces directly into another." },
  { title: "Varied heights", body: "Two basements plus ground plus sixteen floors on the lower blocks, rising to twenty-four on the taller ones — the skyline doesn't read as a wall, and lower homes keep their sightlines." },
  { title: "The Central Spine", body: "Vehicles use a perimeter ring road and two basement levels. The centre of the site is pedestrian only, running the full length of the plot, with the Black Swan Club on it." },
  { title: "75% open ground", body: "Approximately seventy-five per cent of the ground plane is open, with the landscape programme strung along the spine." },
  { title: "Floor plates", body: "Typical floor plates carry eight homes served by two lifts and a staircase." },
  { title: "Parking", body: "Approximately one space per home across the two basement levels, with visitor parking on the perimeter ring." },
];

export default function MasterPlanPage() {
  return (
    <>
      <PageBanner
        eyebrow="Master Plan"
        title="Nikoo Homes 8 Master Plan"
        subtitle="Six towers, a pedestrian-only Central Spine and about 75% open ground on 11.35 acres at Bellahalli."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-animate="fade-up">
            How the 11.35 Acres Are Organised
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-3xl" data-animate="fade-up">
            The organising move at Nikoo Homes 8 is the Central Spine. Cars are taken around the
            perimeter and down into two basement levels; the middle of the site is given over to
            people, with the Black Swan Club sitting on the spine and the sensory, aroma,
            meditation and community gardens and the organic kitchen strung along it.
          </p>

          <figure className="rounded-xl overflow-hidden shadow-lg border border-[#e5dcc5] bg-white" data-animate="zoom-in">
            <Image
              src={masterPlan}
              alt="Nikoo Homes 8 landscape master plan showing Towers A to F, the Central Spine, the Black Swan Club, the tennis court and the courtyard villa edge"
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto"
              priority
            />
            <figcaption className="text-xs text-gray-500 px-4 py-3 border-t border-[#e5dcc5]">
              Landscape master plan (artist&apos;s impression, indicative). Numbers correspond to the legend below.
            </figcaption>
          </figure>

          <div className="flex flex-wrap gap-3 mt-6" data-animate="fade-up">
            <a
              href={MASTER_PLAN_PDF}
              download
              className="btn-anim inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
            >
              Download Master Plan PDF
            </a>
            <OpenModalButton className="btn-anim border-2 border-[#DCA54A] text-[#c8922a] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md cursor-pointer">
              Get the Full Brochure
            </OpenModalButton>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center" data-animate="fade-up">
            Towers, Spine and Open Ground
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
            {planFacts.map((fact) => (
              <div key={fact.title} data-animate="fade-up" className="card-anim bg-white rounded-xl p-6 border-l-4 border-[#DCA54A] shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{fact.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div data-animate="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Landscape Legend</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              The twenty-two landscape zones marked on the plan, from the entrance island to the
              wildlife garden on the woodland fringe.
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700" data-stagger>
              {legend.map((zone, i) => (
                <li key={zone} className="flex items-start gap-2 group" data-animate="fade-up">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#DCA54A] text-[#c8922a] text-[11px] font-semibold flex items-center justify-center transition-colors duration-300 group-hover:bg-[#DCA54A] group-hover:text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{zone}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-5" data-animate="fade-left">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src={aerialView} alt="Aerial view of the Black Swan Club, the Circle of Life lawn and the tennis court" fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
              <Image src={centralSpine} alt="Tree-lined pedestrian walkway along the Central Spine" fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              The low-rise courtyard villa component, where released, sits along one edge of the
              site, buffered from the towers by landscape — reached along the villa pathway and its
              planted bioswale.
            </p>
            <Link href="/amenities" className="link-anim text-sm font-semibold text-[#c8922a] self-start">
              Explore the amenities <span className="arrow-nudge">→</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
