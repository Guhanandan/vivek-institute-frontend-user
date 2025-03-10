import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Clock, Calendar, DollarSign, BookOpen, Users, Trophy } from 'lucide-react';
import { Course } from '../../types';
import { JEE_COURSES, NEET_COURSES } from '../Layout/Sidebar/constants';
import { useUser } from '../../contexts/UserContext';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useUser();
  const allCourses = [...JEE_COURSES, ...NEET_COURSES];
  const course = allCourses.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnroll = () => {
    if (!isAuthenticated) {
      // Redirect to login with return path
      navigate('/login', { state: { from: location } });
      return;
    }
    navigate(`/payment/${courseId}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
        <p className="text-lg opacity-90">{course.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-primary" size={24} />
            <div>
              <h3 className="font-semibold">Duration</h3>
              <p>{course.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-primary" size={24} />
            <div>
              <h3 className="font-semibold">Schedule</h3>
              <p>{course.schedule.days.join(', ')}</p>
              <p>{course.schedule.startTime} - {course.schedule.endTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DollarSign className="text-primary" size={24} />
            <div>
              <h3 className="font-semibold">Course Fee</h3>
              <p>₹{course.fees.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <BookOpen className="text-primary mt-1" size={20} />
              <span>Comprehensive study material and practice questions</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="text-primary mt-1" size={20} />
              <span>Interactive live classes with expert faculty</span>
            </li>
            <li className="flex items-start gap-3">
              <Trophy className="text-primary mt-1" size={20} />
              <span>Regular mock tests and performance analysis</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={handleEnroll}
          className="btn btn-primary px-8 py-3 text-lg"
        >
          {isAuthenticated ? 'Enroll Now' : 'Login to Enroll'}
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;