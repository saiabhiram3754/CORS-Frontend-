import React from "react";
import { FaLaptopCode, FaCogs, FaDraftingCompass, FaBolt, FaMicrochip, FaTools, FaFlask, FaSatelliteDish } from "react-icons/fa";

const allBranches = [
  { name: "Computer Science", icon: <FaLaptopCode />, description: "AI, ML, Software Engineering" },
  { name: "Mechanical Engineering", icon: <FaCogs />, description: "Mechanics, Design, Manufacturing" },
  { name: "Civil Engineering", icon: <FaDraftingCompass />, description: "Construction, Planning, Structural Design" },
  { name: "Electrical Engineering", icon: <FaBolt />, description: "Circuits, Power Systems" },
  { name: "Electronics & Communication", icon: <FaMicrochip />, description: "IoT, VLSI, Embedded Systems" },
  { name: "Automobile Engineering", icon: <FaTools />, description: "Vehicle Dynamics, Engines, Design" },
  { name: "Chemical Engineering", icon: <FaFlask />, description: "Process Design, Biochemical Engineering" },
  { name: "Aerospace Engineering", icon: <FaSatelliteDish />, description: "Flight Mechanics, Avionics" }
  // Add more branches as needed
];

export default function AllBranchesPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center">All Engineering Branches</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allBranches.map((branch, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border border-gray-200 hover:border-blue-400 transition">
            <div className="text-3xl text-blue-600">{branch.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{branch.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{branch.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
