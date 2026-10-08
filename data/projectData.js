// Project facts shared across the site: RERA details, contact numbers, map
// and download links. Page copy, including prices and FAQs, lives in
// content/pages, one module per page.

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

export const CONSENT_TEXT =
  "I authorise Real Revenue and its representatives to contact me by phone, SMS, WhatsApp and email regarding this enquiry. This consent overrides my DND/NCPR registration.";
