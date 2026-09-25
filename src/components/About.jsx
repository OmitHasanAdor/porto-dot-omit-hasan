"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix }) {
  const nodeRef = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

const stats = [
  { targetNumber: 10, suffix: "+", title: "Real Projects" },
  { targetNumber: 10, suffix: "+", title: "Technologies" },
  { targetNumber: 100, suffix: "%", title: "Responsive Design" },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">About Me</h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[auto_1fr_auto]">
          <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border border-border lg:h-56 lg:w-56">
            <Image
              src="/profile1.png"
              alt="Omit Hasan Ador"
              width={400}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold sm:text-3xl">
              Frontend-Focused MERN Stack Developer
            </h3>

            <p className="text-lg leading-8 text-muted-foreground">
              I am a passionate MERN Stack Developer from Bangladesh who enjoys building modern,
              responsive and user-friendly web applications. My focus is creating fast, scalable
              and visually appealing digital experiences using React, Next.js, MongoDB and modern
              frontend technologies.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I am currently expanding my backend development skills while building real-world
              projects and preparing for freelance and remote opportunities.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card px-6 py-5 text-center lg:text-left"
              >
                <h4 className="font-display text-3xl">
                  <Counter value={item.targetNumber} suffix={item.suffix} />
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
