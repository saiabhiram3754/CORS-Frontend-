import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="nism">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            📘 NISM Certifications
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://www.nism.ac.in" target="_blank" className="text-blue-600">
            www.nism.ac.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="rbi">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            🏦 RBI Resources
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://www.rbi.org.in" target="_blank" className="text-blue-600">
            www.rbi.org.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="mba">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            🎓 MBA Finance Preparation
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://www.coursera.org" target="_blank" className="text-blue-600">
            Coursera.org
          </a> | <a href="https://www.edx.org" target="_blank" className="text-blue-600">edX.org</a>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
