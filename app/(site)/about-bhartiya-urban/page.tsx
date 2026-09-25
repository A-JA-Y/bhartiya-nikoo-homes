import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/bhartiya-urban-nikoo-homes-logo.webp";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Bhartiya Urban — Developer Profile | Nikoo Homes 8",
  description:
    "Bhartiya Urban, the real estate arm of the Bhartiya Group, built and still operates Bhartiya City. Nikoo Homes 1 to 5 are delivered, with 6,600+ families in residence.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/about-bhartiya-urban" },
};

const timeline = [
  { phase: "Nikoo Homes 1 to 5", status: "Delivered and occupied", detail: "More than 6,600 families in residence at Bhartiya City." },
  { phase: "Nikoo Homes 6", status: "In delivery", detail: "Kogilu." },
  { phase: "Nikoo Homes 7", status: "In delivery", detail: "Sadahalli." },
  { phase: "Nikoo Homes 8", status: "Launched June 2026", detail: "Bellahalli, off Thanisandra Main Road — 1,010 homes on 11.35 acres." },
  { phase: "Nikoo Homes 9", status: "Pre-launch", detail: "KIADB Bagalur." },
];

const bhartiyaCity = [
  "Bhartiya Mall of Bengaluru — roughly 8 lakh sq ft of leasable retail and 150+ stores, opened October 2021",
  "The Leela Bhartiya City — a 281-key luxury hotel and convention centre",
  "BCIT — the office and IT-SEZ park",
  "Chaman Bhartiya School",
  "A performing arts pavilion and retail high street",
  "A four-acre central park and over two hundred gardens",
];

export default function AboutBhartiyaUrbanPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About Bhartiya Urban"
        subtitle="The real estate arm of the Bhartiya Group — the developer that built Bhartiya City, and still runs it."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0" data-animate="fade-right">
            <Image
              src={logo}
              alt="Bhartiya Urban | Nikoo Homes"
              width={260}
              height={72}
              className="w-auto h-auto max-w-[240px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4" data-animate="fade-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Bhartiya Urban — Developer Profile
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              The Bhartiya Group was founded in 1987 by Snehdeep Aggarwal, beginning as a
              Punjab-based carpet and leather business and growing into one of India&apos;s
              largest leather goods and fashion exporters, listed as Bhartiya International
              Limited with operations in Italy and China.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bhartiya Urban is the group&apos;s real estate arm. Its defining project is
              Bhartiya City, a 125-acre integrated development near Hebbal launched in 2012 and
              planned for approximately 17 million sq ft across eight districts, with a four-acre
              central park and over two hundred gardens.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The distinguishing feature of the model is that Bhartiya Urban retains and operates
              these assets rather than selling and exiting. Ashwinder R Singh is Chief Executive
              Officer of the real estate business.
            </p>

            <ul className="flex flex-col gap-2 mt-2" data-stagger>
              {bhartiyaCity.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm" data-animate="fade-up">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3" data-animate="fade-up">
            The Nikoo Homes Programme
          </h2>
          <p className="text-gray-600 text-sm text-center max-w-2xl mx-auto mb-10" data-animate="fade-up">
            Nikoo Homes 8 is the eighth phase of a residential programme that has actually
            completed — not a first-time promise.
          </p>

          <ol className="relative border-l-2 border-[#e5dcc5] ml-3 md:ml-6 flex flex-col gap-8" data-stagger>
            {timeline.map((item) => (
              <li key={item.phase} className="relative pl-8 group" data-animate="fade-left">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#DCA54A] transition-transform duration-300 group-hover:scale-125" />
                <p className="text-xs uppercase tracking-widest text-[#c8922a] font-semibold">{item.status}</p>
                <h3 className="text-lg font-bold text-gray-900">{item.phase}</h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-animate="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Pipeline</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              The company has stated a pipeline of over 5,000 apartments and approximately 9
              million sq ft across roughly fifteen months, representing more than ₹9,000 crore
              of fresh inventory, with expansion planned into Whitefield and Sarjapur.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center" data-stagger>
            {[
              { value: "5,000+", label: "Apartments in the pipeline" },
              { value: "~9 mn", label: "Sq ft in roughly 15 months" },
              { value: "₹9,000 Cr+", label: "Fresh inventory" },
            ].map((stat) => (
              <div key={stat.label} className="card-anim bg-[#FAF8F4] border border-[#e5dcc5] rounded-lg p-4" data-animate="zoom-in">
                <p className="text-lg md:text-xl font-bold text-[#c8922a]">{stat.value}</p>
                <p className="text-[11px] text-gray-500 mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 flex flex-wrap gap-3 justify-center" data-animate="fade-up">
          <Link
            href="/about-nikoo-homes-8"
            className="btn-anim inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
          >
            Explore Nikoo Homes 8
          </Link>
          <Link
            href="/bhartiya-city"
            className="btn-anim inline-block border-2 border-[#DCA54A] text-[#c8922a] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
          >
            About Bhartiya City
          </Link>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
