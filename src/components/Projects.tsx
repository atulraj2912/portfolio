"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const projects = [
	{
		title: "Vertex AI",
		description:
			"A powerful AI platform for building, deploying, and scaling machine learning models.",
		href: "https://gemini.google.com/app",
		imgSrc: "/pfi.png",
	},
	{
		title: "Batameej.com",
		description:
			"An online platform for learning and practicing communication skills.",
		href: "https://www.youtube.com/shorts/RKXP0nVRUBM",
		imgSrc: "/pfi1.png",
	},
	{
		title: "tuf.com",
		description:
			"A comprehensive resource for competitive programming and data structures.",
		href: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
		imgSrc: "/pfi2.png",
	},
];

export function Projects() {
	return (
		<section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
						Featured Projects
					</h2>
					<p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
						Here are some of my recent projects that showcase my skills and experience.
					</p>
				</div>
				
				<div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
					{projects.map((project) => (
						<div key={project.title} className="w-full max-w-sm">
							<PinContainer
								title={project.title}
								href={project.href}
							>
								<div className="flex flex-col p-6 tracking-tight bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-2xl transition-all duration-300 w-[20rem] h-[24rem]">
									<div className="relative overflow-hidden rounded-xl mb-4 h-40 bg-neutral-100 dark:bg-neutral-800">
										<Image
											src={project.imgSrc}
											alt={`${project.title} project screenshot`}
											width={400}
											height={240}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
									
									<div className="flex-1 flex flex-col">
										<h3 className="text-xl font-bold text-black dark:text-white mb-3">
											{project.title}
										</h3>
										<p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed flex-1">
											{project.description}
										</p>
										
										<div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
											<span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
												View Project
												<svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
												</svg>
											</span>
										</div>
									</div>
								</div>
							</PinContainer>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
