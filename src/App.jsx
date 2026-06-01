import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Accomplishments from './components/Accomplishments';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';

export default function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh' }}>
      {/* Global Interactive Elements */}
      <CosmicBackground />

      {/* Navbar */}
      <Header />

      {/* Main Single Page Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Accomplishments />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

