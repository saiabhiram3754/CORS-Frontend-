import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="ncert">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-yellow-100 w-full text-left rounded">
            📘 NCERT & General Studies Material
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://ncert.nic.in/ebooks.html" target="_blank" className="text-blue-600">
            ncert.nic.in/ebooks.html
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="upsc">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-yellow-100 w-full text-left rounded">
            🏛️ UPSC Official Resources
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://upsc.gov.in" target="_blank" className="text-blue-600">
            upsc.gov.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="ssc">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-yellow-100 w-full text-left rounded">
            🧾 SSC & Banking Resources
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://ssc.nic.in" target="_blank" className="text-blue-600">
            ssc.nic.in
          </a> | <a href="https://ibps.in" target="_blank" className="text-blue-600">ibps.in</a>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
