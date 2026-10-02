import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

import { projects } from "@/data/projects";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: slugify(project.title),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (project) => slugify(project.title) === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Omit Hasan Ador",
    };
  }

  return {
    title: `${project.title} | Omit Hasan Ador`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (project) => slugify(project.title) === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-signal/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Back Button */}
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Category */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {project.category && (
              <span className="rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-signal">
                {project.category}
              </span>
            )}

            {project.featured && (
              <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                Featured Project
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="max-w-5xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            {project.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-signal/50 hover:text-signal"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
            )}

            {project.server && (
              <a
                href={project.server}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted-foreground transition-colors hover:border-signal/50 hover:text-foreground"
              >
                Backend
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-16/8 overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">
              Project Details
            </p>

            <div className="mt-7 space-y-6">
              {/* Role */}
              {project.role && (
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Role
                  </p>

                  <p className="mt-2 text-sm leading-6 text-foreground">
                    {project.role}
                  </p>
                </div>
              )}

              {/* Category */}
              {project.category && (
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Category
                  </p>

                  <p className="mt-2 text-sm text-foreground">
                    {project.category}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Technologies
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech?.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {/* Overview */}
            <section>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">
                Overview
              </p>

              <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
                About the project
              </h2>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {project.description}
              </p>
            </section>

            {/* Features */}
            {project.features?.length > 0 && (
              <section className="mt-16">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">
                  Implementation
                </p>

                <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
                  Key features
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="liquid-glass rounded-2xl border border-border p-5 transition-colors duration-300 hover:border-signal/30"
                    >
                      <span className="text-xs font-medium text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-3 text-sm leading-6 text-foreground">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technology Stack */}
            <section className="mt-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">
                Stack
              </p>

              <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
                Built with modern technologies
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech?.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            {/* Links */}
            <section className="mt-16">
              <div className="liquid-glass rounded-3xl border border-border p-7 md:p-9">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-signal">
                  Explore
                </p>

                <h2 className="mt-3 font-display text-3xl">
                  View the project
                </h2>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-signal/50 hover:text-signal"
                    >
                      GitHub
                      <Github className="h-4 w-4" />
                    </a>
                  )}

                  {project.server && (
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-signal/50 hover:text-foreground"
                    >
                      Backend
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-signal"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}