
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-['Orbitron'] text-xl font-medium">
              YOUR_NAME
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground font-mono">
            // © {currentYear} YOUR_NAME. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
