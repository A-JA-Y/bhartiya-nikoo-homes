"use client";

import Image from "next/image";
import {
  FaMapMarkedAlt,
  FaHome,
  FaBuilding,
  FaTree,
  FaWalking,
  FaSwimmer,
  FaRupeeSign,
  FaUsers,
  FaCar,
  FaRocket,
  FaKey,
  FaHandshake,
} from "react-icons/fa";
import CountUp from "./CountUp";

import centralSpine from "@/assets/central-spine-walkway.webp";
import blackSwanClub from "@/assets/black-swan-club.webp";
import aerialView from "@/assets/nikoo-homes-8-aerial-view.webp";
import towers from "@/assets/nikoo-homes-8-towers.webp";
import bhartiyaCity from "@/assets/bhartiya-city-aerial.webp";

const cards = [
  {
    title: "Car-Free Central Spine",
    image: centralSpine,
    alt: "Tree-lined pedestrian Central Spine at Nikoo Homes 8",
  },
  {
    title: "40,000 Sq Ft Black Swan Club",
    image: blackSwanClub,
    alt: "Black Swan Club clubhouse with rooftop pool",
  },
  {
    title: "75% Open Space",
    image: aerialView,
    alt: "Aerial view of the gardens and open spaces at Nikoo Homes 8",
  },
  {
    title: "6 Towers · 1,010 Homes",
    image: towers,
    alt: "Nikoo Homes 8 residential towers",
  },
  {
    title: "5–7 Min to Bhartiya City",
    image: bhartiyaCity,
    alt: "Aerial view of Bhartiya City township near Hebbal",
  },
];

// Section 4 key highlights. `count` values animate; the rest render as text.
const highlights = [
  { icon: <FaMapMarkedAlt />, count: { end: 11.35, decimals: 2 }, unit: "Acres", label: "At Bellahalli, off Thanisandra Main Road" },
  { icon: <FaHome />, count: { end: 1010 }, unit: "Homes", label: "Studios to 4 BHK plus courtyard villas" },
  { icon: <FaBuilding />, count: { end: 6 }, unit: "Towers", label: "A to F, 2B + G + 16 to 24 floors" },
  { icon: <FaTree />, count: { end: 75, suffix: "%" }, unit: "Open Space", label: "Vehicles pushed to the perimeter" },
  { icon: <FaWalking />, value: "Car-Free", unit: "Central Spine", label: "Pedestrianised through the site" },
  { icon: <FaSwimmer />, count: { end: 40000 }, unit: "Sq Ft", label: "The Black Swan Club" },
  { icon: <FaRupeeSign />, count: { end: 12000, prefix: "₹" }, unit: "/Sq Ft", label: "Indicative launch rate" },
  { icon: <FaUsers />, count: { end: 6600, suffix: "+" }, unit: "Families", label: "Already delivered across Nikoo 1 to 5" },
  { icon: <FaCar />, value: "5–7", unit: "Minutes", label: "To Bhartiya City mall, hotel, office park and school" },
  { icon: <FaRocket />, value: "17 June 2026", unit: "", label: "Project launch" },
  { icon: <FaKey />, value: "December 2030", unit: "", label: "RERA-filed completion" },
  { icon: <FaHandshake />, value: "Build-to-Own", unit: "", label: "The developer operates what it builds" },
];

export default function GaurTownship() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm" data-animate="fade-up">
          Key Highlights
        </h6>

        {/* Heading */}
        <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight" data-animate="fade-up" data-delay="100">
          Nikoo Homes 8 at a Glance
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed" data-animate="fade-up" data-delay="200">
          Eleven acres at Bellahalli, organised so that cars stay on the perimeter and
          the middle of the site belongs to people — seven minutes from the township
          the same developer still runs.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" data-stagger>
          {cards.map((card, i) => (
            <div
              key={i}
              data-animate="fade-up"
              className="card-anim relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                quality={80}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

              {/* Title */}
              <div className="absolute bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-white text-sm font-medium leading-snug">
                  {card.title}
                </p>
                <span className="block h-[2px] w-8 bg-[#DCA54A] mt-2 transition-all duration-500 group-hover:w-14"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12" data-stagger>
          {highlights.map((item) => (
            <li
              key={item.label}
              data-animate="fade-up"
              className="card-anim group rounded-xl border border-[#efe6cf] bg-[#FAF8F4] p-4 md:p-5 hover:border-[#DCA54A]"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#c8922a] shadow-sm mb-3 transition-all duration-300 group-hover:bg-[#DCA54A] group-hover:text-white group-hover:scale-110">
                {item.icon}
              </span>
              <p className="text-gray-900 font-bold text-lg md:text-xl leading-tight">
                {item.count ? (
                  <CountUp
                    end={item.count.end}
                    decimals={item.count.decimals}
                    prefix={item.count.prefix}
                    suffix={item.count.suffix}
                  />
                ) : (
                  item.value
                )}
                {item.unit && <span className="text-[#c8922a] font-semibold text-sm md:text-base"> {item.unit}</span>}
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-snug mt-1">{item.label}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
