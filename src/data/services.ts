import { Palette, Code, Layout, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Création de designs modernes et responsives qui captivent votre audience et renforcent votre marque.",
    icon: Palette,
    price: "Sur devis",
    features: [
      "Sites vitrines élégants",
      "Design responsif mobile-first",
      "Interfaces utilisateur intuitives",
      "Animations et micro-interactions",
    ],
  },
  {
    id: "developpement",
    title: "Développement Web",
    description:
      "Développement de sites et applications web performants avec les technologies les plus récentes.",
    icon: Code,
    price: "Sur devis",
    features: [
      "Sites avec Next.js / React",
      "Intégration Tailwind CSS",
      "API et back-end sur mesure",
      "Optimisation SEO et performances",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Conception d'expériences utilisateur fluides et agréables, du wireframe au prototype interactif.",
    icon: Layout,
    price: "Sur devis",
    features: [
      "Recherche utilisateur",
      "Wireframes et maquettes",
      "Prototypes interactifs",
      "Tests d'utilisabilité",
    ],
  },
  {
    id: "mobile",
    title: "Applications Mobile",
    description:
      "Design et développement d'applications mobiles cross-platform avec React Native.",
    icon: Smartphone,
    price: "Sur devis",
    features: [
      "Applications iOS & Android",
      "Design adapté au mobile",
      "Animations fluides",
      "Performance optimisée",
    ],
  },
];
