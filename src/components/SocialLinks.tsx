
import React from 'react';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  TwitterIcon, 
  GlobeIcon 
} from './SocialIcons';

interface SocialLinkProps {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLink = ({ platform, username, url, icon }: SocialLinkProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center p-4 bg-card border border-border hover:border-primary transition-colors duration-300 animate-scale-in"
    >
      <div className="flex-shrink-0 mr-4 text-muted-foreground group-hover:text-primary transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-medium font-['Orbitron']">{platform}</h3>
        <p className="text-sm text-muted-foreground font-mono">{username}</p>
      </div>
    </a>
  );
};

const SocialLinks = () => {
  const socials = [
    {
      platform: "GitHub",
      username: "@yourusername",
      url: "https://github.com",
      icon: <GitHubIcon className="w-6 h-6" />
    },
    {
      platform: "LinkedIn",
      username: "Your Name",
      url: "https://linkedin.com",
      icon: <LinkedInIcon className="w-6 h-6" />
    },
    {
      platform: "Twitter",
      username: "@yourhandle",
      url: "https://twitter.com",
      icon: <TwitterIcon className="w-6 h-6" />
    },
    {
      platform: "Website",
      username: "yourwebsite.com",
      url: "https://yourwebsite.com",
      icon: <GlobeIcon className="w-6 h-6" />
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="mb-16 animate-fade-up">
        <span className="block text-sm text-primary font-medium font-mono mb-2">// CONNECT</span>
        <h2 className="font-['Orbitron'] section-title">CONTACT_INFO</h2>
        <p className="section-subtitle font-mono">
          // Currently available for freelance work. If you have a project that you want to get started, 
          // think you need my help with something, or just want to say hello, then get in touch.
        </p>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((social, index) => (
          <SocialLink 
            key={index}
            platform={social.platform}
            username={social.username}
            url={social.url}
            icon={social.icon}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center animate-fade-up">
        <a 
          href="mailto:your.email@example.com" 
          className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-none hover:bg-primary hover:text-primary-foreground transition-all font-mono"
        >
          SEND_MESSAGE()
          <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
