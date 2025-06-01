import React from "react";

export default function RoleCard({ role }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition-shadow flex space-x-4 items-start">
      <div className="text-3xl pt-1">{role.icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-700">{role.name}</h3>
        <p className="text-sm text-gray-600">{role.description}</p>
      </div>
    </div>
  );
}