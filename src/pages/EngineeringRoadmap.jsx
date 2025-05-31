import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import RoadmapStepCard from "../components/engg/RoadmapStepCard";
import BranchCard from "../components/engg/BranchCard";
import ResourcesAccordion from "../components/engg/ResourcesAccordion";

const roadmapSteps = [
  {
    title: "After 10th Grade",
    description: "Choose Science stream (PCM/PCMB) or Polytechnic Diploma based on interest."
  },
  {
    title: "After 12th Grade",
    description: "Prepare for JEE, CET, or other exams. Enroll in B.Tech/B.E."
  },
  {
    title: "During College",
    description: "Focus on core subjects, internships, and certifications."
  },
  {
    title: "After Graduation",
    description: "Get a job, appear for GATE, GRE, or pursue higher education."
  }
];

const branches = [
  {
    name: "Computer Science",
    description: "Programming, AI, Data Structures",
    image: "/images/computer-science.png"
  },
  {
    name: "Mechanical",
    description: "Thermodynamics, CAD, Manufacturing",
    image: "/images/mechanical.png"
  },
  {
    name: "Civil",
    description: "Site Planning, Structural Design",
    image: "/images/electrical.png"
  },
  {
    name: "Electrical",
    description: "Circuits, Power Systems",
    image: "/images/civil.png"
  },
  {
    name: "Electronics",
    description: "IoT, Embedded Systems",
    image: "/images/electronics.png"
  }
];

export default function EngineeringRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-center text-blue-600">
        Engineering Career Roadmap
      </motion.h1>

      <section className="text-lg text-gray-700 text-center">
        Explore your journey from high school to a successful engineering career. This guide includes branches, courses, and job roles.
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapSteps.map((step, index) => (
            <RoadmapStepCard key={index} step={step} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Engineering Branches</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>

      <section className="text-center space-x-4">
        <Button asChild>
          <a href="/branches">Explore Branches in Detail</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/roadmap.pdf" download>Download Roadmap PDF</a>
        </Button>
      </section>
    </div>
  );
}
