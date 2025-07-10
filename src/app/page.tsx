import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { ProgressBar } from "@/components/ui/progress-bar";
import { FloatingDock } from "@/components/ui/floating-nav";

export default function Home() {
  const navItems = [
    {
      title: "Home",
      icon: (
        <svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: "#hero",
    },
    {
      title: "About",
      icon: (
        <svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      href: "#skills",
    },
    {
      title: "Contact",
      icon: (
        <svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
      <ProgressBar />
      
      {/* Professional Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-3 sm:py-4">
        <FloatingDock items={navItems} />
      </header>
      
      {/* Add top padding to account for fixed header */}
      <main className="flex-grow w-full pt-20 sm:pt-24 overflow-x-hidden">
        <Hero />
        <section id="about" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
          <AboutMe />
        </section>
        <Projects />
        <section id="skills" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
          <Skills />
        </section>
        <section id="contact" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
