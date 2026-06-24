"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/projects";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "Tous", value: "all" },
  { label: "Web", value: "web" },
  { label: "Design", value: "design" },
  { label: "Mobile", value: "mobile" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-[var(--section-padding)] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Mes *projets*"
          subtitle="CE QUE J'AI RÉALISÉ"
          align="center"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent-glow)]"
                  : "glass text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onOpen={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[var(--text-secondary)] py-12"
          >
            Aucun projet dans cette catégorie pour le moment.
          </motion.p>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
