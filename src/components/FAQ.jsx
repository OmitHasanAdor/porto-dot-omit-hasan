"use client";

import {
  Accordion,
  AccordionItem,
} from "@heroui/react";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 bg-black"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-3">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold text-white">
            FAQ
          </h2>
        </div>

        <Accordion variant="bordered">

          <AccordionItem
            key="1"
            aria-label="faq1"
            title="Why hire me?"
          >
            I build modern, responsive and user-friendly web
            applications with clean code and attention to detail.
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="faq2"
            title="Which technologies do you use?"
          >
            React.js, Next.js, Tailwind CSS, MongoDB,
            Node.js, Express.js and modern frontend tools.
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="faq3"
            title="Do you build responsive websites?"
          >
            Yes. Every website I build is optimized for
            desktop, tablet and mobile devices.
          </AccordionItem>

          <AccordionItem
            key="4"
            aria-label="faq4"
            title="Are you available for freelance work?"
          >
            Yes. I am available for freelance projects,
            collaborations and remote opportunities.
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}