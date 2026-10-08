import Image, { type StaticImageData } from "next/image";

// Rounded image in a fixed aspect box, with an optional caption.
export default function Figure({
  image,
  alt,
  caption,
  aspect = "4/3",
  sizes = "(max-width: 1024px) 100vw, 480px",
  position = "center",
  className = "",
  priority = false,
  contain = false,
}: {
  image: StaticImageData;
  alt: string;
  caption?: string;
  aspect?: string;
  sizes?: string;
  position?: string;
  className?: string;
  priority?: boolean;
  contain?: boolean;
}) {
  return (
    <figure className={`group ${className}`} data-animate="zoom-in">
      <div
        className={`relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 ${
          contain ? "bg-white" : "bg-sand"
        }`}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`${contain ? "object-contain p-2" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.04]`}
          style={{ objectPosition: position }}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-gray-500 [.on-dark_&]:text-white/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
