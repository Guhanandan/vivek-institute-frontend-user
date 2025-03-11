import axios from 'axios';

// Use mock data until the backend is ready
const MOCK_DATA = {
  courses: [
    {
      id: "11-maths",
      name: "11th Mathematics",
      description: "Complete Mathematics course for 11th standard students",
      duration: "1.5 months",
      fees: 4500,
      schedule: {
        startTime: "10:00",
        endTime: "12:00",
        days: ["Tuesday", "Thursday", "Saturday"]
      }
    },
    {
      id: "11-chemistry",
      name: "11th Chemistry",
      description: "Comprehensive Chemistry course covering organic, inorganic, and physical chemistry",
      duration: "1 month",
      fees: 4200,
      schedule: {
        startTime: "11:00",
        endTime: "13:00",
        days: ["Monday", "Wednesday", "Friday"]
      }
    },
    {
      id: "12-physics",
      name: "12th Physics",
      description: "Advanced Physics course for 12th standard students",
      duration: "2 months",
      fees: 5000,
      schedule: {
        startTime: "09:30",
        endTime: "11:30",
        days: ["Tuesday", "Thursday", "Saturday"]
      }
    },
    {
      id: "12-maths",
      name: "12th Mathematics",
      description: "Higher-level Mathematics course for 12th standard students",
      duration: "2 months",
      fees: 5500,
      schedule: {
        startTime: "14:00",
        endTime: "16:00",
        days: ["Monday", "Wednesday", "Friday"]
      }
    },
    {
      id: "12-biology",
      name: "12th Biology",
      description: "Detailed Biology course covering human anatomy, genetics, and botany",
      duration: "1.5 months",
      fees: 4800,
      schedule: {
        startTime: "13:00",
        endTime: "15:00",
        days: ["Monday", "Wednesday", "Friday"]
      }
    },
    {
      id: "12-chemistry",
      name: "12th Chemistry",
      description: "In-depth Chemistry course covering theoretical and practical applications",
      duration: "2 months",
      fees: 5200,
      schedule: {
        startTime: "12:00",
        endTime: "14:00",
        days: ["Tuesday", "Thursday", "Saturday"]
      }
    }
  ],
  schedules: [
    {
      id: "sch-001",
      courseId: "11-maths",
      date: "2024-03-12",
      time: "10:00 AM - 12:00 PM",
      subject: "Mathematics",
      topics: ["Trigonometry", "Complex Numbers"],
      meetLink: "https://meet.google.com/abc-defg-hij"
    },
    {
      id: "sch-002",
      courseId: "11-chemistry",
      date: "2024-03-13",
      time: "11:00 AM - 1:00 PM",
      subject: "Chemistry",
      topics: ["Organic Chemistry", "Chemical Bonding"],
      meetLink: "https://meet.google.com/xyz-uvwx-yz"
    },
    {
      id: "sch-003",
      courseId: "12-physics",
      date: "2024-03-14",
      time: "9:30 AM - 11:30 AM",
      subject: "Physics",
      topics: ["Electromagnetism", "Wave Optics"],
      meetLink: "https://meet.google.com/pqr-stuv-wxy"
    }
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
    }
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
  getSchedules: () => mockResponse(MOCK_DATA.schedules),
  getUserSchedules: () => mockResponse(MOCK_DATA.schedules),
};

export const aboutAPI = {
  getAboutInfo: () => mockResponse(MOCK_DATA.about),
  getStats: () => mockResponse(MOCK_DATA.stats),
  getTestimonials: () => mockResponse(MOCK_DATA.testimonials),
};

export default api;