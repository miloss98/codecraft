import { cn } from "@/lib/cn";

type Props = {
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<React.ComponentProps<"a">, "className" | "children">)
  | ({ href?: undefined } & Omit<React.ComponentProps<"button">, "className" | "children">)
);

export function Button({ variant = "primary", size = "md", className, children, ...rest }: Props) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-control border font-semibold leading-none transition duration-150",
    "max-md:w-full md:w-auto",
    size === "md" ? "px-6 py-4 text-base" : "px-[18px] py-3 text-[15px] max-md:w-auto",
    variant === "primary"
      ? "border-transparent bg-accent text-on-accent hover:bg-accent-hover hover:shadow-glow"
      : "border-field bg-transparent text-ink hover:border-ink",
    "disabled:cursor-not-allowed disabled:opacity-60",
    className,
  );

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as React.ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as React.ComponentProps<"button">)}>
      {children}
    </button>
  );
}
