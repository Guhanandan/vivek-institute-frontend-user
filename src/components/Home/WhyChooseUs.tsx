import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Faculty',
    description: 'Learn from experienced educators with proven track records'
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Personalized attention with limited students per batch'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Material',
    description: 'Well-structured study materials and regular mock tests'
  },
  {
    icon: Target,
    title: 'Focused Approach',
    description: 'Systematic preparation strategy for competitive exams'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive preparation for JEE and NEET with experienced faculty and proven methods
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;