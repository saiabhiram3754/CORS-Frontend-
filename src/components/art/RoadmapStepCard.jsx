import React from "react";

export default function RoadmapStepCard({ step }) {
  return (
    <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-xl font-semibold text-pink-700 mb-2">{step.title}</h3>
      <p className="text-gray-700 text-sm">{step.description}</p>
    </div>
  );
}