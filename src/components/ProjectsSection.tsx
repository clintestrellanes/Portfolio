import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Project, PROJECTS_DATA } from '../data/projectsData';
import { ProjectVideoPreview } from './ProjectVideoPreview';
import { ExternalLink, Github, Filter, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { TechItem } from './TechLogos';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  selectedTechFilter?: TechItem | null;
  onClearTechFilter?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  selectedTechFilter,
  onClearTechFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Solo Projects', 'Web App', 'AI / Data'];

  // Filter projects based on category or selected tech tag from Section 2
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Tech filter from Section 2 InfiniteSpiral
      if (selectedTechFilter) {
        const matchesTech =
          project.techStack.includes(selectedTechFilter.id) ||
          project.tags.some(
            (t) =>
              t.toLowerCase().includes(selectedTechFilter.id.toLowerCase()) ||
              t.toLowerCase().includes(selectedTechFilter.name.toLowerCase())
          );
        if (!matchesTech) return false;
      }

      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Solo Projects' || selectedCategory === 'Solo Project') {
          const isSolo =
            project.isSolo === true ||
            project.category === 'Solo Project' ||
            project.tags.some((t) => t.toLowerCase() === 'solo project' || t.toLowerCase() === 'solo');
          if (!isSolo) return false;
        } else if (selectedCategory === 'Web App') {
          const isWeb =
            project.category === 'Web App' ||
            project.id === 'toothalie-clinic-suite';
          if (!isWeb) return false;
        } else if (project.category !== selectedCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTechFilter]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#FAFAFA] text-[#111111] px-6 sm:px-12 lg:px-16 py-20 border-t border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-display">
              Projects.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl">
              Each showcase features a continuous looping capture navigating the active interface,
              followed by architectural notes and stack composition.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tech Stack Filter Banner (Triggered when user clicks tech in Section 2 Spiral) */}
        {selectedTechFilter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-3.5 px-4 rounded-2xl bg-neutral-900 text-white flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-2.5 text-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>
                Filtered by tech stack from 3D Spiral:{' '}
                <strong className="underline underline-offset-4 decoration-amber-400 font-bold">
                  {selectedTechFilter.name}
                </strong>
              </span>
            </div>
            <button
              onClick={onClearTechFilter}
              className="flex items-center gap-1 text-xs font-mono text-neutral-300 hover:text-white px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              <span>Reset filter</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}

        {/* 3-COLUMN PROJECT CARDS GRID (as requested in prompt) */}
        {filteredProjects.length === 0 ? (
          <div className="w-full py-20 text-center bg-white rounded-3xl border border-dashed border-neutral-300">
            <p className="text-neutral-500 text-sm">No projects found matching the active filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                onClearTechFilter?.();
              }}
              className="mt-4 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(idx * 0.06, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col bg-white rounded-3xl p-5 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-neutral-300 transition-[box-shadow,border-color] duration-300"
              >
                {/* V-Shape Flag Banner for Solo Projects */}
                {project.isSolo && (
                  <div
                    className="absolute top-0 right-6 z-20 pointer-events-none transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(20,50,20,0.28))' }}
                    title="Solo Project"
                  >
                    {/* Mounting bracket / pole */}
                    <div
                      className="w-[32px] h-[3px] rounded-full mx-auto relative z-10 -mb-[1px]"
                      style={{
                        background: 'linear-gradient(180deg, #4a4a52, #2b2b2f)',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
                      }}
                    />

                    {/* The V-Shape Flag */}
                    <div
                      className="relative w-[28px] h-[60px] flex flex-col items-center overflow-hidden"
                      style={{
                        background:
                          'linear-gradient(115deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 30%), linear-gradient(160deg, #37b24d 0%, #2f9e44 55%, #1f7a34 100%)',
                        clipPath: 'polygon(0 0, 100% 0, 100% 74%, 50% 100%, 0 74%)',
                      }}
                    >
                      {/* Subtle fabric weave texture */}
                      <div
                        className="absolute inset-0 opacity-25 pointer-events-none"
                        style={{
                          background:
                            'repeating-linear-gradient(100deg, rgba(255,255,255,0.18) 0 3px, rgba(0,0,0,0.12) 3px 6px)',
                          mixBlendMode: 'overlay',
                        }}
                      />

                      {/* The word SOLO fitting vertically */}
                      <div
                        className="relative z-10 flex flex-col items-center justify-center pt-2 gap-[2px] text-[#fbf3df] font-black text-[9.5px] font-mono tracking-widest select-none leading-none"
                        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}
                      >
                        <span>S</span>
                        <span>O</span>
                        <span>L</span>
                        <span>O</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 1. Loop Video Preview of Navigating the Project */}
                <div className="w-full mb-4">
                  <ProjectVideoPreview
                    videoUrl={project.videoUrl}
                    posterUrl={project.fallbackPoster}
                    title={project.title}
                    projectNumber={`0${idx + 1}`}
                    onOpenModal={() => onSelectProject(project)}
                  />
                </div>

                {/* 2. Project Title, Subtitle, & Year */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-neutral-950 tracking-tight group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400 flex-shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-neutral-500 mb-3">
                    {project.subtitle}
                  </p>

                  {/* 3. Short Description below video */}
                  <p className="text-sm leading-relaxed text-neutral-700 mb-5 flex-1 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* 4. Tags on the Body / Description Area */}
                  <div className="pt-4 border-t border-neutral-100 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags
                        .filter((tag) => tag.toLowerCase() !== 'solo project')
                        .map((tag) => {
                          const isOnHold = tag.toLowerCase() === 'on hold';
                          return (
                            <span
                              key={tag}
                              className={`text-[11px] font-mono px-2.5 py-1 rounded-md border transition-colors ${
                                isOnHold
                                  ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                                  : 'bg-neutral-100 text-neutral-800 border-neutral-200/80 hover:bg-neutral-200/80'
                              }`}
                            >
                              #{tag}
                            </span>
                          );
                        })}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                     

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View source repository"
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open live prototype"
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
