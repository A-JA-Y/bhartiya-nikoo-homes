

const specFeatures = ["Vitrified tiles in living, dining and kitchen", "Laminated wood in the master bedroom of 2.5 BHK and above", "Granite kitchen platform with stainless steel sink", "UPVC systems for balconies and utility areas"];
const includedItems = ["Concealed copper wiring", "Modular switches", "Geyser provision", "100% DG backup for common areas and lifts"];
const layoutFeatures = ["Bay windows extend the living space", "Study variants in 1, 2 and 3 BHK", "3 BHK duplex loft with a deck", "4 BHK with an attached staff room"];
const homeTypes = [
  { label: "Studio", from: "₹67 L" },
  { label: "1–2 BHK", from: "₹93 L" },
  { label: "3–4 BHK", from: "₹2.04 Cr" },
];

const nearby = {
  Education: ["Chaman Bhartiya School", "Vidyashilp Academy", "Delhi Public School North", "Stonehill International"],
  Healthcare: ["Manipal Hospital", "Aster CMI Hebbal", "Columbia Asia Hebbal"],
  "Workplaces & Retail": ["Manyata Tech Park", "BCIT", "Bhartiya Mall of Bengaluru"],
};

export default function VillaFeatures() {
  return (
    <section
      className="w-full py-12 px-4 sm:px-8"
      style={{ backgroundColor: "#faf6e8" }}
      id="investment-benefits"
    >
      <div className="max-w-5xl mx-auto">
        <h6 className="text-center uppercase mb-3" style={{ color: "#c8922a", letterSpacing: "2.5px", fontSize: "11px", fontWeight: 600 }} data-animate="fade-up">
          Studio to 4 BHK
        </h6>
        <h2
          className="text-center font-bold text-gray-900 mb-10"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", lineHeight: "1.25", color: "#2c1f0e" }}
          data-animate="fade-up"
          data-delay="100"
        >
          Homes, Specifications & Neighbourhood
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-stagger>

          {/* Card 1 — Specifications */}
          <div className="card-anim bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }} data-animate="fade-up">
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Specifications
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Finished to a published standard
            </h3>
            <ul className="space-y-2 mb-4">
              {specFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "0.5px solid #e8dfc8", paddingTop: "10px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                Also included
              </p>
              <div className="flex flex-wrap gap-1.5">
                {includedItems.map((item) => (
                  <span key={item} className="transition-colors duration-300 hover:bg-[#f3e6c4]" style={{ fontSize: "12px", background: "#faf6e8", color: "#7a5c1e", padding: "3px 10px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Space & Layout */}
          <div className="card-anim bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }} data-animate="fade-up">
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Space & Layout
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Nine home types
            </h3>
            <div className="flex gap-2 mb-4">
              {homeTypes.map((v) => (
                <div key={v.label} className="flex-1 text-center py-3 transition-transform duration-300 hover:-translate-y-1" style={{ background: "#faf6e8", border: "0.5px solid #d4c9ae" }}>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#DCA54A" }}>{v.label}</div>
                  <div style={{ fontSize: "11px", color: "#8a7a5a" }}>From {v.from}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {layoutFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — Social Infrastructure */}
          <div className="card-anim bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }} data-animate="fade-up">
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Social Infrastructure
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Everything nearby
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(nearby).map(([category, items]) => (
                <div key={category}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px" }}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="transition-colors duration-300 hover:bg-[#f3e6c4]" style={{ fontSize: "12px", color: "#5c4a2a", background: "#faf6e8", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
