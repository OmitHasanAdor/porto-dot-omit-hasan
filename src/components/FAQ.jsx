"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-py">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent mb-3">Frequently Asked Questions</p>
          <h2 className="text-4xl font-bold font-display text-[var(--foreground)]">FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="liquid-glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-[var(--foreground)] font-semibold">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`text-accent transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-5 pb-5 text-muted">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}