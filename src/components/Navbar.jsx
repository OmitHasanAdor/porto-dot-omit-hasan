"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold text-white">
            O<span className="text-cyan-400">A</span>
          </h2>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          as="a"
          href="/resume.pdf"
          target="_blank"
          className="bg-cyan-500 text-black font-semibold"
        >
          Resume
        </Button>
      </div>
    </motion.nav>
  );
}