import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import StickyDownloadButton from "@/components/StickyButton";
import OpenModalButton from "@/components/OpenModalButton";

import cityAerial from "@/assets/bhartiya-city-aerial.webp";
import mall from "@/assets/bhartiya-mall-of-bengaluru.webp";
import leela from "@/assets/the-leela-bhartiya-city.webp";
import highStreet from "@/assets/bhartiya-city-high-street.webp";
import greenAvenues from "@/assets/bhartiya-city-green-avenues.webp";

export const metadata: Metadata = {
  title: "Bhartiya City Bangalore — The Township Next Door",
  description:
    "Bhartiya City Bangalore: a 125-acre township near Hebbal with Bhartiya Mall of Bengaluru, The Leela Bhartiya City, BCIT and Chaman Bhartiya School — 5 to 7 minutes from Nikoo Homes 8.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/bhartiya-city" },
};

const featured = [
  {
    title: "Bhartiya Mall of Bengaluru",
    image: mall,
    alt: "Shoppers inside Bhartiya Mall of Bengaluru",
    body: "Roughly eight lakh sq ft of leasable retail with more than 150 stores, opened in October 2021 — two to five minutes' drive from Nikoo Homes 8.",
  },
  {
    title: "The Leela Bhartiya City",
    image: leela,
    alt: "The Leela Bhartiya City hotel at dusk",
    body: "A 281-key luxury hotel and convention centre at the heart of the township.",
  },
  {
    title: "Performing Arts Pavilion & High Street",
    image: highStreet,
    alt: "Evening crowd at the open-air venue in Bhartiya City",
    body: "A performing arts pavilion and a retail high street that give the township an evening life of its own.",
  },
  {
    title: "Central Park & Green Avenues",
    image: greenAvenues,
    alt: "Towers and landscaped lawns at Bhartiya City",
    body: "A four-acre central park and over two hundred gardens across the development.",
  },
];

const alsoHere = [
  { title: "BCIT", body: "The Bhartiya Centre of Information Technology — the office and IT-SEZ park." },
  { title: "Chaman Bhartiya School", body: "The school closest to Nikoo Homes 8." },
  { title: "Nikoo Homes 1 to 5", body: "Delivered and occupied, with more than 6,600 families in residence." },
];

export default function BhartiyaCityPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Neighbourhood"
        title="Bhartiya City — The Township Next Door"
        subtitle="A 125-acre integrated development near Hebbal, five to seven minutes from Nikoo Homes 8."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-animate="fade-right">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Bhartiya City Bangalore
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Bhartiya City is a 125-acre integrated development near Hebbal, launched in 2012 and
              planned for approximately 17 million sq ft across eight districts, with a four-acre
              central park and over two hundred gardens. It holds a mall, a five-star hotel and
              convention centre, an office and IT park, a school, a performing arts pavilion and a
              retail high street.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              What makes it unusual is who runs it. Bhartiya Urban built these assets and kept
              them — it retains and operates them rather than selling and exiting.
            </p>
            <div className="bg-[#FAF8F4] border-l-4 border-[#DCA54A] rounded-r-lg p-4 text-sm text-gray-700">
              <strong>Worth knowing:</strong> Nikoo Homes 8 is not inside Bhartiya City. It sits on a
              separate, roughly 11-acre parcel at Bellahalli, about five to seven minutes&apos; drive
              away. The township next door is the selling point — not a shared boundary.
            </div>
          </div>
          <div className="relative h-72 md:h-[420px] rounded-xl overflow-hidden shadow-lg group" data-animate="zoom-in">
            <Image
              src={cityAerial}
              alt="Aerial view of Bhartiya City with its central park and towers"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10" data-animate="fade-up">
            What&apos;s at Bhartiya City
          </h2>
          <div className="grid md:grid-cols-2 gap-6" data-stagger>
            {featured.map((item) => (
              <div key={item.title} data-animate="fade-up" className="card-anim group bg-white rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6" data-stagger>
            {alsoHere.map((item) => (
              <div key={item.title} data-animate="fade-up" className="card-anim bg-white rounded-xl p-5 border-l-4 border-[#DCA54A] shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Photographs courtesy of the respective Bhartiya City venues; indicative.</p>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center" data-animate="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Why the Build-to-Own Model Matters
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            There is one question worth asking about any new gated community: who will be
            responsible for it in 2035? At most projects the answer is an association of residents
            arguing with a contracted facility-management firm, with the developer long gone.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Bhartiya Urban retained and operates Bhartiya Mall of Bengaluru, The Leela Bhartiya City,
            the BCIT office park and Chaman Bhartiya School. A developer whose income depends on the
            neighbourhood still being good in ten years has a structural reason to keep it good.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <OpenModalButton className="btn-anim bg-[#c8952a] hover:bg-[#b07d1f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md cursor-pointer">
              Get the Price Sheet
            </OpenModalButton>
            <Link
              href="/location"
              className="btn-anim border-2 border-[#DCA54A] text-[#c8922a] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md"
            >
              Location & Connectivity
            </Link>
            <Link
              href="/about-bhartiya-urban"
              className="btn-anim border-2 border-[#DCA54A] text-[#c8922a] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md"
            >
              About Bhartiya Urban
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
