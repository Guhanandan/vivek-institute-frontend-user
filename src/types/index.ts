export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'student';
}

export interface Resource {
  _id: string;
  title: string;
  type: 'VIDEO' | 'PDF' | 'QUIZ';
  url: string;
}

export interface SyllabusWeek {
  _id: string;
  week: number;
  topic: string;
  description: string;
  resources: Resource[];
}

export interface Course {
  _id: string;
  name: string;
  courseCode: string;
  description: string;
  faculty: string;
  thumbnail: string | null;
  duration: number;
  startDate: string;
  endDate: string;
  maxStudents: number;
  courseFee: number;
  teachingDays: string[];
  startTime: string;
  endTime: string;
  isActive: boolean;
  syllabus: SyllabusWeek[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
  meetSessions: any[];
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  enrollmentDate: string;
  status: 'active' | 'completed' | 'dropped';
}

export interface Attendance {
  id: string;
  studentId: string;
  courseId: string;
  date: string;
  status: 'present' | 'absent';
}