import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-dark to-gray-900">
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
          
          {/* Right Content - Tech Stack Visualization */}
          <div className="relative">
            {/* Animated Background Elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            
            {/* Tech Stack Cards */}
            <div className="relative glass-effect p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Tech Stack</h3>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { name: 'React', color: 'bg-blue-500', icon: '⚛️' },
                  { name: 'Node.js', color: 'bg-green-500', icon: '🟢' },
                  { name: 'Python', color: 'bg-yellow-500', icon: '🐍' },
                  { name: 'TensorFlow', color: 'bg-orange-500', icon: '🧠' },
                  { name: 'MongoDB', color: 'bg-green-600', icon: '🍃' },
                  { name: 'AWS', color: 'bg-yellow-600', icon: '☁️' },
                ].map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className={`${tech.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <div className="font-semibold text-white">{tech.name}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Full-Stack</span>
                  <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-4/5"></div>
                  </div>
                  <span className="text-primary font-bold">85%</span>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <a href="#about" className="animate-bounce inline-block">
                <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
                  <FaArrowDown className="text-primary" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;