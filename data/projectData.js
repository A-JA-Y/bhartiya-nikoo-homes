// Project facts shared across the site. Prices, RERA details and contact
// numbers live here so every page and component shows the same figures.

export const SITE_URL = "https://bhartiyanikoohomes8.com";
export const SITE_NAME = "Bhartiya Nikoo Homes 8";

export const BROCHURE = {
  href: "/Nikoo-Homes-8-Brochure.pdf",
  fileName: "Nikoo-Homes-8-Brochure.pdf",
};

export const MASTER_PLAN_PDF = "/nikoo-homes-8-master-plan.pdf";

export const CONTACT = {
  phoneDisplay: "+91 63566 63535",
  phoneTel: "+916356663535",
  whatsapp: "916356663535",
  email: "vishalajitsaria1988@gmail.com",
};

const MAP_QUERY = "Nikoo Homes 8, Thanisandra Main Road, Bellahalli, Bengaluru, Karnataka";
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=14&output=embed`;
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export const RERA = {
  phase1: "PRM/KA/RERA/1251/309/PR/070526/008628",
  phase2: "PRM/KA/RERA/1251/309/PR/070526/008629",
  registeredOn: "7 May 2026",
  launch: "17 June 2026",
  completion: "December 2030",
  portal: "https://rera.karnataka.gov.in",
  // Real Revenue's Karnataka RERA agent registration number.
  // The footer line that shows it stays hidden until this is filled in.
  agentNumber: "",
};

// Starting prices ("onwards") for the hero and summary strips.
export const priceStrip = [
  { config: "Studio", size: "501 sq ft", price: "₹67 Lakh" },
  { config: "2 BHK", size: "1,165 sq ft", price: "₹1.40 Cr" },
  { config: "3 BHK", size: "1,730 sq ft", price: "₹2.04 Cr" },
  { config: "4 BHK + Staff", size: "2,506 sq ft", price: "₹2.94 Cr" },
  { config: "Courtyard Villas", size: "2,800 – 3,230 sq ft", price: "₹5.98 Cr", limited: true },
];

export const trustStrip = [
  "RERA Approved",
  "11 Acres",
  "6,600+ Families Already Delivered",
  "40,000 Sq Ft Clubhouse",
  "75% Open Space",
  "Car-Free Central Spine",
];

export const apartmentPrices = [
  { type: "A1A", config: "Studio", carpet: "345 sq ft", saleable: "501 sq ft", price: "₹67 – 68 Lakh" },
  { type: "B3", config: "1 BHK", carpet: "462 sq ft", saleable: "786 sq ft", price: "₹93 Lakh" },
  { type: "C1A", config: "1 BHK + Study", carpet: "661 sq ft", saleable: "1,088 sq ft", price: "₹1.31 Cr" },
  { type: "D1B", config: "2 BHK", carpet: "725 sq ft", saleable: "1,165 sq ft", price: "₹1.40 Cr" },
  { type: "F1A", config: "2 BHK + Study", carpet: "876 sq ft", saleable: "1,371 sq ft", price: "₹1.59 Cr" },
  { type: "G3", config: "3 BHK", carpet: "1,115 sq ft", saleable: "1,730 sq ft", price: "₹2.04 Cr" },
  { type: "H1B", config: "3 BHK + Study", carpet: "1,308 sq ft", saleable: "2,006 sq ft", price: "₹2.33 Cr" },
  { type: "L1B", config: "3 BHK Duplex Loft", carpet: "1,279 sq ft", saleable: "2,132 sq ft", price: "₹2.59 Cr" },
  { type: "J1A", config: "4 BHK + Staff", carpet: "1,634 sq ft", saleable: "2,506 sq ft", price: "₹2.94 Cr" },
];

export const villaPrices = [
  { type: "3 Bed + Study Courtyard", saleable: "2,800 – 2,900 sq ft", price: "₹5.98 – 6.30 Cr" },
  { type: "4 Bed Courtyard", saleable: "3,100 – 3,230 sq ft", price: "₹6.50 – 6.80 Cr" },
];

export const PRICE_NOTE =
  "Indicative launch pricing, exclusive of GST, stamp duty, registration, floor rise, corpus and statutory charges. Prices are revised release to release — request the current cost sheet.";

export const WORKING_RATES =
  "Working rates: approximately ₹12,000 to ₹12,500 per sq ft on the apartments, and approximately ₹21,000 to ₹21,700 per sq ft on the courtyard villas.";

export const additionalCharges = [
  "GST at 5% on under-construction consideration",
  "Stamp duty and registration at approximately 7.6% combined",
  "Floor rise charges, typically ₹2 to 6 lakh depending on level",
  "Corpus fund and maintenance deposit, typically ₹3 to 5 lakh",
  "Khata, BWSSB, BESCOM and infrastructure charges as per the agreement",
];

export const distances = [
  { destination: "Thanisandra Main Road", distance: "Direct access", note: "Site frontage belt" },
  { destination: "Bhartiya City (mall, hotel, school, BCIT)", distance: "5–7 min drive", note: "Township adjacency" },
  { destination: "Bhartiya Mall of Bengaluru", distance: "2–5 min drive", note: "8 lakh sq ft retail" },
  { destination: "Manyata Tech Park", distance: "Approx 5.6 km", note: "10–15 min off peak" },
  { destination: "Manipal Hospital", distance: "Approx 10 min", note: "Nearest major hospital" },
  { destination: "KR Puram Railway Station", distance: "Approx 11.7 km", note: "Straight line" },
  { destination: "Kempegowda International Airport", distance: "Approx 25 min", note: "Via airport corridor" },
];

export const faqs = [
  {
    q: "Where is Bhartiya Nikoo Homes 8 located?",
    a: "At Bellahalli, just off Thanisandra Main Road in North Bengaluru, on an approximately 11.35-acre parcel about five to seven minutes from the Bhartiya City township.",
  },
  {
    q: "Is Nikoo Homes 8 inside Bhartiya City?",
    a: "No. Nikoo Homes 8 is on a separate parcel at Bellahalli, roughly five to seven minutes' drive from Bhartiya City. Residents have convenient access to the mall, hotel, school and office park, but the project is not within the township boundary.",
  },
  {
    q: "What configurations are available at Nikoo Homes 8?",
    a: "Studios at 501 sq ft, 1 BHK at 786 sq ft, 1 BHK plus study at 1,088 sq ft, 2 BHK at 1,165 sq ft, 2 BHK plus study at 1,371 sq ft, 3 BHK at 1,730 sq ft, 3 BHK plus study at 2,006 sq ft, a 3 BHK duplex loft at 2,132 sq ft, and a 4 BHK with staff quarters at 2,506 sq ft. A limited courtyard villa segment of 2,800 to 3,230 sq ft is also part of the plan.",
  },
  {
    q: "What is the price of Nikoo Homes 8?",
    a: "Apartments start at approximately ₹67 lakh for a studio and run to approximately ₹2.94 crore for the 4 BHK, at a launch rate of roughly ₹12,000 to ₹12,500 per sq ft. Courtyard villas, where released, are indicated at ₹5.98 crore onwards.",
  },
  {
    q: "Is Nikoo Homes 8 RERA approved?",
    a: `Yes. Phase 1 is registered under ${RERA.phase1} and Phase 2 under ${RERA.phase2}, both registered on 7 May 2026.`,
  },
  {
    q: "When is possession for Nikoo Homes 8?",
    a: "The RERA-filed completion date is December 2030.",
  },
  {
    q: "How far is Nikoo Homes 8 from Manyata Tech Park?",
    a: "Approximately 5.6 km in a straight line. Drive time is ten to fifteen minutes off peak and can extend to twenty-five to thirty minutes during rush hour.",
  },
  {
    q: "How many homes are there at Nikoo Homes 8?",
    a: "Approximately 1,010 homes across six towers, A through F, each of two basements plus ground plus sixteen to twenty-four floors.",
  },
  {
    q: "How big is the clubhouse?",
    a: "The Black Swan Club extends to over 40,000 sq ft and includes a rooftop swimming pool, gymnasium, spa, indoor games, library, co-working spaces, a mini theatre, a banquet hall and guest rooms.",
  },
  {
    q: "Will metro connectivity improve for this location?",
    a: "Yes. The Namma Metro Blue Line, Phase 2B, will connect Kasturi Nagar through Nagawara, Veerannapalya, Kempapura and Hebbal to the airport. The Hebbal section is targeted for June 2027 and Nagawara for March 2028.",
  },
  {
    q: "Has Bhartiya Urban delivered projects before?",
    a: "Yes. Nikoo Homes 1 through 5 are completed and occupied, with more than 6,600 families in residence. The group also built and continues to operate Bhartiya Mall of Bengaluru, The Leela Bhartiya City, the BCIT office park and Chaman Bhartiya School.",
  },
  {
    q: "Is home loan available for Nikoo Homes 8?",
    a: "Yes. The project is approved by leading banks and housing finance companies. Our team arranges pre-approval and compares offers across lenders at no cost to you.",
  },
];

export const CONSENT_TEXT =
  "I authorise Real Revenue and its representatives to contact me by phone, SMS, WhatsApp and email regarding this enquiry. This consent overrides my DND/NCPR registration.";
