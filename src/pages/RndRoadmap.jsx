import React from "react";
import RoadmapStepCard from "../components/rnd/RoadmapStepCard";
import RoleCard from "../components/rnd/RoleCard";
import ResourcesAccordion from "../components/rnd/ResourcesAccordion";

const roadmapSteps = [
  { title: "After 10th", description: "Choose science stream with focus on Math or Biology." },
  { title: "After 12th", description: "Pursue B.Sc., B.Tech, or integrated research programs." },
  { title: "During UG", description: "Engage in research internships, join innovation cells." },
  { title: "Postgrad & PhD", description: "Choose specialization, publish papers, apply for grants." },
  { title: "Career", description: "Join CSIR labs, work in R&D departments, or enter academia." },
];

const roles = [
  { icon: "🔬", name: "Research Scientist", description: "Design and conduct experiments in labs." },
  { icon: "🧫", name: "Biotech Researcher", description: "Explore biological innovations." },
  { icon: "🖥️", name: "AI & ML Researcher", description: "Work in data science and intelligent systems." },
  { icon: "📚", name: "Academic Scholar", description: "Teach and research in universities." },
];

export default function RndRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700">Research & Development Career Roadmap</h1>
      <p className="text-center text-gray-600">Explore paths to become a researcher or academic professional.</p>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapSteps.map((step, i) => (
            <RoadmapStepCard key={i} step={step} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Roles in R&D</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <RoleCard key={i} role={role} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Useful Resources</h2>
        <ResourcesAccordion />
      </section>
    </div>
  );
}
