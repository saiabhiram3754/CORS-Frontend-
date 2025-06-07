import React, { useState } from 'react';
import CareerForm from '../components/admin/CareerForm';
import CareerList from '../components/admin/CareerList';

const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [editingCareer, setEditingCareer] = useState(null);

  const addCareer = (career) => {
    setCareers((prev) => [...prev, career]);
  };

  const updateCareer = (updatedCareer) => {
    setCareers((prev) =>
      prev.map((c) => (c.id === updatedCareer.id ? updatedCareer : c))
    );
    setEditingCareer(null);
  };

  const deleteCareer = (id) => {
    setCareers((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSubmit = (career) => {
    if (editingCareer) {
      updateCareer(career);
    } else {
      addCareer(career);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <CareerForm
        onSubmit={handleSubmit}
        initialData={editingCareer}
        onCancel={() => setEditingCareer(null)}
      />
      <CareerList careers={careers} onEdit={setEditingCareer} onDelete={deleteCareer} />
    </div>
  );
};

export default CareersPage;
