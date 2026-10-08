"use client";
import { FaDownload } from "react-icons/fa";
import { BROCHURE } from "@/data/projectData";

import { useModal } from "./ModalContext";
import useLeadUnlocked, { downloadBrochure } from "./useLeadUnlocked";

export default function StickyDownloadButton() {
  const { openModal } = useModal();
  const unlocked = useLeadUnlocked();
  const handleClick = (e) => {
    e.preventDefault();
    if (unlocked) {
      downloadBrochure(BROCHURE);
    } else {
      openModal();
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Download the Nikoo Homes 8 brochure"
      className="
        slide-in-right group
        fixed bottom-56 right-0
        hidden md:flex flex-col items-center justify-center
        bg-[#c8952a] text-white font-semibold
        shadow-lg transition-all duration-300
        hover:bg-[#b07d1f] hover:pr-[11px]
        px-[7px] py-[10px] z-[1000]
        rounded-l-md rounded-r-none cursor-pointer
      "
    >
      <FaDownload size={16} className="rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />

      <div className="mt-[6px] flex flex-col items-center text-[11px] font-semibold leading-[1.1]">
        {"Brochure".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </button>
  );
}
