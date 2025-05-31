import React from "react";
import { motion } from "framer-motion";

export default function RoadmapStepCard({ step }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-4 border rounded-xl shadow-md bg-white">
      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
      <p className="text-gray-600 mt-2">{step.description}</p>
    </motion.div>
  );
}
