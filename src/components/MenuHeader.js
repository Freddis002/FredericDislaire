import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MenuHeader.css';

const MenuHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);  // Gérer le survol pour les images d'avatar
  const keywordRefs = useRef([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Ajouter la classe 'scrolled' au menu quand l'utilisateur scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation GSAP pour les mots-clés
  const addToRefs = (el) => {
    if (el && !keywordRefs.current.includes(el)) {
      keywordRefs.current.push(el);
    }
  };

  useEffect(() => {
    keywordRefs.current.forEach((keyword) => {
      gsap.fromTo(keyword, 
        { x: 0, y: 0, scale: 1 },
        {
          scale: 1.1,
          x: 10,
          y: -10,
          ease: 'power1.inOut',
          paused: true,
          duration: 0.3,
          repeat: 1,
          yoyo: true,
        }
      );

      keyword.addEventListener("mouseenter", () => {
        gsap.to(keyword, {
          scale: 1.2,
          x: 15,
          y: -10,
          duration: 0.4,
          ease: 'power1.inOut'
        });
      });

      keyword.addEventListener("mouseleave", () => {
        gsap.to(keyword, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: 'power1.inOut'
        });
      });
    });
  }, []);

  return (
    <header className="menu-header-container">
      {/* Menu section */}
      <div className={`menu-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <img src="/images/logo5.png" alt="Logo" className="logo" />
        </div>
        {/* Menu Burger */}
        <div className={`menu-burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        {/* Menu classique */}
        <ul className={`menu-list ${isOpen ? 'menu-list-open' : ''}`}>
        <li className="menu-item"><a href="#accueil">Accueil</a></li>
          <li className="menu-item"><a href="#parcours">Parcours</a></li>
          <li className="menu-item"><a href="#experiences">Expériences</a></li>
          <li className="menu-item"><a href="#competences">Compétences</a></li>
          <li className="menu-item"><a href="#portfolio">Portfolio</a></li>
          <li className="menu-item">
            <a href="https://github.com/Freddis002" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github social-icon"></i>
            </a>
          </li>
          <li className="menu-item">
            <a href="https://www.linkedin.com/in/frédéric-dislaire/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Avatar section avec hover */}
      <div 
        className="avatar-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="/image5.png"  // Remplace par le chemin correct
          alt="Avatar 1"
          className={`avatar ${hovered ? 'hidden' : ''}`}
        />
        <img
          src="/image6.png"  // Remplace par le chemin correct
          alt="Avatar 2"
          className={`avatar ${hovered ? 'visible' : ''}`}
          style={{ opacity: hovered ? 1 : 0 }}
        />
      </div>

      <h1 className="name name-top">Frédéric</h1>
      <h1 className="name name-bottom">Dislaire</h1>

      {/* Mots-clés avec GSAP */}
      <div className="keyword" ref={addToRefs} style={{ top: '25%', left: '72%' }}>E-commerce</div>
      <div className="keyword" ref={addToRefs} style={{ top: '45%', left: '65%' }}>Développement web</div>
      <div className="keyword" ref={addToRefs} style={{ top: '70%', left: '5%' }}>Communication</div>
      <div className="keyword" ref={addToRefs} style={{ top: '40%', left: '10%' }}>Marketing Digital</div>
    </header>
  );
};

export default MenuHeader;
