"use client";

import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

const ParticleField = lazy(() => import("@/components/ui/ParticleField"));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const roles = ["Designer UI/UX", "Développeur Web", "Créatif", "Étudiant à l'IFRI"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    timeout = setTimeout(
      () => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background 3D Particles */}
      <Suspense fallback={<div className="absolute inset-0 -z-10 bg-[var(--gradient-hero)]" />}>
        <ParticleField />
      </Suspense>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--glass-bg)] backdrop-blur-sm text-xs font-medium text-[var(--text-secondary)]"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Disponible pour de nouveaux projets
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] mb-4"
        >
          Bonjour, je suis
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-4"
        >
          <AnimatedText
            text="Fadil TIDJANI"
            el="span"
            className="text-gradient"
          />
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="h-10 md:h-12 mb-8"
        >
          <span className="text-xl md:text-2xl text-[var(--text-secondary)]">
            {displayText}
            <span
              className={`inline-block w-[3px] h-6 md:h-7 ml-1 bg-[var(--accent)] rounded-full transition-opacity ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToProjects}
            icon={<ExternalLink size={18} />}
          >
            Voir mon travail
          </Button>
          <Button variant="secondary" size="lg" onClick={scrollToContact}>
            Me contacter
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-tertiary)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
