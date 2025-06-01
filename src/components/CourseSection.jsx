import React from 'react';
import { Star } from 'lucide-react';

const courseData = [
  {
    title: 'Mathematics',
    subtitle: 'Trigonometry',
    price: 500,
    category: 'Maths',
    image: '/images/maths.png',
  },
   {
    title: 'Photography',
    subtitle: 'DSLR Photography Masterclass',
    price: 549,
    category: 'Photography',
    image: '/images/photography.png',
  },
   {
    title: 'Public Speaking',
    subtitle: 'Master Communication Skills',
    price: 449,
    category: 'Personal Development',
    image: '/images/publicspeaking.png',
  },
 
  
 
  {
    title: 'Physics',
    subtitle: 'Electrostatics',
    price: 500,
    category: 'Physics',
    image: '/images/physics.png',
  },
   {
    title: 'Python',
    subtitle: 'Python',
    price: 500,
    category: 'Development',
    image: '/images/python.png', 
  },
    {
    title: 'Graphic Design',
    subtitle: 'Adobe Photoshop Mastery',
    price: 699,
    category: 'Design',
    image: '/images/graphicdesign.png',
  },
  
];

const CourseSection = () => {
  return (
    <section id="courses" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courseData.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border"
            >
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-white text-sm px-3 py-1 rounded-md font-medium shadow">
                  {course.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center text-yellow-500 text-sm mb-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  <span className="ml-2 text-gray-500">(50 reviews)</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="text-gray-600">{course.subtitle}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <img src="/images/instructor-icon.png" alt="Instructor" className="w-6 h-6" />
                    <span>Instructor #</span>
                  </div>
                  <span className="text-lg font-bold text-black">${course.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
