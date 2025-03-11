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
import { GraduationCap, Users, Clock, Video, BookOpen, Trophy } from 'lucide-react';
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
                    {/* Hero Section */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=60')] opacity-10 bg-cover bg-center" />
                      <div className="relative max-w-4xl mx-auto text-center py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                          Welcome to Vivek Institute
                        </h1>
                        <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
                          Your premier destination for online JEE and NEET preparation. Join live interactive sessions with expert teachers and unlock your potential.
                        </p>
                        <div className="mt-10 flex gap-4 justify-center">
                          <a href="/courses" className="btn bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl">
                            Explore Courses
                          </a>
                          <a href="/about" className="btn bg-primary-dark text-white hover:bg-primary-dark/90 font-semibold px-8 py-3 rounded-xl">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="max-w-7xl mx-auto">
                      <h2 className="text-2xl font-bold text-center mb-12">Why Choose Online Learning with Us?</h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <Video className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Live Interactive Classes</h3>
                          <p className="text-gray-600">
                            Attend daily live sessions with experienced teachers who make learning engaging and effective.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Flexible Schedule</h3>
                          <p className="text-gray-600">
                            Choose from multiple batches and study at times that work best for you.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <BookOpen className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Comprehensive Study Material</h3>
                          <p className="text-gray-600">
                            Access detailed notes, practice questions, and mock tests aligned with your syllabus.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
                          <p className="text-gray-600">
                            Learn from experienced teachers who specialize in JEE and NEET preparation.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                          <p className="text-gray-600">
                            Join thousands of successful students who achieved their dreams with our guidance.
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <Trophy className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Regular Assessments</h3>
                          <p className="text-gray-600">
                            Track your progress with regular tests and personalized feedback from teachers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-2xl font-bold text-center mb-6">Find Your Perfect Course</h2>
                      <SearchBar />
                    </div>

                    {/* Course Grid */}
                    <CourseGrid />

                    {/* Why Choose Us */}
                    <WhyChooseUs />

                    {/* Testimonials */}
                    <Testimonials />

                    {/* CTA Section */}
                    <div className="bg-primary rounded-3xl overflow-hidden">
                      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                          <span className="block">Ready to start your journey?</span>
                          <span className="block text-xl mt-2 opacity-90">Join our expert-led online classes today.</span>
                        </h2>
                        <div className="mt-8 flex justify-center gap-4">
                          <a href="/register" className="btn bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl">
                            Get Started
                          </a>
                          <a href="/courses" className="btn bg-primary-dark text-white hover:bg-primary-dark/90 font-semibold px-8 py-3 rounded-xl">
                            View Courses
                          </a>
                        </div>
                      </div>
                    </div>
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

export default App;