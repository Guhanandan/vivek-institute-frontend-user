import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Course } from '../../types';
import { JEE_COURSES, NEET_COURSES } from '../Layout/Sidebar/constants';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Course[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const allCourses = [...JEE_COURSES, ...NEET_COURSES];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = allCourses.filter(course => {
      const searchTerm = query.toLowerCase();
      return (
        course.name.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
      );
    });

    setResults(searchResults);
  }, [query]);

  const handleCourseClick = (courseId: string) => {
    setQuery('');
    setResults([]);
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsSearching(true)}
          onBlur={() => {
            // Delay hiding results to allow for clicking
            setTimeout(() => setIsSearching(false), 200);
          }}
        />
        <Search 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20} 
        />

        {/* Search Results Dropdown */}
        {isSearching && results.length > 0 && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
            {results.map((course) => (
              <div
                key={course.id}
                className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                onClick={() => handleCourseClick(course.id)}
              >
                <h3 className="font-semibold text-gray-900">{course.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>Duration: {course.duration}</span>
                  <span>Fee: ₹{course.fees.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {isSearching && query && results.length === 0 && (
          <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 p-4 text-center text-gray-600">
            No courses found matching "{query}"
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;