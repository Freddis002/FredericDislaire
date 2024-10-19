import React, { useState,useRef } from 'react';
import './Parcours.css';  // Fichier CSS pour les styles
import { gsap } from 'gsap';

const schools = [
  {
    name: "EFFICOM",
    logo: "/efficom.png",  // Remplace par le chemin correct de l'image
    details: "Mastère en management de projet digital (2022 - 2024)",
  },
  {
    name: "IUT Lens",
    logo: "/iutlens.png",  // Remplace par le chemin correct de l'image
    details: "LP Créaweb - Métiers du numérique conception, rédaction et réalisation web (2021 - 2022)",
  },
  {
    name: "AFPA",
    logo: "/afpa.png",  // Remplace par le chemin correct de l'image
    details: "Formation dévéloppeur web & web mobile bac+2 (2020 - 2021)",
  },
  {
    name: "Université Polytechnique des Hauts-de-France",
    logo: "/iuthautsdefrance.png",  // Remplace par le chemin correct de l'image
    details: "DUT techniques de commercialisation (2013 - 2015)",
  },
  
];

const Parcours = () => {
  const [activeSchool, setActiveSchool] = useState(null);
  const detailsRef = useRef([]);

  const handleLogoClick = (school, index) => {
    if (activeSchool === school) {
      setActiveSchool(null); // Cache la formation si déjà ouverte
    } else {
      setActiveSchool(school); // Affiche la formation associée
      // Animation d'apparition
      gsap.fromTo(detailsRef.current[index], 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power1.out' }
      );
    }
  };

  return (
    <section className="parcours-section">
      <h2 className="parcours-title">Mon parcours</h2>
      <div className="school-logos">
        {schools.map((school, index) => (
          <div key={index} className="school-container">
            <img 
              src={school.logo} 
              alt={`${school.name} logo`} 
              className="school-logo"
              onClick={() => handleLogoClick(school, index)} 
            />
            <div 
              ref={(el) => detailsRef.current[index] = el}
              className={`school-details ${activeSchool === school ? 'active' : ''}`}
            >
              {school.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parcours;
