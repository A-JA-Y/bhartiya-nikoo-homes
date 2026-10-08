import type { ReactNode } from "react";

export type Tone = "white" | "cream" | "sand" | "ink" | "brown";

const toneClass: Record<Tone, string> = {
  white: "bg-white",
  cream: "bg-cream",
  sand: "bg-sand",
  ink: "on-dark bg-ink text-white",
  brown: "on-dark bg-brown text-white",
};

// Page band with consistent spacing and width. `narrow` keeps a reading
// width on the same left edge as the full-width bands; "center" centres it.
export default function Section({
  id,
  tone = "white",
  narrow = false,
  compact = false,
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  narrow?: boolean | "center";
  compact?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 sm:px-6 ${compact ? "py-10 md:py-14" : "py-12 md:py-16 lg:py-20"} ${toneClass[tone]} ${className}`}
    >
      {narrow === "center" ? (
        <div className="mx-auto max-w-4xl">{children}</div>
      ) : (
        <div className="mx-auto max-w-6xl">{narrow ? <div className="max-w-4xl">{children}</div> : children}</div>
      )}
    </section>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  align = "left",
  as: Tag = "h2",
  className = "",
}: {
  title: string;
  eyebrow?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`} data-animate="fade-up">
      {eyebrow && <p className="eyebrow mb-2.5">{eyebrow}</p>}
      <Tag
        className={`font-semibold leading-tight text-gray-900 [.on-dark_&]:text-white ${
          Tag === "h2"
            ? "text-[1.55rem] sm:text-3xl lg:text-[2.15rem]"
            : "text-xl sm:text-2xl"
        }`}
      >
        {title}
      </Tag>
      <span
        aria-hidden="true"
        className={`mt-4 block h-[2px] w-12 rounded-full bg-gold ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
