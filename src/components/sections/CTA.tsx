"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Prêt à{" "}
            <span className="text-gradient">collaborer</span> ?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            J&apos;suis toujours ouvert aux nouvelles opportunités et aux projets
            intéressants. Parlons de votre prochain projet !
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToContact}
            icon={<ArrowRight size={18} />}
          >
            Démarrer un projet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
