import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaBrain, FaDatabase } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 md:pt-32 bg-gradient-to-b from-dark to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                👋 Hello, I'm
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Abib <span className="gradient-text">Ahmed</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
              Full-Stack Developer & <span className="text-secondary">AI Enthusiast</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl">
              I build intelligent web applications that combine modern design with 
              machine learning capabilities. Passionate about creating seamless 
              user experiences powered by cutting-edge technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400">Follow me:</span>
              <div className="flex gap-4">
                <a href="https://github.com/fdesdsf" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-xl hover:bg-primary/20 transition-colors">
                  <FaGithub size={20} className="text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/in/ahmed-muhamed-5b37a5184" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-xl hover:bg-primary/20 transition-colors">
                  <FaLinkedin size={20} className="text-gray-300" />
                </a>
                <a href="https://x.com/xabiiib0790" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-xl hover:bg-primary/20 transition-colors">
                  <FaTwitter size={20} className="text-gray-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Picture & Tech */}
          <div className="relative">
            {/* Profile Picture Container */}
            <div className="relative mx-auto max-w-md mb-10">
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img 
                    src="/images/profile.png" 
                    alt="Abib Ahmed - Full Stack Developer"
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
              
              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <FaBrain className="text-white text-xl" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <FaDatabase className="text-white text-lg" />
              </div>
            </div>
            
            {/* Tech Stack Summary */}
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Tech Expertise</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Frontend', level: 90, color: 'from-blue-500 to-cyan-500' },
                  { name: 'Backend', level: 85, color: 'from-green-500 to-emerald-500' },
                  { name: 'AI/ML', level: 80, color: 'from-purple-500 to-pink-500' },
                ].map((skill) => (
                  <div key={skill.name} className="text-center">
                    <div className={`h-2 bg-gray-700 rounded-full overflow-hidden mb-2`}>
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="font-medium text-white text-sm">{skill.name}</div>
                    <div className="text-gray-400 text-xs">{skill.level}%</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Open for opportunities</span>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2">
              <a href="#about" className="animate-bounce inline-block">
                <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center bg-primary/10">
                  <FaArrowDown className="text-primary" />
                </div>
                <p className="text-gray-400 text-sm mt-2 text-center">Scroll to explore</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;