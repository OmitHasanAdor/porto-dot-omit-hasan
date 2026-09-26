"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-background text-foreground"
    >
      {/* Fallback gradient - always present so the section looks intentional
          even before a real video file is added under /public/videos */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, oklch(0.3 0.05 226) 0%, oklch(0.2 0.03 250) 55%, oklch(0.14 0.02 250) 100%)",
        }}
      />

      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        aria-hidden="true"
      >
        {/* Self-hosted files take priority once you add them to /public/videos */}
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Falls back to the original source CDN link so the hero works today */}
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-20 pt-32 text-center sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-sm text-white/85 backdrop-blur-sm"
        >
          Available for freelance work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-8 max-w-4xl text-5xl font-normal leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m Omit Hasan Ador
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 h-10 text-2xl text-white/80 sm:text-3xl"
        >
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          I am a Frontend-focused MERN Stack Developer from Bangladesh, specializing in modern,
          responsive and high-performance web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button as="a" href="#projects" variant="glass" size="lg" className="!text-white">
            View Projects
          </Button>
          <Button as="a" href="/resume.pdf" download variant="outline" size="lg" className="border-white/30 !text-white hover:!bg-white/10">
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-6 text-xl text-white/70"
        >
          <a href={contactInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className="transition hover:text-white" />
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="transition hover:text-white" />
          </a>
          <a href={`mailto:${contactInfo.email}`} aria-label="Email">
            <MdEmail className="transition hover:text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
