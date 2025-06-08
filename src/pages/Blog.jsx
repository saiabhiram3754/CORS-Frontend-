import React from "react";
import { CalendarDays } from "lucide-react";

const blogPosts = [
  {
    title: "How to Choose the Right Career After 12th",
    description: "Confused about what to do after high school? Here's a detailed guide to help you make the best career decision.",
    date: "May 28, 2025",
    tags: ["Career Advice", "Education", "12th Grade"]
  },
  {
    title: "Top Emerging Fields in Engineering",
    description: "From AI to Renewable Energy – explore the fastest-growing branches in engineering for future-proof careers.",
    date: "May 24, 2025",
    tags: ["Engineering", "Tech", "Futuristic Careers"]
  },
  {
    title: "Government Jobs vs Private Sector: Which is Better?",
    description: "A deep dive into pros and cons of both sectors, and how to decide what suits your personality and goals.",
    date: "May 20, 2025",
    tags: ["Govt Jobs", "Private Sector", "Comparison"]
  },
  {
    title: "How to Build a Powerful Resume as a Fresher",
    description: "Start strong with an impressive resume. Learn what recruiters look for and how to stand out even with no experience.",
    date: "May 18, 2025",
    tags: ["Resume Tips", "Fresher", "Job Search"]
  },
  {
    title: "Top Online Platforms to Learn New Skills in 2025",
    description: "Upskill yourself with these free and paid platforms. Stay ahead in your field by constantly learning.",
    date: "May 15, 2025",
    tags: ["Learning", "Skill Development", "Online Courses"]
  },
  {
    title: "Best Scholarships for Indian Students After 12th",
    description: "Don't let finances stop your dreams. Check out these top scholarships available across India.",
    date: "May 12, 2025",
    tags: ["Scholarships", "Finance", "Students"]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📚 CORS Career Blog</h1>
          <p className="text-gray-600 text-lg">
            Expert insights, guides & real-world advice to shape your career.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 transition duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              
              <div className="flex items-center text-sm text-gray-400 mb-3">
                <CalendarDays className="h-4 w-4 mr-1" />
                {post.date}
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
