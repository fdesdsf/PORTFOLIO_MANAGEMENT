// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, FaTimes, FaCode, FaBrain,
  FaHome, FaUser, FaCog, FaProjectDiagram, FaEnvelope
} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCog /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      y: 0,
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark/80 backdrop-blur-xl py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Gradient Border Bottom when scrolled */}
      {scrolled && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      )}

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Hover Effect */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <FaCode className="text-white text-xl" />
              </div>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-30 blur"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white leading-tight">Abib Ahmed</h1>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <FaBrain className="text-secondary" size={10} />
                Full-Stack Developer & AI Enthusiast
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`text-sm ${
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {item.icon}
                  </span>
                  {item.name}
                </span>
                
                {/* Active Indicator */}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 rounded-xl transition-opacity" />
            <span className="relative text-white">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </span>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden mt-4"
            >
              <div className="glass-effect rounded-2xl p-6 border border-gray-700/50 backdrop-blur-xl">
                {/* Mobile Nav Items */}
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      variants={mobileItemVariants}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      <span className={activeSection === item.href.substring(1) ? 'text-primary' : 'text-gray-500'}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                        />
                      )}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Hire Me Button */}
                <motion.a
                  variants={mobileItemVariants}
                  href="#contact"
                  className="mt-4 flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Hire Me</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.a>

                {/* Mobile Availability Badge */}
                <motion.div 
                  variants={mobileItemVariants}
                  className="mt-4 text-center"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent origin-left"
          style={{ scaleX: 0 }}
        />
      )}
    </motion.header>
  );
};

export default Header;