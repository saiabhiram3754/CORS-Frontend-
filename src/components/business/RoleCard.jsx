import React from "react";

export default function RoleCard({ role }) {
  return (
    <div className="border rounded-lg p-4 flex items-start space-x-4 shadow-sm">
      <div className="text-3xl">{role.icon}</div>
      <div>
        <h3 className="font-semibold text-orange-700">{role.name}</h3>
        <p className="text-sm text-gray-600">{role.description}</p>
      </div>
    </div>
  );
}
