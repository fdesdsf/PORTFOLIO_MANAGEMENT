// src/components/Skills.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, 
  FaDatabase, FaGit, FaDocker, FaFigma,
  FaJs, FaHtml5, FaCss3, FaVuejs
} from 'react-icons/fa';
import { 
  SiTensorflow, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiTypescript, SiNextdotjs,
  SiRedux, SiFirebase, SiGraphql, SiKubernetes,
  SiDjango, SiFlask, SiExpress, SiJest, SiMysql
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const skillCategories = [
    {
      name: 'Frontend',
      icon: <FaReact />,
      color: 'from-blue-500 to-cyan-500',
      shadow: 'shadow-blue-500/20',
      skills: [
        { name: 'React', level: 95, icon: <FaReact />, color: 'text-blue-400', category: 'frontend', years: 4 },
        { name: 'Next.js', level: 90, icon: <SiNextdotjs />, color: 'text-white', category: 'frontend', years: 3 },
        { name: 'JavaScript', level: 95, icon: <FaJs />, color: 'text-yellow-400', category: 'frontend', years: 5 },
        { name: 'TypeScript', level: 85, icon: <SiTypescript />, color: 'text-blue-500', category: 'frontend', years: 3 },
        { name: 'TailwindCSS', level: 90, icon: <SiTailwindcss />, color: 'text-cyan-400', category: 'frontend', years: 3 },
        { name: 'Redux', level: 85, icon: <SiRedux />, color: 'text-purple-400', category: 'frontend', years: 3 },
        { name: 'Vue.js', level: 75, icon: <FaVuejs />, color: 'text-green-500', category: 'frontend', years: 2 },
        { name: 'HTML5', level: 95, icon: <FaHtml5 />, color: 'text-orange-500', category: 'frontend', years: 5 },
        { name: 'CSS3', level: 90, icon: <FaCss3 />, color: 'text-blue-500', category: 'frontend', years: 5 },
      ]
    },
    {
      name: 'Backend',
      icon: <FaNodeJs />,
      color: 'from-green-500 to-emerald-500',
      shadow: 'shadow-green-500/20',
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs />, color: 'text-green-500', category: 'backend', years: 4 },
        { name: 'Python', level: 85, icon: <FaPython />, color: 'text-yellow-500', category: 'backend', years: 4 },
        { name: 'Express', level: 88, icon: <SiExpress />, color: 'text-gray-400', category: 'backend', years: 4 },
        { name: 'Django', level: 80, icon: <SiDjango />, color: 'text-green-600', category: 'backend', years: 3 },
        { name: 'Flask', level: 75, icon: <SiFlask />, color: 'text-gray-400', category: 'backend', years: 2 },
        { name: 'PostgreSQL', level: 85, icon: <SiPostgresql />, color: 'text-blue-400', category: 'backend', years: 4 },
        { name: 'MongoDB', level: 88, icon: <SiMongodb />, color: 'text-green-400', category: 'backend', years: 4 },
        { name: 'GraphQL', level: 80, icon: <SiGraphql />, color: 'text-pink-500', category: 'backend', years: 2 },
        { name: 'Firebase', level: 85, icon: <SiFirebase />, color: 'text-yellow-500', category: 'backend', years: 3 },
      ]
    },
    {
      name: 'AI/ML & DevOps',
      icon: <SiTensorflow />,
      color: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/20',
      skills: [
        { name: 'TensorFlow', level: 82, icon: <SiTensorflow />, color: 'text-orange-400', category: 'ai', years: 3 },
        { name: 'AWS', level: 78, icon: <FaAws />, color: 'text-yellow-500', category: 'devops', years: 3 },
        { name: 'Docker', level: 75, icon: <FaDocker />, color: 'text-blue-500', category: 'devops', years: 2 },
        { name: 'Kubernetes', level: 70, icon: <SiKubernetes />, color: 'text-blue-600', category: 'devops', years: 2 },
        { name: 'Git', level: 92, icon: <FaGit />, color: 'text-orange-500', category: 'devops', years: 5 },
        { name: 'Jest', level: 80, icon: <SiJest />, color: 'text-red-500', category: 'devops', years: 3 },
        { name: 'Databases', level: 85, icon: <FaDatabase />, color: 'text-gray-400', category: 'devops', years: 4 },
        { name: 'Figma', level: 75, icon: <FaFigma />, color: 'text-purple-400', category: 'design', years: 2 },
      ]
    }
  ];

  // Flatten all skills for filtering
  const allSkills = skillCategories.flatMap(cat => cat.skills);
  
  // Get filtered skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === 'all') return allSkills;
    return allSkills.filter(skill => skill.category === activeCategory);
  };

  const filteredSkills = getFilteredSkills();

  // Category filter buttons
  const categories = [
    { id: 'all', name: 'All Skills', color: 'from-gray-500 to-gray-600' },
    { id: 'frontend', name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend', color: 'from-green-500 to-emerald-500' },
    { id: 'ai', name: 'AI/ML', color: 'from-purple-500 to-pink-500' },
    { id: 'devops', name: 'DevOps', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark to-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I've mastered these technologies through years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Years Experience', value: '5+', icon: '🚀' },
            { label: 'Projects Completed', value: '50+', icon: '💻' },
            { label: 'Technologies', value: '30+', icon: '🔧' },
            { label: 'Happy Clients', value: '25+', icon: '🤝' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden group
                ${activeCategory === category.id 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Active Indicator */}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Text */}
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            // Find category color for this skill
            const category = skillCategories.find(cat => 
              cat.skills.some(s => s.name === skill.name)
            );
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category?.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.years}+ years experience</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-white font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: animated ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category?.color} rounded-full relative`}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full bg-${category?.color.split(' ')[0]}/10 text-${category?.color.split(' ')[1]}`}>
                      {skill.category}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                      Level {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>

                  {/* Hover Stats */}
                  <div className="mt-4 pt-4 border-t border-gray-700/50 hidden group-hover:block animate-fadeIn">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-400">Projects</span>
                        <p className="text-white font-semibold">15+</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Certifications</span>
                        <p className="text-white font-semibold">3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Tools & Technologies I <span className="text-primary">♥</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <FaGit />, name: 'Git', color: 'text-orange-500' },
              { icon: <FaReact />, name: 'React', color: 'text-blue-500' },
              { icon: <FaReact />, name: 'React Native', color: 'text-blue-600' },
              { icon: <FaAws />, name: 'AWS', color: 'text-yellow-500' },
              { icon: <FaHtml5 />, name: 'HTML/CSS', color: 'text-red-500' },
              { icon: <FaFigma />, name: 'Figma', color: 'text-purple-400' },
              { icon: <FaDatabase />, name: 'MongoDB', color: 'text-green-500' },
              { icon: <SiMysql />, name: 'MySQL', color: 'text-blue-400' },
              { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-600' },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 flex items-center gap-3">
                  <span className={`text-2xl ${tool.color} group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </span>
                  <span className="text-white font-medium">{tool.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Skill Distribution</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategories.map((category) => {
              const avgLevel = Math.round(
                category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length
              );
              
              return (
                <div key={category.name} className="text-center">
                  <div className={`text-3xl mb-2 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{avgLevel}%</div>
                  <div className="text-sm text-gray-400">{category.name}</div>
                  <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      style={{ width: `${avgLevel}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Add required animations to globals.css */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;