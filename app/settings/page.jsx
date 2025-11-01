'use client';

import { useState, useEffect } from 'react';
import {
  Cog6ToothIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BellIcon,
  CreditCardIcon,
  DocumentTextIcon,
  CloudArrowDownIcon,
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState('');

  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'EMPower HR Solutions',
    companyEmail: 'hr@empower.com',
    timezone: 'Asia/Kolkata',
    dateFormat: 'DD/MM/YYYY',
    language: 'en',
    autoLogout: 30,
  });

  // Company Settings
  const [companySettings, setCompanySettings] = useState({
    departments: ['Engineering', 'HR', 'Sales', 'Marketing', 'Finance', 'Operations'],
    designations: ['Manager', 'Senior Developer', 'Developer', 'HR Executive', 'Sales Executive'],
    workHours: {
      start: '09:00',
      end: '18:00',
      workingDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    },
    leaveTypes: ['Sick Leave', 'Casual Leave', 'Earned Leave', 'Maternity Leave', 'Paternity Leave']
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    passwordPolicy: {
      minLength: 8,
      requireNumbers: true,
      requireSymbols: true,
      requireUppercase: true
    },
    sessionTimeout: 30,
    ipWhitelist: ['192.168.1.0/24'],
    loginAttempts: 5
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: {
      newEmployee: true,
      attendanceAlert: true,
      payrollProcessed: true,
      leaveRequest: true,
      systemUpdates: false
    },
    pushNotifications: {
      lateAttendance: true,
      leaveApproval: true,
      payrollDate: true,
      birthday: false
    },
    smsNotifications: {
      importantAlerts: true,
      attendanceReminder: false,
      payrollCredited: true
    }
  });

  // Subscription Settings
  const [subscriptionSettings, setSubscriptionSettings] = useState({
    plan: 'Professional',
    status: 'active',
    employees: 150,
    storage: '50 GB',
    renewalDate: '2024-12-31',
    features: [
      'Unlimited Employees',
      'Advanced Analytics',
      'Custom Reports',
      'API Access',
      'Priority Support'
    ]
  });

  useEffect(() => {
    // Simulate loading settings
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSaveSettings = () => {
    setSaveStatus('saving');
    
    // Simulate API call
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(''), 3000);
    }, 1000);
  };

  const handleAddDepartment = () => {
    const newDept = prompt('Enter new department name:');
    if (newDept && !companySettings.departments.includes(newDept)) {
      setCompanySettings({
        ...companySettings,
        departments: [...companySettings.departments, newDept]
      });
    }
  };

  const handleRemoveDepartment = (dept) => {
    setCompanySettings({
      ...companySettings,
      departments: companySettings.departments.filter(d => d !== dept)
    });
  };

  const handleAddDesignation = () => {
    const newDesignation = prompt('Enter new designation:');
    if (newDesignation && !companySettings.designations.includes(newDesignation)) {
      setCompanySettings({
        ...companySettings,
        designations: [...companySettings.designations, newDesignation]
      });
    }
  };

  const handleRemoveDesignation = (designation) => {
    setCompanySettings({
      ...companySettings,
      designations: companySettings.designations.filter(d => d !== designation)
    });
  };

  const handleAddLeaveType = () => {
    const newLeaveType = prompt('Enter new leave type:');
    if (newLeaveType && !companySettings.leaveTypes.includes(newLeaveType)) {
      setCompanySettings({
        ...companySettings,
        leaveTypes: [...companySettings.leaveTypes, newLeaveType]
      });
    }
  };

  const handleRemoveLeaveType = (leaveType) => {
    setCompanySettings({
      ...companySettings,
      leaveTypes: companySettings.leaveTypes.filter(l => l !== leaveType)
    });
  };

  const tabs = [
    { id: 'general', name: 'General', icon: Cog6ToothIcon },
    { id: 'company', name: 'Company', icon: BuildingOfficeIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'subscription', name: 'Subscription', icon: CreditCardIcon },
    { id: 'backup', name: 'Backup & Export', icon: CloudArrowDownIcon },
  ];

 

  return (
    <div className="min-h-screen mt-20 bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600 mt-1">
                Manage your EMS configuration and preferences
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {saveStatus === 'saving' && (
                <span className="text-sm text-yellow-600">Saving...</span>
              )}
              {saveStatus === 'saved' && (
                <span className="text-sm text-green-600 flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-1" />
                  Settings saved
                </span>
              )}
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Basic system configuration and preferences
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={generalSettings.companyName}
                        onChange={(e) => setGeneralSettings({...generalSettings, companyName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={generalSettings.companyEmail}
                        onChange={(e) => setGeneralSettings({...generalSettings, companyEmail: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={generalSettings.timezone}
                        onChange={(e) => setGeneralSettings({...generalSettings, timezone: e.target.value})}
                      >
                        <option value="Asia/Kolkata">India Standard Time (IST)</option>
                        <option value="America/New_York">Eastern Time (ET)</option>
                        <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date Format
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={generalSettings.dateFormat}
                        onChange={(e) => setGeneralSettings({...generalSettings, dateFormat: e.target.value})}
                      >
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={generalSettings.language}
                        onChange={(e) => setGeneralSettings({...generalSettings, language: e.target.value})}
                      >
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Auto Logout (minutes)
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={generalSettings.autoLogout}
                        onChange={(e) => setGeneralSettings({...generalSettings, autoLogout: parseInt(e.target.value)})}
                        min="5"
                        max="120"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Company Settings */}
            {activeTab === 'company' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Company Settings</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Configure departments, designations, and work policies
                  </p>
                </div>
                <div className="p-6 space-y-8">
                  {/* Departments */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-md font-medium text-gray-900">Departments</h3>
                      <button
                        onClick={handleAddDepartment}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add Department
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {companySettings.departments.map((dept) => (
                        <div key={dept} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <span className="text-sm text-gray-700">{dept}</span>
                          <button
                            onClick={() => handleRemoveDepartment(dept)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Designations */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-md font-medium text-gray-900">Designations</h3>
                      <button
                        onClick={handleAddDesignation}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add Designation
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {companySettings.designations.map((designation) => (
                        <div key={designation} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <span className="text-sm text-gray-700">{designation}</span>
                          <button
                            onClick={() => handleRemoveDesignation(designation)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Work Hours */}
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-4">Work Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start Time
                        </label>
                        <input
                          type="time"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={companySettings.workHours.start}
                          onChange={(e) => setCompanySettings({
                            ...companySettings,
                            workHours: {...companySettings.workHours, start: e.target.value}
                          })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          End Time
                        </label>
                        <input
                          type="time"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          value={companySettings.workHours.end}
                          onChange={(e) => setCompanySettings({
                            ...companySettings,
                            workHours: {...companySettings.workHours, end: e.target.value}
                          })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Leave Types */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-md font-medium text-gray-900">Leave Types</h3>
                      <button
                        onClick={handleAddLeaveType}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add Leave Type
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {companySettings.leaveTypes.map((leaveType) => (
                        <div key={leaveType} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <span className="text-sm text-gray-700">{leaveType}</span>
                          <button
                            onClick={() => handleRemoveLeaveType(leaveType)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Configure security policies and access controls
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Require 2FA for all user logins</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={securitySettings.twoFactorAuth}
                        onChange={(e) => setSecuritySettings({
                          ...securitySettings,
                          twoFactorAuth: e.target.checked
                        })}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Password Policy</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Minimum Length</span>
                        <input
                          type="number"
                          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                          value={securitySettings.passwordPolicy.minLength}
                          onChange={(e) => setSecuritySettings({
                            ...securitySettings,
                            passwordPolicy: {
                              ...securitySettings.passwordPolicy,
                              minLength: parseInt(e.target.value)
                            }
                          })}
                          min="6"
                          max="20"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Require Numbers</span>
                        <input
                          type="checkbox"
                          checked={securitySettings.passwordPolicy.requireNumbers}
                          onChange={(e) => setSecuritySettings({
                            ...securitySettings,
                            passwordPolicy: {
                              ...securitySettings.passwordPolicy,
                              requireNumbers: e.target.checked
                            }
                          })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Require Symbols</span>
                        <input
                          type="checkbox"
                          checked={securitySettings.passwordPolicy.requireSymbols}
                          onChange={(e) => setSecuritySettings({
                            ...securitySettings,
                            passwordPolicy: {
                              ...securitySettings.passwordPolicy,
                              requireSymbols: e.target.checked
                            }
                          })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Require Uppercase</span>
                        <input
                          type="checkbox"
                          checked={securitySettings.passwordPolicy.requireUppercase}
                          onChange={(e) => setSecuritySettings({
                            ...securitySettings,
                            passwordPolicy: {
                              ...securitySettings.passwordPolicy,
                              requireUppercase: e.target.checked
                            }
                          })}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Session Timeout (minutes)
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      value={securitySettings.sessionTimeout}
                      onChange={(e) => setSecuritySettings({
                        ...securitySettings,
                        sessionTimeout: parseInt(e.target.value)
                      })}
                      min="5"
                      max="120"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Login Attempts
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      value={securitySettings.loginAttempts}
                      onChange={(e) => setSecuritySettings({
                        ...securitySettings,
                        loginAttempts: parseInt(e.target.value)
                      })}
                      min="3"
                      max="10"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Notification Settings</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Configure how and when you receive notifications
                  </p>
                </div>
                <div className="p-6 space-y-8">
                  {/* Email Notifications */}
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      {Object.entries(notificationSettings.emailNotifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div>
                            <span className="text-sm font-medium text-gray-900 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={value}
                              onChange={(e) => setNotificationSettings({
                                ...notificationSettings,
                                emailNotifications: {
                                  ...notificationSettings.emailNotifications,
                                  [key]: e.target.checked
                                }
                              })}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-4">Push Notifications</h3>
                    <div className="space-y-3">
                      {Object.entries(notificationSettings.pushNotifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                          <div>
                            <span className="text-sm font-medium text-gray-900 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={value}
                              onChange={(e) => setNotificationSettings({
                                ...notificationSettings,
                                pushNotifications: {
                                  ...notificationSettings.pushNotifications,
                                  [key]: e.target.checked
                                }
                              })}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Subscription Settings */}
            {activeTab === 'subscription' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Subscription</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage your subscription plan and billing
                  </p>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{subscriptionSettings.plan} Plan</h3>
                        <p className="text-blue-100 mt-1">Active until {new Date(subscriptionSettings.renewalDate).toLocaleDateString()}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        subscriptionSettings.status === 'active' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-white'
                      }`}>
                        {subscriptionSettings.status.charAt(0).toUpperCase() + subscriptionSettings.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{subscriptionSettings.employees}</div>
                        <div className="text-blue-100 text-sm">Employees</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{subscriptionSettings.storage}</div>
                        <div className="text-blue-100 text-sm">Storage</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-blue-100 text-sm">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">99.9%</div>
                        <div className="text-blue-100 text-sm">Uptime</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">Plan Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {subscriptionSettings.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Upgrade Plan
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Backup & Export Settings */}
            {activeTab === 'backup' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Backup & Export</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage data backups and exports
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-md font-medium text-gray-900 mb-2">Automatic Backups</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Your data is automatically backed up daily. Last backup: Today, 02:00 AM
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Create Manual Backup
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-md font-medium text-gray-900 mb-4">Export Data</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <div className="text-sm font-medium text-gray-900">Employee Data</div>
                          <div className="text-sm text-gray-600">Export all employee records</div>
                        </div>
                        <CloudArrowDownIcon className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <div className="text-sm font-medium text-gray-900">Attendance Records</div>
                          <div className="text-sm text-gray-600">Export attendance data</div>
                        </div>
                        <CloudArrowDownIcon className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <div className="text-sm font-medium text-gray-900">Payroll Data</div>
                          <div className="text-sm text-gray-600">Export payroll information</div>
                        </div>
                        <CloudArrowDownIcon className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <div className="text-sm font-medium text-gray-900">Full System Export</div>
                          <div className="text-sm text-gray-600">Export all system data</div>
                        </div>
                        <CloudArrowDownIcon className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;