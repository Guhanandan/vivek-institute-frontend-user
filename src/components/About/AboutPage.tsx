import React, { useState, useEffect } from 'react';
import { Users, Award, BookOpen, Target, Sparkles, Trophy } from 'lucide-react';
import { aboutAPI } from '../../services/api';

interface AboutInfo {
  journey: string;
  mission: string;
}

interface Stats {
  studentsCount: string;
  facultyCount: string;
  successRate: string;
  coursesCount: string;
}

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  course: string;
}

// Define features outside of component to avoid recreation
const features = [
  {
    iconName: 'Users',
    title: 'Expert Faculty',
    description: 'Our teachers are highly qualified with years of experience in preparing students for competitive exams.'
  },
  {
    iconName: 'Target',
    title: 'Focused Approach',
    description: 'Customized study plans and regular assessments to track progress and improve performance.'
  },
  {
    iconName: 'Sparkles',
    title: 'Proven Track Record',
    description: 'Consistently high success rates with numerous students clearing JEE and NEET with top ranks.'
  }
];

// Icon mapping
const IconComponents = {
  Users,
  Award,
  BookOpen,
  Target,
  Sparkles,
  Trophy
};

const AboutPage: React.FC = () => {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [aboutResponse, statsResponse, testimonialsResponse] = await Promise.all([
          aboutAPI.getAboutInfo(),
          aboutAPI.getStats(),
          aboutAPI.getTestimonials()
        ]);

        setAboutInfo(aboutResponse.data);
        setStats(statsResponse.data);
        setTestimonials(testimonialsResponse.data);
      } catch (err) {
        setError('Failed to fetch about information. Please try again later.');
        console.error('Error fetching about data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-primary hover:underline"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">About Vivek Institute</h1>
        <p className="text-lg opacity-90">
          Empowering students to achieve their dreams through quality education and guidance
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600 mb-4">{aboutInfo?.journey}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">{aboutInfo?.mission}</p>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary mb-2">{stats.studentsCount}</div>
            <div className="text-gray-600">Students Taught</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary mb-2">{stats.facultyCount}</div>
            <div className="text-gray-600">Expert Faculty</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary mb-2">{stats.successRate}</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-primary mb-2">{stats.coursesCount}</div>
            <div className="text-gray-600">Courses Offered</div>
          </div>
        </div>
      )}

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = IconComponents[feature.iconName as keyof typeof IconComponents];
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Our Teaching Methodology</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Our teaching approach combines traditional classroom learning with modern
            technology and innovative teaching methods. We focus on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Concept-based learning with practical applications</li>
            <li>Regular doubt-clearing sessions and one-on-one mentoring</li>
            <li>Comprehensive study material and practice questions</li>
            <li>Regular mock tests and performance analysis</li>
            <li>Special focus on previous years' questions and exam patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;