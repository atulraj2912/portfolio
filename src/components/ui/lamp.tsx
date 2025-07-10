"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[90vh] flex-col items-center justify-start overflow-visible bg-black w-full rounded-md z-0 pt-4",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        {/* Realistic conical light beam with radial gradient */}
        <motion.div
          initial={{ opacity: 0.3, width: "20rem" }}
          whileInView={{ opacity: 0.6, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-96 w-[50rem]"
          style={{
            background: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)",
            clipPath: "polygon(35% 0%, 65% 0%, 90% 100%, 10% 100%)",
          }}
        />
        {/* Inner brighter cone */}
        <motion.div
          initial={{ opacity: 0.2, width: "15rem" }}
          whileInView={{ opacity: 0.4, width: "35rem" }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-80 w-[35rem]"
          style={{
            background: "radial-gradient(ellipse 40% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 40%, transparent 80%)",
            clipPath: "polygon(37% 0%, 63% 0%, 80% 100%, 20% 100%)",
          }}
        />
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 h-0.5 w-[15rem] bg-gray-300 shadow-md"
          style={{
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(255, 255, 255, 0.4)",
          }}
        ></motion.div>
      </div>

      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5 pt-16">
        {children}
      </div>
    </div>
  );
};
