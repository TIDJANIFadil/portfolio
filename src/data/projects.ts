export type ProjectCategory = "web" | "design" | "mobile";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  technologies: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "projet-1",
    title: "Plateforme de gestion des documents administratifs IFRI",
    subtitle: "Une application web moderne",
    description:
      "Plateforme web de gestion des demandes de documents administratifs pour l'IFRI, permettant aux étudiants de soumettre leurs demandes en ligne, de suivre leur traitement en temps réel et de télécharger leurs documents de manière sécurisée via un code secret. Développée en PHP, MySQL et Tailwind CSS.",
    longDescription:
      "Cette plateforme web a été conçue pour digitaliser la gestion des demandes de documents administratifs à l'Institut de Formation et de Recherche en Informatique (IFRI), un processus qui reposait jusqu'alors entièrement sur des démarches manuelles et chronophages. Elle propose deux espaces distincts : un espace administrateur, depuis lequel le personnel inscrit les étudiants, traite les demandes reçues et dépose les documents finalisés, et un espace étudiant, permettant de soumettre une demande accompagnée de pièces justificatives et d'en suivre l'évolution en temps réel. La sécurité a été au cœur de la conception, avec un système de retrait par code secret généré automatiquement, garantissant que seul le véritable demandeur peut récupérer son document. Développée en PHP natif avec une base de données MySQL, une interface Tailwind CSS et des notifications automatiques par email via PHPMailer, cette solution a été pensée pour rester légère, sécurisée et entièrement adaptée au contexte d'un établissement académique béninois. Le projet a été précédé d'un benchmarking approfondi des solutions existantes ainsi que d'une modélisation UML complète, garantissant une démarche méthodique de la conception à la réalisation.",
    category: "web",
    tags: ["UI/UX", "PHP", "MySQL", "Tailwind CSS"],
    technologies: ["UI/UX", "PHP", "MySQL", "Tailwind CSS", "Figma"],
    image: "/images/projects/project1.jpg",
    images: [
      "/images/projects/project1.jpg",
      "/images/projects/project1.jpg",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/TIDJANIFadil",
    featured: true,
    year: 2025,
  },
  {
    id: "projet-2",
    title: "Refonte du site de l'AnpE Benin",
    subtitle: "Design UI/UX du site de l'Anpe Bénin",
    description:
      "Refonte de l'interface utilisateur du site de l'ANPE dans le but d'améliorer l'expérience utilisateur, la navigation, l'accessibilité et l'identité visuelle. Ce projet a été réalisé durant mon stage académique à Espoir Plus Technologie avec Figma.",
    longDescription:
      "Dans le cadre de mon stage académique chez Espoir Plus Technologie, j'ai participé à la refonte de l'interface du site web de l'Agence Nationale Pour l'Emploi (ANPE). L'objectif principal de ce projet était de moderniser l'identité visuelle de la plateforme, d'améliorer l'expérience utilisateur et de proposer une interface plus intuitive, accessible et adaptée aux besoins des différents profils d'utilisateurs.\n\nProcessus créatif\n\nLe projet a suivi une démarche de conception centrée sur l'utilisateur (User-Centered Design), en passant par plusieurs étapes essentielles du processus UI/UX.\n\nRecherche utilisateur\n\nLa première étape a consisté à analyser le site existant afin d'identifier ses points faibles. J'ai étudié la structure des pages, les parcours de navigation et la manière dont les informations étaient présentées. Cette phase m'a permis de mettre en évidence plusieurs problèmes, notamment :\n\nune organisation des contenus peu claire ;\nune navigation complexe ;\nune hiérarchie visuelle insuffisante ;\nun design vieillissant ;\nun manque de cohérence graphique entre les différentes pages.\n\nJ'ai également effectué une veille sur des plateformes gouvernementales et des sites d'emploi modernes afin d'identifier les bonnes pratiques en matière d'ergonomie, d'accessibilité et d'interface utilisateur.\n\nWireframes\n\nÀ partir des observations réalisées, j'ai conçu des wireframes basse fidélité afin de définir une nouvelle architecture de l'information et de restructurer les différentes pages du site.\n\nCette étape m'a permis de réfléchir à :\n\nl'organisation des contenus ;\nle positionnement des différents éléments de l'interface ;\nla simplification des parcours utilisateurs ;\nl'amélioration de la lisibilité des informations.\n\nLes wireframes ont servi de base avant le passage au design graphique.\n\nPrototypage\n\nUne fois la structure validée, j'ai développé un prototype interactif sur Figma permettant de simuler les principaux parcours utilisateurs.\n\nLe prototypage m'a permis de :\n\ntester les interactions entre les écrans ;\nconcevoir des transitions fluides ;\nintégrer des micro-interactions pour améliorer l'expérience utilisateur ;\nvisualiser le comportement de l'interface avant son développement.\n\nCette étape a facilité les échanges avec mon encadreur et a permis d'apporter plusieurs améliorations avant la réalisation de la maquette finale.\n\nDesign final\n\nLa dernière étape consistait à produire une maquette haute fidélité respectant les principes modernes du design d'interface.\n\nLe design final repose sur plusieurs choix :\n\nune palette de couleurs moderne et cohérente avec l'identité de l'ANPE ;\nune typographie offrant une meilleure lisibilité ;\nune grille de mise en page garantissant un bon alignement des contenus ;\ndes composants réutilisables pour assurer la cohérence graphique ;\ndes espaces et marges harmonisés afin d'améliorer la respiration visuelle ;\nun design responsive pouvant être adapté aux différentes tailles d'écran.\n\nL'ensemble de la maquette a été conçu dans une logique d'amélioration de l'expérience utilisateur tout en conservant une identité institutionnelle professionnelle.",
    category: "design",
    tags: ["UI/UX", "Figma", "Prototype", "Stage"],
    technologies: ["Figma"],
    image: "/images/projects/projet-2/page_accueil_Anpe.jpg",
    images: [
      "/images/projects/projet-2/page_accueil_Anpe.jpg",
      "/images/projects/projet-2/Page_actualité.jpg",
      "/images/projects/projet-2/A-propos.jpg",
      "/images/projects/projet-2/A_propos.jpg",
      "/images/projects/projet-2/Actualité.jpg",
      "/images/projects/projet-2/Centre.jpg",
      "/images/projects/projet-2/Page_contact.jpg",
      "/images/projects/projet-2/Nord.jpg",
      "/images/projects/projet-2/Sud.jpg",
      "/images/projects/projet-2/Formation_en_Technique_de_Recherche_Emploi_(TRE).jpg",
      "/images/projects/projet-2/Formation_en_Valorisation_du_Poste_de_Travail_(VPT).jpg",
      "/images/projects/projet-2/Frame_Formation_en_Technique d’Insertion_par_Emploi_Indépendant_(TIPEI).jpg",
      "/images/projects/projet-2/Renforcement_des_Capacités_des_Demandeurs_Emploi.jpg",
    ],
    liveUrl: "https://www.figma.com/proto/JOiVeCrDex7qeQe1SWou9z/login--Community-?node-id=526-693&p=f&t=7HSazNhxqcPhAceh-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=526%3A1363&hide-ui=1",
    featured: true,
    year: 2025,
  },
  {
    id: "projet-3",
    title: "Nom du Projet 3",
    subtitle: "Application mobile",
    description:
      "Une application mobile cross-platform avec un design soigné.",
    longDescription:
      "Description détaillée de l'application mobile. Parlez des fonctionnalités, de l'architecture, du design system et du déploiement.",
    category: "mobile",
    tags: ["Mobile", "React Native", "UI Design"],
    technologies: ["React Native", "Firebase", "Figma"],
    image: "/images/projects/project3.jpg",
    images: [
      "/images/projects/project3.jpg",
      "/images/projects/project3.jpg",
    ],
    githubUrl: "https://github.com/TIDJANIFadil",
    featured: false,
    year: 2024,
  },
  {
    id: "projet-4",
    title: "Robbie-lens-Photographie",
    subtitle: "Site vitrine pour photographe",
    description:
      "Site web vitrine pour Robbie Lens, photographe professionnelle, présentant son portfolio et ses services.",
    longDescription:
      "Site web vitrine réalisé pour Robbie Lens, une photographe professionnelle souhaitant présenter son travail en ligne. Le site a été conçu avec une identité visuelle épurée mettant en valeur les photos, avec un design responsive adapté à tous les écrans.\n\nDéveloppé avec HTML et CSS natifs, le site propose trois pages (Accueil, À propos, Portfolio) avec une galerie d'images, un formulaire de contact et des liens vers les réseaux sociaux. Le design minimaliste met l'accent sur les photographies sans distraction.\n\nCe projet m'a permis de travailler sur un cas concret de site vitrine pour un professionnel créatif, en accordant une attention particulière à la mise en valeur des visuels et à l'expérience utilisateur.",
    category: "web",
    tags: ["HTML", "CSS", "UI/UX", "Responsive"],
    technologies: ["HTML5", "CSS3", "Figma"],
    image: "/images/projects/projet-4/page_accueil_Robbie_Lens.png",
    images: [
      "/images/projects/projet-4/page_accueil_Robbie_Lens.png",
      "/images/projects/projet-4/page_portfolio_Robbie_Lens.png",
      "/images/projects/projet-4/page_à_propos_Robbie_Lens.png",
    ],
    liveUrl: "https://robbie-lens-photographie-255lmo8mc-fadil9.vercel.app",
    featured: false,
    year: 2024,
  },
  {
    id: "projet-5",
    title: "Nom du Projet 5",
    subtitle: "Dashboard analytics",
    description:
      "Un tableau de bord interactif avec des visualisations de données.",
    longDescription:
      "Description détaillée du dashboard. Parlez des choix techniques, des bibliothèques de visualisation utilisées et de l'expérience utilisateur.",
    category: "web",
    tags: ["Dashboard", "Data Viz", "React"],
    technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/project5.jpg",
    images: [
      "/images/projects/project5.jpg",
      "/images/projects/project5.jpg",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/TIDJANIFadil",
    featured: false,
    year: 2024,
  },
  {
    id: "projet-6",
    title: "Maquette Application",
    subtitle: "Design system complet",
    description:
      "Création d'un design system complet avec tous les composants.",
    longDescription:
      "Description détaillée du design system. Parlez de la création des composants, de la documentation, des variantes et de l'implémentation.",
    category: "design",
    tags: ["Design System", "Composants", "Figma"],
    technologies: ["Figma", "Storybook", "React"],
    image: "/images/projects/project6.jpg",
    images: [
      "/images/projects/project6.jpg",
      "/images/projects/project6.jpg",
    ],
    featured: false,
    year: 2024,
  },
];
