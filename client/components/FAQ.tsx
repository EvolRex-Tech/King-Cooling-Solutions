import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Do you offer AMC for home AC units?",
      answer:
        "Yes, we provide comprehensive Annual Maintenance Contracts for both split and window AC units to ensure your equipment runs efficiently year-round.",
    },
    {
      question: "How quickly can you attend a breakdown?",
      answer:
        "Our emergency response team is available 24/7 and typically arrives within 2-4 hours for urgent breakdowns in Chennai and surrounding areas.",
    },
    {
      question: "What brands do you service?",
      answer:
        "We service all major brands including Daikin, Blue Star, Carrier, Voltas, LG, Samsung, and more. Our technicians are trained across multiple brands and systems.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-[896px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-brand-blue uppercase tracking-[1.4px] mb-4">
            Questions
          </div>
          <h2 className="text-4xl font-extrabold text-brand-darkText">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#F1F5F9] rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-brand-darkText pr-4">
                  {faq.question}
                </h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M15.8906 9.28125L12 13.1719L8.10938 9.28125C7.73438 8.90625 7.07812 8.90625 6.70312 9.28125C6.32812 9.70312 6.32812 10.3125 6.70312 10.6875L11.2969 15.2812C11.6719 15.7031 12.3281 15.7031 12.7031 15.2812L17.2969 10.6875C17.6719 10.3125 17.6719 9.70312 17.2969 9.28125C16.9219 8.90625 16.2656 8.90625 15.8906 9.28125Z"
                    fill="#0F172A"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-base text-brand-grayText leading-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
