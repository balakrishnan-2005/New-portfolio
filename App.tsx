
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DevPulse from './components/DevPulse';
import EducationSection from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] selection:bg-blue-500/30">
      <CustomCursor />
      
      {/* Enhanced Premium Background Decor */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[60%] h-[40%] bg-purple-600/10 rounded-full filter blur-[140px] animate-blob animation-delay-4000"></div>
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <DevPulse />
        <Projects />
        <EducationSection />
        <Contact />
      </main>

      <Footer />

      {/* Enhanced Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-[55] p-4 bg-blue-600/80 backdrop-blur-md text-white rounded-2xl shadow-2xl transition-all duration-500 transform ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } hover:bg-blue-600 hover:scale-110 active:scale-95 border border-white/10`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;
