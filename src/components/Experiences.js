import React from 'react';
import './Experiences.css';  // Le CSS doit être correctement importé



const experiences = [
  {
    title: "Contrat de professionnalisation - Assistant communication & marketing - Market Shop - Hénin-Beaumont",
    date: "Septembre 2022 - Septembre 2024",
    missions: [
      
      "Gestion des sites e-commerce (WordPress & PrestaShop)",
      "Fiches produits et contenu web : Rédaction de fiches produits dans le Backoffice Prestashop, création de pages catégories et de contenus adaptés aux utilisateurs, optimisés pour le SEO.",
      "Articles de blog : Rédaction et mise en ligne d'articles sur le blog automobile Actuauto.fr, renforçant le positionnement de l’entreprise.",
      "SEO & optimisation : Création de contenus optimisés pour le SEO. Recherche de mots-clés via Ubersuggest et Semrush, analyse du positionnement et mise en place d'un maillage interne.",
      "Création visuelle : Conception de visuels pour réseaux sociaux, newsletters et le site mongrossisteauto.com.",
      "Gestion des campagnes marketing : Élaboration de stratégies de communication pour des événements tels que les Soldes, French Days, Black Friday, etc. Utilisation de Trello pour la gestion de projet.",
      "Production de contenu vidéo : Conception de scripts, tournage, montage et mise en ligne de vidéos pour TikTok et Instagram et Youtube.",
      "Création et gestion de sites web : Conception de trois sites pour Avenir Carrosserie en HTML, CSS, JavaScript et WordPress, dont un multisite pour une gestion optimisée.",
      "Optimisation SEO : Mise en place des bonnes pratiques SEO pour améliorer la visibilité sur les moteurs de recherche."
    ]
  },
  {
    title: "Alternance Webmaster Idées B Création - Orchies",
    date: "Septembre 2021 - Août 2022",
    missions: [
      "Stratégie de communication digitale : Gestion et optimisation des campagnes sur Facebook, Instagram, et via emailing pour accroître la visibilité et l'engagement de la marque.",
      "Maquettage et conception : Création de maquettes pour les sites web et fiches produits, en veillant à l’ergonomie et à l'expérience utilisateur.",
      "Référencement SEO & SEA : Mise en place de stratégies de référencement naturel (SEO) et payant (SEA) pour améliorer le positionnement des sites et générer du trafic qualifié",
      "Gestion des sites E-Commerce : Supervision complète des plateformes e-commerce sous WordPress et PrestaShop, de la mise à jour à l’optimisation des performances.",
    ]
  },
  
      
      {
        title: "Stage - Développeur Web chez Logiciel Bestt - Amiens",
        date: "Novembre 2020 - Février 2021",
        missions: [
          "Développement full-stack : Réalisation de projets web en utilisant diverses technologies, notamment Symfony pour la création de requêtes complexes, ReactJS pour la conception de formulaires dynamiques, et WordPress pour le développement de templates sur mesure.",
          "Optimisation des interfaces et des performances : Création de templates réactifs et esthétiques avec HTML, CSS et JavaScript, en veillant à offrir une expérience utilisateur fluide et un design optimisé.",
          "Tests fonctionnels et qualité : Mise en place de tests fonctionnels en Python pour garantir la robustesse et la fiabilité des applications.",
          
        ]
      },
      {
        title: "CEO - Les Petits Paniers",
        date: "Mars 2018 - Décembre 2019",
        missions: [
          "Développement et gestion de la stratégie digitale : Pilotage des campagnes sur Facebook, Instagram, et email marketing.",
          "Optimisation de l'expérience client et gestion du site web : Gestion complète des commandes et du suivi client. Gestion du site wordpress, mise à jour, SEO, création produits.",
          "Innovation et partenariats : Création de nouveaux services innovants et démarchage actif de producteurs locaux, élargissant l'offre et renforçant le positionnement de la marque sur le marché..",
          "Valorisation des produits : Organisation de shootings photos professionnels pour sublimer les produits, améliorer leur présentation et renforcer l’image de marque."
        ]
      },
    ];
  
    

const Experiences = () => {
  return (
    <section className="experiences-section">
      <h2 className="experiences-title">Mes expériences</h2>
      <div className="cards-grid">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.title}</h3>
            <p>{experience.date}</p>
            <div className="missions">
              <ul>
                {experience.missions.map((mission, i) => (
                  <li key={i}>{mission}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experiences;