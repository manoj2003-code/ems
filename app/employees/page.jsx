'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Mock employee data
  const mockEmployees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 123-4567',
      position: 'Senior Developer',
      department: 'Engineering',
      joinDate: '2022-03-15',
      status: 'active',
      avatar: '/avatars/sarah.jpg',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      phone: '+1 (555) 234-5678',
      position: 'Product Manager',
      department: 'Product',
      joinDate: '2021-08-22',
      status: 'active',
      avatar: '/avatars/mike.jpg',
      location: 'New York, NY'
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      phone: '+1 (555) 345-6789',
      position: 'UX Designer',
      department: 'Design',
      joinDate: '2023-01-10',
      status: 'active',
      avatar: '/avatars/emily.jpg',
      location: 'Austin, TX'
    },
    {
      id: 4,
      name: 'Robert Wilson',
      email: 'robert.w@company.com',
      phone: '+1 (555) 456-7890',
      position: 'Sales Executive',
      department: 'Sales',
      joinDate: '2020-11-05',
      status: 'on_leave',
      avatar: '/avatars/robert.jpg',
      location: 'Chicago, IL'
    },
    {
      id: 5,
      name: 'Lisa Brown',
      email: 'lisa.brown@company.com',
      phone: '+1 (555) 567-8901',
      position: 'HR Manager',
      department: 'HR',
      joinDate: '2019-06-18',
      status: 'active',
      avatar: '/avatars/lisa.jpg',
      location: 'Boston, MA'
    },
    {
      id: 6,
      name: 'David Lee',
      email: 'david.lee@company.com',
      phone: '+1 (555) 678-9012',
      position: 'DevOps Engineer',
      department: 'Engineering',
      joinDate: '2022-09-30',
      status: 'active',
      avatar: '/avatars/david.jpg',
      location: 'Seattle, WA'
    },
    {
      id: 7,
      name: 'Maria Garcia',
      email: 'maria.g@company.com',
      phone: '+1 (555) 789-0123',
      position: 'Marketing Specialist',
      department: 'Marketing',
      joinDate: '2023-03-01',
      status: 'inactive',
      avatar: '/avatars/maria.jpg',
      location: 'Miami, FL'
    },
    {
      id: 8,
      name: 'James Miller',
      email: 'james.m@company.com',
      phone: '+1 (555) 890-1234',
      position: 'Data Analyst',
      department: 'Analytics',
      joinDate: '2021-12-12',
      status: 'active',
      avatar: '/avatars/james.jpg',
      location: 'Denver, CO'
    }
  ];

  const departments = [
    'All Departments',
    'Engineering',
    'Product',
    'Design',
    'Sales',
    'Marketing',
    'HR',
    'Analytics',
    'Operations'
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status', color: 'gray' },
    { value: 'active', label: 'Active', color: 'green' },
    { value: 'on_leave', label: 'On Leave', color: 'yellow' },
    { value: 'inactive', label: 'Inactive', color: 'red' }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEmployees(mockEmployees);
      setFilteredEmployees(mockEmployees);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterEmployees();
  }, [searchTerm, departmentFilter, statusFilter, employees]);

  const filterEmployees = () => {
    let filtered = employees;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Department filter
    if (departmentFilter !== 'all') {
      filtered = filtered.filter(employee => employee.department === departmentFilter);
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(employee => employee.status === statusFilter);
    }

    setFilteredEmployees(filtered);
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      on_leave: 'bg-yellow-100 text-yellow-800',
      inactive: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status) => {
    const texts = {
      active: 'Active',
      on_leave: 'On Leave',
      inactive: 'Inactive'
    };
    return texts[status] || 'Unknown';
  };

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedEmployee) {
      setEmployees(employees.filter(emp => emp.id !== selectedEmployee.id));
      setShowDeleteModal(false);
      setSelectedEmployee(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  

  return (
    <div className="min-h-screen mt-20 bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
              <p className="text-gray-600">
                Manage your team members and their information
              </p>
            </div>
            <Link
              href="/employees/add"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Employee
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search employees by name, email, or position..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept === 'All Departments' ? 'all' : dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statusOptions.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{employees.length}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <UsersIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">
                  {employees.filter(emp => emp.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">On Leave</p>
                <p className="text-2xl font-bold text-gray-900">
                  {employees.filter(emp => emp.status === 'on_leave').length}
                </p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <CalendarIcon className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Departments</p>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(employees.map(emp => emp.department)).size}
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <BuildingOfficeIcon className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Employees Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Employee List ({filteredEmployees.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {employee.name}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <EnvelopeIcon className="w-3 h-3 mr-1" />
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(employee.joinDate)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(employee.status)}`}>
                        {getStatusText(employee.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link
                          href={`/employees/${employee.id}`}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded transition-colors"
                          title="View Details"
                        >
                          <EyeIcon className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/employees/${employee.id}/edit`}
                          className="text-green-600 hover:text-green-900 p-1 rounded transition-colors"
                          title="Edit"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(employee)}
                          className="text-red-600 hover:text-red-900 p-1 rounded transition-colors"
                          title="Delete"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredEmployees.length === 0 && (
            <div className="text-center py-12">
              <UsersIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No employees found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <TrashIcon className="mx-auto w-12 h-12 text-red-600" />
              <h3 className="text-lg font-medium text-gray-900 mt-2">Delete Employee</h3>
              <p className="text-sm text-gray-500 mt-2">
                Are you sure you want to delete {selectedEmployee?.name}? This action cannot be undone.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add missing icons
const UsersIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BuildingOfficeIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default EmployeesPage;