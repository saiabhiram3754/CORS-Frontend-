import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (clear auth, tokens, etc)
    // For demo, just redirect to login page
    navigate("/homepage")
  };

  return (
    <header className="bg-blue-600 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-xl font-bold">Admin Dashboard</div>
      <nav className="space-x-6">
        <Link
          to="/admin/careers"
          className="hover:underline hover:text-gray-200"
        >
          Careers
        </Link>
        <Link
          to="/admin/courses"
          className="hover:underline hover:text-gray-200"
        >
          Courses
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
