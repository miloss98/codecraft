import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/IconTile";

export function Services() {
  return (
    <Section id="usluge" eyebrow="Usluge" title="Šta gradimo za vas" intro="Jedan tim za sve digitalno što vašem biznisu treba.">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map(({ icon, title, text }) => (
          <article key={title} className="flex flex-col rounded-card border border-line bg-raised p-6 transition duration-150 hover:-translate-y-0.5 hover:border-line-strong">
            <IconTile icon={icon} />
            <h3 className="mb-2 font-display text-heading">{title}</h3>
            <p className="text-muted">{text}</p>
            <a href="#kontakt" className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent transition-colors hover:text-accent-hover">
              Zatražite ponudu <ArrowRight className="size-4" aria-hidden />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
