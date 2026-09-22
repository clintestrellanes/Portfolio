import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutTechSection } from './components/AboutTechSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ConnectModal } from './components/ConnectModal';
import { Footer } from './components/Footer';
import { Project } from './data/projectsData';
import { TechItem } from './components/TechLogos';

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'about' | 'projects'>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [selectedTechFilter, setSelectedTechFilter] = useState<TechItem | null>(null);

  // Scrollspy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const aboutElement = document.getElementById('about');
      const projectsElement = document.getElementById('projects');

      const aboutTop = aboutElement ? aboutElement.offsetTop - windowHeight * 0.4 : 600;
      const projectsTop = projectsElement ? projectsElement.offsetTop - windowHeight * 0.4 : 1400;

      if (scrollY >= projectsTop) {
        setActiveSection('projects');
      } else if (scrollY >= aboutTop) {
        setActiveSection('about');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTech = (tech: TechItem) => {
    if (selectedTechFilter?.id === tech.id) {
      setSelectedTechFilter(null);
    } else {
      setSelectedTechFilter(tech);
      // Smoothly scroll down towards projects to see filtered results
      const projectsElement = document.getElementById('projects');
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenConnect={() => setIsConnectOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1 w-full">
        {/* SECTION 1: Welcome SplitText animation -> transition to Portfolio + ShinyText Name + 2026 */}
        <HeroSection onScrollToNext={handleScrollToAbout} />

        {/* SECTION 2: Image 2 verbatim left side + "Lets Connect!" CTA + InfiniteSpiral of tech stack logos */}
        <AboutTechSection
          onOpenConnect={() => setIsConnectOpen(true)}
          onSelectTechForFilter={handleSelectTech}
          selectedTechId={selectedTechFilter?.id}
        />

        {/* SECTION 3: 3-column project showcase with looping video navigation previews & tags */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          selectedTechFilter={selectedTechFilter}
          onClearTechFilter={() => setSelectedTechFilter(null)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Let's Connect Dialog */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
    </div>
  );
}
