
import React from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons';
import { Link } from 'react-router-dom';

const ProjectItem = ({ title, tech, href, to }: { title: string, tech: string, href?: string, to?: string }) => {
  const content = (
    <>
      <h3 className="font-typewriter text-xl font-bold rainbow-text">{title}</h3>
      <p className="text-sm text-muted-foreground font-typewriter mt-1">{tech}</p>
    </>
  );

  const baseClasses = "border-3 border-border p-4 hover:border-primary transition-colors block rainbow-box bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={baseClasses}>
      {content}
    </div>
  );
};

const SocialItem = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
    {icon}
    <span className="font-typewriter text-sm">{label}</span>
  </a>
);

const RainbowText = ({ text }: { text: string }) => {
  return (
    <h1 className="font-typewriter text-4xl mb-4 rainbow-text">
      {text.split('').map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
          {letter}
        </span>
      ))}
    </h1>
  );
};

const MinimalLayout = () => {
  return (
    <main className="section">
      <div className="text-center mb-8">
        <RainbowText text="RAHUL SIRASAO" />
        <p className="font-typewriter text-muted-foreground text-sm">DIGITAL ARCHITECT</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10 w-full max-w-lg">
        <ProjectItem 
          title="MOTIVVERSE.IOS" 
          tech="MOTIVATION" 
          href="https://apps.apple.com/us/app/motivverse-ai-powered-quotes/id6474884516" 
        />
        <ProjectItem 
          title="CORNSTARCH.AI" 
          tech="HEALTH" 
          href="https://starch-insight-analytics.lovable.app/" 
        />
        <ProjectItem 
          title="ZENSAI.IOS" 
          tech="MEDITATION" 
          to="/coming-soon" 
        />
        <ProjectItem 
          title="AT&T LABS" 
          tech="RÉSUMÉ" 
          href="https://imgur.com/a/F3f6BMJ" 
        />
      </div>

      <div className="flex justify-center space-x-6">
        <SocialItem icon={<GitHubIcon className="w-5 h-5" />} label="GITHUB" href="https://github.com/sirasao2" />
        <SocialItem icon={<LinkedInIcon className="w-5 h-5" />} label="LINKEDIN" href="https://www.linkedin.com/in/rahul-sirasao-6a3b53114/" />
        <SocialItem icon={<InstagramIcon className="w-5 h-5" />} label="INSTAGRAM" href="http://instagram.com/sirasaonation" />
      </div>
    </main>
  );
};

export default MinimalLayout;
