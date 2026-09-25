"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDetails = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section
      id="projects"
      className="section-py bg-[oklch(0.11_0.015_250)]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-accent mb-3 text-sm tracking-wide">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-display text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden liquid-glass rounded-3xl"
            >

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleDetails(project)}
                    className="liquid-glass rounded-full px-5 py-2 font-medium text-[var(--foreground)]"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-display text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-muted mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="liquid-glass px-3 py-1 rounded-full text-accent text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-accent font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-[var(--foreground)]"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <button
                    onClick={() => handleDetails(project)}
                    className="flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-[var(--foreground)]"
                  >
                    Details
                  </button>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <ProjectModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          project={selectedProject}
        />

      </div>
    </section>
  );
}