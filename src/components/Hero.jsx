"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center overflow-hidden pt-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f5ff15,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I&apos;m
            <span className="block text-cyan-400">
              Omit Hasan Ador
            </span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-5 mt-3">
            Available For Freelance Work
          </div>

          <div className="text-2xl lg:text-4xl font-semibold text-gray-300 mt-4 h-16">
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

          <p className="text-gray-400 text-lg mt-6 max-w-xl">
            I am a Frontend-focused MERN Stack Developer from Bangladesh,
            specializing in modern, responsive and high-performance web
            applications.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#projects">
              <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:scale-105 transition">
                View Projects
              </button>
            </a>

            <a href="/resume.pdf">
              <button className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition">
                Download Resume
              </button>
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-2xl text-gray-400">
            <a href="https://github.com/OmitHasanAdor" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://linkedin.com/in/omit-hasan-ador" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="mailto:ibneshams05@gmail.com">
              <MdEmail className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Section (Image with Rotating Border & Floating Badge) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          {/* Main Container */}
          <div className="relative group p-0.75 rounded-[26px] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 blur-3xl bg-cyan-500/20 rounded-full" />

            {/* 360 Degree Rotating Gradient Border Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_40%,#00f5ff_70%,transparent_100%)] z-0"
            />

            {/* Inner Wrapper to hold the main content and hide outer overflows */}
            <div className="relative z-10 bg-[#050505] p-1 rounded-[24px] overflow-hidden w-full h-full flex items-center justify-center">
              
              <Image
                src="/profile1.png"
                alt="Omit Hasan Ador"
                width={500}
                height={500}
                priority
                className="relative z-10 object-cover rounded-[22px]"
              />

              {/* Floating Badge Component */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between p-4 rounded-2xl bg-[#0d1117]/90 backdrop-blur-md border border-cyan-500/10 shadow-2xl"
              >
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    MERN Developer
                  </p>
                  <h4 className="text-white font-semibold text-base mt-0.5">
                    Omit Hasan Ador
                  </h4>
                </div>
                
                {/* Right Circle Icon Button */}
                <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center text-black text-sm group-hover:rotate-45 transition-transform duration-300">
                  <FaArrowRight />
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}