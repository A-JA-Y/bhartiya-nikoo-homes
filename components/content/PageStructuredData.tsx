import type { StaticImageData } from "next/image";
import type { PageCopy } from "@/content/pages/types";
import JsonLd from "@/components/content/JsonLd";
import { pageSchema } from "@/lib/structuredData";

export default function PageStructuredData({
  copy,
  type,
  image,
  extra,
}: {
  copy: PageCopy;
  type: Parameters<typeof pageSchema>[1];
  image?: StaticImageData;
  // Merged into the page node, for dates on a dated guide.
  extra?: Record<string, unknown>;
}) {
  return <JsonLd data={pageSchema(copy, type, image?.src, extra)} />;
}
