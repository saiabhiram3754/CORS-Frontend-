import React from "react";

export default function RoadmapStepCard({ step }) {
  return (
    <div className="bg-orange-50 p-4 rounded-lg border shadow-sm">
      <h3 className="text-lg font-bold text-orange-800">{step.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{step.description}</p>
    </div>
  );
}
