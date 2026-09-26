"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">FAQ</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <FaChevronDown
                  className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-5 pb-5 text-muted-foreground">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
