import React from "react";
import { motion } from "framer-motion";
import RoadmapStepCard from "../components/art/RoadmapStepCard";
import RoleCard from "../components/art/RoleCard";
import ResourcesAccordion from "../components/art/ResourcesAccordion";
import { Button } from "../components/ui/button";

const roadmapSteps = [
  {
    title: "After 10th Grade",
    description: "Choose Arts or Commerce stream. Build creativity and design interest via workshops and competitions.",
  },
  {
    title: "After 12th Grade",
    description: "Pursue B.Des, BFA, BA in Design, or certifications in fashion, graphic, or interior design.",
  },
  {
    title: "During College",
    description: "Develop portfolios, attend internships, join creative communities, and build freelancing experience.",
  },
  {
    title: "After Graduation",
    description: "Start a job, freelance, or start your own design studio. Pursue higher studies or specializations.",
  },
];

const roles = [
  {
    name: "Graphic Designer",
    icon: "🎨",
    description: "Creates visual content for branding, advertising, and digital platforms using tools like Photoshop, Illustrator, etc.",
  },
  {
    name: "UI/UX Designer",
    icon: "🧑‍💻",
    description: "Designs interfaces for apps and websites focusing on user experience, wireframes, and design systems.",
  },
  {
    name: "Fashion Designer",
    icon: "👗",
    description: "Designs clothing, accessories, and trends in the fashion industry.",
  },
  {
    name: "Interior Designer",
    icon: "🏡",
    description: "Plans and decorates interior spaces in homes, offices, and commercial buildings.",
  },
  {
    name: "Animator",
    icon: "🎬",
    description: "Creates 2D/3D animations for films, games, and advertising media.",
  },
];

export default function ArtsDesignRoadmap() {
  return (
    <div className="p-4 space-y-10 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center text-pink-600"
      >
        Arts & Design Career Roadmap
      </motion.h1>

      <section className="text-lg text-gray-700 text-center">
        Discover the journey from school to a thriving career in the creative and design industry. Learn about opportunities, roles, and skills needed.
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">Roadmap Steps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roadmapSteps.map((step, index) => (
            <RoadmapStepCard key={index} step={step} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">Creative Roles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <RoleCard key={index} role={role} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">Courses & Resources</h2>
        <ResourcesAccordion />
      </section>

      <section className="text-center space-x-4">
        <Button asChild>
          <a href="/arts-careers">Explore All Art & Design Fields</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/arts-roadmap.pdf" download>
            Download Roadmap PDF
          </a>
        </Button>
      </section>
    </div>
  );
}
