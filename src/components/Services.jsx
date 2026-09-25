"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Landing Pages",
    desc: "High-converting modern landing pages for businesses and startups.",
  },
  {
    title: "Business Websites",
    desc: "Professional websites for companies and local businesses.",
  },
  {
    title: "E-Commerce Websites",
    desc: "Responsive and scalable online stores with modern UI.",
  },
  {
    title: "Portfolio Websites",
    desc: "Personal branding websites for developers and professionals.",
  },
  {
    title: "Next.js Development",
    desc: "Fast and SEO-friendly web applications built with Next.js.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">Services</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border bg-card p-8 transition hover:border-white/20"
            >
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="leading-7 text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
