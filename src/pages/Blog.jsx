import React from "react";
import BlogCard from "../components/BlogCard";

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
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">CORS Blog</h1>
        <p className="text-center text-gray-600 mb-10">
          Explore expert articles, career guides, and updates to help shape your future.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
