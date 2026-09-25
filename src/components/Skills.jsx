"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBrain,
} from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiHtml5,
  SiCss,
  SiBetterauth,
  SiMongoose,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "CSS3", icon: <SiCss /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose />},
      { name: "Betterauth", icon: <SiBetterauth /> }
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Figma", icon: <PiFigmaLogoDuotone /> },
      { name: "AI Integration", icon: <FaBrain /> }
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-py bg-[oklch(0.11_0.015_250)]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-accent mb-3 text-sm tracking-wide">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-display text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="liquid-glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-display text-white mb-8">
                {group.title}
              </h3>

              <div className="space-y-4">

                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-xl bg-[oklch(0.08_0.01_250)] hover:bg-white/5 transition"
                  >
                    <span className="text-2xl text-accent">
                      {skill.icon}
                    </span>

                    <span className="text-[var(--foreground)]">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}