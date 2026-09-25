import { FaBuilding, FaUsers, FaRupeeSign, FaKey, FaTree, FaCar, FaSubway, FaCalendarAlt } from "react-icons/fa";

export default function ReasonsToInvest() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3" data-animate="fade-up">
            Why Buy Here
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-animate="fade-up" data-delay="100">
            Who Will Be Responsible for It in 2035?
          </h2>

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto" data-animate="fade-up" data-delay="200">
            At most projects the answer is a residents&apos; association arguing with a
            contracted facility-management firm, with the developer long gone. Bhartiya
            Urban runs a build-to-own model — and a developer whose income depends on the
            neighbourhood still being good in ten years has a structural reason to keep it good.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">

          {/* Left: Key Reasons */}
          <div data-animate="fade-right">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Reasons
            </h4>

            <ul className="space-y-4" data-stagger>
              {[
                { icon: <FaBuilding />, text: "Build-to-own: the mall, hotel, office park and school at Bhartiya City are retained and operated" },
                { icon: <FaUsers />, text: "Nikoo Homes 1 to 5 delivered, with 6,600+ families resident" },
                { icon: <FaRupeeSign />, text: "Launch pricing near ₹12,000 per sq ft — competitive in the Thanisandra belt" },
                { icon: <FaKey />, text: "Studio and 1 BHK stock at ₹67–93 lakh, a rental play on the Manyata tenant base" },
                { icon: <FaTree />, text: "75% open space around a car-free Central Spine" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group" data-animate="fade-up">
                  <span className="text-[#DCA54A] text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Honest risks */}
          <div data-animate="fade-left">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Worth Weighing
            </h4>

            <ul className="space-y-4" data-stagger>
              {[
                { icon: <FaCar />, text: "Hebbal, the Outer Ring Road and Hennur Road congest badly at rush hour" },
                { icon: <FaSubway />, text: "The Blue Line metro is 2027 to 2028, not today" },
                { icon: <FaCalendarAlt />, text: "Buy for a 2028-onward commute, not a 2026 one" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group" data-animate="fade-up">
                  <span className="text-[#DCA54A] text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Closing */}

          </div>

        </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center" data-animate="fade-up">
              On price, launch pricing at roughly ₹12,000 per sq ft in the Thanisandra belt is
              competitive against TVS Emerald Auralis, Casagrand Estancia at Kogilu, Century Bliss
              and Century Immencity. The risk to underwrite honestly is traffic.
            </p>
      </div>
    </section>
  );
}
