import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Video, BookOpen, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { scheduleAPI } from '../../services/api';
import { useUser } from '../../contexts/UserContext';

interface Schedule {
  id: string;
  date: string;
  time: string;
  subject: string;
  topics: string[];
  meetLink: string;
}

const SchedulePage: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setLoading(true);
        setError(null);
        if (isAuthenticated) {
          const response = await scheduleAPI.getUserSchedules();
          setSchedules(response.data);
        }
      } catch (err) {
        setError('Failed to fetch schedules. Please try again later.');
        console.error('Error fetching schedules:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
            <Calendar className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Login to View Your Schedule</h2>
          <p className="text-gray-600 mb-6">
            Please login to access your personalized class schedule and meeting links.
          </p>
          <button
            onClick={() => navigate('/login', { state: { from: '/schedule' } })}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            <LogIn size={20} />
            Login Now
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
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
      <div className="bg-primary text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">Your Class Schedule</h1>
        <p className="text-lg opacity-90">
          Join our live interactive sessions with expert faculty members
        </p>
      </div>

      <div className="grid gap-6">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-wrap items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={20} />
                  <span className="font-semibold">{schedule.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock size={20} />
                  <span>{schedule.time}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{schedule.subject}</h3>
                <div className="flex items-start gap-2 text-gray-600 mb-4">
                  <BookOpen size={20} className="mt-1" />
                  <div>
                    <p className="font-medium mb-2">Topics covered:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {schedule.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href={schedule.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <Video size={20} />
                  Join Meet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;