"use client";

import { getImageProps } from "next/image";
import heroDesktop from "../assets/nikoo-homes-8-hero.webp";
import heroMobile from "../assets/nikoo-homes-8-hero-mobile.webp";
import { BrochureButton, PriceSheetButton, SiteVisitLink } from "./content/CtaButtons";
import { renderInline } from "./content/Md";

const HERO_ALT =
  "Bhartiya Nikoo Homes 8 towers, the pedestrian Central Spine and the Black Swan Club at dusk, Bellahalli, North Bengaluru";

// Splits "11.35 acres" into a figure and its label for the stat tiles.
function splitStat(stat) {
  const match = stat.match(/^([\d.,]+\+?%?)\s+(.*)$/);
  return match ? { value: match[1], label: match[2] } : { value: stat, label: "" };
}

const Hero = ({ title, tagline, intro, stats }) => {
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
      <div className="relative w-full overflow-hidden md:flex md:items-center md:min-h-[78vh]">
        <picture className="block">
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
          <source srcSet={mobileSrcSet} sizes="100vw" />
          <img
            {...imgProps}
            alt={HERO_ALT}
            loading="eager"
            fetchPriority="high"
            className="hero-kenburns block w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover md:object-center"
          />
        </picture>

        {/* Legibility gradient behind the copy (desktop overlay) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/5 pointer-events-none"></div>

        <div className="on-dark relative md:w-full bg-[#141004] md:bg-transparent">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-7 pb-9 md:pt-16 md:pb-40 text-white">
            <div className="max-w-3xl">
              <ul className="rise rise-1 flex flex-wrap gap-x-2 gap-y-1.5 mb-4">
                {tagline.map((item) => (
                  <li
                    key={item}
                    className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#E3B866] border border-[#E3B866]/35 rounded-full px-2.5 py-1 bg-black/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h1 className="rise rise-2 font-semibold leading-[1.15] text-white mb-4 text-[1.65rem] sm:text-4xl lg:text-[2.85rem]">
                {title}
              </h1>

              <p className="rise rise-3 text-white/85 text-sm md:text-[0.9375rem] leading-relaxed mb-6 max-w-2xl">
                {renderInline(intro)}
              </p>

              <ul className="rise rise-4 grid grid-cols-3 sm:grid-cols-6 gap-2 mb-7 max-w-2xl">
                {stats.map((stat) => {
                  const { value, label } = splitStat(stat);
                  return (
                    <li
                      key={stat}
                      className="rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm px-2 py-2.5 text-center transition-all duration-300 hover:bg-white/20 hover:border-[#E3B866]/70"
                    >
                      <span className="block text-base sm:text-lg font-semibold leading-none text-white">{value}</span>
                      <span className="block mt-1 text-[10px] leading-tight text-white/75">{label}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="rise rise-5 flex flex-wrap gap-3">
                <PriceSheetButton />
                <SiteVisitLink />
                <BrochureButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
