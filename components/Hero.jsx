"use client";

import { getImageProps } from "next/image";
import { FaCheck } from "react-icons/fa";
import heroDesktop from "../assets/nikoo-homes-8-hero.webp";
import heroMobile from "../assets/nikoo-homes-8-hero-mobile.webp";
import { priceStrip, trustStrip } from "@/data/projectData";
import { useModal } from "./ModalContext";

const HERO_ALT =
  "Bhartiya Nikoo Homes 8 towers, the pedestrian Central Spine and the Black Swan Club at dusk, Bellahalli, North Bengaluru";

const Hero = () => {
  const { openModal } = useModal();

  // One <img>, two crops: 4:3 on phones, the full 16:9 render from md up.
  const common = { alt: HERO_ALT, sizes: "100vw", quality: 80 };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: heroDesktop });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: heroMobile });

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden md:flex md:items-center md:min-h-[70vh]">
        <picture className="block">
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
          <source srcSet={mobileSrcSet} sizes="100vw" />
          <img
            {...imgProps}
            loading="eager"
            fetchPriority="high"
            className="hero-kenburns block w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover md:object-center"
          />
        </picture>

        {/* Legibility gradient behind the copy (desktop overlay) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/0 pointer-events-none"></div>

        <div className="relative md:w-full bg-[#141004] md:bg-transparent">
          <div className="max-w-7xl mx-auto w-full px-5 md:px-6 pt-8 pb-9 md:pt-14 md:pb-36 text-white">
            <div className="max-w-3xl">
              <p className="rise rise-1 text-[#E3B866] text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                New Launch | Bellahalli, off Thanisandra Main Road
              </p>

              <h2 className="rise rise-2 font-bold leading-[1.05] text-white mb-4 md:text-5xl! lg:text-6xl!">
                The Builder Who Stayed.
              </h2>

              <p className="rise rise-3 text-white/85 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                Bhartiya Urban does not build and exit. It still owns and runs the mall,
                the hotel, the office park and the school at Bhartiya City. Nikoo Homes 8
                is the eighth chapter of that record — 1,010 homes on eleven acres at
                Bellahalli.
              </p>

              <ul className="rise rise-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
                {priceStrip.map((item) => (
                  <li
                    key={item.config}
                    className="rounded-md border border-white/15 bg-white/10 backdrop-blur-sm px-3 py-2 transition-all duration-300 hover:bg-white/20 hover:border-[#E3B866]/70 hover:-translate-y-0.5"
                  >
                    <span className="block text-[10px] uppercase tracking-wider text-[#E3B866] leading-tight">
                      {item.config}
                    </span>
                    <span className="block text-sm font-semibold mt-0.5">
                      {item.price} <span className="text-[10px] font-normal text-white/70">onwards</span>
                    </span>
                    <span className="block text-[10px] text-white/70">
                      {item.size}
                      {item.limited && " · limited release"}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rise rise-5 flex flex-wrap gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="btn-anim bg-[#c8952a] hover:bg-[#b07d1f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md cursor-pointer"
                >
                  Get the Price Sheet
                </button>
                <a
                  href="#book-site-visit"
                  className="btn-anim border border-white/70 hover:bg-white hover:text-[#141004] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md"
                >
                  Book a Site Visit
                </a>
              </div>

              <ul className="rise rise-6 flex flex-wrap gap-x-4 gap-y-2 text-[11px] md:text-xs text-white/80">
                {trustStrip.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <FaCheck className="text-[#E3B866] flex-shrink-0" size={10} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
