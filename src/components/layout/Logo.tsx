import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={cn("size-8 shrink-0", className)}
    >
      <path
        d="M34.7 15A14 14 0 1 0 34.7 33"
        className="stroke-accent"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect
        x="32.5"
        y="21.5"
        width="5"
        height="5"
        rx="1.5"
        className="fill-signal"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#"
      aria-label="CodeCraft, povratak na vrh stranice"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-xl sm:text-[22px] font-semibold leading-none tracking-tight",
        className,
      )}
    >
      <LogoMark />
      <span>
        Code<span className="text-accent">Craft</span>
      </span>
    </a>
  );
}
