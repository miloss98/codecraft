import { buildStructuredData } from "@/lib/structured-data";

/** Ubacuje JSON-LD u stranicu. "<" se escape-uje da sadržaj nikad ne zatvori <script> tag. */
export function JsonLd() {
  const json = JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
