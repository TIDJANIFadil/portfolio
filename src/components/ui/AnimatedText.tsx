"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  el?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  once?: boolean;
  delay?: number;
}

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const words = text.split(" ");

  return (
    <Wrapper className={className} ref={ref}>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.04, delayChildren: delay }}
        aria-label={text}
        className="inline-block"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={defaultAnimations}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
