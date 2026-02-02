import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 80, color: 'bg-yellow-500' },
    { name: 'TensorFlow', level: 75, color: 'bg-orange-500' },
    { name: 'MongoDB', level: 85, color: 'bg-green-600' },
    { name: 'AWS', level: 70, color: 'bg-yellow-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;