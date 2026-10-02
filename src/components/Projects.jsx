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

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          {/* Section Header */}
          <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-signal">
                Selected Work
              </p>

              <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
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

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const slug = slugify(project.title);
              const isFirst = index === 0;

              return (
                <article
                  key={project.title}
                  className={`group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-signal/30 ${
                    isFirst ? "md:col-span-2" : ""
                  }`}
                >
                  {/* ==============================
                      PROJECT IMAGE
                     ============================== */}
                  <div
                    className={`relative overflow-hidden ${
                      isFirst
                        ? "aspect-[16/7]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-5 top-5">
                      <span className="liquid-glass rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Featured */}
                    <div className="absolute right-5 top-5">
                      <span className="liquid-glass rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                        Featured
                      </span>
                    </div>

                    {/* Category */}
                    {project.category && (
                      <div className="absolute bottom-5 left-5">
                        <span className="liquid-glass rounded-full border border-white/20 px-3 py-1.5 text-xs text-white">
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ==============================
                      PROJECT CONTENT
                     ============================== */}
                  <div className="p-6 md:p-8">
                    {/* Title + Case Study */}
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-3xl">
                        <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                          {project.description}
                        </p>
                      </div>

                      {/* Case Study */}
                      <Link
                        href={`/projects/${slug}`}
                        className="liquid-glass inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-border px-4 text-xs font-medium transition-all duration-300 hover:border-signal/40 hover:text-signal"
                      >
                        Case Study
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    {/* Technologies */}
                    {project.tech?.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border px-3 py-1.5 text-[11px] text-muted-foreground transition-colors duration-300 group-hover:border-signal/20"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Features */}
                    {project.features?.length > 0 && (
                      <div className="mt-6 border-t border-border pt-5">
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

                    {/* Bottom Actions */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
                      {/* Quick View */}
                      <button
                        type="button"
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-signal"
                      >
                        <Eye className="h-4 w-4" />
                        Quick View
                      </button>

                      {/* Live Demo */}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-signal transition-opacity hover:opacity-70"
                        >
                          Live Demo
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}

                      {/* GitHub */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* View All Projects */}
          <div className="mt-12 flex justify-center">
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