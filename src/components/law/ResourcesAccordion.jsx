import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="bar-council">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            ⚖️ Bar Council of India
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://www.barcouncilofindia.org" target="_blank" className="text-blue-600">
            barcouncilofindia.org
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="nlus">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            🏛️ National Law Universities (NLUs)
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://nludelhi.ac.in" target="_blank" className="text-blue-600">
            nludelhi.ac.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="moocs">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            🎓 Free Online Courses (MOOCs)
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://swayam.gov.in" target="_blank" className="text-blue-600">
            swayam.gov.in
          </a>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
