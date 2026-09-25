"use client";

import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ isOpen, setIsOpen, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="liquid-glass relative w-full max-w-2xl rounded-3xl border border-border bg-card p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-xl text-foreground"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <h2 className="mb-4 text-2xl font-semibold">{project.title}</h2>
        <p className="mb-6 text-muted-foreground">{project.description}</p>

        <div className="mb-6">
          <h3 className="mb-3 text-lg font-semibold">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold">Features</h3>
          <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
            {project.features?.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>

        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2 text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
