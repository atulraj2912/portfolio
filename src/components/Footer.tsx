"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-neutral-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Atul Raj. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/AtulRaj37"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/atul-raj-a2a2b2245/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
