import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, DollarSign } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="course-card" onClick={() => navigate(`/course/${course.id}`)}>
      <div className="course-content">
        <h3 className="course-title">{course.name}</h3>
        <p className="mb-4">{course.description}</p>
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign size={16} />
          <span>₹{course.fees.toLocaleString()}</span>
        </div>
        <button className="enroll-button">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;