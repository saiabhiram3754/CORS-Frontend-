import React from "react";
import RoadmapStepCard from "../components/law/RoadmapStepCard";
import RoleCard from "../components/law/RoleCard";
import ResourcesAccordion from "../components/law/ResourcesAccordion";

const roadmapSteps = [
  { title: "After 10th Grade", description: "Focus on subjects like Political Science and English. Develop critical thinking skills." },
  { title: "After 12th Grade", description: "Pursue 5-year integrated LLB or 3-year LLB after graduation. Appear for CLAT or similar exams." },
  { title: "During College", description: "Participate in moot courts, legal internships, and focus on core law subjects." },
  { title: "After Graduation", description: "Enroll with the Bar Council and start practicing, or prepare for judiciary or corporate law roles." }
];

const roles = [
  { name: "Litigation Lawyer", description: "Represents clients in court, prepares legal documents.", icon: "⚖️" },
  { name: "Corporate Lawyer", description: "Advises companies on legal obligations, contracts, and disputes.", icon: "🏢" },
  { name: "Judge", description: "Presides over court proceedings, interprets laws and delivers judgments.", icon: "👩‍⚖️" },
  { name: "Legal Advisor", description: "Provides expert legal advice in private or public sectors.", icon: "📘" },
  { name: "Public Prosecutor", description: "Represents the state in criminal trials.", icon: "👨‍⚖️" }
];

export default function LawRoadmap() {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-indigo-600 text-center">
        Law & Legal Services Career Roadmap
      </h1>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Career Path Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapSteps.map((step, index) => (
            <RoadmapStepCard key={index} step={step} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Career Roles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <RoleCard key={index} role={role} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>
    </div>
  );
}
