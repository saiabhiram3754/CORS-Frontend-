import React from "react";
import { Button } from "../components/ui/button";
import RoadmapStepCard from "../components/education/RoadmapStepCard";
import RoleCard from "../components/education/RoleCard";
import ResourcesAccordion from "../components/education/ResourcesAccordion";

const steps = [
  { title: "After 10th Grade", description: "Choose Arts or Science with a focus on education-related electives if available." },
  { title: "After 12th Grade", description: "Pursue D.El.Ed, B.El.Ed or relevant teaching diplomas for early education roles." },
  { title: "During Graduation", description: "Enroll in B.Ed, B.A./B.Sc. + B.Ed integrated courses or pursue subject-specialized degrees." },
  { title: "After Graduation", description: "Take teacher eligibility tests like CTET, TET, and consider M.Ed or UGC NET for higher education roles." }
];

const roles = [
  { name: "Anganwadi Teacher", icon: "👶", description: "Early childhood education in government-supported centers." },
  { name: "Primary School Teacher", icon: "📚", description: "Teach foundational subjects in government/private schools." },
  { name: "Secondary School Teacher", icon: "🏫", description: "Subject-focused teaching in middle and high schools." },
  { name: "College Lecturer/Professor", icon: "🎓", description: "Teach at UG/PG level after clearing UGC NET/PhD." },
  { name: "Education Counselor", icon: "🧠", description: "Guide students through academic and career decisions." }
];

export default function EducationAndTeachingRoadmap() {
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-center text-purple-600">Education & Teaching Career Roadmap</h1>
      <p className="text-center text-gray-600">Discover the path to becoming a teacher, professor, or educational advisor.</p>

      <section>
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, idx) => <RoadmapStepCard key={idx} step={step} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Career Roles</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {roles.map((role, idx) => <RoleCard key={idx} role={role} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>

      <div className="text-center space-x-4">
        <Button asChild>
          <a href="/education-roadmap.pdf" download>Download PDF</a>
        </Button>
      </div>
    </div>
  );
}
