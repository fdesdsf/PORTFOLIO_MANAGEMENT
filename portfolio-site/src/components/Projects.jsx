// src/components/Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRobot, FaShoppingCart, FaHospital } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with AI-powered product recommendations and real-time inventory management.',
      longDescription: 'Built a complete e-commerce solution with React frontend, Node.js backend, and MongoDB. Integrated TensorFlow.js for personalized product recommendations based on user behavior.',
      tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Redux', 'Stripe API'],
      github: 'https://github.com/fdesdsf/E-commerce',
      live: 'https://ecom-demo.com',
      category: 'fullstack',
      icon: <FaShoppingCart />,
      color: 'from-blue-500 to-cyan-500',
      image: '/images/projects/ecom.jpg',
      features: ['AI Recommendations', 'Real-time Inventory', 'Payment Integration']
    },
    {
      title: 'Hospital Management System',
      description: 'Complete healthcare solution with patient records, appointment scheduling, and predictive analytics for patient flow.',
      longDescription: 'Developed a comprehensive hospital management system using Next.js and Python. Implemented machine learning models to predict patient admission rates and optimize staff scheduling.',
      tech: ['Next.js', 'Python', 'PostgreSQL', 'TensorFlow', 'Docker', 'AWS'],
      github: 'https://github.com/fdesdsf/Hospital',
      live: 'https://hospital-demo.com',
      category: 'fullstack',
      icon: <FaHospital />,
      color: 'from-green-500 to-emerald-500',
      image: '/images/projects/hospital.jpg',
      features: ['Predictive Analytics', 'Patient Portal', 'Staff Management']
    },
    {
      title: 'AI Rock Paper Scissors',
      description: 'Interactive game where the AI learns and adapts to your playing style using reinforcement learning.',
      longDescription: 'Created a browser-based game where the AI opponent uses reinforcement learning to adapt to player patterns. The more you play, the smarter it gets!',
      tech: ['React', 'Python', 'Flask', 'TensorFlow', 'WebSockets'],
      github: 'https://github.com/fdesdsf/Rock-Paper-and-Scissor-Game',
      live: 'https://rps-ai-demo.com',
      category: 'ai',
      icon: <FaRobot />,
      color: 'from-purple-500 to-pink-500',
      image: '/images/projects/rps.jpg',
      features: ['Reinforcement Learning', 'Real-time Adaptation', 'Statistics Tracking']
    },
    {
      title: 'TaskFlow - Project Management',
      description: 'Modern project management tool with Kanban boards, team collaboration, and automated workflows.',
      longDescription: 'Built a Trello-like project management app with real-time updates, drag-and-drop interfaces, and automated task assignment based on team member workload.',
      tech: ['React', 'Firebase', 'TailwindCSS', 'Draft.js', 'Chart.js'],
      github: 'https://github.com/fdesdsf/taskflow',
      live: 'https://taskflow-demo.com',
      category: 'frontend',
      icon: <FaCode />,
      color: 'from-orange-500 to-red-500',
      image: '/images/projects/taskflow.jpg',
      features: ['Real-time Updates', 'Kanban Boards', 'Team Analytics']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, AI integration, and modern design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'fullstack', 'frontend', 'ai'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500"
            >
              {/* Project Image Placeholder with Gradient */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Tech Icons Animation */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} rounded-full blur-3xl`}></div>
                <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${project.color} rounded-full blur-3xl`}></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xl`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700/50 rounded-xl hover:bg-primary/20 transition-colors"
                      title="View Code"
                    >
                      <FaGithub className="text-gray-300" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700/50 rounded-xl hover:bg-primary/20 transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-gray-300" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Hover Details */}
                <div className="mt-4 pt-4 border-t border-gray-700 hidden group-hover:block animate-fadeIn">
                  <p className="text-gray-300 text-sm">{project.longDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/fdesdsf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl text-white font-semibold transition-all duration-300 group"
          >
            <FaGithub size={20} />
            View All on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;