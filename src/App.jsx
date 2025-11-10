import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function Footer() {
  return (
    <footer className="mt-24 py-10 text-center text-white/70 border-t border-white/10 bg-black/40 backdrop-blur-2xl">
      © 2025 Rehan Shaik. All rights reserved.
    </footer>
  );
}

// Simple hash-based router without extra deps
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#home');
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash;
}

function Page({ route }) {
  if (route === '#about') return <About />;
  if (route === '#skills') return <Skills />;
  if (route === '#projects') return <Projects />;
  if (route === '#contact') return <Contact />;
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  const route = useHashRoute();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-300/30 selection:text-white">
      {/* Background glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] rounded-full blur-3xl opacity-25 bg-cyan-500" />
      </div>

      {/* Particle layer */}
      <ParticlesBackground />

      {/* Content layers */}
      <Navbar />
      <main className="relative z-10">
        <Page route={route} />
      </main>
      <Footer />
    </div>
  );
}
