"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.20_0.04_230),transparent_70%)] pointer-events-none" />

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Section (Content & Buttons) */}
        <div className="relative z-20">
          <div className="animate-fade-rise inline-flex items-center gap-2 px-4 py-2 liquid-glass rounded-full text-accent text-sm mb-5 mt-3">
            ✦ Available For Freelance Work
          </div>

          <h1 className="animate-fade-rise-delay font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white block">Hi, I&apos;m</span>
            <span className="block text-muted">
              Omit Hasan Ador
            </span>
          </h1>

          <div className="animate-fade-rise-delay-2 text-xl lg:text-2xl font-semibold text-muted mt-4 h-16">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Next.js Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="animate-fade-rise-delay-2 text-muted text-lg mt-6 max-w-xl">
            I am a Frontend-focused MERN Stack Developer from Bangladesh,
            specializing in modern, responsive and high-performance web
            applications.
          </p>

          {/* Action Buttons */}
          <div className="animate-fade-rise-delay-2 flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="inline-block">
              <button className="px-8 py-3 liquid-glass text-[var(--foreground)] font-semibold rounded-full hover:scale-105 transition cursor-pointer">
                View Projects
              </button>
            </a>

            <a href="/resume.pdf" download className="inline-block">
              <button className="px-8 py-3 liquid-glass text-[var(--foreground)] rounded-full hover:text-accent transition cursor-pointer">
                Download Resume
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="animate-fade-rise-delay-2 flex gap-5 mt-8 text-2xl text-muted">
            <a href="https://github.com/OmitHasanAdor" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-[var(--foreground)] transition" />
            </a>

            <a href="https://linkedin.com/in/omit-hasan-ador" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-[var(--foreground)] transition" />
            </a>

            <a href="mailto:ibneshams05@gmail.com">
              <MdEmail className="hover:text-[var(--foreground)] transition" />
            </a>
          </div>
        </div>

        {/* Right Section (Image & Animation) */}
        <div className="flex justify-center animate-fade-rise-delay">
          {/* Main Container */}
          <div className="relative group p-1.5 liquid-glass rounded-3xl overflow-hidden flex items-center justify-center animate-float">
            {/* Inner Wrapper */}
            <div className="relative z-10 w-full h-full flex items-center justify-center rounded-3xl overflow-hidden">
              <Image
                src="/profile1.png"
                alt="Omit Hasan Ador"
                width={500}
                height={500}
                priority
                className="relative z-10 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}