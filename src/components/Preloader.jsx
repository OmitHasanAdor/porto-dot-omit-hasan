"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [percent, setPercent] = useState(1);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("oa-loaded")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHidden(true);
      return;
    }

    const duration = 1800;
    const start = performance.now();

    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out so it feels like it's accelerating through the count
      const eased = 1 - Math.pow(1 - t, 2);
      const next = Math.max(1, Math.round(eased * 100));
      setPercent(next);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        sessionStorage.setItem("oa-loaded", "1");
        setTimeout(() => setHidden(true), 650);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  // Percentage grows from a small readout to nearly half the viewport height
  const fontSize = 14 + (percent / 100) * 130;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[999] overflow-hidden bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Bold bar sweeping from bottom-left-ish to top-left-ish */}
          <motion.div
            className="absolute left-[6%] w-[3.5vw] bg-foreground sm:w-[2.2vw]"
            style={{ minWidth: 14, bottom: "8%" }}
            initial={{ height: "0%" }}
            animate={{ height: "84%" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Growing percentage, bottom-right */}
          <div className="absolute bottom-[6%] right-[6%] flex items-end">
            <motion.span
              className="font-display leading-none text-foreground"
              style={{ fontSize }}
              transition={{ duration: 0.1 }}
            >
              {percent}
            </motion.span>
            <span
              className="font-display leading-none text-foreground"
              style={{ fontSize: fontSize * 0.4 }}
            >
              %
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
