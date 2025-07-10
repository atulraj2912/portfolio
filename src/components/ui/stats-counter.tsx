"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
  customText?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    stats.forEach((stat, index) => {
      const animationTimer = setTimeout(() => {
        let start = 0;
        const end = stat.number;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }, 16);

        timers.push(counter);
      }, index * 200); // Stagger the animations
      
      timers.push(animationTimer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [stats]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4 mb-4"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {stat.customText || `${counters[index]}${stat.suffix || ''}`}
          </div>
          <div className="text-gray-400 text-xs md:text-sm mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
