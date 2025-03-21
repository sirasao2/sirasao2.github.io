
import React from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './SocialIcons';
import { Link } from 'react-router-dom';

const ProjectItem = ({ 
  title, 
  tech, 
  description, 
  href, 
  to 
}: { 
  title: string, 
  tech: string, 
  description: string, 
  href?: string, 
  to?: string 
}) => {
  const renderTitle = () => (
    <h3 className="font-typewriter text-xl font-bold mb-1 text-center">
      {title.split('').map((letter, index) => (
        <span key={index} className="cascade-letter" style={{ animationDelay: `${index * 0.1}s` }}>
          {letter}
        </span>
      ))}
    </h3>
  );

  const content = (
    <>
      {renderTitle()}
      <p className="text-sm text-primary font-typewriter mt-1 text-center">{tech}</p>
      <p className="mt-3 text-sm text-white font-typewriter leading-tight text-center">{description}</p>
    </>
  );

  const baseClasses = "border-2 border-border p-5 hover:border-primary transition-colors block thin-rainbow-box bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-full";

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
    <main className="pt-20 pb-6 px-4 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <RainbowText text="RAHUL SIRASAO" />
        <p className="font-typewriter text-muted-foreground text-sm">DIGITAL ARCHITECT</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-2xl">
        <ProjectItem 
          title="MOTIVVERSE.IOS" 
          tech="AI ART & INSPIRATION" 
          description="Boost positivity with stunning AI art and motivational quotes from your favorite icons—because mindset matters."
          href="https://apps.apple.com/us/app/motivverse-ai-powered-quotes/id6474884516" 
        />
        <ProjectItem 
          title="CORNSTARCH.AI" 
          tech="AI INGREDIENT SCANNER" 
          description="Detect estrogenics, chemicals, and additives instantly in your products with the power of AI vision."
          href="https://starch-insight-analytics.lovable.app/" 
        />
        <ProjectItem 
          title="ZENSAI.IOS" 
          tech="HINDI & MARATHI MEDITATION" 
          description="Your personal meditation and relaxation guide in Hindi and Marathi. Unwind, de-stress, and find shanti."
          to="/coming-soon" 
        />
        <ProjectItem 
          title="AT&T.LABS" 
          tech="RÉSUMÉ" 
          description="View my professional experience, skills, and achievements in the tech industry."
          href="https://imgur.com/a/F3f6BMJ" 
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <SocialItem icon={<GitHubIcon className="w-5 h-5" />} label="GITHUB" href="https://github.com/sirasao2" />
        <SocialItem icon={<LinkedInIcon className="w-5 h-5" />} label="LINKEDIN" href="https://www.linkedin.com/in/rahul-sirasao-6a3b53114/" />
        <SocialItem icon={<InstagramIcon className="w-5 h-5" />} label="INSTAGRAM" href="http://instagram.com/sirasaonation" />
      </div>
    </main>
  );
};

export default MinimalLayout;
