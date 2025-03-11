import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu,
  X,
  Home,
  GraduationCap,
  Calendar,
  BookOpen,
  Users,
  CreditCard,
  FileText,
  Settings,
  Search
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: GraduationCap, label: 'Courses', path: '/courses' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: BookOpen, label: 'Assignments', path: '/assignments' },
    { icon: Users, label: 'Faculty', path: '/faculty' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: FileText, label: 'Resources', path: '/resources' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-xl z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-64' : 'w-20'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b">
            <div className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
              {isOpen && <h1 className="text-xl font-semibold">Vivek Institute</h1>}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 hidden lg:block"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className={`relative ${!isOpen && 'flex justify-center'}`}>
              {isOpen ? (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              ) : (
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <Search size={20} className="text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      {isOpen && <span className="ml-3">{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t">
            <div className={`flex items-center ${!isOpen && 'justify-center'}`}>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                V
              </div>
              {isOpen && (
                <div className="ml-3">
                  <p className="font-medium">Student Name</p>
                  <p className="text-sm text-gray-500">student@example.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Margin */}
      <div className={`transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Sidebar;