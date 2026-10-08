import Link from "next/link";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/seo";

export type Crumb = { name: string; href: string };

// Visible trail plus the matching BreadcrumbList. The current page is the
// last crumb and is not a link.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-[11px] sm:text-xs text-white/70">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {trail.map((crumb, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className="text-white/90">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.href} className="hover:text-gold-light transition-colors">
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true" className="text-white/40">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.name,
            item: absoluteUrl(crumb.href),
          })),
        }}
      />
    </>
  );
}
