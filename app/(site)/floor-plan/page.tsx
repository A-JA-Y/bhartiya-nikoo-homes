import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Nikoo Homes 8 Floor Plans — Studio to 4 BHK",
  description:
    "Nikoo Homes 8 floor plans for all nine unit types — studio (501 sq ft) to 4 BHK + staff (2,506 sq ft) — with carpet and saleable areas, prices and room-by-room layouts.",
  alternates: {
    canonical: "https://bhartiyanikoohomes8.com/floor-plan",
  },
  keywords:
    "Nikoo Homes 8 floor plan, Nikoo Homes 8 studio floor plan, Nikoo Homes 8 2 BHK floor plan, Nikoo Homes 8 3 BHK floor plan, Nikoo Homes 8 4 BHK floor plan",
  openGraph: {
    title: "Nikoo Homes 8 Floor Plans — Studio to 4 BHK",
    description:
      "All nine Nikoo Homes 8 unit types with carpet and saleable areas, prices and room-by-room layouts.",
    url: "https://bhartiyanikoohomes8.com/floor-plan",
    type: "website",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Nikoo Homes 8 Floor Plans"
        subtitle="Nine apartment layouts from a 501 sq ft studio to a 2,506 sq ft 4 BHK with staff room — plus the master plan."
      />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
