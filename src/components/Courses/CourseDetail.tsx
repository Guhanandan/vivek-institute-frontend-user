import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Clock, Calendar, DollarSign, BookOpen, Users, Trophy, CheckCircle, GraduationCap } from 'lucide-react';
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
      navigate('/login', { state: { from: location } });
      return;
    }
    navigate(`/payment/${courseId}`);
  };

  const courseHighlights = [
    'Live interactive sessions with expert faculty',
    'Comprehensive study materials and notes',
    'Regular practice tests and assessments',
    'Doubt clearing sessions',
    'Performance tracking and analysis',
    'Access to recorded lectures',
    'Mock tests with detailed solutions',
    'Personal mentoring sessions'
  ];

  const learningOutcomes = [
    'Master fundamental concepts',
    'Develop problem-solving skills',
    'Improve exam preparation strategy',
    'Build confidence for competitive exams',
    'Learn time management techniques',
    'Practice with previous year questions'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white mb-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
          <p className="text-lg opacity-90 mb-6">{course.description}</p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{course.schedule.days.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>₹{course.fees.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Overview */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                This comprehensive course is designed to help students excel in their {course.name} preparation. 
                Our experienced faculty members use proven teaching methodologies to ensure thorough understanding 
                of concepts and their applications.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Class Schedule</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Timing</p>
                  <p className="text-gray-600">{course.schedule.startTime} - {course.schedule.endTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Days</p>
                  <p className="text-gray-600">{course.schedule.days.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className="bg-white rounded-xl p-6 shadow-md sticky top-6">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500">Course Fee</p>
              <p className="text-4xl font-bold text-primary">₹{course.fees.toLocaleString()}</p>
            </div>
            <button
              onClick={handleEnroll}
              className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              {isAuthenticated ? 'Enroll Now' : 'Login to Enroll'}
            </button>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5 text-primary" />
                <span>Limited seats available</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Comprehensive study material</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Certificate of completion</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Trophy className="w-5 h-5 text-primary" />
                <span>Expert faculty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;