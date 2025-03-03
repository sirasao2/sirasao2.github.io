
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out-expo",
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/50" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between max-w-6xl">
        <a href="#" className="font-display text-xl font-medium">
          <span className="sr-only">Home</span>
          Your Name
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-primary/80 transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium hover:text-primary/80 transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">Contact</a>
        </nav>
        
        <button className="block md:hidden" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
