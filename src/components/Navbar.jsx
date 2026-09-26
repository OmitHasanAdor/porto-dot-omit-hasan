"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, User, Sparkles, Briefcase, FolderKanban, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuToggle } from "@/components/ui/menu-toggle";
import BottomNavBar from "@/components/ui/bottom-nav-bar";
import LogoMark from "@/components/LogoMark";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const bottomNavItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
      { threshold: 0.4 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bottomActiveIndex = Math.max(
    0,
    bottomNavItems.findIndex((item) => item.href.replace("#", "") === activeSection),
  );

  const scrollToHref = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark size={38} />
            <span className="font-display hidden text-2xl leading-none text-foreground sm:inline">
              Omit<span className="text-muted-foreground"> Hasan Ador</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button as="a" href="/resume.pdf" download variant="glass" size="sm">
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <MenuToggle
              open={isOpen}
              onOpenChange={setIsOpen}
              strokeWidth={3}
              className="size-6 text-foreground"
            />
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition ${
                    activeSection === item.href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download
                className="liquid-glass rounded-full py-3 text-center font-medium text-foreground"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Mobile-only fixed bottom tab bar */}
      <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden">
        <BottomNavBar
          items={bottomNavItems}
          activeIndex={bottomActiveIndex}
          onSelect={(_, item) => scrollToHref(item.href)}
        />
      </div>
    </>
  );
}
