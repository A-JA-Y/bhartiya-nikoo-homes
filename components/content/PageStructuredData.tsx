import type { StaticImageData } from "next/image";
import type { PageCopy } from "@/content/pages/types";
import JsonLd from "@/components/content/JsonLd";
import { pageSchema } from "@/lib/structuredData";

export default function PageStructuredData({
  copy,
  type,
  image,
}: {
  copy: PageCopy;
  type: Parameters<typeof pageSchema>[1];
  image?: StaticImageData;
}) {
  return <JsonLd data={pageSchema(copy, type, image?.src)} />;
}
