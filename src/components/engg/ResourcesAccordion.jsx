import * as Accordion from '@radix-ui/react-accordion';
import {
  FaUniversity,
  FaGlobe,
  FaLaptopCode,
  FaGraduationCap,
  FaBookOpen,
  FaCodeBranch,
  FaLightbulb,
  FaRocket,
  FaLinkedin
} from 'react-icons/fa';

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="w-full">

      {/* Resource Item Template */}
      {[
        {
          value: "nptel",
          icon: <FaUniversity className="text-indigo-600 text-xl" />,
          label: "NPTEL – Free Courses from IITs",
          link: "https://nptel.ac.in",
        },
        {
          value: "aicte",
          icon: <FaGraduationCap className="text-indigo-600 text-xl" />,
          label: "AICTE – Free Courses & Internships",
          links: [
            { name: "Internship Portal", url: "https://internship.aicte-india.org" },
            { name: "ELMS", url: "https://elms.aicte-india.org" },
            { name: "MOOCs via SWAYAM", url: "https://www.aicte-india.org/education/moocs" },
          ],
        },
        {
          value: "mit",
          icon: <FaUniversity className="text-indigo-600 text-xl" />,
          label: "MIT OpenCourseWare",
          link: "https://ocw.mit.edu",
        },
        {
          value: "coursera",
          icon: <FaGlobe className="text-indigo-600 text-xl" />,
          label: "Coursera – University Courses",
          link: "https://coursera.org",
        },
        {
          value: "edx",
          icon: <FaGlobe className="text-indigo-600 text-xl" />,
          label: "edX – Global University Courses",
          link: "https://edx.org",
        },
        {
          value: "arxiv",
          icon: <FaBookOpen className="text-indigo-600 text-xl" />,
          label: "arXiv – Research Papers",
          link: "https://arxiv.org",
        },
        {
          value: "github",
          icon: <FaCodeBranch className="text-indigo-600 text-xl" />,
          label: "GitHub – Open Source Projects",
          link: "https://github.com",
        },
        {
          value: "ieee",
          icon: <FaLightbulb className="text-indigo-600 text-xl" />,
          label: "IEEE Xplore – Technical Papers",
          link: "https://ieeexplore.ieee.org",
        },
        {
          value: "isro",
          icon: <FaRocket className="text-indigo-600 text-xl" />,
          label: "ISRO (IIRS) – Remote Sensing Courses",
          link: "https://elearning.iirs.gov.in",
        },
        {
          value: "linkedin",
          icon: <FaLinkedin className="text-blue-600 text-xl" />,
          label: "LinkedIn Learning – Career-Focused Courses",
          link: "https://www.linkedin.com/learning",
        },
      ].map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Header>
            <Accordion.Trigger className="px-4 py-2 w-full text-left font-medium bg-gray-100 hover:bg-gray-200 transition flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 py-2">
            {item.links ? (
              <ul className="list-disc pl-5 space-y-1">
                {item.links.map((l, idx) => (
                  <li key={idx}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{l.name}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {item.link}
              </a>
            )}
          </Accordion.Content>
        </Accordion.Item>
      ))}

    </Accordion.Root>
  );
}
