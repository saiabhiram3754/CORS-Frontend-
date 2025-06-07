import React, { useState } from "react";
import { GraduationCap, User } from "lucide-react";
import CareerForm from "../components/admin/CareerForm";
import CourseForm from "../components/admin/CourseForm";
import CareerList from "../components/admin/CareerList";
import UserForm from "../components/admin/UserForm";


const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showCareerForm, setShowCareerForm] = useState(false);
  const [careers, setCareers] = useState([]);
  const [editCareer, setEditCareer] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [users, setUsers] = useState([]);
 // Optional: for editing

  // Handlers
  const handleCareerSubmit = (data) => {
    if (editCareer) {
      setCareers((prev) =>
        prev.map((c) => (c.id === editCareer.id ? { ...c, ...data } : c))
      );
    } else {
      setCareers((prev) => [...prev, { ...data, id: Date.now() }]);
    }
    setShowCareerForm(false);
    setEditCareer(null);
  };

  const handleCourseSubmit = (data) => {
    console.log("Course submitted:", data);
    setActiveSection(null);
  };

  const handleAddCareer = () => {
    setEditCareer(null);
    setShowCareerForm(true);
  };

  const handleEditCareer = (career) => {
    setEditCareer(career);
    setShowCareerForm(true);
  };

  const handleDeleteCareer = (id) => {
    setCareers((prev) => prev.filter((career) => career.id !== id));
  };

  const handleUserSubmit = (data) => {
  setUsers((prev) => [...prev, { ...data, id: Date.now() }]);
  setShowUserForm(false);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CORS Admin
                </h1>
                <p className="text-sm text-gray-600">Admin Dashboard</p>
              </div>
            </div>

            <div className="space-x-6 hidden md:flex items-center">
              <button
                onClick={() => {
                  setActiveSection(null);
                  setShowCareerForm(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveSection("careers");
                  setShowCareerForm(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Careers
              </button>
              <button
                onClick={() => {
                  setActiveSection("courses");
                  setShowCareerForm(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Courses
              </button>
              <button
                onClick={() => {
                  setActiveSection("user");
                  setShowCareerForm(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1"
              >
                <User className="h-5 w-5" />
                User
              </button>
              <a
                href="/logout"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-lg"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="p-4 lg:p-8 max-w-6xl mx-auto space-y-6">
        {!activeSection && (
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-16 border border-white/20 max-w-full text-center min-h-[60vh] flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to the Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-4 text-xl max-w-xl">
              Use the navigation buttons above to manage careers, courses, and users.
            </p>
          </div>
        )}

        {/* Careers Section */}
        {activeSection === "careers" && (
          showCareerForm ? (
            <CareerForm
              onSubmit={handleCareerSubmit}
              onCancel={() => {
                setShowCareerForm(false);
                setEditCareer(null);
              }}
              initialData={editCareer}
            />
          ) : (
            <CareerList
              careers={careers}
              onAdd={handleAddCareer}
              onEdit={handleEditCareer}
              onDelete={handleDeleteCareer}
            />
          )
        )}

        {/* Courses Section */}
        {activeSection === "courses" && (
          <CourseForm
            onSubmit={handleCourseSubmit}
            onCancel={() => setActiveSection(null)}
          />
        )}

        {/* User Section */}
        {activeSection === "user" && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          {!showUserForm ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-blue-600">User Management</h2>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded hover:opacity-90"
                  onClick={() => setShowUserForm(true)}
                >
                  + Add User
                </button>
              </div>

              <p className="text-gray-600 mb-4">Manage all registered users here.</p>

              {users.length === 0 ? (
                <p className="text-gray-500">No users added yet.</p>
              ) : (
                <ul className="space-y-2">
                  {users.map((user) => (
                    <li key={user.id} className="p-3 bg-gray-100 rounded">
                      <strong>{user.fullName}</strong> - {user.email}
                    </li>
                  ))}
                </ul>
              )}

              <button
                className="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => setActiveSection(null)}
              >
                Back to Dashboard
              </button>
            </>
          ) : (
            <UserForm
              onSubmit={handleUserSubmit}
              onCancel={() => setShowUserForm(false)}
            />
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default AdminDashboard;
