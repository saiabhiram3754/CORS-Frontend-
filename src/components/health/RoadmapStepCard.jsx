import React from 'react';

const RoadmapStepCard = ({ step }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-green-600 mb-2">{step.title}</h3>
      <p className="text-gray-700">{step.description}</p>
    </div>
  );
};

export default RoadmapStepCard;
