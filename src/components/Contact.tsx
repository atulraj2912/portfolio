import React from "react";
import { FloatingDock } from "./ui/floating-nav";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

export function Contact() {
  const links = [
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-700 dark:text-neutral-200" />
      ),
      href: "araj29122004@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-700 dark:text-neutral-200" />
      ),
      href: "https://www.linkedin.com/in/atul-0729-raj/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-700 dark:text-neutral-200" />
      ),
      href: "https://github.com/atulraj2912",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-700 dark:text-neutral-200" />
      ),
      href: "https://x.com/atulraj0729",
    },
  ];
  return (
    <div id="contact" className="py-12 md:py-20 px-4 sm:px-8 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white mb-10">
        Contact Me
      </h2>
      <div className="flex items-center justify-center h-[10rem] w-full">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
