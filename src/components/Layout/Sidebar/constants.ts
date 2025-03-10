import { Course } from '../../../types';

export const JEE_COURSES: Course[] = [
  { 
    id: '11-physics',
    name: '11th Physics',
    description: 'Complete Physics course for 11th standard students',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '09:00',
      endTime: '11:00',
      days: ['Monday', 'Wednesday', 'Friday']
    }
  },
  {
    id: '11-chemistry',
    name: '11th Chemistry',
    description: 'Comprehensive Chemistry course for 11th standard',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '11:30',
      endTime: '13:30',
      days: ['Monday', 'Wednesday', 'Friday']
    }
  },
  {
    id: '11-mathematics',
    name: '11th Mathematics',
    description: 'In-depth Mathematics course for 11th standard',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '14:00',
      endTime: '16:00',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  },
  { 
    id: '12-physics',
    name: '12th Physics',
    description: 'Complete Physics course for 12th standard students',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '09:00',
      endTime: '11:00',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  },
  {
    id: '12-chemistry',
    name: '12th Chemistry',
    description: 'Comprehensive Chemistry course for 12th standard',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '11:30',
      endTime: '13:30',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  },
  {
    id: '12-mathematics',
    name: '12th Mathematics',
    description: 'In-depth Mathematics course for 12th standard',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '14:00',
      endTime: '16:00',
      days: ['Monday', 'Wednesday', 'Friday']
    }
  }
];

export const NEET_COURSES: Course[] = [
  {
    id: 'neet-physics',
    name: 'Physics',
    description: 'NEET Physics preparation course',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '09:00',
      endTime: '11:00',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  },
  {
    id: 'neet-chemistry',
    name: 'Chemistry',
    description: 'NEET Chemistry course',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '11:30',
      endTime: '13:30',
      days: ['Tuesday', 'Thursday', 'Saturday']
    }
  },
  {
    id: 'neet-biology',
    name: 'Biology',
    description: 'Comprehensive NEET Biology preparation',
    duration: '1 month',
    fees: 4000,
    schedule: {
      startTime: '14:00',
      endTime: '16:00',
      days: ['Monday', 'Wednesday', 'Friday']
    }
  }
];