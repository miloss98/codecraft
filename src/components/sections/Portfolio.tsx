import { projects } from "@/data/site";
import { MockPhone, MockWindow, Section } from "@/components/ui";

export function Portfolio() {
  return (
    <Section
      id="primjeri"
      eyebrow="Primjeri"
      title="Kako mogu izgledati vaši projekti"
      intro="Koncept projekti za tipične male biznise. Stvarni radovi dolaze uskoro."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-card border border-line bg-raised transition duration-150 hover:-translate-y-0.5 hover:border-line-strong"
          >
            <div className="relative grid h-56 place-items-center overflow-hidden border-b border-line bg-surface px-6">
              {p.kind === "mobile" ? (
                <MockPhone className="h-44 w-28" />
              ) : (
                <MockWindow
                  variant={p.kind}
                  className="w-full max-w-xs translate-y-6 shadow-none!"
                />
              )}
            </div>
            <div className="p-6">
              <p className="mb-2 text-eyebrow uppercase text-accent">{p.category}</p>
              <h3 className="mb-2 font-display text-heading">{p.title}</h3>
              <p className="mb-4 text-muted">{p.text}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-line-strong px-2.5 py-1 text-sm text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
