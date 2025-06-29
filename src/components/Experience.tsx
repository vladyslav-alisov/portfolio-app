import React from 'react';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "DANNIE CC",
      position: "Backend Developer",
      location: "Antalya, Turkey",
      period: "Nov 2024 – Current",
      type: "ERP System Development",
      description: "Contributing to the development of a complex ERP system comprising multiple applications.",
      achievements: [
        "Working with a custom-built framework based on Node.js and WebSockets",
        "Gaining hands-on experience in backend architecture and scalable, real-time systems"
      ],
      current: true
    },
    {
      company: "LIFETECH Studio GmbH",
      position: "Lead Flutter Developer",
      location: "Antalya, Turkey",
      period: "Nov 2022 – July 2024",
      type: "GoEcoFit Project (Remote Patient Monitoring)",
      description: "Led architecture and business logic decisions for a corporate health platform.",
      achievements: [
        "Led architecture and business logic decisions for the Flutter app alongside one other Flutter and one React developer",
        "Maintained direct communication with the CEO; assisted in guiding frontend development",
        "Developed backend services using FHIR API and the Medplum platform, including CRON jobs and RESTful endpoints"
      ],
      current: false
    },
    {
      company: "LIFETECH Studio GmbH",
      position: "Flutter & React Native Developer",
      location: "Antalya, Turkey",
      period: "Mar 2021 – Nov 2022",
      type: "Actimi Project (Corporate Health Solutions)",
      description: "Developed mobile applications for remote patient monitoring with medical device integrations.",
      achievements: [
        "Initially contributed to a Flutter-based remote patient monitoring app",
        "Transitioned to React Native following company direction",
        "Developed integrations for BLE medical devices (ECG, blood pressure, temperature, etc.) using native modules",
        "Created a TypeScript SDK for standardized communication with medical hardware using custom data transmission protocols"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through innovative tech companies, building scalable solutions 
            and leading development teams in the health tech industry.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                  exp.current ? 'bg-blue-500' : 'bg-teal-500'
                }`}>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          exp.current ? 'bg-blue-100' : 'bg-teal-100'
                        }`}>
                          <Building2 size={20} className={
                            exp.current ? 'text-blue-600' : 'text-teal-600'
                          } />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">
                            {exp.type}
                          </p>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full animate-pulse">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Position and Details */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {exp.position}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900 text-sm">Key Achievements:</h5>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <ChevronRight size={16} className={`mt-0.5 flex-shrink-0 ${
                            exp.current ? 'text-blue-500' : 'text-teal-500'
                          }`} />
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;