"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

export function Hero() {
  const words = [
    {
      text: "Hello..!",
      className: "text-black dark:text-white",
    },
    {
      text: "I am",
      className: "text-black dark:text-white",
    },
    {
      text: "Atul",
      className: "text-black dark:text-white",
    },
    {
      text: "Raj",
      className: "text-black dark:text-white",
    },
    {
      text: "-",
      className: "text-black dark:text-white",
    },
    {
      text: "A FullStack",
      className: "text-black dark:text-white",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center justify-center h-full px-4"
      >
        <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base  ">
          👨‍💻 EAT.SLEEP.CODE.REPEAT 👨‍💻
        </p>
        <TypewriterEffectSmooth words={words} />
      </motion.div>
    </LampContainer>
  );
}
