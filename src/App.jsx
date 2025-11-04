import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div id="portfolio-container">
      <Header />
      <Hero />
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;