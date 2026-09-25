"use client";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaSpa,
  FaTableTennis,
  FaBook,
  FaLaptop,
  FaFilm,
  FaGlassCheers,
  FaBed,
  FaShieldAlt,
} from "react-icons/fa";

import clubRooftop from "@/assets/black-swan-club.webp";
import clubLounge from "@/assets/black-swan-club-lounge.webp";
import tennisCourt from "@/assets/nikoo-homes-8-tennis-court.webp";
import circleOfLife from "@/assets/circle-of-life-lawn.webp";
import clubDining from "@/assets/black-swan-club-dining.webp";
import communityGarden from "@/assets/community-garden-illustration.webp";
import joggingTrack from "@/assets/nikoo-life-health.webp";


const images = [clubRooftop, clubLounge, tennisCourt, circleOfLife, clubDining, communityGarden, joggingTrack];
const imageAlts = [
  "The Black Swan Club with its rooftop swimming pool at Nikoo Homes 8",
  "Lounge inside the Black Swan Club",
  "Tennis court beside the gardens at Nikoo Homes 8",
  "The Circle of Life celebration lawn on the Central Spine",
  "Dining at the Black Swan Club",
  "Illustration of the community garden and organic kitchen",
  "Illustration of residents running on the jogging track",
];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaSwimmingPool />,  text: "Rooftop swimming pool" },
  { icon: <FaDumbbell />,      text: "Fully equipped gymnasium" },
  { icon: <FaSpa />,           text: "Spa and wellness suite" },
  { icon: <FaTableTennis />,   text: "Indoor games room" },
  { icon: <FaBook />,          text: "Library" },
  { icon: <FaLaptop />,        text: "Co-working spaces" },
  { icon: <FaFilm />,          text: "Mini theatre" },
  { icon: <FaGlassCheers />,   text: "Banquet and party hall" },
  { icon: <FaBed />,           text: "Guest rooms for visiting family" },
  { icon: <FaShieldAlt />,     text: "24×7 CCTV surveillance and gated security" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#4F3318] py-16 px-6 md:px-12 lg:px-20 text-[#FDE6C0] relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Mirrored background */}
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="text-[#DCA54A] uppercase mb-4" data-animate="fade-up">
            The Black Swan Club — 40,000+ Sq Ft
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto" data-animate="fade-up" data-delay="120">
            A Clubhouse, a Car-Free Spine and Gardens Worth Walking
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed" data-animate="fade-up">
              The Black Swan Club sits on the pedestrianised Central Spine, with the
              landscape programme strung along it. Everything below is inside the gate —
              and the mall, the hotel and the school at Bhartiya City are five to seven
              minutes away.
            </p>

            <ul className="flex flex-col gap-[18px]" data-stagger>
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-4 group" data-animate="fade-right">
                  <span className="flex-shrink-0 text-lg text-[#DCA54A] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base transition-transform duration-300 group-hover:translate-x-1">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1" data-animate="fade-up">
              Around the club: lap, leisure and children&apos;s pools; tennis, basketball and
              squash courts; a rock-climbing wall, jogging and skating tracks; and a run of
              sensory, aroma, meditation, linear and community gardens.
            </p>

            <div className="mt-3" data-animate="fade-up">
              <button
                onClick={() => openModal()}
                className="btn-anim inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0" data-animate="zoom-in">
  <ImageSlider images={images} alts={imageAlts} />
</div>

        </div>
      </div>
    </section>
  );
}
