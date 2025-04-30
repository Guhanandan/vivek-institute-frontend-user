import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, Users, Tag, ArrowRight } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/course/${course._id}`)}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60"}
          alt={course.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary/90 text-white text-sm px-2 py-1 rounded">
              {course.courseCode}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{course.name}</h3>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2 text-primary" />
            <span>{formatDate(course.startDate)} - {formatDate(course.endDate)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-2 text-primary" />
            <span>{course.startTime} - {course.endTime}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-2 text-primary" />
            <span>{course.maxStudents} seats available</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag, index) => (
              <span key={index} className="flex items-center gap-1 text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-sm text-gray-500">Course Fee</p>
            <p className="text-2xl font-bold text-primary">${course.courseFee.toLocaleString()}</p>
          </div>
          <button 
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/course/${course._id}`);
            }}
          >
            View Details
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;