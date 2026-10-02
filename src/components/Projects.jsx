"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Eye,
} from "lucide-react";

import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-background py-24 md:py-32"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" />

        <div className="container relative mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-signal">
                Selected Work
              </p>

              <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Projects that solve
                <br />
                <span className="text-muted-foreground">
                  real-world problems.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
              A selection of full-stack applications I have built while
              exploring modern frontend architecture, authentication,
              databases, payments, and real-world product workflows.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            {featuredProjects.map((project, index) => {
              const slug = slugify(project.title);

              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-signal/40"
                >
                  <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Project Image */}
                    <div className="relative aspect-16/10 overflow-hidden border-b border-border lg:aspect-auto lg:min-h-115 lg:border-b-0 lg:border-r">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                      {/* Project Number */}
                      <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-medium text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-col justify-between p-7 md:p-10">
                      <div>
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <span className="text-xs uppercase tracking-[0.2em] text-signal">
                            {project.category}
                          </span>

                          <span className="text-xs text-muted-foreground">
                            Featured
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl text-foreground md:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.tech?.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-signal/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Features */}
                        {project.features?.length > 0 && (
                          <div className="mt-8">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                              Highlights
                            </p>

                            <ul className="grid gap-2 sm:grid-cols-2">
                              {project.features
                                .slice(0, 6)
                                .map((feature) => (
                                  <li
                                    key={feature}
                                    className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"
                                  >
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                                    {feature}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="mt-10 flex flex-wrap items-center gap-3">
                        {/* Case Study */}
                        <Link
                          href={`/projects/${slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:gap-3 hover:opacity-90"
                        >
                          Case Study
                          <ArrowUpRight size={15} />
                        </Link>

                        {/* Quick View */}
                        <button
                          type="button"
                          onClick={() => openProjectModal(project)}
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-all duration-300 hover:border-signal/50 hover:text-signal"
                        >
                          <Eye size={15} />
                          Quick View
                        </button>

                        {/* Live Demo */}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:border-signal/50 hover:text-foreground"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}

                        {/* GitHub */}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:border-signal/50 hover:text-foreground"
                          >
                            <Github size={15} />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* All Projects */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-all duration-300 hover:border-signal/50 hover:text-signal"
            >
              View All Projects
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        setIsOpen={closeProjectModal}
        project={selectedProject}
      />
    </>
  );
}

