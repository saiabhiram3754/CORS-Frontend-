
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { BookOpen, Globe, GraduationCap } from "lucide-react";

const ResourceItem = ({ icon: Icon, title, link }) => (
  <Accordion.Item value={title}>
    <Accordion.Header>
      <Accordion.Trigger className="px-4 py-2 bg-gray-100 w-full text-left flex items-center space-x-2">
        <Icon className="w-5 h-5 text-green-600" />
        <span>{title}</span>
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="px-4 py-2">
      Visit: <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{link}</a>
    </Accordion.Content>
  </Accordion.Item>
);

export default function ResourcesAccordion() {
  const resources = [
    {
      title: "NPTEL - Free Courses from IITs",
      link: "https://nptel.ac.in",
      icon: BookOpen
    },
    {
      title: "AICTE Free Courses",
      link: "https://www.aicte-india.org/initiative/education/free-courses",
      icon: GraduationCap
    },
    {
      title: "LinkedIn Learning - Healthcare",
      link: "https://www.linkedin.com/learning/topics/healthcare",
      icon: Globe
    }
  ];

  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-2">
      {resources.map((res, i) => (
        <ResourceItem key={i} {...res} />
      ))}
    </Accordion.Root>
  );
}
