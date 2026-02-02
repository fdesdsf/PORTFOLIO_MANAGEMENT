import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">AHMED ABIB</h3>
            <p className="text-gray-400">Full-Stack Developer & AI Enthusiast</p>
          </div>
          
          <div className="flex gap-8 mb-8 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="text-center md:text-right">
            {/* <p className="text-gray-400">
              Built with <span className="text-red-500">❤️</span> and React
            </p> */}
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/fdesdsf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmed-muhamed-5b37a5184" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/xabiiib0790" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter/X
            </a>
            <a 
              href="mailto:xabiiib0790@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            Ready to bring your ideas to life? Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;