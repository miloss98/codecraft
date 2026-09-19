import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "page" | "surface";
  children: React.ReactNode;
};

/** Zajednički omotač za sekcije: naizmjenična pozadina, naslov i uvod. */
export function Section({ id, eyebrow, title, intro, tone = "page", children }: Props) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-16 border-t border-line py-12 md:py-24", tone === "surface" && "bg-surface")}
    >
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-eyebrow uppercase text-accent">{eyebrow}</p>
          <h2 className="font-display text-display-lg-sm md:text-display-lg">{title}</h2>
          {intro && <p className="mt-3 text-muted">{intro}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
