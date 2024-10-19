import React from 'react';
import './Competences.css';

// Structure des compétences avec des chemins d'accès aux logos dans public/logos
const competencesData = {
  'Développement Web': [
    { name: 'HTML5', logo: '/logos/html.png' },
    { name: 'CSS3', logo: '/logos/css.png' },
    { name: 'React', logo: '/logos/react.png' },
    { name: 'WordPress', logo: '/logos/wp.png' },
    { name: 'Prestashop', logo: '/logos/prestashop.png' },
    {name: 'Woocommerce', logo: '/logos/woocommerce.png'},
  ],
  'Réseaux Sociaux & Marketing Digital': [
    { name: 'Meta', logo: '/logos/meta.png' },
    { name: 'LinkedIn', logo: '/logos/linkedin.png' },
    { name: 'TikTok', logo: '/logos/tiktok.png' },
    { name: 'Connectif', logo: '/logos/connectif.png' },
    { name: 'Brevo', logo: '/logos/brevo4.png' },
    { name: 'Stripo', logo: '/logos/stripo3.png' },
    { name: 'SEMrush', logo: '/logos/semrush2.png' },
    { name: 'Google Analytics', logo: '/logos/analytics.png' },
    { name: 'Ubersuggest', logo: '/logos/ubersuggest.png' },
   
  ],
  
  'Design & Création Visuelle': [
    { name: 'Adobe XD', logo: '/logos/adobexd.png' },
    { name: 'Canva', logo: '/logos/canva.png' },
    
  ],
  'Autres compétences': [
    { name: 'Chat GPT', logo: '/logos/chatgpt.png' },
    { name: 'Midjourney', logo: '/logos/midjourney.png' },
    { name: 'Gemini', logo: '/logos/gemini.png' },
    { name: 'Tally', logo: '/logos/tally.png' },
    { name: 'Airtable', logo: '/logos/airtable.png' },
    { name: 'Zapier', logo: '/logos/zapier.png' },
  ],

};

const Competences = () => {
  return (
    <div className="competences-container">
      <h2 className="competences-title">Mes compétences</h2>
      <div className="competences-grid">
        {Object.keys(competencesData).map((category, index) => (
          <div className="competence-card" key={index}>
            <h3 className="competence-category-title">{category}</h3> {/* Titre de la catégorie */}
            <div className="competence-list-grid">
              {competencesData[category].map((competence, idx) => (
                <div key={idx} className="competence-item">
                  <img src={competence.logo} alt={competence.name} className="competence-logo" />
                  <span>{competence.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
