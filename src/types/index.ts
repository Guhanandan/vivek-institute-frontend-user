export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'student';
}

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  fees: number;
  schedule: {
    startTime: string;
    endTime: string;
    days: string[];
  };
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