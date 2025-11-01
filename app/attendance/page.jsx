'use client';

import { useState, useEffect } from 'react';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const AttendancePage = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showMarkAttendance, setShowMarkAttendance] = useState(false);
  const [newAttendance, setNewAttendance] = useState({
    employeeId: '',
    checkIn: '',
    checkOut: '',
    date: selectedDate,
    status: 'present'
  });

  // Mock attendance data
  const mockAttendance = [
    {
      id: 1,
      employeeId: 'EMP001',
      name: 'Manoj Nagpure',
      department: 'HR',
      date: '2024-01-15',
      checkIn: '09:00',
      checkOut: '18:00',
      status: 'present',
      hoursWorked: '9.0',
      late: false
    },
    {
      id: 2,
      employeeId: 'EMP002',
      name: 'Priya Sharma',
      department: 'Engineering',
      date: '2024-01-15',
      checkIn: '09:15',
      checkOut: '18:15',
      status: 'present',
      hoursWorked: '9.0',
      late: true
    },
    {
      id: 3,
      employeeId: 'EMP003',
      name: 'Rahul Verma',
      department: 'Sales',
      date: '2024-01-15',
      checkIn: '',
      checkOut: '',
      status: 'absent',
      hoursWorked: '0.0',
      late: false
    },
    {
      id: 4,
      employeeId: 'EMP004',
      name: 'Sneha Patel',
      department: 'Marketing',
      date: '2024-01-15',
      checkIn: '10:30',
      checkOut: '15:30',
      status: 'half_day',
      hoursWorked: '5.0',
      late: true
    },
    {
      id: 5,
      employeeId: 'EMP005',
      name: 'Amit Kumar',
      department: 'Finance',
      date: '2024-01-15',
      checkIn: '08:45',
      checkOut: '17:45',
      status: 'present',
      hoursWorked: '9.0',
      late: false
    },
    {
      id: 6,
      employeeId: 'EMP006',
      name: 'Neha Gupta',
      department: 'Engineering',
      date: '2024-01-15',
      checkIn: '09:05',
      checkOut: '18:05',
      status: 'present',
      hoursWorked: '9.0',
      late: false
    },
    {
      id: 7,
      employeeId: 'EMP007',
      name: 'Rajesh Singh',
      department: 'Operations',
      date: '2024-01-15',
      checkIn: '',
      checkOut: '',
      status: 'leave',
      hoursWorked: '0.0',
      late: false
    },
    {
      id: 8,
      employeeId: 'EMP008',
      name: 'Anjali Mehta',
      department: 'HR',
      date: '2024-01-15',
      checkIn: '09:00',
      checkOut: '13:00',
      status: 'half_day',
      hoursWorked: '4.0',
      late: false
    }
  ];

  const employees = [
    { id: 'EMP001', name: 'Manoj Nagpure', department: 'HR' },
    { id: 'EMP002', name: 'Priya Sharma', department: 'Engineering' },
    { id: 'EMP003', name: 'Rahul Verma', department: 'Sales' },
    { id: 'EMP004', name: 'Sneha Patel', department: 'Marketing' },
    { id: 'EMP005', name: 'Amit Kumar', department: 'Finance' },
    { id: 'EMP006', name: 'Neha Gupta', department: 'Engineering' },
    { id: 'EMP007', name: 'Rajesh Singh', department: 'Operations' },
    { id: 'EMP008', name: 'Anjali Mehta', department: 'HR' }
  ];

  const departments = ['All Departments', 'HR', 'Engineering', 'Sales', 'Marketing', 'Finance', 'Operations'];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'present', label: 'Present' },
    { value: 'absent', label: 'Absent' },
    { value: 'half_day', label: 'Half Day' },
    { value: 'leave', label: 'On Leave' },
    { value: 'late', label: 'Late' }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAttendanceRecords(mockAttendance);
      setFilteredRecords(mockAttendance);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterRecords();
  }, [searchTerm, dateFilter, statusFilter, departmentFilter, attendanceRecords]);

  const filterRecords = () => {
    let filtered = attendanceRecords;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(record =>
        record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date filter
    if (dateFilter) {
      filtered = filtered.filter(record => record.date === dateFilter);
    }

    // Status filter
    if (statusFilter !== 'all') {
      if (statusFilter === 'late') {
        filtered = filtered.filter(record => record.late === true);
      } else {
        filtered = filtered.filter(record => record.status === statusFilter);
      }
    }

    // Department filter
    if (departmentFilter !== 'all') {
      filtered = filtered.filter(record => record.department === departmentFilter);
    }

    setFilteredRecords(filtered);
  };

  const handleMarkAttendance = () => {
    const newRecord = {
      id: attendanceRecords.length + 1,
      employeeId: newAttendance.employeeId,
      name: employees.find(emp => emp.id === newAttendance.employeeId)?.name || '',
      department: employees.find(emp => emp.id === newAttendance.employeeId)?.department || '',
      date: newAttendance.date,
      checkIn: newAttendance.checkIn,
      checkOut: newAttendance.checkOut,
      status: newAttendance.status,
      hoursWorked: calculateHoursWorked(newAttendance.checkIn, newAttendance.checkOut),
      late: isLate(newAttendance.checkIn)
    };

    setAttendanceRecords([...attendanceRecords, newRecord]);
    setShowMarkAttendance(false);
    resetNewAttendance();
  };

  const calculateHoursWorked = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return '0.0';
    
    const [inHour, inMinute] = checkIn.split(':').map(Number);
    const [outHour, outMinute] = checkOut.split(':').map(Number);
    
    const totalMinutes = (outHour * 60 + outMinute) - (inHour * 60 + inMinute);
    return (totalMinutes / 60).toFixed(1);
  };

  const isLate = (checkIn) => {
    if (!checkIn) return false;
    const [hour, minute] = checkIn.split(':').map(Number);
    return hour > 9 || (hour === 9 && minute > 15);
  };

  const resetNewAttendance = () => {
    setNewAttendance({
      employeeId: '',
      checkIn: '',
      checkOut: '',
      date: selectedDate,
      status: 'present'
    });
  };

  const getStatusColor = (status, late = false) => {
    if (late) return 'bg-orange-100 text-orange-800';
    
    const colors = {
      present: 'bg-green-100 text-green-800',
      absent: 'bg-red-100 text-red-800',
      half_day: 'bg-yellow-100 text-yellow-800',
      leave: 'bg-blue-100 text-blue-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status, late = false) => {
    if (late) return ExclamationTriangleIcon;
    
    const icons = {
      present: CheckCircleIcon,
      absent: XCircleIcon,
      half_day: ClockIcon,
      leave: CalendarIcon
    };
    return icons[status] || CheckCircleIcon;
  };

  const getStatusText = (status, late = false) => {
    if (late) return 'Late';
    
    const texts = {
      present: 'Present',
      absent: 'Absent',
      half_day: 'Half Day',
      leave: 'On Leave'
    };
    return texts[status] || 'Unknown';
  };

  const getAttendanceStats = () => {
    const total = attendanceRecords.length;
    const present = attendanceRecords.filter(r => r.status === 'present').length;
    const absent = attendanceRecords.filter(r => r.status === 'absent').length;
    const late = attendanceRecords.filter(r => r.late).length;
    const onLeave = attendanceRecords.filter(r => r.status === 'leave').length;
    
    return {
      total,
      present,
      absent,
      late,
      onLeave,
      attendanceRate: total > 0 ? ((present / total) * 100).toFixed(1) : '0.0'
    };
  };

  const stats = getAttendanceStats();

  

  return (
    <div className="min-h-screen mt-20 bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
              <p className="text-gray-600 mt-1">
                Track and manage employee attendance records
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                Export
              </button>
              <button
                onClick={() => setShowMarkAttendance(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                Mark Attendance
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                <p className="text-sm text-green-600 mt-1">
                  {stats.attendanceRate}% Attendance Rate
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <ChartBarIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Present Today</p>
                <p className="text-2xl font-bold text-gray-900">{stats.present}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {stats.late} arrived late
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
                <p className="text-sm font-medium text-gray-600">Absent</p>
                <p className="text-2xl font-bold text-gray-900">{stats.absent}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Without notification
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <XCircleIcon className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">On Leave</p>
                <p className="text-2xl font-bold text-gray-900">{stats.onLeave}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Approved leaves
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <CalendarIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by employee name or ID..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Date Filter */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>
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

          {/* Additional Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setDateFilter('');
                  setStatusFilter('all');
                  setDepartmentFilter('all');
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Attendance Records Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Attendance Records ({filteredRecords.length})
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {dateFilter ? `Showing records for ${new Date(dateFilter).toLocaleDateString()}` : 'Showing all records'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check In
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check Out
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hours Worked
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRecords.map((record) => {
                  const StatusIcon = getStatusIcon(record.status, record.late);
                  return (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {record.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {record.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {record.employeeId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(record.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {record.checkIn || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {record.checkOut || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">
                          {record.hoursWorked} hrs
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <StatusIcon className={`w-4 h-4 mr-2 ${getStatusColor(record.status, record.late).split(' ')[1]}`} />
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status, record.late)}`}>
                            {getStatusText(record.status, record.late)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {record.department}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredRecords.length === 0 && (
            <div className="text-center py-12">
              <ChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No attendance records found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mark Attendance Modal */}
      {showMarkAttendance && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center pb-3">
              <h3 className="text-xl font-bold text-gray-900">Mark Attendance</h3>
              <button
                onClick={() => {
                  setShowMarkAttendance(false);
                  resetNewAttendance();
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employee *
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={newAttendance.employeeId}
                  onChange={(e) => setNewAttendance({...newAttendance, employeeId: e.target.value})}
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.name} ({emp.department})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={newAttendance.date}
                  onChange={(e) => setNewAttendance({...newAttendance, date: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check In
                  </label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={newAttendance.checkIn}
                    onChange={(e) => setNewAttendance({...newAttendance, checkIn: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check Out
                  </label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={newAttendance.checkOut}
                    onChange={(e) => setNewAttendance({...newAttendance, checkOut: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status *
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={newAttendance.status}
                  onChange={(e) => setNewAttendance({...newAttendance, status: e.target.value})}
                >
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="half_day">Half Day</option>
                  <option value="leave">On Leave</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowMarkAttendance(false);
                  resetNewAttendance();
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleMarkAttendance}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Attendance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendancePage;