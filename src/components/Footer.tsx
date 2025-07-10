"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white/80 dark:bg-black/80 text-neutral-500 dark:text-neutral-400 py-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto flex justify-center items-center px-4 sm:px-8">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Atul Raj. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
