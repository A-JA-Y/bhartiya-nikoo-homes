"use client";
import { FaCheck } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

import aerialView from "../assets/nikoo-homes-8-aerial-view.webp";
import centralSpine from "../assets/central-spine-walkway.webp";
import clubLounge from "../assets/black-swan-club-lounge.webp";
import towers from "../assets/nikoo-homes-8-towers.webp";
import bedroom from "../assets/interior-bedroom.webp";


import { useModal } from "./ModalContext";

const sliderImages = [aerialView, centralSpine, clubLounge, towers, bedroom];
const sliderAlts = [
  "Aerial view of the Black Swan Club, Central Spine gardens and tennis court at Nikoo Homes 8",
  "Pedestrian Central Spine walkway lined with trees and gardens at Nikoo Homes 8",
  "Lounge inside the Black Swan Club at Nikoo Homes 8",
  "Residential towers of Nikoo Homes 8 rising above the landscaped podium",
  "Bedroom interior render at Nikoo Homes 8",
];

const AboutProject = ({heading}) => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">

        {/* Left: Images */}
        <div className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]" data-animate="fade-right">


          <ImageSlider images={sliderImages} alts={sliderAlts}/>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4" data-animate="fade-left">

          {/* Tagline */}
          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            The eighth Nikoo Homes chapter · Bellahalli
          </h6>

          {/* Title */}
         {heading ? ( <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            About Bhartiya Nikoo Homes 8
          </h1>):( <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            About Bhartiya Nikoo Homes 8
          </h2>)}

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Most developers sell the amenities and leave. Bhartiya Urban built a mall,
            a five-star hotel, an office park and a school at Bhartiya City — and then
            kept them. It operates them today. That is the whole argument for buying a
            Nikoo home, and it is a better argument than any brochure adjective.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Nikoo Homes 8 is the eighth phase of that programme, on roughly 11.35 acres
            at Bellahalli, just off Thanisandra Main Road and about five to seven minutes
            from Bhartiya City itself. Approximately 1,010 homes sit across six towers,
            A through F, each rising two basements plus ground plus sixteen to
            twenty-four floors. It launched on 17 June 2026.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Roughly seventy-five per cent of the site is left open. Vehicles are pushed
            to a perimeter ring road and two basement levels, and the middle of the site
            is a pedestrianised Central Spine — children can cross the property without
            meeting a car.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1" data-stagger>
            {[
              "Studio to 4 BHK, plus limited courtyard villas",
              "75% open space around a car-free Central Spine",
              "40,000+ sq ft Black Swan Club",
              "RERA registered · completion December 2030",
            ].map((item) => (
              <li
                key={item}
                data-animate="fade-up"
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal()}
              className="btn-anim inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] transition-colors duration-300 cursor-pointer"
            >
              Send Me the Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
