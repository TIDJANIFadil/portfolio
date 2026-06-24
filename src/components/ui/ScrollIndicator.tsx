"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2">
      <div className="w-[2px] h-24 md:h-32 bg-[var(--border)] rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 w-full origin-top bg-[var(--gradient-accent)] rounded-full"
          style={{ scaleY }}
        />
      </div>
      <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[var(--text-tertiary)] rotate-90 origin-center">
        Scroll
      </span>
    </div>
  );
}
