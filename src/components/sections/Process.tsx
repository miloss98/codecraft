import { processSteps } from "@/data/site";
import { Section } from "@/components/ui";
import { cn } from "@/lib/cn";

export function Process() {
  return (
    <Section
      id="proces"
      tone="surface"
      eyebrow="Kako radimo"
      title="Četiri koraka do launch-a"
      intro="Bez iznenađenja: u svakom trenutku znate gdje smo i šta slijedi."
    >
      <ol className="grid gap-6 md:grid-cols-4">
        {processSteps.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className={cn("border-t-2 pt-6", i === 0 ? "border-accent" : "border-line-strong")}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-sm font-semibold tracking-[0.08em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="size-5 text-muted" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="mb-2 text-title">{title}</h3>
            <p className="text-[15px] leading-6 text-muted">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
