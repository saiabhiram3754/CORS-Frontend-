import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">

      {/* NIFT & NID */}
      <Accordion.Item value="nift">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-pink-100 w-full text-left rounded font-medium">
            🎨 NIFT & NID – Fashion & Design Institutes
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <a href="https://nift.ac.in" target="_blank" className="text-blue-600 underline">nift.ac.in</a> |{" "}
          <a href="https://nid.edu" target="_blank" className="text-blue-600 underline">nid.edu</a>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
            <li>Textile & Fashion Design</li>
            <li>Product Design, Accessory Design</li>
            <li>Portfolio Guidance & Career Tracks</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* Online Courses */}
      <Accordion.Item value="online">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-pink-100 w-full text-left rounded font-medium">
            🧑‍🎨 Online Art & Design Platforms
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-2">
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              <a href="https://www.coursera.org/specializations/graphic-design" target="_blank" className="text-blue-600 underline">
                Graphic Design Specialization – CalArts (Coursera)
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/learn/ui-ux-design" target="_blank" className="text-blue-600 underline">
                UI/UX Design – Google (Coursera)
              </a>
            </li>
            <li>
              <a href="https://www.skillshare.com/browse/illustration" target="_blank" className="text-blue-600 underline">
                Illustration & Digital Art – Skillshare
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/adobe-photoshop-cc-masterclass" target="_blank" className="text-blue-600 underline">
                Adobe Photoshop Masterclass – Udemy
              </a>
            </li>
            <li>
              <a href="https://www.domestika.org/en/courses/popular" target="_blank" className="text-blue-600 underline">
                Creative Design Courses – Domestika
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* Design Inspiration */}
      <Accordion.Item value="community">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-pink-100 w-full text-left rounded font-medium">
            🖌️ Design Communities & Portfolios
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <a href="https://www.behance.net" target="_blank" className="text-blue-600 underline">Behance</a> |{" "}
          <a href="https://www.dribbble.com" target="_blank" className="text-blue-600 underline">Dribbble</a>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
            <li>Upload & Showcase Portfolios</li>
            <li>Find Freelance & Internship Gigs</li>
            <li>Stay Inspired by Top Creators</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* 3D & Motion Design */}
      <Accordion.Item value="animation">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-pink-100 w-full text-left rounded font-medium">
            🎥 Animation, 3D & Motion Design
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-2">
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              <a href="https://www.udemy.com/course/after-effects-motion-graphics/" target="_blank" className="text-blue-600 underline">
                Motion Graphics in After Effects – Udemy
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/learn/3d-animation" target="_blank" className="text-blue-600 underline">
                3D Animation Basics – Coursera
              </a>
            </li>
            <li>
              <a href="https://www.blender.org/support/tutorials/" target="_blank" className="text-blue-600 underline">
                Blender 3D Tutorials (Free)
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

    </Accordion.Root>
  );
}
