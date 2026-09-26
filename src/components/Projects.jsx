"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import ProjectModal from "./ProjectModal";
import { Button } from "@/components/ui/button";

const accents = ["#2fd9d0", "#6fc6f0", "#7b8cff"];

const carouselItems = projects.map((project, i) => ({
  id: project.title,
  title: project.title,
  image: project.image,
  credit: "MERN STACK PROJECT",
  meta: project.tech.slice(0, 3).map((t) => t.toUpperCase()),
  accent: accents[i % accents.length],
}));

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const active = projects[activeIndex];

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
          className="mb-10 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">Featured Projects</h2>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-border">
          <div className="h-[560px] sm:h-[620px] lg:h-[700px]">
            <HeroCarousel
              items={carouselItems}
              index={activeIndex}
              onIndexChange={setActiveIndex}
              brand="PROJECTS"
            />
          </div>
        </div>

        {active && (
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold">{active.title}</h3>
              <p className="max-w-xl text-muted-foreground">{active.description}</p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={active.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                <FaExternalLinkAlt />
                Live
              </a>
              <a
                href={active.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"
              >
                <FaGithub />
                GitHub
              </a>
              <Button variant="glass" size="sm" onClick={() => handleDetails(active)}>
                Details
              </Button>
            </div>
          </motion.div>
        )}

        <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={selectedProject} />
      </div>
    </section>
  );
}
