
import React from 'react';
import { cn } from "@/lib/utils";
import { GlobeIcon } from './SocialIcons';
import { GitHubIcon } from './SocialIcons';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  isEven?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  isEven = false
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "group relative grid gap-8 items-center animate-fade-up",
      isEven ? "md:grid-cols-[1fr,1.2fr]" : "md:grid-cols-[1.2fr,1fr]"
    )}>
      {/* Image */}
      <div className={cn(
        "relative rounded-none overflow-hidden border border-border aspect-video bg-accent order-1",
        isEven ? "md:order-2" : "md:order-1"
      )}>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 ease-out-expo"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-16"></div>
      </div>
      
      {/* Content */}
      <div className={cn(
        "order-2",
        isEven ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
      )}>
        <h3 className="font-['Orbitron'] text-2xl md:text-3xl font-medium mb-4 tracking-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-5 font-mono">
          {description}
        </p>
        
        <ul className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <li key={index} className="text-xs px-3 py-1 border border-primary rounded-none text-primary font-mono">
              {tech}
            </li>
          ))}
        </ul>
        
        <div className="flex space-x-4">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors"
            >
              <GlobeIcon className="w-4 h-4" />
              <span>VIEW_LIVE()</span>
            </a>
          )}
          
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>VIEW_CODE()</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
