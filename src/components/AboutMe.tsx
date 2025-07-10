"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Hi, I’m Atul Raj, a Computer Science and Engineering undergraduate at Acharya Institute of Technology, Bengaluru. I began my academic journey at Kendriya Vidyalaya, where I laid the foundation for my interest in technology. Over the years, that interest evolved into a strong passion for coding and software development.
I genuinely enjoy building things that solve real problems — whether it's a small automation script or a full-stack web application. I’m always learning, experimenting, and pushing myself to write better, cleaner, and more efficient code. My goal is clear: to become part of the top 1% of coders, not just by skill, but by consistency, creativity, and impact.
I’m currently looking for opportunities to collaborate on meaningful projects, contribute to innovative teams, and grow as a developer who blends technical skill with purpose`;

export function AboutMe() {
  return (
    <div id="about" className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-12 md:py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black dark:text-white">About Me</h2>
      <TextGenerateEffect duration={0.5} filter={false} words={words} className="text-base md:text-lg text-neutral-700 dark:text-neutral-200 text-center" />
    </div>
  );
}
