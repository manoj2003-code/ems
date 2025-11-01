'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  const teamMembers = [
    {
      name: 'Manoj Nagpure',
      role: 'CEO & Founder',
      image: '/team/sarah.jpg',
      bio: '5+ years in HR technology and enterprise software',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Suraj Vishwakarma ',
      role: 'CTO',
      image: '/team/michael.jpg',
      bio: 'Former tech lead at Fortune 100 companies',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Nikil Wagh',
      role: 'Head of Product',
      image: '/team/emily.jpg',
      bio: 'Product management expert with HR domain knowledge',
      social: { linkedin: '#', twitter: '#' }
    },
    
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'EMPower was born to revolutionize HR management'
    },
    {
      year: '2019',
      title: 'First Product Launch',
      description: 'Launched our core Employee Management System'
    },
    {
      year: '2020',
      title: '100+ Companies',
      description: 'Reached milestone of 100+ satisfied business clients'
    },
    {
      year: '2021',
      title: 'Mobile App Launch',
      description: 'Released native mobile apps for iOS and Android'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded services to 5 new countries'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Integrated AI-powered analytics and insights'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as top HR tech solution provider'
    }
  ];

  const values = [
    {
      icon: UserGroupIcon,
      title: 'People First',
      description: 'We believe that businesses thrive when their employees are empowered and supported.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Trust',
      description: 'Enterprise-grade security to protect your most valuable asset - employee data.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Innovation',
      description: 'Constantly evolving our platform with cutting-edge technology and features.'
    },
    {
      icon: HeartIcon,
      title: 'Customer Success',
      description: 'Your success is our success. We go above and beyond for our clients.'
    },
    {
      icon: ChartBarIcon,
      title: 'Data-Driven',
      description: 'Making decisions based on data and measurable results for continuous improvement.'
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in everything we do.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Companies Trust Us' },
    { number: '500+', label: 'Employees Managed' },
    { number: '99.9%', label: 'Uptime Reliability' },
    { number: '24/7', label: 'Customer Support' },
    { number: '10+', label: 'Countries Served' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">EMPower</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              <em>" Revolutionizing how organizations manage their workforce through innovative technology and unwavering commitment to excellence. "</em>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8">
            {[
              { id: 'story', name: 'Our Story' },
              { id: 'mission', name: 'Mission & Vision' },
              { id: 'team', name: 'Our Team' },
              { id: 'values', name: 'Values' },  
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story Tab */}
        {activeTab === 'story' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2025, EMPower emerged from a simple observation: traditional HR systems were 
                    failing to meet the evolving needs of modern businesses. We saw an opportunity to create 
                    something better - a platform that combines powerful functionality with intuitive design.
                  </p>
                  <p>
                    What started as a small team of passionate developers and HR experts has grown into a 
                    trusted partner for hundreds of companies worldwide. Our journey has been guided by a 
                    commitment to innovation, quality, and customer satisfaction.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of HR technology, helping organizations of all 
                    sizes streamline their operations, empower their employees, and drive business growth.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Why Choose EMPower?</h3>
                  {[
                    'Built by HR experts for HR professionals',
                    'Scalable solutions for businesses of all sizes',
                    'Continuous innovation and updates',
                    'Dedicated customer success team',
                    'Enterprise-grade security',
                    'Intuitive user experience'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckBadgeIcon className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mission & Vision Tab */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with intelligent, user-friendly tools that simplify HR management, 
                enhance employee engagement, and drive operational excellence. We believe that when companies 
                can focus on their people rather than paperwork, everyone thrives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <ChartBarIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the global standard for employee management solutions, recognized for our innovation, 
                reliability, and unwavering commitment to customer success. We envision a world where every 
                organization, regardless of size, has access to enterprise-grade HR technology.
              </p>
            </div>

            <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Promise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">Innovate</div>
                  <p className="text-blue-100">Continuously improve and adapt to changing needs</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Empower</div>
                  <p className="text-blue-100">Provide tools that enable growth and success</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Support</div>
                  <p className="text-blue-100">Be there for our customers every step of the way</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 text-lg">
                A diverse group of passionate professionals dedicated to transforming HR technology 
                and delivering exceptional value to our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <button className="text-gray-400 hover:text-blue-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        {/* LinkedIn icon would go here */}
                      </button>
                      <button className="text-gray-400 hover:text-blue-400 transition-colors">
                        <span className="sr-only">Twitter</span>
                        {/* Twitter icon would go here */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about making a difference 
                in the world of HR technology.
              </p>
             
            </div>
          </div>
        )}

        {/* Values Tab */}
        {activeTab === 'values' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 text-lg">
                These core principles guide everything we do - from product development to customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;