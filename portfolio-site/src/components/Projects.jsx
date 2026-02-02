import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with AI recommendations',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/fdesdsf/E-commerce'
    },
    {
      title: 'Hospital Management System',
      description: 'Healthcare system with predictive analytics',
      tech: ['Next.js', 'Python', 'PostgreSQL'],
      github: 'https://github.com/fdesdsf/Hospital'
    },
    {
      title: 'AI Rock Paper Scissors',
      description: 'Game with adaptive ML opponent',
      tech: ['React', 'Python', 'ML'],
      github: 'https://github.com/fdesdsf/Rock-Paper-and-Scissor-Game'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;