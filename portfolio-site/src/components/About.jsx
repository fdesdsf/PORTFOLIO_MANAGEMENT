// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaBrain, FaCloud, 
  FaUserGraduate, FaHeart, FaRocket, FaAward,
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaUniversity, FaLaptopCode
} from 'react-icons/fa';
import { 
  SiTensorflow, SiReact, SiNodedotjs
} from 'react-icons/si';

const About = () => {
  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "University of Nairobi",
      // period: "2018 - 2022",
      description: "Graduated with focus on Software Engineering, AI/ML, and Database Systems",
      achievements: [
        "First Class Honors",
        "Specialized in Machine Learning & AI",
        "Thesis: 'AI-Powered Web Applications'"
      ],
      icon: <FaUniversity />,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const academicSkills = [
    { name: 'Data Structures & Algorithms', level: 95, icon: <FaLaptopCode />, color: 'text-blue-400' },
    { name: 'Database Management', level: 90, icon: <FaCode />, color: 'text-green-400' },
    { name: 'Machine Learning', level: 85, icon: <FaBrain />, color: 'text-purple-400' },
    { name: 'Software Engineering', level: 92, icon: <FaCode />, color: 'text-orange-400' },
    { name: 'Computer Networks', level: 80, icon: <FaCloud />, color: 'text-yellow-400' },
    { name: 'Operating Systems', level: 85, icon: <FaLaptopCode />, color: 'text-pink-400' }
  ];

  const expertiseAreas = [
    {
      title: 'Full-Stack Development',
      icon: <FaCode />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building scalable web applications with modern frameworks',
      skills: ['React', 'Node.js', 'MongoDB', 'Next.js'],
      academic: 'Software Engineering, Web Technologies'
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaBrain />,
      color: 'from-purple-500 to-pink-500',
      description: 'Integrating ML models into production applications',
      skills: ['TensorFlow', 'Python', 'Data Science', 'NLP'],
      academic: 'Machine Learning, Data Mining, Neural Networks'
    },
    {
      title: 'System Design',
      icon: <FaCode />,
      color: 'from-green-500 to-emerald-500',
      description: 'Designing scalable, distributed systems',
      skills: ['System Architecture', 'Design Patterns', 'Microservices'],
      academic: 'Software Architecture, Distributed Systems'
    },
    {
      title: 'DevOps & Cloud',
      icon: <FaCloud />,
      color: 'from-orange-500 to-red-500',
      description: 'Ensuring smooth deployment and scalability',
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
      academic: 'Cloud Computing, Network Security'
    }
  ];

  const stats = [
    { label: 'CS Degree', value: 'BSc Honors', icon: <FaUniversity />, color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Built', value: '50+', icon: <FaRocket />, color: 'from-purple-500 to-pink-500' },
    { label: 'Technologies', value: '30+', icon: <FaCode />, color: 'from-green-500 to-emerald-500' },
    { label: 'Certifications', value: '8+', icon: <FaAward />, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Computer Science graduate passionate about building intelligent solutions that bridge 
            academic knowledge with real-world applications.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{ background: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` }}
              ></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-transparent transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-xl mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Education Section */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                  <FaUniversity />
                </span>
                Computer Science Degree
              </h3>
              
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 mb-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white text-2xl`}>
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-blue-400 font-semibold">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Academic Skills */}
              <h4 className="text-xl font-bold text-white mb-4">Core Academic Strengths</h4>
              <div className="space-y-4">
                {academicSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={skill.color}>{skill.icon}</span>
                        <span className="text-white">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Expertise Areas */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Applying Computer Science</h3>
              <p className="text-gray-400 mb-8">
                My computer science education provides the theoretical foundation for building robust, 
                efficient, and scalable applications.
              </p>
            </div>

            <div className="grid gap-4 mb-8">
              {expertiseAreas.map((area) => (
                <div
                  key={area.title}
                  className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                      {area.icon}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{area.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{area.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {area.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-xs text-blue-400">
                        <span className="font-semibold">Academic Foundation:</span> {area.academic}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Full Width Quick Facts Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Title Section */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white">
                    <FaHeart />
                  </span>
                  Quick Facts
                </h3>
                <p className="text-gray-400">
                  A snapshot of my academic background and professional journey in computer science.
                </p>
              </div>

              {/* Facts Grid */}
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {[
                    { label: 'Degree', value: 'BSc Computer Science (Honors)', icon: '🎓' },
                    { label: 'Specialization', value: 'Software Engineering & AI', icon: '🤖' },
                    { label: 'Experience', value: '5+ Years Coding', icon: '💻' },
                    { label: 'Location', value: 'Nairobi, Kenya', icon: '📍' },
                    { label: 'Availability', value: 'Open for Opportunities', icon: '✅' },
                    { label: 'Languages', value: 'JavaScript, Python, Java, C++', icon: '🔤' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-center gap-3 group hover:bg-gray-700/30 p-3 rounded-xl transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">{fact.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm">{fact.label}</p>
                        <p className="text-white font-medium text-sm md:text-base">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote and Social Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 pt-4 border-t border-gray-700">
                  {/* Quote */}
                  <div className="flex-1 relative p-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl border border-blue-500/20">
                    <p className="text-gray-300 italic text-center text-sm md:text-base">
                      "Bridging computer science theory with practical, real-world applications."
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {[
                      { icon: <FaGithub />, url: "https://github.com/fdesdsf" },
                      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ahmed-muhamed-5b37a5184" },
                      { icon: <FaTwitter />, url: "https://x.com/xabiiib0790" },
                      { icon: <FaEnvelope />, url: "mailto:xabiiib0790@gmail.com" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700/50 rounded-xl hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                      >
                        <div className="text-white text-lg">{social.icon}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;