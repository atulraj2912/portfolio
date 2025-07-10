"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { PropsWithChildren, useState, useEffect, useCallback, useRef } from "react";

export const FloatingDock = ({
  className,
  items,
}: PropsWithChildren<{
  className?: string;
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}>) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Smooth scroll function
  const smoothScrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Find active section
      const sections = items.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  // Handle navigation click
  const handleNavClick = useCallback((href: string) => {
    smoothScrollTo(href);
    setIsMobileMenuOpen(false);
  }, [smoothScrollTo]);

  // Handle mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.05)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "md:mx-auto ml-auto mr-4 md:mr-auto flex items-center justify-center h-14 sm:h-16 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 transition-all duration-300 w-fit max-w-[calc(100vw-2rem)]",
          className
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8" role="menubar">
          {items.map((item, idx) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              title={item.title}
              isActive={activeSection === item.href.replace('#', '')}
              onClick={handleNavClick}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.div>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden fixed top-20 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/20 z-40"
              id="mobile-menu"
              role="menu"
              aria-labelledby="mobile-menu-button"
            >
              <div className="p-4 space-y-1">
                {items.map((item, idx) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-300 focus:outline-none",
                      activeSection === item.href.replace('#', '')
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                    role="menuitem"
                  >
                    <span className={cn(
                      "transition-colors duration-300",
                      activeSection === item.href.replace('#', '') ? "text-blue-300" : ""
                    )}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const NavItem = ({
  className,
  href,
  icon,
  title,
  isActive = false,
  onClick,
}: {
  className?: string;
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick?: (href: string) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(href);
    }
  }, [href, onClick]);

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-300 group relative focus:outline-none text-xs sm:text-sm",
        isActive 
          ? "text-blue-300 bg-blue-500/20 border border-blue-500/30" 
          : "text-white/80 hover:text-white hover:bg-white/10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="menuitem"
      aria-current={isActive ? "page" : undefined}
    >
      <motion.div
        className="flex items-center justify-center"
        animate={{
          scale: isHovered ? 1.1 : 1,
          color: isActive ? "#93c5fd" : undefined,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {icon}
      </motion.div>
      <span className={cn(
        "text-sm font-medium transition-colors duration-300",
        isActive ? "text-blue-300" : "group-hover:text-blue-300"
      )}>
        {title}
      </span>
      
      {/* Animated underline */}
      <motion.div
        className={cn(
          "absolute bottom-0 left-0 h-0.5",
          isActive ? "bg-blue-400" : "bg-blue-400"
        )}
        initial={{ width: 0 }}
        animate={{ width: (isHovered || isActive) ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Active indicator - removed */}
    </button>
  );
};