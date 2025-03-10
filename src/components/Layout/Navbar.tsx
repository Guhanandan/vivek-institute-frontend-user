import React from 'react';
import { GraduationCap, User as UserIcon, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const Navbar: React.FC = () => {
  const { user, setUser, isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <GraduationCap size={28} />
          <span>Vivek Institute</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/about">About Us</Link></li>
          {!isAuthenticated ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          ) : (
            <li className="relative group">
              <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span>{user.name}</span>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                  <Link to="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                    <UserIcon size={16} />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;