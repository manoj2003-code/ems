'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  EyeIcon,
  UserGroupIcon,
  ServerIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Information' },
    { id: 'data-sharing', title: 'Data Sharing & Disclosure' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'international', title: 'International Transfers' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const lastUpdated = 'September 15, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br mt-10 from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protecting your data and privacy is our top priority. Learn how we collect, use, and safeguard your information.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-blue-200">
              <DocumentTextIcon className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Link
                    href="/contact"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span>Contact Privacy Team</span>
                  </Link>
                  <Link
                    href="/data-request"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span>Data Access Request</span>
                  </Link>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors w-full text-left"
                  >
                    <span>Print Policy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              {/* Introduction */}
              {activeSection === 'introduction' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                      <p className="text-gray-600">Our commitment to your privacy</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      At <strong>EMPower HR Solutions</strong> ("we," "our," or "us"), we are committed to protecting 
                      your privacy and ensuring the security of your personal information. This Privacy Policy explains 
                      how we collect, use, disclose, and safeguard your information when you use our Employee Management 
                      System (EMS) and related services.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Points</h3>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          We only collect necessary information to provide our services
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          Your data is protected with enterprise-grade security
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          We never sell your personal information to third parties
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          You have control over your data and privacy preferences
                        </li>
                      </ul>
                    </div>

                    <p>
                      This policy applies to all users of our platform, including employees, administrators, 
                      and visitors to our website. By using our services, you agree to the collection and use 
                      of information in accordance with this policy.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Definitions</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Personal Data:</strong> Any information that identifies or can be used to identify an individual</li>
                      <li><strong>Processing:</strong> Any operation performed on personal data</li>
                      <li><strong>Data Controller:</strong> The entity that determines the purposes and means of processing</li>
                      <li><strong>Data Processor:</strong> The entity that processes data on behalf of the controller</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Information We Collect */}
              {activeSection === 'information-collection' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <EyeIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                      <p className="text-gray-600">What data we collect and why</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      We collect several types of information to provide and improve our services to you. 
                      The information we collect depends on how you interact with our platform.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Employee Data</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Name and contact information</li>
                          <li>• Employee ID and position</li>
                          <li>• Work schedule and attendance</li>
                          <li>• Performance evaluations</li>
                          <li>• Salary and benefits information</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Account Data</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Email address and username</li>
                          <li>• Password (encrypted)</li>
                          <li>• Profile preferences</li>
                          <li>• Usage statistics</li>
                          <li>• Support communications</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">Automatically Collected Information</h3>
                    <p>
                      When you use our services, we automatically collect certain information about your device 
                      and usage patterns:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Log Data:</strong> IP address, browser type, pages visited, and timestamps</li>
                      <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers</li>
                      <li><strong>Usage Data:</strong> Feature usage, session duration, and interaction patterns</li>
                    </ul>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                      <div className="flex items-start space-x-3">
                        <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-yellow-900">Sensitive Information</h4>
                          <p className="text-yellow-800 text-sm mt-1">
                            We do not collect sensitive personal information (such as racial or ethnic origin, 
                            political opinions, religious beliefs, or health data) unless required by law or 
                            explicitly provided by you for specific purposes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* How We Use Information */}
              {activeSection === 'how-we-use' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <UserGroupIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">How We Use Information</h2>
                      <p className="text-gray-600">Purposes of data processing</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      We use the collected information for various business purposes described below. 
                      We process your personal information only when we have a valid legal basis to do so.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-3">Service Provision</h4>
                        <ul className="text-sm text-blue-800 space-y-2">
                          <li>• Employee management and payroll processing</li>
                          <li>• Attendance tracking and reporting</li>
                          <li>• Performance management</li>
                          <li>• Account administration</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3">Communication</h4>
                        <ul className="text-sm text-green-800 space-y-2">
                          <li>• Customer support and service updates</li>
                          <li>• Security alerts and notifications</li>
                          <li>• Platform announcements</li>
                          <li>• Policy changes</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-900 mb-3">Improvement</h4>
                        <ul className="text-sm text-purple-800 space-y-2">
                          <li>• Platform optimization and feature development</li>
                          <li>• User experience enhancement</li>
                          <li>• Service quality monitoring</li>
                          <li>• Bug detection and resolution</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-6">
                        <h4 className="font-semibold text-orange-900 mb-3">Security & Compliance</h4>
                        <ul className="text-sm text-orange-800 space-y-2">
                          <li>• Fraud prevention and security monitoring</li>
                          <li>• Legal compliance and regulatory requirements</li>
                          <li>• Contract enforcement</li>
                          <li>• Dispute resolution</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">Legal Bases for Processing</h3>
                    <p>We rely on the following legal bases for processing your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Contractual Necessity:</strong> Processing necessary for performing our contract with you</li>
                      <li><strong>Legal Obligation:</strong> Processing required to comply with legal requirements</li>
                      <li><strong>Legitimate Interests:</strong> Processing for our legitimate business interests</li>
                      <li><strong>Consent:</strong> Processing based on your explicit consent</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Data Sharing & Disclosure */}
              {activeSection === 'data-sharing' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <ServerIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Data Sharing & Disclosure</h2>
                      <p className="text-gray-600">When and with whom we share data</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      except as described in this policy. We may share your information in the following circumstances:
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Service Providers</h3>
                    <p>
                      We engage trusted third-party service providers to perform functions and provide services 
                      to us, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li>Cloud hosting and infrastructure providers</li>
                      <li>Payment processing services</li>
                      <li>Customer support platforms</li>
                      <li>Analytics and monitoring tools</li>
                      <li>Email and communication services</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Legal Requirements</h3>
                    <p>
                      We may disclose your information if required to do so by law or in response to valid 
                      requests by public authorities (e.g., court orders, subpoenas).
                    </p>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-red-900 mb-2">Important Notice</h4>
                      <p className="text-red-800 text-sm">
                        We require all third-party service providers to maintain the same level of data protection 
                        and security that we provide. They are prohibited from using your personal information for 
                        any purpose other than providing services to us.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Data Security */}
              {activeSection === 'data-security' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <LockClosedIcon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                      <p className="text-gray-600">How we protect your information</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      We implement appropriate technical and organizational security measures designed to 
                      protect the security of any personal information we process. However, despite our 
                      safeguards and efforts to secure your information, no electronic transmission over 
                      the Internet or information storage technology can be guaranteed to be 100% secure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Technical Measures</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            End-to-end encryption
                          </li>
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            Secure socket layer (SSL) technology
                          </li>
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            Regular security audits
                          </li>
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            Intrusion detection systems
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Organizational Measures</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            Employee security training
                          </li>
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            Access control policies
                          </li>
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            Data protection impact assessments
                          </li>
                          <li className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                            Incident response plans
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">Security Certifications</h3>
                    <p>
                      Our platform maintains the following security certifications and compliance standards:
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {['SOC 2 Type II', 'ISO 27001', 'GDPR Compliance', 'CCPA Compliance'].map((cert) => (
                        <span key={cert} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Your Rights */}
              {activeSection === 'your-rights' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircleIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                      <p className="text-gray-600">Control over your personal information</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      Depending on your location, you may have certain rights regarding your personal information. 
                      We will respond to all requests in accordance with applicable data protection laws.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      {[
                        {
                          title: 'Access',
                          description: 'Right to know what personal information we collect and how we use it'
                        },
                        {
                          title: 'Correction',
                          description: 'Right to correct inaccurate or incomplete personal information'
                        },
                        {
                          title: 'Deletion',
                          description: 'Right to request deletion of your personal information'
                        },
                        {
                          title: 'Portability',
                          description: 'Right to receive your data in a structured, machine-readable format'
                        },
                        {
                          title: 'Objection',
                          description: 'Right to object to processing of your personal information'
                        },
                        {
                          title: 'Restriction',
                          description: 'Right to restrict processing of your personal information'
                        }
                      ].map((right, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{right.title}</h4>
                          <p className="text-sm text-gray-600">{right.description}</p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">Exercising Your Rights</h3>
                    <p>
                      To exercise any of these rights, please contact us using the information provided in the 
                      "Contact Us" section. We may need to verify your identity before processing your request.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Response Time</h4>
                      <p className="text-blue-800 text-sm">
                        We will respond to all legitimate requests within 30 days. If we need more time, 
                        we will notify you of the reason and extension period.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {activeSection === 'contact' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <DocumentTextIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                      <p className="text-gray-600">Get in touch with our privacy team</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      If you have any questions or concerns about this Privacy Policy or our data practices, 
                      please contact our Data Protection Officer:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-gray-900 mb-4">EMPower HR Solutions</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Email:</strong> privacy@empower.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-PRIVACY</p>
                        <p><strong>Address:</strong> 123 Tech Street, IT Park, Pune, Maharashtra - 411057</p>
                        <p><strong>Response Time:</strong> Within 48 hours for privacy-related inquiries</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">Data Protection Officer</h3>
                    <p>
                      Our Data Protection Officer (DPO) oversees compliance with data protection laws and 
                      can be contacted directly for privacy-related matters.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-yellow-900 mb-2">Complaints</h4>
                      <p className="text-yellow-800 text-sm">
                        If you are not satisfied with our response, you have the right to lodge a complaint 
                        with your local data protection authority.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                  disabled={activeSection === 'introduction'}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                    }
                  }}
                  disabled={activeSection === 'contact'}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Consent Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
              <div className="flex items-start space-x-4">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Your Privacy Matters</h3>
                  <p className="text-blue-800 text-sm">
                    By continuing to use our services, you acknowledge that you have read and understood 
                    this Privacy Policy. We regularly update this policy to reflect changes in our practices 
                    and legal requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;