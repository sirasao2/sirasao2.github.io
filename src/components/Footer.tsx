
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="absolute bottom-4 w-full text-center">
      <div className="text-xs text-muted-foreground font-typewriter">
        © {currentYear} // SYSTEM.ACTIVE
      </div>
    </footer>
  );
};

export default Footer;
