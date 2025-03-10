import React, { useState } from 'react';
import { User, Book, Calendar, DollarSign, FileText, Award, Clock } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

// Mock data - In production, this would come from an API
const mockEnrollments = [
  { id: '1', courseName: 'Physics', progress: 75, lastAccessed: '2024-03-05' },
  { id: '2', courseName: 'Chemistry', progress: 60, lastAccessed: '2024-03-04' },
];

const mockAttendance = [
  { date: '2024-03-05', status: 'present', course: 'Physics' },
  { date: '2024-03-04', status: 'present', course: 'Chemistry' },
  { date: '2024-03-03', status: 'absent', course: 'Physics' },
];

const mockAssignments = [
  { id: '1', title: 'Kinematics Problem Set', course: 'Physics', dueDate: '2024-03-10', status: 'submitted' },
  { id: '2', title: 'Chemical Bonding', course: 'Chemistry', dueDate: '2024-03-12', status: 'pending' },
];

const mockPayments = [
  { id: '1', course: 'Physics', amount: 4000, date: '2024-02-01', status: 'paid' },
  { id: '2', course: 'Chemistry', amount: 4000, date: '2024-02-01', status: 'paid' },
];

const ProfilePage: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'courses', label: 'My Courses', icon: Book },
    { id: 'attendance', label: 'Attendance', icon: Calendar },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'payments', label: 'Payments', icon: DollarSign },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-500">Name</label>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Role</label>
                  <p className="font-medium capitalize">{user.role}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <Book className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{mockEnrollments.length}</div>
                  <div className="text-sm text-gray-600">Active Courses</div>
                </div>
                <div className="text-center p-4 bg-green-100 rounded-lg">
                  <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-gray-600">Attendance</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="space-y-6">
            {mockEnrollments.map(course => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{course.courseName}</h3>
                    <p className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {course.progress}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        );

      case 'attendance':
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockAttendance.map((record, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{record.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        record.status === 'present' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'assignments':
        return (
          <div className="space-y-6">
            {mockAssignments.map(assignment => (
              <div key={assignment.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{assignment.title}</h3>
                    <p className="text-sm text-gray-500">{assignment.course}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    assignment.status === 'submitted'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {assignment.status}
                  </span>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  Due: {assignment.dueDate}
                </div>
              </div>
            ))}
          </div>
        );

      case 'payments':
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockPayments.map(payment => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹{payment.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;