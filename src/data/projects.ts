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
    image: "/images/projects/projet-1/capture_connexion.png",
    images: [
      "/images/projects/projet-1/capture_connexion.png",
      "/images/projects/projet-1/dashboard_admin_par_defaut.png",
      "/images/projects/projet-1/dashboard_admin_click.png",
      "/images/projects/projet-1/Dashboard_etudiant.png",
      "/images/projects/projet-1/mes_demandes_par_defaut.png",
      "/images/projects/projet-1/mes_demandes_click.png",
      "/images/projects/projet-1/traiter_demande_pret.png",
      "/images/projects/projet-1/notification.png",
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
    title: "Refonte du site de l'Anat",
    subtitle: "Design UI/UX du site de l'Anat",
    description:
      "Refonte de l'interface utilisateur du site de l'Agence Nationale d'Aménagement du Territoire (ANAT) afin d'améliorer la navigation, la lisibilité et l'expérience utilisateur globale. Réalisée sur Figma avec une approche centrée sur l'utilisateur.",
    longDescription:
      "Ce projet consiste en la refonte complète de l'interface du site web de l'Agence Nationale d'Aménagement du Territoire (ANAT). L'objectif était de moderniser une plateforme institutionnelle vieillissante en proposant un design plus clair, plus accessible et mieux structuré pour les différents profils d'utilisateurs.\n\nDémarche de conception\n\nLe projet a suivi une approche de conception centrée sur l'utilisateur (User-Centered Design), en passant par plusieurs étapes clés.\n\nAnalyse de l'existant\n\nJ'ai commencé par auditer le site actuel de l'ANAT afin d'identifier ses points faibles : navigation peu intuitive, hiérarchie visuelle insuffisante, manque de cohérence graphique entre les pages, et une présentation des contenus peu adaptée aux besoins des visiteurs.\n\nWireframes et architecture de l'information\n\nSur la base de cet audit, j'ai conçu des wireframes basse fidélité pour redéfinir l'architecture de l'information, simplifier les parcours utilisateurs et améliorer la lisibilité des contenus clés (actualités, annonces, documents, FAQ, multimédia).\n\nPrototypage et design final\n\nJ'ai ensuite développé un prototype interactif sur Figma, permettant de simuler les principaux parcours et de valider les interactions avant la réalisation de la maquette haute fidélité. Le design final repose sur une palette de couleurs cohérente avec l'identité institutionnelle de l'ANAT, une typographie lisible, une grille de mise en page harmonieuse et des composants réutilisables garantissant la cohérence graphique sur l'ensemble des pages.\n\nPages redesignées\n\nLa refonte couvre les pages principales du site : Accueil, Actualités, Annonces, Documents, FAQ, Multimédia et Contact, chacune repensée pour offrir une expérience fluide et professionnelle.",
    category: "design",
    tags: ["UI/UX", "Figma", "Prototype", "Stage"],
    technologies: ["Figma"],
    image: "/images/projects/projet-3/Anat.png",
    images: [
      "/images/projects/projet-3/Anat.png",
      "/images/projects/projet-3/Accueil.png",
      "/images/projects/projet-3/Actualités.png",
      "/images/projects/projet-3/Annonces.png",
      "/images/projects/projet-3/Documents.png",
      "/images/projects/projet-3/FAQ.png",
      "/images/projects/projet-3/Multimédia.png",
      "/images/projects/projet-3/Contact.png",
    ],
    liveUrl: "https://www.figma.com/design/5CflYxfJksuyUe3l5DY3hC/Refonte-ANAT?node-id=0-1&p=f&t=iUL7UpT1pjWWhUS8-0",
    featured: true,
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
    title: "Refonte du site de l'ARE Bénin",
    subtitle: "Design UI/UX du site de l'ARE",
    description:
      "Refonte de l'interface utilisateur du site de l'Autorité de Régulation de l'Electricité (ARE) du Bénin, visant à moderniser la plateforme institutionnelle, améliorer la navigation et rendre l'information plus accessible aux citoyens et professionnels du secteur.",
    longDescription:
      "Ce projet consiste en la refonte complète de l'interface du site web de l'Autorité de Régulation de l'Electricité (ARE) du Bénin. L'objectif était de transformer une plateforme institutionnelle peu lisible en un site moderne, structuré et accessible à tous les profils d'utilisateurs : citoyens, professionnels du secteur énergétique et partenaires institutionnels.\n\nDémarche de conception\n\nLe projet a suivi une approche de conception centrée sur l'utilisateur (User-Centered Design), articulée autour de plusieurs étapes clés.\n\nAnalyse de l'existant\n\nJ'ai débuté par un audit complet du site actuel de l'ARE afin d'identifier ses lacunes : architecture de l'information confuse, navigation peu intuitive, hiérarchie visuelle insuffisante, manque de cohérence graphique et difficulté d'accès aux documents et informations réglementaires.\n\nWireframes et architecture de l'information\n\nSur la base de cet audit, j'ai conçu des wireframes basse fidélité pour restructurer l'ensemble du site, en simplifiant les parcours utilisateurs et en organisant clairement les contenus clés : présentation de l'institution, actualités, documentation réglementaire, informations du secteur, FAQ et contact.\n\nPrototypage et design final\n\nJ'ai ensuite développé un prototype interactif sur Figma pour valider les interactions et les parcours avant la réalisation de la maquette haute fidélité. Le design final s'appuie sur une identité visuelle cohérente avec le positionnement institutionnel de l'ARE, une typographie claire, une grille de mise en page rigoureuse et des composants réutilisables assurant la cohérence sur toutes les pages.\n\nPages redesignées\n\nLa refonte couvre les pages principales : Présentation, Organisation Structurelle, Nos Actualités, Informations du Secteur, Documentation, FAQs et Contact, chacune repensée pour offrir une expérience fluide, professionnelle et adaptée aux besoins des utilisateurs.",
    category: "design",
    tags: ["UI/UX", "Figma", "Prototype", "Stage"],
    technologies: ["Figma"],
    image: "/images/projects/projet-5/Présentation.png",
    images: [
      "/images/projects/projet-5/Présentation.png",
      "/images/projects/projet-5/Organisation_Structurelle.png",
      "/images/projects/projet-5/Nos_actualites.png",
      "/images/projects/projet-5/Informations_du_secteur.png",
      "/images/projects/projet-5/Documentation.png",
      "/images/projects/projet-5/FAQs.png",
      "/images/projects/projet-5/Contact.png",
    ],
    liveUrl: "https://www.figma.com/design/TXLWqQmmaCuQ3DrrYS5WgX/Refonte-Are?node-id=0-1&p=f&t=iUL7UpT1pjWWhUS8-0",
    featured: true,
    year: 2024,
  },
  {
    id: "projet-6",
    title: "Application mobile e-commerce ShopExpress",
    subtitle: "Maquette Application mobile e-commerce ShopExpress",
    description:
      "Conception d'une maquette complète d'application mobile e-commerce sur Figma, couvrant l'ensemble du parcours utilisateur : onboarding, navigation, fiche produit, panier, paiement et gestion du compte.",
    longDescription:
      "Ce projet consiste en la conception d'une maquette haute fidélité d'une application mobile e-commerce baptisée ShopExpress. L'objectif était de concevoir une expérience d'achat mobile fluide, intuitive et visuellement soignée, en couvrant l'intégralité du parcours utilisateur.\n\nDémarche de conception\n\nLe projet a suivi une approche centrée sur l'utilisateur, en passant par la définition des flux, la conception des wireframes puis la réalisation des maquettes haute fidélité sur Figma.\n\nOnboarding et authentification\n\nL'application propose un écran de démarrage animé, des slides d'introduction présentant les fonctionnalités clés, ainsi que des écrans de connexion, d'inscription et de récupération de mot de passe pensés pour être simples et rassurants.\n\nNavigation et découverte produits\n\nL'écran d'accueil met en avant les promotions et catégories populaires. Un système de recherche avec filtres avancés permet à l'utilisateur de trouver rapidement ce qu'il cherche. Les pages catégories et fiches produits ont été conçues pour maximiser l'engagement et faciliter la décision d'achat.\n\nParcours d'achat\n\nLe tunnel d'achat couvre le panier, la sélection des adresses de livraison, le choix du moyen de paiement (cartes bancaires) et la confirmation de commande, avec un design clair et rassurant à chaque étape.\n\nGestion du compte\n\nL'espace utilisateur regroupe le profil, les commandes, les favoris, les adresses, les cartes bancaires, les notifications, le chat support, ainsi que les pages légales (conditions d'utilisation, politique de confidentialité). Chaque écran a été conçu avec cohérence pour offrir une expérience unifiée et professionnelle.",
    category: "design",
    tags: ["UI/UX", "Figma", "Mobile", "E-commerce"],
    technologies: ["Figma"],
    image: "/images/projects/projet-6/Ecran_accueil.png",
    images: [
      "/images/projects/projet-6/Ecran_accueil.png",
      "/images/projects/projet-6/Ecran_demarrage.png",
      "/images/projects/projet-6/Ecran_slide_1.png",
      "/images/projects/projet-6/Ecran_slide_2.png",
      "/images/projects/projet-6/Ecran_slide_3.png",
      "/images/projects/projet-6/Ecran_connexion.png",
      "/images/projects/projet-6/Ecran_inscription.png",
      "/images/projects/projet-6/Mot_de_passe_oublie.png",
      "/images/projects/projet-6/Email_envoye.png",
      "/images/projects/projet-6/Page_categorie.png",
      "/images/projects/projet-6/Recherche_et_Filtres.png",
      "/images/projects/projet-6/Fiche_produit.png",
      "/images/projects/projet-6/Favoris.png",
      "/images/projects/projet-6/Page_panier.png",
      "/images/projects/projet-6/Adresses_de_livraisons.png",
      "/images/projects/projet-6/Moyens_de_paiement.png",
      "/images/projects/projet-6/Valider_la_commande.png",
      "/images/projects/projet-6/Confirmation_de_commande.png",
      "/images/projects/projet-6/Profil_Utilisateur.png",
      "/images/projects/projet-6/Mes_commandes.png",
      "/images/projects/projet-6/Mes_Adresses.png",
      "/images/projects/projet-6/Mes_Cartes_Bancaires.png",
      "/images/projects/projet-6/Notifications.png",
      "/images/projects/projet-6/chat.png",
      "/images/projects/projet-6/A_Propos.png",
      "/images/projects/projet-6/Aide_et_support.png",
      "/images/projects/projet-6/Condition_utilisation.png",
      "/images/projects/projet-6/Politique_confidentialite.png",
    ],
    liveUrl: "https://www.figma.com/design/NuQz8xJhTNSdtuwj6exeWD/Projet-dev-app-mobile-e-commerce?node-id=0-1&p=f&t=iUL7UpT1pjWWhUS8-0",
    featured: true,
    year: 2025,
  },
];
