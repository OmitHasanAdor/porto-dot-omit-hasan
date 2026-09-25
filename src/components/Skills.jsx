"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBrain } from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
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
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "Betterauth", icon: <SiBetterauth /> },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Figma", icon: <PiFigmaLogoDuotone /> },
      { name: "AI Integration", icon: <FaBrain /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">Skills &amp; Technologies</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <h3 className="mb-6 text-xl font-semibold">{group.title}</h3>

              <div className="space-y-3">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl bg-black/10 px-3 py-3 transition hover:bg-white/5"
                  >
                    <span className="text-xl text-muted-foreground">{skill.icon}</span>
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
