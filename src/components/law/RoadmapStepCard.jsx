import React from "react";

export default function RoadmapStepCard({ step }) {
  return (
    <div className="bg-indigo-50 p-4 rounded-xl border shadow-sm">
      <h3 className="text-lg font-semibold text-indigo-800">{step.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{step.description}</p>
    </div>
  );
}