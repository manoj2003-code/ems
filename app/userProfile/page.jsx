'use client';

import { useState, useEffect } from 'react';
import {
  CameraIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState('');

  // User profile data
  const [profile, setProfile] = useState({
    personal: {
      firstName: 'Manoj',
      lastName: 'Nagpure',
      email: 'manoj.nagpure@company.com',
      phone: '+91 98765 43210',
      dateOfBirth: '1990-05-15',
      address: '123 Tech Street, IT Park, Pune, Maharashtra - 411057',
      bio: 'Senior HR Manager with 8+ years of experience in employee management and HR operations.'
    },
    professional: {
      employeeId: 'EMP001',
      department: 'Human Resources',
      designation: 'HR Manager',
      joiningDate: '2018-03-15',
      workLocation: 'Pune Office',
      manager: 'Rajesh Kumar',
      employmentType: 'Full-time'
    },
    account: {
      username: 'manoj.nagpure',
      role: 'Administrator',
      lastLogin: '2024-01-15T09:30:00Z',
      accountStatus: 'Active',
      twoFactorEnabled: true,
      emailVerified: true
    },
    preferences: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      language: 'en',
      timezone: 'Asia/Kolkata',
      dateFormat: 'DD/MM/YYYY'
    }
  });

  const [editedProfile, setEditedProfile] = useState({...profile});

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing
      setEditedProfile({...profile});
    }
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setSaveStatus('saving');
    
    // Simulate API call
    setTimeout(() => {
      setProfile({...editedProfile});
      setIsEditing(false);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(''), 3000);
    }, 1000);
  };

  const handleInputChange = (section, field, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserCircleIcon },
    { id: 'professional', name: 'Professional', icon: BuildingOfficeIcon },
    { id: 'account', name: 'Account', icon: ShieldCheckIcon },
    { id: 'preferences', name: 'Preferences', icon: DocumentTextIcon },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  

  return (
    <div className="min-h-screen mt-15 bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
              <p className="text-gray-600 mt-1">
                Manage your personal and professional information
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {saveStatus === 'saving' && (
                <span className="text-sm text-yellow-600">Saving...</span>
              )}
              {saveStatus === 'saved' && (
                <span className="text-sm text-green-600 flex items-center">
                  <CheckIcon className="w-4 h-4 mr-1" />
                  Profile updated
                </span>
              )}
              {isEditing ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleEditToggle}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center"
                  >
                    <XMarkIcon className="w-4 h-4 mr-2" />
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveProfile}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                  >
                    <CheckIcon className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                >
                  <PencilIcon className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Profile Summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto">
                    {getInitials(profile.personal.firstName, profile.personal.lastName)}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <CameraIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-4">
                  {profile.personal.firstName} {profile.personal.lastName}
                </h2>
                <p className="text-gray-600">{profile.professional.designation}</p>
                <p className="text-sm text-blue-600 mt-1">{profile.professional.department}</p>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Employee ID</span>
                  <span className="text-sm font-medium text-gray-900">{profile.professional.employeeId}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                    {profile.account.accountStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Role</span>
                  <span className="text-sm font-medium text-gray-900">{profile.account.role}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Last Login</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatDateTime(profile.account.lastLogin)}
                  </span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <nav className="mt-6 space-y-1">
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
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Personal Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Update your personal details and contact information
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                          isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                        }`}
                        value={editedProfile.personal.firstName}
                        onChange={(e) => handleInputChange('personal', 'firstName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                          isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                        }`}
                        value={editedProfile.personal.lastName}
                        onChange={(e) => handleInputChange('personal', 'lastName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="email"
                          className={`flex-1 px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                            isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                          }`}
                          value={editedProfile.personal.email}
                          onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                          disabled={!isEditing}
                        />
                        {profile.account.emailVerified && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                          isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                        }`}
                        value={editedProfile.personal.phone}
                        onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                          isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                        }`}
                        value={editedProfile.personal.dateOfBirth}
                        onChange={(e) => handleInputChange('personal', 'dateOfBirth', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                        isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                      }`}
                      value={editedProfile.personal.address}
                      onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                        isEditing ? 'border-gray-300' : 'border-transparent bg-gray-50'
                      }`}
                      value={editedProfile.personal.bio}
                      onChange={(e) => handleInputChange('personal', 'bio', e.target.value)}
                      disabled={!isEditing}
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Professional Information Tab */}
            {activeTab === 'professional' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Professional Information</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Your work-related details and employment information
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <BuildingOfficeIcon className="w-8 h-8 text-blue-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Department</p>
                        <p className="font-medium text-gray-900">{profile.professional.department}</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <UserCircleIcon className="w-8 h-8 text-green-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Designation</p>
                        <p className="font-medium text-gray-900">{profile.professional.designation}</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <CalendarIcon className="w-8 h-8 text-purple-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Joining Date</p>
                        <p className="font-medium text-gray-900">{formatDate(profile.professional.joiningDate)}</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <MapPinIcon className="w-8 h-8 text-orange-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Work Location</p>
                        <p className="font-medium text-gray-900">{profile.professional.workLocation}</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <UserCircleIcon className="w-8 h-8 text-indigo-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Reporting Manager</p>
                        <p className="font-medium text-gray-900">{profile.professional.manager}</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <DocumentTextIcon className="w-8 h-8 text-red-600 mr-4" />
                      <div>
                        <p className="text-sm text-gray-600">Employment Type</p>
                        <p className="font-medium text-gray-900">{profile.professional.employmentType}</p>
                      </div>
                    </div>
                  </div>

                  {/* Work Experience (Static for now) */}
                  <div className="mt-8">
                    <h3 className="text-md font-medium text-gray-900 mb-4">Work Experience</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">HR Manager</h4>
                            <p className="text-sm text-gray-600">Current Company</p>
                          </div>
                          <span className="text-sm text-gray-500">2018 - Present</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Managing HR operations, employee relations, and recruitment processes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Account Settings Tab */}
            {activeTab === 'account' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage your account security and preferences
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={profile.account.twoFactorEnabled}
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                    <h3 className="text-sm font-medium text-red-900 mb-2">Danger Zone</h3>
                    <p className="text-sm text-red-700 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Customize your notification and display preferences
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-4">Notification Preferences</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <span className="text-sm font-medium text-gray-900">Email Notifications</span>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={profile.preferences.emailNotifications}
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div>
                          <span className="text-sm font-medium text-gray-900">Push Notifications</span>
                          <p className="text-sm text-gray-600">Receive browser notifications</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={profile.preferences.pushNotifications}
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={profile.preferences.language}
                        onChange={() => {}}
                      >
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={profile.preferences.timezone}
                        onChange={() => {}}
                      >
                        <option value="Asia/Kolkata">India Standard Time (IST)</option>
                        <option value="America/New_York">Eastern Time (ET)</option>
                        <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                      </select>
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

export default UserProfilePage;