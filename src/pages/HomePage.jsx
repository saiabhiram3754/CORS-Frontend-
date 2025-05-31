import React from 'react';
import CareerCategories from '../components/CareerCategories';
import CourseSection from '../components/CourseSection';
import CompetitiveExamsPage from '../components/CompetitiveExams';
import Footer from '../components/footer';
import { GraduationCap } from 'lucide-react';
import CareerRecommendation from '../components/CareerRecommendation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] scroll-smooth text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
               <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CORS
                </h1>
                <p className="text-sm text-gray-600">Your Path to Success</p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="space-x-10 hidden md:flex">
              <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
              <a href="#career" className="text-gray-700 hover:text-blue-600 font-medium">Career Options</a>
              <a href="#exams" className="text-gray-700 hover:text-blue-600 font-medium">Competitive Exams</a>
              <a href="/login" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-lg">Login</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-[#f0f4ff]">
         <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Discover Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dream Career
              </span>
          </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Let our CORS platform analyze your strengths, interests, and goals to recommend the perfect career path tailored just for you.
        </p>
        <a
          href="/recommend"
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:shadow-xl transition"
        >
          Get Career Recommendations
        </a>
      </header>

      {/* Content Sections */}
      <section id="courses">
        <CourseSection />
      </section>

      <section id="career">
        <CareerCategories />
      </section>

      <section id="exams">
        <CompetitiveExamsPage />
      </section>

      <Footer />
    </div>
  );
}
