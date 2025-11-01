'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const LogoutPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Start countdown when component mounts
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          handleLogout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    setIsLoggingOut(true);
    
    // Simulate logout process
    setTimeout(() => {
      // In a real application, you would:
      // 1. Clear authentication tokens
      // 2. Clear user data from storage
      // 3. Call logout API
      
      // Simulate successful logout
      setLogoutSuccess(true);
      
      // Redirect to login page after 2 seconds
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }, 1500);
  };

  const handleCancelLogout = () => {
    router.back();
  };

  const handleLogoutNow = () => {
    setCountdown(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logout Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {isLoggingOut ? 'Logging Out...' : 'Confirm Logout'}
            </h1>
            <p className="text-blue-100">
              {isLoggingOut 
                ? 'Please wait while we secure your session...'
                : 'You are about to log out from your account'
              }
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {!isLoggingOut && !logoutSuccess && (
              <div className="text-center space-y-6">
                {/* Warning Icon */}
                <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto border-4 border-yellow-100">
                  <ExclamationTriangleIcon className="w-10 h-10 text-yellow-500" />
                </div>

                {/* Countdown */}
                <div className="space-y-3">
                  <div className="text-lg font-semibold text-gray-700">
                    Auto logout in {countdown} seconds
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-linear"
                      style={{ width: `${(countdown / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Warning Message */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Make sure to save any unsaved work before logging out. 
                    You will need to log in again to access your account.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleCancelLogout}
                    className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                  >
                    <ArrowLeftIcon className="w-5 h-5 mr-2" />
                    Cancel & Go Back
                  </button>
                  <button
                    onClick={handleLogoutNow}
                    className="flex-1 flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:scale-105"
                  >
                    <XCircleIcon className="w-5 h-5 mr-2" />
                    Logout Now
                  </button>
                </div>
              </div>
            )}

            {/* Logging Out State */}
            {isLoggingOut && !logoutSuccess && (
              <div className="text-center space-y-6">
                {/* Loading Animation */}
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto border-4 border-blue-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">Securing Your Session</h3>
                  <p className="text-gray-600">
                    We're clearing your session data and securing your account...
                  </p>
                </div>

                {/* Progress Steps */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Clearing session data</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Revoking access tokens</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-600"></div>
                    </div>
                    <span className="text-gray-700">Finalizing logout process</span>
                  </div>
                </div>
              </div>
            )}

            {/* Logout Success State */}
            {logoutSuccess && (
              <div className="text-center space-y-6">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto border-4 border-green-100">
                  <CheckCircleIcon className="w-10 h-10 text-green-500" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">Logout Successful!</h3>
                  <p className="text-gray-600">
                    You have been successfully logged out. Redirecting to login page...
                  </p>
                </div>

                {/* Redirect Countdown */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    You will be redirected to the login page in 2 seconds
                  </p>
                </div>

                {/* Manual Redirect Option */}
                <Link
                  href="/login"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                >
                  Go to Login Page
                  <ArrowLeftIcon className="w-5 h-5 ml-2 transform rotate-180" />
                </Link>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-500">
                <strong>Security Tip:</strong> Always log out when using shared or public computers.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        {!isLoggingOut && !logoutSuccess && (
          <div className="mt-6 text-center">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Quick Actions</h4>
              <div className="flex justify-center space-x-4">
                <Link
                  href="/dashboard"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Go to Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  View Profile
                </Link>
                <Link
                  href="/settings"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoutPage;