import {
  Rocket,
  PenTool,
  Code2,
  MessageSquare,
  ShieldCheck,
  Gem,
  Zap,
  LayoutTemplate,
  AppWindow,
  Smartphone,
  Store,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { SiInstagram } from "react-icons/si";
import type { IconType } from "react-icons";

/** TODO: zamijeniti placeholder linkove pravim. */
export const site = {
  name: "CodeCraft",

  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  indexable: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  locale: "bs_BA",
  language: "bs",
  tagline: "Web i mobilne aplikacije. Brzo. Kvalitetno.",
  seoTitle: "CodeCraft | Izrada sajtova i aplikacija za firme",
  description:
    "CodeCraft izrađuje web sajtove, web aplikacije i mobilne aplikacije za male i srednje firme. Iskusan tim, brza izrada, podrška nakon lansiranja.",
  keywords: [
    "izrada web stranica",
    "izrada sajtova",
    "izrada web aplikacija",
    "izrada mobilnih aplikacija",
    "web agencija",
    "web dizajn",
    "sajt za firmu",
    "sajt za male biznise",
  ],
  areaServed: ["Bosna i Hercegovina"],
  ogImage: {
    path: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "CodeCraft: pravimo sajtove i aplikacije za vaš postojeći biznis",
  },
  logo: { path: "/logo.png", size: 512 },
  themeColor: { dark: "#0b0d12", light: "#ffffff" },
  contact: {
    olx: "https://www.olx.ba", // TODO: link za OLX profil
    instagram: "https://www.instagram.com", // TODO: link za Instagram
    email: "info@codecraft.example", // TODO: email
  },
};

export type NavLink = { label: string; href: string };
export const nav: NavLink[] = [
  { label: "Usluge", href: "#usluge" },
  { label: "Kako radimo", href: "#proces" },
  { label: "Primjeri", href: "#primjeri" },
];

export const hero = {
  badge: "Izrada sajtova i aplikacija za firme",
  titleLine1: "Pravimo sajtove i aplikacije",
  titleLine2: "za vaš postojeći biznis.",
  lead: "Imate firmu, radnju ili salon? Napravićemo vam web stranicu ili aplikaciju da vas klijenti lako pronađu i kontaktiraju. Vi radite svoj posao, sve ostalo prepustite nama.",
  primaryCta: "Javite nam se",
  secondaryCta: "Šta sve radimo",
};

export const whyUs: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Iskustvo",
    text: "Iskusan tim koji je isporučio projekte za male i srednje biznise, od prvog sajta do složenih aplikacija.",
  },
  {
    icon: Gem,
    title: "Kvalitet",
    text: "Čist kod, pažljiv dizajn i testiranje na svakom uređaju prije nego što išta stigne do vas.",
  },
  {
    icon: Zap,
    title: "Brzina",
    text: "Jasan plan i kratki ciklusi. Prvu verziju dobijate u ruke za nekoliko sedmica, ne mjeseci.",
  },
];

export const services: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: LayoutTemplate,
    title: "Web Prezentacije",
    text: "Brzi, moderni sajtovi koji predstavljaju vaš biznis jasno i profesionalno. Optimizovani za mobitel i pretragu.",
  },
  {
    icon: AppWindow,
    title: "Web Aplikacije",
    text: "Prilagođeni alati za rezervacije, narudžbe, administraciju i sve što danas radite ručno.",
  },
  {
    icon: Smartphone,
    title: "Mobilne Aplikacije",
    text: "Aplikacije za iOS i Android koje vaši klijenti zaista žele imati na telefonu.",
  },
];

export const processSteps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessageSquare,
    title: "Razgovor",
    text: "Slušamo šta trebate, ko su vaši klijenti i šta je cilj. Dobijate jasnu ponudu i rok.",
  },
  {
    icon: PenTool,
    title: "Dizajn",
    text: "Vizuelni prijedlog prije prve linije koda. Prilagođavamo ga dok vam ne bude taman.",
  },
  {
    icon: Code2,
    title: "Razvoj",
    text: "Gradimo u kratkim ciklusima i redovno vam pokazujemo napredak na živoj verziji.",
  },
  {
    icon: Rocket,
    title: "Launch",
    text: "Testiramo, objavljujemo i ostajemo uz vas s podrškom nakon lansiranja.",
  },
];

/** TODO Zamjeniti projekte pravim projektima. */
export type Project = {
  title: string;
  category: string;
  text: string;
  kind: "web" | "app" | "mobile";
  tags: string[];
};
export const projects: Project[] = [
  {
    title: "Frizerski salon",
    category: "Web prezentacija",
    kind: "web",
    text: "Sajt sa cjenovnikom, galerijom i online zakazivanjem termina.",
    tags: ["Next.js", "Zakazivanje"],
  },
  {
    title: "Restoran i dostava",
    category: "Web aplikacija",
    kind: "app",
    text: "Meni, online narudžbe i administracija za osoblje na jednom mjestu.",
    tags: ["Narudžbe", "Admin panel"],
  },
  {
    title: "Fitness studio",
    category: "Mobilna aplikacija",
    kind: "mobile",
    text: "Aplikacija za termine treninga, članarine i obavještenja članovima.",
    tags: ["iOS", "Android"],
  },
];

export const contactInfo: {
  icon: LucideIcon | IconType;
  label: string;
  value: string;
  href: string;
}[] = [
  {
    icon: Store,
    label: "OLX",
    value: "Naš OLX profil",
    href: site.contact.olx,
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    value: "Pratite naš rad",
    href: site.contact.instagram,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
];
