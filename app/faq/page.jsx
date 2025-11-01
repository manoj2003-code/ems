'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqs, setOpenFaqs] = useState([]);

  const categories = [
    { id: 'all', name: 'All Topics', icon: QuestionMarkCircleIcon, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: UserGroupIcon, count: 12 },
    { id: 'account', name: 'Account & Login', icon: CogIcon, count: 8 },
    { id: 'employees', name: 'Employee Management', icon: UserGroupIcon, count: 10 },
    { id: 'attendance', name: 'Attendance & Leave', icon: ChartBarIcon, count: 7 },
    { id: 'payroll', name: 'Payroll & Benefits', icon: DocumentTextIcon, count: 6 },
    { id: 'reports', name: 'Reports & Analytics', icon: ChartBarIcon, count: 5 },
    { id: 'security', name: 'Security & Privacy', icon: ShieldCheckIcon, count: 4 },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I add a new employee to the system?",
      answer: "To add a new employee, navigate to the Employees page and click the 'Add Employee' button. Fill in the required information including personal details, job information, and contact details. You can also bulk upload employees using our CSV template.",
      category: 'employees',
      tags: ['employees', 'onboarding', 'management']
    },
    {
      id: 2,
      question: "What should I do if I forget my password?",
      answer: "Click on the 'Forgot Password' link on the login page. Enter your registered email address and we'll send you a password reset link. The link will be valid for 1 hour. If you don't receive the email, check your spam folder or contact support.",
      category: 'account',
      tags: ['login', 'security', 'password']
    },
    {
      id: 3,
      question: "How does the attendance tracking system work?",
      answer: "Our attendance system allows employees to check in/out using web, mobile app, or biometric devices. Administrators can set up shift patterns, overtime rules, and leave policies. The system automatically calculates working hours and flags late arrivals or early departures.",
      category: 'attendance',
      tags: ['attendance', 'time-tracking', 'shifts']
    },
    {
      id: 4,
      question: "Can I customize the payroll calculation rules?",
      answer: "Yes, the payroll system is highly customizable. You can set up different salary structures, deductions, bonuses, and tax rules. The system supports multiple payment methods and can generate payslips automatically. Contact our support team to help configure complex payroll rules.",
      category: 'payroll',
      tags: ['payroll', 'salary', 'calculations']
    },
    {
      id: 5,
      question: "How do I generate custom reports?",
      answer: "Go to the Reports section and select 'Create Custom Report'. Choose the data fields you want to include, set filters and sorting options, and select your preferred output format (PDF, Excel, or CSV). You can save report templates for future use.",
      category: 'reports',
      tags: ['reports', 'analytics', 'export']
    },
    {
      id: 6,
      question: "Is my employee data secure?",
      answer: "Yes, we take data security very seriously. All data is encrypted in transit and at rest. We undergo regular security audits and comply with industry standards like SOC 2 and GDPR. Access controls ensure that only authorized personnel can view sensitive information.",
      category: 'security',
      tags: ['security', 'privacy', 'data-protection']
    },
    {
      id: 7,
      question: "How do I set up different user roles and permissions?",
      answer: "Navigate to Settings > User Management to configure roles and permissions. You can create custom roles with specific access levels for different modules. Common roles include Administrator, HR Manager, Team Lead, and Employee with varying levels of access.",
      category: 'account',
      tags: ['roles', 'permissions', 'access-control']
    },
    {
      id: 8,
      question: "Can I integrate with other HR systems?",
      answer: "Yes, we offer API integration with popular HR systems, accounting software, and time-tracking devices. We also support webhook notifications for real-time data sync. Check our integration documentation or contact sales for custom integration requirements.",
      category: 'getting-started',
      tags: ['integration', 'api', 'third-party']
    },
    {
      id: 9,
      question: "How do I process leave requests?",
      answer: "Employees can submit leave requests through their dashboard. Managers receive notifications and can approve/reject requests. The system automatically updates leave balances and can be configured with approval workflows for different leave types.",
      category: 'attendance',
      tags: ['leave', 'time-off', 'approvals']
    },
    {
      id: 10,
      question: "What types of analytics and insights are available?",
      answer: "We provide comprehensive analytics including attendance patterns, overtime trends, department performance, and employee engagement metrics. You can create custom dashboards and set up automated reports for regular insights.",
      category: 'reports',
      tags: ['analytics', 'insights', 'dashboard']
    },
    {
      id: 11,
      question: "How do I backup my data?",
      answer: "Automatic daily backups are performed by our system. You can also manually export data from the Settings > Backup & Export section. We retain backups for 30 days and provide options for full system export in multiple formats.",
      category: 'security',
      tags: ['backup', 'export', 'data-recovery']
    },
    {
      id: 12,
      question: "What support options are available?",
      answer: "We offer 24/7 email support, live chat during business hours, and phone support for enterprise customers. You can also access our knowledge base, video tutorials, and community forums for self-help options.",
      category: 'getting-started',
      tags: ['support', 'help', 'contact']
    }
  ];

  const popularArticles = [
    {
      title: "Setting Up Your Company Profile",
      description: "Complete guide to configuring your company settings",
      category: 'getting-started',
      views: '2.4K'
    },
    {
      title: "Understanding Attendance Reports",
      description: "How to interpret and use attendance analytics",
      category: 'reports',
      views: '1.8K'
    },
    {
      title: "Payroll Processing Checklist",
      description: "Step-by-step guide for monthly payroll processing",
      category: 'payroll',
      views: '1.5K'
    },
    {
      title: "Employee Self-Service Guide",
      description: "How employees can manage their own profiles and requests",
      category: 'employees',
      views: '1.2K'
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || QuestionMarkCircleIcon;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br mt-10 from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <QuestionMarkCircleIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Help Center
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions, guides, and support resources for EMPower EMS.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How can we help you?</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for answers, guides, or topics..."
                className="block w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <p className="text-gray-600 mt-4">
              Popular searches: <span className="text-blue-600 cursor-pointer hover:underline">password reset</span>, 
              <span className="text-blue-600 cursor-pointer hover:underline ml-2">attendance reports</span>, 
              <span className="text-blue-600 cursor-pointer hover:underline ml-2">payroll processing</span>
            </p>
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-left transition-colors duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <IconComponent className="w-5 h-5 mr-3" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Support */}
              {/* <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Support</h3>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-blue-600">Email Support</div>
                      <div className="text-sm text-gray-600">Typically responds in 2 hours</div>
                    </div>
                  </Link>
                  <Link
                    href="/live-chat"
                    className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors group"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-400 group-hover:text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-green-600">Live Chat</div>
                      <div className="text-sm text-gray-600">Available 9AM-6PM EST</div>
                    </div>
                  </Link>
                  <Link
                    href="/schedule-call"
                    className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors group"
                  >
                    <PhoneIcon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-purple-600">Schedule Call</div>
                      <div className="text-sm text-gray-600">Book a 1-on-1 session</div>
                    </div>
                  </Link>
                </div>
              </div> */}



            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Popular Articles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular Articles</h2>
                <Link href="/knowledge-base" className="text-blue-600 hover:text-blue-800 font-medium">
                  View all articles →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularArticles.map((article, index) => {
                  const IconComponent = getCategoryIcon(article.category);
                  return (
                    <Link
                      key={index}
                      href={`/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{article.views} views</span>
                          <span className="mx-2">•</span>
                          <span className="capitalize">{article.category.replace('-', ' ')}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                  {activeCategory !== 'all' && (
                    <span className="text-lg font-normal text-gray-600 ml-2">
                      ({categories.find(cat => cat.id === activeCategory)?.name})
                    </span>
                  )}
                </h2>
                <div className="text-sm text-gray-600">
                  Showing {filteredFaqs.length} of {faqs.length} questions
                </div>
              </div>

              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <QuestionMarkCircleIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
                  <p className="mt-2 text-gray-600">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <QuestionMarkCircleIcon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{faq.question}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {faq.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <svg
                            className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                              openFaqs.includes(faq.id) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {openFaqs.includes(faq.id) && (
                        <div className="px-6 pb-6">
                          <div className="pl-12 border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                              <span className="text-sm text-gray-500">Was this helpful?</span>
                              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                                Yes
                              </button>
                              <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                                No
                              </button>
                              <Link
                                href="/contact"
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium ml-auto"
                              >
                                Still need help?
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Link
                href="/documentation"
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <BookOpenIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive guides and API documentation for developers and administrators.
                </p>
              </Link>

              <Link
                href="/video-tutorials"
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <VideoCameraIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-gray-600 text-sm">
                  Step-by-step video guides for common tasks and features.
                </p>
              </Link>

              <Link
                href="/community"
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <UserGroupIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Forum</h3>
                <p className="text-gray-600 text-sm">
                  Connect with other users, share tips, and get community support.
                </p>
              </Link>
            </div>

            {/* Contact Support */}
            {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mt-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our support team is here to help you get the most out of EMPower EMS. 
                  Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition-colors duration-200"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/schedule-demo"
                    className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 font-semibold transition-colors duration-200"
                  >
                    Schedule a Demo
                  </Link>
                </div>
              </div>
            </div> */}



          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;