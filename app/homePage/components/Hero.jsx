'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-600 to-blue-400 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-75"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-4">
             
              <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-tight">
                Manage Your Employees{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                  Efficiently
                </span>{' '}
                with a Smart Dashboard
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Track attendance, manage payroll, and monitor performance—all in one place. 
                Streamline your HR processes with our powerful Employee Management System.
              </p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
                  {/* Mock Dashboard Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-white text-sm font-medium">Employee Dashboard</div>
                    </div>
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Active', value: '142', color: 'bg-green-500' },
                        { label: 'On Leave', value: '8', color: 'bg-yellow-500' },
                        { label: 'Remote', value: '34', color: 'bg-blue-500' }
                      ].map((stat, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg p-2 text-center">
                          <div className="text-white font-bold text-sm">{stat.value}</div>
                          <div className="text-gray-400 text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart Area */}
                    <div className="bg-gray-700 rounded-lg p-3">
                      <div className="flex items-end justify-between h-16 space-x-1">
                        {[30, 45, 60, 75, 65, 50, 70].map((height, index) => (
                          <div
                            key={index}
                            className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all duration-500 hover:opacity-80"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Recent Activity */}
                    <div >
                      <div className="text-white text-sm font-medium">Recent Activity</div>
                      {[
                        { name: 'Sarah Johnson', action: 'checked in', time: '2 min ago' },
                        { name: 'Mike Chen', action: 'submitted report', time: '5 min ago' }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <span className="text-gray-300">
                            <span className="text-white font-medium">{activity.name}</span> {activity.action}
                          </span>
                          <span className="text-gray-400">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;