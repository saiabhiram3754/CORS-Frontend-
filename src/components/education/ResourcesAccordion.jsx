import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="diksha">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            📚 DIKSHA - National Digital Infrastructure for Teachers
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://diksha.gov.in" target="_blank" className="text-blue-600">
            diksha.gov.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="ugc">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            🎓 UGC Online Courses & Resources
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://ugcmoocs.inflibnet.ac.in" target="_blank" className="text-blue-600">
            ugcmoocs.inflibnet.ac.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="ignou">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            🏫 IGNOU Courses for Teaching Professionals
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://ignou.ac.in" target="_blank" className="text-blue-600">
            ignou.ac.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="ncte">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            📝 NCTE - National Council for Teacher Education
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          <a href="https://ncte.gov.in" target="_blank" className="text-blue-600">
            ncte.gov.in
          </a>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="anganwadi">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded">
            🧒 Local Anganwadi Teacher Training Resources
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2">
          Check your respective state government portal for Anganwadi recruitment and training materials.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
