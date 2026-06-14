"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-3">
            Let&apos;s Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Let&apos;s work together
            </h3>

            <p className="text-gray-400 mb-8">
              Feel free to contact me for freelance
              projects, collaborations or remote jobs.
            </p>

            <div className="space-y-5">

              <a
                href="mailto:ibneshams05@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400"
              >
                <MdEmail size={24} />
                ibneshams05@gmail.com
              </a>

              <a
                href="https://github.com/OmitHasanAdor"
                target="_blank"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400"
              >
                <FaGithub size={24} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/omit-hasan-ador"
                target="_blank"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400"
              >
                <FaLinkedin size={24} />
                LinkedIn
              </a>

            </div>
          </div>

          {/* Right */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl p-4 text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl p-4 text-white"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl p-4 text-white"
            />

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}