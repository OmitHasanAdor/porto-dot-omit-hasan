"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Featured{" "}
            <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 md:text-lg">
            A selection of projects I&apos;ve built using modern
            frontend and full-stack technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0a0a0a] shadow-2xl">
              {/* Featured Badge */}
              <div className="absolute left-5 top-5 z-20">
                <span className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-cyan-500/20">
                  Featured Project
                </span>
              </div>

              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative min-h-75 overflow-hidden lg:min-h-125">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-gray-200 backdrop-blur-md">
                      {featuredProject.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                  <p className="mb-3 text-sm font-medium text-cyan-400">
                    Frontend-focused Full-Stack Project
                  </p>

                  <h3 className="mb-5 text-3xl font-bold text-white md:text-4xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mb-7 leading-relaxed text-gray-400">
                    {featuredProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {featuredProject.tech?.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  {featuredProject.features?.length > 0 && (
                    <div className="mb-8">
                      <h4 className="mb-3 font-semibold text-white">
                        Key Features
                      </h4>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {featuredProject.features
                          .slice(0, 6)
                          .map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm text-gray-400"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                              {feature}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${featuredProject.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
                    >
                      Case Study
                      <FaArrowRight className="text-sm" />
                    </Link>

                    {featuredProject.live && (
                      <a
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-gray-200 transition hover:border-cyan-500/50 hover:text-cyan-400"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                    )}

                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
                        aria-label={`${featuredProject.title} GitHub repository`}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.slice(0, 3).map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition-colors duration-300 hover:border-cyan-500/30"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-gray-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-white transition group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech?.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}

                    {project.tech?.length > 4 && (
                      <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <Link
                      href={`/projects/${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                    >
                      View Details
                      <FaArrowRight className="text-xs" />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 transition hover:text-cyan-400"
                          aria-label={`${project.title} live demo`}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 transition hover:text-cyan-400"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-xl border border-cyan-500/40 px-6 py-3.5 font-semibold text-cyan-400 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            View All Projects

            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}