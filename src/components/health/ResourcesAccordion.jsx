import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  BookOpen,
  Globe,
  GraduationCap,
  Stethoscope,
  Leaf,
  Pill,
  Syringe,
} from "lucide-react";

const ResourceItem = ({ icon: Icon, title, link }) => (
  <Accordion.Item value={title}>
    <Accordion.Header>
      <Accordion.Trigger className="px-4 py-2 bg-gray-100 w-full text-left flex items-center space-x-2">
        <Icon className="w-5 h-5 text-green-600" />
        <span>{title}</span>
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="px-4 py-2">
      Visit:{" "}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {link}
      </a>
    </Accordion.Content>
  </Accordion.Item>
);

export default function ResourcesAccordion() {
  const resources = [
    // 🎓 General Education
    {
      title: "NPTEL - Free Courses from IITs",
      link: "https://nptel.ac.in",
      icon: BookOpen,
    },
    {
      title: "AICTE Free Courses",
      link: "https://www.aicte-india.org/initiative/education/free-courses",
      icon: GraduationCap,
    },
    {
      title: "LinkedIn Learning - Healthcare",
      link: "https://www.linkedin.com/learning/topics/healthcare",
      icon: Globe,
    },

    // 🏥 Medicine
    {
      title: "WHO Health Academy",
      link: "https://academy.who.int/",
      icon: Stethoscope,
    },
    {
      title: "Harvard Online - Human Health & Disease",
      link: "https://online-learning.harvard.edu/course/human-health-and-disease",
      icon: Stethoscope,
    },
    {
      title: "PubMed Central - Medical Research Archive",
      link: "https://www.ncbi.nlm.nih.gov/pmc/",
      icon: Stethoscope,
    },

    // 🧑‍⚕️ Nursing
    {
      title: "All Nurses CE Center",
      link: "https://allnurses.com/education/",
      icon: Syringe,
    },
    {
      title: "American Nurses Association Learning Center",
      link: "https://www.nursingworld.org/continuing-education/",
      icon: Syringe,
    },
    {
      title: "Nursing Courses - Coursera",
      link: "https://www.coursera.org/browse/health/nursing",
      icon: Syringe,
    },
    {
      title: "NPTEL - Nursing Foundation",
      link: "https://onlinecourses.nptel.ac.in/noc23_ge01/preview",
      icon: Syringe,
    },

    // 💊 Pharmacy
    {
      title: "Pharmacology - Khan Academy",
      link: "https://www.khanacademy.org/science/health-and-medicine/pharmacology",
      icon: Pill,
    },
    {
      title: "FutureLearn - Pharmacy Courses",
      link: "https://www.futurelearn.com/subjects/healthcare-medicine-courses/pharmacy",
      icon: Pill,
    },
    {
      title: "FDA Drug Information for Students",
      link: "https://www.fda.gov/drugs/drug-information-consumers",
      icon: Pill,
    },
    {
      title: "Indian Pharmacopoeia Commission (IPC)",
      link: "https://ipc.gov.in/",
      icon: Pill,
    },

    // 🌍 Public Health
    {
      title: "Foundations of Public Health - Coursera",
      link: "https://www.coursera.org/learn/public-health",
      icon: Globe,
    },
    {
      title: "CDC Learning Connection – Public Health",
      link: "https://www.cdc.gov/learning/index.html",
      icon: Globe,
    },

    // 🧬 Biotechnology
    {
      title: "MIT OCW – Biology (Biotech Foundation)",
      link: "https://ocw.mit.edu/courses/biology/7-00sc-foundations-of-biology-spring-2011/",
      icon: BookOpen,
    },
    {
      title: "edX – Biotechnology Courses",
      link: "https://www.edx.org/learn/biotechnology",
      icon: BookOpen,
    },

    // 👩‍🔬 Allied Health Sciences
    {
      title: "MedlinePlus – Allied Health Careers",
      link: "https://medlineplus.gov/alliedhealthprofessions.html",
      icon: Stethoscope,
    },
    {
      title: "Coursera – Allied Health Courses",
      link: "https://www.coursera.org/browse/health/allied-health",
      icon: GraduationCap,
    },

    // 🧠 Mental Health
    {
      title: "FutureLearn – Mental Health & Wellness",
      link: "https://www.futurelearn.com/subjects/psychology-and-mental-health-courses",
      icon: Syringe,
    },
    {
      title: "Yale – Introduction to Psychology (Coursera)",
      link: "https://www.coursera.org/learn/psychology",
      icon: Syringe,
    },

    // 🔬 Clinical Research
    {
      title: "NIH – Clinical Research Training",
      link: "https://ocr.od.nih.gov/courses/PRC.html",
      icon: Pill,
    },
    {
      title: "Coursera – Clinical Data Management",
      link: "https://www.coursera.org/learn/clinical-data-management",
      icon: Pill,
    },

    // 🏥 Healthcare Management
    {
      title: "Coursera – Healthcare System Fundamentals",
      link: "https://www.coursera.org/learn/healthcare-system",
      icon: Globe,
    },
    {
      title: "Harvard Online – Improving Global Healthcare",
      link: "https://online-learning.harvard.edu/course/improving-global-health",
      icon: Globe,
    },

    // 🧪 Medical Technology
    {
      title: "Stanford – AI in Healthcare",
      link: "https://online.stanford.edu/courses/cs345-ai-healthcare",
      icon: Globe,
    },
    {
      title: "edX – Digital Health & Emerging Tech",
      link: "https://www.edx.org/learn/digital-health",
      icon: Globe,
    },

    // 🌱 Agriculture (included earlier)
    {
      title: "ICAR e-Courses (BSc Agriculture)",
      link: "https://ecourses.icar.gov.in/",
      icon: Leaf,
    },
    {
      title: "AgMOOCs (IIT-K, ICRISAT)",
      link: "https://www.agmoocs.in/",
      icon: Leaf,
    },
    {
      title: "FAO eLearning - Smart Farming",
      link: "https://elearning.fao.org/",
      icon: Leaf,
    },
  ];

  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-2">
      {resources.map((res, i) => (
        <ResourceItem key={i} {...res} />
      ))}
    </Accordion.Root>
  );
}
