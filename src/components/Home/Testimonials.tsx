import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Kumar',
    text: 'The JEE preparation course helped me secure a great rank. The faculty is excellent!',
    rating: 5,
    course: 'JEE Advanced'
  },
  {
    id: 2,
    name: 'Priya Singh',
    text: 'NEET coaching at Vivek Institute was a game-changer for my medical aspirations.',
    rating: 5,
    course: 'NEET'
  },
  {
    id: 3,
    name: 'Amit Patel',
    text: 'The study material and mock tests were comprehensive and helped me improve significantly.',
    rating: 5,
    course: 'JEE Mains'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;