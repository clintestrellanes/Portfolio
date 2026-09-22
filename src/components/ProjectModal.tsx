import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data/projectsData';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Tag, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-neutral-200 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 pb-4 flex items-start justify-between border-b border-neutral-100 bg-neutral-50/50">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {project.year}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight font-display">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-200/60 text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Embedded Media: Video Only or Image Only */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-lg">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  poster={project.fallbackPoster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.fallbackPoster}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Description and Key Innovations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-2">
              <div className="lg:col-span-2 space-y-4 text-sm sm:text-base leading-relaxed text-neutral-700">
                <h3 className="text-lg font-bold text-neutral-950">Architectural Synopsis</h3>
                <p>{project.fullDescription}</p>
                <p>{project.shortDescription}</p>

                <div className="pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                    Highlighted Engineering Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar metadata */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-5 text-xs">
                <div>
                  <span className="font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags
                      .filter((tag) => tag.toLowerCase() !== 'solo project')
                      .map((tag) => {
                        const isOnHold = tag.toLowerCase() === 'on hold';
                        return (
                          <span
                            key={tag}
                            className={`px-2.5 py-1 rounded-md border font-mono ${
                              isOnHold
                                ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold'
                                : 'bg-white border-neutral-200 text-neutral-800'
                            }`}
                          >
                            #{tag}
                          </span>
                        );
                      })}
                  </div>
                </div>

                {project.metrics && (
                  <div>
                    <span className="font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                      Performance / Impact
                    </span>
                    <span className="font-semibold text-neutral-900 text-sm">{project.metrics}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-950 text-white font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Prototype</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-neutral-300 text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
