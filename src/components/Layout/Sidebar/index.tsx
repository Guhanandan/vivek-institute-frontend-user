import React, { useState } from 'react';
import { Home, Calendar, BookOpen, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const ELEVENTH_COURSES = [
  { name: 'Physics', href: '/course/11-physics' },
  { name: 'Chemistry', href: '/course/11-chemistry' },
  { name: 'Mathematics', href: '/course/11-mathematics' },
];

const TWELFTH_COURSES = [
  { name: 'Physics', href: '/course/12-physics' },
  { name: 'Chemistry', href: '/course/12-chemistry' },
  { name: 'Mathematics', href: '/course/12-mathematics' },
];

const NEET_COURSES = [
  { name: 'Physics', href: '/course/neet-physics' },
  { name: 'Chemistry', href: '/course/neet-chemistry' },
  { name: 'Biology', href: '/course/neet-biology' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        className="lg:hidden fixed left-4 top-20 z-50 bg-primary text-white p-2 rounded-lg shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        border-r border-gray-200 p-6
      `}>
        <nav className="space-y-8">
          <div className="space-y-2">
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="/schedule" icon={Calendar}>Schedule</NavLink>
            <NavLink href="/courses" icon={BookOpen}>Courses</NavLink>
            <NavLink href="/contact" icon={Phone}>Contact</NavLink>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                11th Standard
              </h3>
              <div className="mt-3 space-y-2">
                {ELEVENTH_COURSES.map(course => (
                  <Link
                    key={course.href}
                    to={course.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                12th Standard
              </h3>
              <div className="mt-3 space-y-2">
                {TWELFTH_COURSES.map(course => (
                  <Link
                    key={course.href}
                    to={course.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                NEET Preparation
              </h3>
              <div className="mt-3 space-y-2">
                {NEET_COURSES.map(course => (
                  <Link
                    key={course.href}
                    to={course.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;