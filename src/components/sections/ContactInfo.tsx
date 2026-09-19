import { ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/data/site";
import { Container } from "@/components/ui";

export function ContactInfo() {
  return (
    <section aria-label="Kontakt podaci" className="border-t border-line bg-surface py-12 md:py-16">
      <Container>
        <ul className="grid gap-4 md:grid-cols-3">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="min-w-0">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-card border border-line bg-raised p-5 transition duration-150 hover:border-line-strong"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-control bg-accent/10 text-accent">
                  <Icon className="size-6" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display font-semibold">{label}</span>
                  <span className="block truncate text-sm text-muted">{value}</span>
                  {href.startsWith("http") && (
                    <span className="sr-only">(otvara se u novom tabu)</span>
                  )}
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
