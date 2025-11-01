'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  UsersIcon,
  CalendarIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    const clockTimer = setInterval(() => setTime(new Date()), 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(clockTimer);
    };
  }, []);

  // Mock data
  const stats = [
    {
      title: 'Total Employees',
      value: '142',
      change: '+12%',
      trend: 'up',
      icon: UsersIcon,
      color: 'blue',
      href: '/employees'
    },
    {
      title: 'Present Today',
      value: '128',
      change: '+5%',
      trend: 'up',
      icon: CheckCircleIcon,
      color: 'green',
      href: '/attendance'
    },
    {
      title: 'On Leave',
      value: '8',
      change: '-2%',
      trend: 'down',
      icon: CalendarIcon,
      color: 'yellow',
      href: '/leaves'
    },
    {
      title: 'Late Today',
      value: '6',
      change: '+1%',
      trend: 'up',
      icon: ClockIcon,
      color: 'red',
      href: '/attendance'
    }
  ];

  const quickActions = [
    {
      title: 'Add Employee',
      description: 'Register new employee',
      icon: UsersIcon,
      href: '/employees/add',
      color: 'blue'
    },
    {
      title: 'Mark Attendance',
      description: 'Update attendance records',
      icon: CheckCircleIcon,
      href: '/attendance/mark',
      color: 'green'
    },
    {
      title: 'Process Payroll',
      description: 'Run payroll for this month',
      icon: CurrencyDollarIcon,
      href: '/payroll',
      color: 'purple'
    },
    {
      title: 'Generate Reports',
      description: 'Create performance reports',
      icon: DocumentTextIcon,
      href: '/reports',
      color: 'orange'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      employee: 'Sarah Johnson',
      action: 'checked in',
      time: '2 minutes ago',
      type: 'success'
    },
    {
      id: 2,
      employee: 'Mike Chen',
      action: 'submitted leave request',
      time: '5 minutes ago',
      type: 'warning'
    },
    {
      id: 3,
      employee: 'Emily Davis',
      action: 'updated profile',
      time: '15 minutes ago',
      type: 'info'
    },
    {
      id: 4,
      employee: 'Robert Wilson',
      action: 'checked out early',
      time: '1 hour ago',
      type: 'error'
    },
    {
      id: 5,
      employee: 'Lisa Brown',
      action: 'completed training',
      time: '2 hours ago',
      type: 'success'
    }
  ];

  const upcomingLeaves = [
    {
      id: 1,
      employee: 'John Smith',
      type: 'Vacation',
      startDate: '2024-01-15',
      endDate: '2024-01-20',
      status: 'approved'
    },
    {
      id: 2,
      employee: 'Maria Garcia',
      type: 'Sick Leave',
      startDate: '2024-01-16',
      endDate: '2024-01-17',
      status: 'pending'
    },
    {
      id: 3,
      employee: 'David Lee',
      type: 'Personal',
      startDate: '2024-01-18',
      endDate: '2024-01-18',
      status: 'approved'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[color] || colors.blue;
  };

  const getStatusColor = (status) => {
    const colors = {
      approved: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status] || colors.pending;
  };

  const getActivityIcon = (type) => {
    const icons = {
      success: CheckCircleIcon,
      warning: ExclamationTriangleIcon,
      error: XCircleIcon,
      info: ChartBarIcon
    };
    return icons[type] || ChartBarIcon;
  };

  const getActivityColor = (type) => {
    const colors = {
      success: 'text-green-500',
      warning: 'text-yellow-500',
      error: 'text-red-500',
      info: 'text-blue-500'
    };
    return colors[type] || 'text-gray-500';
  };


  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">
                Welcome back! Here's what's happening today.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {time.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {time.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Link
              key={index}
              href={stat.href}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div className={`flex items-center mt-2 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
                    )}
                    {stat.change} from yesterday
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions & Recent Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Frequently used actions and shortcuts
                </p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      href={action.href}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className={`p-3 rounded-lg ${getColorClasses(action.color)} group-hover:scale-110 transition-transform duration-200`}>
                        <action.icon className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Activity
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Latest employee activities and updates
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const IconComponent = getActivityIcon(activity.type);
                    return (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className={`w-5 h-5 ${getActivityColor(activity.type)}`} />
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              <span className="font-semibold">{activity.employee}</span> {activity.action}
                            </p>
                            <p className="text-xs text-gray-500">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/activities"
                  className="block text-center mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View All Activities
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Upcoming Leaves & Charts */}
          <div className="space-y-8">
            {/* Upcoming Leaves */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Upcoming Leaves
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Approved and pending leave requests
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingLeaves.map((leave) => (
                    <div
                      key={leave.id}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {leave.employee}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(leave.status)}`}>
                          {leave.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {leave.type}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/leaves"
                  className="block text-center mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View All Leaves
                </Link>
              </div>
            </div>

            {/* Attendance Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Attendance Overview
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  This week's attendance trends
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-end justify-between h-32 space-x-1">
                  {[65, 45, 75, 35, 85, 55, 70].map((height, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-600 rounded-t transition-all duration-500 hover:opacity-80"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-gray-500 mt-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">94%</div>
                    <div className="text-xs text-gray-500">This Week</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">92%</div>
                    <div className="text-xs text-gray-500">Last Week</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">+2%</div>
                    <div className="text-xs text-gray-500">Change</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Distribution */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Department Distribution
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {[
                    { department: 'Engineering', count: 42, color: 'bg-blue-500' },
                    { department: 'Sales', count: 28, color: 'bg-green-500' },
                    { department: 'Marketing', count: 22, color: 'bg-purple-500' },
                    { department: 'HR', count: 15, color: 'bg-yellow-500' },
                    { department: 'Operations', count: 35, color: 'bg-red-500' }
                  ].map((dept, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{dept.department}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${dept.color}`}
                            style={{ width: `${(dept.count / 142) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-8">
                          {dept.count}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;