import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import RoadmapStepCard from "../components/finance/RoadmapStepCard";
import RoleCard from "../components/finance/RoleCard";
import ResourcesAccordion from "../components/finance/ResourcesAccordion";

const roadmapSteps = [
  {
    title: "After 10th Grade",
    description: "Choose Commerce stream with focus on Accounting, Economics, and Mathematics."
  },
  {
    title: "After 12th Grade",
    description: "Pursue B.Com, BBA, or CA foundation. Prepare for entrance exams if needed."
  },
  {
    title: "During College",
    description: "Specialize in Finance, Accounting, or Banking. Do internships and pursue certifications like CFA, CFP, or CA."
  },
  {
    title: "After Graduation",
    description: "Start working in financial institutions or prepare for exams like RBI Grade B, IBPS, or CAT for MBA."
  }
];

const roles = [
  {
    name: "Chartered Accountant (CA)",
    description: "Expert in taxation, audit, and financial management.",
    icon: "📊"
  },
  {
    name: "Investment Banker",
    description: "Advises on mergers, acquisitions, and investments.",
    icon: "🏦"
  },
  {
    name: "Financial Analyst",
    description: "Analyzes market trends, company performance, and helps in decision making.",
    icon: "📈"
  },
  {
    name: "Banking Officer",
    description: "Manages customer accounts, loans, and financial products.",
    icon: "💳"
  },
  {
    name: "Certified Financial Planner (CFP)",
    description: "Guides individuals on budgeting, retirement, insurance, and investments.",
    icon: "💼"
  }
];

export default function FinanceRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-center text-purple-700">
        Finance & Banking Career Roadmap
      </motion.h1>

      <section className="text-lg text-gray-700 text-center">
        Discover your path to success in the finance and banking world—from school to professional excellence.
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapSteps.map((step, index) => (
            <RoadmapStepCard key={index} step={step} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Finance & Banking Roles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <RoleCard key={index} role={role} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>

      <section className="text-center space-x-4">
        <Button asChild>
          <a href="/finance-roles">Explore All Roles</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/finance-roadmap.pdf" download>Download Roadmap PDF</a>
        </Button>
      </section>
    </div>
  );
}
