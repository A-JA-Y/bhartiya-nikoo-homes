import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Bhartiya Nikoo Homes 8",
  description:
    "Project and infrastructure updates for Nikoo Homes 8, Thanisandra and North Bangalore — launch news, metro timelines and more.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/news" },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
