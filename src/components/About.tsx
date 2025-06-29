import React from 'react';
import { Code2, Database, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Database className="text-blue-500" size={24} />,
      title: "Backend Architecture",
      description: "Expert in Node.js, WebSockets, and scalable system design"
    },
    {
      icon: <Smartphone className="text-teal-500" size={24} />,
      title: "Mobile Development",
      description: "Proficient in Flutter and React Native with BLE integrations"
    },
    {
      icon: <Code2 className="text-purple-500" size={24} />,
      title: "API Development",
      description: "FHIR API, RESTful services, and custom SDK creation"
    },
    {
      icon: <Globe className="text-orange-500" size={24} />,
      title: "ERP Systems",
      description: "Complex enterprise solutions and real-time applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced software developer with a passion for creating scalable backend systems 
            and innovative mobile applications in the health tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated software developer with extensive experience in backend development 
              and mobile app creation. Currently working on complex ERP systems at DANNIE CC, 
              I specialize in building robust, scalable solutions using modern technologies.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise spans from custom Node.js frameworks and WebSocket implementations 
              to Flutter and React Native mobile applications. I have a proven track record 
              in health tech, having led development teams and architected solutions for 
              remote patient monitoring and corporate health platforms.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Strengths</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Leadership in cross-functional development teams
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Direct stakeholder communication and technical guidance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Medical device integration and BLE protocol expertise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Custom SDK development and API architecture
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h4 className="text-lg font-semibold text-gray-900 ml-3">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;