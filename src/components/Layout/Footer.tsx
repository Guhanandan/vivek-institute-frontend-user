import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-primary">Courses</Link></li>
              <li><Link to="/schedule" className="hover:text-primary">Schedule</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/jee" className="hover:text-primary">JEE Preparation</Link></li>
              <li><Link to="/courses/neet" className="hover:text-primary">NEET Preparation</Link></li>
              <li><Link to="/courses/foundation" className="hover:text-primary">Foundation Courses</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@vivekinstitute.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary"><Facebook size={24} /></a>
              <a href="#" className="hover:text-primary"><Twitter size={24} /></a>
              <a href="#" className="hover:text-primary"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vivek Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;