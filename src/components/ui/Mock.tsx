import { cn } from "@/lib/cn";

/** Apstraktni mockup elementi (bez slika): koriste se u Hero i Portfolio sekciji. */
const Line = ({ w, accent, h }: { w: string; accent?: boolean; h?: boolean }) => (
  <div className={cn("rounded-full", h ? "h-5" : "h-2.5", accent ? "bg-accent" : "bg-line-strong")} style={{ width: w }} />
);

export function MockWindow({ className, variant = "web" }: { className?: string; variant?: "web" | "app" }) {
  return (
    <div aria-hidden className={cn("overflow-hidden rounded-card border border-line-strong bg-raised shadow-card", className)}>
      <div className="flex gap-1.5 border-b border-line px-4 py-3.5">
        <i className="size-2.5 rounded-full bg-line-strong" />
        <i className="size-2.5 rounded-full bg-line-strong" />
        <i className="size-2.5 rounded-full bg-line-strong" />
      </div>
      {variant === "web" ? (
        <div className="grid gap-3 p-6">
          <Line w="60%" accent h />
          <Line w="90%" />
          <Line w="75%" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            <b className="h-16 rounded-control bg-accent/15" />
            <b className="h-16 rounded-control border border-line bg-surface" />
            <b className="h-16 rounded-control border border-line bg-surface" />
          </div>
          <div className="mt-3"><Line w="40%" /></div>
        </div>
      ) : (
        <div className="grid grid-cols-[72px_1fr] gap-4 p-6">
          <div className="grid content-start gap-2.5">
            <Line w="100%" accent />
            <Line w="80%" />
            <Line w="90%" />
            <Line w="70%" />
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-3 gap-2">
              <b className="h-12 rounded-control bg-accent/15" />
              <b className="h-12 rounded-control border border-line bg-surface" />
              <b className="h-12 rounded-control border border-line bg-surface" />
            </div>
            <b className="h-20 rounded-control border border-line bg-surface" />
            <Line w="55%" />
          </div>
        </div>
      )}
    </div>
  );
}

export function MockPhone({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("grid content-start gap-2 rounded-card border border-field bg-surface px-3 py-4 shadow-card", className)}>
      <Line w="60%" accent />
      <Line w="90%" />
      <Line w="75%" />
      <div className="mt-2 h-6 rounded-md bg-accent" />
    </div>
  );
}
