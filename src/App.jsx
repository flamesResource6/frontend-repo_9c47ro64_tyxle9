import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="mt-24 py-10 text-center text-white/60 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      © 2025 Rehan Shaik. All rights reserved.
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-300/30 selection:text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] rounded-full blur-3xl opacity-20 bg-cyan-500" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
