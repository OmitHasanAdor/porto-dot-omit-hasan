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
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-3">
            What I Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
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
              className="group bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}