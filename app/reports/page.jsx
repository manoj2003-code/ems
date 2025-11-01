'use client';

import { useState, useEffect } from 'react';
import {
  DocumentChartBarIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FunnelIcon,
  ChartBarIcon,
  UsersIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportType, setReportType] = useState('all');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);

  // Mock reports data
  const mockReports = [
    {
      id: 1,
      name: 'Monthly Attendance Summary',
      type: 'attendance',
      description: 'Detailed attendance report for all employees',
      generatedDate: '2024-01-15',
      period: 'December 2023',
      size: '2.4 MB',
      format: 'PDF',
      status: 'completed',
      data: {
        totalEmployees: 142,
        present: 128,
        absent: 8,
        late: 6,
        averageHours: 8.5,
        attendanceRate: 90.1
      }
    },
    {
      id: 2,
      name: 'Payroll Report - January 2024',
      type: 'payroll',
      description: 'Monthly payroll summary and calculations',
      generatedDate: '2024-01-05',
      period: 'January 2024',
      size: '3.1 MB',
      format: 'Excel',
      status: 'completed',
      data: {
        totalPaid: 4500000,
        employees: 142,
        averageSalary: 31690,
        taxDeductions: 675000,
        netPay: 3825000
      }
    },
    {
      id: 3,
      name: 'Employee Performance Review',
      type: 'performance',
      description: 'Quarterly performance metrics and ratings',
      generatedDate: '2024-01-10',
      period: 'Q4 2023',
      size: '1.8 MB',
      format: 'PDF',
      status: 'completed',
      data: {
        totalEmployees: 142,
        excellent: 45,
        good: 72,
        average: 20,
        needsImprovement: 5,
        averageRating: 4.2
      }
    },
    {
      id: 4,
      name: 'Department-wise Analysis',
      type: 'department',
      description: 'Performance and attendance by department',
      generatedDate: '2024-01-08',
      period: 'December 2023',
      size: '2.1 MB',
      format: 'PDF',
      status: 'completed',
      data: {
        departments: 6,
        engineering: 42,
        sales: 28,
        marketing: 22,
        hr: 15,
        finance: 20,
        operations: 15
      }
    },
    {
      id: 5,
      name: 'Leave and Absence Report',
      type: 'leave',
      description: 'Leave patterns and absence analysis',
      generatedDate: '2024-01-12',
      period: 'December 2023',
      size: '1.5 MB',
      format: 'Excel',
      status: 'completed',
      data: {
        totalLeaves: 34,
        approved: 28,
        pending: 4,
        rejected: 2,
        sickLeaves: 12,
        vacation: 16,
        personal: 6
      }
    },
    {
      id: 6,
      name: 'Recruitment Summary 2023',
      type: 'recruitment',
      description: 'Annual hiring and onboarding report',
      generatedDate: '2024-01-02',
      period: '2023',
      size: '4.2 MB',
      format: 'PDF',
      status: 'completed',
      data: {
        totalHired: 45,
        positions: 12,
        averageTime: 28,
        offerAcceptance: 85,
        costPerHire: 25000
      }
    },
    {
      id: 7,
      name: 'Real-time Attendance',
      type: 'attendance',
      description: 'Live attendance tracking report',
      generatedDate: '2024-01-16',
      period: 'Today',
      size: '0.8 MB',
      format: 'PDF',
      status: 'generating',
      data: {
        present: 128,
        absent: 8,
        late: 6,
        remote: 34,
        onLeave: 8
      }
    },
    {
      id: 8,
      name: 'Salary Distribution Analysis',
      type: 'payroll',
      description: 'Salary ranges and distribution patterns',
      generatedDate: '2024-01-14',
      period: 'January 2024',
      size: '2.7 MB',
      format: 'Excel',
      status: 'completed',
      data: {
        salaryRanges: 5,
        under30k: 35,
        thirtyTo50k: 62,
        fiftyTo80k: 32,
        above80k: 13,
        highestSalary: 120000
      }
    }
  ];

  const reportTypes = [
    { value: 'all', label: 'All Reports', icon: DocumentChartBarIcon, color: 'gray' },
    { value: 'attendance', label: 'Attendance', icon: ClockIcon, color: 'blue' },
    { value: 'payroll', label: 'Payroll', icon: CurrencyDollarIcon, color: 'green' },
    { value: 'performance', label: 'Performance', icon: ChartBarIcon, color: 'purple' },
    { value: 'department', label: 'Department', icon: BuildingOfficeIcon, color: 'orange' },
    { value: 'leave', label: 'Leave', icon: CalendarIcon, color: 'yellow' },
    { value: 'recruitment', label: 'Recruitment', icon: UsersIcon, color: 'pink' }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReports(mockReports);
      setFilteredReports(mockReports);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterReports();
  }, [reportType, dateRange, reports]);

  const filterReports = () => {
    let filtered = reports;

    // Report type filter
    if (reportType !== 'all') {
      filtered = filtered.filter(report => report.type === reportType);
    }

    // Date range filter
    if (dateRange.start && dateRange.end) {
      filtered = filtered.filter(report => {
        const reportDate = new Date(report.generatedDate);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return reportDate >= startDate && reportDate <= endDate;
      });
    }

    setFilteredReports(filtered);
  };

  const handleGenerateReport = (type) => {
    // Simulate report generation
    const newReport = {
      id: reports.length + 1,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Report - ${new Date().toLocaleDateString()}`,
      type: type,
      description: `Automatically generated ${type} report`,
      generatedDate: new Date().toISOString().split('T')[0],
      period: 'Current',
      size: '0 MB',
      format: 'PDF',
      status: 'generating',
      data: {}
    };

    setReports([newReport, ...reports]);
    
    // Simulate completion after 2 seconds
    setTimeout(() => {
      setReports(prev => prev.map(r => 
        r.id === newReport.id 
          ? { ...r, status: 'completed', size: '1.2 MB' }
          : r
      ));
    }, 2000);
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setShowReportModal(true);
  };

  const handleDownloadReport = (report) => {
    // Simulate download
    console.log(`Downloading report: ${report.name}`);
    // In real implementation, this would trigger file download
  };

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-100 text-green-800',
      generating: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type) => {
    const colors = {
      attendance: 'bg-blue-100 text-blue-800',
      payroll: 'bg-green-100 text-green-800',
      performance: 'bg-purple-100 text-purple-800',
      department: 'bg-orange-100 text-orange-800',
      leave: 'bg-yellow-100 text-yellow-800',
      recruitment: 'bg-pink-100 text-pink-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getIconColor = (type) => {
    const colors = {
      attendance: 'text-blue-600',
      payroll: 'text-green-600',
      performance: 'text-purple-600',
      department: 'text-orange-600',
      leave: 'text-yellow-600',
      recruitment: 'text-pink-600'
    };
    return colors[type] || 'text-gray-600';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getQuickStats = () => {
    const totalReports = reports.length;
    const completed = reports.filter(r => r.status === 'completed').length;
    const generating = reports.filter(r => r.status === 'generating').length;
    
    return { totalReports, completed, generating };
  };

  const stats = getQuickStats();


  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
              <p className="text-gray-600 mt-1">
                Generate and view comprehensive reports for your organization
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Reports</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalReports}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <DocumentChartBarIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
                <p className="text-sm text-green-600 mt-1">
                  Ready to download
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
                <p className="text-sm font-medium text-gray-600">Generating</p>
                <p className="text-2xl font-bold text-gray-900">{stats.generating}</p>
                <p className="text-sm text-yellow-600 mt-1">
                  In progress
                </p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <ClockIcon className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Report Generation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Report Generation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {reportTypes.slice(1).map((type) => (
              <button
                key={type.value}
                onClick={() => handleGenerateReport(type.value)}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-white transition-colors ${getIconColor(type.value)}`}>
                  <type.icon className="w-6 h-6" />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600">
                  {type.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Report Type
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                {reportTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={dateRange.start}
                onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={dateRange.end}
                onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => {
                setReportType('all');
                setDateRange({ start: '', end: '' });
              }}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Clear Filters
            </button>
            <span className="text-sm text-gray-600">
              {filteredReports.length} reports found
            </span>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => {
            const TypeIcon = reportTypes.find(t => t.value === report.type)?.icon || DocumentChartBarIcon;
            
            return (
              <div
                key={report.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${getTypeColor(report.type)}`}>
                    <TypeIcon className="w-5 h-5" />
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {report.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {report.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Period:</span>
                    <span className="font-medium">{report.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Generated:</span>
                    <span className="font-medium">{formatDate(report.generatedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-medium">{report.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-medium">{report.size}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleViewReport(report)}
                    className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    disabled={report.status !== 'completed'}
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDownloadReport(report)}
                    className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    disabled={report.status !== 'completed'}
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <DocumentChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No reports found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your filters or generate a new report.
            </p>
          </div>
        )}
      </div>

      {/* Report Details Modal */}
      {showReportModal && selectedReport && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center pb-3">
              <h3 className="text-xl font-bold text-gray-900">{selectedReport.name}</h3>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              {/* Report Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Report Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Description:</span>
                    <span className="font-medium text-right">{selectedReport.description}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Period:</span>
                    <span className="font-medium">{selectedReport.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Generated Date:</span>
                    <span className="font-medium">{formatDate(selectedReport.generatedDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{selectedReport.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">File Size:</span>
                    <span className="font-medium">{selectedReport.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${getStatusColor(selectedReport.status)} px-2 py-1 rounded-full text-xs`}>
                      {selectedReport.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Report Data Summary */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Summary</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  {selectedReport.type === 'attendance' && (
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{selectedReport.data.totalEmployees}</div>
                        <div className="text-gray-600">Total Employees</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-green-600">{selectedReport.data.present}</div>
                        <div className="text-gray-600">Present</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-red-600">{selectedReport.data.absent}</div>
                        <div className="text-gray-600">Absent</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{selectedReport.data.late}</div>
                        <div className="text-gray-600">Late Arrivals</div>
                      </div>
                    </div>
                  )}

                  {selectedReport.type === 'payroll' && (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Total Paid:</span>
                        <span className="font-bold text-green-600">
                          ₹{selectedReport.data.totalPaid?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Employees:</span>
                        <span className="font-bold">{selectedReport.data.employees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Salary:</span>
                        <span className="font-bold">
                          ₹{selectedReport.data.averageSalary?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedReport.type === 'performance' && (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Excellent:</span>
                        <span className="font-bold text-green-600">{selectedReport.data.excellent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Good:</span>
                        <span className="font-bold text-blue-600">{selectedReport.data.good}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average:</span>
                        <span className="font-bold text-yellow-600">{selectedReport.data.average}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Rating:</span>
                        <span className="font-bold">{selectedReport.data.averageRating}/5</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowReportModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleDownloadReport(selectedReport)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                disabled={selectedReport.status !== 'completed'}
              >
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add missing icons
const CheckCircleIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const XMarkIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default ReportsPage;