// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaHeart, FaRocket, FaCode, FaArrowUp,
  FaMapMarkerAlt, FaPhone, FaRegCopyright,
  FaBrain, FaCloud  // Added FaBrain and FaCloud here!
} from 'react-icons/fa';
import { 
  SiReact, SiTailwindcss, SiFramer, SiNodedotjs  // Added SiNodedotjs
} from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/fdesdsf", 
      name: "GitHub",
      color: "hover:bg-gray-700",
      bgColor: "bg-gray-700"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/ahmed-muhamed-5b37a5184", 
      name: "LinkedIn",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <FaTwitter />, 
      url: "https://x.com/xabiiib0790", 
      name: "Twitter/X",
      color: "hover:bg-blue-400",
      bgColor: "bg-blue-400"
    },
    { 
      icon: <FaEnvelope />, 
      url: "mailto:xabiiib0790@gmail.com", 
      name: "Email",
      color: "hover:bg-red-500",
      bgColor: "bg-red-500"
    },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Nairobi, Kenya" },
    { icon: <FaPhone />, text: "+254 741 848 348" },
    { icon: <FaEnvelope />, text: "xabiiib0790@gmail.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-dark overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section with Gradient Border */}
        <div className="relative pt-16 pb-12">
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AHMED ABIB</h3>
                  <p className="text-sm text-gray-400">CS Graduate & AI Enthusiast</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building intelligent solutions that bridge academic knowledge with real-world applications. 
                Computer Science graduate specializing in Full-Stack Development and AI/ML.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-400 group">
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {info.icon}
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="group-hover:translate-x-2 transition-transform">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <SiReact />, name: 'React', color: 'text-cyan-400' },
                  { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-400' },
                  { icon: <SiFramer />, name: 'Framer', color: 'text-purple-400' },
                  { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-500' },
                  { icon: <FaBrain />, name: 'AI/ML', color: 'text-purple-400' },
                  { icon: <FaCloud />, name: 'Cloud', color: 'text-blue-400' },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300 flex items-center gap-2">
                      <span className={`text-lg ${tech.color}`}>{tech.icon}</span>
                      <span className="text-sm text-white">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-r from-accent to-pink-500 rounded-full"></span>
                Let's Connect
              </h4>
              
              <p className="text-gray-400 mb-6 text-sm">
                Have a project in mind or want to collaborate? I'm always excited to work on new challenges!
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group w-full justify-center"
              >
                <FaRocket className="group-hover:rotate-12 transition-transform" />
                Start a Project
              </a>

              {/* Social Icons */}
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-3">Follow me:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="p-3 bg-gray-800/50 rounded-xl hover:bg-primary/20 transition-all duration-300 relative group"
                      title={social.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
                      <div className="relative text-white text-lg">{social.icon}</div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800/50 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaRegCopyright />
              <span>{currentYear} AHMED ABIB. All rights reserved.</span>
            </div>

            Built with Love
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Built with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span className="text-gray-500">using</span>
              <span className="text-white bg-gray-800 px-2 py-1 rounded-lg text-xs font-mono">
                React + Tailwind
              </span>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-800/50 rounded-xl hover:bg-primary/20 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-gray-400 group-hover:text-white transition-colors" />
            </motion.button>
          </div>

          {/* Made with Pride */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs">
              Designed & Developed by Ahmed Abib • Computer Science Graduate • Nairobi, Kenya
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;