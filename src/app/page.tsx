import Image from "next/image";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-8 md:px-16">
        <Hero />
        <div id="about" className="py-20">
          <AboutMe />
        </div>
        <div id="projects" className="py-20">
          <Projects />
        </div>
        <div id="skills" className="py-20">
          <Skills />
        </div>
        <div id="contact" className="py-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
