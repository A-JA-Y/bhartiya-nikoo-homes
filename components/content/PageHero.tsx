import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

// Photo-led banner for inner pages: breadcrumbs, the page H1, a short lead
// and the page's calls to action over a darkened image.
export default function PageHero({
  title,
  eyebrow,
  lead,
  image,
  imageAlt,
  imagePosition = "center",
  crumbs,
  facts,
  children,
}: {
  title: string;
  eyebrow?: string;
  lead?: ReactNode;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: string;
  crumbs: Crumb[];
  facts?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="hero-kenburns -z-20 object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/65 to-black/35 md:bg-gradient-to-r md:from-black/85 md:via-black/55 md:to-black/15"
      />

      <div className="mx-auto flex min-h-[24rem] max-w-6xl flex-col justify-end px-4 pb-10 pt-10 sm:min-h-[27rem] sm:px-6 sm:pb-14 lg:min-h-[31rem] lg:pb-16 lg:pt-14">
        <div className="rise rise-1">
          <Breadcrumbs items={crumbs} />
        </div>
        {eyebrow && <p className="eyebrow rise rise-1 mb-3">{eyebrow}</p>}
        <h1 className="rise rise-2 max-w-4xl text-[1.6rem] font-semibold leading-[1.18] text-white sm:text-4xl sm:leading-[1.12] lg:text-[2.8rem]">
          {title}
        </h1>
        {lead && (
          <div className="rise rise-3 mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {lead}
          </div>
        )}
        {facts && facts.length > 0 && (
          <ul className="rise rise-4 mt-5 flex flex-wrap gap-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm sm:text-xs"
              >
                {fact}
              </li>
            ))}
          </ul>
        )}
        {children && <div className="rise rise-5 mt-6 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
