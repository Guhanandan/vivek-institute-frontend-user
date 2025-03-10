import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Course {
  name: string;
  href: string;
}

interface CourseSectionProps {
  title: string;
  icon: LucideIcon;
  courses: Course[];
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, icon: Icon, courses }) => {
  return (
    <div className="sidebar-section">
      <h3 className="sidebar-title">
        <Icon size={20} />
        <span>{title}</span>
      </h3>
      <div className="course-boxes">
        {courses.map((course) => (
          <a key={course.href} href={course.href} className="course-box">
            {course.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;