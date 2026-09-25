import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Bhartiya Nikoo Homes 8",
  description:
    "Buyer guides and market insights on Nikoo Homes 8, Thanisandra and North Bangalore — pricing, rental yield, commute and comparisons.",
  alternates: { canonical: "https://bhartiyanikoohomes8.com/blog" },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
