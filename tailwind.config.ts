import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export const palettes = {
  dark: {
    page: "#0b0d12", // pozadina stranice
    surface: "#12151c", // naizmjenične sekcije, footer, polja forme
    raised: "#191d27", // kartice
    line: "#262b38", // dekorativne linije
    "line-strong": "#343b4d", // hover ivice kartica, linije mockupa
    field: "#64708a", // ivice polja i sekundarnog dugmeta (kontrast 3:1+)
    ink: "#f4f6fa", // naslovi i tekst
    muted: "#9aa3b5", // sekundarni tekst
    accent: "#4f8cff", // glavna brend boja
    "accent-hover": "#7aa6ff",
    "on-accent": "#050810", // tekst na accent podlozi
    signal: "#ff5a5f", // crvena, samo sitni detalji i greške
  },
  light: {
    page: "#ffffff",
    surface: "#f5f7fb",
    raised: "#ffffff",
    line: "#e1e6ef",
    "line-strong": "#c5cddb",
    field: "#7a8599",
    ink: "#0b1220",
    muted: "#4b5567",
    accent: "#2563eb",
    "accent-hover": "#1d4ed8",
    "on-accent": "#ffffff",
    signal: "#d62f32",
  },
} as const;

export const shadows = {
  dark: {
    card: "0 12px 40px rgba(0,0,0,0.45)",
    glow: "0 8px 32px rgba(79,140,255,0.28)",
  },
  light: {
    card: "0 12px 32px rgba(15,23,42,0.10)",
    glow: "0 8px 24px rgba(37,99,235,0.30)",
  },
} as const;

type Palette = Record<string, string>;

const hexToChannels = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

const themeVars = (theme: "dark" | "light") => ({
  colorScheme: theme,
  ...Object.fromEntries(
    Object.entries(palettes[theme] as Palette).map(([k, v]) => [`--c-${k}`, hexToChannels(v)]),
  ),
  "--shadow-card": shadows[theme].card,
  "--shadow-glow": shadows[theme].glow,
});

const colorNames = Object.keys(palettes.dark);

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: Object.fromEntries(colorNames.map((k) => [k, `rgb(var(--c-${k}) / <alpha-value>)`])),
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "3.5rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-xl-sm": [
          "2.25rem",
          {
            lineHeight: "2.625rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-lg": [
          "2.5rem",
          { lineHeight: "3rem", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        "display-lg-sm": [
          "1.875rem",
          {
            lineHeight: "2.375rem",
            letterSpacing: "-0.015em",
            fontWeight: "600",
          },
        ],
        heading: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        title: ["1.125rem", { lineHeight: "1.625rem", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.875rem" }],
        eyebrow: [
          "0.8125rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
      },
      borderRadius: {
        control: "12px", // dugmad, polja, ikone
        card: "20px", // kartice, paneli
      },
      maxWidth: { page: "70rem" },
      // Prigušen "glow" za značku u hero sekciji (beskonačna petlja)
      keyframes: {
        "badge-glow": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "badge-glow": "badge-glow 3.6s ease-in-out infinite",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": themeVars("dark"),
        '[data-theme="light"]': themeVars("light"),
      });
    }),
  ],
};

export default config;
