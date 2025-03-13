import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { JEE_COURSES, NEET_COURSES } from '../Layout/Sidebar/constants';

const PaymentPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const allCourses = [...JEE_COURSES, ...NEET_COURSES];
  const course = allCourses.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handlePayment = () => {
    // Here you would typically handle the payment processing
    alert('Payment successful! You are now enrolled in the course.');
    navigate('/courses');
  };

  const benefits = [
    'Instant access to course materials',
    'Live interactive sessions',
    'Doubt clearing sessions',
    'Practice tests and assessments',
    'Performance tracking',
    'Access to recorded lectures'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-primary p-8 text-white">
            <h2 className="text-2xl font-bold">Complete Your Enrollment</h2>
            <p className="mt-2 opacity-90">Course: {course.name}</p>
          </div>

          <div className="p-8">
            {/* Course Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">What you'll get</h3>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Course Fee</span>
                  <span>₹{course.fees.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-3 border-t">
                  <span>Total Amount</span>
                  <span>₹{course.fees.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              <span>Pay ₹{course.fees.toLocaleString()}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              By proceeding with the payment, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;