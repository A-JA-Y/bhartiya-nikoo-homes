import Image, { type StaticImageData } from "next/image";

export type StripImage = { image: StaticImageData; alt: string; caption?: string; position?: string };

// A row of captioned images: a swipeable rail on phones, a grid from md up.
export default function ImageStrip({
  images,
  columns = 3,
  aspect = "4/3",
  className = "",
}: {
  images: StripImage[];
  columns?: 2 | 3 | 4;
  aspect?: string;
  className?: string;
}) {
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <ul className={`rail md:mx-0 md:grid-flow-row md:overflow-visible md:px-0 ${grid} ${className}`} data-stagger>
      {images.map((item) => (
        <li key={item.alt} data-animate="fade-up">
          <figure className="group">
            <div
              className="relative overflow-hidden rounded-2xl bg-sand shadow-md ring-1 ring-black/5"
              style={{ aspectRatio: aspect }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={`(max-width: 768px) 78vw, ${Math.round(1100 / columns)}px`}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: item.position ?? "center" }}
              />
              {item.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-white">
                  {item.caption}
                </figcaption>
              )}
            </div>
          </figure>
        </li>
      ))}
    </ul>
  );
}
