import React from "react";
import { Button } from "../components/ui/button";
import RoadmapStepCard from "../components/business/RoadmapStepCard";
import RoleCard from "../components/business/RoleCard";
import ResourcesAccordion from "../components/business/ResourcesAccordion";

const steps = [
  { title: "After 10th Grade", description: "Choose Commerce stream or equivalent vocational courses." },
  { title: "After 12th Grade", description: "Prepare for entrance exams like IPMAT, or opt for BBA, B.Com, or related UG programs." },
  { title: "During College", description: "Gain experience via internships, projects, certifications in finance, marketing, or HR." },
  { title: "After Graduation", description: "Pursue MBA, M.Com, or enter corporate jobs, entrepreneurship, or civil services." }
];

const roles = [
  { name: "Business Analyst", icon: "📊", description: "Data-driven decision making and strategy." },
  { name: "Marketing Manager", icon: "📈", description: "Brand strategy, market research, and customer engagement." },
  { name: "Finance Manager", icon: "💰", description: "Budgeting, accounting, and financial planning." },
  { name: "Human Resource Manager", icon: "🧑‍💼", description: "Hiring, employee relations, and training." },
  { name: "Entrepreneur", icon: "🚀", description: "Start and run your own business venture." }
];

export default function BusinessAndManagementRoadmap() {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-center text-orange-600">Business & Management Career Roadmap</h1>
      <p className="text-center text-gray-600">Explore paths in business, management, entrepreneurship, and leadership.</p>

      <section>
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, idx) => <RoadmapStepCard key={idx} step={step} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Top Roles</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {roles.map((role, idx) => <RoleCard key={idx} role={role} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>

      <div className="text-center space-x-4">
        <Button asChild>
          <a href="/business-roadmap.pdf" download>Download PDF</a>
        </Button>
      </div>
    </div>
  );
}

