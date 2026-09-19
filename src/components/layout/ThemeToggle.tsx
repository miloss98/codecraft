"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

const KEY = "codecraft-theme";

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => obs.disconnect();
}
const getTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
  const isLight = theme === "light";

  const toggle = () => {
    const next = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Svijetla tema"
      onClick={toggle}
      className="relative h-8 cursor-pointer w-16 shrink-0 rounded-full border border-field bg-surface transition-colors hover:border-ink"
    >
      <span
        className={cn(
          "absolute left-[3px] top-[3px] size-6 rounded-full bg-accent transition-transform duration-200",
          !isLight && "translate-x-8",
        )}
      />
      <Sun
        aria-hidden
        className={cn(
          "absolute left-[7px] top-[7px] size-4 transition-colors",
          isLight ? "text-on-accent" : "text-muted",
        )}
      />
      <Moon
        aria-hidden
        className={cn(
          "absolute right-[7px] top-[7px] size-4 transition-colors",
          isLight ? "text-muted" : "text-on-accent",
        )}
      />
    </button>
  );
}
