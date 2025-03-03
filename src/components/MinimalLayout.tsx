
import React from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon, GlobeIcon } from './SocialIcons';

const ProjectItem = ({ title, tech }: { title: string, tech: string }) => (
  <div className="border border-border p-2 hover:border-primary transition-colors">
    <h3 className="font-typewriter text-sm">{title}</h3>
    <p className="text-xs text-muted-foreground font-typewriter">{tech}</p>
  </div>
);

const SocialItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <a href="#" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
    {icon}
    <span className="font-typewriter text-sm">{label}</span>
  </a>
);

const MinimalLayout = () => {
  return (
    <main className="section">
      <div className="text-center mb-8">
        <h1 className="font-typewriter text-4xl mb-4">RAHUL SIRASAO</h1>
        <p className="font-typewriter text-muted-foreground text-sm">DIGITAL ARCHITECT</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md">
        <ProjectItem title="MOTIVVERSE.IOS" tech="MOTIVATION" />
        <ProjectItem title="CORNSTARCH.AI" tech="HEALTH" />
        <ProjectItem title="ZENSAI.IOS" tech="MEDITATION" />
        <ProjectItem title="AT&T LABS" tech="CAREER" />
      </div>

      <div className="flex space-x-6">
        <SocialItem icon={<GitHubIcon className="w-5 h-5" />} label="GITHUB" />
        <SocialItem icon={<LinkedInIcon className="w-5 h-5" />} label="LINKEDIN" />
        <SocialItem icon={<TwitterIcon className="w-5 h-5" />} label="TWITTER" />
        <SocialItem icon={<GlobeIcon className="w-5 h-5" />} label="WEBSITE" />
      </div>
    </main>
  );
};

export default MinimalLayout;
