
import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const MinimalLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-6 max-w-md mx-auto text-center p-6">
      <h1 className="font-['Orbitron'] text-4xl font-bold">
        <span className="animate-pulse relative inline-block animate-oscillate">
          RAHUL SIRASAO
          <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary animate-flash"></span>
        </span>
      </h1>
      <h2 className="text-2xl font-typewriter">Digital Architect</h2>
      <p className="text-muted-foreground">
        Portfolio coming soon. Building something minimal but impressive.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
        <Button variant="outline" onClick={() => navigate('/about')}>
          About
        </Button>
        <Button variant="outline" onClick={() => navigate('/projects')}>
          Projects
        </Button>
        <Button variant="outline" onClick={() => navigate('/blog')}>
          Blog
        </Button>
        <Button variant="outline" onClick={() => navigate('/contact')}>
          Contact
        </Button>
      </div>
    </div>
  );
};

export default MinimalLayout;
