"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9999] h-0.5 origin-left bg-foreground/60"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
