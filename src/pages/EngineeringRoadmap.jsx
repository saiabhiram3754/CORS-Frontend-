import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import RoadmapStepCard from "../components/engg/RoadmapStepCard";
import BranchCard from "../components/engg/BranchCard";
import ResourcesAccordion from "../components/engg/ResourcesAccordion";

const roadmapSteps = [
  {
    title: "Path 1: After 10th Grade (Intermediate)",
    description:
      "Choose the Science stream (PCM/PCMB). Prepare for entrance exams like JEE Main, JEE Advanced, or state CET. Apply for B.Tech/B.E programs based on your score."
  },
  {
    title: "Path 2: After 10th Grade (Diploma Route)",
    description:
      "Enroll in a 3-year Polytechnic Diploma in your chosen engineering field. After completion, appear for lateral entry exams to join 2nd year of B.Tech/B.E."
  },
  {
    title: "During Engineering (B.Tech/B.E)",
    description:
      "Focus on your major subjects, complete internships, work on academic and personal projects, and pursue certifications in relevant areas (NPTEL, Coursera, etc.)."
  },
  {
    title: "After Graduation",
    description:
      "Choose between job placement, GATE for M.Tech/PSUs, GRE for MS abroad, or CAT for MBA. Public sector exams like ISRO, DRDO, or state engineering services are also good options."
  },
  {
    title: "Higher Education or Employment",
    description:
      "Pursue advanced degrees, specialize in emerging tech, join startups or MNCs, or contribute to R&D. Networking and continuous learning are key to long-term success."
  }
];

const branches = [
  { name: "Computer Science", description: "Programming, AI, Data Structures", image: "/images/computer-science.png" },
  { name: "Mechanical Engineering", description: "Thermodynamics, CAD, Manufacturing", image: "/images/mechanical.png" },
  { name: "Civil Engineering", description: "Construction, Structural Design", image: "/images/electrical.png" },
  { name: "Electrical Engineering", description: "Circuits, Power Systems, Machines", image: "/images/civil.png" },
  { name: "Electronics & Communication", description: "IoT, Embedded Systems, VLSI", image: "/images/electronics.png" },
  { name: "Chemical Engineering", description: "Process Engineering, Petrochemicals", image: "/images/chemical.png" },
  { name: "Biotechnology", description: "Bioengineering, Genetic Research", image: "/images/biotechnology.png" },
  { name: "Aerospace Engineering", description: "Aircraft Design, Aerodynamics", image: "/images/aerospace.png" },
  { name: "Environmental Engineering", description: "Sustainability, Water Resources", image: "/images/environment.png" }
];

export default function EngineeringRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center text-blue-600"
      >
        Engineering Career Roadmap
      </motion.h1>

      <section className="text-lg text-gray-700 text-center">
        Explore your journey from 10th grade to a successful career in engineering. This roadmap includes separate paths for Intermediate and Diploma students, branches, resources, and job guidance.
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
          <a href="/engineering-roadmap.pdf" download>Download Roadmap PDF</a>
        </Button>
      </section>
    </div>
  );
}