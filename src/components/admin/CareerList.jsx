import React from 'react';

const CareerList = ({ careers, onEdit, onDelete, onAdd }) => {
  const hasCareers = careers && careers.length > 0;

  return (
    <div className="w-full">
      {/* Header with Add Career Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Careers</h2>
        <button
          onClick={onAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Career
        </button>
      </div>

      {/* Conditional Rendering for Empty List */}
      {!hasCareers ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Careers will be added as soon as possible. Please check back later.
        </div>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((career) => (
                <tr key={career.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{career.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{career.description}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => onEdit(career)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(`Are you sure to delete career "${career.name}"?`)
                        ) {
                          onDelete(career.id);
                        }
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CareerList;
