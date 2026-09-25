"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDetails = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                  <Button variant="glass" onClick={() => handleDetails(project)}>
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="mb-5 text-muted-foreground">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <button
                    onClick={() => handleDetails(project)}
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={selectedProject} />
      </div>
    </section>
  );
}
