"use client";
import dynamic from "next/dynamic";
import { useModal } from "./ModalContext";
const LiteYT = dynamic(() => import("@/components/LiteYT"), {
  ssr: false,
});
export default function WalkthroughSection() {
  const { openModal } = useModal();
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="walkthrough">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3" data-animate="fade-up">
            Discover Life at Nikoo Homes
          </h6>

          <h2 className="text-3xl   md:text-4xl font-bold text-gray-900" data-animate="fade-up" data-delay="100">
            The Nikoo Way of Life, on Film
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto" data-animate="fade-up" data-delay="200">
            The developer&apos;s own film on life in a Nikoo Homes community — the
            model Nikoo Homes 8 brings to Bellahalli.
          </p>
        </div>


        <div className="relative w-full rounded-xl overflow-hidden shadow-lg max-w-[720px] mx-auto transition-shadow duration-300 hover:shadow-2xl" data-animate="zoom-in">
          <div className="aspect-video w-full h-full">
            <LiteYT />
          </div>
        </div>


        <div className="text-center max-w-xl mx-auto" data-animate="fade-up">
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
            Studios at ₹67 lakh, seven minutes from an eight-lakh-sq-ft mall.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            The smallest homes in the project are the ones investors ask about first, and
            they are released in small batches. Ask for the current list.
          </p>

          <button
            type="button"
            onClick={() => openModal()}
            className="btn-anim inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase cursor-pointer"
          >
            Check Studio Availability
          </button>
        </div>

      </div>
    </section>
  );
}
