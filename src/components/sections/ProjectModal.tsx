"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass border border-[var(--border)] shadow-xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full glass text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative aspect-video bg-[var(--bg-tertiary)] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-3">
                  <ExternalLink size={36} className="text-[var(--accent)]" />
                </div>
                <p className="text-lg font-medium text-[var(--text-primary)]">
                  {project.title}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Aperçu du projet
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Header */}
              <div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h2>
                <p className="text-[var(--text-secondary)] mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-3">
                  Description
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg glass border border-[var(--border)] text-[var(--text-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--bg-card-hover)] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                    Code source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
