import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="nptel">
        <Accordion.Header>
          <Accordion.Trigger className="w-full px-4 py-2 bg-orange-100 rounded text-left">📚 NPTEL & SWAYAM Business Courses</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://swayam.gov.in" className="text-blue-600" target="_blank">swayam.gov.in</a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="linkedin">
        <Accordion.Header>
          <Accordion.Trigger className="w-full px-4 py-2 bg-orange-100 rounded text-left">🔗 LinkedIn Learning</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://www.linkedin.com/learning" className="text-blue-600" target="_blank">linkedin.com/learning</a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="mba">
        <Accordion.Header>
          <Accordion.Trigger className="w-full px-4 py-2 bg-orange-100 rounded text-left">🎓 MBA Entrance Preparation (CAT, XAT, GMAT)</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://imsindia.com" className="text-blue-600" target="_blank">imsindia.com</a>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
