import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";

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
