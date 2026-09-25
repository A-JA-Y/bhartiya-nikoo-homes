import { MAP_EMBED_URL, MAP_LINK_URL } from "@/data/projectData";

const checkItems = [
  "Direct access to Thanisandra Main Road",
  "5–7 min to Bhartiya City — mall, hotel, school and BCIT",
  "2–5 min to Bhartiya Mall of Bengaluru",
  "Manyata Tech Park approx 5.6 km — 10–15 min off peak",
  "Manipal Hospital approx 10 min",
  "Kempegowda International Airport approx 25 min",
  "KR Puram Railway Station approx 11.7 km",
  "Blue Line metro: Hebbal targeted June 2027, Nagawara March 2028",
];

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]" data-animate="fade-up">
          Location & Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight" data-animate="fade-up" data-delay="100">
          Bellahalli, Off Thanisandra Main Road — North Bengaluru
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg" data-animate="fade-right">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              The Honest Version
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              This is the Hebbal–Thanisandra belt — the corridor that Manyata Tech Park
              built and that the airport road made permanent. Manyata is close in
              kilometres, but the drive depends on when you leave: ten to fifteen minutes
              off peak, twenty-five to thirty at nine in the morning. What changes the
              arithmetic is the metro.
            </p>

            <ul className="space-y-4" data-stagger>
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group" data-animate="fade-up">

                  {/* Check Icon */}
                  <span className="text-[#c8922a] mt-1 transition-transform duration-300 group-hover:scale-125">
                    ✓
                  </span>

                  <span className="text-gray-800 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: MAP */}
          <div className="flex-1 w-full" data-animate="fade-left">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5] transition-shadow duration-300 hover:shadow-xl">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Map showing Nikoo Homes 8 at Bellahalli, Thanisandra Main Road"
              ></iframe>
            </div>

            {/* Small CTA */}
            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-anim inline-block mt-3 text-sm text-[#c8922a]"
            >
              View on Google Maps <span className="arrow-nudge">→</span>
            </a>

            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Distances are approximate and measured from the project gate. Drive times vary
              materially with traffic — visit at your own commute hour before deciding.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
