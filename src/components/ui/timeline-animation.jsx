"use client";

import { motion, useInView } from "framer-motion";

/**
 * Reveals its children with a staggered animation once the shared
 * `timelineRef` container scrolls into view. `animationNum` controls the
 * stagger order via the `custom` prop passed to `customVariants`.
 */
export function TimelineContent({
  as = "div",
  children,
  className,
  animationNum = 0,
  customVariants,
  timelineRef,
  ...props
}) {
  const isInView = useInView(timelineRef, { once: true, amount: 0.15 });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default TimelineContent;
