// src/pages/CareerAnalysisPage.jsx
import React from "react";

const CareerAnalysis = () => {
  const cards = [
    {
      title: "Subject Analysis",
      icon: "📖",
      description: "We analyze your academic strengths across different subjects",
    },
    {
      title: "Skills Assessment",
      icon: "🎯",
      description: "Identify your key skills and talents for career matching",
    },
    {
      title: "Personality Insights",
      icon: "🧠",
      description: "Understanding your personality type for better career fit",
    },
    {
      title: "Financial Level",
      icon: "💰",
      description: "Get career options suited to your financial affordability",
    },
  ];

  return (
    <section className="py-16 bg-[#f0f4ff] text-center px-6 ">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
        Comprehensive Career Analysis
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
        Our platform evaluates multiple aspects of your profile to ensure the most accurate career recommendations
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
              <span className="text-purple-600 text-xl">{card.icon}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-700 transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerAnalysis;
