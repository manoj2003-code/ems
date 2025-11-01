'use client';

import { useState, useEffect } from 'react';
import {
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentChartBarIcon,
  UserGroupIcon,
  CogIcon,
  BellAlertIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const FeaturesSection = () => {
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

    const element = document.getElementById('features-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: UsersIcon,
      title: 'Employee Data Management',
      description: 'Centralized employee profiles with comprehensive data management and easy access to all employee information.',
    
    },
    {
      icon: ClockIcon,
      title: 'Attendance & Leave Tracking',
      description: 'Automated time tracking, leave management, and real-time attendance monitoring with geolocation support.',
     
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Payroll Automation',
      description: 'Streamlined payroll processing with tax calculations, direct deposit, and comprehensive reporting.',
     
    },
    {
      icon: ChartBarIcon,
      title: 'Reports & Analytics',
      description: 'Advanced analytics and customizable reports for data-driven decision making and performance insights.',
      
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure Login System',
      description: 'Multi-factor authentication, role-based access control, and enterprise-grade security protocols.'
    },
    {
      icon: DocumentChartBarIcon,
      title: 'Performance Management',
      description: '360-degree feedback, goal setting, performance reviews, and career development tracking.',
    },
    {
      icon: UserGroupIcon,
      title: 'Team Management',
      description: 'Organizational chart, team collaboration tools, and department management features.',
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Customizable workflows for approvals, onboarding, offboarding, and routine HR processes.',
    },
  ];

  return (
    <section id="features-section" className="py-20 bg-gradient-to-br from-gray-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Modern HR Teams
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently in one comprehensive platform
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="space-y-4">
                
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Indicator */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
              <p className="text-gray-600">Join thousands of companies managing their workforce efficiently</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Sign Up For Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;