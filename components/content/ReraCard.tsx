import Image from "next/image";
import qrCode from "@/assets/rera-karnataka-qr.webp";
import { RERA } from "@/data/projectData";

// Karnataka RERA registration summary with the portal QR code.
export default function ReraCard() {
  return (
    <div className="rounded-2xl border border-line bg-cream p-5 shadow-sm sm:p-6" data-animate="zoom-in">
      <div className="flex items-start gap-4">
        <a
          href={RERA.portal}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:scale-105"
          aria-label="Verify Nikoo Homes 8 on the Karnataka RERA portal"
        >
          <Image src={qrCode} alt="QR code for the Karnataka RERA portal" width={84} height={84} className="block" />
        </a>
        <div className="min-w-0">
          <p className="eyebrow">Karnataka RERA</p>
          <p className="mt-1 text-sm font-semibold text-gray-900">Registered {RERA.registeredOn}</p>
          <p className="text-sm text-gray-600">Completion {RERA.completion}</p>
        </div>
      </div>
      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">Phase 1</dt>
          <dd className="mt-0.5 break-all font-mono text-[13px] text-gray-900">{RERA.phase1}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">Phase 2</dt>
          <dd className="mt-0.5 break-all font-mono text-[13px] text-gray-900">{RERA.phase2}</dd>
        </div>
      </dl>
      <a
        href={RERA.portal}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link mt-5 inline-block text-sm"
      >
        Verify at rera.karnataka.gov.in <span className="arrow-nudge">→</span>
      </a>
    </div>
  );
}
