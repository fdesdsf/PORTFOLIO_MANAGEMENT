// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaArrowDown, 
  FaCode, FaBrain, FaDatabase
} from 'react-icons/fa';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    'Full-Stack Developer',
    'AI Enthusiast',
    'CS Graduate',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-dark via-gray-900 to-dark pt-16 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-8 lg:pt-12"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-primary font-semibold text-sm">👋 Hello, I'm</span>
            </div>
            
            {/* Name - Now on one line */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white whitespace-nowrap">
                Abib Ahmed
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
            </div>
            
            {/* Animated Role */}
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl text-gray-300 flex items-center gap-2">
                <span>I'm a</span>
                <motion.span
                  key={roles[currentIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-secondary font-bold"
                >
                  {roles[currentIndex]}
                </motion.span>
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Computer Science graduate passionate about building intelligent 
              web applications that combine modern design with machine learning 
              capabilities. I create seamless user experiences powered by 
              cutting-edge technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-gray-500 text-sm uppercase tracking-wider">Connect</span>
              <div className="h-px w-12 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="flex gap-3">
                <a href="https://github.com/fdesdsf" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-gray-800/50 rounded-xl hover:bg-primary/20 transition-colors">
                  <FaGithub className="text-white text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/ahmed-muhamed-5b37a5184" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-gray-800/50 rounded-xl hover:bg-primary/20 transition-colors">
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a href="https://x.com/xabiiib0790" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-gray-800/50 rounded-xl hover:bg-primary/20 transition-colors">
                  <FaTwitter className="text-white text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Profile Image Only - RAISED WITH NEGATIVE MARGIN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative lg:-mt-20"
          >
            {/* Profile Image Container */}
            <div className="relative max-w-md mx-auto">
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="w-72 h-72 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img 
                    src="/images/profile.png" 
                    alt="Abib Ahmed"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://ui-avatars.com/api/?name=Abib+Ahmed&background=3B82F6&color=fff&size=400&bold=true";
                    }}
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-xl"></div>
                
                {/* Animated Rings */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-ping"></div>
                <div className="absolute inset-4 border-2 border-secondary/30 rounded-full"></div>
              </div>
              
              {/* Floating Tech Badges - NOW VISIBLE */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl z-20">
                <FaCode className="text-white text-xl" />
                <span className="text-white text-sm font-semibold">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl z-20">
                <FaBrain className="text-white text-xl" />
                <span className="text-white text-sm font-semibold">AI/ML</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-xl z-20">
                <FaDatabase className="text-white text-lg" />
              </div> */}
              
              {/* Projects Count Badge - NOW VISIBLE */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-secondary rounded-xl p-4 shadow-xl z-20">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/80">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-3 group">
            <span className="text-gray-500 text-sm uppercase tracking-wider group-hover:text-primary transition-colors">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-primary transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 bg-primary rounded-full mt-2"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;