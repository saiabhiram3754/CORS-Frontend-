import React from "react";
import { Users, Rocket, BrainCircuit, School } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About CORS</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
             We’re building a smarter future by helping students discover the perfect career path 🎯
          </p>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-20 px-6 bg-[#f9fafc]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://www.stylemotivation.com/wp-content/uploads/2020/09/careers-different-career-paths-being-on-the-fast-track-scaled.jpg"
            alt="About CORS"
            className="rounded-xl shadow-md w-full object-cover h-[350px]"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              CORS (Career Opportunities Recommender System) is designed to help students explore career paths
              that align with their interests, skills, and personal goals. We use intelligent matching logic to provide
              personalized career guidance and roadmap suggestions. 💡
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose CORS?</h2>
          <p className="text-gray-600 text-lg">Empowering students to make informed career choices 👇</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <BrainCircuit className="w-10 h-10 mx-auto text-purple-600 mb-4" />
            <h4 className="font-semibold text-lg mb-1">Smart Matching</h4>
            <p className="text-gray-500 text-sm">AI-like matching based on your skills, interests, and goals.</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <Rocket className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold text-lg mb-1">Career Growth</h4>
            <p className="text-gray-500 text-sm">Choose the right career, backed with education paths and tips.</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <School className="w-10 h-10 mx-auto text-green-600 mb-4" />
            <h4 className="font-semibold text-lg mb-1">Student Friendly</h4>
            <p className="text-gray-500 text-sm">Built with simplicity, especially for 10th & 12th-grade students.</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <Users className="w-10 h-10 mx-auto text-red-600 mb-4" />
            <h4 className="font-semibold text-lg mb-1">Trusted by Students</h4>
            <p className="text-gray-500 text-sm">Used and loved by learners who want clarity in their future.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Future? 🚀</h2>
        <p className="mb-6 text-lg">Start your career journey with confidence and clarity.</p>
        <a
          href="/recommend"
          className="inline-block bg-white text-blue-600 px-6 py-3 font-semibold rounded-full shadow hover:shadow-xl transition"
        >
          Get Recommendations
        </a>
      </section>

      {/* Footer Reference */}
      <div className="text-center py-4 text-sm text-gray-500 bg-gray-100">
        &copy; {new Date().getFullYear()} CORS — Career Opportunities Recommender System
      </div>
    </div>
  );
};

export default AboutUs;
