import React from "react";

export default function RoadmapStepCard({ step }) {
  return (
    <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-indigo-600">{step.title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
    </div>
  );
}