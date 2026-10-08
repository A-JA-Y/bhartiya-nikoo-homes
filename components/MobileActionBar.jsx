"use client";

import { FaDownload, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BROCHURE, CONTACT } from "@/data/projectData";
import { useModal } from "./ModalContext";
import useLeadUnlocked, { downloadBrochure } from "./useLeadUnlocked";

const MESSAGE =
  "Hi, I am interested in Bhartiya Nikoo Homes 8, Thanisandra. Please share the price sheet and details.";

// Phone-only bar pinned to the bottom of the screen. It replaces the floating
// call, WhatsApp and brochure buttons below md, which otherwise sit on top of
// the copy on a narrow screen.
export default function MobileActionBar() {
  const { openModal } = useModal();
  const unlocked = useLeadUnlocked();

  const item =
    "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors active:scale-95";

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-[35] border-t border-black/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_-12px_rgba(20,16,4,0.45)] backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-3">
        <a href={`tel:${CONTACT.phoneTel}`} className={`${item} text-gray-900`}>
          <FaPhoneAlt aria-hidden="true" className="text-base text-[#8b6914]" />
          Call
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} text-gray-900`}
        >
          <FaWhatsapp aria-hidden="true" className="text-lg text-[#1fa855]" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => (unlocked ? downloadBrochure(BROCHURE) : openModal())}
          className={`${item} bg-[#c8952a] text-white`}
        >
          <FaDownload aria-hidden="true" className="text-base" />
          Brochure
        </button>
      </div>
    </nav>
  );
}
