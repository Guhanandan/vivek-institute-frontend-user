import React from 'react';
import { Star, Mail, Phone, Award, BookOpen } from 'lucide-react';

interface Faculty {
  id: string;
  name: string;
  image: string;
  role: string;
  subjects: string[];
  experience: string;
  qualifications: string[];
  email: string;
  phone: string;
  rating: number;
  studentsCount: string;
}

const facultyMembers: Faculty[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60',
    role: 'Senior Physics Faculty',
    subjects: ['Physics', 'Mathematics'],
    experience: '15+ years',
    qualifications: ['Ph.D. in Physics', 'M.Sc. Physics', 'B.Ed.'],
    email: 'rajesh.kumar@vivekinstitute.com',
    phone: '+91 98765 43210',
    rating: 4.9,
    studentsCount: '5000+'
  },
  {
    id: '2',
    name: 'Dr. Priya Singh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60',
    role: 'Chemistry Expert',
    subjects: ['Chemistry', 'Biology'],
    experience: '12+ years',
    qualifications: ['Ph.D. in Chemistry', 'M.Sc. Chemistry', 'B.Ed.'],
    email: 'priya.singh@vivekinstitute.com',
    phone: '+91 98765 43211',
    rating: 4.8,
    studentsCount: '4500+'
  },
  {
    id: '3',
    name: 'Prof. Amit Sharma',
    image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&auto=format&fit=crop&q=60',
    role: 'Mathematics Faculty',
    subjects: ['Mathematics'],
    experience: '10+ years',
    qualifications: ['M.Sc. Mathematics', 'B.Ed.'],
    email: 'amit.sharma@vivekinstitute.com',
    phone: '+91 98765 43212',
    rating: 4.9,
    studentsCount: '4000+'
  }
];

const FacultyPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Expert Faculty</h1>
        <p className="text-lg opacity-90">
          Learn from experienced educators who are passionate about student success
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((faculty) => (
          <div key={faculty.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Faculty Image */}
            <div className="relative h-48">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-xl font-semibold">{faculty.name}</h3>
                <p className="text-white/90">{faculty.role}</p>
              </div>
            </div>

            {/* Faculty Details */}
            <div className="p-6">
              {/* Rating and Experience */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{faculty.rating}</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">{faculty.experience}</span> experience
                </div>
              </div>

              {/* Subjects */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Subjects</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {faculty.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Qualifications</span>
                </div>
                <ul className="list-disc list-inside text-gray-600">
                  {faculty.qualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Mail className="w-4 h-4" />
                  <span>{faculty.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{faculty.phone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;