"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { LampContainer } from "./ui/lamp";
import { StatsCounter } from "./ui/stats-counter";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const greetingWords = [
    {
      text: "Hello",
      className: "text-white font-semibold text-2xl sm:text-3xl md:text-4xl",
    },
    {
      text: "I",
      className: "text-white font-semibold text-2xl sm:text-3xl md:text-4xl",
    },
    {
      text: "am",
      className: "text-white font-semibold text-2xl sm:text-3xl md:text-4xl",
    },
    {
      text: "Atul",
      className: "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl",
    },
    {
      text: "Raj",
      className: "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent font-bold text-2xl sm:text-3xl md:text-4xl",
    },
  ];

  const titleWords = [
    {
      text: "- FullStack",
      className: "bg-gradient-to-r from-gray-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-medium text-lg sm:text-xl md:text-2xl",
    },
    {
      text: "Developer",
      className: "bg-gradient-to-r from-gray-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-medium text-lg sm:text-xl md:text-2xl",
    },
  ];

  const stats = [
    { number: 0, label: "Years Experience", suffix: "", customText: "Fresher" },
    { number: 1, label: "Projects Completed", suffix: "" },
    { number: 7, label: "Technologies Mastered", suffix: "+" },
    { number: 100, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <section className="bg-gray-950" id="hero">
      <LampContainer>
        <div className="relative flex flex-col items-center justify-center min-h-[100vh] py-4 px-4 sm:px-6 md:px-8 text-center w-full max-w-4xl mx-auto overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-4 relative z-20"
          >
            <Image
              src="/photo.png"
              alt="Atul Raj"
              width={150}
              height={150}
              className="rounded-lg relative z-20 w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover"
              priority
            />
          </motion.div>

          <div className="text-center -space-y-2 mt-4 w-full">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-2">
              <TypewriterEffectSmooth 
                words={greetingWords} 
                className="justify-center !my-0 text-center"
                cursorClassName="hidden"
              />
            </div>
            
            <div className="flex items-center justify-center ml-4 sm:ml-8 -mt-2 sm:-mt-4 px-2">
              <TypewriterEffectSmooth 
                words={titleWords} 
                className="justify-center !my-0 text-center"
                cursorClassName="hidden"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-6 space-y-3 text-center"
          >
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Passionate about creating exceptional web experiences with modern technologies and clean, efficient code.
            </p>
            
            {/* Availability Status */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm mt-4 px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-green-400 font-medium">Available for opportunities</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">Remote & On-site</span>
              </div>
              <div className="sm:hidden text-gray-400 text-xs">Remote & On-site</div>
            </div>
            
            <StatsCounter stats={stats} />
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 w-full px-4">
              <a
                href="#projects"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 text-sm overflow-hidden w-full sm:w-auto sm:min-w-[160px] max-w-[280px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="group relative border-2 border-blue-400/50 text-blue-400 px-6 sm:px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 transform hover:scale-105 text-sm overflow-hidden w-full sm:w-auto sm:min-w-[160px] max-w-[280px] backdrop-blur-sm bg-blue-400/5"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </a>
              
              <a
                href="#contact"
                className="border-2 border-gray-600/50 text-gray-400 px-6 sm:px-8 py-3.5 rounded-xl font-semibold hover:border-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-105 text-sm w-full sm:w-auto sm:min-w-[140px] max-w-[280px] backdrop-blur-sm bg-gray-800/20"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
}
