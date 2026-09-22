import React, { useState, useEffect } from 'react';
import { ShinyText } from './ShinyText';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Added justify-center here */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-center">
        
        {/* Section Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs font-medium text-neutral-600">
          <button
            onClick={() => scrollToSection('hero')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'hero'
                ? 'bg-neutral-100 text-neutral-950 font-bold'
                : 'hover:text-neutral-950 hover:bg-neutral-100/60'
            }`}
          >
            Intro
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'about'
                ? 'bg-neutral-100 text-neutral-950 font-bold'
                : 'hover:text-neutral-950 hover:bg-neutral-100/60'
            }`}
          >
            About & Tech
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'projects'
                ? 'bg-neutral-100 text-neutral-950 font-bold'
                : 'hover:text-neutral-950 hover:bg-neutral-100/60'
            }`}
          >
            Projects
          </button>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;