import axios from 'axios';

// Use mock data until the backend is ready
const MOCK_DATA = {
  courses: [
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
    // Add more mock courses as needed
  ],
  about: {
    journey: 'Founded in 2010, Vivek Institute has been at the forefront of preparing students for JEE and NEET examinations. Our commitment to excellence and student success has made us one of the most trusted names in competitive exam preparation.',
    mission: 'We strive to provide comprehensive, quality education that not only helps students crack competitive exams but also builds a strong foundation for their future academic pursuits.'
  },
  stats: {
    studentsCount: '10,000+',
    facultyCount: '50+',
    successRate: '95%',
    coursesCount: '20+'
  },
  testimonials: [
    {
      id: '1',
      name: 'Rahul Kumar',
      text: 'The JEE preparation course helped me secure a great rank. The faculty is excellent!',
      rating: 5,
      course: 'JEE Advanced'
    },
    // Add more mock testimonials as needed
  ]
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Mock API responses until backend is ready
const mockResponse = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data });
    }, 1000);
  });
};

// API endpoints
export const courseAPI = {
  getAllCourses: () => mockResponse(MOCK_DATA.courses),
  getCourseById: (id: string) => mockResponse(MOCK_DATA.courses.find(c => c.id === id)),
  getJEECourses: () => mockResponse(MOCK_DATA.courses.filter(c => c.id.includes('jee'))),
  getNEETCourses: () => mockResponse(MOCK_DATA.courses.filter(c => c.id.includes('neet'))),
};

export const scheduleAPI = {
  getSchedules: () => mockResponse([]),
  getUserSchedules: () => mockResponse([]),
};

export const aboutAPI = {
  getAboutInfo: () => mockResponse(MOCK_DATA.about),
  getStats: () => mockResponse(MOCK_DATA.stats),
  getTestimonials: () => mockResponse(MOCK_DATA.testimonials),
};

export default api;