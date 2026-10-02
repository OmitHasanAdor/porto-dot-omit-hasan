"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ isOpen, setIsOpen, project }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="liquid-glass relative w-full max-w-2xl rounded-3xl border border-border bg-card"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-signal hover:text-signal"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Scroll Area */}
        <div className="max-h-[calc(100vh-2rem)] overflow-y-scroll rounded-3xl px-8 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
          <h2 className="mb-4 pr-14 text-2xl font-semibold text-foreground md:text-3xl">
            {project.title}
          </h2>

          <p className="mb-6 leading-7 text-muted-foreground">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-7">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tech?.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Features
            </h3>

            <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
              {project.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-foreground transition-colors hover:border-signal hover:text-signal"
              >
                GitHub
              </a>
            )}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-border px-5 py-2.5 text-muted-foreground transition-colors hover:border-signal hover:text-signal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}