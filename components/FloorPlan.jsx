"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import planStudio from "@/assets/floor-plan-studio.webp";
import plan2Bhk from "@/assets/floor-plan-2-bhk.webp";
import plan3Bhk from "@/assets/floor-plan-3-bhk.webp";
import plan4Bhk from "@/assets/floor-plan-4-bhk-staff.webp";
import masterPlan from "@/assets/nikoo-homes-8-master-plan.webp";
import { MASTER_PLAN_PDF } from "@/data/projectData";

import { useModal } from "./ModalContext";

export default function PlansSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  const plans = [
    { image: planStudio, label: "Studio · 501 sq ft" },
    { image: plan2Bhk, label: "2 BHK · 1,165 sq ft" },
    { image: plan3Bhk, label: "3 BHK · 1,730 sq ft" },
    { image: plan4Bhk, label: "4 BHK + Staff · 2,506 sq ft" },
  ];

  return (
    <section  className="w-full  py-16 px-6" id="plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3" data-animate="fade-up">
            Floor Plans
          </h6>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-animate="fade-up" data-delay="100">
            Nine Floor Plans. One PDF.
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto" data-animate="fade-up" data-delay="200">
            Every configuration from studio to 4 BHK, with carpet areas, saleable areas,
            prices and the payment schedule.
          </p>
        </div>

        {/* FLOOR PLAN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-stagger>
          {plans.map((plan, i) => (
            <div
              key={i}
              data-animate="fade-up"
              className="card-anim relative rounded-md overflow-hidden shadow-md group cursor-pointer bg-white border border-gray-100"
              onClick={() => {
                if (!isUnlocked) {
                  openModal();
                } else {
                  setActivePlan(plan);
                }
              }}
            >
              <Image
                src={plan.image}
                alt={`Nikoo Homes 8 ${plan.label} floor plan`}
                sizes="(max-width: 768px) 50vw, 280px"
                className={`w-full h-[180px] object-contain p-3 transition duration-500 ${
                  !isUnlocked ? "blur-[2px] scale-105" : "group-hover:scale-105"
                }`}
              />

              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs transition-colors duration-300 group-hover:bg-black/55">
                  <span className="inline-flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-110">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    Unlock
                  </span>
                </div>
              )}

              <p className="bg-white text-[11px] font-semibold text-gray-800 text-center py-1.5 border-t border-gray-100">
                {plan.label}
              </p>
            </div>
          ))}
        </div>

        {/*  MASTER PLAN SUBSECTION */}
        <div className="flex flex-col items-center text-center mt-6">

          {/* Sub heading */}
          <h6 className="text-xl md:text-2xl font-semibold  mb-2 text-[#dca54a]" data-animate="fade-up">
            Master Plan
          </h6>

          <p className="text-gray-600 text-sm mb-6 max-w-lg" data-animate="fade-up">
            Six towers, a pedestrian-only Central Spine, the Black Swan Club and a
            perimeter ring road — see how the 11.35 acres are organised.
          </p>

          {/* Card */}
          <div
            data-animate="zoom-in"
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
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
              alt="Nikoo Homes 8 master plan with Towers A to F, the Central Spine and the Black Swan Club"
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>

              <button className="btn-anim mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase">
                {isUnlocked ? "View Plan" : "Unlock Now"}
              </button>
            </div>

            {/* Premium badge */}
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              11.35 Acres
            </span>
          </div>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-in" onClick={() => setActivePlan(null)}>
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto pop-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePlan(null)}
              aria-label="Close floor plan"
              className="absolute top-2 right-2 text-black text-xl hover:rotate-90 transition-transform duration-300"
            >
              ✕
            </button>

            <p className="text-sm font-semibold text-gray-900 mb-2 pr-8">{activePlan.label}</p>

            <Image
              src={activePlan.image}
              alt={`Nikoo Homes 8 ${activePlan.label} floor plan`}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 backdrop-in" onClick={() => setIsMasterOpen(false)}>
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full text-center max-h-[90vh] overflow-auto pop-in" onClick={(e) => e.stopPropagation()}>

            <button
              onClick={() => setIsMasterOpen(false)}
              aria-label="Close master plan"
              className="absolute top-2 right-2 text-black text-xl hover:rotate-90 transition-transform duration-300"
            >
              ✕
            </button>

            <Image
              src={masterPlan}
              alt="Nikoo Homes 8 master plan with Towers A to F, the Central Spine and the Black Swan Club"
              sizes="(max-width: 1024px) 100vw, 900px"
              className="w-full h-auto object-contain mb-4"
            />

            <a
              href={MASTER_PLAN_PDF}
              download
              className="btn-anim inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
            >
              Download Master Plan
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
