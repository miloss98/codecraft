import { ArrowRight } from "lucide-react";
import { hero } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MockPhone, MockWindow } from "@/components/ui/Mock";

export function Hero() {
  return (
    <section className="pb-12 pt-8 md:pb-24 md:pt-16">
      <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="mb-6 inline-flex animate-badge-glow items-center rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-sm text-muted">
            {hero.badge}
          </span>
          <h1 className="mb-6 font-display text-display-xl-sm md:text-display-xl">
            {hero.titleLine1}
            <br />
            <span className="text-accent">{hero.titleLine2}</span>
          </h1>
          <p className="mb-8 max-w-[520px] text-body-lg text-muted">{hero.lead}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#kontakt">
              {hero.primaryCta} <ArrowRight className="size-[18px]" aria-hidden />
            </Button>
            <Button href="#usluge" variant="secondary">{hero.secondaryCta}</Button>
          </div>
        </div>
        <div className="relative pb-8 pr-8">
          <MockWindow />
          <MockPhone className="absolute bottom-0 right-0 h-[196px] w-28" />
        </div>
      </Container>
    </section>
  );
}
