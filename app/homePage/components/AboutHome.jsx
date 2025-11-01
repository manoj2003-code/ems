'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheckIcon, 
  RocketLaunchIcon, 
  CpuChipIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: RocketLaunchIcon,
      title: 'Lightning Fast',
      description: 'Built with Next.js for optimal performance and speed',
      color: 'text-purple-400'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security to protect your employee data',
      color: 'text-green-400'
    },
    {
      icon: CpuChipIcon,
      title: 'Modern Tech Stack',
      description: 'Utilizes the latest technologies for seamless experience',
      color: 'text-blue-400'
    },
    {
      icon: ChartBarIcon,
      title: 'Scalable Solution',
      description: 'Grows with your business from startup to enterprise',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Revolutionize Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  HR Management
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Employee Management System helps organizations manage employee data, 
                attendance, payroll, and performance seamlessly. Built with Next.js and 
                Tailwind CSS for speed, security, and reliability.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the future of HR management with our intuitive platform that 
                automates tedious tasks, provides real-time insights, and empowers your 
                team to focus on what matters most—your people.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">75%</div>
                <div className="text-gray-600 text-sm">Time Saved</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-gray-600 text-sm">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">4.8/5</div>
                <div className="text-gray-600 text-sm">User Rating</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white group-hover:shadow-md transition-all duration-300 ${feature.color.replace('text', 'bg')} bg-opacity-10`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;