"use client";

import { FaTimes } from "react-icons/fa";

export default function ProjectModal({
  isOpen,
  setIsOpen,
  project,
}) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="liquid-glass rounded-3xl max-w-2xl w-full p-8 relative">

        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-white/70 hover:text-white transition text-xl"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-display text-white mb-4">
          {project.title}
        </h2>

        <p className="text-muted mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-display text-white mb-3">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="liquid-glass px-3 py-1 rounded-full text-accent text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-display text-white mb-3">
            Features
          </h3>

          <ul className="list-disc ml-5 text-muted space-y-2">
            {project.features?.map((feature) => (
              <li key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass text-accent px-5 py-2 rounded-full font-semibold"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass text-[var(--foreground)] px-5 py-2 rounded-full"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
}