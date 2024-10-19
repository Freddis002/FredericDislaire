import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Footer: Informations de contact */}
      <div className="top-footer">
        <div className="footer-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Localisation : Basé à Arras, disponible pour des opportunités partout en France</p>

        </div>
        <div className="footer-item">
          <i className="fas fa-phone-alt"></i>
          <p>Téléphone: 06 01 31 30 49</p>
        </div>
        <div className="footer-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:dislaire.frederic@hotmail.fr" className="footer-text">dislaire.frederic@hotmail.fr</a>
        </div>
      </div>

      {/* Bottom Footer: Liens de navigation et logos */}
      <div className="footer">
  <div className="footer-container">
   

    <div className="footer-item">
      <h3 className="footer-title">Navigation</h3>
      <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#parcours">Parcours</a></li>
        <li><a href="#experiences">Expériences</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-item">
      <h3 className="footer-title">Télécharger</h3>
      <a href="\files\cvfredericdislaire.pdf" className="cv-button" download>Télécharger CV</a>
    </div>

    <div className="footer-item">
  <h3 className="footer-title">Réseaux sociaux</h3>
  <div className="social-icons">
    <a href="https://github.com/Freddis002" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github social-icon"></i>
    </a>
    <a href="https://www.linkedin.com/in/frédéric-dislaire/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin social-icon"></i>
    </a>
  </div>
</div>

  </div>
</div>
      {/* Copyright and legal mention */}
      <div className="footer-bottom">
        <p>Copyright © 2024 - Frédéric Dislaire.</p>
      </div>
    </footer>
  );
};

export default Footer;
