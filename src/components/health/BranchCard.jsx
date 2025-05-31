import React from 'react';

const BranchCard = ({ branch }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex items-center space-x-4">
      <div className="text-3xl">{branch.icon}</div>
      <div>
        <h3 className="text-lg font-bold text-green-600">{branch.name}</h3>
        <p className="text-gray-700">{branch.description}</p>
      </div>
    </div>
  );
};

export default BranchCard;
