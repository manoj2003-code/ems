'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
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

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Marcus Johnson',
      position: 'Operations Manager',
      company: 'Global Solutions Ltd.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      content: 'The attendance tracking feature has eliminated time theft and improved our workforce management significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'CEO',
      company: 'Startup Ventures',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      content: 'As we scaled from 10 to 100 employees, this platform grew with us. The scalability is impressive.',
      rating: 5
    }
  ];


  return (
    <section id="testimonials-section" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                100+ Companies
              </span>{' '}
              Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join industry leaders who have transformed their HR operations with our platform
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits & Stats */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Main Benefit Cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: '⏱️',
                  title: 'Saves Time',
                  description: 'Automate repetitive tasks and focus on strategic initiatives'
                },
                {
                  icon: '🎯',
                  title: 'Increases Accuracy',
                  description: 'Eliminate human errors in payroll and attendance tracking'
                },
                {
                  icon: '📈',
                  title: 'Improves Productivity',
                  description: 'Empower employees with self-service tools and mobile access'
                },
                {
                  icon: '💰',
                  title: 'Reduces Costs',
                  description: 'Lower administrative costs and optimize workforce utilization'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;