// src/components/govt/RoadmapStepCard.jsx
import React from "react";

export default function RoadmapStepCard({ step }) {
  return (
    <div className="border p-4 rounded-xl shadow-sm bg-gray-50">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">{step.title}</h3>
      <p className="text-gray-700 text-sm">{step.description}</p>
    </div>
  );
}