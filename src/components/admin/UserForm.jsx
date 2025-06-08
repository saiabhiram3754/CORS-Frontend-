import React, { useEffect, useState } from "react";
import axios from "axios";

const UserForm = ({ onSubmit, initialData, onCancel }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  useEffect(() => {
    if (initialData) {
      setFullName(initialData.fullName);
      setEmail(initialData.email);
      // passwords are never pre-filled for security reasons
      setPassword("");
      setRePassword("");
    } else {
      setFullName("");
      setEmail("");
      setPassword("");
      setRePassword("");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      fullName,
      email,
      password,
      rePassword,
    };

    try {
      let response;

      if (initialData) {
        // You might want to skip password fields when updating — if so, adjust backend accordingly
        response = await axios.put(
          `http://localhost:8080/api/admin/users/${initialData.id}`,
          user,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } else {
        response = await axios.post("http://localhost:8080/api/auth/register", user);
      }

      onSubmit(response.data);
      setFullName("");
      setEmail("");
      setPassword("");
      setRePassword("");
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to save user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Edit User" : "Add New User"}
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      {/* Only show password fields when adding a user */}
      {!initialData && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
            <input
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </>
      )}

      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {initialData ? "Update" : "Add"}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
