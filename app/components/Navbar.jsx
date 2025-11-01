'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Dashboard from '../employeeDashboard/page';
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ChevronDownIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
  UsersIcon,
  ChartBarIcon,
  CalendarIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
   ArrowRightOnRectangleIcon,  // Login
  UserPlusIcon,               // Sign Up
} from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Dashboard', href: '/employeeDashboard', icon: ChartBarIcon, current: pathname === '/dashboard' },
    { name: 'Employees', href: '/employees', icon: UsersIcon, current: pathname === '/employees' },
    { name: 'Attendance', href: '/attendance', icon: CalendarIcon, current: pathname === '/attendance' },
    { name: 'Reports', href: '/reports', icon: DocumentTextIcon, current: pathname === '/reports' },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon, current: pathname === '/settings' },
    { name: 'Sign Up', href: '/signup', icon: UserPlusIcon, current: pathname === '/signup' },
    { name: 'Login', href: '/login', icon: ArrowRightOnRectangleIcon, current: pathname === '/login' },
  ];

  const userNavigation = [
    { name: 'Your Profile', href: 'userProfile' },
    { name: 'Settings', href: 'settings' },
    { name: 'Logout', href: 'logout' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-gradient-to-r from-gray-800 to-gray-800'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}>
                  <UsersIcon className={`w-5 h-5 ${
                    isScrolled ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
                <span className={`text-xl font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  EMPower
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm  font-medium transition-colors duration-200 ${
                      item.current
                        ? isScrolled
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-white/20 text-white'
                        : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        : 'text-white hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Search and user section */}
          <div className="flex items-center space-x-4">
            {/* <div className="hidden lg:block">
              <div className={`relative rounded-lg transition-colors duration-300 ${
                isScrolled ? 'bg-gray-100' : 'bg-white/10'
              }`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className={`h-4 w-4 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder="Search employees..."
                  className={`block w-64 pl-10 pr-3 py-2 border-0 bg-transparent focus:ring-0 focus:outline-none text-sm ${
                    isScrolled
                      ? 'text-gray-900 placeholder-gray-500'
                      : 'text-white '
                  }`}
                />
              </div>
            </div> */}

            {/* Notifications
            <button className={`p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                : 'text-white hover:text-white hover:bg-white/10'
            }`}>
              <BellIcon className="h-5 w-5" />
              <span className="sr-only">View notifications</span>
            </button> */}

            {/* User profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-sm transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <UserCircleIcon className="h-8 w-8" />
                  <span className="hidden lg:block">Manoj Nagpure</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>

              {isProfileOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-xl  focus:outline-none">
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-blue-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`space-y-1 px-2 pb-3 pt-2 ${
            isScrolled ? 'bg-white' : 'bg-gray-800'
          }`}>
            {/* Mobile search */}
            <div className="px-2 py-3">
              <div className={`relative rounded-lg ${
                isScrolled ? 'bg-gray-100' : 'bg-white/10'
              }`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className={`h-4 w-4 ${
                    isScrolled ? 'text-gray-400' : 'text-blue-200'
                  }`} />
                </div>
                <input
                  type="text"
                  placeholder="Search employees..."
                  className={`block w-full pl-10 pr-3 py-2 border-0 bg-transparent focus:ring-0 focus:outline-none text-sm ${
                    isScrolled
                      ? 'text-gray-900 placeholder-gray-500'
                      : 'text-white placeholder-blue-200'
                  }`}
                />
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  item.current
                    ? isScrolled
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-white/20 text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    : 'text-blue-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;