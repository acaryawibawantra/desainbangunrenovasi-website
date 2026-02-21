import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Tagline } from "@/components/sections/Tagline";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Quote } from "@/components/sections/Quote";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Tagline />
        <Services />
        <Portfolio />
        <Quote />
        {/* <Testimonials />  */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
