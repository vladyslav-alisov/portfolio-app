import React from 'react';
import { 
  Code2, Database, Smartphone, Server, 
  Zap, Cloud, GitBranch, Users 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-blue-500" size={24} />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "WebSockets", level: 85 },
        { name: "RESTful APIs", level: 95 },
        { name: "FHIR API", level: 80 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-teal-500" size={24} />,
      skills: [
        { name: "Flutter", level: 95 },
        { name: "React Native", level: 88 },
        { name: "BLE Integration", level: 85 },
        { name: "Native Modules", level: 82 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="text-purple-500" size={24} />,
      skills: [
        { name: "SQL/NoSQL", level: 88 },
        { name: "Real-time Systems", level: 85 },
        { name: "CRON Jobs", level: 90 },
        { name: "Medplum Platform", level: 75 }
      ]
    },
    {
      title: "Leadership & Tools",
      icon: <Users className="text-orange-500" size={24} />,
      skills: [
        { name: "Team Leadership", level: 92 },
        { name: "Architecture Design", level: 88 },
        { name: "TypeScript", level: 90 },
        { name: "SDK Development", level: 85 }
      ]
    }
  ];

  const technologies = [
    { name: "Node.js", color: "bg-green-100 text-green-800" },
    { name: "Flutter", color: "bg-blue-100 text-blue-800" },
    { name: "React Native", color: "bg-cyan-100 text-cyan-800" },
    { name: "WebSockets", color: "bg-purple-100 text-purple-800" },
    { name: "TypeScript", color: "bg-indigo-100 text-indigo-800" },
    { name: "FHIR API", color: "bg-red-100 text-red-800" },
    { name: "BLE", color: "bg-yellow-100 text-yellow-800" },
    { name: "ERP Systems", color: "bg-pink-100 text-pink-800" },
    { name: "REST APIs", color: "bg-teal-100 text-teal-800" },
    { name: "Medplum", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technical skills developed through years of hands-on experience 
            in backend development, mobile applications, and team leadership.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} hover:scale-105 transition-transform duration-200 cursor-default`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;