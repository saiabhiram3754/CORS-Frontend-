import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import RoadmapStepCard from "../components/health/RoadmapStepCard";
import BranchCard from "../components/health/BranchCard";
import ResourcesAccordion from "../components/health/ResourcesAccordion";

const roadmapSteps = [
  {
    title: "After 10th Grade",
    description: "Choose Science stream with Biology (PCB). Focus on developing foundational knowledge in life sciences."
  },
  {
    title: "After 12th Grade",
    description: "Appear for NEET, AIIMS, or other relevant exams. Explore paramedical and alternative pathways like BSc Nursing, BPT, or BPharm."
  },
  {
    title: "During Undergraduate",
    description: "Pursue MBBS, BDS, BSc Nursing, BAMS, BHMS, BPharm, or other allied health courses. Gain clinical exposure and internships."
  },
  {
    title: "After Graduation",
    description: "Prepare for postgraduate exams like NEET PG, USMLE, PLAB. Consider master's degrees in Public Health, Hospital Administration, or Research."
  },
  {
    title: "Specialization & Licensing",
    description: "Pursue MD/MS, MDS, MPharm, MPT, MPH, etc. Complete internships, clear licensing exams (e.g. FMGE, NCLEX) and get certified."
  },
  {
    title: "Advanced Careers & Fellowships",
    description: "Go into super-specializations, fellowships, research, healthcare entrepreneurship, or global public health programs."
  }
];

const branches = [
  { name: "MBBS", description: "General Medicine & Surgery", icon: "🩺" },
  { name: "BDS", description: "Dental Surgery", icon: "🦷" },
  { name: "BAMS", description: "Ayurvedic Medicine", icon: "🌿" },
  { name: "BHMS", description: "Homeopathic Medicine", icon: "💊" },
  { name: "BPT", description: "Physiotherapy", icon: "🧘" },
  { name: "Pharmacy", description: "Pharmaceutical Sciences", icon: "💉" },
  { name: "Nursing", description: "BSc/GNM Nursing programs", icon: "👩‍⚕️" },
  { name: "Medical Lab Tech", description: "Diagnostics and Laboratory Science", icon: "🔬" },
  { name: "Radiology", description: "Imaging & Diagnostics", icon: "🖼️" },
  { name: "Clinical Research", description: "Medical Trials & Research", icon: "📊" },
  { name: "Public Health", description: "Epidemiology & Health Policy", icon: "🌍" },
  { name: "Healthcare Management", description: "Hospital & Health Admin", icon: "🏥" },
  { name: "Occupational Therapy", description: "Rehabilitation & Therapy", icon: "🛠️" },
  { name: "Biotechnology", description: "Biomedical Innovation", icon: "🧬" },
  { name: "Healthcare IT", description: "Digital Health, EMR, AI in Medicine", icon: "💻" }
];

export default function HealthcareRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-center text-green-600">
        Healthcare & Medicine Career Roadmap
      </motion.h1>

      <section className="text-lg text-gray-700 text-center">
        Explore your journey from school to a fulfilling career in healthcare. This roadmap includes multiple education pathways, medical fields, and curated resources to help you succeed.
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
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Medical & Health Fields</h2>
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
