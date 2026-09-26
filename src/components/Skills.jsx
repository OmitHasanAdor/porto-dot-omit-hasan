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
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 88 },
      { name: "JavaScript", icon: <SiJavascript />, level: 92 },
      { name: "CSS3", icon: <SiCss />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 65 },
      { name: "Express.js", icon: <SiExpress />, level: 60 },
      { name: "MongoDB", icon: <SiMongodb />, level: 70 },
      { name: "Mongoose", icon: <SiMongoose />, level: 65 },
      { name: "Betterauth", icon: <SiBetterauth />, level: 60 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 88 },
      { name: "GitHub", icon: <FaGithub />, level: 88 },
      { name: "Vercel", icon: <SiVercel />, level: 85 },
      { name: "Figma", icon: <PiFigmaLogoDuotone />, level: 70 },
      { name: "AI Integration", icon: <FaBrain />, level: 80 },
    ],
  },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-foreground">
          <span className="text-base text-muted-foreground">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="font-display text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-signal to-foreground/70"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

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
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-border bg-card p-8">
              <h3 className="mb-6 text-xl font-semibold">{group.title}</h3>

              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
