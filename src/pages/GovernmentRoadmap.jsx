import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import RoadmapStepCard from "../components/govt/RoadmapStepCard";
import RoleCard from "../components/govt/RoleCard";
import ResourcesAccordion from "../components/govt/ResourcesAccordion";

const roadmapSteps = [
  {
    title: "After 10th Grade",
    description: "Consider foundational exams like SSC (Staff Selection Commission) Multi-Tasking or Railway Group D. Start developing general knowledge and reasoning skills."
  },
  {
    title: "After 12th Grade",
    description: "Eligible for exams like SSC CHSL, NDA, or State-level clerical positions. Consider pursuing a degree in arts, commerce, or science while preparing."
  },
  {
    title: "During Graduation",
    description: "Focus on exams like UPSC Civil Services, SSC CGL, Banking (IBPS, SBI), and State PSC. Join coaching or take online test series."
  },
  {
    title: "After Graduation",
    description: "Attempt exams based on interest: IAS/IPS, Defence, Railways, Banking, Teaching (CTET, TET), or PSU jobs (via GATE, etc.)."
  }
];

const roles = [
  {
    name: "UPSC Civil Services",
    description: "Includes IAS, IPS, IFS roles. Requires a degree and passing the UPSC CSE exam.",
    icon: "🏛️"
  },
  {
    name: "SSC Exams",
    description: "Staff Selection Commission conducts exams like CGL, CHSL for various govt posts.",
    icon: "🧾"
  },
  {
    name: "Banking Exams",
    description: "IBPS, SBI, RBI exams for Clerk, PO, and other banking positions.",
    icon: "🏦"
  },
  {
    name: "Railways",
    description: "RRB exams for technical and non-technical positions in Indian Railways.",
    icon: "🚆"
  },
  {
    name: "Teaching",
    description: "CTET, TET, KVS/NVS exams for school teachers in government institutions.",
    icon: "📚"
  },
  {
    name: "Defence",
    description: "Join Army, Navy, Airforce via NDA, CDS, AFCAT exams.",
    icon: "🪖"
  }
];

export default function GovernmentRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-center text-yellow-700">
        Government Career Roadmap
      </motion.h1>

      <section className="text-lg text-gray-700 text-center">
        Discover the pathway to a government job in India. Includes role types, preparation steps, and useful resources.
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapSteps.map((step, index) => (
            <RoadmapStepCard key={index} step={step} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Popular Government Roles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <RoleCard key={index} role={role} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>

      <section className="text-center space-x-4">
        <Button asChild>
          <a href="/govt-roles">Explore All Govt Roles</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/government-roadmap.pdf" download>Download Roadmap PDF</a>
        </Button>
      </section>
    </div>
  );
}
