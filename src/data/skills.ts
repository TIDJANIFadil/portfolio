export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "design",
    name: "Design UI/UX",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 75 },
      { name: "Photoshop", level: 70 },
      { name: "Illustrator", level: 65 },
      { name: "Prototypage", level: 85 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express", level: 60 },
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    id: "tools",
    name: "Outils & Workflow",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "npm / pnpm", level: 75 },
      { name: "Vercel", level: 70 },
    ],
  },
];
