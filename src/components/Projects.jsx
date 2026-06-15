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
      className="py-24 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
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
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d]"
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
                    className="bg-cyan-500 text-black px-5 py-2 rounded-full font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-black font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500 text-cyan-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <button
                    onClick={() => handleDetails(project)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white"
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