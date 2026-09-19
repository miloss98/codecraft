import { nav } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur">
      <Container className="flex items-center justify-between gap-3 py-4">
        <Logo />
        <nav aria-label="Glavna navigacija" className="flex items-center gap-3 sm:gap-6">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="hidden text-[15px] font-medium text-muted transition-colors hover:text-ink md:block">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <Button href="#kontakt" size="sm" className="max-[429px]:hidden">Kontakt</Button>
        </nav>
      </Container>
    </header>
  );
}
