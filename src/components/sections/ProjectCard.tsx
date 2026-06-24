"use client";

import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative rounded-2xl overflow-hidden glass border border-[var(--border)] cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[var(--bg-tertiary)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-2">
              <Eye size={28} className="text-[var(--accent)]" />
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              {project.title}
            </p>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
                aria-label="Voir le projet en direct"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full glass text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors"
                aria-label="Voir le code source"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider">
            {project.category === "web"
              ? "Web"
              : project.category === "design"
              ? "Design"
              : "Mobile"}
          </span>
          <span className="text-xs text-[var(--text-tertiary)]">·</span>
          <span className="text-xs text-[var(--text-tertiary)]">
            {project.year}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mt-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
