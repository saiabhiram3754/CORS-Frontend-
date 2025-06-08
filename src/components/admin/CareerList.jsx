import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CareerList = ({ onEdit, onAdd }) => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/careers'); 
      setCareers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching careers:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    const confirm = window.confirm(`Are you sure you want to delete career "${title}"?`);
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/api/careers/${id}`); // This still works for now since no auth
      setCareers(careers.filter((career) => career.id !== id));
    } catch (error) {
      console.error('Error deleting career:', error);
    }
  };

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

      {/* Loading or Empty State */}
      {loading ? (
        <div className="text-center text-gray-500 mt-10 text-lg">Loading...</div>
      ) : careers.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Careers will be added as soon as possible. Please check back later.
        </div>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Stream</th>
                <th className="border px-4 py-2">Required Subjects</th>
                <th className="border px-4 py-2">Key Skills</th>
                <th className="border px-4 py-2">Interests</th>
                <th className="border px-4 py-2">Personality Types</th>
                <th className="border px-4 py-2">Financial Levels</th>
                <th className="border px-4 py-2 flex text-center ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((career) => (
                <tr key={career.id} className="hover:bg-gray-50 align-top">
                  <td className="border px-4 py-2 font-medium">{career.title}</td>
                  <td className="border px-4 py-2">{career.stream}</td>
                  <td className="border px-4 py-2">
                    {career.requiredSubjects?.join(', ')}
                  </td>
                  <td className="border px-4 py-2">
                    {career.keySkills?.join(', ')}
                  </td>
                  <td className="border px-4 py-2">
                    {career.interests?.join(', ')}
                  </td>
                  <td className="border px-4 py-2">
                    {career.personalityTypes?.join(', ')}
                  </td>
                  <td className="border px-4 py-2">
                    {career.financialLevels?.join(', ')}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => onEdit(career)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(career.id, career.title)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
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
