"use client";

import { FaTimes } from "react-icons/fa";

export default function ProjectModal({
  isOpen,
  setIsOpen,
  project,
}) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-[#0d0d0d] border border-cyan-500/20 rounded-3xl max-w-2xl w-full p-8 relative">

        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-white text-xl"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h2>

        <p className="text-gray-400 mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">
            Features
          </h3>

          <ul className="list-disc ml-5 text-gray-300 space-y-2">
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
            className="bg-cyan-500 text-black px-5 py-2 rounded-full font-semibold"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-500 text-cyan-400 px-5 py-2 rounded-full"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
}