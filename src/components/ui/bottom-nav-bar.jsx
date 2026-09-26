"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MOBILE_LABEL_WIDTH = 72;

export function BottomNavBar({ items, activeIndex = 0, onSelect, className }) {
  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "liquid-glass flex h-[52px] min-w-[320px] max-w-[95vw] items-center space-x-1 rounded-full border border-border bg-card/90 p-2 shadow-xl backdrop-blur-xl",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "relative flex h-10 max-h-[44px] min-h-[40px] min-w-[44px] items-center gap-0 rounded-full px-3 py-2 transition-colors duration-200",
              isActive
                ? "gap-2 bg-primary/10 text-primary dark:bg-primary/15"
                : "bg-transparent text-muted-foreground hover:bg-muted",
              "focus:outline-none focus-visible:ring-0",
            )}
            onClick={() => onSelect?.(idx, item)}
            aria-label={item.label}
            type="button"
          >
            <Icon size={20} strokeWidth={2} aria-hidden className="transition-colors duration-200" />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "8px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.19 },
                marginLeft: { duration: 0.19 },
              }}
              className="flex max-w-[72px] items-center overflow-hidden"
            >
              <span
                className={cn(
                  "select-none overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(0.625rem,0.5263rem+0.5263vw,1rem)] font-medium leading-[1.9] transition-opacity duration-200",
                  isActive ? "text-primary" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;
