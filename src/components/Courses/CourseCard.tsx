import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  // Helper function to get subject icon
  const getSubjectIcon = () => {
    if (course.name.toLowerCase().includes('physics')) {
      return "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60";
    } else if (course.name.toLowerCase().includes('chemistry')) {
      return "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop&q=60";
    } else if (course.name.toLowerCase().includes('biology')) {
      return "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60";
    }
    return "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60";
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      onClick={() => navigate(`/course/${course.id}`)}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={getSubjectIcon()} 
          alt={course.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{course.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <Clock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
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
            <span>{course.schedule.days.join(', ')}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-2 text-primary" />
            <span>{course.schedule.startTime} - {course.schedule.endTime}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-2 text-primary" />
            <span>Limited seats available</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-sm text-gray-500">Course Fee</p>
            <p className="text-2xl font-bold text-primary">₹{course.fees.toLocaleString()}</p>
          </div>
          <button 
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/course/${course.id}`);
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