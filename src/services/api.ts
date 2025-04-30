import axios from 'axios';

// Configure base axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
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

// API endpoints using the configured api instance
export const courseAPI = {
  getAllCourses: async () => {
    try {
      const response = await api.get('/student/courses/available');
      return response;
    } catch (error) {
      console.error('Failed to fetch courses from backend:', error);
      throw error;
    }
  },
  
  getCourseById: async (id: string) => {
    try {
      const response = await api.get(`/student/courses/${id}`);
      return response;
    } catch (error) {
      console.error(`Failed to fetch course with id ${id}:`, error);
      throw error;
    }
  },
};

// API endpoints for schedules
export const scheduleAPI = {
  getSchedules: async () => {
    try {
      return await api.get('/student/schedules');
    } catch (error) {
      console.error('Failed to fetch schedules:', error);
      throw error;
    }
  },
  
  getUserSchedules: async () => {
    try {
      return await api.get('/student/schedules/user');
    } catch (error) {
      console.error('Failed to fetch user schedules:', error);
      throw error;
    }
  }
};

// API endpoints for about information
export const aboutAPI = {
  getAboutInfo: async () => {
    try {
      return await api.get('/about');
    } catch (error) {
      console.error('Failed to fetch about info:', error);
      throw error;
    }
  },
  
  getStats: async () => {
    try {
      return await api.get('/about/stats');
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      throw error;
    }
  },
  
  getTestimonials: async () => {
    try {
      return await api.get('/testimonials');
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
      throw error;
    }
  }
};

export default api;