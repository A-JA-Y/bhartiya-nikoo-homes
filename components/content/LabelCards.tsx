import type { IconType } from "react-icons";
import Md from "./Md";

// Splits "**Label:** text" (or "**Label** text") into its parts.
export function splitLabel(item: string) {
  const m = item.match(/^\*\*(.+?)\*\*:?\s*(.*)$/);
  return m ? { label: m[1].replace(/[:.]$/, ""), text: m[2] } : { label: "", text: item };
}

// A list from the copy whose items start with a bold label, laid out as cards.
export default function LabelCards({
  items,
  columns = 3,
  numbered = false,
  icons,
  className = "",
}: {
  items: string[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
  icons?: IconType[];
  className?: string;
}) {
  const grid = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <ul className={`grid grid-cols-1 gap-4 ${grid} ${className}`} data-stagger>
      {items.map((item, i) => {
        const { label, text } = splitLabel(item);
        const Icon = icons?.[i % icons.length];
        return (
          <li
            key={item}
            data-animate="fade-up"
            className="card-anim flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm [.on-dark_&]:border-white/10 [.on-dark_&]:bg-white/5"
          >
            {(numbered || Icon) && (
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f6ecd4] text-sm font-semibold text-gold-ink [.on-dark_&]:bg-gold-light/15 [.on-dark_&]:text-gold-light">
                {Icon ? <Icon aria-hidden="true" /> : i + 1}
              </span>
            )}
            {label && (
              <h3 className="text-base font-semibold leading-snug text-gray-900 [.on-dark_&]:text-white">{label}</h3>
            )}
            <p className="mt-1.5 text-sm leading-relaxed text-gray-600 [.on-dark_&]:text-white/75">
              <Md text={text} />
            </p>
          </li>
        );
      })}
    </ul>
  );
}
