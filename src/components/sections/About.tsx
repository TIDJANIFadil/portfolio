"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const stats = [
  { icon: Calendar, value: "2024", label: "Début du parcours" },
  { icon: Award, value: "+15", label: "Projets réalisés" },
  { icon: MapPin, value: "IFRI", label: "Bénin" },
];

const timeline = [
  {
    year: "2024",
    title: "Début à l'IFRI",
    description:
      "Entrée à l'Institut de Formation et de Recherche en Informatique, spécialisation Internet et Multimédia.",
  },
  {
    year: "2025",
    title: "Premiers Projets",
    description:
      "Réalisation de mes premiers projets web et designs UI/UX. Découverte de React et Next.js.",
  },
  {
    year: "2026",
    title: "Portfolio & Freelance",
    description:
      "Lancement de mon portfolio professionnel et début de collaborations en freelance.",
  },
  {
    year: "2027+",
    title: "Objectifs",
    description:
      "Devenir un designer/développeur full-stack reconnu, contribuer à des projets innovants et continuer à apprendre.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-[var(--section-padding)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="À propos de *moi*"
          subtitle="QUI SUIS-JE ?"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Photo / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar placeholder */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden glass group">
              <div className="absolute inset-0 bg-[var(--gradient-accent)] opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-3">
                    <span className="text-4xl font-bold text-gradient">FT</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Ta photo ici
                  </p>
                </div>
              </div>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-[var(--border)]" />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm"
                >
                  <stat.icon size={16} className="text-[var(--accent)]" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {stat.value}
                    </span>
                    <span className="text-[var(--text-tertiary)] ml-1">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Étudiant en Internet & Multimédia à l&apos;IFRI
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Je suis{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  TIDJANI Fadil Akambi
                </span>
                , un passionné de design et de développement web. Mon parcours à
                l&apos;Institut de Formation et de Recherche en Informatique (IFRI) me
                permet d&apos;allier créativité et technique pour créer des expériences
                numériques uniques.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                En tant que designer UI/UX, je conçois des interfaces intuitives et
                esthétiques. En tant que développeur web junior, je donne vie à ces
                designs avec un code propre et moderne. Mon objectif ? Créer des
                projets qui font la différence.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                Mon Parcours
              </h4>
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="relative pl-8 pb-6 last:pb-0"
                  >
                    {/* Ligne */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-[11px] top-4 bottom-0 w-[2px] bg-[var(--border)]" />
                    )}
                    {/* Point */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    </div>
                    {/* Content */}
                    <div>
                      <span className="text-sm font-bold text-[var(--accent)]">
                        {item.year}
                      </span>
                      <h5 className="text-base font-semibold text-[var(--text-primary)] mt-0.5">
                        {item.title}
                      </h5>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CV Button */}
            <Button variant="primary" icon={<Download size={18} />}>
              Télécharger mon CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
