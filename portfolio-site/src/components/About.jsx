import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Full-Stack Developer passionate about building intelligent solutions that bridge design, code, and AI
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                I'm a passionate Full-Stack Developer with expertise in both frontend and backend technologies. 
                My journey in web development started with a curiosity for how things work, which evolved into 
                a career building scalable, user-friendly applications.
              </p>
              
              <p className="text-gray-300">
                As an AI/ML enthusiast, I constantly explore how machine learning can enhance user experiences 
                and create smarter applications. I enjoy integrating AI capabilities into web applications to 
                solve real-world problems more effectively.
              </p>
              
              <p className="text-gray-300">
                I combine my UI/UX design skills with full-stack development to create solutions that are 
                not only functional but also intuitive and aesthetically pleasing.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">What I Do</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-blue-400 font-bold mb-2">Web Development</div>
                  <div className="text-gray-400 text-sm">React, Node.js, Databases, APIs</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-green-400 font-bold mb-2">AI/ML Integration</div>
                  <div className="text-gray-400 text-sm">TensorFlow, Python, Data Science</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-purple-400 font-bold mb-2">UI/UX Design</div>
                  <div className="text-gray-400 text-sm">Figma, User Research, Prototyping</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-yellow-400 font-bold mb-2">DevOps</div>
                  <div className="text-gray-400 text-sm">Docker, AWS, CI/CD, Deployment</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            
            <div className="space-y-6">
              {[
                { label: 'Focus Area', value: 'Full-Stack + AI Integration' },
                { label: 'Experience', value: 'Multiple Projects Completed' },
                { label: 'Learning Focus', value: 'Advanced ML Algorithms' },
                { label: 'Collaboration', value: 'Open to Team Projects' },
                { label: 'Location', value: 'Addis Ababa, Ethiopia' },
                { label: 'Availability', value: 'Open for Opportunities' },
              ].map((fact, index) => (
                <div key={index} className="flex justify-between border-b border-gray-700 pb-4">
                  <span className="text-gray-400">{fact.label}</span>
                  <span className="text-white font-medium">{fact.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-300 italic">
                "Building with purpose, designing with empathy, enhancing with intelligence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;