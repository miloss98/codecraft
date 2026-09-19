import { whyUs } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/IconTile";

export function WhyUs() {
  return (
    <Section id="zasto" tone="surface" eyebrow="Zašto CodeCraft" title="Tri razloga da nam povjerite projekat" intro="Mali tim, jasan proces i projekti koje isporučujemo na vrijeme.">
      <div className="grid gap-6 md:grid-cols-3">
        {whyUs.map(({ icon, title, text }) => (
          <article key={title} className="rounded-card border border-line bg-raised p-6 transition duration-150 hover:-translate-y-0.5 hover:border-line-strong">
            <IconTile icon={icon} />
            <h3 className="mb-2 font-display text-heading">{title}</h3>
            <p className="text-muted">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
