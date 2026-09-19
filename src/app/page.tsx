import { Footer, Header } from "@/components/layout";
import {
  ContactForm,
  ContactInfo,
  Hero,
  Portfolio,
  Process,
  Services,
  WhyUs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="sadrzaj" tabIndex={-1} className="outline-none">
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <Portfolio />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
