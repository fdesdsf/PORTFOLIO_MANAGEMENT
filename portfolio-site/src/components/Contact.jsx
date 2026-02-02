import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
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
    
    // Replace these with YOUR EmailJS credentials
    const serviceID = 'service_i3jadyk';      // Get from EmailJS dashboard
    const templateID = 'template_8co3vh8';    // Get from EmailJS dashboard  
    const publicKey = 'QYenuofxPIQp0lXMJ';      // Get from EmailJS dashboard
    
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'xabiiib0790@gmail.com'  // Your email
    }, publicKey)
    .then((result) => {
      console.log('Email sent successfully!', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      console.error('Email send failed:', error);
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
      link: "mailto:xabiiib0790@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+254 741 848 348",
      link: "tel:+254741848348"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi+Kenya"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? I'll respond within 24 hours!
        </p>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-green-500/20 border border-green-500 rounded-lg">
            <p className="text-green-400 text-center">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-500/20 border border-red-500 rounded-lg">
            <p className="text-red-400 text-center">
              ❌ Failed to send message. Please email me directly at xabiiib0790@gmail.com
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <div className="text-xl text-white">{info.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{info.title}</h4>
                    <a 
                      href={info.link} 
                      target={info.title === 'Location' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/ahmed-muhamed-5b37a5184" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} className="text-white" />
                </a>
                <a 
                  href="https://github.com/fdesdsf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                  title="GitHub"
                >
                  <FaGithub size={20} className="text-white" />
                </a>
                <a 
                  href="https://x.com/xabiiib0790" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                  title="Twitter/X"
                >
                  <FaTwitter size={20} className="text-white" />
                </a>
                <a 
                  href="mailto:xabiiib0790@gmail.com" 
                  className="p-3 bg-gray-800 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                  title="Email"
                >
                  <FaEnvelope size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-white resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
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
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                Your message will be sent directly to my email inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;