import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaLaptopCode,
  FaHeartbeat,
  FaMoneyCheckAlt,
  FaPaintBrush,
  FaUniversity,
  FaChalkboardTeacher,
  FaBriefcase,
  FaFlask,
  FaBalanceScale

} from 'react-icons/fa';

const categories = [
   { title: 'Engineering & Technology', icon: <FaLaptopCode />, path: '/engineering-roadmap' },
  { title: 'Healthcare & Medicine', icon: <FaHeartbeat />, path: '/healthcare-roadmap' },
  { title: 'Finance & Banking', icon: <FaMoneyCheckAlt />, path: '/Finance-roadmap' },
  { title: 'Arts & Design', icon: <FaPaintBrush />, path: '/arts-roadmap' },
  { title: 'Government & Public Service', icon: <FaUniversity />, path: '/Govt-roadmap' },
  { title: 'Education & Teaching', icon: <FaChalkboardTeacher />, path: '/Edu-roadmap' },
  { title: 'Business & Management', icon: <FaBriefcase />, path: '/business-roadmap' },
  { title: 'Research & Development', icon: <FaFlask />, path: '/rnd-roadmap' },
  { title: 'Law & Legal Services', icon: <FaBalanceScale />, path: '/Law-roadmap' }
];

const CareerCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="career" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Career Opportunity Categories
        </h2>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <Link
                to={category.path}
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg hover:border-indigo-300 transition duration-200"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="text-4xl text-indigo-600">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {category.title}
                  </h3>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No categories found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerCategories;
