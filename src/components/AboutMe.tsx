"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

const words = `Hi, I’m Atul Raj, a Computer Science and Engineering undergraduate at Acharya Institute of Technology, Bengaluru. I began my academic journey at Kendriya Vidyalaya, where I laid the foundation for my interest in technology. Over the years, that interest evolved into a strong passion for coding and software development.
I genuinely enjoy building things that solve real problems — whether it's a small automation script or a full-stack web application. I’m always learning, experimenting, and pushing myself to write better, cleaner, and more efficient code. My goal is clear: to become part of the top 1% of coders, not just by skill, but by consistency, creativity, and impact.
I’m currently looking for opportunities to collaborate on meaningful projects, contribute to innovative teams, and grow as a developer who blends technical skill with purpose`;

export function AboutMe() {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 py-20">
      <div className="md:w-1/3 lg:w-1/4 mb-8 md:mb-0 md:mr-8">
        <Image
          src="/photo.JPG"
          alt="Atul Raj"
          width={300}
          height={300}
          className="rounded-full object-cover mx-auto"
        />
      </div>
      <div className="md:w-2/3 lg:w-3/4">
        <h2 className="text-3xl font-bold text-center md:text-left mb-8 text-black dark:text-white">About Me</h2>
        <TextGenerateEffect duration={2} filter={false} words={words} />
      </div>
    </div>
  );
}
