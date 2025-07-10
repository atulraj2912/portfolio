"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", name: "Home", icon: "🏠" },
  { id: "about", name: "About", icon: "👨‍💻" },
  { id: "projects", name: "Projects", icon: "💼" },
  { id: "skills", name: "Skills", icon: "⚡" },
  { id: "contact", name: "Contact", icon: "📧" },
];

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform-origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Section Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3">
          {sections.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "bg-gray-800/80 border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{section.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {section.name}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
}
