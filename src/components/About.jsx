"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "3+",
    title: "Real Projects",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Responsive Design",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Frontend-Focused MERN Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I am a passionate MERN Stack Developer from Bangladesh
              who enjoys building modern, responsive and user-friendly
              web applications.

              My focus is creating fast, scalable and visually
              appealing digital experiences using React, Next.js,
              MongoDB and modern frontend technologies.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              I am currently expanding my backend development skills
              while building real-world projects and preparing for
              freelance and remote opportunities.
            </p>
          </motion.div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition"
              >
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                  {item.number}
                </h3>

                <p className="text-gray-300">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}