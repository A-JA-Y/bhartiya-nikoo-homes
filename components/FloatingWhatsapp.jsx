import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/data/projectData";

const MESSAGE =
  "Hi, I am interested in Bhartiya Nikoo Homes 8, Thanisandra. Please share the price sheet and details.";

export default function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${CONTACT.phoneDisplay}`}
      title={CONTACT.phoneDisplay}
      className="
        fixed bottom-6 right-3 z-[1000]
        hidden md:flex items-center justify-center
        w-16 h-16
        rounded-full bg-[#25D366] text-white
        shadow-xl
        hover:bg-[#1ebe57] hover:scale-110
        transition-all duration-300
        animate-bounce
      "
    >
      <FaWhatsapp
        size={34}
        className="animate-pulse"
      />
    </a>
  );
}
