import React, { useState } from 'react';
import './Portfolio.css';
import { FaEye, FaGithub, FaFilePdf, FaLink } from 'react-icons/fa';
import Modal from 'react-modal';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Développement web'); // Catégorie active
  const [modalIsOpen, setModalIsOpen] = useState(false); // État pour le modal
  const [modalImages, setModalImages] = useState([]); // Images à afficher dans le modal
  const [selectedImage, setSelectedImage] = useState(''); // Image sélectionnée pour agrandissement

  // Fonction pour ouvrir le modal avec une grille d'images
  const openGridModal = (images) => {
    setModalImages(images);
    setModalIsOpen(true);
    setSelectedImage(''); // Pas d'image sélectionnée par défaut
  };

  // Fonction pour agrandir une image dans le modal
  const openImageInModal = (image) => {
    setSelectedImage(image);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setModalIsOpen(false);
    setModalImages([]);
    setSelectedImage('');
  };

  const categories = {
    'Développement web': [
      {
        title: 'Thème d\'agence immobilière sur mesure',
        description: 'Développement d\'un thème personnalisé pour une agence immobilière fictive. Gestion des biens immobiliers via un plugin WordPress que j\'ai conçu sur mesure.',
        image: '/images/agencia.jpg',
        github: 'https://github.com/Freddis002/Theme-agencia-wordpress',
      },
      {
        title: 'Site vitrine pour une agence d\'intérim - Talentup',
        description: 'Conception d\'un site vitrine pour l\'agence d\'intérim Talentup, réalisé durant mon stage.',
        image: '/images/talentup.jpg',
        github: 'https://github.com/Freddis002/Templates',
      },
      {
        title: 'Site vitrine pour une agence d\'intérim - Interim Power',
        description: 'Développement d\'un site vitrine pour l\'agence d\'intérim Interim Power, conçu pendant mon stage.',
        image: '/images/interimpower.jpg',
        github: 'https://github.com/Freddis002/Templates',
      },
      {
        title: 'Maquette et développement d\'un site - L\'âge de bière',
        description: 'Création d\'une maquette et développement complet du site l\'âge de bière dans le cadre de mes cours de design.',
        image: '/images/imagelagedebiere.png', // Image associée au projet
        pdf: '/files/agedebiere.pdf', // Fichier PDF du projet
        github: 'https://github.com/Freddis002/Projet-css',
      },
      {
        title: 'Première version de mon portfolio personnel',
        description: 'Développement de la première version de mon portfolio en HTML, CSS et JavaScript.',
        image: '/images/portfolioV1.png',
        github: 'https://github.com/Freddis002/Portfolio-Frederic-Dislaire',
        website: 'https://freddis002.github.io/Portfolio-Frederic-Dislaire/',
      },
      {
        title: 'Avenir Carrosserie',
        description: 'Création d\'un multisite pour l\'entreprise Avenir Carrosserie sous WordPress.',
        image: '/images/avenircarrosserie.png',
        website: 'https://www.avenircarrosserie.fr/',
      },
    ],
    'Réseaux Sociaux & Marketing Digital': [
      {
        title: 'Gestion de la page Facebook du Chtiz Poker Club ',
        description: 'Gestion de la page Facebook du Chtiz Poker Club, comptant plus de 1 000 abonnés. Création de contenu pour mettre en avant les résultats des membres lors des événements organisés en partenariat avec Winamax, ainsi que la promotion des activités et tournois internes du club. Objectif : augmenter l’engagement de la communauté et renforcer la visibilité du club.',
        image: '/images/chtizpokerclub1.png',
        website: 'https://www.facebook.com/profile.php?id=100064535598070',
      },
      {
        title: 'Gestion du compte Facebook et Instagram de Mongrossisteauto.com',
        description: 'Gestion des comptes Facebook et Instagram de Mongrossisteauto.com. Création de contenu, planification des publications, et développement de stratégies pour accroître la visibilité et l\'engagement des abonnés. Suivi des performances des campagnes des offres commerciales',
        image: '/images/bannierefbmga.png',
        website: 'https://www.facebook.com/Mongrossisteauto',
      },
      {
        title: 'Gestion du compte LinkedIn',
        description: 'Gestion du compte LinkedIn pour la publication d\'articles et la promotion des offres commerciales. Création de contenu professionnel.',
        image: '/images/lkmga.png',
        
      },
      {
        title: 'Stratégies de communication - Jeu concours',
        description: 'Création de visuels originaux pour promouvoir un jeu concours, en alignant le design avec les objectifs marketing et l\'identité visuelle de la marque. Les visuels ont été conçus pour capter l\'attention du public et encourager la participation, tout en augmentant la portée et l\'engagement sur les réseaux sociaux.',
        image: '/images/jeuconcours.jpg',
        
      },
      {
        title: 'Stratégie de communication - Jeu concours de Noel',
        description: 'Conception de visuels personnalisés pour un jeu concours de Noël, en cohérence avec l\'esprit festif et la charte graphique de la marque. Les visuels ont été créés pour attirer l\'attention, renforcer l\'engagement des utilisateurs et maximiser la participation à l’événement promotionnel',
        image: '/images/jeuconcours2.jpg',
       
      },
      {
        title: 'Création de visuels pour la campagne des soldes d\'été',
        description: 'Conception de visuels attractifs et percutants pour la campagne des soldes d\'été. Les designs ont été créés pour capter l’attention des clients et booster les conversions, tout en respectant l’identité de marque. ',
        image: '/images/soldes.jpg',
       
      },
      {
        title: 'Création de visuels pour les ventes flash des soldes',
        description: 'Réalisation de visuels destinés aux ventes flash pendant les soldes, conçus pour mettre en valeur les offres de manière simple et attrayante.',
        image: '/images/produit.jpg',
        website: 'https://www.facebook.com/Mongrossisteauto/photos/pb.100063773151272.-2207520000/3347462678900444/?type=3'
       
      },
    
    ],
    'Design & Création visuelle': [
      {
        title: 'Projet de création graphique - Reproduction de l\'application mobile Spotify',
        description: 'Réalisation d\'un projet de création graphique sur Adobe XD, consistant à reproduire l\'interface mobile de l\'application Spotify. Ce projet a permis de renforcer mes compétences en design d\'interface utilisateur pour mobile, en respectant les principes d\'ergonomie et l\'identité visuelle de l\'application ',
        image:'/images/test.png',
        pdf: '/files/maquette-spotify.pdf',
      },
      {
        title: 'Projet de création graphique - Maquette du site web Caprelli',
        description: 'Conception d\'une maquette pour le site web Caprelli dans le cadre d\'un projet de design,réalisé sur Adobe XD dans le cadre d’un cours de design. Ce projet vise à créer une interface utilisateur moderne et intuitive, avec une attention particulière portée à l\'esthétique, l\'ergonomie, et l\'expérience utilisateur.',
        image:'/images/maquette.jpg',
        pdf: '/files/maquette-caprelli.pdf',
      },
     
      {
        title: 'Création graphique pour les annonces de tournois - Chtiz Poker Club',
        description: 'Réalisation de visuels pour promouvoir les tournois de poker du Chtiz Poker Club sur Facebook. Ce projet avait pour objectif de créer des annonces graphiques attrayantes et informatives, alignées avec l\'identité du club, afin de maximiser la visibilité des événements et d\'encourager la participation des membres',
        image:'/images/cpc.png',
        
     
      },
      {
        title: 'Création de la newsletter pour les soldes 2023 - Mongrossisteauto.com',
        description: 'Conception de la newsletter annonçant les soldes 2023 pour Mongrossisteauto.com. </brLe projet visait à créer un design attractif et engageant, aligné sur l\'identité visuelle de la marque, afin d’informer les clients et de maximiser l\'impact des ventes pendant cette période clé.',
        image:'/images/news1.jpg',
        pdf:'/files/newsletter.pdf',
     
      },
      {
        title: 'Création d\'affiche pour l\'Open du Chtiz Poker Club ',
        description: 'Conception d\'une affiche pour promouvoir l\'Open du Chtiz Poker Club. L\'objectif de ce projet était de créer un visuel percutant et informatif, reflétant l\'identité du club et attirant l\'attention des participants potentiels pour cet événement majeur.',
        image:'/images/evenementcpc-1.png',
        pdf:'/files/evenementcpc.pdf',
     
      },
   
    ],
    'Autres compétences': [
      {
        title: 'Photographie de voyage',
        description: 'Série de photographies capturées lors de mes voyages, mettant en avant ma passion pour les prises de vue en contre-plongée. J\'explore différentes perspectives pour offrir une vision unique des paysages et des moments capturés',
        image:'/images/couvalbum.png',
        pdf:'/files/Photos-1.pdf',
      },
      
      {
        title: 'projet jeu des 4 familles midjourney ',
        description: 'Conception d\'un jeu de cartes des 4 familles sur le thème de l\'horreur, réalisé avec MidJourney. Les illustrations ont été générées dans un style photoréaliste, apportant une ambiance unique et immersive à chaque famille de cartes. ',
        image:'/images/midfred.png',
        pdf:'/files/cartesmidjourney.pdf',
      },
      {
        title: 'Création d\'avatars pour LinkedIn',
        description: 'Réalisation d\'avatars personnalisés pour des profils LinkedIn, conçus pour refléter une image professionnelle tout en apportant une touche unique et créative.',
        image:'/images/avatar3.png',
        
      },
    ],
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-categories">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`portfolio-category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
  
      <div className="portfolio-grid">
        {categories[activeCategory].map((project, index) => (
          <div key={index} className="portfolio-card">
            <div className="portfolio-image-container">
              {project.images ? (
                <img
                  src={project.images[0]} // Afficher la première image en tant qu'aperçu
                  alt={project.title}
                  className="portfolio-image"
                  onClick={() => openGridModal(project.images)} // Ouvrir plusieurs images en grille
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                  onClick={() => openGridModal([project.image])} // Ouvrir une seule image
                />
              )}
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
  
              <div className="portfolio-icons">
                <FaEye onClick={() => openGridModal(project.images || [project.image])} className="icon" />
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                  </a>
                )}
  
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <FaLink className="icon" />
                  </a>
                )}
  
                {project.pdf && (
                  <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                    <FaFilePdf className="icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Modal pour afficher les images */}
<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  className="portfolio-modal"
  overlayClassName="portfolio-modal-overlay"
>
  <div className="modal-content" onClick={closeModal}>
    {selectedImage ? (
      <img
        src={selectedImage}
        alt="Agrandissement"
        className="modal-image"
        onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant sur l'image
      />
    ) : (
      <div className="image-grid">
        {modalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Grid item ${index}`}
            className="grid-image"
            onClick={() => openImageInModal(image)} // Agrandir l'image au clic
          />
        ))}
      </div>
    )}
    <button onClick={closeModal} className="modal-close-button">Fermer</button>
  </div>
</Modal>
    </div>
  );
  
}

export default Portfolio;