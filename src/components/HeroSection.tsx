
import React, { useEffect, useState } from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './SocialIcons';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const nameArray = "RAHUL SIRASAO".split("");
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section flex flex-col justify-center min-h-[90vh] pt-16">
      <div className="animate-fade-up">
        <span className="inline-block px-3 py-1 text-sm bg-secondary rounded-full font-mono mb-6">
          //SYSTEM.ONLINE
        </span>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm{" "}
          <span className="font-['Orbitron'] text-primary inline-block overflow-hidden">
            {nameArray.map((letter, index) => (
              <span 
                key={index} 
                className="inline-block" 
                style={{
                  animation: `scale-in 0.5s ${index * 0.06}s forwards, 
                             flash 3s ${index * 0.06 + 1}s infinite`,
                  opacity: 0,
                  textShadow: isVisible ? '0 0 8px rgba(255, 255, 255, 0.5)' : 'none'
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
          <br />
          I build digital interfaces.
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 font-mono">
          // Developer specializing in creating exceptional digital experiences.
          // Currently focused on building accessible, human-centered products.
        </p>
        
        <div className="flex space-x-4 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
        
        <a 
          href="#projects" 
          className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-none hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono"
        >
          VIEW_PROJECTS()
          <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
