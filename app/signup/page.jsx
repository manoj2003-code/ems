'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  XCircleIcon,
  BuildingOfficeIcon,
  UserCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    employeeCount: '',
    industry: '',
    agreeToTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const router = useRouter();

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Hospitality',
    'Construction',
    'Transportation',
    'Other'
  ];

  const employeeRanges = [
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+'
  ];

  const validateForm = () => {
    const newErrors = {};

    // Company Name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters';
    }

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
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
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 3) {
      newErrors.password = 'Password is too weak';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Employee Count validation
    if (!formData.employeeCount) {
      newErrors.employeeCount = 'Please select employee count range';
    }

    // Industry validation
    if (!formData.industry) {
      newErrors.industry = 'Please select your industry';
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    
    // Lowercase check
    if (/[a-z]/.test(password)) strength++;
    
    // Uppercase check
    if (/[A-Z]/.test(password)) strength++;
    
    // Number check
    if (/[0-9]/.test(password)) strength++;
    
    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    setPasswordStrength(strength);
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

    // Check password strength in real-time
    if (field === 'password') {
      checkPasswordStrength(value);
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
      
      // In real application, you would:
      // 1. Send signup data to your backend
      // 2. Handle the response
      // 3. Redirect to verification or success page
      
      console.log('Signup data:', formData);
      router.push('/verify-email');
    } catch (error) {
      setErrors({ submit: 'Signup failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return 'Enter password';
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Good';
    return 'Strong';
  };

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'One lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'One number', met: /[0-9]/.test(formData.password) },
    { text: 'One special character', met: /[^A-Za-z0-9]/.test(formData.password) },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-indigo-100 mt-18 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Form */}
            <div className="md:w-1/2 p-8">
              <div className="text-center mb-8">
                <Link href="/" className="inline-flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <BuildingOfficeIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">EMPower</span>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 mt-4">Create Your Account</h1>
                <p className="text-gray-600 mt-2">
                  Join thousands of companies managing their workforce efficiently
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <BuildingOfficeIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Company Information
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.companyName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <XCircleIcon className="w-4 h-4 mr-1" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.industry ? 'border-red-300' : 'border-gray-300'
                        }`}
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                      >
                        <option value="">Select Industry</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.industry}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employee Count *
                      </label>
                      <select
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.employeeCount ? 'border-red-300' : 'border-gray-300'
                        }`}
                        value={formData.employeeCount}
                        onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                      >
                        <option value="">Select Range</option>
                        {employeeRanges.map(range => (
                          <option key={range} value={range}>{range} employees</option>
                        ))}
                      </select>
                      {errors.employeeCount && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          {errors.employeeCount}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <UserCircleIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Personal Information
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.fullName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <XCircleIcon className="w-4 h-4 mr-1" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                {/* Security Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <ShieldCheckIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Security
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.password ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Password Strength Meter */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600">Password strength:</span>
                          <span className={`text-xs font-medium ${
                            passwordStrength <= 2 ? 'text-red-600' :
                            passwordStrength <= 3 ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                            {getPasswordStrengthText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                            style={{ width: `${(passwordStrength / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <XCircleIcon className="w-4 h-4 mr-1" />
                        {errors.password}
                      </p>
                    )}

                    {/* Password Requirements */}
                    {formData.password && (
                      <div className="mt-3 space-y-1">
                        {passwordRequirements.map((req, index) => (
                          <div key={index} className="flex items-center text-xs">
                            {req.met ? (
                              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                            ) : (
                              <XCircleIcon className="w-4 h-4 text-gray-300 mr-2" />
                            )}
                            <span className={req.met ? 'text-green-600' : 'text-gray-500'}>
                              {req.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                          errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <XCircleIcon className="w-4 h-4 mr-1" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-sm text-red-600 flex items-center">
                      <XCircleIcon className="w-4 h-4 mr-1" />
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>

                {errors.submit && (
                  <p className="text-sm text-red-600 text-center flex items-center justify-center">
                    <XCircleIcon className="w-4 h-4 mr-1" />
                    {errors.submit}
                  </p>
                )}

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                      Login 
                    </Link> here
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side - Benefits */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-6">Why Join EMPower?</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Streamlined HR Processes</h3>
                      <p className="text-blue-100 mt-1">Automate attendance, payroll, and employee management</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Real-time Analytics</h3>
                      <p className="text-blue-100 mt-1">Make data-driven decisions with comprehensive reports</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Secure & Compliant</h3>
                      <p className="text-blue-100 mt-1">Enterprise-grade security with data protection</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">24/7 Support</h3>
                      <p className="text-blue-100 mt-1">Dedicated support team to help you succeed</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="italic text-blue-100">
                    "EMPower transformed how we manage our 200+ employees. The platform is intuitive and has saved us countless hours."
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <UserCircleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-blue-100 text-sm">HR Director, TechSolutions Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;