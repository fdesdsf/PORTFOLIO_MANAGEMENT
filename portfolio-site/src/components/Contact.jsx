// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaLinkedin, FaGithub, FaTwitter, 
  FaPaperPlane, FaWhatsapp, FaDiscord 
} from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceID = 'service_i3jadyk';
    const templateID = 'template_8co3vh8';
    const publicKey = 'QYenuofxPIQp0lXMJ';
    
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'xabiiib0790@gmail.com'
    }, publicKey)
    .then((result) => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "xabiiib0790@gmail.com",
      link: "mailto:xabiiib0790@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+254 741 848 348",
      link: "tel:+254741848348",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+254 741 848 348",
      link: "https://wa.me/254741848348",
      color: "from-green-600 to-green-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi+Kenya",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/fdesdsf", name: "GitHub", color: "hover:bg-gray-700" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ahmed-muhamed-5b37a5184", name: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, url: "https://x.com/xabiiib0790", name: "Twitter", color: "hover:bg-blue-400" },
    { icon: <FaDiscord />, url: "https://discord.com/users/abib", name: "Discord", color: "hover:bg-indigo-600" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always excited to work on new challenges and bring ideas to life.
          </p>
        </motion.div>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`max-w-2xl mx-auto mb-8 p-4 rounded-lg ${
                submitStatus === 'success' 
                  ? 'bg-green-500/20 border border-green-500' 
                  : 'bg-red-500/20 border border-red-500'
              }`}
            >
              <p className={submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}>
                {submitStatus === 'success' 
                  ? '✅ Message sent successfully! I\'ll get back to you within 24 hours.' 
                  : '❌ Failed to send message. Please email me directly at xabiiib0790@gmail.com'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-xl group-hover:shadow-lg transition-all`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">{info.title}</h4>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 bg-gray-700/50 rounded-xl ${social.color} transition-all duration-300`}
                      title={social.name}
                    >
                      <div className="text-white text-xl">{social.icon}</div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="mt-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for freelance work</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  I'm currently open to new opportunities and collaborations. Let's build something amazing together!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-400 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 text-white resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                <p className="text-gray-500 text-sm text-center">
                  Your message will be sent directly to my email. I'll respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;