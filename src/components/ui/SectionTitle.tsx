"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
        {subtitle || "Section"}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        {title.split(" ").map((word, i, arr) =>
          word.startsWith("*") ? (
            <span key={i} className="text-gradient">
              {word.replace("*", "")}{" "}
            </span>
          ) : (
            <span key={i}>{word}{i < arr.length - 1 ? " " : ""}</span>
          )
        )}
      </h2>
      <div
        className={cn(
          "h-1 w-16 rounded-full bg-[var(--gradient-accent)] mt-4",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
