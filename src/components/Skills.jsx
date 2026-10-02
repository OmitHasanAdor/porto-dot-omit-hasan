"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiNeon,
  SiBetterauth,
  SiJsonwebtokens,
  SiZod,
  SiVercel,
  SiRender,
  SiPostman,
  SiStripe,
  SiDaisyui,
  SiFramer,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 92 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 88 },
      { name: "TypeScript", icon: <SiTypescript />, level: 72 },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 90 },
      { name: "HTML5", icon: <SiHtml5 />, level: 95 },
      { name: "CSS3", icon: <SiCss />, level: 91 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 94 },
      { name: "HeroUI", icon: <FaCode />, level: 82 },
      { name: "DaisyUI", icon: <SiDaisyui />, level: 84 },
      { name: "Framer Motion", icon: <SiFramer />, level: 78 },
    ],
  },

  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 72 },
      { name: "Express.js", icon: <SiExpress />, level: 70 },
      { name: "REST API", icon: <FaCode />, level: 76 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 68 },
      { name: "MongoDB", icon: <SiMongodb />, level: 82 },
      { name: "Prisma ORM", icon: <SiPrisma />, level: 74 },
      { name: "Neon", icon: <SiPostgresql />, level: 70 },
      { name: "Better Auth", icon: <SiBetterauth />, level: 76 },
      { name: "JWT", icon: <SiJsonwebtokens />, level: 73 },
      { name: "Zod", icon: <SiZod />, level: 68 },
    ],
  },

  {
    title: "Tools & Payment",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 88 },
      { name: "GitHub", icon: <FaGithub />, level: 91 },
      { name: "VS Code", icon: <FaCode />, level: 96 },
      { name: "Postman", icon: <SiPostman />, level: 80 },
      { name: "Vercel", icon: <SiVercel />, level: 88 },
      { name: "Render", icon: <SiRender />, level: 72 },
      { name: "Figma", icon: <PiFigmaLogoDuotone />, level: 70 },
      { name: "SSLCommerz", icon: <FaCode />, level: 65 },
      { name: "Stripe Checkout", icon: <SiStripe />, level: 72 },
    ],
  },
];

const revealVariants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),

  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
};

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
      }}
    >
      {/* Skill Name + Percentage */}
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-foreground">
          <span className="text-base text-muted-foreground">
            {skill.icon}
          </span>

          {skill.name}
        </span>

        <span className="font-display text-sm text-muted-foreground">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-signal to-foreground/70"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.04 + 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-signal">
            My Stack
          </p>

          <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Skills &amp; Technologies
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
            Technologies and tools I use to build modern, responsive, and
            scalable web applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              custom={groupIndex}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 md:p-6"
            >
              {/* Subtle Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-signal/10 blur-3xl transition-opacity duration-500 group-hover:bg-signal/15" />

              {/* Header */}
              <div className="relative mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>

                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Scroll Area */}
              <div className="relative max-h-87.5 overflow-y-auto pr-2">
                <div className="space-y-5">
                  {group.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-card to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}