import { services, site } from "@/data/site";

const abs = (path: string) => `${site.url}${path}`;

/** Profil link vrijedi samo ako ima putanju (npr. /codecraft), ne samo početnu stranu nekog servisa. */
const isRealProfile = (url: string) => {
  try {
    return new URL(url).pathname.length > 1;
  } catch {
    return false;
  }
};

/**
 * Structured data (JSON-LD) za Google: organizacija/usluge, web sajt i stranica.
 * Profili (OLX, Instagram) ulaze u sameAs tek kad u src/data/site.ts upišete prave linkove.
 */
export function buildStructuredData() {
  const orgId = `${site.url}/#organization`;
  const siteId = `${site.url}/#website`;
  const pageId = `${site.url}/#webpage`;
  const logoId = `${site.url}/#logo`;

  const sameAs = [site.contact.olx, site.contact.instagram].filter(isRealProfile);
  const hasEmail = !site.contact.email.endsWith(".example");

  const organization = {
    "@type": "ProfessionalService",
    "@id": orgId,
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    logo: { "@type": "ImageObject", "@id": logoId, url: abs(site.logo.path), width: site.logo.size, height: site.logo.size },
    image: abs(site.ogImage.path),
    areaServed: site.areaServed.map((name) => ({ "@type": "Country", name })),
    knowsLanguage: [site.language],
    ...(hasEmail && { email: site.contact.email }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(hasEmail && {
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: site.contact.email, availableLanguage: [site.language] },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text, provider: { "@id": orgId } },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": siteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": orgId },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": pageId,
    url: site.url,
    name: site.seoTitle,
    description: site.description,
    inLanguage: site.language,
    isPartOf: { "@id": siteId },
    about: { "@id": orgId },
    primaryImageOfPage: { "@type": "ImageObject", url: abs(site.ogImage.path), width: site.ogImage.width, height: site.ogImage.height },
  };

  return { "@context": "https://schema.org", "@graph": [organization, website, webpage] };
}
