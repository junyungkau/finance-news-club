import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ReadThinkGrow } from "@/components/sections/ReadThinkGrow";
import { Activities } from "@/components/sections/Activities";
import { Gallery } from "@/components/sections/Gallery";
import { CurrentNight } from "@/components/sections/CurrentNight";
import { ForYou } from "@/components/sections/ForYou";
import { Apply } from "@/components/sections/Apply";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ReadThinkGrow />
        <Activities />
        <Gallery />
        <CurrentNight />
        <ForYou />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
