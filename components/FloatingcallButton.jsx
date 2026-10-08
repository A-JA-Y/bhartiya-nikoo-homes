import { FaPhoneAlt } from "react-icons/fa";
import { CONTACT } from "@/data/projectData";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${CONTACT.phoneTel}`}
      aria-label={`Call us at ${CONTACT.phoneDisplay}`}
      title={`Call ${CONTACT.phoneDisplay}`}
      className="
        fixed bottom-30 right-6 z-[1000]
        hidden md:flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-blue-600 text-white
        shadow-xl
        hover:bg-blue-700
        hover:scale-110
        transition-all duration-300
        animate-float
      "
    >
      <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping pointer-events-none" aria-hidden="true" />
      <FaPhoneAlt size={28} className="relative" />
    </a>
  );
}
