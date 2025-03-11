import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import CourseGrid from './components/Courses/CourseGrid';
import CourseDetail from './components/Courses/CourseDetail';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import PaymentPage from './components/Payment/PaymentPage';
import SearchBar from './components/Home/SearchBar';
import Testimonials from './components/Home/Testimonials';
import WhyChooseUs from './components/Home/WhyChooseUs';
import SchedulePage from './components/Schedule/SchedulePage';
import AboutPage from './components/About/AboutPage';
import ProfilePage from './components/Profile/ProfilePage';
import './index.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={
                  <div className="space-y-12">
                    <div className="welcome-section rounded-2xl overflow-hidden">
                      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                          Welcome to Vivek Institute
                        </h1>
                        <p className="mt-5 text-xl text-white opacity-90">
                          Your gateway to JEE and NEET success
                        </p>
                      </div>
                    </div>
                    <SearchBar />
                    <CourseGrid />
                    <WhyChooseUs />
                    <Testimonials />
                  </div>
                } />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/courses" element={<CourseGrid />} />
                <Route path="/course/:courseId" element={<CourseDetail />} />
                <Route path="/payment/:courseId" element={<PaymentPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App