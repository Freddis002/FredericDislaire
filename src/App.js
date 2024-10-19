import React from 'react';
import './App.css';
import MenuHeader from './components/MenuHeader';
import Parcours from './components/Parcours';
import Experiences from './components/Experiences';
import Competences from './components/Competences';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section id='accueil'>
      <MenuHeader/>
      </section>
      <section id="parcours">
        <Parcours />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="competences">
        <Competences />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
