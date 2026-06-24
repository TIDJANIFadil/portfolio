"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Client Nom 1",
    role: "CEO, Entreprise",
    content:
      "Fadil a réalisé un travail exceptionnel sur notre site web. Son sens du design et sa compréhension de nos besoins ont dépassé nos attentes. Je le recommande vivement !",
    avatar: "CN",
  },
  {
    id: 2,
    name: "Client Nom 2",
    role: "Designer, Agence",
    content:
      "Travailler avec Fadil a été une expérience formidable. Sa maîtrise des outils de design et sa créativité ont apporté une réelle valeur ajoutée à notre projet.",
    avatar: "CN",
  },
  {
    id: 3,
    name: "Client Nom 3",
    role: "Freelance",
    content:
      "Fadil a su comprendre exactement ce que je voulais. Le résultat est magnifique, moderne et parfaitement adapté à mon activité. Un grand merci !",
    avatar: "CN",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-[var(--section-padding)] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Ce qu'ils *disent*"
          subtitle="TÉMOIGNAGES"
          align="center"
        />

        <div className="max-w-2xl mx-auto relative">
          {/* Carousel */}
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute inset-0 flex flex-col items-center text-center p-6 md:p-10"
              >
                {/* Quote icon */}
                <Quote
                  size={40}
                  className="text-[var(--accent)]/20 mb-4"
                />

                <p className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--accent)]">
                      {testimonials[current].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full glass text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              aria-label="Précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "bg-[var(--accent)] w-6"
                      : "bg-[var(--border)] hover:bg-[var(--text-tertiary)]"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full glass text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              aria-label="Suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
