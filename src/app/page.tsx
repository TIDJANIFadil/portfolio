import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
