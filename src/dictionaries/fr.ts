import { site, techStack, projects, pricingTiers, addons, stats, pricingNiches } from "@/lib/content";

export const fr = {
  metadata: {
    title: "Nervure — La structure derrière la forme",
    description: "Agence de design et développement. La structure invisible qui tient la forme visible — métaphore puissante du travail de design et de développement : l'ossature derrière l'apparence.",
  },
  nav: [
    { label: "À propos", href: "/fr#about" },
    { label: "Services", href: "/fr#services" },
    { label: "Projets", href: "/fr#work" },
    { label: "Tarifs", href: "/fr#pricing" },
  ],
  menu: {
    servicesTitle: "NOS SERVICES SPÉCIALISÉS",
  },
  hero: {
    status: "Ouvert aux nouveaux projets",
    weAreThe: "Nous sommes les",
    rotatingWords: ["DÉVELOPPEURS", "DESIGNERS", "STRATÈGES", "BÂTISSEURS"],
    description: "L'ossature derrière l'apparence. Nous construisons des expériences numériques alliant esthétique naturaliste et performance technique.",
    cta: "DISCUTONS-EN",
    bottomStrap: "Agence de design et développement. La structure invisible qui tient la forme visible.",
  },
  about: {
    tag: "Qui Sommes-Nous",
    heading1: "Nous créons des expériences numériques qui ",
    headingHighlight: "allient esthétique",
    heading2: " et fonctionnalité.",
    p1: "Nervure est un collectif spécialisé de designers et de développeurs web. Nous sommes reconnus comme experts en création d'expériences numériques, dédiés à bâtir des identités en ligne uniques avec une esthétique naturaliste et technique.",
    p2: "Du concept initial au déploiement final, nous nous concentrons sur chaque détail — en veillant à ce que votre site soit rapide, accessible et d'une beauté saisissante. Nous ne nous contentons pas de construire des sites ; nous concevons l'ossature derrière l'apparence.",
    stats: [
      { value: "5+", label: "Années d'Expérience" },
      { value: "50+", label: "Projets Livrés" },
      { value: "24/7", label: "Support Technique" },
      { value: "100%", label: "Clients Satisfaits" },
    ],
  },
  tech: {
    tag: "Les technologies que nous utilisons",
    heading: "Technologies avec lesquelles nous travaillons",
  },
  services: {
    tag: "Nos Services",
    heading1: "TOUS VOS ",
    headingHighlight: "besoins numériques",
    description: "Agence de premier plan offrant un design de précision, un développement sur mesure, et une optimisation continue pour la croissance de votre entreprise.",
    cta: "PRENDRE RENDEZ-VOUS",
    items: [
      { id: "websites", title: "Sites Web", description: "Sites marketing haute performance conçus pour convertir.", details: { overview: "Votre site web est votre vitrine numérique. Nous le rendons mémorable et performant.", features: ["Next.js & Performance", "Optimisation du taux de conversion", "Web design sur mesure", "Gestion de contenu simplifiée"] } },
      { id: "software", title: "Développement Logiciel", description: "Applications web et bureau évolutives.", details: { overview: "Nous développons des solutions logicielles robustes et évolutives pour répondre à vos besoins complexes.", features: ["Applications Full-stack", "Micro-services", "APIs robustes", "Maintenance & Evolution"] } },
      { id: "automation", title: "Outils d'Automatisation", description: "Automatisations sur mesure et outils internes.", details: { overview: "Optimisez votre temps en automatisant les tâches répétitives avec nos outils sur mesure.", features: ["Intégration d'outils", "Scripts d'automatisation", "Outils internes personnalisés", "Optimisation de workflow"] } },
      { id: "ads", title: "Google & Meta Ads", description: "Stratégies d'acquisition payantes qui génèrent du ROI.", details: { overview: "Maximisez votre retour sur investissement avec des campagnes publicitaires ciblées et optimisées.", features: ["Gestion de campagnes", "A/B Testing", "Analyse de performance", "Ciblage d'audience"] } },
      { id: "graphics", title: "Créations Graphiques", description: "Création de marque, visuels publicitaires et réseaux sociaux.", details: { overview: "Donnez une identité visuelle forte à votre marque avec nos créations graphiques uniques.", features: ["Branding & Logos", "Supports publicitaires", "Design réseaux sociaux", "Identité visuelle"] } },
      { id: "seo", title: "Optimisation SEO", description: "SEO technique et contenu pour une croissance durable.", details: { overview: "Améliorez votre visibilité sur les moteurs de recherche avec notre approche SEO holistique.", features: ["Audit SEO technique", "Recherche de mots-clés", "Optimisation de contenu", "Stratégie de netlinking"] } },
    ]
  },
  works: {
    tag: "Réalisations",
    heading1: "Conçu avec ",
    headingHighlight: "Précision",
    viewAll: "Voir tous les Projets & Designs"
  },
  pricing: {
    tag: "Tarifs & Forfaits",
    heading1: "Investissements ",
    headingHighlight: "Transparents",
    description: "Tarification simple et transparente. Aucun frais caché. Nous construisons des systèmes évolutifs qui génèrent du ROI.",
    cta: "Commencer",
    popularBadge: "Le plus populaire",
    startingAt: "À partir de",
    currency: "€",
    unit: "/projet",
    tiers: {
      basic: {
        name: "Basique",
        price: "600",
        tagline: "Présence en ligne + confiance",
        features: [
          "Site de 5 pages (Accueil, Services, À propos, Contact, Galerie)",
          "Menu en ligne avec tarifs",
          "Intégration Google Maps",
          "Bouton de commande WhatsApp",
          "Configuration SEO de base",
          "Formulaire de contact/réservation",
        ],
      },
      standard: {
        name: "Standard",
        price: "1 500",
        tagline: "Engagement client + contrôle",
        features: [
          "Tout ce qui est dans Basique +",
          "Système de réservation de table en ligne",
          "Panneau d'administration pour mettre à jour le menu",
          "Gestion de la galerie photo",
          "Tableau de bord des demandes clients",
          "Section avis/témoignages",
          "Tableau de bord d'analyse de base",
        ],
      },
      premium: {
        name: "Premium",
        price: "4 000",
        tagline: "Système de génération de revenus",
        features: [
          "Tout ce qui est dans Standard +",
          "Système de commande en ligne (panier + paiement)",
          "Intégration de passerelle de paiement",
          "Tableau de bord de gestion des commandes",
          "Système de coupons/réductions",
          "Suivi simplifié des stocks",
          "1 mois de support marketing numérique",
        ],
      },
    },
    nichesTag: "Nous travaillons avec :",
    addonsHeading: "Boostez votre Croissance",
    addonsDescription: "Évoluez plus vite avec nos options mensuelles spécialisées.",
  },
  testimonials: {
    tag: "Témoignages",
    heading1: "Ne nous croyez pas ",
    headingHighlight: "sur parole",
    heading2: "",
    items: [
      {
        quote: "Nervure est de loin la meilleure agence de création de sites web. Ils ont transformé notre vieux site en une machine de conversion moderne. L'attention aux détails est exceptionnelle.",
        author: "Rahul Sharma",
        role: "CEO, TechFlow",
      },
      {
        quote: "Expérience incroyable avec Nervure. Ils ont tout de suite compris notre identité de marque et livré un produit qui a dépassé nos attentes. Je recommande vivement !",
        author: "Priya Patel",
        role: "Fondatrice, StartUp Solutions",
      },
      {
        quote: "Rapide, professionnel et extrêmement créatif. L'optimisation SEO à elle seule a doublé notre trafic organique en seulement deux mois.",
        author: "Amit Verma",
        role: "Directeur Marketing, GrowthHub",
      },
    ]
  },
  faq: {
    tag: "FAQ",
    heading1: "Vous avez des ",
    headingHighlight: "Questions ?",
    items: [
      {
        q: "Combien de temps prend un projet de site web chez Nervure ?",
        a: "Le délai dépend de la complexité. Un site vitrine basique de 5 pages prend généralement 7 à 10 jours, tandis que les sites d'entreprise standard prennent 2 à 3 semaines. Pour les plateformes complexes, cela peut prendre 4 à 8 semaines.",
      },
      {
        q: "Quel plan tarifaire est le meilleur pour mon entreprise ?",
        a: "Notre forfait 'Standard' est le plus populaire car il équilibre des fonctionnalités avancées avec un bon rapport coût/efficacité. Cependant, si vous cherchez un véritable système de génération de revenus, le plan 'Premium' est fait pour vous.",
      },
      {
        q: "Quelle est votre structure de paiement ?",
        a: "Nous demandons un acompte de 20 % pour lancer le projet et réserver votre place. Les 80 % restants ne sont dus qu'une fois le projet terminé avec succès et que vous êtes 100 % satisfait.",
      },
      {
        q: "Mon site web sera-t-il optimisé pour les mobiles et le SEO ?",
        a: "Absolument ! Tous les sites que nous concevons sont 100 % responsives sur tous les appareils. Nous intégrons également un SEO de base, garantissant que votre site est rapide et bien structuré.",
      },
      {
        q: "Offrez-vous un support après le lancement du site ?",
        a: "Oui ! Chaque projet inclut 1 mois de support technique gratuit. Ensuite, vous pouvez opter pour notre contrat de maintenance annuelle (AMC) à 15 % du coût du projet.",
      },
    ]
  },
  cta: {
    heading1: "Construisons ensemble ",
    headingHighlight: "une œuvre d'art.",
    button: "DÉMARRER UN PROJET",
  },
  footer: {
    contact: "Contact",
    socials: "Réseaux Sociaux",
    sitemap: "Plan du site",
    copyright: `© 2026 Nervure — La structure derrière la forme. Tous droits réservés.`,
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    businessCard: "Carte de Visite",
    works: "Travaux"
  },
  contact: {
    tag: "Contactez-nous",
    heading: "Parlons de votre prochain projet.",
    description: "Vous avez une idée ? Nous avons l'expertise. Remplissez le formulaire et nous vous répondrons sous 24 heures.",
    form: {
      name: "Nom complet",
      email: "Adresse e-mail",
      subject: "Sujet / Type de projet",
      subjects: [
        { label: "Sélectionnez un type de projet...", value: "" },
        { label: "Design Web & Développement", value: "web" },
        { label: "Solution Logicielle", value: "software" },
        { label: "Branding & Identité", value: "branding" },
        { label: "Autre", value: "other" },
      ],
      budgetLabel: "Budget du Projet",
      budgetOptions: [
        { label: "< 1k €", value: "under_1k" },
        { label: "< 2k €", value: "under_2k" },
        { label: "< 5k €", value: "under_5k" },
        { label: "5k+ €", value: "over_5k" },
      ],
      message: "Votre message",
      placeholderMessage: "Comment pouvons-nous vous aider ?",
      submit: "Envoyer le message",
      success: "Message envoyé avec succès ! Nous vous recontacterons très bientôt.",
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    info: {
      email: "hello@nervure.site",
      location: "Nantes, France",
    }
  },
  privacy: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 23 avril 2026",
    sections: [
      {
        title: "1. Collecte des Données",
        content: "Nous collectons les informations que vous nous fournissez directement via notre formulaire de contact, notamment votre nom, votre adresse e-mail et les détails de votre projet."
      },
      {
        title: "2. Utilisation des Données",
        content: "Vos données sont utilisées exclusivement pour répondre à vos demandes, gérer vos projets et améliorer nos services. Nous ne vendons jamais vos données à des tiers."
      },
      {
        title: "3. Conservation des Données",
        content: "Nous conservons vos données aussi longtemps que nécessaire pour fournir nos services ou pour satisfaire à nos obligations légales."
      },
      {
        title: "4. Vos Droits",
        content: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Contactez-nous à hello@nervure.site pour toute demande."
      }
    ]
  },
  terms: {
    title: "Conditions d'Utilisation",
    lastUpdated: "Dernière mise à jour : 23 avril 2026",
    sections: [
      {
        title: "1. Acceptation des Conditions",
        content: "En accédant à ce site, vous acceptez d'être lié par ces conditions d'utilisation et par toutes les lois et réglementations applicables."
      },
      {
        title: "2. Propriété Intellectuelle",
        content: "Tout le contenu de ce site, y compris les textes, graphiques, logos et codes, est la propriété de Nervure et est protégé par les lois sur la propriété intellectuelle."
      },
      {
        title: "3. Limitation de Responsabilité",
        content: "Nervure ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser les services de ce site."
      },
      {
        title: "4. Modifications",
        content: "Nervure se réserve le droit de modifier ces conditions à tout moment et sans préavis. Il est de votre responsabilité de les consulter régulièrement."
      }
    ]
  },
  portfolio: {
    tag: "Notre Portfolio",
    heading1: "Une sélection de nos ",
    headingHighlight: "meilleures réalisations",
    description: "Découvrez comment nous aidons nos clients à se démarquer avec des solutions numériques sur mesure, du design minimaliste au développement complexe.",
    cta: "Discuter d'un projet",
  }
};
