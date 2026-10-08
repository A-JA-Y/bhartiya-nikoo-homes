import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT, RERA } from "@/data/projectData";

// Renders the small Markdown subset used in the page copy: [label](href)
// links and **bold**. Internal links use next/link; the phone number and the
// RERA portal are linked wherever they appear in running text.
const TOKEN = new RegExp(
  [
    String.raw`\[([^\]]+)\]\(([^)\s]+)\)`, // 1, 2: link
    String.raw`\*\*(.+?)\*\*`, // 3: bold
    `(${CONTACT.phoneDisplay.replace(/[+]/g, "\\+")})`, // 4: phone
    String.raw`(rera\.karnataka\.gov\.in)`, // 5: RERA portal
  ].join("|"),
  "g"
);

function renderLink(label: ReactNode, href: string, key: string, className = "text-link") {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link key={key} href={href} className={className}>
        {label}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      key={key}
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

export function renderInline(text: string, keyPrefix = "md"): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    const start = m.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    const key = `${keyPrefix}-${i++}`;
    if (m[1] !== undefined) {
      out.push(renderLink(renderInline(m[1], key), m[2], key));
    } else if (m[3] !== undefined) {
      out.push(
        <strong key={key} className="md-strong">
          {renderInline(m[3], key)}
        </strong>
      );
    } else if (m[4] !== undefined) {
      out.push(renderLink(m[4], `tel:${CONTACT.phoneTel}`, key, "text-link whitespace-nowrap"));
    } else if (m[5] !== undefined) {
      out.push(renderLink(m[5], RERA.portal, key));
    }
    last = start + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Md({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}

// Plain-text version for JSON-LD and attributes.
export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1");
}
