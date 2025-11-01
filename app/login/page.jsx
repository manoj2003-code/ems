'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const router = useRouter();

  // Demo credentials for testing
  const demoCredentials = {
    email: 'demo@empower.com',
    password: 'demo123'
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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

  const handleDemoLogin = () => {
    setFormData(demoCredentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In real application, you would:
      // 1. Send login data to your backend
      // 2. Handle the response and store tokens
      // 3. Redirect to dashboard

      // For demo purposes, check against demo credentials
      if (formData.email === demoCredentials.email && formData.password === demoCredentials.password) {
        console.log('Login successful:', formData);
        
        // Store login state (in real app, you'd store tokens)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', formData.email);
        
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        setErrors({ submit: 'Invalid email or password. Use demo credentials.' });
      }
    } catch (error) {
      setErrors({ submit: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (!resetEmail.trim()) {
      setErrors({ reset: 'Please enter your email address' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
      setErrors({ reset: 'Please enter a valid email address' });
      return;
    }

    setIsLoading(true);

    // Simulate API call for password reset
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResetSent(true);
      setErrors({});
    } catch (error) {
      setErrors({ reset: 'Failed to send reset email. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 mt-20 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center space-x-2">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <BuildingOfficeIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold text-gray-900">EMPower</span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 mt-6">Welcome Back</h1>
              <p className="text-gray-600 mt-2">
                Sign in to your Employee Management System
              </p>
            </div>

            {/* Login Form */}
            {!showResetForm ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.password ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowResetForm(true)}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Signing In...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-700 flex items-center">
                      <ExclamationTriangleIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      {errors.submit}
                    </p>
                  </div>
                )}

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-semibold">
                      Create account
                    </Link>
                  </p>
                </div>

              </form>
            ) : (
              /* Password Reset Form */
              <div className="space-y-6">
                {!resetSent ? (
                  <>
                    <div className="text-center">
                      <h2 className="text-xl font-bold text-gray-900">Reset Password</h2>
                      <p className="text-gray-600 mt-2">
                        Enter your email address and we'll send you a link to reset your password.
                      </p>
                    </div>

                    <form onSubmit={handleResetPassword}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                              errors.reset ? 'border-red-300' : 'border-gray-300'
                            }`}
                            placeholder="Enter your email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                          />
                        </div>
                        {errors.reset && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                            {errors.reset}
                          </p>
                        )}
                      </div>

                      <div className="flex space-x-3 mt-6">
                        <button
                          type="button"
                          onClick={() => {
                            setShowResetForm(false);
                            setResetEmail('');
                            setErrors({});
                          }}
                          className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Back to Login
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Reset Success Message */
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircleIcon className="w-8 h-8 text-green-600" />
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Check Your Email</h2>
                      <p className="text-gray-600 mt-2">
                        We've sent a password reset link to <strong>{resetEmail}</strong>
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        The link will expire in 1 hour.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setShowResetForm(false);
                          setResetSent(false);
                          setResetEmail('');
                        }}
                        className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Back to Login
                      </button>
                      <button
                        onClick={handleResetPassword}
                        className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Resend Email
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;