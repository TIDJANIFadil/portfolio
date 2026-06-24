"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-[var(--bg-card)]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full glass flex items-center justify-center cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={16} className="text-[var(--accent)]" />
        ) : (
          <Moon size={16} className="text-[var(--accent)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
