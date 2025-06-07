import React, { useState } from 'react';
import CourseForm from '../components/admin/CourseForm';
import CourseList from '../components/admin/CourseList';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };

  const updateCourse = (updatedCourse) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c))
    );
    setEditingCourse(null);
  };

  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSubmit = (course) => {
    if (editingCourse) {
      updateCourse(course);
    } else {
      addCourse(course);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <CourseForm
        onSubmit={handleSubmit}
        initialData={editingCourse}
        onCancel={() => setEditingCourse(null)}
      />
      <CourseList courses={courses} onEdit={setEditingCourse} onDelete={deleteCourse} />
    </div>
  );
};

export default CoursesPage;
