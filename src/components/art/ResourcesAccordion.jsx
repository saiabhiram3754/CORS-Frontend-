import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="nift">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-pink-100 w-full text-left rounded">
            🎨 NIFT & NID Courses
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://nift.ac.in" target="_blank" className="text-blue-600">
            nift.ac.in
          </a> | <a href="https://nid.edu" target="_blank" className="text-blue-600">nid.edu</a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="online">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-pink-100 w-full text-left rounded">
            🧑‍🎨 Online Art & Design Platforms
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://skillshare.com" target="_blank" className="text-blue-600">Skillshare</a> | 
          <a href="https://coursera.org" target="_blank" className="text-blue-600">Coursera</a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="community">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-pink-100 w-full text-left rounded">
            🖌️ Design Communities & Inspiration
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://behance.net" target="_blank" className="text-blue-600">Behance</a> | 
          <a href="https://dribbble.com" target="_blank" className="text-blue-600">Dribbble</a>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
