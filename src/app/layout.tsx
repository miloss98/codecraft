import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin", "latin-ext"], weight: ["600", "700"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} | Web agencija`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: `${site.name} | Web agencija`, description: site.description, locale: "bs_BA", type: "website" },
};

export const viewport: Viewport = { themeColor: "#0b0d12" };

/** Postavlja temu prije prvog crtanja (bez treptanja): sačuvani izbor, inače sistemska postavka. */
const themeScript = `(function(){try{var t=localStorage.getItem("codecraft-theme");if(!t){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" data-theme="dark" suppressHydrationWarning className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
