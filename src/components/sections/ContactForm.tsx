"use client";

import { useEffect, useRef, useState } from "react";
import { CircleCheck, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-control border border-field bg-surface px-4 py-3.5 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-2 focus:outline-offset-1 focus:outline-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  // Nakon uspješnog slanja fokus ide na poruku, da čitači ekrana i tastatura ne "izgube" mjesto.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Slanje nije uspjelo.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Slanje nije uspjelo.");
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" aria-labelledby="kontakt-naslov" className="scroll-mt-16 border-t border-line py-12 md:py-24">
      <Container>
        <div className="grid gap-8 rounded-card border border-line bg-raised p-6 md:grid-cols-[.9fr_1.1fr] md:gap-12 md:p-12">
          <div>
            <p className="mb-3 text-eyebrow uppercase text-accent">Kontakt</p>
            <h2 id="kontakt-naslov" className="font-display text-display-lg-sm md:text-display-lg">Imate ideju? Pošaljite nam poruku</h2>
            <p className="mt-3 text-muted">Opišite ukratko šta vam treba. Javljamo se s konkretnim prijedlogom, bez obaveze.</p>
          </div>

          {status === "success" ? (
            <div ref={successRef} tabIndex={-1} role="status" className="grid content-center justify-items-start gap-3 outline-none">
              <CircleCheck className="size-10 text-accent" aria-hidden />
              <h3 className="font-display text-heading">Poruka je poslata</h3>
              <p className="text-muted">Hvala vam! Javljamo se u najkraćem roku.</p>
              <Button variant="secondary" onClick={() => setStatus("idle")}>Pošalji novu poruku</Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} aria-busy={status === "sending"} aria-describedby={status === "error" ? "forma-greska" : undefined} className="grid gap-6">
              <div className="grid gap-2">
                <label htmlFor="ime" className="text-[15px] font-medium">Ime</label>
                <input id="ime" name="name" type="text" required minLength={2} autoComplete="name" placeholder="Vaše ime" className={fieldClass} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-[15px] font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="vas@email.com" className={fieldClass} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="poruka" className="text-[15px] font-medium">Kratka poruka</label>
                <textarea id="poruka" name="message" required minLength={10} rows={5} placeholder="Npr. trebam sajt za frizerski salon s online zakazivanjem" className={`${fieldClass} min-h-32 resize-y`} />
              </div>
              {status === "error" && (
                <p id="forma-greska" role="alert" className="text-sm font-medium text-signal">Greška: {message}</p>
              )}
              <Button type="submit" disabled={status === "sending"} className="justify-self-start max-md:justify-self-stretch">
                {status === "sending" ? <Loader2 className="size-[18px] animate-spin" aria-hidden /> : <Send className="size-[18px]" aria-hidden />}
                {status === "sending" ? "Šaljem..." : "Pošalji"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
