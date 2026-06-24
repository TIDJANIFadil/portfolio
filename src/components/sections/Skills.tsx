"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-xs font-mono text-[var(--text-secondary)]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="h-full rounded-full bg-[var(--gradient-accent)]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-[var(--section-padding)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Mes *compétences*"
          subtitle="CE QUE JE MAÎTRISE"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="p-6 md:p-8 rounded-2xl glass border border-[var(--border)]"
            >
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
