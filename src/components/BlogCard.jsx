import React from "react";

const BlogCard = ({ title, description, date, tags }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm text-blue-600 mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <p className="text-xs text-gray-400">Published on {date}</p>
    </div>
  );
};

export default BlogCard;
