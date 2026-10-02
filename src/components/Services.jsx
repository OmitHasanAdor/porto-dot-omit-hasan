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
    position:
      "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    tone: "signal",
  },
  {
    icon: Building2,
    title: "Business Websites",
    desc: "Professional websites for companies and local businesses.",
    position:
      "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    tone: "solid",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    desc: "Responsive and scalable online stores with modern UI.",
    position:
      "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    tone: "card",
  },
  {
    icon: UserRound,
    title: "Portfolio Websites",
    desc: "Personal branding websites for developers and professionals.",
    position:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    tone: "card",
  },
  {
    icon: Rocket,
    title: "Next.js Development",
    desc: "Fast and SEO-friendly web applications built with Next.js.",
    position:
      "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    tone: "solid",
  },
];

const toneClasses = {
  signal:
    "bg-signal/15 text-foreground border-signal/30",
  solid:
    "bg-primary text-primary-foreground border-transparent",
  card:
    "bg-card text-foreground border-border",
};

const revealVariants = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.5,
    },
  }),

  hidden: {
    filter: "blur(10px)",
    y: -16,
    opacity: 0,
  },
};

export default function Services() {
  const sectionRef = useRef(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Heading */}
        <TimelineContent
          as="div"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={sectionRef}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-signal">
            What I Do
          </p>

          <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Services
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
            Modern web solutions designed around performance, usability,
            responsive design, and real-world business needs.
          </p>
        </TimelineContent>

        {/* Desktop Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[150px] lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <TimelineContent
                key={service.title}
                as="div"
                animationNum={i + 1}
                customVariants={revealVariants}
                timelineRef={sectionRef}
                className={`group flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 md:p-6 ${toneClasses[service.tone]} ${service.position}`}
              >
                {/* Icon */}
                <div>
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="opacity-90 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p
                    className={
                      service.tone === "solid"
                        ? "max-w-sm text-sm leading-5 text-primary-foreground/75"
                        : "max-w-sm text-sm leading-5 text-muted-foreground"
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