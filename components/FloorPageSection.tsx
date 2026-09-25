"use client";
import { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";

import planStudio from "@/assets/floor-plan-studio.webp";
import plan1Bhk from "@/assets/floor-plan-1-bhk.webp";
import plan1BhkStudy from "@/assets/floor-plan-1-bhk-study.webp";
import plan2Bhk from "@/assets/floor-plan-2-bhk.webp";
import plan2BhkStudy from "@/assets/floor-plan-2-bhk-study.webp";
import plan3Bhk from "@/assets/floor-plan-3-bhk.webp";
import plan3BhkStudy from "@/assets/floor-plan-3-bhk-study.webp";
import planLoft from "@/assets/floor-plan-3-bhk-duplex-loft.webp";
import plan4Bhk from "@/assets/floor-plan-4-bhk-staff.webp";
import masterPlan from "@/assets/nikoo-homes-8-master-plan.webp";
import { apartmentPrices, villaPrices, MASTER_PLAN_PDF, PRICE_NOTE } from "@/data/projectData";

import { useModal } from "./ModalContext";

// Room lists are read from the official plans; dimensions are shared on request.
const unitDetails: Record<string, { image: StaticImageData; description: string; rooms: string[] }> = {
  A1A: {
    image: planStudio,
    description:
      "One open room that works as living, dining and bedroom, with the kitchen and bathroom to one side and a bay window that keeps it bright. A first home, or the investor's rental shortlist.",
    rooms: ["Foyer", "Living / dining / bedroom", "Kitchen", "Bathroom", "Bay window"],
  },
  B3: {
    image: plan1Bhk,
    description:
      "A one-bedroom that doesn't feel like one: bay windows extend the bedroom, and the living and dining room opens onto a sit-out.",
    rooms: ["Foyer", "Living / dining", "Kitchen", "Utility", "Bedroom with bay window", "Bathroom", "Sit-out"],
  },
  C1A: {
    image: plan1BhkStudy,
    description:
      "The added study makes room for a work desk, a hobby corner or a guest bed, with bay windows extending both the study and the bedroom.",
    rooms: ["Foyer", "Living / dining", "Kitchen", "Utility", "Bedroom with bay window", "Study with bay window", "2 bathrooms", "Sit-out"],
  },
  D1B: {
    image: plan2Bhk,
    description:
      "A family home with two bedrooms, one with an attached bathroom, a kitchen with room to cook for guests, a sit-out on one side and bay windows on the other.",
    rooms: ["Foyer", "Living / dining", "Kitchen", "Utility", "Bedroom 1 with attached bathroom", "Bedroom 2", "2 bathrooms", "Sit-out", "Bay windows"],
  },
  F1A: {
    image: plan2BhkStudy,
    description:
      "Suited to a family with grown-up children or parents at home: the study doubles as a third room, and the private sit-out is the place for fresh air and family chatter.",
    rooms: ["Foyer", "Living / dining", "Kitchen", "Utility", "Bedroom 1 with attached bathroom", "Bedroom 2", "Study", "2 bathrooms", "Sit-out"],
  },
  G3: {
    image: plan3Bhk,
    description:
      "Living room and bedrooms are spaced to give family time and private time equal room, off a 3'6\" wide vestibule, with the living area opening onto a sit-out.",
    rooms: ["Foyer", "Living / dining", "Kitchen", "Utility", "3 bedrooms", "3 bathrooms", "Sit-out", "Bay windows"],
  },
  H1B: {
    image: plan3BhkStudy,
    description:
      "For working from home or entertaining often: the study works as an office or a guest room, and the master bedroom has its own dressing area.",
    rooms: ["Foyer", "Living / dining", "Kitchen", "Utility", "Bedroom 1 with dressing area", "Bedrooms 2 and 3", "Study", "3 bathrooms", "Sit-out"],
  },
  L1B: {
    image: planLoft,
    description:
      "A two-level loft with a double-height living and dining room, three large bedrooms and a deck alongside the living area.",
    rooms: ["Two levels with internal stair", "Double-height living / dining", "Kitchen", "Utility", "3 bedrooms", "3 bathrooms", "Double-height sit-out"],
  },
  J1A: {
    image: plan4Bhk,
    description:
      "Kitchen, dining and living form one continuous space at the heart of the home, framed by open views and natural light, with a staff room and staff bathroom attached.",
    rooms: ["Foyer", "Living / dining", "Kitchen", "Utility", "Master bedroom with attached bathroom", "Bedrooms 2, 3 and 4", "4 bathrooms", "Staff room with bathroom", "Sit-out"],
  },
};

const unitPlans = apartmentPrices.map((row) => ({ ...row, ...unitDetails[row.type] }));
type UnitPlan = (typeof unitPlans)[number];

const buyerGuide = [
  { buyer: "Buying a first home, or investing for rent", unit: "Studio (501 sq ft · ₹67–68 L)", why: "Smallest ticket in the project — the stock investors ask about first" },
  { buyer: "A single professional or a couple", unit: "1 BHK (786 sq ft · ₹93 L)", why: "A true bedroom plus a sit-out off the living room" },
  { buyer: "Working from home", unit: "1 BHK + Study (1,088 sq ft · ₹1.31 Cr)", why: "A separate study for the desk or a guest bed" },
  { buyer: "A young family", unit: "2 BHK (1,165 sq ft · ₹1.40 Cr)", why: "Two bedrooms, one with an attached bathroom" },
  { buyer: "A family with grown-up children or parents", unit: "2 BHK + Study (1,371 sq ft · ₹1.59 Cr)", why: "The study doubles as a third room" },
  { buyer: "A growing family", unit: "3 BHK (1,730 sq ft · ₹2.04 Cr) ⭐", why: "Three bedrooms and three bathrooms" },
  { buyer: "Entertaining or working from home", unit: "3 BHK + Study (2,006 sq ft · ₹2.33 Cr)", why: "Study plus a dressing area in the master bedroom" },
  { buyer: "Wanting volume and a deck", unit: "3 BHK Duplex Loft (2,132 sq ft · ₹2.59 Cr)", why: "Double-height living across two levels" },
  { buyer: "A large family with live-in help", unit: "4 BHK + Staff (2,506 sq ft · ₹2.94 Cr)", why: "Four bedrooms plus a staff room with its own bathroom" },
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<UnitPlan | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState("");

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="Nikoo Homes 8 Floor Plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* H1 Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-animate="fade-up">
            Nikoo Homes 8 Floor Plans — Studio to 4 BHK
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed" data-animate="fade-up" data-delay="100">
            Nine apartment types at Bhartiya Nikoo Homes 8, from a 501 sq ft studio to a
            2,506 sq ft four-bedroom home with a staff room. Each block below gives the unit
            code, carpet and saleable area, indicative price and a room-by-room description.
            Dimensioned plans are shared with the brochure.
          </p>
          <button
            onClick={() => openModal()}
            className="btn-anim mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition cursor-pointer"
            aria-label="Download Floor Plan PDF"
            data-animate="fade-up"
            data-delay="200"
          >
            Download Floor Plan PDF
          </button>
        </div>

        {/* H2 - Price Chart */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6" data-animate="fade-up">
            Nikoo Homes 8 Unit Types, Areas and Prices
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8" data-animate="fade-up">
            Every apartment type at a glance, with carpet area, saleable area and indicative
            launch price.
          </p>

          <div className="overflow-x-auto shadow-md rounded-lg" data-animate="fade-up">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#DCA54A] text-white">
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Configuration</th>
                  <th className="px-4 py-3 text-left">Carpet Area</th>
                  <th className="px-4 py-3 text-left">Saleable Area</th>
                  <th className="px-4 py-3 text-left">Indicative Price</th>
                </tr>
              </thead>
              <tbody>
                {apartmentPrices.map((item, idx) => (
                  <tr
                    key={item.type}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-[#FAF3E3] transition-colors`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.type}</td>
                    <td className="px-4 py-3">{item.config}</td>
                    <td className="px-4 py-3">{item.carpet}</td>
                    <td className="px-4 py-3">{item.saleable}</td>
                    <td className="px-4 py-3 font-semibold text-[#c8922a] whitespace-nowrap">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">{PRICE_NOTE}</p>
        </div>

        {/* H2 - Floor Plan Configurations */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6" data-animate="fade-up">
            Floor Plans by Unit Type
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-10" data-animate="fade-up">
            Bay windows run through the range, study variants exist at every size from one to
            three bedrooms, and the largest homes add a duplex loft and a staff room. Tap a plan
            to view it full size.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {unitPlans.map((plan) => (
              <div
                key={plan.type}
                data-animate="fade-up"
                className="card-anim group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-100 flex flex-col"
                onClick={() => {
                  if (!isUnlocked) {
                    openModal();
                  } else {
                    setActivePlan(plan);
                  }
                }}
              >
                <div className="relative h-56 overflow-hidden bg-white">
                  <Image
                    src={plan.image}
                    alt={`Nikoo Homes 8 ${plan.config} floor plan, unit type ${plan.type}, ${plan.saleable} saleable`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className={`w-full h-full object-contain p-4 transition duration-500 ${
                      !isUnlocked ? "blur-[2px] scale-105" : "group-hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-white text-sm font-semibold transition-colors duration-300 group-hover:bg-black/60">
                      <span className="transition-transform duration-300 group-hover:scale-110">🔒 Unlock to View</span>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-3 py-1 rounded">
                    {plan.type}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.config} Floor Plan
                  </h3>
                  <p className="text-sm text-[#c8922a] font-semibold">
                    {plan.saleable} saleable · {plan.carpet} carpet · {plan.price}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {plan.rooms.map((room) => (
                      <span
                        key={room}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {room}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2 - Courtyard villas */}
        <div className="mt-8 bg-[#FAF8F4] rounded-lg p-6 md:p-8 border border-[#e5dcc5]" data-animate="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Courtyard Villas — Limited Release
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-3xl">
            A limited number of low-rise courtyard villas sit along one edge of the site,
            buffered from the towers by landscape. Availability and pricing change release to
            release, and plans are shared once a release is confirmed. If released as a separate
            phase, the villas will carry their own RERA registration — ask for that number before
            booking.
          </p>
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] bg-white">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-5 py-3">Type</th>
                  <th className="px-5 py-3">Saleable Area</th>
                  <th className="px-5 py-3">Indicative Price</th>
                </tr>
              </thead>
              <tbody>
                {villaPrices.map((row) => (
                  <tr key={row.type} className="border-t border-[#e5dcc5] hover:bg-[#FAF3E3] transition-colors">
                    <td className="px-5 py-3 font-semibold text-gray-900">{row.type}</td>
                    <td className="px-5 py-3 text-gray-600">{row.saleable}</td>
                    <td className="px-5 py-3 text-gray-800 font-semibold whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Selection Guide Table */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6" data-animate="fade-up">
            Choose the Right Nikoo Homes 8 Floor Plan
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg" data-animate="fade-up">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">If You Are...</th>
                  <th className="px-4 py-3 text-left">Recommended Home</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {buyerGuide.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-[#FAF3E3] transition-colors`}
                  >
                    <td className="px-4 py-3 font-medium">{item.buyer}</td>
                    <td className="px-4 py-3 font-semibold text-[#c8922a]">{item.unit}</td>
                    <td className="px-4 py-3 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Master Plan Section */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4" data-animate="fade-up">
            Nikoo Homes 8 Master Plan
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6" data-animate="fade-up">
            Six towers, A through F, are arranged as two offset blocks so that no tower faces
            directly into another. Cars circulate on a perimeter ring road and drop into two
            basement levels, leaving the centre of the site to a pedestrian-only Central Spine
            with the Black Swan Club sitting on it. Typical floor plates carry eight homes served
            by two lifts and a staircase.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm mb-6" data-animate="fade-up">
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>6 towers, 2B + G + 16 to 24 floors</li>
              <li>40,000+ sq ft Black Swan Club</li>
              <li>Perimeter ring road and two basement levels</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>Pedestrian-only Central Spine</li>
              <li>Approximately 75% of the ground left open</li>
              <li>About one parking space per home</li>
            </ul>
          </div>

          <div
            data-animate="zoom-in"
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={masterPlan}
              alt="Nikoo Homes 8 master plan with Towers A to F, the Central Spine, the Black Swan Club and the courtyard villa edge"
              sizes="(max-width: 1024px) 100vw, 900px"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">📐 Nikoo Homes 8 Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button
                className="btn-anim mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="View Master Plan"
              >
                {isUnlocked ? "View Master Plan" : "Unlock Now"}
              </button>
            </div>
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              11.35 Acres
            </span>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => {
                if (!isUnlocked) openModal();
                else setIsMasterOpen(true);
              }}
              className="btn-anim bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition cursor-pointer"
            >
              View Master Plan PDF
            </button>
          </div>
        </div>

        {/* H2 - PDF Download Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200" data-animate="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nine Floor Plans. One PDF.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            Every configuration from studio to 4 BHK, with carpet areas, saleable areas, prices
            and the payment schedule. Share your details and the configuration you are
            considering, and the brochure downloads straight away — our team follows up with
            live inventory and floor-wise pricing.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20 transition"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20 transition"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20 transition"
                aria-label="Email Address"
              />
              <select
                value={selectedConfig}
                onChange={(e) => setSelectedConfig(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] focus:ring-2 focus:ring-[#DCA54A]/20 transition"
                aria-label="Configuration of interest"
              >
                <option value="">Configuration of interest</option>
                <option value="Studio">Studio</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
                <option value="Courtyard Villa">Courtyard Villa</option>
              </select>
              <button
                onClick={() => openModal()}
                className="btn-anim bg-[#DCA54A] text-white font-semibold px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition cursor-pointer"
              >
                Send Me the Brochure
              </button>
            </div>
          </div>
        </div>

        {/* H2 - Price Info */}
        <div className="text-center text-sm text-gray-500 mt-4" data-animate="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nikoo Homes 8 Floor Plan Price
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apartment prices run from approximately <strong>₹67 lakh</strong> for the studio to{" "}
            <strong>₹2.94 crore</strong> for the 4 BHK with staff room, at a launch rate of
            roughly ₹12,000 to ₹12,500 per sq ft. Courtyard villas, where released, are indicated
            from ₹5.98 crore. Floor rise, GST, stamp duty and statutory charges are extra.
          </p>
          <p className="mt-3">
            For the full cost breakdown, visit the{" "}
            <a href="/price" className="link-anim text-[#c8922a]">
              Price page
            </a>{" "}
            or request a callback through the{" "}
            <a href="/contact-us" className="link-anim text-[#c8922a]">
              Contact form
            </a>.
          </p>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div
          className="backdrop-in fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePlan.config} floor plan`}
          onClick={() => setActivePlan(null)}
        >
          <div className="pop-in relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 hover:rotate-90 transition-transform duration-300 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3 pr-10">
              <h3 className="text-lg font-bold text-gray-900">
                {activePlan.config} Floor Plan ({activePlan.type})
              </h3>
              <p className="text-sm text-gray-600">
                {activePlan.saleable} saleable · {activePlan.carpet} carpet · {activePlan.price}
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={`Nikoo Homes 8 ${activePlan.config} floor plan, unit type ${activePlan.type}`}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto object-contain"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {activePlan.rooms.map((room) => (
                <span key={room} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {room}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="backdrop-in fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Nikoo Homes 8 Master Plan"
          onClick={() => setIsMasterOpen(false)}
        >
          <div className="pop-in relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 hover:rotate-90 transition-transform duration-300 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close master plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              Nikoo Homes 8 Master Plan
            </h3>

            <Image
              src={masterPlan}
              alt="Nikoo Homes 8 master plan — complete site layout"
              sizes="(max-width: 1024px) 100vw, 900px"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={MASTER_PLAN_PDF}
                download
                className="btn-anim bg-[#DCA54A] text-white text-sm px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="Download Master Plan PDF"
              >
                📥 Download Master Plan PDF
              </a>
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="btn-anim bg-gray-200 text-gray-700 text-sm px-6 py-3 rounded uppercase hover:bg-gray-300 transition cursor-pointer"
              >
                Request Full Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
