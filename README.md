# CodeCraft

Landing page web agencije. Next.js (App Router) + Tailwind CSS + lucide-react / react-icons.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Gdje se šta mijenja

| Šta | Fajl |
| --- | --- |
| Boje (dark + light), fontovi, veličine teksta, radijusi, sjenke | `tailwind.config.ts` |
| Tekstovi, linkovi (OLX, Instagram, email), usluge, koraci, primjeri projekata | `src/data/site.ts` |
| Sekcije stranice | `src/components/sections/*` |
| Header, Footer, Logo, prekidač teme | `src/components/layout/*` |
| Dugme, kontejner, mockup elementi | `src/components/ui/*` |
| Backend forme (trenutno samo validacija + log) | `src/app/api/contact/route.ts` |

Boju promijenite u `palettes` u `tailwind.config.ts` (jedna vrijednost po temi) i promjena važi svugdje.

## TODO prije lansiranja

- Upisati prave linkove i email u `src/data/site.ts` (`site.contact`).
- Povezati slanje emaila u `src/app/api/contact/route.ts` (Resend, Nodemailer...).
- Zamijeniti koncept projekte pravim radovima.
