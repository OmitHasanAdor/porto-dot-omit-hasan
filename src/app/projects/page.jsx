import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Omit Hasan Ador",
  description:
    "Explore projects built by Omit Hasan Ador using modern frontend and full-stack technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-signal">
              Selected Work
            </p>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Projects I&apos;ve
              <br />
              <span className="italic text-signal">built.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              A collection of web applications and digital products I&apos;ve
              built while working with modern frontend and full-stack
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-3xl border border-border bg-card ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? "aspect-16/8 md:aspect-16/7"
                      : "aspect-16/10"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5">
                    <span className="liquid-glass rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Featured */}
                  {project.featured && (
                    <div className="absolute right-5 top-5">
                      <span className="liquid-glass rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category */}
                  {project.category && (
                    <div className="absolute bottom-5 left-5">
                      <span className="liquid-glass rounded-full border border-white/20 px-3 py-1.5 text-xs text-white">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                        {project.title}
                      </h2>

                      <p className="mt-3 leading-7 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <Link
                      href={`/projects/${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="liquid-glass inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition-transform duration-300 hover:scale-[1.03]"
                    >
                      Case Study
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech?.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-7 flex items-center gap-5 border-t border-border pt-5">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-signal transition-opacity hover:opacity-75"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        GitHub
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="liquid-glass rounded-3xl border border-border p-8 text-center md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-signal">
              Have a project in mind?
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Let&apos;s build something
              <span className="italic"> useful.</span>
            </h2>

            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get In Touch
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}