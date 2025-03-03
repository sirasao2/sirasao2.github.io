
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A clean, modern portfolio website built with React and Tailwind CSS. Features smooth animations and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Dashboard",
      description: "An admin dashboard for e-commerce platforms with analytics, order management, and product inventory.",
      technologies: ["React", "Chart.js", "Node.js", "Express"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Application",
      description: "A beautiful weather application that shows current conditions and forecasts. Uses geolocation and weather APIs.",
      technologies: ["JavaScript", "APIs", "CSS", "HTML"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="mb-16 animate-fade-up">
        <span className="block text-sm text-primary font-medium mb-2">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some projects I've worked on recently. Want to see more? Email me.
        </p>
      </div>
      
      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            isEven={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
