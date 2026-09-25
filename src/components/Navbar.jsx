"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full liquid-glass"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div>
            <h2 className="text-2xl font-bold font-display text-[var(--foreground)]">
              O<span className="text-accent">A</span>
            </h2>
            <p className="text-[10px] text-muted">Developer</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition px-3 py-2 rounded-lg ${
                activeSection === item.href.replace("#", "")
                  ? "text-accent"
                  : "text-muted hover:text-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-5 py-2.5 liquid-glass rounded-full text-[var(--foreground)] font-semibold hover:text-accent transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--foreground)] text-2xl hover:text-accent transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden liquid-glass">
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  activeSection === item.href.replace("#", "")
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="liquid-glass text-[var(--foreground)] text-center py-3 rounded-full font-semibold hover:text-accent transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}