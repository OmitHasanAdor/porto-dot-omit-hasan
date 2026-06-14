"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiHtml5,
  SiCss,
} from "react-icons/si";
const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
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
    ],
  },

  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-3">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
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
              className="bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                {group.title}
              </h3>

              <div className="space-y-4">

                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-xl bg-black/40 hover:bg-cyan-500/10 transition"
                  >
                    <span className="text-2xl text-cyan-400">
                      {skill.icon}
                    </span>

                    <span className="text-gray-300">
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