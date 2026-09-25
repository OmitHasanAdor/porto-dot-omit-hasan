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
    <section
      id="services"
      className="section-py"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-accent mb-3 text-sm tracking-wide">
            What I Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-display text-white">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group liquid-glass rounded-3xl p-8 transition-all duration-300"
            >
              <h3 className="text-2xl font-display text-white mb-4 group-hover:text-accent transition">
                {service.title}
              </h3>

              <p className="text-muted leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}