"use client";

import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  activeSection: string;
  onNavigate: (href: string) => void;
  onClose: () => void;
}

export default function MobileMenu({
  links,
  activeSection,
  onNavigate,
  onClose,
}: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-0 top-16 z-30 md:hidden"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative mx-4 mt-2 p-3 rounded-2xl glass shadow-lg"
      >
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => onNavigate(link.href)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === link.href.slice(1)
                  ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <div className="h-0.5 w-full bg-[var(--accent)]/50 mt-1 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
}
