import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { SITE_NAME, SITE_URL } from "@/data/projectData";

const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/nikoo-homes-8-og.webp`,
  width: 1200,
  height: 630,
  alt: "Aerial view of Bhartiya Nikoo Homes 8 towers, the Central Spine and the Black Swan Club at dusk",
};

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

// Per-page title, description, canonical, Open Graph and Twitter tags. Every
// page sets its own og:title and og:url so shares never fall back to the home
// page's values.
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: StaticImageData;
  imageAlt?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? { url: image.src, width: image.width, height: image.height, alt: imageAlt ?? title }
    : DEFAULT_OG_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [ogImage],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
