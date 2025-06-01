import * as Accordion from "@radix-ui/react-accordion";

export default function ResourcesAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">

      {/* NISM Certifications */}
      <Accordion.Item value="nism">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded font-medium">
            📘 NISM Certifications – Securities & Markets
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <a href="https://www.nism.ac.in" target="_blank" className="text-blue-600 underline">
            www.nism.ac.in
          </a>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Securities Market Foundation (NISM Series-VIII)</li>
            <li>Mutual Fund Distributors (Series-V-A)</li>
            <li>Equity Derivatives (Series-VI)</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* NSE Academy */}
      <Accordion.Item value="nse">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded font-medium">
            📊 NSE Academy – Stock Market Education
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <a href="https://www.nseindia.com/learn/nse-academy" target="_blank" className="text-blue-600 underline">
            NSE Academy Courses
          </a>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Beginners Guide to Stock Market</li>
            <li>Technical & Fundamental Analysis</li>
            <li>Certified Equity Market Analyst (CEMA)</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* Zerodha Varsity */}
      <Accordion.Item value="zerodha">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded font-medium">
            📚 Zerodha Varsity – Free Trading Modules
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <a href="https://zerodha.com/varsity/" target="_blank" className="text-blue-600 underline">
            varsity.zerodha.com
          </a>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Technical Analysis</li>
            <li>Fundamental Analysis</li>
            <li>Options Theory & Strategies</li>
            <li>Risk Management</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* Elearnmarkets */}
      <Accordion.Item value="elearnmarkets">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded font-medium">
            📈 Elearnmarkets – Live Market Courses
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <a href="https://www.elearnmarkets.com/" target="_blank" className="text-blue-600 underline">
            elearnmarkets.com
          </a>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Basics of Stock Market</li>
            <li>Intraday & Swing Trading</li>
            <li>Price Action & Candlestick Patterns</li>
            <li>Certified Market Professional (NCMP)</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* Trading & Investment Courses */}
      <Accordion.Item value="trading-courses">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded font-medium">
            📊 Trading & Investing Courses – Coursera/edX
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              <a href="https://www.coursera.org/learn/investing-in-stock-market" target="_blank" className="text-blue-600 underline">
                Investment Strategies – University of Illinois (Coursera)
              </a>
            </li>
            <li>
              <a href="https://www.edx.org/course/introduction-to-investments" target="_blank" className="text-blue-600 underline">
                Introduction to Investments – IIMB (edX)
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/learn/technical-analysis" target="_blank" className="text-blue-600 underline">
                Technical Analysis – NYIF (Coursera)
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      {/* Personal Finance & FinTech */}
      <Accordion.Item value="fintech">
        <Accordion.Header>
          <Accordion.Trigger className="px-4 py-2 bg-indigo-100 w-full text-left rounded font-medium">
            💼 Personal Finance & FinTech
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-2 space-y-1">
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              <a href="https://www.khanacademy.org/economics-finance-domain/core-finance" target="_blank" className="text-blue-600 underline">
                Core Finance Topics – Khan Academy
              </a>
            </li>
            <li>
              <a href="https://www.coursera.org/learn/fintech" target="_blank" className="text-blue-600 underline">
                FinTech – University of Hong Kong (Coursera)
              </a>
            </li>
            <li>
              <a href="https://www.edx.org/course/fintech-ethics-regulations" target="_blank" className="text-blue-600 underline">
                FinTech Ethics & Regulation – HKU (edX)
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>

    </Accordion.Root>
  );
}
