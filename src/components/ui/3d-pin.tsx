'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    'translate(-50%,-50%) rotateX(0deg)'
  );
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)');
  };
  const onMouseLeave = () => {
    setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)');
  };

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={cn(
        'relative group/pin z-30 cursor-pointer',
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        style={{
          perspective: '1000px',
          transform: 'rotateX(70deg) translateZ(0deg)',
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.1] group-hover/pin:border-neutral-300 dark:group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn('relative z-50', className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} isActive={isActive} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
  isActive,
}: {
  title?: string;
  href?: string;
  isActive?: boolean;
}) => {
  return (
    <motion.div className={cn(
      "pointer-events-none w-96 h-80 flex items-center justify-center z-[35] transition duration-500",
      "opacity-0 group-hover/pin:opacity-100",
      isActive && "opacity-100"
    )}>
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={'_blank'}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 py-3 px-6 ring-1 ring-white/20 pointer-events-auto shadow-lg transition-all duration-200 min-h-[44px] min-w-[120px] justify-center hover:scale-105 active:scale-95"
            aria-label={`View ${title} project`}
          >
            <span className="relative z-20 text-white text-sm md:text-base font-bold inline-block py-0.5">
              {title}
            </span>
            <svg 
              className="w-5 h-5 text-white ml-1 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500 group-hover/pin:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0)',
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-700 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
