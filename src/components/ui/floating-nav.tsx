"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import React, { PropsWithChildren, useRef } from "react";

export const FloatingDock = ({
  children,
  className,
  mobileClassName,
  items,
}: PropsWithChildren<{
  className?: string;
  mobileClassName?: string;
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}>) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 items-center justify-center gap-4 rounded-2xl bg-black/90 px-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <AppIcon
          mouseX={mouseX}
          key={`dock-item-${idx}`}
          href={item.href}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  );
};

export const AppIcon = ({
  mouseX,
  className,
  children,
  href,
  icon,
  title,
}: {
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  title: string;
}) => {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useSpring(100, {
    damping: 20,
    stiffness: 300,
  });

  useAnimation();

  useMotionValue(0);

  React.useEffect(() => {
    const unsubscribe = mouseX.on("change", (val: any) => {
      if (ref.current) {
        let { x, width } = ref.current.getBoundingClientRect();
        let center = x + width / 2;
        let newDistance = val - center;
        distance.set(newDistance);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [distance, mouseX]);

  return (
    <div className="flex flex-col items-center gap-2 group" ref={ref}>
      <Link
        href={href}
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full bg-neutral-800/90 transition-colors hover:bg-neutral-700/90",
          className
        )}
      >
        {icon}
      </Link>
      <span className="text-xs text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100">
        {title}
      </span>
    </div>
  );
};