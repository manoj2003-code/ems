'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  DocumentTextIcon,
  ScaleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [accepted, setAccepted] = useState(false);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'definitions', title: 'Definitions' },
    { id: 'account-registration', title: 'Account Registration' },
    { id: 'services', title: 'Services & Features' },
    { id: 'user-responsibilities', title: 'User Responsibilities' },
    { id: 'data-privacy', title: 'Data Privacy' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'payment-terms', title: 'Payment Terms' },
    { id: 'termination', title: 'Termination' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' }
  ];

  const lastUpdated = 'September 15, 2025';
  const effectiveDate = 'September 15, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br mt-10 from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ScaleIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using EMPower Employee Management System.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <DocumentTextIcon className="w-5 h-5" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-5 h-5" />
                <span>Effective: {effectiveDate}</span>
              </div>
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
                    href="/privacyPolicy"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span>Privacy Policy</span>
                  </Link>
                  <Link
                    href="/contactUs"
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span>Contact Legal Team</span>
                  </Link>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors w-full text-left"
                  >
                    <span>Print Terms</span>
                  </button>
                </div>
              </div>

              {/* Acceptance Toggle */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                    I have read and agree to these terms
                  </label>
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
                      <DocumentTextIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                      <p className="text-gray-600">Welcome to EMPower EMS</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      These Terms and Conditions ("Terms") govern your access to and use of the 
                      EMPower Employee Management System ("Service") provided by EMPower HR Solutions 
                      ("we," "our," or "us"). By accessing or using our Service, you agree to be bound 
                      by these Terms.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                      <p className="text-blue-800 text-sm">
                        These Terms constitute a legally binding agreement between you and EMPower HR Solutions. 
                        Please read them carefully. If you do not agree with these Terms, you may not access or 
                        use our Service.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Agreement Overview</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li>These Terms apply to all users of the EMPower EMS platform</li>
                      <li>By using our Service, you represent you have authority to bind your organization</li>
                      <li>You must comply with all applicable laws and regulations</li>
                      <li>We reserve the right to modify these Terms at any time</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Definitions */}
              {activeSection === 'definitions' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <UserGroupIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                      <p className="text-gray-600">Key terms used in this agreement</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      For the purposes of these Terms, the following definitions apply:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-gray-900">Service</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            The EMPower Employee Management System platform, including all features, 
                            functionality, and services provided.
                          </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-gray-900">Customer</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            The organization or individual that registers for and uses the Service.
                          </p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-gray-900">User</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Any individual authorized by Customer to access and use the Service.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="border-l-4 border-orange-500 pl-4">
                          <h4 className="font-semibold text-gray-900">Content</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            All information, data, text, and other materials submitted to the Service.
                          </p>
                        </div>
                        <div className="border-l-4 border-red-500 pl-4">
                          <h4 className="font-semibold text-gray-900">Subscription</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            The paid access period to the Service as defined in the order form.
                          </p>
                        </div>
                        <div className="border-l-4 border-indigo-500 pl-4">
                          <h4 className="font-semibold text-gray-900">Confidential Information</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Non-public information disclosed by either party that is designated as confidential.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Registration */}
              {activeSection === 'account-registration' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <UserGroupIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Account Registration</h2>
                      <p className="text-gray-600">Creating and managing your account</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900">Eligibility</h3>
                    <p>
                      To use the Service, you must:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li>Be at least 18 years of age</li>
                      <li>Have the authority to bind your organization to these Terms</li>
                      <li>Provide accurate and complete registration information</li>
                      <li>Maintain the security of your account credentials</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Account Security</h3>
                    <p>
                      You are responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li>Maintaining the confidentiality of your login credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Promptly notifying us of any unauthorized access</li>
                      <li>Ensuring your employees comply with these Terms</li>
                    </ul>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                      <div className="flex items-start space-x-3">
                        <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-yellow-900">Important Security Notice</h4>
                          <p className="text-yellow-800 text-sm mt-1">
                            You are solely responsible for maintaining the confidentiality of your account 
                            and password. You agree to accept responsibility for all activities that occur 
                            under your account.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Services & Features */}
              {activeSection === 'services' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <CheckCircleIcon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Services & Features</h2>
                      <p className="text-gray-600">What we provide and your rights</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900">Service Description</h3>
                    <p>
                      EMPower EMS provides a comprehensive employee management platform including:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Employee database management</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Attendance and time tracking</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Payroll processing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Leave management</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Performance management</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Reporting and analytics</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>Mobile application access</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>API integration</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">Service Level Agreement</h3>
                    <p>
                      We strive to maintain 99.9% uptime for our Service. Scheduled maintenance will be 
                      communicated in advance. We are not liable for interruptions beyond our reasonable control.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Modifications to Service</h3>
                    <p>
                      We reserve the right to modify, suspend, or discontinue any part of the Service 
                      at any time. We will provide reasonable notice of any material changes that may 
                      affect your use of the Service.
                    </p>
                  </div>
                </div>
              )}

              {/* Data Privacy */}
              {activeSection === 'data-privacy' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Data Privacy</h2>
                      <p className="text-gray-600">How we handle your data</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      We are committed to protecting the privacy and security of your data. Our data 
                      practices are governed by our Privacy Policy, which is incorporated into these Terms.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Data Processing</h3>
                    <p>
                      As part of providing the Service, we process personal data on your behalf. You 
                      are the data controller and we are the data processor for the purposes of data 
                      protection laws.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Your Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li>Ensure you have lawful basis for processing employee data</li>
                      <li>Obtain necessary consents where required</li>
                      <li>Comply with applicable data protection laws</li>
                      <li>Respond to data subject requests appropriately</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Data Security</h3>
                    <p>
                      We implement appropriate technical and organizational measures to protect your 
                      data against unauthorized access, loss, or destruction.
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-green-900 mb-2">GDPR Compliance</h4>
                      <p className="text-green-800 text-sm">
                        Our Service is designed to help you comply with the General Data Protection 
                        Regulation (GDPR) and other data protection laws. We act as a data processor 
                        and provide tools to help you meet your obligations as a data controller.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Terms */}
              {activeSection === 'payment-terms' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <DocumentTextIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Payment Terms</h2>
                      <p className="text-gray-600">Billing and subscription details</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900">Subscription Fees</h3>
                    <p>
                      The Service is provided on a subscription basis. Fees are based on the number 
                      of active employees and selected features.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Billing Cycle</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li>Subscription fees are billed in advance</li>
                      <li>Monthly or annual billing options available</li>
                      <li>Automatic renewal unless cancelled</li>
                      <li>Price changes communicated 30 days in advance</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Payment Methods</h3>
                    <p>
                      We accept major credit cards, bank transfers, and other payment methods as 
                      specified in your order form.
                    </p>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-red-900 mb-2">Late Payments</h4>
                      <p className="text-red-800 text-sm">
                        Accounts with overdue payments may be suspended until payment is received. 
                        We reserve the right to charge interest on overdue amounts at the rate of 
                        1.5% per month or the maximum rate permitted by law.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Limitation of Liability */}
              {activeSection === 'limitation-liability' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                      <p className="text-gray-600">Understanding our responsibilities</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900">General Limitation</h3>
                    <p>
                      To the maximum extent permitted by law, our total liability to you for all 
                      claims arising out of or relating to these Terms or your use of the Service 
                      shall not exceed the total fees paid by you to us in the twelve months 
                      preceding the claim.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8">Exclusion of Damages</h3>
                    <p>
                      In no event shall we be liable for any indirect, punitive, incidental, 
                      special, consequential, or exemplary damages, including without limitation 
                      damages for loss of profits, goodwill, use, data, or other intangible losses.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Purpose</h4>
                      <p className="text-gray-800 text-sm">
                        The limitations in this section apply regardless of the legal theory or 
                        form of action, whether in contract, tort (including negligence), strict 
                        liability, or otherwise, and will survive any termination or expiration 
                        of these Terms.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              {activeSection === 'contact' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <DocumentTextIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                      <p className="text-gray-600">How to reach us</p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      If you have any questions about these Terms, please contact our legal team:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 my-6">
                      <h4 className="font-semibold text-gray-900 mb-4">EMPower HR Solutions</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Legal Department:</strong> legal@empower.com</p>
                        <p><strong>General Inquiries:</strong> hello@empower.com</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Address:</strong> 123 Tech Street, IT Park, Pune, Maharashtra - 411057</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">Notice Requirements</h3>
                    <p>
                      Legal notices must be in writing and sent to our designated address. 
                      Notices will be deemed given when actually received.
                    </p>
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

            {/* Acceptance Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
              <div className="flex items-start space-x-4">
                <ScaleIcon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Legal Agreement</h3>
                  <p className="text-blue-800 text-sm">
                    By using our services, you acknowledge that you have read, understood, and agree to be 
                    bound by these Terms and Conditions. These Terms constitute the entire agreement between 
                    you and EMPower HR Solutions regarding the Service.
                  </p>
                  {accepted && (
                    <div className="flex items-center mt-3 text-green-600">
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Terms accepted</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;