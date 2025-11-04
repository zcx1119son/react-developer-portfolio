import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;