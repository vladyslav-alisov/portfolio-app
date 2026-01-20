import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Github, 
  Send, ExternalLink, Copy, Check 
} from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      label: "Email",
      value: "vladyslav.alisov@gmail.com",
      href: "mailto:vladyslav.alisov@gmail.com",
      copyText: "vladyslav.alisov@gmail.com"
    },
    {
      icon: <Phone className="text-teal-500" size={24} />,
      label: "Phone",
      value: "+90 531 833 8411",
      href: "tel:+905318338411",
      copyText: "+905318338411"
    },
    {
      icon: <MapPin className="text-purple-500" size={24} />,
      label: "Location",
      value: "Antalya, Turkey",
      href: null,
      copyText: "Antalya, Turkey"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vladyslav-alisov-a82769153",
      color: "hover:bg-blue-50 hover:text-blue-600"
    },
    {
      icon: <Github className="text-gray-800" size={24} />,
      label: "GitHub",
      href: "https://github.com/vladyslav-alisov",
      color: "hover:bg-gray-50 hover:text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'm always interested in discussing 
            new opportunities and innovative challenges in backend development and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center space-x-4">
                      {info.icon}
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(info.copyText, info.label.toLowerCase())}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200"
                      title="Copy to clipboard"
                    >
                      {copied === info.label.toLowerCase() ? (
                        <Check size={18} className="text-green-500" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Find Me Online
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 p-3 bg-white rounded-lg shadow-md transition-all duration-300 ${social.color} hover:shadow-lg hover:scale-105`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.label}</span>
                    <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium py-3 px-6 rounded-md hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
