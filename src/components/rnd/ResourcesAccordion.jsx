import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="dst">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-blue-100 w-full text-left rounded">
            🧪 DST Research Fellowships
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://dst.gov.in" target="_blank" className="text-blue-600">
            dst.gov.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="csir">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-blue-100 w-full text-left rounded">
            🧬 CSIR Labs & Scholarships
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://csir.res.in" target="_blank" className="text-blue-600">
            csir.res.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="ugc">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-blue-100 w-full text-left rounded">
            🎓 UGC & Academic Research Programs
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://ugc.ac.in" target="_blank" className="text-blue-600">
            ugc.ac.in
          </a>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
