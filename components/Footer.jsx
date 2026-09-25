import Link from "next/link";
import { footerNavLinks } from "@/data/siteNav";
import { CONTACT, RERA } from "@/data/projectData";

export default function Footer() {
  const half = Math.ceil(footerNavLinks.length / 2);
  const col1 = footerNavLinks.slice(0, half);
  const col2 = footerNavLinks.slice(half);

  return (
    <footer className="w-full bg-[#141004] border-t border-[rgba(242,242,242,0.11)] px-[30px] py-[20px] font-[400]">
      <div className="flex flex-col m-auto max-w-5xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-2">
          <div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Bhartiya Nikoo Homes 8
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Studio to 4 BHK homes and a limited courtyard villa release by Bhartiya Urban at
              Bellahalli, off Thanisandra Main Road, North Bengaluru.
            </p>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mt-5 mb-2">
              Project Site
            </p>
            <p className="text-gray-300 text-xs leading-relaxed">
              Bellahalli, off Thanisandra Main Road, Bengaluru, Karnataka 560064
            </p>
          </div>

          {/* Quick Links — two sub-columns */}
          <div className="lg:col-span-2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="flex flex-col gap-2">
                {col1.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block text-gray-300 text-xs hover:text-[#DCA54A] hover:translate-x-1 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {col2.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block text-gray-300 text-xs hover:text-[#DCA54A] hover:translate-x-1 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Noida Office
            </p>
            <div className="flex items-start gap-1.5 text-gray-300 text-xs mb-3">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              19th Floor, Etherea, Bhutani Alphathum Tower B, Sector 90, Noida, Uttar Pradesh 201304, India
            </div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Mumbai Office
            </p>
            <div className="flex items-start gap-1.5 text-gray-300 text-xs mb-3">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              LG 32 1/2, Indira Nagar, Sunderbaug, Kamani, Kurla, Mumbai 400070, India
            </div>
            <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-[#DCA54A] transition-colors">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-[#DCA54A] transition-colors mt-2 break-all">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
              </svg>
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-[11px] text-gray-300 leading-relaxed mb-2">
            Karnataka RERA — Phase 1: {RERA.phase1} · Phase 2: {RERA.phase2} ·{" "}
            <a href={RERA.portal} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#DCA54A]">
              rera.karnataka.gov.in
            </a>
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Disclaimer: Real Revenue is an authorised channel partner. This website is a
            marketing initiative and is not the official website of Bhartiya Urban. All
            images, plans, specifications and amenity descriptions are indicative and subject
            to change by the developer and the competent authority. Prices are indicative,
            exclusive of taxes and statutory charges, and subject to revision without notice.
            Nothing on this site constitutes an offer or a contract. Please refer to the
            RERA-registered particulars and the agreement to sell before making any purchase
            decision.
            {RERA.agentNumber && ` Karnataka RERA Agent Registration: ${RERA.agentNumber}.`}
          </p>
          <hr className="border-t border-gray-700 mt-3" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          <p className="text-[#fff] text-xs tracking-wide">
            Copyright &copy; 2026{" "}
            <span className="font-bold">RealRevenue</span> &mdash; Authorised Channel Partner
          </p>
          <span className="text-white/20 hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="text-[#fff] text-xs hover:text-[#DCA54A] transition-colors">
            Privacy Policy / Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
