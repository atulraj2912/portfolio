'use client';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Hero() {
  const words = [
    {
      text: "Atul",
    },
    {
      text: "Raj",
    },
    {
      text: "-",
    },
    {
      text: "FullStack",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
