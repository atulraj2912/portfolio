"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const projects = [
  {
    title: "Vertex AI",
    description: "A powerful AI platform for building, deploying, and scaling machine learning models.",
    href: "https://gemini.google.com/app",
    imgSrc: "/pfi.png",
  },
  {
    title: "Batameej.com",
    description: "An online platform for learning and practicing communication skills.",
    href: "https://www.youtube.com/watch?v=Kx4c66-GjgE&list=RDKx4c66-GjgE&start_radio=1",
    imgSrc: "/pfi1.png",
  },
  {
    title: "tuf.com",
    description: "A comprehensive resource for competitive programming and data structures.",
    href: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
    imgSrc: "/pfi2.png",
  },
];

export function Projects() {
  return (
    <div className="h-full w-full flex flex-wrap items-center justify-center ">
      {projects.map((project) => (
        <PinContainer key={project.title} title={project.href} href={project.href}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {project.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                {project.description}
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
