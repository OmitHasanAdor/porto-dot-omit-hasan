"use client";

import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  UserRound,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "High-converting modern landing pages for businesses and startups.",
    size: "lg",
    tone: "signal",
  },
  {
    icon: Building2,
    title: "Business Websites",
    desc: "Professional websites for companies and local businesses.",
    size: "sm",
    tone: "solid",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    desc: "Responsive and scalable online stores with modern UI.",
    size: "md",
    tone: "card",
  },
  {
    icon: UserRound,
    title: "Portfolio Websites",
    desc: "Personal branding websites for developers and professionals.",
    size: "md",
    tone: "card",
  },
  {
    icon: Rocket,
    title: "Next.js Development",
    desc: "Fast and SEO-friendly web applications built with Next.js.",
    size: "sm",
    tone: "solid",
  },
];

const toneClasses = {
  signal: "bg-signal/15 text-foreground border-signal/30",
  solid: "bg-primary text-primary-foreground border-transparent",
  card: "bg-card text-foreground border-border",
};

const revealVariants = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
  hidden: { filter: "blur(10px)", y: -16, opacity: 0 },
};

export default function Services() {
  const sectionRef = useRef(null);

  return (
    <section id="services" ref={sectionRef} className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <TimelineContent
          as="div"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={sectionRef}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl">Services</h2>
        </TimelineContent>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const span =
              service.size === "lg"
                ? "sm:col-span-2 lg:col-span-2 row-span-2"
                : service.size === "md"
                  ? "row-span-2"
                  : "row-span-1";

            return (
              <TimelineContent
                key={service.title}
                as="div"
                animationNum={i + 1}
                customVariants={revealVariants}
                timelineRef={sectionRef}
                className={`flex flex-col justify-between rounded-3xl border p-6 transition hover:-translate-y-1 ${toneClasses[service.tone]} ${span}`}
              >
                <Icon size={26} className="opacity-90" />
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{service.title}</h3>
                  <p
                    className={
                      service.tone === "solid"
                        ? "text-sm text-primary-foreground/80"
                        : "text-sm text-muted-foreground"
                    }
                  >
                    {service.desc}
                  </p>
                </div>
              </TimelineContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
