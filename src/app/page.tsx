import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Gallery } from "@/components/sections/Gallery";
import { CurrentNight } from "@/components/sections/CurrentNight";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Gallery />
        <CurrentNight />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
