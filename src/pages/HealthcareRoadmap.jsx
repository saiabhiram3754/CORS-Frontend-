import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import RoadmapStepCard from "../components/health/RoadmapStepCard";
import BranchCard from "../components/health/BranchCard";
import ResourcesAccordion from "../components/health/ResourcesAccordion";

const roadmapSteps = [
  {
    title: "After 10th Grade",
    description: "Choose Science stream with Biology (PCB)."
  },
  {
    title: "After 12th Grade",
    description: "Prepare for NEET, AIIMS, or other relevant exams to enter medical colleges."
  },
  {
    title: "During College",
    description: "Focus on core medical subjects, clinical rotations, and internships."
  },
  {
    title: "After Graduation",
    description: "Pursue post-graduation, appear for licensing exams, or start practicing."
  }
];

const branches = [
  {
    name: "MBBS",
    description: "General Medicine & Surgery",
    icon: "🩺"
  },
  {
    name: "BDS",
    description: "Dental Surgery",
    icon: "🦷"
  },
  {
    name: "BAMS",
    description: "Ayurvedic Medicine",
    icon: "🌿"
  },
  {
    name: "BHMS",
    description: "Homeopathic Medicine",
    icon: "💊"
  },
  {
    name: "BPT",
    description: "Physiotherapy",
    icon: "🧘"
  },
  {
    name: "Pharmacy",
    description: "Pharmaceutical Sciences",
    icon: "💉"
  }
];

export default function HealthcareRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-center text-green-600">
        Healthcare & Medicine Career Roadmap
      </motion.h1>

      <section className="text-lg text-gray-700 text-center">
        Explore your journey from school to a career in healthcare and medicine. This roadmap includes educational steps, fields, and resources.
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapSteps.map((step, index) => (
            <RoadmapStepCard key={index} step={step} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Medical Fields</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>

      <section className="text-center space-x-4">
        <Button asChild>
          <a href="/healthcare-branches">Explore All Medical Fields</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/healthcare-roadmap.pdf" download>Download Roadmap PDF</a>
        </Button>
      </section>
    </div>
  );
}
