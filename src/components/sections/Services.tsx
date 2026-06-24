"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-[var(--section-padding)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Mes *services*"
          subtitle="CE QUE JE PROPOSE"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative p-6 md:p-8 rounded-2xl glass border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} className="text-[var(--accent)]" />
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-[var(--accent)]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-sm font-semibold text-[var(--accent)]">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
