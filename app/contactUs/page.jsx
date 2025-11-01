'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    department: '',
    subject: '',
    message: '',
    priority: 'normal',
    contactMethod: 'email'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const departments = [
    'Sales',
    'Support',
    'Technical',
    'Billing',
    'Partnership',
    'General Inquiry'
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'text-green-600' },
    { value: 'normal', label: 'Normal', color: 'text-blue-600' },
    { value: 'high', label: 'High', color: 'text-orange-600' },
    { value: 'urgent', label: 'Urgent', color: 'text-red-600' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', icon: EnvelopeIcon },
    { value: 'phone', label: 'Phone', icon: PhoneIcon },
    { value: 'both', label: 'Both', icon: ChatBubbleLeftRightIcon }
  ];

  const offices = [
    {
      city: 'Pune',
      country: 'India',
      address: '123 Tech Street, IT Park, Pune, Maharashtra - 411057',
      phone: '+91 20 1234 5678',
      email: 'pune@empower.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      city: 'Bangalore',
      country: 'India',
      address: '456 Innovation Drive, Electronic City, Bangalore - 560100',
      phone: '+91 80 1234 5678',
      email: 'bangalore@empower.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      city: 'New York',
      country: 'USA',
      address: '789 Business Ave, Manhattan, New York, NY - 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@empower.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        department: '',
        subject: '',
        message: '',
        priority: 'normal',
        contactMethod: 'email'
      });
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br mt-7 from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              <em> Get in touch with our team. We're here to help you transform your employee management experience. </em>
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Message */}
        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={handleResetForm}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Send Another Message
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              {/* General Contact Info */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@empower.com</p>
                    <p className="text-gray-600">support@empower.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Toll Free: 1-800-EMPOWER</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Support Hours</h3>
                    <p className="text-gray-600">24/7 Customer Support</p>
                    <p className="text-gray-600">Quick response guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Quick Support Options */}
              {/* <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Support</h3>
                <div className="space-y-3">
                  <Link
                    href="/help"
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">Help Center</span>
                    <span className="text-blue-600">→</span>
                  </Link>
                  <Link
                    href="/documentation"
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">Documentation</span>
                    <span className="text-blue-600">→</span>
                  </Link>
                  <Link
                    href="/schedule-demo"
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">Schedule Demo</span>
                    <span className="text-blue-600">→</span>
                  </Link>
                </div>
              </div> */}


            </div>
          </div>

          {/* Contact Form & Offices */}
          <div className="lg:col-span-2 space-y-12">
            {/* Contact Form */}
            {!isSubmitted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.firstName ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.lastName ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.company ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        value={formData.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.subject ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Brief subject of your message"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        value={formData.priority}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                      >
                        {priorities.map(priority => (
                          <option key={priority.value} value={priority.value}>
                            {priority.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Please describe your inquiry in detail..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <XCircleIcon className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      {formData.message.length}/5000 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {errors.submit && (
                    <p className="text-sm text-red-600 text-center flex items-center justify-center">
                      <XCircleIcon className="w-4 h-4 mr-1" />
                      {errors.submit}
                    </p>
                  )}
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;