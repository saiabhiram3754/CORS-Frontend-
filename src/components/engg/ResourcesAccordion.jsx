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
  FaLinkedin,
  FaTools,
  FaPenNib,
  FaMicroscope,
  FaBookReader,
} from 'react-icons/fa';

export default function ResourcesAccordion() {
  const resources = [
    {
      value: "nptel",
      icon: <FaUniversity className="text-indigo-600 text-xl" />,
      label: "NPTEL – Free IIT Courses",
      link: "https://nptel.ac.in",
    },
    {
      value: "aicte",
      icon: <FaGraduationCap className="text-indigo-600 text-xl" />,
      label: "AICTE – Free Courses & Internships",
      links: [
        { name: "Internship Portal", url: "https://internship.aicte-india.org" },
        { name: "ELMS", url: "https://elms.aicte-india.org" },
        { name: "SWAYAM MOOCs", url: "https://www.aicte-india.org/education/moocs" },
      ],
    },
    {
      value: "mitocw",
      icon: <FaUniversity className="text-indigo-600 text-xl" />,
      label: "MIT OpenCourseWare",
      link: "https://ocw.mit.edu",
    },
    {
      value: "cs50",
      icon: <FaLaptopCode className="text-indigo-600 text-xl" />,
      label: "Harvard CS50 – Introduction to Computer Science",
      link: "https://cs50.harvard.edu/x",
    },
    {
      value: "stanfordai",
      icon: <FaLightbulb className="text-indigo-600 text-xl" />,
      label: "Stanford AI Courses – Machine Learning, NLP, Vision",
      link: "https://online.stanford.edu/courses",
    },
    {
      value: "coursera",
      icon: <FaGlobe className="text-indigo-600 text-xl" />,
      label: "Coursera – Free Courses by Top Universities",
      link: "https://www.coursera.org",
    },
    {
      value: "edx",
      icon: <FaGlobe className="text-indigo-600 text-xl" />,
      label: "edX – Global University Learning",
      link: "https://www.edx.org",
    },
    {
      value: "github-learning",
      icon: <FaCodeBranch className="text-indigo-600 text-xl" />,
      label: "GitHub Learning Pathways",
      link: "https://skills.github.com",
    },
    {
      value: "arxiv",
      icon: <FaBookOpen className="text-indigo-600 text-xl" />,
      label: "arXiv – Open Access Research Papers",
      link: "https://arxiv.org",
    },
    {
      value: "springeropen",
      icon: <FaMicroscope className="text-indigo-600 text-xl" />,
      label: "SpringerOpen – Peer-reviewed Journals",
      link: "https://www.springeropen.com",
    },
    {
      value: "nature-open",
      icon: <FaMicroscope className="text-indigo-600 text-xl" />,
      label: "Nature – Open Access Articles",
      link: "https://www.nature.com/openresearch",
    },
    {
      value: "ieee",
      icon: <FaLightbulb className="text-indigo-600 text-xl" />,
      label: "IEEE Xplore – Free Technical Papers (limited)",
      link: "https://ieeexplore.ieee.org/Xplore/home.jsp",
    },
    {
      value: "isro",
      icon: <FaRocket className="text-indigo-600 text-xl" />,
      label: "ISRO (IIRS) – Remote Sensing & GIS Training",
      link: "https://elearning.iirs.gov.in",
    },
    {
      value: "linkedin-learning",
      icon: <FaLinkedin className="text-blue-600 text-xl" />,
      label: "LinkedIn Learning – Professional Courses",
      link: "https://www.linkedin.com/learning",
    },
    {
      value: "freecodecamp",
      icon: <FaLaptopCode className="text-green-600 text-xl" />,
      label: "FreeCodeCamp – Web Development, Python, ML",
      link: "https://www.freecodecamp.org",
    },
    {
      value: "khanacademy",
      icon: <FaBookReader className="text-purple-600 text-xl" />,
      label: "Khan Academy – Engineering, Math & Science",
      link: "https://www.khanacademy.org",
    },
    {
      value: "towardsdatascience",
      icon: <FaPenNib className="text-gray-700 text-xl" />,
      label: "Towards Data Science – ML/AI Articles",
      link: "https://towardsdatascience.com",
    },
    {
      value: "hackerrank-cert",
      icon: <FaTools className="text-teal-600 text-xl" />,
      label: "HackerRank Skill Certifications",
      link: "https://www.hackerrank.com/skills-directory",
    },
  ];

  return (
    <Accordion.Root type="single" collapsible className="w-full space-y-2">
      {resources.map((item) => (
        <Accordion.Item key={item.value} value={item.value} className="border rounded-lg overflow-hidden">
          <Accordion.Header>
            <Accordion.Trigger className="px-4 py-2 w-full text-left font-medium bg-gray-100 hover:bg-gray-200 transition flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 py-2 bg-white">
            {item.links ? (
              <ul className="list-disc pl-5 space-y-1">
                {item.links.map((l, idx) => (
                  <li key={idx}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {l.name}
                    </a>
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
