import { contactInfo, nav, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-12">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav aria-label="Linkovi u podnožju" className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="font-medium text-muted transition-colors hover:text-ink">{l.label}</a>
            ))}
            <a href="#kontakt" className="font-medium text-muted transition-colors hover:text-ink">Kontakt</a>
          </nav>
          <ul className="flex gap-3">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="grid size-10 place-items-center rounded-control border border-line text-muted transition-colors hover:border-line-strong hover:text-ink">
                  <Icon className="size-5" aria-hidden />
                  {href.startsWith("http") && <span className="sr-only">(otvara se u novom tabu)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-sm text-muted">
          {site.tagline} © {new Date().getFullYear()} {site.name}. Sva prava zadržana.
        </p>
      </Container>
    </footer>
  );
}
