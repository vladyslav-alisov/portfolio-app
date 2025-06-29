import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Backend Developer & Mobile App Specialist";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl animate-fade-in">
            VA
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 animate-slide-up">
              Vladyslav Alisov
            </h1>
            <div className="h-8 flex items-center justify-center">
              <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-slide-up animation-delay-1000">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <MapPin size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Ukrainian/Turkish</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Phone size={18} className="text-teal-500" />
                <span className="text-sm font-medium">+90 531 833 8411</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Mail size={18} className="text-purple-500" />
                <span className="text-sm font-medium">Available</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up animation-delay-1500">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore My Work
              <ChevronDown size={20} className="ml-2 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;