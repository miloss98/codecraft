import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export function IconTile({ icon: Icon }: { icon: LucideIcon | IconType }) {
  return (
    <div className="mb-6 grid size-12 place-items-center rounded-control bg-accent/10 text-accent">
      <Icon className="size-6" strokeWidth={1.75} aria-hidden />
    </div>
  );
}
