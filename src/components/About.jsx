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
  { targetNumber: 15, suffix: "+", title: "Technologies" },
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
              Frontend-Focused Full Stack Developer
            </h3>

            <p className="text-lg leading-8 text-muted-foreground">
              I am a passionate Frontend-Focused Full Stack Developer from Bangladesh who enjoys building modern,
              responsive and user-friendly web applications. My strongest focus is creating fast, scalable
              and visually appealing digital experiences using React, Next.js, TypeScript, Tailwind CSS,
              while also working with Node.js, Express, Prisma, PostgreSQL and MongoDB.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I love turning ideas into clean, production-ready products and am actively looking for
              freelance and remote opportunities where I can contribute both strong frontend skills and solid full-stack solutions.
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